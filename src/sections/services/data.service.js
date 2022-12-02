import {FaSymfony} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaVuejs} from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi';
import {FaChalkboardTeacher} from 'react-icons/fa';

const data = [
    {
        id:1, 
        icon: <FaSymfony />, title: 'Développeur Symfony', 
        desc: 'Je développe des applications et des sites web, des API et des microservices en PHP Symfony.'
    },
    {
        id:2, 
        icon: <FaNodeJs />, title: 'Développeur Node JS', 
        desc: 'Développement d\'applications web, d\'API et de Back d\'applications, Microservices...'
    },
    {
        id:3, 
        icon: <FaReact />, title: 'Développement Front React', 
        desc: 'Développement d\'interfaces utilisateurs interactives en ReactJS et d\'applications mobiles en React Native.'
    },
    {
        id:4, 
        icon: <FaVuejs />, title: 'Développeur VueJS', 
        desc: 'Développement d\'applications web (interfaces utilisateur interactives) ultra performantes'
    },
    {
        id:5, 
        icon: <GiTeacher />, title: 'Formateur en Sciences', 
        desc: 'Formateur en Maths, Physique et Chimie pour les élèves étant en difficulté au niveau des sciences. Quelque soit le niveau de l\élève il y a toujours moyen de le faire progresser.'
    },
    {
        id:6, 
        icon: <FaChalkboardTeacher />, title: 'Formateur en informatique', 
        desc: 'Formateur en développement Web, Mobile allant de niveau début (sans prérequis) au niveau avancé. Pour toute personne désireux de savoir développer est le bienvenue.'
    }
];

export default data;