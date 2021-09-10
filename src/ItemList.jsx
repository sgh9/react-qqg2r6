import React, { useState, useContext } from 'react';
import { ShoppingContext } from './Context/ShoppingContext';

const ItemList = ({ item }) => {
  const cartItems = useContext(ShoppingContext);
  const[count,setCount ] = useState(0);
return(
  
          
 
  <table className="show-cart table">
     <tbody>
    {
    cartItems.cartItems.map((item, i) => {
      return (
       
        <tr key={}>
          <td>{item.name}</td>
          <td>({item.price})</td>
          <td>
            <div className="input-group">
              <button className="minus-item input-group-addon btn btn-primary">
                -
              </button>
              <input
                type="number"
                className="item-count form-control"
                name={item.name}
                value={item.count}
                onChange={(e)=> setCount(e.target.value)}
              />
              <button className="plus-item btn btn-primary input-group-addon">
                +
              </button>
            </div>
          </td>
          <td>
            <button className="delete-item btn btn-danger">X</button>
          </td>

          <td>{item.total} </td>
        </tr>
       
      );
    })
  }
   </tbody>
 </table>
)
  
};

export default ItemList;
