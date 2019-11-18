import React from "react";

export default class Form extends React.Component {
  render() {
    console.log(this.props.state);
    return (
      <main>
        <form>
          <label>Search Books</label>
          <input
            type="text"
            onChange={e => this.props.setSearch(e.target.value)}
          />
          <label className="printFilterLabel">Print Type</label>
          <select
            className="printFilter"
            onChange={e => this.props.setPrint(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label className="typeFilterLabel">Book Type</label>
          <select
            className="typeFilter"
            onChange={e => this.props.setType(e.target.value)}
          >
            <option value="">No filter</option>
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="full">Full</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="partial">Partial eBooks</option>
          </select>
          <button type="submit" onClick={this.props.onSubmit}>
            search
          </button>
        </form>
      </main>
    );
  }
}
