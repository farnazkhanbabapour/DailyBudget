import React from "react";

import Transaction from "./Transaction.css";

class Transaction extends React.Component{
       state={
            text:" ",
            amount:" ",
        }
 
    
    OnChangeText= (event)=>{
        this.setState({text:event.target.value})

    }
    OnChangeAmount= (event) => {
        this.setState({amount:event.target.value})
    }
    render(){
        return(
            <div>
                <form>
                    <h2 className="Transcationbtn">Add new transaction</h2>
                    <p>Text</p>
                    <input className="Input" value={this.state.text} 
                        onChange={this.OnChangeText} className="input"
                        type="text" name="Txet" placeholder="Enter text..." />
                    <p>Amount<br>(negative-expense,positive.income)</br></p>
                    <input className="Input" value={this.state.amount} 
                        onChange={this.OnChangeAmount} className="input"
                        type="text" name="amount" placeholder="Enter amount..." />
                    <button className="Add">Add Transation</button>

                </form>
            </div>

        )
    }
}

export default Transaction;