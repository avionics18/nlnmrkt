import React from 'react'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="my-nav px-3 pt-4 text-right">
                <a href="#!" className="btn">My Acount</a>
                <a href="#!" className="btn">Orders</a>
                <a href="#!" className="btn">
                    <img className="cart-btn" src="./imgs/icons/cart.png" width="22" alt="cart"/>
                    <span className="badge badge-danger rounded-pill">0</span>
                </a>                    
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
