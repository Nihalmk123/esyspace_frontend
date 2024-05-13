import React from 'react';
import Layout from "../../src/components/Layouts/Layout";
import { Button } from '@mui/material';
import hero_img from '../../src/assets/hero-img.png';
import '../../src/Styles/Home.css';
import ft1img1 from '../../src/assets/undraw_Redesign_feedback_re_jvm0.png';
import ft1img2 from '../../src/assets/undraw_Remote_design_team_re_urdx.png';
import ft1img3 from '../../src/assets/undraw_viral_tweet_gndb.png';
import ft2img1 from '../../src/assets/undraw_Group_video_re_btu7.png';
import ft2img2 from '../../src/assets/undraw_happy_music_g6wc.png';
import ft2img3 from '../../src/assets/undraw_online_ad_re_ol62.png';
import Profile from '../../src/assets/Profile-Avatar-PNG.png'
export default function Home() {

  return (
    <Layout>
      <>
        <div className="Home_wrapper">
          <div className="row ">
            <div className="col-md-6 pr-md-">
              <h2 className='text-center mt-5'>Coworking Software to streamline operations & enhance retention</h2>
              <p className='text-center mt-3'>  Manage resources and operations of your coworking space
                seamlessly. Inspire confidence to get back to the office –
                designed for coworking spaces of all sizes</p>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="contained" color="primary" style={{ backgroundColor: '#11235A', color: '#FFFFFF' }}>Free Trail</Button>
              </div>
            </div>
            <div className="col-md-6 pl-md-4 d-flex justify-content-center align-items-center">
              <img src={hero_img} className="img-fluid" alt="Responsive image" style={{ maxWidth: '100%', height: 'auto', maxHeight: '600px' }} />
            </div>
          </div>
        </div>
        <section className="explore-section section-padding" id="section_2">
          <div className="container">
            <div className="col-12 text-center">
              <h3 className="">Browse Topics</h3>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Feature 1</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Feature 2</button>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Finance</button>
                </li> */}
                {/* <li className="nav-item" role="presentation">
                  <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Music</button>
                </li> */}
                {/* <li className="nav-item" role="presentation">
                  <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Education</button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Lorem ipsum dolor sit amet.</h5>
                                <p className="mb-0">Topic Listing Template based on Bootstrap 5</p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">14</span>
                            </div>
                            <img src={ft1img1} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Lorem, ipsum dolor.</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">75</span>
                            </div>
                            <img src={ft1img2} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Lorem ipsum dolor sit.</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-design rounded-pill ms-auto">100</span>
                            </div>
                            <img src={ft1img3} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Advertising</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                            </div>
                            <img src={ft2img1} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Video Content</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">65</span>
                            </div>
                            <img src={ft2img2} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Viral Tweet</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-advertising rounded-pill ms-auto">50</span>
                            </div>
                            <img src={ft2img3} className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabIndex={0}>   <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                      {/* these are cards for finance section */}
                      {/* <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Investment</h5>
                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>
                            <span className="badge bg-finance rounded-pill ms-auto">30</span>
                          </div>
                          <img src="images/topics/undraw_Finance_re_gnv2.png" className="custom-block-image img-fluid" alt />
                        </a>
                      </div> */}
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
                      <div className="custom-block custom-block-overlay">
                        <div className="d-flex flex-column h-100">
                          <img src="images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg" className="custom-block-image img-fluid" alt />
                          <div className="custom-block-overlay-text d-flex">
                            <div>
                              <h5 className="text-white mb-2">Finance</h5>
                              <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis</p>
                              <a href="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                            </div>
                            <span className="badge bg-finance rounded-pill ms-auto">25</span>
                          </div>
                          <div className="social-share d-flex">
                            <p className="text-white me-4">Share:</p>
                            <ul className="social-icon">
                              <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-twitter" />
                              </li>
                              <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-facebook" />
                              </li>
                              <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-pinterest" />
                              </li>
                            </ul>
                            <a href="#" className="custom-icon bi-bookmark ms-auto" />
                          </div>
                          <div className="section-overlay" />
                        </div>
                      </div>
                    </div> */}
                  </div>
                  </div>
                  <div className="tab-pane fade" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Composing Song</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">45</span>
                            </div>
                            <img src="images/topics/undraw_Compose_music_re_wpiw.png" className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Online Music</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">45</span>
                            </div>
                            <img src="images/topics/undraw_happy_music_g6wc.png" className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Podcast</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-music rounded-pill ms-auto">20</span>
                            </div>
                            <img src="images/topics/undraw_Podcast_audience_re_4i5q.png" className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabIndex={0}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Graduation</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-education rounded-pill ms-auto">80</span>
                            </div>
                            <img src="images/topics/undraw_Graduation_re_gthn.png" className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="custom-block bg-white shadow-lg">
                          <a href="topics-detail.html">
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Educator</h5>
                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                              </div>
                              <span className="badge bg-education rounded-pill ms-auto">75</span>
                            </div>
                            <img src="images/topics/undraw_Educator_re_ju47.png" className="custom-block-image img-fluid" alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-light py-3 py-md-5 py-xl-8">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
              <div className="col-12 col-lg-5">
                <div className="row">
                  <div className="col-12 col-xl-11">
                    <h3 className="fs-6  mb-3 mb-xl-4 text-uppercase tag_style">What We Do?</h3>
                    <h2 className=" mb-3 mb-xl-4">We are giving you perfect solutions with our proficient services.</h2>
                    <p className="mb-3 mb-xl-4">Maecenas lobortis eu sem ornare suscipit. Nullam in turpis ante. Sed non efficitur lectus. Donec urna augue, fringilla ut commodo suscipit, blandit non dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <Button variant="contained" color="primary" style={{ backgroundColor: '#11235A', color: '#FFFFFF' }}>More details</Button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 overflow-hidden">
                <div className="row gy-4">
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="currentColor" className="bi bi-textarea-resize mb-4" style={{ color: "#11235A" }} viewBox="0 0 16 16">
                          <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <h4 className="mb-4">Market Research</h4>
                        <p className="mb-4 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                        <a href="#!" className="fw-bold text-decoration-none link-primary">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="currentColor" className="bi bi-tablet mb-4" style={{ color: "#11235A" }} viewBox="0 0 16 16">
                          <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <h4 className="mb-4">Web Design</h4>
                        <p className="mb-4 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                        <a href="#!" className="fw-bold text-decoration-none link-primary">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="currentColor" className="bi bi-repeat mb-4" style={{ color: "#11235A" }} viewBox="0 0 16 16">
                          <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                        </svg>
                        <h4 className="mb-4">Daily Updates</h4>
                        <p className="mb-4 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                        <a href="#!" className="fw-bold text-decoration-none link-primary">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="currentColor" className="bi bi-shield-check  mb-4" style={{ color: "#11235A" }} viewBox="0 0 16 16">
                          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <h4 className="mb-4">Free Support</h4>
                        <p className="mb-4 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                        <a href="#!" className="fw-bold text-decoration-none link-primary">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container mt-5 mb-5'>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate
      </p>
    </div>
  </div>

  <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Maria Smantha</h5>
      <h6 class="text-primary mb-3">Web Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. quaerat ad velit ab hic
        tenetur.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Lisa Cudrow</h5>
      <h6 class="text-primary mb-3">Graphic Designer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
        , nisi ut aliquid commodi.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">John Smith</h5>
      <h6 class="text-primary mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
        dignissimos ducimus qui 
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>

      </>
    </Layout>
  )
}
