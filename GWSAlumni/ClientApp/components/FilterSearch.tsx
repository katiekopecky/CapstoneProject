import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import '../css/MapPageStyles.css';
import {ChangeEvent} from "react";
import {AlumniCard} from "./AlumniCard";

//use to store person info
interface AlumniCardInterface{
  name: string;
  bio: string;
}
interface FilterState {
    allcards: AlumniCardInterface[];
    cardsToShow: AlumniCardInterface[]; //data to display 
    searchValue: string; //value of search box
}

var allcards1 = [{name: "Katie Kopecky", bio: "words"}, {name: "Example Person", bio: "more words"}, {name: "Example C", bio: "different words"},
                {name: "Example Again", bio: "another thing"} , {name: "Another Person ", bio: "Reproductive Justice"},
                {name: "Final Person", bio: "Prison Industrial Complex"}]; 

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
            <input placeholder="begin typing find people" type="text" value={this.state.searchValue}  onChange={(e)=>this.handleChange(e)} />

            <CardList cards={this.state.cardsToShow}/>

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
}
function  CardList (props: Props){
    const cardList = props.cards;
    const cardsToDisplay = cardList.map((card) =>
            <AlumniCard name={card.name} bio={card.bio}/>
    );
    return (
        <ul>{cardsToDisplay}</ul>
    );
    
}
