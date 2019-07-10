import React from 'react';
import './AboutMeComponent.css'
import brandon from '../../images/brandon.jpg'

class AboutMeComponent extends React.PureComponent {
    render () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title"><h1>About Me</h1></div>
                </div>
                <div className="panel-body portfolioPanel">
                    <br />
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <img className="img-responsive brandonImage" src={brandon} alt="Brandon Vreeman" />
                            <p className='aboutMeSummary'>
                                Brandon is a graduate of Winona State University with a BS in Business Administration and has a 
                                Full Stack Web Developer Certificate from University of Minnesota. Through his experience, 
                                Brandon has started businesses, done sales calls, worked closely with customers to help their 
                                businesses, helped others start their businesses, along with a variety of other things.
                            </p>
                            <p className='aboutMeSummary'>
                                Brandon began his journey into building websites and web apps in 2015 when he and his wife
                                opened their own business <a href='https://www.vreemanconsulting.com' target="_blank" rel="noopener noreferrer">Vreeman Consulting, LLC</a>.
                                He started learning Wordpress using a variety of online resources and trainings and has continued learning
                                through building and refreshing websites along with ongoing trainings. In 2018, Brandon decided to take his
                                web creation a step farther and learn to code from scratch by going to the University of Minnesota Coding Bootcamp. 
                                Brandon went into the bootcamp with minimal knowledge in coding, and came out as one of the top coders in the class.
                            </p>
                            <p className='aboutMeSummary'> 
                                Brandon's ideal work is with an organization that is designed to help people. His main 
                                drive is to help people better themselves and the world around them. To him, web design is 
                                an excellent path to helping people. The web is a wild west where any person with a great 
                                idea can create something amazing. It can change their lives and can change the 
                                lives of the people around them and those that use the site/app. 
                            </p>
                            <p className='aboutMeSummary'> 
                                He would love to use his coding skills in a team environment that thrives on helping and 
                                encouraging one another to take the work one step further. He would want something that 
                                regularly stretches his skills and knowledge. If there is a clear goal set, he is not 
                                afraid of putting his head down and getting the work done that needs to get done.
                            </p>
                            <p className='aboutMeSummary'> 
                                Work/life balance that Brandon would like includes the ability to work remotely when the need arises 
                                with the ability to go into an office. When going into an office, ideally it would be in a 
                                community style office rather than being a cubicle or closed off. He would also like the 
                                flexibility to work when he's able to work as opposed to a set time schedule. Some of his 
                                best work is created in traditionally off hours.
                            </p>
                            <p className='aboutMeSummary'>
                                Brandon is most proud of the path he has taken to get to where he is today. He sees life 
                                in terms of building blocks. Each piece of experience or knowledge on its own doesn’t 
                                look like much, but once you start putting all those blocks together, you start to see 
                                something amazing. He's had some really high highs (The births of his children, marriage, 
                                opening two successful businesses, writing a children’s book that many kids love entitled 
                                <a href='https://www.brandonvreeman.com' target='_blank' rel='noopener noreferrer'> The Ball That Did Not Like to Bounce</a>, being 
                                one of the top salespeople for Fastenal) and some really low lows (his father’s passing 
                                at the age of 21) in his life, but each of those experiences has made him who he is today.
                            </p>
                            <p className='aboutMeSummary'>    
                                His jourey in becoming a Wordpress Web Developer, a Full Stack Web Developer, and a Web App Developer 
                                has been a great one so far. One of his favorite parts about it is that there is always going to be 
                                a new language to learn, another problem to solve, and another person to help in creating something 
                                that they love.   
                            </p>
                        </div>
                    </div>
                </div>    
            </div> 
        )
    }
}

export default AboutMeComponent;