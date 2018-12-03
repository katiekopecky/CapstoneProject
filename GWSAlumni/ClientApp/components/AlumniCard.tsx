import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';


export class AlumniCard extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName, pronouns: this.props.preferredPronouns, bio: this.props.bio, contact: this.props.contactInfo};
    }
    render(){
        return  <div className="playerCard">
            <h3>{this.state.name}</h3>
            <h4>{this.state.pronouns}</h4>
            <p>{this.state.bio}</p>
            <p>{this.state.contactInfo}</p>
        </div>
    }

}