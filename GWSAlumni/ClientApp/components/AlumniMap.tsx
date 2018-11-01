import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';


interface MapState {
    
}


export default class AlumniMap extends React.Component<RouteComponentProps<{}>, MapState> {
    constructor() {
        super();
        
    }
   
    
    render(){
        const madison = {lat: 43.0731, lng: 89.4012};
        
        return  <div className={'map'}>
                    {AlumniMap.initMap(madison)}
                </div>;
    }
    
    private static initMap(center:location){
        var map = new google.maps.Map(, {zoom: 4, center: uluru});
        return <h1>sucks </h1>;
    }
}

interface location{
    lat: number;
    lng: number;
}
