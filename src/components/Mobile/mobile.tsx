
import mobileLogo from '@/assets/img/logo/mobile_logo.png'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

interface IProps {
    showHideLeftPartMb: boolean,
    setShowHideLeftPartMb: (value: boolean) => void
}
const MobilePortPolio = (props: IProps) => {

    const { showHideLeftPartMb, setShowHideLeftPartMb } = props
    const [activeTab, setActiveTab] = useState<string>('home')

    const [sideBar, setSideBar] = useState<boolean>(false)
    useEffect(() => {
        console.log('>> check isMobile: ', isMobile)
        if (isMobile) {
            setShowHideLeftPartMb(true)
        }
    }, [isMobile])

    const [isOpen, setIsOpen] = useState(false);

    const style = {
        overflow: "hidden",
        display: isOpen ? 'block' : 'none',
        transition: "2s"
    };
    const handleClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setActiveTab(tab)
        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = `#${tab}`;
            }, 500)
        }
    }
    return (
        <>
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="#"><img src={mobileLogo} alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger" >
                        <div

                            className={sideBar === true ? `hamburger hamburger--collapse-r is-active` : 'hamburger hamburger--collapse-r'}
                            onClick={() => {
                                setSideBar(!sideBar)
                                setIsOpen(prev => !prev)

                            }}
                        >
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap" style={style}>
                    <div className="mob_menu" >
                        {/* <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul> */}
                        <ul className="anchor_nav">
                            <li>
                                {/* <NavLink to="#home" className={activeTab === 'home' ? "active" : ''}
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('home', e) }}>
                                    Home
                                </NavLink> */}
                                <a href="#home" className={activeTab === 'home' ? "active" : ''}
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('home', e) }}
                                >
                                    Home
                                </a>
                            </li>
                            <li><a href="#about" className={activeTab === 'about' ? "active" : ''}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('about', e) }}
                            >About
                            </a>
                            </li>
                            <li><a href="#skills" className={activeTab === 'skills' ? "active" : ''}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('skills', e) }}
                            >Skills
                            </a>
                            </li>
                            <li><a href="#projects" className={activeTab === 'projects' ? "active" : ''}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('projects', e) }}
                            >Project
                            </a>
                            </li>
                            <li><a href="#contact" className={activeTab === 'contact' ? "active" : ''}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleClickTab('contact', e) }}
                            >Contact
                            </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobilePortPolio