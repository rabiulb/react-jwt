import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="contact" >
                  
                        <div className="social">
                            <ul>
                                <li>
                                    <a
                                        href={this.props.data ? this.props.data.facebook : "/"}
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.props.data ? this.props.data.twitter : "/"}>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.props.data ? this.props.data.youtube : "/"}>
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                   
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <p>
                            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
                            <a href="http://www.templatewire.com" rel="nofollow">
                                TemplateWire
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;