import React, { Component } from 'react'

export default class Details extends Component {    

    state = {
        item: {},
        empty: true,
    }

    static getDerivedStateFromProps(props, state) {
        if(state.empty){
            if(Object.keys(props.eachProduct).length===0){
                console.log("1");
                return {empty: true};
            }
            else if(props.cartItems.some(element=>element.id===props.eachProduct.id)) {
                const arr = props.cartItems.filter(element=>element.id===props.eachProduct.id);
                console.log("2");
                return {item: {...arr[0]}, empty: false};
            }
            else {
                console.log("3");
                return {item: {...props.eachProduct, buyKG: 0}, empty: false};
            }
        }
        else{
            if(props.eachProduct.id===state.item.id){
                console.log("4");
                return state;
            }
            else if(props.cartItems.some(element=>element.id===props.eachProduct.id)) {
                const arr = props.cartItems.filter(element=>element.id===props.eachProduct.id);
                console.log("5");
                return {item: {...arr[0]}, empty: false};
            }
            else{
                console.log("6");
                return {item: {...props.eachProduct, buyKG: 0}, empty: false};
            }
        }
    }
    
    onChange = (e) => {
        console.log("onChange Called");
        (e.target.value==="")?this.setState({item: {...this.state.item, [e.target.name]: e.target.value}}) : this.setState({item: {...this.state.item, [e.target.name]: Number(e.target.value)}});
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit function called");
        if(this.state.item.buyKG==="" || this.state.item.buyKG<=0){
            alert("Please enter a valid number!!!");
        }
        else{
            if(this.props.cartItems.some(element=>element.id===this.state.item.id)){
                document.querySelector("#display-updated").classList.remove("d-none");
                setTimeout(()=>{
                    document.querySelector("#display-updated").classList.add("d-none");
                }, 2000);
                this.props.addToCartHandler(this.state.item, true);
            }
            else{
                document.querySelector("#display-added").classList.remove("d-none");
                setTimeout(()=>{
                    document.querySelector("#display-added").classList.add("d-none");
                }, 2000);
                this.props.addToCartHandler(this.state.item, false);
            }
        }
    }

    render() {
        return (
            <div className="px-3 py-36">
                <h1 className="cart-heading text-dk">Details</h1>

                {(this.state.empty) ? 
                    <div className="card border-0 shadow mt-3 rounded-lg">
                        <div className="card-body">
                            <p className="m-0 text-dk">Click on an item.</p>
                        </div>
                    </div>
                    : 
                    <div className="card border-0 shadow mt-3 rounded-lg position-relative">
                        <div className="card-body d-flex justify-content-between">
                            <h5 className="text-dk font-weight-bold">{this.state.item.name}</h5>
                            <h5 className="text-muted font-weight-bold">Rs. {this.state.item.price} <small>/ KG</small></h5>
                        </div>
                        <img className="rounded-0 card-img" src={this.state.item.img} alt="banana" />
                        <div className="px-4 my-3">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <label className="text-secondary font-weight-bold mt-2" htmlFor="Kilograms">Kilograms</label>
                                        </div>
                                        <div className="col">
                                            <input 
                                                className="form-control" 
                                                type="number" 
                                                name="buyKG" 
                                                value={this.state.item.buyKG} 
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="text-secondary font-weight-bold mt-4">Total Cost : <span className="float-right border px-4 rounded bg-secondary shadow text-light">Rs. {this.state.item.buyKG*this.state.item.price}</span></div>
                                <div className="form-group mt-5">
                                    {(this.props.cartItems.some(element=>element.id===this.props.eachProduct.id))?
                                        <button type="submit" className="btn btn-primary btn-block shadow">Update Cart</button>
                                        :
                                        <button type="submit" className="btn btn-danger btn-block shadow">Add To Cart</button>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className="border border-danger rounded position-absolute d-none" id="display-added">
                            <div>
                                <div className="tick-wrapper d-flex align-items-center justify-content-center">
                                    <div className="tick-circle bg-grad-red shadow zoom-out">
                                        <p className="m-0 slide-up bakr">
                                            <img src="./imgs/icons/single-tick.png" alt="single-tick" width="30px"/>
                                        </p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="text-danger text-center fw-7">Item Added To Cart!</h4>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-absolute d-none" id="display-updated">
                            <div>
                                <div className="tick-wrapper d-flex align-items-center justify-content-center">
                                    <div className="tick-circle bg-grad-blue shadow zoom-out">
                                        <p className="m-0 slide-up bakr">
                                            <img src="./imgs/icons/double-tick.png" alt="double-tick" width="30px"/>
                                        </p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="text-primary text-center fw-7">Item Updated To Cart!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
