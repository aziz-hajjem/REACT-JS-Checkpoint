
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Container, Col } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <Container fluid className="main">
        <Row md={4} className="form-container d-flex justify-content-end " style={{ marginRight: "6em" }}>

          <Col sm={7} lg={4} xl={3} md={5} xs={9} className="form">
            <div className="myForm">

              <div class="part-1"><h1>LOG IN</h1></div>
              <div class="part-2">
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>User Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter your user name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              <div class="part-3">

              </div>


            </div>
          </Col>
        </Row>










      </Container>





    </div>

  );
}

export default App;
