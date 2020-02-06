//import Link from 'next/link'
import getConfig from 'next/config'

import Link from 'next-data-link';

// import Link from 'data-prefetch-link'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const NavOverlay = () => (	    				
	<div className="nav-overlay" id="nav-overlay">
	

  <div className="close">
    <a href="" id="close-nav"><img src={`${publicRuntimeConfig.imageUrl}/close-icon.png`} alt="close-nav" /></a>
  </div>
  
  <div className="portfolio">    
  
    <a href="/portfolio/officecrave-com" className="go-link item">          
        <div className="project-title">
          <h3>OfficeCrave.com</h3>
          <p className="small white">
            View This Project
          </p>
        </div>
        <img src="https://res.cloudinary.com/propernoun/image/upload/c_scale,w_420/q_auto:good,f_auto/office-crave-bg-4-1_myr3s1.jpg" width="420" height="240" alt="OfficeCrave.com" />
    </a>
    
    <Link href="/portfolio/hey-dude-shoes">
      <a className="go-link item">
          <div className="project-title">
            <h3>Hey Dude Shoes</h3>
            <p className="small white">
              View This Project
            </p>
          </div>
          <img width="420" height="240" src="https://res.cloudinary.com/propernoun/image/upload/c_scale,w_420/q_auto:good,f_auto/hd-grid-1_vyxw7l.jpg" alt="Hey Dude Shoes" />
      </a>
    </Link>
    

    <a href="/portfolio/everyday-stacks" className="go-link item">
        <div className="project-title">
          <h3>EveryDay Stacks</h3>
          <p className="small white">
            View This Project
          </p>
        </div>
        <img width="420" height="240" src="https://res.cloudinary.com/propernoun/image/upload/c_scale,w_420/q_auto:good,f_auto/full-stack-v1_pfijaa.png" alt="EveryDay Stacks" />
    </a>
  
    <a href="/portfolio/wolf-medical" className="go-link item">
        <div className="project-title">
          <h3>Wolf Medical Supply</h3>
          <p className="small white">
            View This Project
          </p>
        </div>
        <img width="420" height="240" src="https://res.cloudinary.com/propernoun/image/upload/c_scale,w_420/q_auto:good,f_auto/wolfmed_digdng.png" alt="Wolf Medical" />
    </a>

  </div>
  <nav className="overlay-menu">

    <div className="first-nav-section">
        <Link prefetch href="/">
          <a className="logo" > 
              <img src="https://res.cloudinary.com/propernoun/image/upload/c_scale,w_300/q_auto:good,f_auto/pn-white.png" alt="fort lauderdale web design" />
          </a>
        </Link>      
        
        <ul className="flex left flex-center flex-column">        
          <li>
            <Link prefetch href="/services/web-design">
              <a className="parent-link">Web Design</a>
            </Link>            
            
            <ul className="sublinks">
              <li>
                <Link prefetch  href="/services/web-design">
                  <a>Web Design</a>
                </Link> 
              </li>
              <li>
                <Link prefetch  href="/web-design-process">
                  <a>Our Web Design Process</a>
                </Link> 
              </li>              
              <li>
                <Link prefetch href="/services/wordpress-web-design">
                  <a>WordPress Web Design</a>   
                </Link>
              </li>
              <li>
                <Link prefetch href="/web/responsive-web-design">
                  <a>Responsive Web Design</a>   
                </Link>
              </li>                      
              <li>
                <Link prefetch href="/articles/custom-wordpress-theme">
                  <a>Custom WordPress Themes</a>   
                </Link>
              </li>              
              <li>
                <Link prefetch href="/articles/squarespace-vs-wordpress">
                  <a>Squarespace vs WordPress</a>   
                </Link>
              </li>
            </ul>

          </li>
          <li>
            <Link prefetch  href="/services/ecommerce-web-design">
              <a className="parent-link">E-Commerce Web Design</a>
            </Link>        

            <ul className="sublinks">
              <li> 
                <Link prefetch  href="/services/ecommerce-web-design">
                  <a>E-Commerce Web Design</a>
                </Link>     
              </li>
              <li>
                <Link prefetch href="/bigcommerce-web-design-company">
                  <a>BigCommerce Web Design</a>   
                </Link>
              </li>
              <li>
                <Link prefetch href="/services/magento-website-design">
                  <a>Magento Web Design</a>   
                </Link>
              </li>
              <li>
                <Link prefetch href="/articles/bigcommerce-vs-shopify-comparison">
                  <a>BigCommerce vs. Shopify</a>   
                </Link>
              </li>
              <li>
                <Link prefetch href="/articles/bigcommerce-vs-magento-how-do-they-stack-up">
                  <a>BigCommerce vs. Magento</a>   
                </Link>
              </li>
            </ul>    
          </li>  
          
          <li>
            <Link prefetch  href="/seo-services"> 
              <a className="parent-link">SEO Services</a>
            </Link>
            <ul className="sublinks">
              <li>
                <Link prefetch  href="/seo-services"> 
                  <a>SEO Services</a>
                </Link>
              </li> 
              <li>
                <Link prefetch  href="/seo/seo-campaigns"> 
                  <a>SEO Campaigns</a>
                </Link>
              </li>              
              <li>
                <Link prefetch  href="/seo-process"> 
                  <a>Our SEO Process</a>
                </Link>            
              </li>    
              <li>
                <Link prefetch href="/articles/creating-articles-engineered-for-seo-with-tfdf">
                  <a>Our Approach To Article Writing</a>   
                </Link>
              </li>

              <li>
                <Link prefetch href="/seo/seo-website-audits">
                  <a>SEO Website Audits</a>   
                </Link>
              </li>

              <li>
                <Link prefetch href="/seo/on-page-optimization">
                  <a>On-Page Optimization</a>   
                </Link>
              </li>

              <li>
                <Link prefetch href="/seo/content-writing">
                  <a>Content Writing</a>   
                </Link>
              </li>

              <li>
                <Link prefetch href="/seo/local-citation-building-service">
                  <a>Local Citation Building</a>   
                </Link>
              </li>


            </ul>            
          </li>              

          <li>
            <Link prefetch href="/services/app-development">
              <a className="">Web & App Development</a>
            </Link>            

            {/*<ul className="sublinks">*/}

              {/*<li>
                <Link prefetch  href="/seo-services"> 
                  <a >Custom Web Applications</a>
                </Link>
              </li>*/}             
              {/*<li>
                <Link href="/">
                  <a>Custom WordPress Plugins</a>   
                </Link>
              </li> */}
              {/*<li>
                <Link href="/">
                  <a>Custom Magento Extensions</a>   
                </Link>
              </li> */}

              {/*<li>
                <Link prefetch  href="/seo-process"> 
                  <a>React Applications</a>
                </Link>            
              </li>    
              <li>
                <Link href="/articles/creating-articles-engineered-for-seo-with-tfdf">
                  <a>NodeJS Web Development</a>   
                </Link>
              </li>*/}
              

            {/*</ul>*/}
          </li>        
          
          <li>
            <Link prefetch href="/services/branding-ux">
              <a>Branding & UX Design</a>
            </Link>            
          </li> 

          <li>
            <Link prefetch href="/portfolio">
              <a>Our Portfolio</a>
            </Link>            
          </li>    
          <li>
            <Link prefetch href="/agency-services">
              <a>All Services</a>
            </Link>            
          </li>                
        </ul>

    </div>


    <div className="second-nav-section">
        <div className="secondary-links">
            <Link prefetch  href="/about">
              <a className="go-link">Who We Are</a>    
            </Link>
            <Link prefetch  href="/articles"><a className="go-link">News &amp; Articles</a></Link>
            <a href="/contact" className="go-link">Contact</a>
            <a href="" className="download-deck">Download SEO Deck</a>
          </div>
    </div>
    
  </nav>

</div>
)

export default NavOverlay; 