import React from 'react'
import './header.css';
import Harry from '../../assets/harry_confinement.jpeg';
import data from './data.header';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className="header__profile">
          <img src={Harry} alt="Harry" />
        </div>
        <h3>Harry EBANG MEZUI</h3>
        <p>
          Je suis ingénieur issu de deux Écoles d'ingénieur: <strong>ISEP</strong> et 
          <strong>Télécom ParisTech</strong>. Je suis développeur Web, Mobile et Logiciel.
          En tant que développeur Full-Stack, je suis passionné par les langages JavaScript 
          (NodeJS, React JS, VueJS) et PHP (Symfony2, 3, 4, 5 & 6).
          Je suis passionné d'<b>Enseignements</b>, de <b>Piano</b>, de <b>NBA</b> et de <b>Football</b>.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Me contacter</a>
          <a href="#portfolio" className='btn light'>Mes Oeuvres</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" 
            rel='noopener nor'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header;