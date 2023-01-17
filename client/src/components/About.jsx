import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import s from './About.module.css';

const About = ()=> {
    return(
        <>
            <Nav/>
            <div className={s.about__page}>
            <div className={s.about__content}>
            <Link to='/videogames'><button className={s.back__btn}>X</button></Link>
                <h2 className={s.about__title}>ABOUT</h2>    
                <div className={s.about__text}><p><b>GameLand</b> is a Single Page Application that was built as part as the <b>Henry</b> Fullstack Developer Bootcamp Individual Project.</p>
                <p>The site is entirely built with JavaScript and HTML, and formatted through CSS Modules. It permits the user to find information about 900+ games for 50 platforms including mobiles, which are illustrative and were extracted from <a className={s.linkRawg} href='https://rawg.io/apidocs'>"RAWG Video Games"</a></p>
                <p>Addittionally, users are able to create their own videogames. These videogames are storaged in a SQL database which was created with PostgresSQL and is manipulated through Sequelize.</p>
               <p>All videogames from the API and created by users are rendered in pages up to 9 videogames, and they can be filtered in a combined way by source and by genres.
                In addition, the desired selection of videogames can be sorted either by rating or alphabetically.
                Videogames can also be searched by name.</p>
                <p>The Front-End was built using React functional components and hooks. Global states were managed using Redux.</p>
               

                <p>Technologies used:</p>
                <ul>
                    <li>React</li>
                    <li>React-Router</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Sequelize</li>
                    <li>PostgresSQL</li>
                </ul>
                <p><b>Thanks for visting GameLand!</b></p>
                </div>
            </div>
            </div>
        </>
    )
}

export default About;