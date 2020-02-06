import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Meta from '../partials/seo-meta.js'
import Link from 'next/link'

class SeoProcess extends React.Component {

	componentDidMount(){
	  	
	  	console.log('mounted my dudes')
		
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
				title="Top Organic SEO Services | Proper Noun"
				desc="Proper Noun provides high quality, organic SEO services to local businesses, e-commerce websites, SAAS companies, and enterprise business. Schedule a free strategy session."
				canonical="https://www.propernoun.co/seo-services"				
			/>	
	
					<div className="linklist">
						<ul>			
							<li>
								<a href="#on-page">
									On-Page Optimization
								</a>				
							</li>
							<li>
								<a href="#keyword-research">
									Keyword Research
								</a>
								
							</li>
							<li>
								<a href="#content-creation">
									Content Creation
								</a>
								
							</li>
							<li>
								<a href="#backlink-building">
									Backlink Building
								</a>				
							</li>
							<li>
								<a href="/contact">
									Book Strategy Session
								</a>				
							</li>			
						</ul>		
					</div>
					
					<div className="section seo-services-first" id="first-section">
						<div className="container">

							<h1 className="page-title-xl">Our SEO Services</h1>
							<h3 className="italic-text section-title-m">
								We don’t just build great websites, <strong>we also offer powerful SEO services.</strong>
							</h3>
						
							<div className="orange-sep"></div>

							<p className="med">
								Search Engine Optimization can be one of the most powerful and profitable Internet marketing tactics. Just about everyone who uses the Internet will use a search engine when looking for new products and services.  Ranking at the top of the search engine results is an excellent way to target people searching for products and services similar to yours.
							</p>
							
						</div>
					</div>

					<div className="section">

						<div className="container">		

							<div className="row">
								<div className="col-3-l col-12">
									<h2 className="section-title-l">How Does SEO Work?</h2>
								</div>

								<div className="col-9-l col-12">

									<p className="">
										We work with brands and businesses of all sizes to improve their search engine rankings and drive more targeted traffic to their websites. Before reading about some of our services, it may help to read about our SEO process first, as these campaigns are typically long-term. No SEO campaign takes place overnight. In fact, in some cases it can take 6 to 9 months before you start to see real results.  
									</p>

									<p className="topmargin-3">
										However, as more of your pages begin to rank and your site begins to generate more traffic, the return on investment begins to become apparent. 
									</p>

									<p>
										With paid advertising, once you stop paying for an ad, your traffic will immediately drop off. With SEO, once a page ranks on the first page, you can potentially see traffic for years to come.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Schedule A Strategy Session
									</a>

								</div>
							</div>	
							
							

						</div>

					</div>

					<div className="section full-height light" id="on-page">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/on-page-optimization.png`} alt="on-page optimization" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">On-Page Optimization</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Our most popular service, and the core of any solid SEO plan, is on-page optimization. On-page optimization involves engineering a website and it’s pages so that they will rank higher in search engines for more relevant content.  On-page optimization is one of the most important SEO techniques that you can use if you’re hoping to rank highly in the search results.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Request A Website Audit
									</a>
								</div>

								
							</div>

							<div className="row toppad-10">
								
								<h3 className="section-title-m italic-text bottommargin-3">Our Approach To On-Page Optimization</h3>
								<p>
									We begin our optimization services with a deep SEO audit of your website. We crawl all of your websites pages, posts, products, categories and any other indexable content. We look for things like duplicate content, poorly optimized metadata, content issues, and a number of other factors. We will also measure important technical SEO factors like website page speed, time to first byte, redirects, mobile usability, and overall user experience.
								</p>

								<p>
									We then compile a comprehensive report outlining all required changes to website content, website server configuration, website code and any other required changes. Then, either we will optimize your site and implement the changes, or your internal team will implement the changes, depending on some project specific factors. 
								</p>

								<p>
									Implementing a strong on-page SEO optimization strategy, improving website page speed, and improving user experience can make a major difference in how your website ranks.    
								</p>

							</div>
						
						</div>

					</div>

					
					<div className="section full-height" id="keyword-research">

						<div className="container">		
							
							<div className="row flex items-center">			
										
								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Keyword Research</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										The true backbone of a strong SEO strategy is going to be excellent keyword research. Choosing the right keywords involves much more than simply picking some words out of thin air or copying competitors keywords. 
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Request A Website Audit
									</a>
								</div>

								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/keyword-search.png`} alt="website audit" />
									</div>
								</div>

								
							</div>

