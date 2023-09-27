import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects1 = [
        {
          title: "TFEO",
          description: "Design & Development",
          imgUrl: projImg1,
          linkURL: "https://www.figma.com/proto/1tTRatTXjAGtkj1KxcJtY7/TFEO?type=design&node-id=362-133&t=KlgyQVhkDzVfx4Ra-0&scaling=scale-down-width&page-id=279%3A37&starting-point-node-id=362%3A133 ",
        },
        {
          title: "Fresh Flower",
          description: "Design",
          imgUrl: projImg2,
          linkURL: "https://www.figma.com/proto/tjRyBgv9zhFkNW4Tx7A3Wn/Fresh-Flower-Mobile-App?type=design&node-id=224-2932&t=aWXj5AVRUKNE62Ts-0&scaling=scale-down&page-id=2%3A4&starting-point-node-id=224%3A2930&show-proto-sidebar=1  ",
        },
        {
          title: "Rubies Technology",
          description: "Design & Development",
          imgUrl: projImg3,
          linkURL: "https://www.figma.com/proto/Kw77wiYnP6q3evSdbOS7pM/Rubies-Tech?type=design&node-id=100-4030&t=JQdrsIwMzVRCZGkw-0&scaling=scale-down-width&page-id=2%3A117&starting-point-node-id=100%3A4030",
        },
        {
          title: "BuildSure",
          description: "Design & Development",
          imgUrl: projImg1,
          linkURL: "https://www.figma.com/proto/2o85zXQ3IgAW74hDDS36Mu/BUILDSURE.NG-LANDING-PAGE?type=design&node-id=615-589&t=TXoHpDqEqAYtY8W0-0&scaling=contain&page-id=0%3A1&starting-point-node-id=569%3A740&show-proto-sidebar=1 ",
        },
        {
          title: "CheersChamp",
          description: "Design",
          imgUrl: projImg2,
          linkURL: "https://www.figma.com/proto/V8TW48WY68aRdOaQB2vucW/CheersChamp?type=design&node-id=36-753&t=Oy8po5rqUqbdrflo-0&scaling=scale-down&page-id=15%3A2762&starting-point-node-id=39%3A898&show-proto-sidebar=1",
        },
        {
          title: "CheersChamp",
          description: "Design",
          imgUrl: projImg3,
          linkURL: "https://www.figma.com/proto/V8TW48WY68aRdOaQB2vucW/CheersChamp?type=design&node-id=39-1046&t=AOStXdnlZIfN88Cf-0&scaling=scale-down&page-id=15%3A2762&starting-point-node-id=39%3A1046&prev-org-id=external-teams&show-proto-sidebar=1",
        },
      ];

      const projects = [
        {
          title: "TFEO",
          description: "Design & Development",
          imgUrl: projImg1,
          linkURL: "https://tfeo.vercel.app/ ",
        },
        {
          title: "Recto",
          description: "Development",
          imgUrl: projImg2,
          linkURL: "https://recto.vercel.app/  ",
        },
        {
          title: "Chomp Restaurant",
          description: "Development",
          imgUrl: projImg3,
          linkURL: "https://chomp-restaurant.vercel.app/",
        },
        {
          title: "BuildSure",
          description: "Design & Development",
          imgUrl: projImg1,
          linkURL: "https://buildsure.ng ",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
          linkURL: "",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
          linkURL: "",
        },
      ];
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Skilled at working with wide range of front- end technologies to produce and evaluate code.  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects1.map((project1, index) => {
                              return (
                                <ProjectCard2
                                  key={index}
                                  {...project1}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
}