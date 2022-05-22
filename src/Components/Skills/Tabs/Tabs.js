import { useState, useCallback, memo, useMemo } from 'react'
import './Tabs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUser, faDatabase, faCube, faMobileScreenButton, faPaintBrush, faBrain, faAward, faBook, faPersonHiking, faFlagUsa, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJsSquare, faCss3, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Tabs = memo(({ setOpenModal }) => {
    const techSkills = useMemo(() => [
        {
            icon: faFlagUsa,
            name: 'Inglés',
            description: 'Nivel avanzado de Inglés. Absorbí el idioma de forma autodidacta, porque siempre he estado expuesto a él, desde videojuegos, películas, música, etc. Ahora se ha vuelto un segundo idioma que me ayuda un montón en el proceso de buscar información y aprender cualquier disciplina.'
        },
        {
            icon: faReact,
            name: 'React',
            description: 'Es la librería que acostumbro a utilizar; me gusta trabajar con componentes, tener código organizado, mantenible y legible. He trabajado utilizando Redux, Context, React Router, Formik, Custom Hooks, Memo, etc.'
        },
        {
            icon: faForwardFast,
            name: 'Agile',
            description: 'Mi preferencia es trabajar con metodología ágil. He trabajado utilizando SCRUM, manteniendo un desarrollo de software rápido, incremental y con la documentación justa.'
        },
        {
            icon: faJsSquare,
            name: 'JavaScript',
            description: 'La mayoría de mi experiencia se basa en el desarrollo de aplicaciones web, por lo que acostumbro a trabajar utilizando JavaScript. He trabajado con Promesas y Observables, consumiendo APIs con Axios y Fetch, además de utilizar las operaciones comunes sobre arrays y objetos (reduce, map, etc).'
        },
        {
            icon: faCss3,
            name: 'CSS',
            description: 'Acostumbro a utilizar CSS sin frameworks; tengo experiencia usando CSS Grid y Flexbox, además de haber utilizado Sass en algunas ocasiones. Normalmente desarrollo de forma Responsive y siempre estoy atento a los trends de diseño web.'
        },
        {
            icon: faDatabase,
            name: 'SQL',
            description: 'Enseñé sobre Bases de Datos en la universidad utilizando Pl/SQL; tengo experiencia modelando Bases de Datos relacionales, y he trabajado utilizando mySQL, PostgreSQL, y MongoDB (no relacional).'
        },
        {
            icon: faNodeJs,
            name: 'NodeJS',
            description: 'Si bien acostumbro a trabajar en Front-end, he utilizado NodeJs dentro de un MEAN Stack, utilizando JSON Web Tokens para el control de sesiones.'
        },
        {
            icon: faGitAlt,
            name: 'GIT',
            description: 'Normalmente utilizo GIT para la control de versiones (casi obligatorio), tanto para desarrollos en solitario como en equipo.'
        },
        {
            icon: faMobileScreenButton,
            name: 'Ionic',
            description: 'He utilizado el framework IONIC para el desarrollo de aplicaciones moviles/multiplataformas. El framework se basa en componentes escritos con Angular.'
        },
        {
            icon: faCube,
            name: 'Blender',
            description: 'En mi tiempo libre aprendí a utilizar el software Blender para desarrollo 3D (modelado 3D, rigging, animaciones, texturing, etc). Lo utilizo para hacer arte y assets de videojuegos en mi tiempo libre, pero también me ha servido para incluir modelos 3D en aplicaciones (todas las imagenes de esta página personal fueron hechas por mí, utilizando Blender, y un poco de Photoshop).'
        }
    ], [])
    const generalSkills = useMemo(() => [
        {
            icon: faBook,
            name: 'Rápido Aprendizaje',
            description: 'Toda la vida he sido autodidacta; se me hace muy fácil aprender cosas nuevas, lo que me lleva a estar constantemente explorando diferentes disciplinas y tratando de masterizarlas, cosa que se ve reflejada en la variedad de intereses que tengo. En lo profesional, definitivamente es una gran herramienta, sobretodo en el campo de la informática y desarrollo de software, en donde aparecen nuevas tecnologías constantemente que hay que aprender (frameworks, buenas prácticas, librerías, etc.)  '
        },
        {
            icon: faPaintBrush,
            name: 'Creatividad',
            description: 'Creo que ser creativo ayuda un montón en el desarollo de software, no sólo en la tarea de diseño (funcionalidades, interfaces, etc.), sino también en el troubleshooting, en donde es necesario mirar las cosas desde diferentes perspectivas para encontrar soluciones rápidas y eficientes.'
        },

        {
            icon: faBrain,
            name: 'Lógica',
            description: 'Pensar de forma lógica siempre me ha ayudado cuando se trata de resolver problemas, cosa que es algo constante en el mundo de la informática y el desarrollo de software; creo que la programación ayuda bastante a desarrollar este tipo de pensamiento o habilidad.'
        },
        {
            icon: faPersonHiking,
            name: 'Resiliencia',
            description: 'Es parte de mi personalidad seguir empujando hasta que las cosas funcionen. Creo que tengo la suficiente confianza en mí y mis capacidades como para seguir intentando encontrar un resultado positivo a pesar de tener las probabilidades en contra.'
        },
        {
            icon: faAward,
            name: 'Perfeccionismo',
            description: 'Me caracterizo por ser perfeccionista, las cosas mal hechas generan un descontento automático en mí, y por lo mismo acostumbro a estar buscando constantemente oportunidades de mejoras. Creo que con el pasar del tiempo he aprendido a pulir esta característica, y saber cuando las cosas están lo suficientemente refinadas, para no perder tiempo en detalles.'
        },
    ], [])
    const [active, setActive] = useState(1)

    const createModal = useCallback((text, title, icon) => {
        setOpenModal({
            open: true,
            text: text,
            title: title,
            icon: icon
        })
    }, [setOpenModal])

    const chooseTab = useCallback((tabIndex) => {
        setActive(tabIndex)
    }, [setActive])

    return (
        <div className="tabs-container">
            <div className="tab-headers">
                <div className={active === 1 ? 'tab-header active-header' : 'tab-header hidden-header'} onClick={() => chooseTab(1)}>
                    <FontAwesomeIcon icon={faCode} />
                    Tecnicas
                </div>
                <div className={active === 2 ? 'tab-header active-header' : 'tab-header hidden-header'} onClick={() => chooseTab(2)}>
                    <FontAwesomeIcon icon={faUser} />
                    Generales
                </div>
            </div>
            <div className="tab-bodies">
                <div className={active === 1 ? 'tab-content active-content tech-tab-content' : 'hidden-content'}>
                    {useMemo(() => techSkills.map(skill => {
                        return (
                            <div key={skill.name} className="tech-skill" onClick={() => createModal(skill.description, skill.name, skill.icon)}>
                                <div className="skillIcon">
                                    <FontAwesomeIcon icon={skill.icon} />
                                </div>
                                <div className="skillName">
                                    {skill.name}
                                </div>
                            </div>
                        )
                    }), [techSkills])}
                </div>
                <div className={active === 2 ? 'tab-content active-content general-tab-content' : 'hidden-content'}>
                    {useMemo(() => generalSkills.map(skill => {
                        return (
                            <div key={skill.name} className="general-skill" onClick={() => createModal(skill.description, skill.name, skill.icon)}>
                                <div className='general-skill-subcontainer'>
                                    <div className="skillIcon">
                                        <FontAwesomeIcon icon={skill.icon} />
                                    </div>
                                    <div className="skillName">
                                        {skill.name}
                                    </div>
                                </div>
                            </div>
                        )
                    }), [generalSkills])}
                </div>
            </div>
        </div>
    )
})

export default Tabs