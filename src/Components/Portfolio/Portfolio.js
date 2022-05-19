import Project from './Project/Project'
import { useState, useMemo, useCallback, memo } from 'react'
import './Portfolio.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cover1 from '../../Assets/lista_tareas.png'
import cover2 from '../../Assets/ADV_gallery.png'
import cover3 from '../../Assets/glass_dashboard.png'
import cover4 from '../../Assets/threejs.png'
import cover5 from '../../Assets/blender.png'
import cover6 from '../../Assets/shopping_cart.png'
import cover7 from '../../Assets/images_search.png'
import cover8 from '../../Assets/calculadora.png'

const Portfolio = memo(({ openModal, setOpenModal }) => {
    const projects = useMemo(() => [
        {
            cover: cover1,
            id: 1,
            name: 'Lista de tareas',
            description: 'Aplicación para administrat tareas, desarrollada utilizando React. Se pueden agregar y borrar tareas de la lista, además de marcarlas como completadas; las tareas se guardan en el almacenamiento local, por lo que persisten una vez cerrado el navegador.',
            tools: ['React,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/todo-list/'
        },
        {
            cover: cover2,
            id: 2,
            name: 'Software de gestión multiplataforma (para Aguas del Valle)',
            description: 'Software multiplataforma (iOS, Android, Desktop) desarrollado utilizando Ionic y consumiendo una API desarrollada en NodeJS  . El software permite gestionar las operaciones de emergencia de la empresa, desde la identificación de un evento en un mapa, hasta el pago de los contratistas involucrados, y todos los procesos intermedios. \n\n Más información en "Demo".',
            tools: ['Ionic,', 'Angular,', 'TypeScript,', 'NodeJS,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/ADV-gallery/'
        },
        {
            cover: cover6,
            id: 3,
            name: 'Carro de compras',
            description: 'Aplicación de Carro de compras que realicé para prácticar con React. La aplicación consume una API libre de productos, y permite agregarlos a un carro de compras.',
            tools: ['React,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/shopping-cart/'
        },
        {
            cover: cover7,
            id: 4,
            name: 'Buscador de imágenes',
            description: 'Aplicación de busqueda de imágenes para prácticar React y la librería Formik. La app consume una API de imágenes y las muestra en un layout.',
            tools: ['React,', 'Formik,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/images-search'
        },
        {
            cover: cover8,
            id: 5,
            name: 'Calculadora de interés compuesto',
            description: 'Aplicación que realicé para probar un poco más de la libería Formik de React.',
            tools: ['React,', 'Formik,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/interest-calculator'
        },
        {
            cover: cover3,
            id: 6,
            name: 'Glass dashboard',
            description: 'Probando un diseño de dashboard con el efecto de transparencia (que utilicé para crear esta página personal)',
            tools: ['Html,', 'CSS'],
            link: 'https://matokun93.github.io/glass-dashboard/'
        },
        {
            cover: cover4,
            id: 7,
            name: 'Prueba de ThreeJS (3D)',
            description: 'Probando una librería de JavaScript que permite implementar modelos 3D en aplicaciones web, además de poder animar, texturizar y modelar dichos modelos. En este caso la esfera tiene un mapa normal e interactúa con el movimiento del mouse.',
            tools: ['JavaScript,', 'CSS,', 'Html,', 'ThreeJS'],
            link: 'https://matokun93.github.io/3D-sphere/'
        },
        {
            cover: cover5,
            id: 8,
            name: '3D renders',
            description: 'Una galería de renders 3D realizados con Blender (Software que utilicé para las ilustraciones de esta página)',
            tools: ['Blender'],
            link: 'https://matokun93.github.io/blender-gallery/'
        },
    ], [])
    const [animation, setAnimation] = useState('')
    const [active, setActive] = useState(1)

    const total = projects.length

    const nextProject = useCallback(() => {
        setActive(active !== total ? active + 1 : 1)
        setAnimation('slideLeft')
    }, [active, setActive, setAnimation, total])

    const previousProject = useCallback(() => {
        setActive(active !== 1 ? active - 1 : total)
        setAnimation('slideRight')
    }, [active, setActive, setAnimation, total])

    return (
        <div className='portfolio-section'>
            <button className='arrow-button' onClick={() => previousProject()}><FontAwesomeIcon icon={faAngleLeft} /></button>
            {useMemo(() => projects.map(card => {
                return (
                    < Project
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        cover={card.cover}
                        description={card.description}
                        tools={card.tools}
                        link={card.link}
                        total={projects.length}
                        active={active}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        animation={animation}
                    />
                )
            }), [projects, active])}
            <button className='arrow-button' onClick={() => nextProject()}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    )
})

export default Portfolio