							<div className="row toppad-10">
								
								<h3 className="section-title-m italic-text bottommargin-3">A Multi-Pronged Approach to Keyword Research</h3>
								<p>
									Keyword research should be insightful. When performing keyword research, It’s important to consider the target audience. You should also think about who is most likely to engage your services or buy your product. Most importantly, you should consider the current opportunities and strengths your website has. Our approach to keyword research is a multi-tiered one. 
								</p>

							</div>

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Topical Keyword Research</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Keyword research starts with general topical keyword research. We focus on key topic or topics for your website and create a group of 30 - 40 potential keywords. We compare these keywords using a few key metrics - search volume, competition, and the average cost per click. We look for any keywords that stand out as having a combination of high search volume, low competition, and a high average cost per click. 
									</p>
									<p>
										Finally, we isolate any keywords that may meet our criteria and move on to the next step of keyword research.
									</p>
								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Low-Hanging Fruit Research</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Next, we create a list of low-hanging fruit keyword opportunities. “Low-hanging fruit” are keywords that your website ranks for somewhere in the top 20-30 results.  Website owners and marketers are usually unaware of these opportunities so do not even know to focus on them. Once we have a list of low-hanging fruit keywords, we run the same analysis from step one on each keyword.  We analyze each search term for search volume, competition, and CPC value and select the best keyword opportunities.
									</p>					
								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Competitive Gap Analysis</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										One of the more insightful keyword analyses we perform is a competitive gap analysis. Competitive gap analyses identify keywords that your top competitors are ranking for that your website does not rank for.  This keyword list is not only helpful in overall site optimization, but can also provide great ideas for new, informative content.
									</p>
									<p>
										Once we’ve completed our various analyses, we compile various reports. One report includes all of the keywords that we’ve uncovered, regardless of their viability. We also include a report for most viable keywords, highest volume keywords, low-hanging fruit keywords, and competitive gap analysis keywords specifically. 
									</p>
								</div>				
							</div>

						</div>
					</div>



					<div className="section full-height light" id="content-creation">
						<div className="container">				
							<div className="row flex items-center">							
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightpad-8">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-copywriting.png`} alt="seo copywriting" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">High Quality Content Creation</h2>
									<div className="orange-sep"></div>
									<p className="med topmargin-3">
										Unless you are brand new to SEO and online marketing, you’ve probably heard the term “content is king”. Despite what you may have heard about SEO services in 2019, this is still absolutely true, the definition of “content” has simply evolved. So what kind of content creation SEO services do we offer? <strong>As many as possible.</strong>
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Request A Website Audit
									</a>
								</div>
							</div>
							
							
							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> SEO Article Writing</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										The most popular method for creating new, highly optimized content on a website is through blogging or article writing. Blogs can be engaging, informative, and even entertaining at times, making them ideal for drawing new users into a website. And as such, article writing is one of our most popular SEO services.
									</p>
									<p>
										When we create new blog articles, we don’t just write them, we engineer them. Our multi-tiered approach to article writing ensures that articles are not only informative and engaging, but that the content is optimized for indexing. 
									</p>
									<p>
										We start our article writing process by conducting interviews with the client and performing background research.  Once we’ve completed our research, we create an article with a minimum of 1000 words. The final length of the article will depend on the length of the articles we are competing against, however our minimum length is 1000 words. 
									</p>

									<p>
										Once we’ve completed writing our article, we then edit for spelling, grammar, awkward phrasing and accuracy. <strong>This is where the magic starts.</strong>
									</p>

