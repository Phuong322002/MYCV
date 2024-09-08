
import desktopLogo from '@/assets/img/logo/desktop-logo-2.png'

interface IProps {
    showHideLeftPart: boolean
    setShowHideLeftPart: (value: boolean) => void
}
const LeftPart = (props: IProps) => {

    const { showHideLeftPart, setShowHideLeftPart } = props

    return (

        <>
            <div className={showHideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : 'arlo_tm_leftpart_wrap'}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Project</a></li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <a className={showHideLeftPart === true ? "arlo_tm_resize opened" : 'arlo_tm_resize'} href="#" onClick={() => setShowHideLeftPart(!showHideLeftPart)}><i className={showHideLeftPart === true ? "xcon-angle-left opened" : 'xcon-angle-left'}></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart