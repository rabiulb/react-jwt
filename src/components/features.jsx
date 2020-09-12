import React, { Component } from "react";
import JsonData from '../data/data.json';

export class features extends Component {

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
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
            {this.state.landingPageData.Features
              ? this.state.landingPageData.Features.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
