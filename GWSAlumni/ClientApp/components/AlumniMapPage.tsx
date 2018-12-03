import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import {AlumniMap, AlumniMapProps} from './AlumniMap';
import {AlumniCard} from "./AlumniCard";
import {FilterSearch} from './FilterSearch';




interface MapPageState {
    
};

export class AlumniMapPage extends React.Component<any, any> {
    constructor() {
        super();
        
    }
    render(){
        return  <div>
            
                <h1>Map of GWS Alumni</h1>
                    <Container>
                    <Row>
                      <Col lg="7">
                        <br/>
                        <AlumniMap/>
                      </Col>
                      <Col lg="5">
                        <FilterSearch/>
                      </Col>
                    </Row>
                    </Container>
                </div>;
    }
    
}
