import React from 'react'

const cartStyling = {
    position: "absolute",
    width: "300px",
    right: "16px",
    top: "65px",
    borderColor: "#aaa",
    borderRadius: "8px",
    overflow: "hidden",
    zIndex: "2"    
}

export default function Navbar(props) {

    const toggleViewCart = (e) => {
        const cart = document.querySelector("#cart");
        cart.classList.toggle("d-none");
        e.target.classList.toggle("opacity-100");
    }
    const closeCart = (e) => {
        const cart = document.querySelector("#cart");
        cart.classList.add("d-none");
        document.querySelector(".cart-btn").classList.remove("opacity-100");
    }

    return (
        <React.Fragment>
            <div className="my-nav px-3 pt-4 text-right position-relative">
                <a href="#!" className="btn">My Acount</a>
                <a href="#!" className="btn">Orders</a>
                <a href="#!" className="btn" onClick={(e)=>toggleViewCart(e)}>
                    <img className="cart-btn" src="./imgs/icons/cart.png" width="22" alt="cart"/>
                    <span className="badge badge-danger rounded-pill">{props.cartItems.length}</span>
                </a>
                <div id="cart" className="card shadow-lg text-left fade-animation d-none" style={cartStyling}>
                    <div className="card-header">
                        <h4 className="m-0 fw-7 text-dk">CART<span className="badge badge-dark float-right">{props.cartItems.length}</span></h4>
                    </div>
                    <div className="card-body">
                        {props.cartItems.map(element=>
                            <div className="bg-light border rounded p-2 mb-2 shadow-sm d-flex" key={element.id}>
                                <p className="m-0 flex-1" style={{flex: "1"}}>{element.name} <span className="badge bade-dark">{element.buyKG}</span></p>
                                <button className="del-btn rounded">X</button>
                            </div>
                        )}
                    </div>
                    <div className="card-footer p-0">
                        <div className="d-flex justify-content-between">
                            <div className="py-3 px-4 font-weight-bold">Total: Rs. 325</div>
                            <button className="btn btn-dark m-0 rounded-0 px-4" onClick={(e)=>closeCart(e)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters pt-4">
                <div className="col-md-6">
                    <div className="px-3">
                        <div className="card border-0 bg-lt px-3 py-2 rounded-lg">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="flex-1">
                                    <p className="text-dk fz-12 fw-7 m-0">Free delivery anywhere</p>
                                    <p className="text-dk m-0">Over Rs. 1500</p>
                                </div>
                                <div className="flex-1">
                                    <img src="./imgs/icons/truck.png" alt="truck"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="px-3">
                        <div className="card border-0 px-3 py-2 rounded-lg" style={{background: "rgb(240,247,239)"}}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="flex-1">
                                    <p className="text-dk fz-12 fw-7 m-0">Get your shopping in same day</p>
                                    <p className="text-dk m-0">Shop Online</p>
                                </div>
                                <div className="flex-1">
                                    <img src="./imgs/icons/stopwatch.png" width="48" alt="stopwatch"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


