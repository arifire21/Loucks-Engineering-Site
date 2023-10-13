import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import { Button, Form, Table } from "react-bootstrap";
import { useState } from "react";

export default function JobView() {

    const [demo, setDemo] = useState(false)

  return (
    <>
      <Helmet><title>Job Viewer | Loucks Engineering Inc.</title></Helmet>
      <Navbar/>

      {/* <Button variant="danger">View Jobs</Button> */}

      <Form style={{margin:'3rem 20%'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Architect Name</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-muted">
            Case sensitive
            </Form.Text>
        </Form.Group>

        <Button variant="danger" onClick={() => setDemo(true)}>
            Submit
        </Button>
      </Form>

        {demo &&
            <>
                <div style={{marginLeft:'2rem'}}>
                    <p>- = N/A</p>
                    <p>X = Not completed</p>
                    <p>~ = Started/partially completed</p>
                    <p>&#x2713; = Completed</p>
                </div>

                <br />

                <div style={{ margin: '2rem 10rem' }}>
                    <Table striped bordered size="sm">
                        <thead>
                            <tr>
                                <th>Job Number</th>
                                <th>Job Name</th>
                                <th>Status (M / E / P)</th>
                                <th>Sent</th>
                                <th>Billed</th>
                                <th>Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>23101</td>
                                <td>Name</td>
                                <td>In Progress (- / &#x2713; / -)</td>
                                <td>No</td>
                                <td>No</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>22249</td>
                                <td>Name2</td>
                                <td>Done (&#x2713; / &#x2713; / &#x2713;)</td>
                                <td>sent signed/sealed</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>9092</td>
                                <td>Name3</td>
                                <td>Done (&#x2713; / &#x2713; / &#x2713;)</td>
                                <td>sent for review</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </>
        }

      <Footer/>

    <ScrollRestoration/>      
    </>
)
}