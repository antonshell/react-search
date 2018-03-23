import React, { Component } from 'react';
import Filters from '../partials/Filters';
import SearchBar from '../partials/search/SearchBar';
import SearchOrder from '../partials/search/SearchOrder';
import SearchResults from '../partials/search/SearchResults';
import SearchPagination from '../partials/search/SearchPagination';

class Home extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    {/* BEGIN SEARCH RESULT */}
                    <div className="col-md-12">
                        <div className="grid search">
                            <div className="grid-body">
                                <div className="row">
                                    {/* BEGIN FILTERS */}

                                    <Filters/>

                                    {/* END FILTERS */}
                                    {/* BEGIN RESULT */}
                                    <div className="col-md-9">
                                        <h2>
                                            <i className="fa fa-file-o"></i>&nbsp;
                                            220V Search Result
                                        </h2>
                                        <hr/>

                                            <SearchBar/>

                                            <div className="padding"></div>

                                            <SearchOrder/>

                                            <SearchResults/>

                                            <SearchPagination/>

                                    </div>
                                    {/* END RESULT */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SEARCH RESULT */}
                </div>
            </div>
        );
    }
}

export default Home;