
import desktopLogo from '@/assets/img/logo/desktop-logo-2.png'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect';


interface IProps {
    showHideLeftPart: boolean
    setShowHideLeftPart: (value: boolean) => void
}
const LeftPart = (props: IProps) => {


    const { showHideLeftPart, setShowHideLeftPart } = props

    const [activeTab, setActiveTab] = useState<string>('home')

    useEffect(() => {
        const { hash } = window.location
        console.log('>> check hash: ', hash)
        let tab = hash.replace('#', '')
        setActiveTab(tab)
    }, [])

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
            <div className={showHideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : 'arlo_tm_leftpart_wrap'}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
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
                    {isMobile === false && <a
                        className={showHideLeftPart === true ? "arlo_tm_resize opened" : 'arlo_tm_resize'}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setShowHideLeftPart(!showHideLeftPart)
                        }}>
                        <i className={showHideLeftPart === true ? "xcon-angle-left opened" : 'xcon-angle-left'}>
                        </i>
                    </a>}

                </div>
            </div>
        </>
    )
}

export default LeftPart