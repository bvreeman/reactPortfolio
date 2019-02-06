import React from 'react';
import './ConnectWithMe.css'
import github from '../../images/github.png'
import stackOverflow from '../../images/stack_overflow.png'
import linkedIn from '../../images/linkedin.png'

class ConnectWithMe extends React.PureComponent {
    render () {
        return (
            <div className="row">
                <div className="panel panel-default portfolioPanel">
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
        )
    }
}

export default ConnectWithMe;

