import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "C/C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "GoLang",
    "Java",
    "SQL",
];

const labelsSecond = [
    "FastAPI",
    "Express.js",
    "NestJS",
];

const labelsThird = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
];

const labelsFour = [
    "Git",
    "GitHub",
    "Postman",
    "EC2",
    "S3",
    "RabbitMQ",
    "VerneMQ",
    "MQTT",
    "Docker",
];

function Skills() {
    return (
    <div className="container" id="skill">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Languages</h3>
                    <p>Focused on backend development with strong expertise in Python, JavaScript, TypeScript, and SQL for building scalable APIs and microservices. Experienced with Java and Go for high-performance systems, and skilled in C++ for solving complex algorithmic and performance-critical problems.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Frameworks</h3>
                    <p>FastAPI for high-performance Python APIs with easy async support; Express.js for lightweight, flexible Node.js services; and NestJS for scalable, structured backend applications with TypeScript and strong modularity.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Databases</h3>
                    <p>Experienced with relational databases like MySQL and PostgreSQL for reliable data integrity and complex queries, MongoDB for flexible, schema-less document storage, and Redis for fast in-memory caching to boost application performance.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Technologies & Tools</h3>
                    <p>Skilled in using Git/GitHub for version control, Postman for API testing, and AWS services like EC2 and S3 for scalable deployment. Experienced with RabbitMQ, VerneMQ, and MQTT for reliable messaging, and proficient with Docker for containerization and streamlined deployment.</p>
                    <div className="flex-chips">
                        {labelsFour.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;