									<p>
										Our complete article is then run through a TF*IDF scan. TF*IDF a statistic that is used to understand the importance of a word is within a group of documents or pages.  TF*IDF is a popular statistic used within search engine algorithms as a means of content retrieval and indexing. 
									</p>

									<p>
										We use TF*IDF in article writing in two distinct ways. Once, we ensure that we are not over-optimized or under-optimized for our focus keyword in comparison to our competitors. Second, it gives us a new list of contextually related keywords that we may already be using or should probably introduce. We can then further optimize our articles ability to be indexed by Google by implementing more of these contextually related keywords.
									</p>

									<p>
										The final step in our article writing process is an advanced content optimization process. We compare the actual code of your article and your competitors articles and optimize the content usage. For example, instead of only using our focus keyword within paragraph elements, we  include the keyword in H2 tags, two H3 tags, and in paragraph tags.
									</p>

									<p>
										Our comprehensive approach to SEO article writing is one of the main reasons that this is one of our most powerful and most popular SEO services. If you’re interested in learning more about our article writing services, contact us today to schedule a strategy session.
									</p>

								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Video Creation</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Another of our very popular SEO services is video creation. Publishing videos on youtube is an excellent way to get your content and your brand positioned above your competitors.  Depending on the search query, video results can even be shown above all of the actual organic results.  When it comes to video creation for SEO, we offer two primary services. 
									</p>					

									<p>
										Our most popular of the video SEO services is our Content-Based Video service. These videos are produced using stock video, stock photos, and the content from one of your articles or new content that we produce for the video. The videos are typically about 3 to 4 minutes in length and are posted to Youtube. We also create engaging video thumbnails, optimized video descriptions and a list of targeted tags for the video.
									</p>

									<p>
										Another popular SEO video service that we offer is our Spokesperson Video offering. In these videos we have a real person read your article or content on camera. We also splice in stock video, stock photo and any brand videos or photos you’d like to include. These videos typically range from 3 to 4 minutes and also include an optimized description, optimized video tags and custom video thumbnail. 
									</p>
								
								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Content Marketing Campaigns</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Thinking about using content marketing to drive more traffic to your website? We think that’s a great idea. Content marketing is an excellent way to utilize your existing on-page content to gain  more customers. It works by placing your informative content in places your audience is more likely to see it and engage with it.
									</p>
									<p>
										Content marketing is also an excellent way to get more social engagement and drive more social signals to your articles and to your website. When you promote an article on platforms like Facebook and Outbrain, you’re positioning your content in front of hundreds, if not thousands of additional readers. Best of all, these views are considerably less expensive than other types of PPC marketing.
									</p>
								</div>				
							</div>


						</div>
					</div>


					<div className="section full-height" id="backlink-building">

						<div className="container">		
							
							<div className="row flex items-center">			
										
								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Backlink Building</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Another one of our very popular SEO services is backlink building. We create high quality, organic backlinks for our client websites from a variety of sources. The goal in any link building campaign is to build authority. We make sure to only build relevant links that add to a website’s authority with search engines. Here are a few of our more popular backlink building SEO services.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Request A Website Audit
									</a>
								</div>

								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src="/static/images/backlink-building.png" alt="website audit" />
									</div>
								</div>

								
							</div>
						

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Blogger Outreach & Contextual Links</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Some of the most impactful backlinks that we offer are called contextual backlinks. We achieve this type of backlink through a manual process of blogger outreach, content pitches, and established relationships. 
									</p>
									<p>
										We publish contextual backlinks on blogs and websites of all sizes and types. When choosing websites to reach out to, we look at two important factors - total organic traffic and total backlinks.  Although many SEO companies and SEO consultants may focus on metrics like Domain Authority, we’ve found that is not always the best indicator.  Acquiring backlinks from blogs and websites with a strong organic search presence and strong trust flow has proven the most impactful in our experience.
									</p>
								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Citation Building</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Citations, sometimes referred to as local citations, are the mention or inclusion of your website on a listing website or directory website. Building a well optimized, robust citation profile is crucial to ranking in local search results. It’s also important for building a well-rounded, authoritative link profile for e-commerce websites, SAAS businesses, and web applications. 
									</p>					

