import LeftPart from "@components/leftPart"
import MobilePortPolio from "@components/Mobile/mobile"
import PreLoader from "@components/preloader"
import RightPart from "@components/rightPart"
import { FloatButton } from 'antd';
import { useState } from "react";
import { BiSolidToTop } from "react-icons/bi";


const Portpolio = () => {

    const [showHideLeftPart, setShowHideLeftPart] = useState<boolean>(true)

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
                    <LeftPart
                        showHideLeftPart={showHideLeftPart}
                        setShowHideLeftPart={setShowHideLeftPart}
                    />
                    {/* <!-- /LEFTPART --> */}

                    {/* <!-- RIGHTPART --> */}
                    <RightPart
                        showHideLeftPart={showHideLeftPart}
                        setShowHideLeftPart={setShowHideLeftPart}
                    />
                    {/* <!-- /RIGHTPART --> */}

                    {/* <a className="arlo_tm_totop" href="#"></a> */}
                    <FloatButton.BackTop icon={<BiSolidToTop style={{ color: '#FF9900' }} />} />

                </div>
            </div>
        </>
    )
}

export default Portpolio