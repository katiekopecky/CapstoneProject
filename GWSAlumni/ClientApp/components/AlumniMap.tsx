import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';
import {AlumniCardInterface} from './FilterSearch';

export interface AlumniMapState {root: string,  urlDefault: string}

export class AlumniMap extends React.Component<any, AlumniMapState> {
    constructor() {
        super();
        this.state = {root: "https://maps.googleapis.com/maps/api/staticmap?", urlDefault: "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x1000&maptype=roadmap\n" +
        "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318\n" +
        "&markers=color:red%7Clabel:C%7C40.718217,-73.998284\n" +
        "&key=AIzaSyCyVI4LarYd5oxVZsSJPEfpBjnQX6Q_3Xs" };
    }
    
    
    render(){
        var image = this.state.urlDefault;
        
        return <div className="maprouter">
            
                <div className="gmap_canvas">
                    <img src={image}/>
                </div>
                </div>
    }
}

