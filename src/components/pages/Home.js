import React, { Component } from 'react';
import Filters from '../partials/Filters';

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
                                        <h2><i className="fa fa-file-o"></i> Result</h2>
                                        <hr/>
                                            {/* BEGIN SEARCH INPUT */}
                                            <div className="input-group">
                                                <input type="text" className="form-control" value="web development"/>
                                                <span className="input-group-btn">
                                                    <button className="btn search-btn btn-primary" type="button"><i className="fa fa-search"></i></button>
                                                </span>
                                            </div>
                                            {/* END SEARCH INPUT */}
                                            <p>Showing all results matching "web development"</p>

                                            <div className="padding"></div>

                                            <div className="row">
                                                {/* BEGIN ORDER RESULT */}
                                                <div className="col-sm-6">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                            Order by <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="#">Name</a></li>
                                                            <li><a href="#">Date</a></li>
                                                            <li><a href="#">View</a></li>
                                                            <li><a href="#">Rating</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* END ORDER RESULT */}

                                                <div className="col-md-6 text-right">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-default active"><i className="fa fa-list"></i></button>
                                                        <button type="button" className="btn btn-default"><i className="fa fa-th"></i></button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* BEGIN TABLE RESULT */}
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody><tr>
                                                        <td className="number text-center">1</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/1" alt=""/></td>
                                                        <td className="product"><strong>Product 1</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                                        <td className="price text-right">$350</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">2</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/2" alt=""/></td>
                                                        <td className="product"><strong>Product 2</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span></td>
                                                        <td className="price text-right">$1,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">3</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/3" alt=""/></td>
                                                        <td className="product"><strong>Product 3</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><i className="fa fa-star-o"></i></span></td>
                                                        <td className="price text-right">$550</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">4</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/4" alt=""/></td>
                                                        <td className="product"><strong>Product 4</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span></td>
                                                        <td className="price text-right">$330</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">5</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/5" alt=""/></td>
                                                        <td className="product"><strong>Product 5</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></td>
                                                        <td className="price text-right">$540</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">6</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/6" alt=""/></td>
                                                        <td className="product"><strong>Product 6</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                                        <td className="price text-right">$870</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">7</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/7" alt=""/></td>
                                                        <td className="product"><strong>Product 7</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span></td>
                                                        <td className="price text-right">$620</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="number text-center">8</td>
                                                        <td className="image"><img src="https://lorempixel.com/400/300/nature/8" alt=""/></td>
                                                        <td className="product"><strong>Product 8</strong><br/>This is the product description.</td>
                                                        <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                                        <td className="price text-right">$1,550</td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            {/* END TABLE RESULT */}

                                            {/* BEGIN PAGINATION */}
                                            <ul className="pagination">
                                                <li className="disabled"><a href="#">«</a></li>
                                                <li className="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">»</a></li>
                                            </ul>
                                        {/* END PAGINATION */}
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