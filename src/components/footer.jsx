import facebook from '../assets/pics/icons/facebook.svg'
import instagram from '../assets/pics/icons/instagram.svg'
import linkedin from '../assets/pics/icons/linkedin.svg'
import github from '../assets/pics/icons/github.svg'

export const Footer = () => {

    return <section className="footer main-layout">
        <nav>
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
        </nav>
    </section>
}