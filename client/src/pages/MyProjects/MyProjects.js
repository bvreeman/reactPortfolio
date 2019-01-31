import React from 'react';
import './MyProjects.css'

class MyProjects extends React.PureComponent {
    render () {
        return (
            <div className='contactUsPage'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <div className="panel panel-default"> 
                                <div className="panel-body">
                                    <h1>Portfolio</h1>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://immense-ravine-66672.herokuapp.com/">
                                                <img className="img-responsive text-center" src="./Assets/Images/nytimes.png" alt="New York Times React Article Search" />
                                            </a>
                                            <div className="caption">
                                                <p>NYT React Article Search</p>
                                                <a href="https://github.com/bvreeman/nyTimesSearch">
                                                    <img border="0" alt="Code for the NY Times React Article Search app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://blooming-hamlet-95286.herokuapp.com/">
                                                <img className="img-responsive text-center" src="./Assets/Images/simpsonsGame.jpg" alt="React Memory Game" />
                                            </a>
                                            <div className="caption">
                                                <p>React Memory Game</p>
                                                <a href="https://github.com/bvreeman/memory_game">
                                                    <img border="0" alt="Code for the React Memory Game app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/Hangman-Game/.">
                                                    <img className="img-responsive text-center" src="./Assets/Images/Hangman_game.png" alt="Hangman Game" />
                                                </a>
                                            <div className="caption">
                                                <p>Hangman Game</p>
                                                <a href="https://github.com/bvreeman/Hangman-Game">
                                                    <img border="0" alt="Code for the Hangman app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/week-4-game/.">
                                                    <img className="img-responsive text-center" src="./Assets/Images/top_jewel1.png" alt="Crystals Collector" />
                                                </a>
                                            <div className="caption">
                                                <p>Crystals Collector</p>
                                                <a href="https://github.com/bvreeman/week-4-game">
                                                    <img border="0" alt="Code for the Crystals Collector app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                                <a href="https://bvreeman.github.io/Trivia-Game/.">
                                                    <img className="img-responsive text-center" src="./Assets/Images/US_map.png" alt="US State Capital Quiz" />
                                                </a>
                                            <div className="caption">
                                                <p>US Capitals Quiz</p>
                                                <a href="https://github.com/bvreeman/Trivia-Game">
                                                    <img border="0" alt="Code for the Trivia Game app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/giphy_api/.">
                                                <img className="img-responsive text-center" src="./Assets/Images/giphy.jpg" alt="Giphy API Project" />
                                            </a>
                                            <div className="caption">
                                                <p>Giphy API</p>
                                                <a href="https://github.com/bvreeman/giphy_api">
                                                    <img border="0" alt="Code for the Giphy app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/firebase-train-schedule/.">
                                                <img className="img-responsive text-center" src="./Assets/Images/train.jpg" alt="train" />
                                            </a>
                                            <div className="caption">
                                                <p>Train Schedule</p>
                                                <a href="https://github.com/bvreeman/firebase-train-schedule">
                                                    <img border="0" alt="Code for the Train Scheduler app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://github.com/bvreeman/liri-node-app">
                                                <img className="img-responsive text-center" src="./Assets/Images/node.jpg" alt="Node JS" />
                                            </a>
                                            <div className="caption">
                                                <p>Liri.js Program</p>
                                                <a href="https://github.com/bvreeman/liri-node-app">
                                                    <img border="0" alt="Code for the Liri Node app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://github.com/bvreeman/node-and-MySQL">
                                                <img className="img-responsive text-center" src="./Assets/Images/MySQL.jpg" alt="MySQL application" />
                                            </a>
                                            <div className="caption">
                                                <p>MySQL Bamazon Application</p>
                                                <a href="https://github.com/bvreeman/node-and-MySQL">
                                                    <img border="0" alt="Code for the Bamazon app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://friendfinderbv.herokuapp.com/">
                                                <img className="img-responsive text-center" src="./Assets/Images/expressjs.png" alt="Express JS Server Homework" />
                                            </a>
                                            <div className="caption">
                                                <p>Express + Node JS</p>
                                                <a href="https://github.com/bvreeman/express">
                                                    <img border="0" alt="Code for the Book Character Finder app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://bvreeman.github.io/mapWithTicketmaster/">
                                                <img className="img-responsive text-center" src="./Assets/Images/google-maps.png" alt="Maps with Ticketmaster" />
                                            </a>
                                            <div className="caption">
                                                <p>Maps with Ticketmaster</p>
                                                <a href="https://github.com/bvreeman/mapWithTicketmaster">
                                                    <img border="0" alt="Code for the Map with Ticketmaster app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12 imageBox">
                                            <a href="https://arcane-bastion-12475.herokuapp.com/">
                                                <img className="img-responsive text-center" src="./Assets/Images/twilio.png" alt="Twilio SMS Marketing App" />
                                            </a>
                                            <div className="caption">
                                                <p>Twilio SMS Marketing</p>
                                                <a href="https://github.com/bvreeman/REACH">
                                                    <img border="0" alt="Code for the Twilio app" src="./Assets/Images/github.png" width="50" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>  
                        </div>            
                        <div className="col-md-4 col-xs-12">
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Connect with Me</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://github.com/bvreeman">
                                                    <img src="./Assets/Images/github.png" className="img-responsive center-block" alt="Go to Github" />
                                                </a>
                                            </div>
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://www.linkedin.com/in/brandon-vreeman-74353714/">
                                                    <img src="./Assets/Images/linkedin.png" className="img-responsive center-block" alt="Go to LinkedIn" />
                                                </a>
                                            </div>
                                            <div className="col-md-4 col-xs-12">
                                                <a href="https://stackoverflow.com/users/8853722/brandon-vreeman">
                                                    <img src="./Assets/Images/stack_overflow.png" className="img-responsive center-block" alt="Go to Stack Overflow" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row center-block">
                                <a href="index.html" className="linkButton">Click to Read About Me</a>
                            </div>
                            {/* <div className="row center-block">
                                <a href="contact.html" className="linkButton">Click to Contact Me</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProjects;