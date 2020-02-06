import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import Link from 'next/link'
import Meta from '../partials/seo-meta.js'
import PageContactSection from '../partials/page-contact-section.js'

class SeoProcess extends React.Component {


	static async getInitialProps(ctx) {		
		let url = ctx.req.headers.referer

	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){	  
		
		window.addEventListener('load', (e) => {
		  // Todo...

			for(var x = 0; x < document.querySelectorAll('.sectioned-info .section').length; x++ ){
				
				new Waypoint.Inview({
					  element: document.querySelectorAll('.sectioned-info .section')[x],
					  enter: function(direction) {

					  	
					  },
					  entered: function(direction) {				    				   			


					  },
					  exit: function(direction) {

					   	var new_id = this.element.id		    
					    
					    for(var px = 0; px < document.querySelectorAll('.linklist a').length; px++){
							document.querySelectorAll('.linklist a')[px].classList.remove('active')
					    }

					    console.log(new_id)
					    
					    let els = document.querySelectorAll("a[href='#website-audits']");
					    

					    // document.querySelectorAll('.linklist a[href="#'+ new_id +'"]').classList.add('active')
						if(document.querySelectorAll("a[href='#"+ new_id +"']").length > 0){							
							document.querySelectorAll("a[href='#"+ new_id +"']")[0].classList.add('active');
						}						
					  },
					  exited: function(direction) {
					    if(direction == 'down'){
					    	
					    }
					  }
				})	

			}			
	
		});
		
	}

	render() {
			
		return <div className="sectioned-info">
				
				<Meta 
					title="Our Proven SEO Process | Proper Noun"
					desc="Our SEO process takes a multi-pronged approach to search engine optimization. We focus on on-page optimization, off-page optimization and creating valuable content."
					canonical='https://www.propernoun.co/seo-process'					
				/>	
	
					<div className="linklist">
						<ul>			
							<li>
								<a href="#website-audits">
									Website Audits
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Page Speed Audit</a>
									</li>
									<li>
										<a href="">Technical SEO Audits</a>
									</li>
									<li>
										<a href="">Website Content Audit</a>
									</li>
									<li>
										<a href="">Off-Page SEO Audit</a>
									</li>
									<li>
										<a href="">Website Usability Audit</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#keyword-research">
									Keyword Research
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Topical Keyword Research</a>
									</li>
									<li>
										<a href="">Low-Hanging Fruit</a>
									</li>
									<li>
										<a href="">Competitive Gap Analysis</a>
									</li>
									<li>
										<a href="">Content Gap Analysis</a>
									</li>					
								</ul>
							</li>
							<li>
								<a href="#seo-strategy">
									SEO Strategy Development
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Keyword Strategy</a>
									</li>
									<li>
										<a href="">Content Strategy</a>
									</li>					
									<li>
										<a href="">Off-Page Optimization Strategy</a>
									</li>
									
								</ul>
							</li>
							<li>
								<a href="#on-page-optimization">
									On-Page Optimization
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Technical On-Page SEO</a>
									</li>
									<li>
										<a href="">Website Content Optimization</a>
									</li>													
								</ul>
							</li>
							<li>
								<a href="#content-creation">
									Content Creation & Publishing
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Topic Development</a>
									</li>
									<li>
										<a href="">Article Creation & Edits</a>
									</li>									
									<li>
										<a href="">Engineer Articles With TF*IDF</a>
									</li>										
									<li>
										<a href="">Optimize Articles With Content Optimization</a>
									</li>
									<li>
										<a href="">Content Publication</a>
									</li>													
								</ul>
							</li>
							<li>
								<a href="#off-page-optimization">
									Off-Page Optimization
								</a>
								<ul className="sublinks">
									<li>
										<a href="">Citation Building</a>
									</li>
									<li>
										<a href="">Social Profiles</a>
									</li>									
									<li>
										<a href="">Professional Directories</a>
									</li>										
									<li>
										<a href="">Press Releases</a>
									</li>
									<li>
										<a href="">Link Bait Development</a>
									</li>
									<li>
										<a href="">Blogger Outreach</a>
									</li>													
								</ul>
							</li>
							<li>
								<a href="#ongoing-campaigns">
									Ongoing Campaigns
								</a>				
							</li>
						</ul>		
					</div>
					
					<div className="section first-section" id="first-section">
						<div className="container">

							<h1 className="page-title-xl">Our SEO Process</h1>
							<h3 className="italic-text section-title-m">An Understanding of Our Approach <br /> To 
								Search Engine Optimization 
							</h3>
						
							<div className="orange-sep"></div>

							<p className="med">
								Search engine optimization can be a powerful tool in any businesses online marketing strategy. However, before engaging an SEO company, it’s important to understand what search engine optimization is and how it works.
							</p>
							
						</div>
					</div>

					<div className="section">

						<div className="container">		

							<div className="row">
								<div className="col-3-l col-12">
									<h2 className="section-title-l">What Is SEO?</h2>
								</div>

								<div className="col-9-l col-12">

									<p className="med">
										Search engine optimization is actually the combination of a variety of tactics and strategies, not just one specific “action”.  At a high level, a typical SEO campaign generally consists of publishing informative, valuable content, on-page optimization strategies, and off-page optimization strategies.  
									</p>

									<p className="topmargin-3 med">
										In order to get a better understanding of our approach to a typical SEO campaign, here’s a general breakdown of our SEO process.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Schedule A Strategy Session
									</a>

								</div>
							</div>	
							
							

						</div>

					</div>

					<div className="section full-height light" id="website-audits">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-process-website-audit.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Website Audits</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										We start every SEO campaign with a comprehensive SEO audit. Our SEO audit covers a few key areas - website page speed, website usability, technical optimization and website content optimization.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Request A Website Audit
									</a>
								</div>

								
							</div>


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Page Speed Audits</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Having a website that loads quickly is crucial if you plan to rank your website in the search engines. Page speed is best represented by two metrics - page fully loaded time and time-to-first-byte. 
									</p>

									<p>
										We analyze a number of factors that contribute to your websites page speed including image optimization, image scaling, server optimization, caching, CDN usage and much more. We then run these same analyses on all of your websites key page templates.
									</p>

									<p>
										Once we’ve completed our audits, we then compile a baseline report and a document detailing the required fixes and their implementation.
									</p>
								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Technical SEO Audit</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Next, we crawl your entire website looking for any and all technical optimization errors. This crawl looks for things like improperly configured meta tags, overuse of tags, any broken links or server errors, duplicate content errors, and much more.
									</p>

									<p>
										Once the initial audit is complete, we create a baseline report and begin analysis of the audit. If there are any crucial issues or errors that require immediate attention, we implement those changes immediately. We then generate an implementation document with all of the required fixes.

									</p>
								
								</div>

							</div>	
							
							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Website Content Audit</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										The next step in our SEO process is a full website content audit. Our content audit looks at a few key things - website architecture, website topical segmentation, keyword density, and thin content pages
									</p>
					
									<h3 className="section-title-s italic-text">Website Architecture</h3>
									<p>
										Once the initial audit is complete, we create a baseline report and begin analysis of the audit. If there are any crucial issues or errors that require immediate attention, we implement those changes immediately. We then generate an implementation document with all of the required fixes.

									</p>


									<h3 className="section-title-s italic-text">Topical Segmentation</h3>
									<p>
										We’ll also audit your content for topical segmentation. Topical segmentation deals with how you’ve organized the key topic or topics of your website content. We look at what the key topics are and how each of your pages and posts can be grouped within these topics.
									</p>

									<h3 className="section-title-s italic-text">Keyword Density & Thin Content</h3>
									<p>
										Finally, we audit the actual text content of each page. First, we’ll look at any pages that have “thin” content or missing content. A page with “thin” content would be one with fewer than 250 words of text content on it. Now ideally, a page would have a minimum of 500 words of content on it, but of course, this is not always practical. We also identify any pages that do not have any discernable text content on them. 
									</p>
									<p>
										Once we’ve completed our website content audits, we generate a report with our findings and any needed modifications. This report will also be used in our keyword research phase.
									</p>

								</div>
							</div>	
						</div>

					</div>



					<div className="section full-height" id="keyword-research">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-6">
										<img src={`${publicRuntimeConfig.imageUrl}/keyword-search.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Keyword Research</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Once we’ve completed our initial SEO audit we then begin our keyword research process. When compiling a list of viable, high-quality keywords we will be targeting, we use a variety of keyword research tactics.
									</p>
								

								</div>

								
							</div>


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Topical Keyword Research</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										We begin the keyword research process with general topical keyword research. We identify the key topic or topics for your website and generate a list of 30 - 40 potential keywords. 
									</p>

									<p>
										We then check these keywords for a variety of metrics including search volume, competition, and the average cost per click. We then look for any keywords that stand out as having a good combination of higher search volume, lower competition, and a high average cost per click. 
									</p>

									<p>
										Then, we isolate any keywords that may meet our criteria and move on to the next step of keyword research.
									</p>
								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Low Hanging Fruit Research</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Next, we will look at any low-hanging fruit keyword opportunities. Low-hanging fruit keywords are ones that your website ranks for somewhere in the top 30 results.  In many cases, most website owners do not even know just how many keywords Google assosicates with their website.  
									</p>

									<p>
										We begin by isolating any keywords that the client website ranks for in the top 30 results. Then, we run the same analysis from step one on each keyword, looking at search volume, competition, and CPC value.
									</p>
								
								</div>

							</div>	
							
							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Competitive Gap Analysis</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										One of the most informative keyword analyses we run is the competitive gap analysis. A competitve gap analysis looks at the keywords that your top competitors are ranking for and then compares them to the keywords that your website ranks for.  We then generate a list of all of the keywords that your site does not rank for.
									</p>
										
								</div>

							</div>

							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">4.</span> Content Gap Analysis</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Finally, we look at all of the keywords that your site is ranking for with under-optimized landing pages. We then generate a list of these keywords to be used when designing our content strategy. 
									</p>
										
								</div>

							</div>	

						
						</div>

					</div>


					
					<div className="section full-height light" id="seo-strategy">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-strategy-development.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">SEO Strategy Development</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Once we've completed our SEO audits, we then formulate an SEO strategy. Our SEO strategy development will cover all aspects of the upcoming SEO campaign including the website keyword strategy, a content creation strategy for the webiste, and off-page optimization strategies.
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-10">
								
									<h3 className="section-title-s italic-text">Keyword Strategy</h3>
									<p>
										We take a look at all of the various keyword opportunities that we uncovered during the research phase and create a list of target keywords. Depending on the campaign, the size of this list may vary. We then use this list for our initial content strategy and off-page optimization strategy. 
									</p>


									<h3 className="section-title-s italic-text">Content Strategy</h3>
									<p>
										Next, we use the results of our content gap analysis and our keyword strategy to design a content strategy.  The content strategy typically covers a wide variety of content types including blog articles, how-to posts, instruction guides, authority pages, sales pages and anything else that may be relevant to a client’s business or its audience.
									</p>

									<h3 className="section-title-s italic-text">Off-Page Optimization Strategy</h3>
									<p>
										Finally, we create a multi-tiered off-page optimization strategy that focuses on building authority, not just building links.  We identify appropriate business citations that are relevant to the website, authority sites to publish on, press releases topics, and foundation article topics to create. Finally, we’ll generate a list of 200 - 300 blogs and websites with strong organic traffic metrics to reach out to for backlink publication. 
									</p>	

									<a href="/contact" className="cta-link topmargin-3">
										Schedule A Strategy Session
									</a>			
							</div>	
						</div>
					</div>



					<div className="section full-height" id="on-page-optimization">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-5">
										<img src={`${publicRuntimeConfig.imageUrl}/on-page-optimization.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">On-Page Optimization</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Once all of the audit work and strategy work is completed, we implement our on-page optimization strategy. On-page optimization is the process of configuring a website and it’s pages so that they rank higher, for more relevant content in search engines.  On-page SEO actually boils down into two distinct categories though - technical on-page SEO and website content optimization. 
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-10">
								
								<h3 className="section-title-s italic-text">Technical On-Page SEO</h3>
								<p>
									Using the technical audits and our keyword strategy, we start on-page optimization with our technical updates. These updates include image optimziation, server modification, implementation of a CDN, and page speed modifications. This phase will also include the implementation and optimization of meta title tags, meta descriptions, social meta tags, schema tags and canonical tags.  
								</p>


								<h3 className="section-title-s italic-text">Website Content Optimization</h3>
								<p>
									Using the content strategy established in the first phase of the process we begin to optimize the website content. First, we begin by writing additional content for any of the “thin” content pages and then resubmit them to Google for indexing.  Next, we’ll create all of the pages that we had outlined in our content gap analysis. Finally, we’ll add to the content of any pages that we think can benefit from additional content.
								</p>				
								
								<a href="/contact" className="cta-link topmargin-3">
									Schedule A Strategy Session
								</a>

							</div>	


						</div>

					</div>


					<div className="section full-height light" id="content-creation">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-6">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-copywriting.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Content Creation & Publishing</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										The most important aspect of any ongoing SEO campaign will be ongoing content creation and publication. Writing content engineered for performance in the search engines involves a lot more than publishing 500 words on a topic.  Our approach to content creation is actually multi-faceted.
									</p>
								</div>

								
							</div>


							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Topic Development</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										First, we develop a broad list of content topics using our keyword strategy. We then review the topics with the client and get approval for article direction.  From here we can begin planning our content writing. 

									</p>

								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Article Creation & Edits</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Before writing our articles, we’ll first identify a focus keyword and a series of contextually related keywords to be used throughout our article.  Each article that we write has a minimum of 1000 words, however, we plan for whatever length is necessary to compete.  We then go through two to three rounds of edits for spelling and grammar before moving to article optimization.
									</p>

								</div>

							</div>	
							
							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Engineer Articles With TF*IDF</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Once our article has been proofed and edited, we then run a TF*IDF scan on it. TF*IDF stands for “term frequency multiplied by inverse document frequency” and it’s a statistic that can be used to understand how important a word is within a collection of documents.  TF*IDF is very popular with search engines as a means of content retrieval and indexing. 
									</p>

									<p>
										We utilize our TF*IDF scan to identify the ideal amount of usage for our given focus keyword, as well as the ideal usage for contextually related keywords. We then modify the content of the article to be in line with these ideal keyword density volumes.
									</p>

									<p>
										If you’d like to learn more about our approach to TF*IDF, <a clas="text-link" href="https://www.propernoun.co/articles/creating-articles-engineered-for-seo-with-tfdf">you can read a more in-depth article here</a>. 
									</p>
										
								</div>

							</div>

							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">4.</span> Contextual Content Optimization</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										The final step in our content creation process is optimizing the content for code best practices and organization.  We first identify the goal density for our keywords within various elements like H2 elements and paragraph elements.  We then perform another round of edits to make sure that our focus keyword and contextually related keywords are properly spread across all relevant elements. 
									</p>
										
								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-m col-4-s col-12">
									<h3 className="section-title-m"><span className="number">5.</span> Content Publication</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Once we’ve completed all of the content for an upcoming month, we then establish a publication schedule. We always like to drip the content out on a regular schedule, whether it be daily, weekly, or bi-weekly. We also time our internal article syndication tactics, social media sharing tactics and any other tactics used to increase the visibility of these articles around these schedules.  
									</p>
										
								</div>

							</div>	

						
						</div>

					</div>

					
					<div className="section full-height" id="off-page-optimization">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/off-page-optimization.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Off-Page Optimization</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										While some companies may call this process “link-building”, we call it off-page optimization because we believe there’s a lot more to it than just building links. The real goal of off-page optimization is to increase the authority of a website for a topic or topics, not just to amass a bunch of backlinks.  So as a result, we focus on building a strong link profile for every website, depending on what kind of links would make that website more authoritative - not just links with certain metrics like high Domain Authority. 
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-10">
								
									<h3 className="section-title-s italic-text">Citation Building</h3>
									<p>
										Citation building campaigns focus on optimizing the websites citation profiles and local listing profiles. Citations are one of the primary ranking factors that Google considers when deciding local search results. Other factors being equal, businesses with a greater number of citations will probably rank higher than businesses with fewer citations. Citation building also has similar benefits to e-commerce websites.
									</p>
							
									<p>
										Citation building includes listing and directory websites like Yelp, Local.com, BOTW.com, and more than 100 others. We start by creating a singular profile model for your business and then create profiles on as many relevant citations as possible. We also look at existing citations you may have and fix any inccorect information and suppress duplicate information.   
									</p>

									<h3 className="section-title-s italic-text">Social Profiles</h3>
									<p>
										Creating social media profiles are another excellent way to increase the visibility and authority of your website online. Sure, most businesses have a Facebook, Twitter, and Instagram, but how about a Behance.net account? A Quora account? A Vox.com account? There are literally hundreds of social websites and online communities out there that allow you to create a free, public profile. By creating basic profiles with information about your business and links back to your website, you’re only further increasing the visibility and trust of your website online.
									</p>

									<h3 className="section-title-s italic-text">Professional Directories</h3>
									<p>
										Similar to citation building, we will also search out and list your business on professional directories and professional website communities. Depending on the profession or industry there may be as few as 1 or as many as 100 professional websites that we can list your website on. By creating listings for your website across all of these directories we add another layer of authority building citations for your website.
									</p>	

									<h3 className="section-title-s italic-text">Press Releases</h3>
									<p>
										Publishing press releases is an excellent way to spread visibility for your business and brand name online when they are relevant.  By syndicating your press release to hundreds of outlets that then index the press release, you’re actually receiving a few benefits. One, any news outlets or media channels that pick up the press release will likely link back to your website. Second, any press release websites indexing your press release just further increase your brand visibility online.
									</p>	

									<h3 className="section-title-s italic-text">Link Bait Development</h3>
									<p>
										In many scenarios there are opportunities to build what are called link bait or link magnets. These are either online tools, website badges, free images, or some other piece of content that is given away for free in exchange for a link back to your website. 
									</p>	

									<p>
										For example, a brand that sells eco-friendly products may create a special “Certified Green” badge that can be placed on other websites. They can then reach out to businesses and brands that have an environmentally friendly focus, and suggest they place the badge somewhere on their website as another form of social proof. Each time a badge is placed on a new website, a new backlink will be built to your website.
									</p>

									<h3 className="section-title-s italic-text">Blogger Outreach</h3>
									<p>
										The last tactic in our off-page optimization utility belt is organic blogger outreach. We start by identifying a large group of websites and blogs that are within a relevant category or industry.  Next, we will either prepare a list of “pitch topics” or write spec articles for outreach. Once we have the pitch formalized and our outreach list solidified, we begin to contact website owners and blog owners about publishing the content. 
									</p>				
									<p>
										When it comes to blogger outreach, our mantra is always quality over quantity.  A clean backlink profile with no toxic backlinks is the most important thing when it comes to building website authority.  

									</p>


									<a href="/contact" className="cta-link topmargin-3 bottommargin-5">
										Schedule A Strategy Session
									</a>

							</div>	
						</div>
					</div>

					<div className="section light" id="ongoing-campaigns">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-5">
										<img src="/static/images/seo-ongoing-campaigns.png" alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Ongoing Campaigns</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Once we’ve completed our full SEO process for a clients website, we then begin an ongoing SEO campaign process until the client decides to discontinue services. These campaigns are generally a continuation of the same content creation, content syndication, and off-page optimization tactics that we have employed in the initial phases of our SEO process. 
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-10">
								
								<div className="col-6-l col-6-m col-12">
									<p>
										Our team will also begin to investigate and create various types of content to complement your article and page content. For example, free how-to videos and free e-books can be very effective in what’s called “Viral Hacking”. By offering these materials for nothing more than the price of a Facebook share or Twitter tweet, you can quickly rack up thousands of organic social signals.
									</p>
								</div>
								
								<div className="col-6-l col-6-m col-12">
									<p>
										Finally, we continuously introduce new keywords and keyword groups, create and optimize new keyword landing pages, and target new audience opportunities. The wider that we can expand the content base and the more keywords we are able to target, the more highly qualified traffic we are able to drive to our client’s websites.
									</p>
								</div>			
									
							</div>	


						</div>

					</div>
					

					<div className="section">
						<div className="container">
							<div className="med-wrap text center">
								<h2 className="section-title">Starting An SEO Campaign</h2>

								<div className="orange-sep centered"></div>

								<p>
									If you’re interested in driving more engaged traffic to your website using <a href="/services/search-engine-optimization">search engine optimization</a>, you’ve come to the right place. Proper Noun offers best practice SEO services and full service SEO campaigns to established local businesses, e-commerce companies, brands and international business. We’ve worked with brands and businesses of all sizes to create valuable content, improve search engine rankings and drive more targeted traffic. If you’d like to speak to one of our team members about starting an SEO campaign contact us today.
								</p>

								<div className="buttons center topmargin-6">
									<a href="/contact" className="btn proper-btn blue">
										Schedule A Strategy Session
									</a>
								</div>
							</div>
						</div>
					</div>
					<PageContactSection />
				</div>
	}
}


export default SeoProcess;


