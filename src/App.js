import React, { Component } from 'react';
import { Brand, Navbar, Details, Food } from "./components";
import {v4} from 'uuid';

export default class App extends Component {

    state = {
        products: [
            {
                id: v4(),
                name: "Banana",
                img: "./imgs/food/banana.png",
                img2: "./imgs/food/sample.png",
                price: 32,
                category: "fruit",
            },
            {
                id: v4(),
                name: "Beet",
                img: "./imgs/food/beet.png",
                img2: "./imgs/food/sample.png",
                price: 26,
                category: "vegetable",
            },
            {
                id: v4(),
                name: "Grape",
                img: "./imgs/food/grape.png",
                img2: "./imgs/food/sample.png",
                price: 40,
                category: "fruit",
            },
            {
                id: v4(),
                name: "Soy",
                img: "./imgs/food/soy.png",
                img2: "./imgs/food/sample.png",
                price: 15,
                category: "vegetable",
            },
            {
                id: v4(),
                name: "Kiwi",
                img: "./imgs/food/kiwi.png",
                img2: "./imgs/food/sample.png",
                price: 25,
                category: "fruit",
            },
            {
                id: v4(),
                name: "Raspberry",
                img: "./imgs/food/raspberry.png",
                img2: "./imgs/food/sample.png",
                price: 20,
                category: "fruit",
            },
            {
                id: v4(),
                name: "Mushroom",
                img: "./imgs/food/mushroom.png",
                img2: "./imgs/food/sample.png",
                price: 50,
                category: "vegetable",
            },
            {
                id: v4(),
                name: "Watermelon",
                img: "./imgs/food/watermelon.png",
                img2: "./imgs/food/sample.png",
                price: 35,
                category: "fruit",
            },
        ],

        filteredProducts: [],
        show_details: {},
        cartItems: []
    }


    componentDidMount() {
        this.setState({filteredProducts: [...this.state.products]});
    }
    

    showDetailsHandler = (product) => {
        this.setState({show_details: product});
    }


    categoryHandler = (e, category) => {
        console.log(category);
        // getting all the objs with required category
        if(category==="all"){
            this.setState({filteredProducts: [...this.state.products]});
        } else {
            const arr = this.state.products.filter(element=>element.category===category);
            this.setState({filteredProducts: arr});
        }

        // adding active class to the button clicked
        const buttons = document.querySelectorAll("#category-btns > button");
        buttons.forEach(element=>element.classList.remove("active"));
        e.target.classList.add("active");
    }

    addToCartHandler = (obj, alreadyInCart) => {
        console.log(obj, alreadyInCart);
        if(alreadyInCart){
            let i;
            let arr = [...this.state.cartItems];
            this.state.cartItems.forEach((element, index)=>{
                if(element.id===obj.id){
                    i=index;
                    console.log(i);
                }
            });
            arr.splice(i, 1, obj);
            console.log(arr);
            this.setState({cartItems: [...arr]});
            alert("Item updated to cart");
        }
        else{
            this.setState({cartItems: [...this.state.cartItems, obj]});
            alert("Item added to cart");
        }
    }

    
    render() {
        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-4 left-sidebar">
                        <Brand />
                    </div>
                    <div className="col-md-8 right-sidebar">
                        <Navbar cartItems={this.state.cartItems} />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4 left-sidebar">
                        <Details eachProduct={this.state.show_details} cartItems={this.state.cartItems} addToCartHandler={this.addToCartHandler} />
                    </div>
                    <div className="col-md-8 right-sidebar">
                        <Food filteredProducts={this.state.filteredProducts} showDetailsHandler={this.showDetailsHandler} categoryHandler={this.categoryHandler} />
                    </div>
                </div>
            </div>
        );
    }
}
