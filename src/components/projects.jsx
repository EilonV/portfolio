import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from "swiper";

export const Projects = () => {
    return <div className="projects comp">
        <h2>projects</h2>
        <ul className="project-list">
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <li className="project">
                        <h3>Animember</h3>
                        <p>An anime information website using up-to-date API</p>
                        <a href="https://animember.netlify.app/" target="_blank" rel="noreferrer">visit</a>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="project">
                        <h3>Chinese gender calculator</h3>
                        <p>An interactive project for a graphic designer's final project meant to show how the chinese predict the child's gender</p>
                        <a href="https://chinesegender.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="project">
                        <h3>Bdayz</h3>
                        <p>Birthday reminders to never forget another bday</p>
                        <a href="https://bdayz.netlify.app/" target="_blank" rel="noreferrer">visit</a>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="project">
                        <h3>Daily color</h3>
                        <p>A random daily color with a corresponding image grid to inspire creativity for your next project</p>
                        <a href="https://dailycolor.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="project">
                        <h3>Animember</h3>
                        <p>An anime information website using up-to-date API</p>
                        <a href="https://animember.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li>
                </SwiperSlide>
            </Swiper>
            {/* 
            <li className="project">
                <h3>Chinese gender calculator</h3>
                <p>An interactive project for a graphic designer's final project meant to show how the chinese predict the child's gender</p>
                <a href="https://chinesegender.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li>
            <li className="project">
                <h3>Bdayz</h3>
                <p>Birthday reminders to never forget another bday</p>
                <a href="https://bdayz.netlify.app/" target="_blank" rel="noreferrer">visit</a>
            </li>
            <li className="project">
                <h3>Daily color</h3>
                <p>A random daily color with a corresponding image grid to inspire creativity for your next project</p>
                <a href="https://dailycolor.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li>
            <li className="project">
                <h3>Animember</h3>
                <p>An anime information website using up-to-date API</p>
                <a href="https://animember.netlify.app/" target="_blank" rel="noreferrer">visit</a>                        </li> */}
        </ul>
    </div>
}