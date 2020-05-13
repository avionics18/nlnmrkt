import React,{Component} from 'react'
import FoodItem from './FoodItem'

export default class Food extends Component {

    activate = (index, category) => {
        const catButtons = document.querySelectorAll("#category-btns > button");
        catButtons.forEach(ele => {
            ele.classList.remove("active");
        });
        catButtons[index].classList.add("active");
        this.props.showCategoryItemsHandler(category);
    }

    render() {
        return (
            <div className="px-3 py-5">
                <h1 className="cart-heading text-dk">Categories</h1>
                <p className="mt-3" id="category-btns">
                    <button className="btn btn-sm btn-outline-secondary mr-2 active" onClick={this.activate.bind(this, 0, "all")}>All</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={this.activate.bind(this, 1, "fruit")}>Fruits</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={this.activate.bind(this, 2, "vegetable")}>Vegetables</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={this.activate.bind(this, 3, "snack")}>Snacks</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={this.activate.bind(this, 4, "fish")}>Fish</button>
                    <button className="btn btn-sm btn-outline-secondary mr-2" onClick={this.activate.bind(this, 5, "meat")}>Meat</button>
                </p>
                <div className="row no-gutters">
                {this.props.products.map(eachProduct => <FoodItem key={eachProduct.id} eachProduct={eachProduct} showDetailsHandler={this.props.showDetailsHandler} />)}
                </div>
            </div>
        );
    }
}
