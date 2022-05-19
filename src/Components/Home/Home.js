import { useState, memo, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import useCopyToClipboard from '../../CustomHooks/useCopyToClipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload, faUserGraduate, faMicrochip, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTransition, animated } from 'react-spring'

import homeImageLight from '../../Assets/home_light.png'
import homeImageDark from '../../Assets/home_dark.png'
import './Home.css'

const Home = memo(({ darkImages }) => {
    const [copyToClipboard, { success, setSuccess }] = useCopyToClipboard()
    const [mailModal, setMailModal] = useState(false)
    const [phoneModal, setPhoneModal] = useState(false)

    const showMailModal = useCallback((show) => {
        setMailModal(show)
        if (show === false) {
            setSuccess(false)
        }
    }, [setSuccess])

    const showPhoneModal = useCallback((show) => {
        setPhoneModal(show)
        if (show === false) {
            setSuccess(false)
        }
    }, [setSuccess])

    const transitionMail = useTransition(mailModal, {
        from: { display: 'none', opacity: 0 },
        enter: { display: 'flex', opacity: 1 },
        leave: { display: 'none', opacity: 0 }
    })

    const transitionPhone = useTransition(phoneModal, {
        from: { display: 'none', opacity: 0 },
        enter: { display: 'flex', opacity: 1 },
        leave: { display: 'none', opacity: 0 }
    })

    return (
        <div className='home-section'>
            <div className="home-left-side">
                <div className="home-icons">
                    <div>
                        {
                            transitionMail((style, item) =>
                                item
                                    ? <animated.div style={style} className="icon-modal-container"
                                        onMouseEnter={() => showMailModal(true)}
                                        onMouseLeave={() => showMailModal(false)}
                                    >
                                        <div className="icon-modal">
                                            <p>matias.jca93@gmail.com</p>
                                            <div className={success ? 'icon-modal-button button-copied' : 'icon-modal-button'} onClick={() => copyToClipboard('matias.jca@gmail.com')}>
                                                <FontAwesomeIcon icon={success ? faCheck : faCopy} />
                                                <p>{success ? 'Copiado' : 'Copiar'}</p>
                                            </div>
                                        </div>
                                    </animated.div>
                                    : null
                            )
                        }
                        <button
                            onMouseEnter={() => showMailModal(true)}
                            onMouseLeave={() => showMailModal(false)}
                            onClick={() => showMailModal(true)}
                            className={mailModal ? 'hovered' : ''}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                    <div>
                        {
                            transitionPhone((style, item) =>
                                item
                                    ? <animated.div style={style} className="icon-modal-container"
                                        onMouseEnter={() => showPhoneModal(true)}
                                        onMouseLeave={() => showPhoneModal(false)}
                                    >
                                        <div className="icon-modal">
                                            <p>+56 9 9270 4341</p>
                                            <div className={success ? 'icon-modal-button button-copied' : 'icon-modal-button'} onClick={() => copyToClipboard('+56992704341')}>
                                                <FontAwesomeIcon icon={success ? faCheck : faCopy} />
                                                <p>{success ? 'Copiado' : 'Copiar'}</p>
                                            </div>
                                        </div>
                                    </animated.div>
                                    : null
                            )
                        }
                        <button
                            onMouseEnter={() => showPhoneModal(true)}
                            onMouseLeave={() => showPhoneModal(false)}
                            onClick={() => showPhoneModal(true)}
                            className={phoneModal ? 'hovered' : ''}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </button>
                    </div>
                    {/* <button>
                        <FontAwesomeIcon icon={faGithub} />
                    </button> */}
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                </div>
                <h1 className="home-title">Matías Castro <br /> Arriagada</h1>

                <div className="home-image">
                    {
                        darkImages
                            ? <img src={homeImageDark + '?' + new Date()} alt="" />
                            : <img src={homeImageLight + '?' + new Date()} alt="" />
                    }
                </div>
            </div>
            <div className="home-right-side">
                <h1 className="home-title">Matías Castro <br /> Arriagada</h1>
                <div className="home-text">
                    <p>
                        <FontAwesomeIcon icon={faUserGraduate} />
                        Ingeniero Civil en Computacion <br /> e Informatica
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMicrochip} />
                        Desarrollador de Software
                    </p>
                </div>
                <div className="home-buttons">
                    <button className='home-primary-button'>
                        <FontAwesomeIcon icon={faDownload} />
                        Descargar CV
                    </button>
                    <button className='home-secondary-button'>
                        <NavLink to='portfolio'>Ver Portafolio</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Home