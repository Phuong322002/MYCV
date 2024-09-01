import LeftPart from "@components/leftPart"
import MobilePortPolio from "@components/Mobile/mobile"
import PreLoader from "@components/preloader"
import RightPart from "@components/rightPart"


const Portpolio = () => {

    return (

        <>
            <div className="arlo_tm_wrapper_all">

                <div id="arlo_tm_popup_blog">
                    <div className="container">
                        <div className="inner_popup scrollable"></div>
                    </div>
                    <span className="close"><a href="#"></a></span>
                </div>

                {/* <!-- PRELOADER --> */}
                <PreLoader />
                {/* <!-- /PRELOADER --> */}

                {/* <!-- MOBILE MENU --> */}
                <MobilePortPolio />
                {/* <!-- /MOBILE MENU --> */}

                {/* <!-- CONTENT --> */}
                <div className="arlo_tm_content">

                    {/* <!-- LEFTPART --> */}
                    <LeftPart />
                    {/* <!-- /LEFTPART --> */}

                    {/* <!-- RIGHTPART --> */}
                    <RightPart />
                    {/* <!-- /RIGHTPART --> */}

                    <a className="arlo_tm_totop" href="#"></a>

                </div>
            </div>
        </>
    )
}

export default Portpolio