import React from "react";
import auth from '../assets/images/auth.png';
import jucse from '../assets/images/ju-cse.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/anayet-cse/ju-cse" target="_blank" rel="noreferrer"><img src={jucse} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/anayet-cse/ju-cse" target="_blank" rel="noreferrer"><h2>Student Academic Activities</h2></a>
                <p> 
                    Student Academic Activities is an Android (Java) app with a Golang backend that lets students manage their academic life — create accounts, view results, check notices, access teacher info, and stay updated, all in one place.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/anayet-cse/auth-app" target="_blank" rel="noreferrer"><img src={auth} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/anayet-cse/auth-app" target="_blank" rel="noreferrer"><h2>Auth App</h2></a>
                <p>
                    Auth App is a Node.js (Express) and MySQL-powered API for secure user management, handling user registration, login, authentication, and authorization.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;