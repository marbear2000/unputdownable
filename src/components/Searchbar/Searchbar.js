import React from 'react';
import './Searchbar.css';

const sortByOptions = {
  'Relevance': 'relevance',
  'Newest': 'Newest'
}

class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      orderBy: 'relevance'
    }
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption){
    if(this.state.orderBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({
      orderBy: sortByOption
    });
  }

  handleQuery(event){
    this.setState({
      query: event.target.value
    });
  }

  handleSearch(event) {
    this.props.searchGoogle(this.state.query, this.state.orderBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];

      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>
      });
    }
    render () {
      return (
        <div>
          <div className="searchbar">
            <div className='searchbar-sort-options'>
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="searchbar-fields">
              <input type="text" placeholder="Search Title or Author" onChange={this.handleQuery}/>

            </div>
            <div className="searchbar-submit">
              <a href="www.#.com" onClick={this.handleSearch}>FIND !</a>
            </div>
          </div>
        </div>
      )
    }
  }

export default Searchbar;
