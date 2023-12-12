import facebook from '../assets/pics/icons/facebook.svg'
import instagram from '../assets/pics/icons/instagram.svg'
import linkedin from '../assets/pics/icons/linkedin.svg'
import github from '../assets/pics/icons/github.svg'

export const Footer = () => {
    let html = document.querySelector('html')
    html.classList.add('active')
    const changeCanvas = (e) => {
        let isChecked = e.target.checked
        if (isChecked)
            html.classList.add('active')
        else
            html.classList.remove('active')

    }
    return <section className="footer main-layout">
        <nav className='flex'>
            <ul className="flex space-between align-center">
                <li>
                    <a href="https://www.facebook.com/dontmindmejustcleaninguphere/" target='noopener'>
                        <img src={facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eilon_vana/" target='noopener'>
                        <img src={instagram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eilonvana/" target='noopener'>
                        <img src={linkedin} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/EilonV" target='noopener'><img src={github} alt="" /></a>
                </li>
            </ul>
            <div className="toggle-wrapper">
                <input className="toggle-checkbox" type="checkbox" defaultChecked onChange={changeCanvas} />
                <div className="toggle-container">
                    <div className="toggle-button">
                        <div className="toggle-button-circles-container">
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                            <div className="toggle-button-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </section>
}