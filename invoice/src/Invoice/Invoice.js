import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Invoice extends Component {
  render() {
      return (
    <>
      <Ul>
      
        <div class="container">
          <div className="btn">
        <Link to="/Create_invoice" className="btn_getstarted"><i class="fa fa-plus" aria-hidden="true"></i> Create Invoice</Link>

        </div>
        </div>
      </Ul>
      <div className="container">
      <table class="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total (USD)</th>
                       
                    </tr>
                </thead>
               
            </table>
      </div>
    </>
    )
  }
}

const Ul = styled.ul`

.btn{
  display: flex;
  justify-content: flex-end;
}
.btn_getstarted{
  margin-top:1%;
  background-color: #428BCA;
  color: white;
  padding: 8px 0px;
  width: 14% !important;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-decoration:none;
}
.btn_getstarted:hover{
  background-color: #3276B1;
}
@media only screen and (max-width: 1100px) {
.btn_getstarted{
        font-size: 14px;
        padding: 12px 0px;
        width: 30% !important;
}
}
`;