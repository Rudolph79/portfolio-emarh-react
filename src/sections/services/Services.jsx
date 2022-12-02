import React from 'react'
import './services.css';
import data from './data.service';
import Card from '../../components/Card';

const Services = () => {
  return (
    <section id="services">
      <h2>Mes Services</h2>
      <p>Je donne le meilleur dans chacun des services ci-dessous avec passion.</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className='service light'>
              <div className='service__icon'>{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services;
