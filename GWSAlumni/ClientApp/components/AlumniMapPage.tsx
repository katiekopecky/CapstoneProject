import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import {AlumniMap} from './AlumniMap';
import {AlumniCard} from "./AlumniCard";
import {FilterSearch} from './FilterSearch';
import {AlumniCardInterface} from './FilterSearch'




interface MapPageState {
  alumniToShow: AlumniCardInterface[]
};

export class AlumniMapPage extends React.Component<any, MapPageState> {
    constructor() {
        super();
        this.state = { alumniToShow: []};
        this.getAlumniToShowInMap = this.getAlumniToShowInMap.bind(this)
    }
    render(){
        return  <div>
            
                <h1>Map of GWS Alumni</h1>
                    <Container>
                    <Row>
                      <Col lg="7">
                        <br/>
                        <AlumniMap alumni={this.state.alumniToShow}/>
                      </Col>
                      <Col lg="5">
                        <FilterSearch action={this.getAlumniToShowInMap}/>
                      </Col>
                    </Row>
                    </Container>
                </div>;
    }

    getAlumniToShowInMap(dataFromChild:any){
       
        this.setState({
            alumniToShow: dataFromChild});
    }
}
