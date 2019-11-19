import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Results from "./components/Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.setPrintFilter = this.setPrintFilter.bind(this);
    this.setTypeFilter = this.setTypeFilter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchTerm: "",
      printFilter: "all",
      bookFilterType: "",
      results: null,
      loading: false,
      error: null
    };
  }

  setSearchTerm(newVal) {
    this.setState({ searchTerm: newVal });
  }

  setPrintFilter(newVal) {
    this.setState({ printFilter: newVal });
  }

  setTypeFilter(newVal) {
    this.setState({ bookFilterType: newVal });
  }

  setResults(newResults) {
    this.setState({ results: newResults });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.printFilter);
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
    const filter =
      this.state.bookFilterType.length > 0
        ? `filter=${this.state.bookFilterType}&`
        : "";
    const printType = `printType=${this.state.printFilter}`;
    const q = `q=${this.state.searchTerm}`;

    fetch(`${BASE_URL}${printType}&${filter}${q}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("going to else");
          throw new Error(res.statusText);
        }
      })
      .then(data => this.setResults(data))
      .catch(e => this.setState({ error: e.message }));
  }

  render() {
    let renderResults = this.state.results ? (
      <Results state={this.state} />
    ) : (
      ""
    );

    return (
      <div className="App">
        <Header />
        <h5>{this.state.error}</h5>
        <Form
          state={this.state}
          setSearch={this.setSearchTerm}
          setPrint={this.setPrintFilter}
          setType={this.setTypeFilter}
          onSubmit={this.onSubmit}
        />
        {renderResults}
      </div>
    );
  }
}

export default App;
