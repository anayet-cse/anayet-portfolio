import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/About.scss';


function About() {
    return (
    <div className="container" id="about">
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-grid">
                <p>I’m Anayet, a passionate Software Engineer based in Dhaka, Bangladesh, specializing in backend development.
                I have extensive hands-on experience with Node.js, NestJS, Express.js, and Python’s FastAPI, building scalable, reliable, and maintainable backend systems. My work spans across robust relational databases like MySQL and PostgreSQL, as well as messaging systems such as MQTT and RabbitMQ for real-time and event-driven applications.
                Beyond my technical expertise, I’m a dedicated problem solver who enjoys tackling complex challenges and finding efficient solutions. I’m well-versed in agile development practices and tools like Jira, always maintaining a strong focus on collaboration, clean code, and software architecture best practices.
                Looking ahead, I’m deeply motivated to grow into a software architect role, with evolving interests in cutting-edge fields such as Machine Learning, Blockchain, and Data Science — areas where I be.</p>
            </div>
        </div>
    </div>
    );
}

export default About;

