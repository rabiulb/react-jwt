import React, { Component } from "react";
import Testimonials from '../components/testimonials';
import Team from '../components/Team';
import About from '../components/about';
import JsonData from '../data/data.json';

export class Header extends Component {

  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>
                      {this.props.data ? this.props.data.paragraph : "Loading"}
                    </p>
                    <a href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Learn More
                  </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <About data={this.state.landingPageData.About} />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
      </div>
    );
  }
}

export default Header;
