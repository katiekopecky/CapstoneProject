import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';
import {ChangeEvent} from "react";
import {AlumniCard} from "./AlumniCard";
import { Button } from 'reactstrap';

//use to store person info
export interface AlumniCardInterface{
  name: string;
  bio: string;
  pronouns: string;
  contact: string;
  location: string;
 // img: string;
}

interface FilterState {
    allcards: AlumniCardInterface[];
    cardsToShow: AlumniCardInterface[]; //data to display 
    searchValue: string; //value of search box
}
var bio = "bio bio bio bio bio biobio bio bio bio bio bio bio bio bio bio bio bio bio bio bio"+ 
           "bio bio bio bio bio biobio bio bio bio bio bio bio bio bio bio bio bio bio bio bio"+
            "bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio";

var allcards1 = [{name: "Final Person", pronouns: "he/him/his", bio: "Prison Industrial Complex", contact: "person@wisc.edu, person@gmail.com", location: "44.073051, -87.401230"},
    {name: "Katie Kopecky", bio: bio, pronouns: "she/her/hers", contact: "kkopecky@wisc.edu", location: "43.073051, -89.401230" }, 
    {name: "Example Person", bio: "more words", pronouns: "", contact: "person@wisc.edu", location: ""}, 
    {name: "Example C", bio: "different words Reproductive Justice words words words", pronouns: "she/her/hers",contact: "7089909302", location: "43.038902, -87.906471"},
    {name: "Example Again", bio: "another thing", pronouns: "", contact: "person@wisc.edu", location: "40.730610, -73.935242" } , 
    {name: "Another Person ", bio: "Reproductive Justice", pronouns: "she/her/hers", contact: "867-5309", location: "37.733795, -122.446747"},
    {name: "Final Person", pronouns: "he/him/his", bio: "Prison Industrial Complex", contact: "person@wisc.edu, person@gmail.com", location: "44.073051, -87.401230"}]; 

export class FilterSearch extends React.Component<any, FilterState> 
{
    constructor() {
        super();
        //initialize empty card to show, empty search bar, and store allcards in all cards 
        this.state = {cardsToShow:[], searchValue: '', allcards: allcards1};
        //bind function
        this.handleChange = this.handleChange.bind(this);
    }
    public render() {

        return <div>
            <input className="searchbar" placeholder="begin typing find people" type="text" value={this.state.searchValue}  onChange={(e)=>this.handleChange(e)} />

            <CardList cards={this.state.cardsToShow} currSearchVal={this.state.searchValue}/>

        </div>;
    }
        
    handleChange(e:ChangeEvent<HTMLInputElement>) {
        const filteredCards = allcards1.filter(card => (card.name.toLowerCase().search(e.target.value.toLowerCase()) != -1 ||
            card.bio.toLowerCase().search(e.target.value.toLowerCase()) != -1 ));
        this.setState({
            searchValue: e.target.value,
            cardsToShow: filteredCards
        });
        
        this.props.action(this.state.cardsToShow);
    }
    
}

//define props and functional component wit
interface Props{
    cards: AlumniCardInterface[];
    currSearchVal: string;
}
function CardList (props: Props){
    if (props.currSearchVal == ""){
        return <div></div>;
    }
        
    const cardList = props.cards;
    const cardsToDisplay = cardList.map((card) =>
            <AlumniCard name={card.name} bio={card.bio} preferredPronouns={card.pronouns} location={card.location} contactInfo={card.contact}/>
    );
    
    return (
        <ul>{cardsToDisplay}</ul>
    );
    
}
