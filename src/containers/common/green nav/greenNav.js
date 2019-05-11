import React,{Component} from 'react'
import './greenNav.css';

class GreenNav extends Component{
    render(){
        return(
            <div className="megaMenu">
               <ul>
                    {this.props.data.map(element0=>{
                        return(
                            <li>
                                <a href="#"><ins /><span>{element0.name}</span></a>
                                <div>
                                    {element0.category.map((element1,index)=>{
                                        return(
                                            <ul>
                                                <li className="parent"><a href="#">{element1.name}</a></li>
                                                {element1.list.map(element2=>{
                                                    return(
                                                        <li><a href="#">{element2}</a></li>	
                                                    )
                                                })}
                                            </ul>
                                        )
                                    })}
                                </div>
                            </li>
                        )
                    })}
                </ul> 
            </div>
        )
        return(
            <div className="megaMenu">
            <ul>
              <li>
                <a href="#"><ins /><span>Products</span></a>
                <div>
                  <ul>
                    <li className="parent"><a href="#">Complete Product Catalog</a></li>
                    <li className="parent"><a href="#">Corn</a></li>
                    <li className="parent"><a href="#">Soybeans</a></li>
                    <li className="parent"><a href="#">Corn Silage</a></li>
                    <li className="parent"><a href="#">Alfalfa</a></li>
                    <li className="parent"><a href="#">Sorghum</a></li>
                    <li className="parent"><a href="#">Sunflowers</a></li>
                    <li className="parent"><a href="#">Wheat</a></li>
                    <li className="parent"><a href="#">Innoculants</a></li>
                    <li className="parent"><a href="#">Seed Delivery</a></li>
                    <li className="parent"><a href="#">Request Seed Information</a></li>
                  </ul>   
                  <ul>
                    <li className="parent"><a href="#">Performance</a></li>
                    <li><a href="#">Yield Demo</a></li>	
                    <li className="parent"><a href="#">Product Naming System</a></li>
                    <li className="parent"><a href="#">Biofuels</a></li>
                    <li><a href="#">Product Information</a></li>
                    <li><a href="#">Industry and Grower Brochures</a></li>
                    <li><a href="#">Fact Sheets</a></li>
                    <li><a href="#">Pioneer QualitrakÂ® System</a></li>
                    <li><a href="#">Tour an Ethanol Plant</a></li>
                  </ul>         
                  <ul>
                    <li className="parent"><a href="#">Stewardship</a></li>
                    <li><a href="#">Export Approvals</a></li>
                    <li><a href="#">Herbicide Management</a></li>
                    <li><a href="#">Product Use Guides</a></li>
                    <li><a href="#">Material Safety Data Sheets</a></li>
                    <li><a href="#">Insect Resistance Management</a></li>
                    <li><a href="#">Weed Management</a></li>
                    <li><a href="#">Grain Marketing</a></li>
                    <li><a href="#">Pioneer Patents</a></li>
                    <li className="parent"><a href="#">Field Technology Tips</a></li>
                    <li><a href="#">VRS Basics</a></li>
                    <li><a href="#">Working with Yield Monitors</a></li>
                  </ul>  
                </div>
              </li>
              <li>
                <a href="#"><ins /><span>Agronomy</span></a>
                <div>
                  <ul>
                    <li className="parent"><a href="/home/site/us/agronomy/seasonal-insights/">Seasonal Insights</a></li>
                    <li><a href="/home/site/us/agronomy/seasonal-insights/timely-tips/">Timely Tips</a></li>
                    <li><a href="/home/site/us/agronomy/seasonal-insights/regional-agronomy-tips/">Regional Agronomy Tips</a></li>
                    <li><a href="/home/site/us/agronomy/seasonal-insights/drought-guides/">Drought Guides</a></li>
                    <li><a href="/home/site/us/agronomy/seasonal-insights/corn-growth-stages/">2012 Estimated Corn Growth Stages</a></li>
                    <li><a href="/home/site/us/agronomy/seasonal-insights/crop-mgmt-tips/">Crop Management Tips</a></li>
                    <li className="parent"><a href="/home/site/us/agronomy/research/">Agronomy Research</a></li>
                    <li><a href="/home/site/us/agronomy/research-summaries/">Research Summaries - 2011</a></li>
                    <li><a href="/home/site/us/agronomy/research-trials/">Research Trials - 2011</a></li>
                    <li className="parent"><a href="/home/site/us/agronomy/library/">Agronomy Library</a></li>
                  </ul>   
                  <ul>
                    <li className="parent"><a href="/home/site/us/agronomy/crop-management/">Crop Management Guides</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/harvest-management/">Harvest Management and Fall Tillage</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/grain-quality-management/">Grain Quality Management</a></li>
                    <li><a href="#">Adverse Weather &amp; Pest Guides</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/videos/">Crop Production Videos</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/crop-growth-stages/">Crop Growth Stages</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/scouting/">Scouting Guides</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/pioneer-goof-demo/">Crop Management Goof Demos</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/high-yield-management/">High-Yield Management</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/corn-after-corn/">Corn-After-Corn Production</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/soybean-rust-center/">Soybean Rust Center</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/corn-insect-disease-main/">Corn Insect &amp; Disease Guide</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/soybean-insect-disease/">Soybean Insect &amp; Disease Guide</a></li>
                    <li><a href="/home/site/us/agronomy/crop-management/sunflower-insect-disease-main/">Sunflower Insect &amp; Disease Guide</a></li>
                  </ul>         
                  <ul>
                    <li className="parent"><a href="/home/site/us/agronomy/tools/">Tools</a></li>
                    <li><a href="/home/site/us/agronomy/tools/gdu/">GDU Calculator</a></li>
                    <li><a href="/home/site/us/agronomy/tools/PrecipEstimator/">PrecipEstimator</a></li>
                    <li><a href="/home/site/us/agronomy/tools/growth-stage-estimator/">Growth Stage Estimator</a></li>
                    <li><a href="/home/site/us/agronomy/tools/corn-yield-estimator/">Corn Yield Estimator</a></li>
                    <li><a href="/home/site/us/agronomy/tools/planting-rate-estimator/">Planting Rate Estimator</a></li>
                    <li><a href="/home/site/us/agronomy/tools/plantability/">Plantability</a></li>
                    <li><a href="/home/site/us/agronomy/tools/production-cost-calculator/">Cost of Production Calculator</a></li>
                    <li className="parent"><a href="/home/site/us/agronomy/newsletters/">Newsletter</a></li>
                    <li className="parent"><a href="/home/site/us/agronomy/about-us/">About Us</a></li>
                  </ul>  
                </div>
              </li>
              <li>
                <a href="#"><ins /><span>Dairy, Livestock<br />&amp; Nutrition</span></a>
                <div>
                  <ul>
                    <li className="parent"><a href="#">Livestock Feed &amp; Nutrition Newsletters</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/newsletters/bottom-line/">Feedstuffs Column</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/newsletters/field-to-feedbunk/">Hoard's Dairyman Column</a></li>
                    <li><a href="#">Progressive Dairyman Column</a></li>
                    <li className="parent"><a href="/home/site/us/livestock-feed-nutrition/forage-forum/">Forage Forum</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/forage-forum/corn-silage-forum/">Corn Silage Forum</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/forage-forum/alfalfa-forum/">Alfalfa Forum</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/forage-forum/inoculants-forum/">Inoculants Forum</a></li>
                    <li className="parent"><a href="/home/site/us/livestock-feed-nutrition/library/">Nutritional Sciences Library</a></li>
                    <li className="parent"><a href="/home/site/us/livestock-feed-nutrition/latest-from-our-team/">Latest from Our Team</a></li>
                    <li className="parent"><a href="/home/site/us/livestock-feed-nutrition/nutrition-team-directory/">Nutrition Team Directory</a></li>
                    <li className="parent"><a href="/home/site/us/menuitem.a67f7719b30dd93c03870387cdef63aa/">Tools</a></li>
                    <li><a href="/home/site/us/menuitem.8d594141f3ede93c03870387cdef63aa/">Inoculant Value Calculator</a></li>
                    <li><a href="/home/site/us/livestock-feed-nutrition/tools/silage-bunker-calculator/">Silage Bunker Calculator</a></li>
                  </ul>  
                </div>
              </li>
              <li>
                <a href="#"><ins /><span>Programs<br />&amp; Services</span></a>
                <div className="left">
                  <ul>
                    <li className="parent"><a href="/home/site/us/programs-services/mobile/">Pioneer Mobile Website</a></li>
                    <li className="parent"><a href="/home/site/us/programs-services/fit-mapping/">Pioneer FIT® Services</a></li>
                    <li><a href="/home/site/us/programs-services/fit-mapping/request/">FIT® Mapping Request Form</a></li>
                    <li className="parent"><a href="#">Pioneer Premium Seed Treatment</a></li>
                    <li className="parent"><a href="/home/site/us/programs-services/phi-financial/">PHI Financial Services Inc.</a></li>
                    <li className="parent"><a href="/home/site/us/programs-services/payment-options/">Payment Options</a></li>
                    <li><a href="/home/site/us/programs-services/payment-options/how-to-make-payments/">How to Make Payments</a></li>
                    <li className="parent"><a href="/home/site/us/programs-services/pioneer-insurance/">PHI Insurance Services Inc.</a></li>
                    <li><a href="/home/site/us/menuitem.4edc90eece67200ff7e6f7e6cdef63aa/">Calculator</a></li>
                    <li><a href="/home/site/us/programs-services/pioneer-insurance/MPCI/">MPCI Price Discovery Periods</a></li>
                    <li><a href="#">MPCI Projected &amp; Harvest Prices by Commodity &amp; State</a></li>
                    <li><a href="/home/site/us/programs-services/pioneer-insurance/timely_tips/">Timely Tips &amp; Tools</a></li>
                    <li className="parent"><a href="#">Online Record Keeping System</a></li>
                    <li><a href="/home/site/us/programs-services/online-record-keeping-tips/">Time-Saving Tips</a></li>
                  </ul>  
                </div>
              </li>
              <li>
                <a href="#"><ins /><span>Markets<br />&amp; Analysis</span></a>
                <div className="left">
                  <ul>
                    <li className="parent"><a href="#">Commodity Futures &amp; Cash</a></li>
                    <li><a href="/home/site/us/markets-analysis/commodity-futures-cash/commodity-futures/">Commodity Futures</a></li>
                    <li><a href="/home/site/us/markets-analysis/commodity-futures-cash/commodity-options/">Commodity Options</a></li>
                    <li><a href="/home/site/us/markets-analysis/commodity-futures-cash/local-cash-markets/">Local Cash Markets</a></li>
                    <li className="parent"><a href="/home/site/us/markets-analysis/market-point-resource/">DPP(SM) grain desk</a></li>
                    <li className="parent"><a href="/home/site/us/markets-analysis/market-commentary/">Market Commentary</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-commentary/daily-news-analysis/">Daily News and Analysis</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-commentary/morning-call-grains/">Morning Market Review</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-commentary/afternoon-recap-grains/">Afternoon Recap Grains</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-commentary/weekly-market-recap/">Weekly Market Recap</a></li>
                  </ul>                              
                  <ul>
                    <li className="parent"><a href="/home/site/us/markets-analysis/market-news/">Market News</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-news/latest-markets-news/">Latest Markets News</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-news/grain-news/">Grain News</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-news/feedstuff-hay/">Feedstuff and Hay</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-news/usda-reports/">USDA Reports</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-news/livestock-news/">Livestock News</a></li>
                    <li className="parent"><a href="/home/site/us/markets-analysis/market-analysis/">Market Analysis</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-analysis/cash-trends/">Cash Trends Analysis</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-analysis/grain-futures/">Weekly Marketing Highlights</a></li>
                    <li><a href="/home/site/us/markets-analysis/market-analysis/selling-your-yields/">Selling Your Yields® Newsletter</a></li>
                  </ul>
                </div> 
              </li>
              <li>
                <a href="#"><ins /><span>News<br />&amp; Commentary</span></a>
                <div className="left">
                  <ul>
                    <li className="parent"><a href="/home/site/us/news-commentary/agricultural-news/">Agricultural News</a></li>
                    <li><a href="/home/site/us/news-commentary/agricultural-news/pro-farmer-commentary/">Pro Farmer Commentary</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/grower-commentary/">Grower Commentary</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/guest-commentary/">Guest Commentary</a></li>
                    <li><a href="/home/site/us/news-commentary/guest-commentary/volatile-years-ahead/">Volatile Years Ahead</a></li>
                    <li><a href="/home/site/us/news-commentary/guest-commentary/futurists/">Changes in Food Production</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/management-advice/">Management Advice</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/farm-safety/">Farm Safety</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/news-releases/">Pioneer News Releases</a></li>
                    <li className="parent"><a href="/home/site/us/news-commentary/growing-point-magazine/">Pioneer GrowingPoint® Magazine</a></li>
                  </ul>
                </div> 
              </li>
              <li className="fold" />
              
            </ul>
          </div>
          )
    }
}
export default GreenNav