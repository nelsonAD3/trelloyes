import React from 'react';
import logo from './logo.svg';
import './List.css';
import './Card.js';

//WILL BE CALLED BY APP, AND CALLS CARD

function List(props) {
    //NEEDS TO CALL LISTS WHICH WILL CALL CARDSK
    console.log('List');
    console.log(props);
  
    return (
      <section className="List">
          <header class="List-header">
          
          <h2>First list</h2>
          {/* above header needs to identify list order? */}

          {/* for each card in the list, render a div */}
        </header>
        <div class="List-cards">
        {/* need to call on the Card method here. */}
        </div>
      </section>
  
  
      
    );
  }
  
  export default List;