									<p>
										When building citations, we first optimize the business NAP profile, business description, business services, hours of operation and compile photos and videos for the business profiles. We build citations on more than 100 different websites including local.com, Yelp, YP.com, BOTW.com and many more. 
									</p>

									<p>
										In some situations the citation may not include a link back to your business, but don’t worry there is still a lot of value there. This is called a “brand mention”. Google is able to identify these business mentions and compare them with your listing on Google. Our citation building campaigns are extremely impactful for small business websites, local businesses, and even e-commerce websites.

									</p>
								</div>				
							</div>	

							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Link Bait Development</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										Link bait would be anything designed to attract backlinks back to your website. Link bait includes things like free embeddable tools, free website badges, or free blog content. In some cases, you can also create infographics to share, or even just post a really great article on your website. Link bait can also be used in viral hacking campaigns and social media campaigns.
									</p>
									<p>
										Not every website is suitable for a link bait campaign. When applicable, this tactic can be a great way to acquire lots of high-quality backlinks over a short period of time.  Our team of designers and developers will work with your team to conceptualize the perfect link bait tool to grab your audience’s attention. 
									</p>
								</div>				
							</div>


							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">4.</span> Social Media Profile Creation</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										When most people think social media, they usually just think Facebook, Twitter, Youtube, Instagram and Pinterest. Most don’t realize that there are hundreds of social media websites and social media channels out there. Each of these websites can provide additional citations and brand mentions for your website.
									</p>
									<p>
										First, our team compiles a series of design assets and brand information. We then manually create social media profiles on more than 100 of the Internet’s top social media sites. Some of these sites include Quora.com, StackExchange.com, Alexa.com, Disqus.com, GoodReads.com, Medium.com, and even MySpace.com. 
									</p>
									<p>
										We manually create each profile, so if you already have a profile that can be found on the platform, we do not create duplicates.  Increase your brand visibility and trust with social media citations using social media profiles. 
									</p>
								</div>				
							</div>


							<div className="row toppad-10">		
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">5.</span> Content Syndication</h3>
								</div>
								<div className="col-9-l col-12">
									<p>
										The best way to distribute your website content to hundreds of other websites is through content syndication. With content syndication, you can post your article to hundreds of local news websites across the country. Your content is then placed in front of all of the readers of each one of those websites.
									</p>
									<p>
										We avoid duplicate content penalties when syndicating content by ensuring that canonical tags are set on each of the syndicated articles. The canonical tag for each syndicated post is set to the URL of the original article. This ensures that all of the authority and value of the syndicated page is passed to your website.
									</p>
									<p>
										Content syndication also gives you the ability to advertise a whole new type of social proof on your website. Through our syndication partners, your content is featured on news affiliate sites for NBC, ABC, CBS, and other top news outlets. This means you can post an “As Seen On…” badge on your site to improve confidence with your potential customers.
									</p>
								</div>				
							</div>

						</div>
					</div>
					

					<div className="section light">
						<div className="container">
							<div className="med-wrap text center">
								<h2 className="section-title">Our Top SEO Services</h2>

								<div className="orange-sep centered"></div>

								<p>
									If you are interested in working with our SEO team for our SEO services, just send us an email to <a href="/contact" className="text-link">schedule a strategy session</a>.  Our team of SEO professionals has experience with local SEO campaigns, e-commerce SEO campaigns, Google penalty recovery campaigns, SAAS SEO campaigns and much more.  
								</p>

								<p>
									We tailor each one of our SEO campaigns specifically to our client and their target audience. We love brainstorming new and creative ways to attract people to our client’s websites using search engine optimization. If you’d like to discuss how we can start driving more targeted to your website, <a href="/contact" className="text-link">schedule a strategy session today!</a>   
								</p>

								<div className="buttons center topmargin-6">
									<a href="/contact" className="btn proper-btn blue">
										Schedule A Strategy Session
									</a>
								</div>
							</div>
						</div>
					</div>
		</div>
	}
}


export default SeoProcess;


