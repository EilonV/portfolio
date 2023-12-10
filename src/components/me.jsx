import avatar from '../assets/pics/avatar.png'

export const Me = () => {
    return <div className="me flex column comp">
        <h2>Me</h2>
        <div className="me-data flex align-center justify-center">
            <img src={avatar} alt="my avatar (illustrated)" />
            <div className="specs">
                <p>Hey i'm <b>Eilon</b>, I am 28 from Gedera, Frontend developer and currently looking for work as a Frontend developer. I am a creative individual who enjoys coding, design and anything artistic.</p>
            </div>
        </div>
    </div>
}