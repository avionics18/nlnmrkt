import React,{Component} from 'react'
import FoodItem from './FoodItem'

export default class Food extends Component {

    render() {
        return (
            <div className="px-3 py-5">
                <h1 className="cart-heading text-dk">Categories</h1>
                <p className="mt-3" id="category-btns">
                    <button className="btn btn-sm btn-outline-secondary mr-2 active" onClick={(e)=>this.props.categoryHandler(e, "all")}>All</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={(e)=>this.props.categoryHandler(e, "fruit")}>Fruits</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={(e)=>this.props.categoryHandler(e, "vegetable")}>Vegetables</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={(e)=>this.props.categoryHandler(e, "snack")}>Snacks</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={(e)=>this.props.categoryHandler(e, "fish")}>Fish</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={(e)=>this.props.categoryHandler(e, "meat")}>Meat</button>
                </p>
                <div className="row no-gutters">
                    {this.props.filteredProducts.map(eachProduct => 
                        <FoodItem 
                            key={eachProduct.id} 
                            eachProduct={eachProduct} 
                            showDetailsHandler={this.props.showDetailsHandler} 
                        />
                    )}
                </div>
            </div>
        );
    }
}
