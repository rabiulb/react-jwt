import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Auth from './components/Auth';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
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
        <Router>
          <Navigation />

          <Switch>
          <Route exact path="/">
            <Header data={this.state.landingPageData.Header} />
            </Route>
            <Route path="/features">
            <Features data={this.state.landingPageData.Features} />
            </Route>
            <Route path="/about">
            <About data={this.state.landingPageData.About} />
            </Route>
            <Route path="/services">
            <Services data={this.state.landingPageData.Services} />
            </Route>
            <Route path="/gallery">
            <Gallery />
            </Route>
            <Route path="/testimonial">
            <Testimonials data={this.state.landingPageData.Testimonials} />
            </Route>
            <Route path="/team">
            <Team data={this.state.landingPageData.Team} />
            </Route>
            <Route path="/contact">
            <Contact data={this.state.landingPageData.Contact} />
            </Route>
            <Route path="/login">
              <Auth />
            </Route>
          </Switch>
          <Footer data={this.state.landingPageData.Contact} />
        </Router>
      </div>
    )
  }
}

export default App;
