import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Experience.scss'

function Experience() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ShareTrip, Dhaka</h4>
            <h5 className="vertical-timeline-element-subtitle">Tech Stack : JavaScript, TypeScript, NodeJS, Express.js, NestJS, RabbitMQ, MySQL</h5>
            <p>
              Enhanced microservices by replacing Elasticsearch with Node.js caching and direct MySQL queries, refactored gateways using NestJS/Express.js, integrated third-party APIs for B2C functionality, and developed a new gift card microservice.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">JatraIT, Dhaka</h4>
            <h5 className="vertical-timeline-element-subtitle">Tech Stack : Python, FastAPI, PostgreSQL, MongoDB, MQTT, VerneMQ, RabbitMQ, Docker</h5>
            <p>
              Designed and developed RESTful APIs with Python/FastAPI, integrating notifications, OAuth 2.0 security, machine learning models, and built a scalable telemedicine backend with real-time messaging, video calls, appointments, and payment notifications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;