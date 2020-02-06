// server.get('/articles/:slug', (req, res) => {
//   return app.render(req, res, '/articles', { slug: req.params.slug });
// });
const LRUCache = require('lru-cache');

const express = require('express')
const next = require('next')
const slash   = require('express-slash');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const http = require('http');
const connect = require('connect');
const request = require('request');

// const formidableMiddleware = require('express-formidable');
const bodyParser = require('body-parser');
const multer  = require('multer');
let upload = multer()

const robotsOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};

// const jsonParser = bodyParser.json();

const resourceFolder = './static/pdfs/';

const find = require('find');

// const formidableMiddleware = require('express-formidable');
const ssrCache = new LRUCache({
    max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
    length: function (n, key) {
        return n.length
    },
    maxAge: 1000 * 60 * 60 * 24 * 30
});


app  
  .prepare()
  .then(() => {
    const server = express()

    // server.use(bodyParser.urlencoded({ extended: false }))

    server.use(function (req, res, next) {
      
      if (req.hostname !== 'localhost' && req.host.indexOf("www.") !== 0) {
        res.redirect(301, req.protocol + "://www." + req.hostname + ":80" + req.originalUrl);        
      } else {
        next();
      }
    });

    server.use(function(req, res, next) {
        if (req.path.substr(-1) == '/' && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(301, req.path.slice(0, -1) + query);
        } else {
            next();
        }
    });

    server.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    server.use(bodyParser.json())

    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', robotsOptions)
    ));

  
    const sitemapOptions = {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
      }
    };
    server.get('/sitemap.xml', (req, res) => (
      res.status(200).sendFile('sitemap.xml', sitemapOptions)
    ));
  
    server.get('/tools/custom-post-type-generator', (req, res) => {
        res.redirect(301, 'https://cpt-generator.propernoun.co')
        return;
    })

    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handle(req, res);
    });

    server.get('/static/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handle(req, res);
    });

    server.get('/show-resources', (req, res) => {
    
      let files = find.file(resourceFolder, function(files) {
                     return res.send(JSON.stringify(files));
                  })        

    })

	  server.get('/articles/:slug', (req, res) => {

      // if(!isNaN(req.params.slug)){
      //   // return 'doodoo';
      //   const actualPage = '/articles'
      //   const queryParams = { title: 'Articles' }
      //   //app.render(req, res, actualPage, queryParams)
      //   return renderAndCache(req, res, actualPage, queryParams)
      // }
      // else{
        const actualPage = '/single-article'
        const queryParams = { title: req.params.slug }
        // app.render(req, res, actualPage, queryParams)
        return renderAndCache(req, res, actualPage, queryParams)
      //}
      
    })

    server.get('/services/:slug', (req, res) => {
      const actualPage = '/single-service'
      const queryParams = { title: req.params.slug }
      // app.render(req, res, actualPage, queryParams)      
      return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/case-studies/:slug', (req, res) => {
      const actualPage = '/single-case-study'
      const queryParams = { title: req.params.slug }
      app.render(req, res, actualPage, queryParams)    
      // return renderAndCache(req, res, actualPage, queryParams)  
    })

    server.get('/portfolio/:slug', (req, res) => {
      const actualPage = '/single-portfolio'
      const queryParams = { title: req.params.slug }
      //app.render(req, res, actualPage, queryParams)    
      return renderAndCache(req, res, actualPage, queryParams)  
    })

    server.get('/web/:slug', (req, res) => {
      const actualPage = '/web-services-lander'
      const queryParams = { title: req.params.slug }
      //app.render(req, res, actualPage, queryParams)    
      return renderAndCache(req, res, actualPage, queryParams)  
    })

    server.get('/seo/:slug', (req, res) => {
      const actualPage = '/seo-services-lander'
      const queryParams = { title: req.params.slug }
      //app.render(req, res, actualPage, queryParams)    
      return renderAndCache(req, res, actualPage, queryParams)  
    })
  
    server.get('/marketing/:slug', (req, res) => {
      const actualPage = '/marketing-services-lander'
      const queryParams = { title: req.params.slug }
      //app.render(req, res, actualPage, queryParams)    
      return renderAndCache(req, res, actualPage, queryParams)  
    })

    

    server.get('*', (req, res) => {
        /* serving page */        

        if(req.params[0] == '/articles' || req.params[0] == '/seo-campaign-packages'){
          console.log('yee')
          return handle(req, res)        
        }
        else{
          return renderAndCache(req, res)
        }

        
    });
  
    // server.get('*', (req, res) => {    	
    //   	return handle(req, res)
    // })

    // server.get('/_next/*', (req, res) => {
    //      // serving _next static content using next.js handler 
    //     handle(req, res);
    // });

    // server.get('*', (req, res) => {
    //      serving page 
    //     return renderAndCache(req, res)
    // });


    server.post('/api/submit-contact-form', upload.none(), (req, res) => {
        // console.log(res.body)        
        request.post('http://cms.propernoun.co/wp-json/proper/v1/test-form-entry', {form: req.body }, function(err, httpResponse, body){
          if(err){
            console.log(err)
            return res.send(JSON.stringify(err));
          }
          else{
            if(parseInt(body) == 1){
              console.log('succcesss')
              return res.send(JSON.stringify(body));
            }
            else{
              console.log('something else')
              return res.send(JSON.stringify(err));
            }
          }
        })
        
    })

    server.listen(3000, err => {
      if (err) throw err
      	console.log('oook dododo')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })


function getCacheKey(req) {
    return `${req.path}`
}

async function renderAndCache(req, res, actualPage = req.path, queryParams = req.query) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        //console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key));
        return
    }

    try {
        //console.log(`key ${key} not found, rendering`);
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, actualPage, queryParams);

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        // Let's cache this page
        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, actualPage, queryParams)
    }
}