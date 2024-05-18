import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Container"

export const Banner = () => {
    return (
        <section class ="banner" id = "home">
            <Container>
                <Row className= "alignItemsCenter">
                    <Col xs ={12} md={6} xl={7}>
                        <span className= "tagline"> Welcome to my Portfolio</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 className="wrap"> <span>Hello </span>, I am Jayden Garcia</h1>
                        <br></br>
                        <p className="about"> About Myself:
                        <br></br>
                        I am a Computer Science major at California State University, Fullerton. I am currently in my junior year about to go into my senior year.
                        I am currently looking towards focusing on Web Development. Creating sleek, reactive and smooth flowing websites has caught my attention.
                        <br></br>
                        
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}