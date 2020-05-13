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
                price: 32,
                category: "fruit",
                show_details: false,
                buyKG: 0
            },
            {
                id: v4(),
                name: "Grape",
                img: "./imgs/food/grape.png",
                price: 40,
                category: "fruit",
                show_details: false,
                buyKG: 0
            },
            {
                id: v4(),
                name: "Kiwi",
                img: "./imgs/food/kiwi.png",
                price: 25,
                category: "fruit",
                show_details: false,
                buyKG: 0
            },
            {
                id: v4(),
                name: "Raspberry",
                img: "./imgs/food/raspberry.png",
                price: 20,
                category: "fruit",
                show_details: false,
                buyKG: 0
            },
            {
                id: v4(),
                name: "Mushroom",
                img: "./imgs/food/mushroom.png",
                price: 50,
                category: "vegetable",
                show_details: false,
                buyKG: 0
            },
            {
                id: v4(),
                name: "Watermelon",
                img: "./imgs/food/watermelon.png",
                price: 15,
                category: "fruit",
                show_details: false,
                buyKG: 0
            },
        ],

        filteredProducts: []
    }
    

    showDetailsHandler = (id) => {
        let i, newObj;
        const originalArr = this.state.products.map(element => {
            return {...element, show_details: false};
        });
        this.state.products.forEach((element, index) => {
            if(element.id === id) {
                i = index;
                newObj = {...element, show_details: true};
            }
        });

        const newArr = [...originalArr];
        newArr.splice(i, 1, newObj);
        this.setState({products: newArr});
    }


    showCategoryItemsHandler = (category) => {
        switch(category){
            case "all": this.setState({filteredProducts: [...this.state.products]});
                        break;
            case "fruit": this.setState({filteredProducts: [...this.state.products.filter(element => element.category==="fruit")]});
                        break;
            case "vegetable": this.setState({filteredProducts: [...this.state.products.filter(element => element.category==="vegetable")]});
                        break;
            default: console.log(category);
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
                        <Navbar />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4 left-sidebar">
                        <Details eachProduct={this.state.products.filter(element=>element.show_details===true)} />
                    </div>
                    <div className="col-md-8 right-sidebar">
                        <Food products={this.state.filteredProducts} showDetailsHandler={this.showDetailsHandler} showCategoryItemsHandler={this.showCategoryItemsHandler} />
                    </div>
                </div>
            </div>
        );
    }
}
