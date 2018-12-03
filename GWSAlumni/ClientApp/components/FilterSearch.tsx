import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';
import {ChangeEvent} from "react";
import {AlumniCard} from "./AlumniCard";

//use to store person info
interface AlumniCardInterface{
  name: string;
  bio: string;
  pronouns: string;
  contact: string;
  location: locationInterface;
 // img: string;
}
interface locationInterface{
    lat: string;
    lng: string;
}

interface FilterState {
    allcards: AlumniCardInterface[];
    cardsToShow: AlumniCardInterface[]; //data to display 
    searchValue: string; //value of search box
}
var bio = "bio bio bio bio bio biobio bio bio bio bio bio bio bio bio bio bio bio bio bio bio"+ 
           "bio bio bio bio bio biobio bio bio bio bio bio bio bio bio bio bio bio bio bio bio"+
            "bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio";

var allcards1 = [{name: "Katie Kopecky", bio: bio, pronouns: "she/her/hers", contact: "kkopecky@wisc.edu", location: {lat: "N", lng:"S"} }, 
    {name: "Example Person", bio: "more words", pronouns: "", contact: "person@wisc.edu", location: {lat: "N", lng:"S"},img: ""}, 
    {name: "Example C", bio: "different words Reproductive Justice words words words", pronouns: "she/her/hers",contact: "7089909302", location: {lat: "N", lng:"S"}},
    {name: "Example Again", bio: "another thing", pronouns: "", contact: "person@wisc.edu", location: {lat: "N", lng:"S"} } , 
    {name: "Another Person ", bio: "Reproductive Justice", pronouns: "she/her/hers", contact: "867-5309", location: {lat: "N", lng:"S"}},
    {name: "Final Person", pronouns: "he/him/his", bio: "Prison Industrial Complex", contact: "person@wisc.edu, person@gmail.com", location: {lat: "N", lng:"S"}}]; 

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
