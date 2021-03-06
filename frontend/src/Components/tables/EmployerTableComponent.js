import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class EmployerTableComponent extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return(
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Job Name</th>
                        <th>Description</th>
                        <th>Domain</th>
                        <th>Years of Experience Recommended</th>
                        <th>Salary Range</th>
                        <th>Link to Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.jobs.map((item, i) => {
                            return [
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.domain}</td>
                                    <td>{item.yearsOfExperience}</td>
                                    <td>{item.salaryRange}</td>
                                    <td><a href={"https://" + item.applyLink}>Apply Here!</a></td>
                                </tr>
                            ]
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default EmployerTableComponent;