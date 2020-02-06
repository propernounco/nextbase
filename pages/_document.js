import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Router from 'next/router'
import Header from '../partials/header.js'
import Footer from '../partials/footer.js'
import FooterSchema from '../partials/footer-schema.js'
import NavOverlay from '../partials/nav-overlay.js'
import fetch from 'isomorphic-unfetch'


export default class ProperSite extends Document {

  static async getInitialProps (ctx){
    const initialProps = await Document.getInitialProps(ctx)
    let show_white = ['/portfolio', '/services', '/contact', '/agency-services', '/portfolio', '/articles', '/seo-services' ]
    let cur_path = ctx.asPath;
    // let cur_path = ctx.req.headers.referer;
    initialProps.headerWhite = '';
    show_white.map(pagePath => {
      if(cur_path.indexOf(pagePath) > -1 ){
        if(cur_path.split(/\/(?=.)/).length > 2 && cur_path.indexOf('articles') > -1){
          
        }
        else{
          initialProps.headerWhite = 'white';
        }
    }
    // if(cur_path == pagePath){
    //   initialProps.headerWhite = 'white';
    // }
    })
    return initialProps
  }
  
  render () {

  
  return (
  <html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <link href="/static/css/proper-styles.css" rel="stylesheet" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />        
    </Head>
    <body>
      <div className="root">
        
        <header className={`header opaque fade-in animation-long ${this.props.headerWhite}`}>
          <Header />
            <div id="header-trigger"></div>
            
            <NavOverlay />
              
            </header>
            
            <Main />
              <NextScript />
              
              <Footer />
              </div>
              
              <script defer async src="/static/dist/js/proper-js.dist.js"></script>
                            
              <FooterSchema />
                <link rel="stylesheet" href="https://use.typekit.net/nzr0liz.css" />
              </body>
            </html>
      )
    }
}