import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import AlumniMap from './AlumniMap';

interface MapPageState {
}

export class AlumniMapPage extends React.Component<RouteComponentProps<{}>, MapPageState> {
    constructor() {
        super();
        
    }
    render(){
        return  <div>
                    <h1>GWS Alumni</h1>
                </div>;
    }
    
}
