import { Projects } from "../components/projects";
import { Me } from "../components/me";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Personal } from "../components/personal";
import { Canvas } from "../components/canvas";
import { Bonus } from "../components/bonus";

export const Spotlight = () => {
    return <main className="spotlight main-layout">
        <section className="components flex column align-center justify-center">
            <div className="row flex">
                <Me />
                <Projects />
            </div>
            <div className="row flex row-col">
                <Skills />
                <Contact />
                <div className="col flex column">
                    <Personal />
                    <Bonus />
                </div>
            </div>
        </section>
        <Canvas />
    </main>
}