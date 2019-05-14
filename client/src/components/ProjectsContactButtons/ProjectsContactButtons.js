import React from 'react';
import './ProjectsContactButtons.css'
import {Link} from 'react-router-dom';


class ProjectsContactButtons extends React.PureComponent {
    render () {
        return (
            <div>
                <div className="row center-block">
                    <Link to="/MyProjects" className="linkButton">Click to view My Projects</Link>
                </div>
                <div className="row center-block">
                    <Link to="/ContactUsPage" className="linkButton">Click to Contact Me</Link>
                </div>
            </div>
        )
    }
}

export default ProjectsContactButtons;
