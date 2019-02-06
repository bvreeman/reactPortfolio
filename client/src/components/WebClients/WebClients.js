import React from "react";
import './WebClients.css';

// Images
import MVT from '../../images/RedMVT.png'
import hannay from '../../images/he_logo_RandB.jpg'
import vconsulting from '../../images/VClogo208x198.png'
import mapConsulting from '../../images/final.png'
import bookImage from '../../images/book_cover.png'
import sicora from '../../images/SicoraConsulting.png'
import github from '../../images/github.png'

const WebClients = () => {
    return (
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
    )
}

export default WebClients