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
  
    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handle(req, res);
    });

    server.get('/static/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handle(req, res);
    });

   
    //dynamic path example
    server.get('/owners/:slug', (req, res) => {
      const templatePage = '/single-property-owner'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/entity/:slug', (req, res) => {
      const templatePage = '/single-entity'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/units/:id', (req, res) => {
      const templatePage = '/property-units'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/unit/:slug', (req, res) => {
      const templatePage = '/single-unit'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/properties/:slug', (req, res) => {
      const templatePage = '/properties'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/property/:slug', (req, res) => {
      const templatePage = '/single-property'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/property/:slug/details', (req, res) => {
      const templatePage = '/single-property-information'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/inspections/:id', (req, res) => {
      const templatePage = '/property-inspections'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/inspection/:slug', (req, res) => {
      const templatePage = '/single-inspection'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/inspection/:slug/questions', (req, res) => {
      const templatePage = '/single-inspection-list'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })
  
    server.get('/work-orders/:id', (req, res) => {
      const templatePage = '/single-property-work-orders'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/work-orders/:slug/details', (req, res) => {
      const templatePage = '/single-work-order'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/property-media/:id', (req, res) => {
      const templatePage = '/property-media'
      const queryParams = { title: req.params.slug }
        app.render(req, res, templatePage, queryParams)      
      // return renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        /* serving page */        
        //If page shouldn't be cached run it here
        if(req.params[0] == '/articles' || req.params[0] == '/seo-campaign-packages'){          
          return handle(req, res)        
        }
        else{
          // return renderAndCache(req, res)
          return handle(req, res)        
        }

        
    });
  
    //API Post Example
    // server.post('/api/submit-contact-form', upload.none(), (req, res) => {
    //     // console.log(res.body)        
    //     request.post('http://cms.propernoun.co/wp-json/proper/v1/test-form-entry', {form: req.body }, function(err, httpResponse, body){
    //       if(err){
    //         console.log(err)
    //         return res.send(JSON.stringify(err));
    //       }
    //       else{
    //         if(parseInt(body) == 1){
    //           console.log('succcesss')
    //           return res.send(JSON.stringify(body));
    //         }
    //         else{
    //           console.log('something else')
    //           return res.send(JSON.stringify(err));
    //         }
    //       }
    //     })
        
    // })

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