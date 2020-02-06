import Link from 'next/link'
import getConfig from 'next/config'

import Modal from './modal'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const Footer = () => (
<div className="footer">
  
  <div className="container">
    <div className="row">
      
      <div className="col-4-m col-12 left-side">
        <a href="/" className="logo">
          <img className="light" src={`${publicRuntimeConfig.imageUrl}/pn-white.png`} alt="proper noun - creative agency" />          
        </a>
        <p className="footer-about">
          Proper Noun is a boutique web design company located in <a href="/web/fort-lauderdale-web-design">Fort Lauderdale, FL</a>. Proper Noun provides branding, web design, web development, SEO and digital marketing services.
        </p>
        <div className="social-icons">
          <a aria-label="facebook" href="https://www.facebook.com/propernounco" className="med" >
            <i className="fi-social-facebook"></i>
          </a>
          <a aria-label="instagram" href="https://www.instagram.com/propernounco" className="med">
            <i className="fi-social-instagram"></i>
          </a>
          <a aria-label="youtube" href="https://www.youtube.com/channel/UCirbErckJolj1iXQsQJ9c1g" className="med">
            <i className="fi-social-youtube"></i>
          </a>
        </div>
      </div>
      <div className="col-8-m col-12 topmargin-8-t">
        <div className="row footer-links">
          
          <div className="col-5-l col-12 arrow-links">
            
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/portfolio">Our Portfolio</a>
            <a href="/services/web-design">Web Design</a>
            <a href="/services/ecommerce-web-design">E-Commerce Web Design</a>
            <a href="/services/branding-ux">Branding & UX Design</a>
            <a href="/seo-services">SEO Services</a>
            <a href="/services/digital-marketing">Digital Marketing</a>
            <a href="/agency-services">All Services</a>
          </div>
          
          <div className="col-4-l col-6-m col-6-s col-6 col-12-mobile">
            <h3>Our Studio</h3>
            <address>
              Proper Noun <br />
              
            <span dangerouslySetInnerHTML={ {__html: publicRuntimeConfig.address } } />    
              
            </address>
              <a rel="noreferrer" href="https://www.google.com/maps/place/300+SW+1st+Ave+%23155,+Fort+Lauderdale,+FL+33301/@26.119435,-80.1470585,17z/data=!3m1!4b1!4m5!3m4!1s0x88d900f85f5bdae9:0xc58e3bd69131809e!8m2!3d26.1194302!4d-80.1448645" target="_blank" className="flex contact-info underline-link">
                <i className="fi-web"></i>  
                <span>
                  Get Directions
                </span>
              </a>
            
            <h3 className="topmargin-5">Hours</h3>
            <p>Mon - Fri 9:00 AM - 5:00 PM</p>
            
          </div>
          <div className="col-3-l col-6-m col-6-s col-6 col-12-mobile">
            <h3>Let's Talk</h3>
            <a aria-label="phone" href="tel:+19546741258" className="flex contact-info">
              <i className="fi-telephone"></i>
              <span>
                954.674.1258
              </span>
            </a>
            <a href="mailto:hello@propernoun.co" className="flex contact-info">
              <i className="fi-mail"></i>
              <span>
                hello@propernoun.co
              </span>
            </a>
            <div className="map footer-map" >
              <iframe title="Proper Noun location - 300 SW 1st Avenue, #155 Fort Lauderdale, FL 33301" async src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3714170866215!2d-80.14705854894694!3d26.119430183394652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900f85f5bdae9%3A0xc58e3bd69131809e!2s300+SW+1st+Ave+%23155%2C+Fort+Lauderdale%2C+FL+33301!5e0!3m2!1sen!2sus!4v1559266984916!5m2!1sen!2sus" width="240" height="180"  frameBorder="0" allowFullScreen></iframe>              
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div className="row topmargin-3 horizontal-links">
      <ul className="topmargin-3 flex flex-center">        
        <li>
          <a href="/articles">
            Articles
          </a>
        </li>
        <li>
          <a href="https://website-grader.propernoun.co">
            Website Grader
          </a>
        </li>
        <li>
          <a href="/contact" >
            Contact Us
          </a>
        </li>
        <li>
          <a href="/website-directory">Website Directory</a>
        </li>
        <li>
          <a href="/sitemap.xml">View Sitemap</a>
        </li>
      </ul>
    </div>
    <div className="text center topmargin-4">
      <p className="small no-margin white opacity-70">&copy; Proper Noun </p>
    </div>
  </div>
  


  <Modal id="seo-audit-modal">
    <img className="responsive-img illustration" src={`${publicRuntimeConfig.imageUrl}/dl-deck.jpg`} alt="digital marketing pdf" />
    <div className="text center">             
      <h2 className="section-title">Get Our E-Commerce SEO Penalty Recovery Case Study</h2>
      <h3 className="body-text topmargin-3">
        Enter Your Email Below And We'll Send You The Case Study PDF
      </h3>
      <form action="/" className="ui-form form-submit">         
        <div className="ui-input-contain topmargin-6">
          <input type="text" name="email" className="ui-input fluid deck-input" placeholder="Enter Your Email Address" /> 
          <input type="hidden" name="form_id" value="5" className="ui-input fluid form_id" />
          <button className="ui-submit">Submit</button> 
        </div>        
      </form>
    </div>
  </Modal>



  <Modal id="deck-modal">
    <img className="responsive-img illustration" src={`${publicRuntimeConfig.imageUrl}/dl-deck.jpg`} alt="digital marketing pdf" />
    <div className="text center">             
      <h2 className="section-title">Learn More About Our SEO Campaigns</h2>
      <h3 className="body-text topmargin-3">
        Enter Your Email Below And We'll Send You Our Latest SEO Campaign Deck
      </h3>
      <form action="/" className="ui-form form-submit">         
        <div className="ui-input-contain topmargin-6">
          <input type="text" name="email" className="ui-input fluid deck-input" placeholder="Enter Your Email Address" /> 
          <input type="hidden" name="form_id" value="5" className="ui-input fluid form_id" />
          <button className="ui-submit">Submit</button> 
        </div>        
      </form>
    </div>
  </Modal>

  


</div>
)

export default Footer