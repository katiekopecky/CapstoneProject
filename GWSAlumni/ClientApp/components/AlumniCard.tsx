import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import '../css/MapPageStyles.css';

interface locationInterface{
    lat: string;
    lng: string;
}

interface AlumniCardState {
    name: string;
    pronouns: string;
    bio: string;
    contact: string;
    location: locationInterface;
   // img: any;
    
}

export class AlumniCard extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.name, pronouns: this.props.preferredPronouns, bio: this.props.bio, 
            contactInfo: this.props.contactInfo, location: this.props.location };
    }
    render(){
        
        return  <div className="playerCard">

            <h3>{this.state.name}</h3>
            <h4>{this.state.pronouns}</h4>
            <img className="profileImage" src={require("../images/blank.jpeg")}/>
            <p>{this.state.bio}</p>

            <p>{this.state.contactInfo}</p>

            </div>

    }

}