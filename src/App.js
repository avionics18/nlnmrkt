import React, { Component } from 'react'
import Products from './components/Products'

export default class App extends Component {

    state = {
        products: [],
        filteredProducts: []
    }
    
    render() {
        return (
            <div className="container text-white">
                <h1 className="mt-3">Ecommerce Shopping Cart App</h1>
                <hr className="border-white" style={{opacity: "0.15"}} />
                <div className="row">
                    <div className="col-md-8">
                        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
