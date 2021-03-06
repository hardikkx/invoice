import React, { Component } from 'react'

class Products extends Component {
    render() {
        return (
            <div className="container">
            <table class="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price (USD)</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Parachute Pants</td>
                        <td>$ 29.99</td>
                      
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Phone Holder</td>
                        <td>$ 9.99</td>
                      
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Pet Rock</td>
                        <td>$ 5.99</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Egg Timer</td>
                        <td>$ 15.99</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Neon Green Hat</td>
                        <td>$ 21.99</td>
                    </tr>
                </tbody>
            </table>
</div>
        )
    }
}

export default Products;
