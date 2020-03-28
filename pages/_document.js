import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Router from 'next/router'
import Header from '../partials/header.js'
import Footer from '../partials/footer.js'
import fetch from 'isomorphic-unfetch'



export default class TciiApp extends Document {

  static async getInitialProps (ctx){
    const initialProps = await Document.getInitialProps(ctx)
    let cur_path = ctx.asPath;        
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
      <link href="https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700,900&display=swap" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.ico" />
      <link href="/static/css/tciiapp-styles.css" rel="stylesheet" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />        
    </Head>
    <body>
      <div className="root">        
        <header className="header">
            <Header />           
            <div className="nav-menu">
              <ul>
                <li>
                  <Link href="/property-owners">
                    <a>Property Owners</a>
                  </Link>
                </li>
                <li>
                  <Link href="/properties">
                    <a>Properties</a>
                  </Link>                  
                </li>
                <li>
                  <Link href="/property-inspections">
                  <a>Inspections</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-work-orders">
                  <a>Work Orders</a>
                  </Link>
                </li>
                <li>
                  <Link href="/property-media">
                  <a>Property Media</a>
                  </Link>
                </li>
                <li>
                  <Link href="/reports">
                    <a>Reports</a>
                  </Link>
                </li>                
              </ul>
            </div>            
        </header>            
        <Main />
        <NextScript />
        <Footer />
      </div>              
                  
      <script defer src="/static/dist/js/tciiapp-js.dist.js"></script>
    </body>
  </html>
      )
    }
}