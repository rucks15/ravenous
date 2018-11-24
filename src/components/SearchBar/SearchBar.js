import React from 'react';
import './SearchBar.css';

//Below object stores key value pair
const sortByOptions = {
    'BestMatch' : 'best_match',
    'HighestRated':'rating',
    'MostReviewed': 'review_count'
} 



class SearchBar extends React.Component{
    renderSortByOptions(){
        //To parse through keys in the object
        return Object.keys(sortByOptions).map(
            sortByOption => {
                let sortByOptionsValue = sortByOptions[sortByOption];
                return <li key = {sortByOptionsValue}>{sortByOption}</li>
            }
        );
    }
    
    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
            </div>
        );
    }
}

export default SearchBar;