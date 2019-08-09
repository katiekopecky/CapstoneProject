import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';


export class Form extends React.Component<any, any> {
    constructor() {
        super();
    }
    

    render(){
        return <div>
            <form>
                <label>Add Yourself!</label>
                <br/>
                <label>
                    Name:
                    <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Bio:
                    <br/>
                    <input type="text" name="name" />
                </label>
                    <br/>
                    <label>
                        Location:
                        <br/>
                        <input type="text" name="name" />
                    </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}
