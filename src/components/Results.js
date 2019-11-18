import React from "react";

export default class Header extends React.Component {
  render() {
    
    console.log(this.props.state.results);
    const title = this.props.state.results.items[0].volumeInfo.title
    const imgURL = this.props.state.results.items[0].volumeInfo.imageLinks.thumbnail
    const author = this.props.state.results.items[0].volumeInfo.authors 
    const price = this.props.state.results.items[0].saleInfo.retailPrice.amount
    const description =this.props.state.results.items[0].volumeInfo.description
          
      return (
        <section>
        <h2>{title}</h2>
        <img src={imgURL} alt="Book Cover"/>
        <p>Author: {author.join(", ")}</p>
        <p>Price: {price}</p>
        <p>{description}</p>
        </section>
      )
  }
}

