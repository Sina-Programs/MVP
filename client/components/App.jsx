import React from 'react';
import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import Display from './Display.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTicker: 'AMZN',
      companyData: {},
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchCompany = this.searchCompany.bind(this);
  }

  componentDidMount() {
    this.searchCompany();
  }

  handleSearchChange(term) {
    this.setState({
      searchTicker: term,
    });
  }

  searchCompany() {
    axios
      .get(`http://localhost/company/data/${this.state.searchTicker}`)
      .then(({ data }) => {
        this.setState({ companyData: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
          <SearchBar
            handleSearchChange={this.handleSearchChange}
            props
            searchCompany={this.searchCompany}
          />
        </div>
        <Display companyData={this.state.companyData} />
      </div>
    );
  }
}

export default App;
