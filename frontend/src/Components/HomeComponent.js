import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import TableComponent from './TableComponent'

class HomeComponent extends Component {
    constructor(props) {
        super (props);

        this.state = {
            viewTable: false
        };
    }

    render() {

        const viewTable = this.state.viewTable;
        let table;

        if (viewTable) {
            table =  <TableComponent/>
        } else {
            table = <h1>no table</h1>
        }


        return (
            <div>
                <div class="form-group">
                    <div class="d-flex justify-content-center">
                        <button id="singlebutton" name="singlebutton" class="btn btn-primary"
                        onClick={() => this.setState({viewTable: !this.state.viewTable})}>
                        Find Jobs!
                        </button>
                    </div>
                </div>

                {table}
            </div>

            
            
        );
    }
}

export default HomeComponent;