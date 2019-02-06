import React from 'react';
import './MyProjects.css'

import ProjectList from '../../components/ProjectList'
import ConnectWithMe from '../../components/ConnectWithMe'
import ProjectsContactButtons from '../../components/ProjectsContactButtons'
import WebClients from '../../components/WebClients'

class MyProjects extends React.PureComponent {
    render () {
        return (
            <div className='contactUsPage'>
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-8 col-xs-12">
                            <ProjectList />
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <ConnectWithMe />
                            <ProjectsContactButtons />
                            <WebClients />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProjects;