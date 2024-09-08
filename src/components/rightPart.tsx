import AboutPortfolio from "./Content/About"
import Contact from "./Content/Contact"
import HomePortfolio from "./Content/Home"
import ProjectPortpolio from "./Content/Project"
import SkillPortfolio from "./Content/Skills"
interface IProps {
    showHideLeftPart: boolean
    setShowHideLeftPart: (value: boolean) => void
}

const RightPart = (props: IProps) => {
    const { showHideLeftPart, setShowHideLeftPart } = props

    return (

        <>
            <div className={showHideLeftPart === true ? "arlo_tm_rightpar opened" : 'arlo_tm_rightpar'}>
                <div className="rightpart_inner">
                    <HomePortfolio />

                    {/* <!-- ABOUT --> */}
                    <AboutPortfolio />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <SkillPortfolio />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- PROJECT --> */}
                    <ProjectPortpolio />
                    {/* <!-- /PROJECT --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}

export default RightPart