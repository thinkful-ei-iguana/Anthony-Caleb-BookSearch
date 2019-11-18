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
      printFilter: "",
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
    this.setState({results: newResults});
  }

  onSubmit(e) {
    e.preventDefault();

    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    const parameters = `searchTerm: "${this.state.searchTerm}", printFilter: "${this.state.printFilter}", bookFilter: "${this.state.bookFilterType}"`;

    fetch(`${BASE_URL}{${parameters}}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(data => this.setResults(data))
      .catch(e => console.log(e));
  }

  render() {
    let renderResults = this.state.results
      ? <Results state={this.state} />
      : "";

    
    return (
      <div className="App">
        <Header />
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
