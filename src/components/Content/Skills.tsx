

import ProgressBar from "@ramonak/react-progress-bar";

const SkillPortfolio = () => {

    return (
        <>
            <div className="arlo_tm_section" id='skills'>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Skills</h3>
                            <span>Meet our amazing services</span>
                        </div>
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>KỸ NĂNG FRONT-END</h4>
                                </div>
                                <li>Cắt ghép template Website Responsive</li>
                                <li>Framework/Library: Bootstrap, Antd, React.js, JQuery</li>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p> */}
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">HTML/CSS/JAVASCRIPT</span><span className="number">95%</span></span>
                                            {/* <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div> */}
                                            <ProgressBar
                                                completed={95}
                                                bgColor="#7b8381"
                                                height="10px"
                                                baseBgColor="#d80e5a"
                                                labelColor="white"
                                                labelSize="10px"
                                                animateOnRender
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">REACT.JS (TYPESCRIPT)</span><span className="number">95%</span></span>
                                            {/* <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div> */}
                                            <ProgressBar
                                                completed={95}
                                                bgColor="#7b8381"
                                                height="10px"
                                                baseBgColor="#d80e5a"
                                                labelColor="white"
                                                labelSize="10px"
                                                animateOnRender
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">DESIGN UI/UX</span><span className="number">95%</span></span>
                                            {/* <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div> */}
                                            <ProgressBar
                                                completed={95}
                                                bgColor="#7b8381"
                                                height="10px"
                                                baseBgColor="#d80e5a"
                                                labelColor="white"
                                                labelSize="10px"
                                                animateOnRender
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        {/* <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Some About my Abilities</h4>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">Wordpress - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="75" data-color="#000">
                                            <span><span className="label">HTML - <span className="experience">4 years of experience</span></span><span className="number">75%</span></span>
                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SkillPortfolio