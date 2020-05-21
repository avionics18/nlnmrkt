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
                this.props.addToCartHandler(this.state.item, true);
            }
            else{
                this.props.addToCartHandler(this.state.item, false);
            }
        }
    }

    render() {
        return (
            <div className="px-3 py-5">
                <h1 className="cart-heading text-dk">Details</h1>

                {(this.state.empty) ? 
                    <div className="card border-0 shadow mt-3 rounded-lg">
                        <div className="card-body">
                            <p className="m-0 text-dk">Click on an item.</p>
                        </div>
                    </div>
                    : 
                    <div className="card border-0 shadow mt-3 rounded-lg">
                        <div className="card-body d-flex justify-content-between">
                            <h5 className="text-dk font-weight-bold">{this.state.item.name}</h5>
                            <h5 className="text-muted font-weight-bold">Rs. {this.state.item.price} <small>/ KG</small></h5>
                        </div>
                        <img className="rounded-0 card-img" src={this.state.item.img2} alt="banana" />
                        <div className="px-4 my-3">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label className="text-secondary font-weight-bold" htmlFor="Kilograms">Kilograms</label>
                                    <input 
                                        className="form-control" 
                                        type="number" 
                                        name="buyKG" 
                                        value={this.state.item.buyKG} 
                                        onChange={this.onChange} />
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
                    </div>
                }

            </div>
        )
    }
}
