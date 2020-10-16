
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))
export default class Create_invoice extends Component {
    constructor(props) {
        super(props);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
    }
    state = {
        products: []
    }

    addProduct() {
        this.setState({ products: [...this.state.products, ""] })
    }
    render() {
        return (
            <>
                <Ul>
                    <div class="container">
                        <div className="btn">
                            <Link to="/invoice" className="btn_getstarted"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back to List</Link>
                        </div><br />
                        <div class="card mb-3" style={{ backgroundColor: "#F7F7F9" }}>
                            <div class="card-body">
                                <h2 class="card-title">Invoice</h2>
                                <div className="card_customer">
                                    <div className="select_customer">
                                        <label className="customer_txt"><b>Select Customer</b></label>
                                        <div className="input_customer">
                                            <select class="custom-select" id="inputGroupSelect02">
                                                <option selected>Select Customer...</option>
                                                <option value="1">Mark Benson</option>
                                                <option value="2">Bob Smith</option>
                                                <option value="3">John Draper</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice_table">
                                    <div className="invoice_table_product">
                                        <label className="customer_txt"><b>Product</b></label>
                                    </div>
                                    <div className="invoice_table_quantity">
                                        <label className="customer_txt"><b>Quantity</b></label>
                                    </div>
                                    <div className="invoice_table_price">
                                        <label className="customer_txt"><b>Price</b></label>
                                    </div>
                                </div>
                                <hr></hr>
                                <div id="dialog-window">
                                    <div id="scrollable-content">
                                        {
                                            this.state.products.map((index) => {
                                                return (
                                                    <div key={index}>

                                                        <div className="invoice_table">
                                                            <div className="invoice_table_product">
                                                                <select class="custom-select" id="dropdown" onChange={this.handleDropdownChange}>
                                                                    <option value="29.99" selected>Parachute Pants</option>
                                                                    <option value="9.99">Phone Holder</option>
                                                                    <option value="5.99">Pet Rock</option>
                                                                    <option value="15.99">Egg Timer</option>
                                                                    <option value="21.99">Neon Green Hat</option>

                                                                </select>
                                                            </div>
                                                            <div className="invoice_table_quantity">
                                                                <input type="number" id="quantity" class="form-control" name="quantity" min="1" />
                                                            </div>
                                                            <div className="invoice_table_price">
                                                                <label className="customer_txt"><b>${this.state.selectValue}</b></label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }
                                            )
                                        }

                                        <div className="btn">
                                            <button onClick={(e) => this.addProduct(e)} className="btn_product"><i class="fa fa-plus" aria-hidden="true"></i> Product</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="select_discount">
                                    <label className="customer_txt"><b>Discount</b></label>
                                    <div className="input_discount">
                                        <div className="input_discount1">
                                            <input type="number" id="quantity" class="form-control" name="quantity" min="0" />
                                        </div>
                                        <div className="input_discount2">
                                            <label className="customer_txt"><b>$0.00</b></label>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="price_total">
                                    <label className="customer_txt"><h4>TOTAL : $ 0.00</h4></label>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Ul>
            </>
        )
    }
}

const Ul = styled.ul`

#dialog-window {
    height: 200px;
  }
  
  #scrollable-content {
    height: 200px;
    overflow: auto;
  }
  .price_total{
      display:flex;
      justify-content: flex-end;
      margin-right:5%;
  }
  .btn{
    display: flex;
    justify-content: flex-start;
    margin-top:1%;
  }
  .btn_getstarted{
    background-color: #428BCA;
    color: white;
    padding: 6px 0px;
    min-width: 13% !important;
    border: none;
    border-radius: 5px;
    margin-top:2%;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    text-decoration:none;
  }

  .btn_getstarted:hover{
   background-color: #3276B1;
  }
  .select_discount{
    margin-top:2%;
  }
  .card_customer{
   display:flex;
   flex-flow: column;
  }
  .customer_txt{
   font-size:14px;
  }
  .input_discount{
    display:flex;
    justify-content: space-between;
  }
  .input_discount1{
    flex:0.12;
  }
  .input_discount2{
    flex:0.1;
   }
  .invoice_table{
    display:flex;
    justify-content: space-between;
    margin-top:4%;
    height:15px;
  }
  .invoice_table_product{
    flex:0.6;
  }
  .invoice_table_quantity{
    flex:0.15;
  }
  .invoice_table_price{
    flex:0.1;
  }

    .btn_product{
    margin-top:2%;                 
      background-color:#FFFFFF;
      color: black;
      padding: 5px 0px;
      min-width: 13% !important;
      border-radius: 5px;
      border:1px solid gray;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-decoration:none;
    }
    .btn_product:hover{
     background-color: #EBEBEB;
    }
  @media only screen and (max-width: 1200px) {
  .btn_getstarted{
    font-size: 14px;
    padding: 6px 12px;

  }
  .btn_product{
    margin-top:12%;
    font-size: 14px;
    padding: 5px 12px;
  }
  .invoice_table{
    margin-top:12%;
  }
  .input_discount1{
    flex:0.4;
  }
  }
`;



