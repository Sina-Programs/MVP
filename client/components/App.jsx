import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import Display from './Display.jsx';
import NewsBar from './NewsBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'amazon',
      companyData: {},
      marketNews: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchCompany = this.searchCompany.bind(this);
    this.getTicker = this.getTicker.bind(this);
    this.getNews = this.getNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
    this.getTicker();
  }

  handleSearchChange(term) {
    this.setState({
      searchTerm: term,
    });
  }

  searchCompany(ticker) {
    axios
      .get(`http://localhost/data/company/${ticker}`)
      .then(({ data }) => {
        this.setState({ companyData: data });
      })
      .catch((err) => console.log(err));
  }

  getNews() {
    axios
      .get('/data/news/')
      .then(({ data }) => {
        this.setState({ marketNews: data });
      })
      .catch((err) => console.log(err));
  }

  getTicker() {
    axios
      .get(`http://localhost/data/ticker/${this.state.searchTerm}`)
      .then(({ data }) => {
        if (typeof data === 'string') {
          this.searchCompany(data);
        } else {
          this.setState({ companyData: data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'mediumseagreen',
          }}
        >
          <h1 style={{ fontSize: '45px' }}>Holy Sheet</h1>
        </div>
        <NewsBar news={this.state.marketNews} />
        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
          <SearchBar
            handleSearchChange={this.handleSearchChange}
            props
            getTicker={this.getTicker}
          />
        </div>
        <Display companyData={this.state.companyData} />
      </div>
    );
  }
}

export default App;
