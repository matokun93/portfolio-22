import { faClapperboard, faCube, faFutbol, faGamepad, faGuitar } from '@fortawesome/free-solid-svg-icons'
import { memo, useCallback, useMemo, useState } from 'react'
import './About.css'
import Interest from './Interest/Interest'
import InterestDescription from './InterestDescription/InterestDescription'

const About = memo(() => {
    const [active, setActive] = useState(1)
    const [activeCard, setActiveCard] = useState(1)

    const showCardContent = useCallback((id) => {
        setActiveCard(id)
    }, [setActiveCard])

    const changeActive = useCallback((id) => {
        setActive(id)
    }, [setActive])

    const interests = useMemo(() => [
        {
            id: 1,
            name: 'Fútbol',
            icon: faFutbol,
            description: '- Fan del Joga Bonito.\n\n- Jugadores favoritos: Ronaldinho, Riquelme.'
        },
        {
            id: 2,
            name: 'Guitarra',
            icon: faGuitar,
            description: '- Grupo favorito: Pink Floyd.\n\n - Guitarristas favoritos: Derek Trucks, David Gilmour, Angus Young, Chris Buck.'
        },
        {
            id: 3,
            name: 'Arte 3D',
            icon: faCube,
            description: '- Programa Favorito: Blender.\n\n - Hago renders porque amo el arte, también hago assets para videojuegos.'
        },
        {
            id: 4,
            name: 'Juegos',
            icon: faGamepad,
            description: '- Primera consola: Nintendo (el normal, no el Super).\n\n- El mejor juego: Probablemente el último God of War, nota 10/10.'
        },
        {
            id: 5,
            name: 'Cine',
            icon: faClapperboard,
            description: '- Película: Lord of the Rings (las 3), The Prestige (cualquiera de Nolan).\n\n- Serie: Game of Thrones (hasta la temporada 6), Breaking Bad.\n\n- Anime: Hunter x Hunter, Shingeki.'
        },
    ], [])

    return (
        <div className={activeCard === 1 ? 'about-section' : 'about-section inverted-about-section'}>
            <div className={activeCard === 1 ? 'active-card about-text-container' : 'about-text-container inactive-card'} onClick={() => showCardContent(1)}>
                <h1>Sobre mí</h1>
                <p >
                    Soy un Ingeniero Civil al que le apasionan el desarrollo de software, el aprendizaje
                    continuo, y las buenas prácticas. <br /><br />
                    Aprendo muy rápido, me adapto y soy creativo. Siempre estoy buscando oportunidades para hacer mejoras
                    e innovar;
                    soy autodidacta, me gusta explorar y aprender diferentes disciplinas aprovechando mi rápido
                    aprendizaje, y siempre estoy dispuesto a aportar con mi experiencia a quien lo necesite.
                </p>
            </div>
            <div className={active && activeCard === 2 ? 'interests-container interest-active active-card' : 'interests-container inactive-card'} onClick={() => showCardContent(2)} >
                <h1>Intereses</h1>
                <div className='interests-icons'>
                    {useMemo(() => interests.map((interest) => {
                        return (
                            <div onClick={() => changeActive(interest.id)} key={interest.id}>
                                <Interest
                                    active={active}
                                    key={interest.id}
                                    id={interest.id}
                                    icon={interest.icon}
                                    name={interest.name}
                                />
                            </div>
                        )
                    }), [interests])}
                </div>
                <div className='interests-descriptions'>
                    {interests.map((interest) => {
                        return (
                            <InterestDescription
                                active={active}
                                key={interest.id}
                                id={interest.id}
                                description={interest.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

export default About