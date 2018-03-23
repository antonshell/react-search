import React, {Component} from 'react';

class ProductRow extends Component {

    render() {

        let product = this.props.product;

        return (

            <tr>
                <td className="number text-center">
                    {product.id}
                    </td>
                <td className="image">
                    <img src="https://lorempixel.com/400/300/nature/4" alt=""/>
                </td>
                <td className="product">
                    <strong>{product.name}</strong>
                    <br/>{product.description}
                </td>
                <td className="rate text-right"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span></td>
                <td className="price text-right">{product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;