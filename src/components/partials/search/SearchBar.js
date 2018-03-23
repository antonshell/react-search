import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" value="web development"/>
                    <span className="input-group-btn">
                        <button className="btn search-btn btn-primary" type="button"><i className="fa fa-search"></i></button>
                    </span>
                </div>
                {/* END SEARCH INPUT */}
                <p>Showing all results matching "web development"</p>
            </div>
        );
    }
}

export default SearchBar;