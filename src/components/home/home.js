import React from 'react';
import './home.css';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ExternalLinks from '../externalLinks/externalLinks';

import data from '../../data';
import siueLogo from '../../assets/img/siue.png';
import myPhoto from '../../assets/img/me.png';


const jobTitle = "ServiceNow Developer at Accenture Federal Services";

const bios = [
    "I am a senior at Southern Illinois University Edwardsville studying Computer Management & Information Systems with a minor in Computer Science.",
    "I am currently working in consulting at Accenture Federal Services as a ServiceNow Developer Analyst."
];

// make a copy of the data and remove the last element (Independent, don't want to represent it on home)
var _data = [...data];
_data.pop();

// function component because home has no moving parts.

const home = () => {
    return (
        <div className="container text-center">
            <div className="col-12 shadow">
                <img src={myPhoto} alt="Me"></img>
                <h2>Austin M Nadler</h2>
                <p>{jobTitle}</p>
                <a href="https://siue.edu"><img src={siueLogo} alt="SIUE logo"></img></a>
                <div>
                    {
                        bios.map(function (bio) {
                            return (
                                <p key={bio}>{bio}</p>
                            )
                        })
                    }
                </div>
                <ExternalLinks />
            </div>
            <div className="col-12 shadow">
                <h1>Experience</h1>
                <Nav className="justify-content-center">
                    <LinkContainer to="/projects">
                        <Nav.Link><button className="btn btn-primary"><i className="fa fa-hammer"></i>&nbsp;Projects</button></Nav.Link>
                    </LinkContainer>
                </Nav>
                {
                    _data.map(function (company) {
                        return (
                            <div key={company.url} id={company.id}>
                                <br></br>
                                <a href={company.url} target="_blank" rel="noreferrer"><img src={company.logo} alt={company.id + " logo"}></img></a>
                                <p>{company.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default home;