import React, { Component } from 'react'

class Customers extends Component {
    render() {
        return (
            <div className="container">
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark Benson</td>
                        <td>353 Rochester St, Rialto FL 43250</td>
                        <td>555-534-2342</td>
                      
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Bob Smith</td>
                        <td>215 Market St, Dansville CA 94325</td>
                        <td>555-534-2342</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John Draper</td>
                        <td>890 Main St, Fontana IL 31450</td>
                        <td>555-534-2342</td>
                    </tr>
                  
                </tbody>
            </table>
</div>
        )
    }
}

export default Customers;
