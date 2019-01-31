import React from 'react';
import './AboutMe.css'
import bookImage from '../../images/book_cover.png'
import brandon from '../../images/brandon.jpg'
import github from '../../images/github.png'
import stackOverflow from '../../images/stack_overflow.png'
import linkedIn from '../../images/linkedin.png'

class AboutMe extends React.PureComponent {
    render () {
        return (
            <div className='AboutMePage'>
                <div className="container">
            <div className="row">
                <div className="col-md-8 col-xs-12">
                    <div className="panel panel-default"> 
                        <div className="panel-body">
                            <h1>About Me</h1>
                            <hr/>
                            <br />
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <img className="img-responsive brandonImage" src={brandon} alt="Brandon Vreeman" />
                                    <p className='aboutMeSummary'>Brandon is a graduate of Winona State University with a BS in Business Administration. He 
                                        worked for Fastenal in various aspects from picking orders to cold, warm, and hot lead sales calls
                                        to purchasing items from vendors. He became a Stay at Home Dad in August of 2011 
                                        after their oldest daughter was born. He opened up a buying and selling business during 
                                        that time and purchased many different items from estate sales, auctions, garage sales, 
                                        and others and sold them in various methods. Using that experience, he helped his wife 
                                        open their consulting business in September of 2015. He's been running the business side 
                                        of that since it’s conception. He also wrote a children’s book under their consulting 
                                        business. 
                                    </p>
                                    <p className='aboutMeSummary'> Brandon's ideal work is with an organization that is designed to help people. His main 
                                        drive is to help people better themselves and the world around them. He would love to use 
                                        his coding skills in a team environment that thrives on helping and encouraging one another 
                                        to take the work one step further. He would want something that regularly stretches his 
                                        skills and knowledge. If there is a clear goal set, he is not afraid of putting his head 
                                        down and getting the work done that needs to get done.
                                    </p>
                                    <p className='aboutMeSummary'> Work/life balance that Brandon would like includes working mostly remotely with the 
                                        ability to go into an office. When going into an office, ideally it would be in a 
                                        community style office rather than being a cubicle or closed off. He would also like the 
                                        flexibility to work when he's able to work as opposed to a set time schedule. Some of his 
                                        best work is created in traditionally off hours.
                                    </p>
                                    <p className='aboutMeSummary'>
                                        Brandon is most proud of the path he has taken to get to where he is today. He sees life 
                                        in terms of building blocks. Each piece of experience or knowledge on its own doesn’t 
                                        look like much, but once you start putting all those blocks together, you start to see 
                                        something amazing. He's had some really high highs (The births of his children, marriage, 
                                        opening two successful businesses, writing a children’s book that many kids love, being 
                                        one of the top salespeople for Fastenal) and some really low lows (his father’s passing 
                                        at the age of 21) in his life, but each of those experiences has made him who he is today.
                                        He am also very proud of how far He's come in his coding bootcamp. After about week 3, he 
                                        felt like he was completely overwhelmed and would not be able to make it through the class. 
                                        Through a lot of hard work, today, he's realized how much he's learned and how far he's come. 
                                        He may not be able to apply for a senior position that would usually come with his age group, 
                                        but he knows that he can get work that he never would have dreamed possible before starting
                                        the coding bootcamp.
                                            
                                    </p>
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
                                            <img src={github} className="img-responsive center-block" alt="Go to Github" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-xs-12">
                                        <a href="https://www.linkedin.com/in/brandon-vreeman-74353714/">
                                            <img src={linkedIn} className="img-responsive center-block" alt="Go to LinkedIn" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-xs-12">
                                        <a href="https://stackoverflow.com/users/8853722/brandon-vreeman">
                                            <img src={stackOverflow} className="img-responsive center-block" alt="Go to Stack Overflow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row center-block">
                        <a href="/" className="linkButton">Click to view My Projects</a>
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

export default AboutMe;