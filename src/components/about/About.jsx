import React from "react";
import './About.css'
import ME from '../../assets/WhatsApp-Image-2023-02-23-at-18.47.58.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () =>{
    return(
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experiencie</h5>
                            <small>4 months working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>80+ completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur accusantium est! Aliquid eum quaerat cupiditate, esse ad, inventore rerum, libero fugiat consequuntur laborum nostrum similique fugit quas corporis ipsa!
                    </p>
                    <a href="#contact" className="btn btn-primary">Les't talk</a>
                </div>
            </div>
        </section>
    )
}

export default About