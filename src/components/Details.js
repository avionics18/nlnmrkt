import React, { Component } from 'react'

export default class Details extends Component {    

    increase = () => {
        let n = Number(document.getElementById("item-no").innerText);
        const price = this.props.eachProduct[0].price;
        document.getElementById("item-no").innerText = ++n;
        document.querySelector("#item-price > span").innerText = n*price;
    }

    decrease = () => {
        let n = Number(document.getElementById("item-no").innerText);
        const price = this.props.eachProduct[0].price;
        if(n > 0) {
            document.getElementById("item-no").innerText = --n;
        } else {
            alert("Invalid Number!!!");
        }
        document.querySelector("#item-price > span").innerText = n*price;
    }
    
    render() {
        return (
            <div className="px-3 py-5">
                <h1 className="cart-heading text-dk">Details</h1>

                {(this.props.eachProduct.length === 0) ? 
                    <div className="card border-0 shadow mt-3 rounded-lg">
                        <div className="card-body">
                            <p className="m-0 text-dk">Click on an item.</p>
                        </div>
                    </div>
                    : 
                    <div className="card border-0 shadow mt-3 rounded-lg">
                        <div className="card-body d-flex justify-content-between">
                            <h5 className="text-dk font-weight-bold">{this.props.eachProduct[0].name}</h5>
                            <h5 className="text-muted font-weight-bold">Rs. {this.props.eachProduct[0].price} <small>/ KG</small></h5>
                        </div>
                        <img className="rounded-0 card-img" src={this.props.eachProduct[0].img} alt="banana" />
                        <div className="px-4 mb-3 mt-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="text-dk fw-7 m-0">Kilograms :</p>
                                <div className="counter d-flex justify-content-between align-items-center border rounded-pill overflow-hidden shadow-sm">
                                    <button className="text-dk counter-btn counter-btn-left" onClick={this.decrease}><b>-</b></button>
                                    <p className="m-0 text-dk font-weight-bold" id="item-no">{this.props.eachProduct[0].buyKG}</p>
                                    <button className="text-dk counter-btn counter-btn-right" onClick={this.increase}><b>+</b></button>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 mb-3 d-flex justify-content-between align-items-center">
                            <p className="text-dk fw-7 m-0">Total Cost :</p>
                            <p className="m-0 text-dk font-weight-bold border rounded-pill shadow-sm" id="item-price">
                                Rs. <span>0</span>
                            </p>
                        </div>
                        <div className="px-4 mb-3">
                            <button className="addToCart-btn my-3">ADD TO CART</button>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
