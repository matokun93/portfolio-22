import { memo } from 'react'
import './Project.css'

const Project = memo(({ id, name, cover, description, tools, link, active, setOpenModal, animation }) => {
    const createModal = (text) => {
        setOpenModal({
            open: true,
            text: text
        })
    }

    return (
        <div animation={animation} className={id === active ? 'active-project project-card' : 'project-card'} >
            <div className="cover">
                <img src={cover} alt="" />
            </div>
            <div className="project-info">
                <div className="project-name">
                    <h4>Proyecto</h4>
                    <p>{name}</p>
                </div>
                <div className="project-tools">
                    <h4>Herramientas</h4>
                    <div className="tools">
                        {tools.map(tool => {
                            return (
                                <div className='tool' key={tool}>
                                    <p>{tool}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="project-buttons">
                    <button className="details" onClick={() => createModal(description)}>
                        Detalles
                    </button>
                    <button className="demo" >
                        <a href={link} target="_blank" rel="noreferrer" >Demo</a>
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Project