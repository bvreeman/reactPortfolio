import React from 'react';
import './ProjectsContactButtons.css'

class ProjectsContactButtons extends React.PureComponent {
    render () {
        return (
            <div>
                <div className="row center-block">
                    <a href="/MyProjects" className="linkButton">Click to view My Projects</a>
                </div>
                <div className="row center-block">
                    <a href="/ContactUsPage" className="linkButton">Click to Contact Me</a>
                </div>
            </div>
        )
    }
}

export default ProjectsContactButtons;
