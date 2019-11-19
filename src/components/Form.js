import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            className="searchInput"
            onChange={e => this.props.setSearch(e.target.value)}
            required
            placeholder="Search Books"
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
            <option required value="">
              No filter
            </option>
            <option required value="ebooks">
              eBooks
            </option>
            <option required value="free-ebooks">
              Free eBooks
            </option>
            <option required value="full">
              Full
            </option>
            <option required value="paid-ebooks">
              Paid eBooks
            </option>
            <option required value="partial">
              Partial eBooks
            </option>
          </select>
          <button
            type="submit"
            className="submitBtn"
            onClick={this.props.onSubmit}
          >
            search
          </button>
        </form>
      </main>
    );
  }
}
