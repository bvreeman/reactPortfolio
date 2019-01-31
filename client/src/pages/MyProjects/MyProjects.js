import React from 'react';
import './MyProjects.css'
import nyTimes from '../../images/nytimes.png'
import hangman from '../../images/Hangman_game.png'
import github from '../../images/github.png'
import stackOverflow from '../../images/stack_overflow.png'
import linkedIn from '../../images/linkedin.png'
import giphy from '../../images/giphy.jpg'
import googeMaps from '../../images/google-maps.png'
import simpsons from '../../images/simpsonsGame.jpg'
import usMap from '../../images/US_map.png'
import train from '../../images/train.jpg'
import jewel from '../../images/top_jewel1.png'
import nodeImage from '../../images/node.png'
import mySQLImage from '../../images/MySQL.jpg'
import expressJSImage from '../../images/expressjs.png'
import twilio from '../../images/twilio.png'
import MVT from '../../images/RedMVT.png'
import hannay from '../../images/he_logo_RandB.jpg'
import vconsulting from '../../images/VClogo208x198.png'
import mapConsulting from '../../images/final.png'
import bookImage from '../../images/book_cover.png'
import sicora from '../../images/SicoraConsulting.png'

class MyProjects extends React.PureComponent {
    render () {
        return (
            <div className='contactUsPage'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <div className="panel panel-default portfolioPanel"> 
                                <div className="panel-heading">
                                    <h1 className="panel-title">Portfolio</h1>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://immense-ravine-66672.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={nyTimes} alt="New York Times React Article Search" />
                                            </a>
                                            <div className="caption">
                                                <p>NYT React Article Search</p>
                                                <a href="https://github.com/bvreeman/nyTimesSearch" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the NY Times React Article Search app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://blooming-hamlet-95286.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={simpsons} alt="React Memory Game" />
                                            </a>
                                            <div className="caption">
                                                <p>React Memory Game</p>
                                                <a href="https://github.com/bvreeman/memory_game" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the React Memory Game app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/Hangman-Game/." target="_blank" rel="noopener noreferrer">
                                                    <img className="img-responsive text-center" src={hangman} alt="Hangman Game" />
                                                </a>
                                            <div className="caption">
                                                <p>Hangman Game</p>
                                                <a href="https://github.com/bvreeman/Hangman-Game" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Hangman app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/week-4-game/." target="_blank" rel="noopener noreferrer">
                                                    <img className="img-responsive text-center" src={jewel} alt="Crystals Collector" />
                                                </a>
                                            <div className="caption">
                                                <p>Crystals Collector</p>
                                                <a href="https://github.com/bvreeman/week-4-game" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Crystals Collector app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/Trivia-Game/." target="_blank" rel="noopener noreferrer">
                                                    <img className="img-responsive text-center" src={usMap} alt="US State Capital Quiz" />
                                                </a>
                                            <div className="caption">
                                                <p>US Capitals Quiz</p>
                                                <a href="https://github.com/bvreeman/Trivia-Game" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Trivia Game app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/giphy_api/." target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={giphy} alt="Giphy API Project" />
                                            </a>
                                            <div className="caption">
                                                <p>Giphy API</p>
                                                <a href="https://github.com/bvreeman/giphy_api" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Giphy app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/firebase-train-schedule/." target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={train} alt="train" />
                                            </a>
                                            <div className="caption">
                                                <p>Train Schedule</p>
                                                <a href="https://github.com/bvreeman/firebase-train-schedule" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Train Scheduler app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://github.com/bvreeman/liri-node-app" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={nodeImage} alt="Node JS" />
                                            </a>
                                            <div className="caption">
                                                <p>Liri.js Program</p>
                                                <a href="https://github.com/bvreeman/liri-node-app" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Liri Node app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://github.com/bvreeman/node-and-MySQL" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={mySQLImage} alt="MySQL application" />
                                            </a>
                                            <div className="caption">
                                                <p>MySQL Bamazon Application</p>
                                                <a href="https://github.com/bvreeman/node-and-MySQL" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Bamazon app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://friendfinderbv.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={expressJSImage} alt="Express JS Server Homework" />
                                            </a>
                                            <div className="caption">
                                                <p>Express + Node JS</p>
                                                <a href="https://github.com/bvreeman/express" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Book Character Finder app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/mapWithTicketmaster/" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={googeMaps} alt="Maps with Ticketmaster" />
                                            </a>
                                            <div className="caption">
                                                <p>Maps with Ticketmaster</p>
                                                <a href="https://github.com/bvreeman/mapWithTicketmaster" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Map with Ticketmaster app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://arcane-bastion-12475.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img className="img-responsive text-center" src={twilio} alt="Twilio SMS Marketing App" />
                                            </a>
                                            <div className="caption">
                                                <p>Twilio SMS Marketing</p>
                                                <a href="https://github.com/bvreeman/REACH" target="_blank" rel="noopener noreferrer">
                                                    <img border="0" alt="Code for the Twilio app" src={github} width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>  
                        </div>            
                        <div className="col-md-4 col-xs-12">
                            <div className="row">
                                <div className="panel panel-default portfolioPanel">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Connect with Me</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://github.com/bvreeman" target="_blank" rel="noopener noreferrer">
                                                    <img src={github} className="img-responsive center-block" alt="Go to Github" />
                                                </a>
                                            </div>
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://www.linkedin.com/in/brandon-vreeman-74353714/" target="_blank" rel="noopener noreferrer">
                                                    <img src={linkedIn} className="img-responsive center-block" alt="Go to LinkedIn" />
                                                </a>
                                            </div>
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://stackoverflow.com/users/8853722/brandon-vreeman" target="_blank" rel="noopener noreferrer">
                                                    <img src={stackOverflow} className="img-responsive center-block" alt="Go to Stack Overflow" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row center-block">
                                <a href="/" className="linkButton">Click to Read About Me</a>
                            </div>
                            {/* <div className="row center-block">
                                <a href="contact.html" className="linkButton">Click to Contact Me</a>
                            </div> */}
                            <div className="row">
                                <div className="panel panel-default portfolioPanel">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Client Websites</h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className='row'>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="http://www.mnvalleytransport.com/" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={MVT} alt="Minnesota Valley Transport" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>Minnesota Valley Transport Website</p>
                                                        <a href="https://github.com/bvreeman/MVT" target="_blank" rel="noopener noreferrer">
                                                            <img border="0" alt="Code for the Minnesota Valley Transport" src={github} width="50" height="50" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="http://www.hannayelectric.com" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={hannay} alt="Hannay Electric Website" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>Hannay Electric Website</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="https://www.sicoraconsulting.com" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={sicora} alt="Sicora Consulting Website" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>Sicora Consulting Website</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="https://www.brandonvreeman.com" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={bookImage} alt="Brandon Vreeman Website" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>Brandon Vreeman Author Website</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="http://mapconsultingagency.com/" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={mapConsulting} alt="MAP Consulting Agency Website" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>MAP Consulting Agency Website</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xs-12 imageBox">
                                                    <a href="https://www.vreemanconsulting.com" target="_blank" rel="noopener noreferrer">
                                                        <img className="img-responsive text-center" src={vconsulting} alt="Vreeman Consulting Website" />
                                                    </a>
                                                    <div className="caption">
                                                        <p>Vreeman Consulting Website</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProjects;