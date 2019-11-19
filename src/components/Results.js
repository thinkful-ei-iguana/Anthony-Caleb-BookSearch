import React from "react";

export default class Header extends React.Component {
  render() {
    console.log(this.props.state.results);

    const bookItems = this.props.state.results.items.map(item => {
      const title = item.volumeInfo.title;
      const imgURL = item.volumeInfo.imageLinks.thumbnail;
      const author = item.volumeInfo.authors
        ? item.volumeInfo.authors.join(", ")
        : "No author available";
      const price =
        item.saleInfo.saleability === "FOR_SALE"
          ? item.saleInfo.retailPrice.amount
          : "No price available";
      const description = item.volumeInfo.description;
      return (
        <div>
          <h2>{title}</h2>
          <img src={imgURL} alt={`Book Cover of ${title}`} />
          <p>Author: {author}</p>
          <p>Price: {price}</p>
          <p>{description}</p>
        </div>
      );
    });

    return <section>{bookItems}</section>;
  }
}
