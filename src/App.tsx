import './App.scss'
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

interface Project {
    title: string
    company: string
    description: string
    image: string
    link: string
    tech: string[]
    year: number
}

const company = {
    ooma: "Ooma",
    owi: "Offworld Industries",
    voxter: "Voxter"
}

function App() {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    const projects: Project[] = [
        {
            title: "Offworld Website",
            company: company.owi,
            description: "Working closely with the design, marketing, and community teams, we created and deployed a new website as a part of a larger rebranding effort.",
            image: "/ooma-enterprise.jpg",
            link: "https://offworldindustries.com",
            tech: ["Webflow", "Cloudflare"],
            year: 2024
        },
        {
            title: "Ooma Enterprise Mobile App",
            company: company.ooma,
            description: "I was a part of a team to develop the mobile and desktop app for Ooma Enterprise. This VoIP application is available on Android, iOS, and Windows desktop. I was responsible for the calling features on iOS and the overall template on mobile with some work on the tricky parts of desktop. I was a key part in handling deployments to the iOS app store. We used the Ember framework to build the Front End and Electron to handle deployments to multiple platforms.",
            image: "/ooma-enterprise.jpg",
            link: "https://www.ooma.ca/enterprise-communications/mobility",
            tech: ["Ember.js", "Electon", "Javascript", "SCSS", "HTML", "SIP", "VOIP"],
            year: 2021
        },
        {
            title: "MyDay",
            company: company.voxter,
            description: "MyDay is a call center monitoring application that allows agents to see the call and events of their day and managers to monitor the performance of their team in real time. My role for this project was to work with stakeholders to create a scope and requirements document, design a solution, implement it using the JavaScript framework Angular, and update the code base with new features.",
            image: "my-day.jpg",
            link: "https://support.oomaenterprise.com/support/solutions/articles/48001235814-the-oe-desktop-app-myday-overview",
            tech: ["Angular.js", "TypeScript", "SCSS", "HTML"],
            year: 2018
        },
        {
            title: "MyDay Integration",
            company: company.ooma,
            description: "MyDay brought enough value that we integrated it into the Enterprise app!",
            image: "my-day-ooma.jpg",
            link: "https://support.oomaenterprise.com/support/solutions/articles/48001235814-the-oe-desktop-app-myday-overview",
            tech: ["Electron", "Ember.js", "Javascript", "Angular.js", "TypeScript", "SCSS", "HTML"],
            year: 2019
        },
        {
            title: "KeyMan",
            company: company.voxter,
            description: "KeyMan, short for key manager, is a remote VoIP phone provisioning web app that allows the configuration of phones without a support represeitive needing to be on site. Configuration includes applying key binding templates and single device customization.",
            image: "https://placehold.co/600x400",
            link: "",
            tech: ["Angular.js", "TypeScript", "SCSS", "HTML"],
            year: 2017
        },
        {
            title: "License Server",
            company: company.owi,
            description: "Using TypeScript, React, Redux Toolkit, Bootstrap, SCSS, and Jest we delivered a web app that is critical to the community license server program at OWI. This app allows players to apply to the program using a step form. If approved then their game server is listed in-game so that public players can join. The admin panel empowers a community manager to update the status of licenses and change server info.",
            image: "https://placehold.co/600x400",
            link: "https://license.offworldindustries.com",
            tech: ["React.js", "Redux", "TypeScript", "SCSS", "HTML", "Jest"],
            year: 2023
        },
    ]
    return (
        <div className="App">

            {/* Nav */}
            <Navbar expand="lg" className={
                colorChange
                    ? "sticky-top nav-after-scroll"
                    : "sticky-top"
            }>
                <Container>
                    <Navbar.Brand href="#home">
                        Maks Fisli
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Masthead */}
            <section className="masthead my-5" id="home">
                <Container>
                    <div className="overlay">
                        <Row>
                            <Col lg={6} className="text-start">
                                <h1 className="text-massive">Hello,<br /> I'm Maks.</h1>
                                <h2>Front End Developer</h2>
                                <p>I like to design and build dependable and scalable front end applications and websites. People have described me as adaptive, detailed, and delightful to work with. I've worked for start-ups, SaaS companies, and studios.</p>
                                <Row className="text-start mb-2">
                                    <Col md={6} className="text-start mt-2">Skilled at collaborating with designers and back end developers to create responsive applications.</Col>
                                    <Col md={6} className="text-start mt-2">Proven track record of being exceptionally curious and able to learn on the job.</Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <div className="h-100 d-flex justify-content-center p-2">
                                    <img className="img-fluid rounded" src="/profile.jpg" alt="profile picture" />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </section>

            {/* Projects */}
            <section className="projects" id="projects">
                <Container>
                    <h2 className="mb-5">Projects</h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {projects.sort((first: Project, second: Project) => second.year - first.year).map(item =>
                            <div key={item.title} className="col">
                                <Card className='h-100'>
                                    {/* <Card.Img variant="top" src={item.image} /> */}
                                    <Card.Body className='h-100'>
                                        <Card.Title>{item.title}</Card.Title>
                                        <small>Company: {item.company} (full-time)</small>
                                        <div className="text-start my-2">
                                            {item.tech.map(name => <Badge className="me-1" bg="primary">{name}</Badge>)}
                                        </div>
                                        <Card.Text className="text-start mt-3">
                                            {item.description}
                                        </Card.Text>
                                        {item.link.length > 0 &&
                                            <div className="text-start my-3">
                                                <a className='btn btn-outline-secondary' href={item.link} target='_blank'>View Project</a>
                                            </div>
                                        }
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{item.year}</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* Contact */}
            <section className="contact pt-5 footer" id="contact">
                <Container>
                    <h2>Contact</h2>
                    <div className="d-flex justify-content-center mb-3">
                        <a href="https://github.com/mfisli" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/maks-fisli" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} />
                            LinkedIn
                        </a>
                        <a href='m&#97;&#105;lto&#58;mf%&#54;&#57;&#115;&#108;i2&#64;&#37;67&#37;&#54;&#68;%6&#49;il%&#50;&#69;com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            Email
                        </a>
                    </div>
                    <small>
                        <a href="https://www.freepik.com/free-vector/hand-drawn-different-profile-icons-pack_17863160.htm#page=4&query=flat%20cartoon&position=44&from_view=search&track=ais&uuid=f97048f7-1e03-4fdf-b3f1-cd2ef28b5f78">Image by pikisuperstar</a> on Freepik
                    </small>
                </Container>
            </section>
        </div >
    );
}

export default App;

/*
  <p>Theme - dark with splash of colour.</p>
  <p>nav - single page scroll with spy </p>
  <p>masthead - Who am I an what do I do? Adaptive, Detailed, Delightful. Web developer front end </p>
  <p>skills</p>
  <p>project - cards with short details that link out to the project</p>
  <p>contact - email, linkedin, github</p>
*/