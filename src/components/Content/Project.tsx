import { Button, Modal } from "antd"
import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import { FaBookQuran } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IDataDetail {
    image: React.ReactNode,
    title: string,
    shortDescription: string,
    detail: {
        description: string, //mieu ta du an lam gi
        frontend: string,
        backend: string,
        member: number,
        role: string,
        demo: string,
        GitHub: string,
    }
}
const ProjectPortpolio = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IDataDetail | null>(null)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProject: IDataDetail[] = [

        {
            image: <MdQuestionAnswer color="#00FFFF	" size={40} />,
            title: 'Bài quiz',
            shortDescription: 'có sdsadsađá',
            detail: {
                description: 'this is a Front-end project', //mieu ta du an lam gi
                frontend: '123',
                backend: '321',
                member: 1,
                role: 'aa',
                demo: 'bbb',
                GitHub: 'cc',
            }
        },
        {
            image: <FaBookQuran color="#00FF00" size={40} />,
            title: 'Sell book',
            shortDescription: 'ssdfds',
            detail: {
                description: 'this is a Back-end project', //mieu ta du an lam gi
                frontend: '456',
                backend: '654',
                member: 1,
                role: 'dd',
                demo: 'gg',
                GitHub: 'ff',
            }

        },


    ]

    const handleModal = (item: IDataDetail) => {
        console.log(item)
        setIsModalOpen(true)
        setDataDetail(item)

    }

    return (
        <>

            <>

                <Modal
                    title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ''}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    maskClosable={false}
                    footer={null}
                >
                    <ul>
                        <li>
                            description: {dataDetail?.detail.description}
                        </li>
                        <li>
                            member: {dataDetail?.detail.member}
                        </li>
                    </ul>

                </Modal>
            </>
            <div className="arlo_tm_section" id="projects" >
                <div className="arlo_tm_services_wrap" style={{ marginTop: '100px' }}   >
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Meet our amazing services</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProject && dataProject.length > 0 && dataProject.map((item, index) => {
                                    return (
                                        <li key={`project-${index}`} onClick={() => { handleModal(item) }}>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="image">
                                                        {item.image}
                                                    </div>
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                    {/* <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p> */}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <FaLongArrowAltRight /> <span>Xem chi tiết</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default ProjectPortpolio