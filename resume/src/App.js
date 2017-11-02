import React, { Component } from 'react';
import resume from './resume.json';
import './App.css';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Project from './components/Project';

class App extends Component {

  renderExperince() {
    let experiences = [];
    resume.experiences.map((item, i) => {
      experiences.push(<Experience item={item} key={i} />)
    });
    return experiences;
  }

  renderEducation() {
    let educations = [];
    resume.education.map((item, i) => {
      educations.push(<Education item={item} key={i} />);
    });
    return educations;
  }

  renderSkills() {
    let skills = [];
    resume.skills.map((item, i) => {
      skills.push(<Skills item={item} key={i} />);
    });
    return skills;
  }

  renderLanguages() {
    let languages = [];
    resume.languages.map((item, i) => {
      languages.push(<Languages item={item} key={i} />);
    });
    return languages;
  }

  renderInterests() {
    let interests = [];
    resume.interests.forEach((interest) => {
      interests.push(<Interests interest={interest}/>);
    })
    return interests;
  }

  renderProject() {
    var projects = [];
    resume.projects.map((item, i) => {
      projects.push(<Project item={item} key={i} />);
    });
    return projects;
  }

  render() {
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={resume.image} alt="" />
                  <h4 className="name">{resume.name}</h4>
                  <h3 className="tagline">Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                      <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">{resume.linkedin}</a></li>
                      <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">{resume.github}</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  {this.renderEducation()}
              </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                  <ul className="list-unstyled interests-list">
                    {this.renderLanguages()}
                  </ul>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className="list-unstyled interests-list">
                      {this.renderInterests()}
                  </ul>
              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                  <div className="summary">
                      <p>I am currently working at eGain Communications, and my work involves front-end web development. I enjoy learning new libraries and frameworks, and that drove me to learn ReactJS. Having worked on different application platforms (mobile and web), I believe there is never an end to learning, and I would love to work on the newer technologies while keeping the learning going.</p>
                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                  {this.renderExperince()}

              </section>

              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                  <div className="intro">
                      <p>In the process of learning React, I built the below applications, which are great examples to show state management, downward data flow and reusability of components.</p>
                  </div>
                  {this.renderProject()}
              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                  <div className="skillset">
                      {this.renderSkills()}
                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default App;
