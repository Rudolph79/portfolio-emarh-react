import React from 'react';
import './about.css';
import AboutImage from '../../assets/harry_cergy.jpeg';
import CV from '../../assets/CV_ebang_mezui-1.pdf';
import {HiDownload} from 'react-icons/hi';
import data from './data.about';
import Card from '../../components/Card';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Harry" />
          </div>
        </div>
        <div className='about__right'>
          <h2>A propos de Harry</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Je développe des applications pour mes clients avec amour et passion. J'accompagne des élèves 
            des étudiants, des professionnels ou des personnes en reconversion. Je suis passionné par 
            l'enseignement, l'accompagnement et le développement.
          </p>
          <p>
            Je suis issu de deux écoles d'ingénieur: ISEP (Institut Supérieur d'Électronique de Paris) et 
            Télécom ParisTech du groupe Mines (Mines Télécom). A l'issu de ces écoles d'ingénieur, je suis 
            devenu Ingénieur Logiciel et Ingénieur Télécom et Traitement de Signal. J'ai eu parcours scientifique 
            avec un Bac C et issu d'une Classe Prépas (CPGE) en MPSI (Math Physique et Science de l'Ingénieur).
          </p>
          <a href={CV} download className='btn primary'>
            Télécharger mon CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About;
