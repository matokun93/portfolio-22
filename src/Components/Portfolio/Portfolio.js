import Project from './Project/Project'
import { useState, useMemo, useCallback, memo } from 'react'
import './Portfolio.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cover1 from '../../Assets/budgets.png'
import cover2 from '../../Assets/lista_tareas.png'
import cover3 from '../../Assets/ADV_gallery.png'
import cover4 from '../../Assets/shopping_cart.png'
import cover5 from '../../Assets/images_search.png'
import cover6 from '../../Assets/calculadora.png'
import cover7 from '../../Assets/glass_dashboard.png'
import cover8 from '../../Assets/threejs.png'
import cover9 from '../../Assets/blender.png'

const Portfolio = memo(({ openModal, setOpenModal }) => {
    const projects = useMemo(() => [
        {
            cover: cover1,
            id: 1,
            name: 'App de presupuestos',
            description: 'Aplicación que permite administrar presupuestos, desarollada con React, React-Bootstrap y utilizando Context. Se pueden agregar y eliminar tanto presupuestos como gastos, además de poder ver de forma gráfica el estado de cada presupuesto.',
            tools: ['React,', 'Context', 'JavaScript,', 'Html,', 'React-Bootstrap'],
            link: 'https://matokun93.github.io/budget-app/'
        },
        {
            cover: cover2,
            id: 2,
            name: 'Lista de tareas',
            description: 'Aplicación para administrar tareas, desarrollada utilizando React. Se pueden agregar y borrar tareas de la lista, además de marcarlas como completadas; las tareas se guardan en el almacenamiento local, por lo que persisten una vez cerrado el navegador.',
            tools: ['React,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/todo-list/'
        },
        {
            cover: cover3,
            id: 3,
            name: 'Software de gestión multiplataforma (para Aguas del Valle)',
            description: 'Software multiplataforma (iOS, Android, Desktop) desarrollado utilizando Ionic y consumiendo una API desarrollada en NodeJS. El software permite gestionar las operaciones de emergencia de la empresa, desde la identificación de un evento en un mapa, hasta el pago de los contratistas involucrados, y todos los procesos intermedios. \n\n Más información en "Demo".',
            tools: ['Ionic,', 'Angular,', 'TypeScript,', 'NodeJS,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/ADV-gallery/'
        },
        {
            cover: cover4,
            id: 4,
            name: 'Carro de compras',
            description: 'Aplicación de Carro de compras que realicé para prácticar con React. La aplicación consume una API libre de productos, y permite agregarlos a un carro de compras.',
            tools: ['React,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/shopping-cart/'
        },
        {
            cover: cover5,
            id: 5,
            name: 'Buscador de imágenes',
            description: 'Aplicación de busqueda de imágenes para prácticar React con la librería Formik. La app consume una API de imágenes y las muestra en un layout.',
            tools: ['React,', 'Formik,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/images-search'
        },
        {
            cover: cover6,
            id: 6,
            name: 'Calculadora de interés compuesto',
            description: 'Aplicación que realicé para probar un poco más de la libería Formik.',
            tools: ['React,', 'Formik,', 'JavaScript,', 'Html,', 'CSS'],
            link: 'https://matokun93.github.io/interest-calculator'
        },
        {
            cover: cover7,
            id: 7,
            name: 'Glass dashboard',
            description: 'Probando un diseño de dashboard con el efecto de transparencia (que utilicé para crear esta página personal).',
            tools: ['Html,', 'CSS'],
            link: 'https://matokun93.github.io/glass-dashboard/'
        },
        {
            cover: cover8,
            id: 8,
            name: 'Prueba de ThreeJS (3D)',
            description: 'Probando una librería de JavaScript que permite implementar modelos 3D en aplicaciones web, además de poder animar, texturizar y modelar dichos modelos. En este caso la esfera tiene un mapa normal e interactúa con el movimiento del mouse.',
            tools: ['JavaScript,', 'CSS,', 'Html,', 'ThreeJS'],
            link: 'https://matokun93.github.io/3D-sphere/'
        },
        {
            cover: cover9,
            id: 9,
            name: '3D renders',
            description: 'Una galería de renders 3D realizados con Blender (Software que utilicé para las ilustraciones de esta página).',
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