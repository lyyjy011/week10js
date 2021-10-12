import React from "react";
import "./card.css"
import heartOutline from "../assets/heart-outline.png";
import heartFill from "../assets/heart-fill.png";

class Card extends React.Component{
    render(){       
        return(
        <div className="card">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">{this.props.author[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{this.props.title}</h5>
                    <div className="card-date">{this.props.date}</div>
                </div>
            </div>
            <img className="card-image" src={require('../assets/' + this.props.image).default} alt="logo"></img>
            <div className="card-text">{this.props.description}</div>
            <div className="card-like-bar">
                {this.props.isLiked ? (
                    <img className="card-like-icon" src={heartFill} alt="logo"></img>
                ) : (
                    <img className="card-like-icon" src={heartOutline} alt="logo"></img>
                )}
                <div className="like-text">
                    <b>{this.props.likes}</b> people like this recipe.
                </div>
            </div>
        </div>
        );
    }
} 

export default Card;