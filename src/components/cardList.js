import React from "react";
import Card from "./card";
import "./cardList.css"

class CardList extends React.Component {
    render(){

        let cardsArray = this.props.cardData.map(card => 
            <Card key={card.recipeId}
            title={card.title}
            author={card.author}
            date={card.date}
            image={card.image}
            description={card.description}
            likes={card.likes}
            isLiked={card.isLiked}
            ></Card>  
            );

        return(
        <div className="cardList">
            {cardsArray}
        </div>
        );
    }


}

export default CardList;