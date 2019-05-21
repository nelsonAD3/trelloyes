import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './Card.css';

//WILL BE CALLED BY LIST

class Card extends React.Component() {
  render(){
    console.log('Using a class component!');
    console.log(this.props);
     return (   
        <div className="Card">
            <button type="button">delete</button>
            <h3>Sixth card</h3>
            {/* this.props.title */}
            <p>lorem ipsum</p>
            {/* this.props.content */}
        </div>
    )}

  }
  
  export default List;