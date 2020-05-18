import React from 'react'

export default function FoodItem(props) {
    return (
        <div className="col-md-3 col-6">
            <div className="card product-card p-2 mx-1 mb-3 shadow-sm bg-light text-dkdark" onClick={props.showDetailsHandler.bind(this, props.eachProduct)}>
                <img src={props.eachProduct.img2} alt="fooditem" className="card-img"/>
                <p className="m-0 pt-3 pb-2"><b>{props.eachProduct.name}</b> <span className="float-right bg-danger text-white rounded px-1">Rs. {props.eachProduct.price}</span></p>
            </div>
        </div>
    );
}
