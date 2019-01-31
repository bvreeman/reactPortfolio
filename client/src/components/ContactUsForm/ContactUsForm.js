import React from 'react';
import './ContactUsForm.css';
import ContactFormSubmit from '../../components/ContactFormSubmit';
import axios from 'axios';

class ContactForQuote extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            PhoneNumber: '',
            Email: '',
            CustomerMessage: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {    
        this.setState({ [e.target.name]: e.target.value });
    }

    handleReCAPTCHAchange = (response) =>{
        console.log('is there a response', response)
        console.log('before', this.state.reCAPTCHAvalue)
        this.setState( this.state.reCAPTCHAvalue === true )
        console.log('after', this.state.reCAPTCHAvalue)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const FullName = document.getElementById('FullName').value;
        const PhoneNumber = document.getElementById('PhoneNumber').value;
        const Email = document.getElementById('Email').value;
        const CustomerMessage = document.getElementById('CustomerMessage').value;
        if (this.state.FullName !== '' && this.state.Email !== '' && this.state.CustomerMessage !== ''){
            axios({
                method: 'POST',
                url: '/contactForm/send',
                data: {
                    FullName,
                    PhoneNumber,
                    Email,
                    CustomerMessage
                }
            }).then( 
               (response) => {
                   console.log('this is the response', response)
               } ,
               (error) => {
                   console.log('this is the error', error)
               }
            ).then(() => {
                this.setState({submitted: true });
            })
        } else {
            alert('Please fill out the remaining required fields')
        }
    }

    render() {
        if (this.state.submitted) {
            return <ContactFormSubmit/>;
        }
        else {
            return(
                <div className='contactForQuote'>
                    <h3 className='contactForQuoteHeading'><span>Contact Us</span> for a Quote</h3>
                        <form id="contact-form" className='contactForm col-md-5 col-xs-12' onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className='col-md-12 col-xs-12 contactUsForm'>
                                <div className="form-group">
                                    <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.FullName} name="FullName" id="FullName" placeholder="Full Name (required)" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={this.handleChange} className="form-control" value={this.state.PhoneNumber} name='PhoneNumber' id="PhoneNumber" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                <input required type='text' onChange={this.handleChange} className="form-control" value={this.state.Email} name='Email' id="Email" placeholder="Email (required)" />
                                </div>
                                <div className="form-group">
                                <textarea required rows="4"  onChange={this.handleChange} className="form-control" value={this.state.CustomerMessage} name='CustomerMessage' id="CustomerMessage" placeholder="Message (required)" />
                                </div>
                                {/* <div className='contactFormReCaptcha'>
                                    <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_SITEKEY} value={this.state.reCAPTCHAvalue} onChange={this.handleReCAPTCHAchange}></div>
                                    <ReCAPTCHAComponent />
                                </div> */}
                                <input type='submit' className='contactSubmitButton' onClick={this.handleSubmit} value='Submit' />
                            </div>
                        </form>
                </div>                
            )
        }
    }

}

export default ContactForQuote