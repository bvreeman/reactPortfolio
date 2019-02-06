import React from 'react';
import './AboutMe.css'
// import bookImage from '../../images/book_cover.png'
import ConnectWithMe from '../../components/ConnectWithMe'
import ProjectsContactButtons from '../../components/ProjectsContactButtons'
import AboutMeComponent from '../../components/AboutMeComponent'

class AboutMe extends React.PureComponent {
    render () {
        return (
            <div className='AboutMePage'>
                <div className="col-md-8 col-xs-12">
                    <AboutMeComponent />
                </div>           
                <div className="col-md-4 col-xs-12">
                    <ConnectWithMe />
                    <ProjectsContactButtons />
                </div>
\        </div>
        )
    }
}

export default AboutMe;