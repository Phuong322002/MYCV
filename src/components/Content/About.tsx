import avtAbout from '@/assets/img/about/1.jpg'
import frame from '@/assets/img/about/550x640.jpg'
import myCV from '@/assets/CV_IT.pdf'
import { TypeAnimation } from 'react-type-animation'
const AboutPortfolio = () => {

    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src={frame} alt="550x640" />
                                            <div className="inner" data-img-url={avtAbout}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Hi there...I'm a <strong >
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'Freelancer',
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    'UI/UX Designer',
                                                    2000,
                                                    'Web Developer',
                                                    2000
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                style={{ color: 'red' }}
                                                repeat={Infinity}
                                            />
                                        </strong></h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! My name is <strong>Phương</strong>. I am a Web Developer,
                                            and I'm very passionate and dedicated to my work.
                                            I have acquired the skills and knowledge necessary to make your project a success.
                                            I enjoy every step of the design process, from discussion and collaboration to concept and execution,
                                            but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
                                        </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Birthday:</label> 03/02/2002</span>
                                            </li>
                                            <li>
                                                <span><label>Interests:</label> Soccer, programming</span>
                                            </li>

                                            <li>
                                                <span><label>Degree:</label> bachelor's degree</span>
                                            </li>

                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:example@gmail.com">puong334&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Github:</label> <a href="https://github.com/Phuong322002/React-Fresher-FE">Link Github</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download><span>Download CV</span></a>
                                            </li>
                                            <li className="anchor">
                                                <a href="#contact"><span>Send Message</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPortfolio