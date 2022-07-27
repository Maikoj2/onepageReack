import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Cards } from "./Cards";
import { useState } from "react";

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}


const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  }
];



export const Experience = () => {
  const [selectedTab, setSelectedTab] = useState('');

  const onSelectecTab = (event) => {

    const EvenKey = event.target.getAttribute('data-rr-ui-event-key')
    setSelectedTab(EvenKey)
  }
  return (
    <section className="project" id="Experience">
      <Container>
        <Row>
          <Col size={12}>

            <div >
              <h2>Experience</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first" onClick={onSelectecTab}>Portafolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" onClick={onSelectecTab}>tab </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" onClick={onSelectecTab}>Tab </Nav.Link>
                  </Nav.Item>
                </Nav>


                <motion.div
                  key={selectedTab}

                >


                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (

                                <Cards
                                  key={index}
                                  {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</motion.p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</motion.p>
                    </Tab.Pane>
                  </Tab.Content>

                </motion.div>


              </Tab.Container>
            </div>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>

  )
}
