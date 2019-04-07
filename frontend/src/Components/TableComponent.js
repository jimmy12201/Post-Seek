import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TableComponent extends Component {
    constructor(props) {
        super(props);

    }

    renderTable() {
        
    }

    render() {
        return(
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Job Name</th>
                        <th>Domain</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.jobs.map((item, i) => {
                            return [
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.domain}</td>
                                </tr>
                            ]
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TableComponent;