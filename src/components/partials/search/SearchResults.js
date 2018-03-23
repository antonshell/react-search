import React, { Component } from 'react';

class SearchResults extends Component {

    render() {
        return (
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
        );
    }
}

export default SearchResults;