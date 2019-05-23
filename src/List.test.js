// make React available
import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

//make the App component available
import List from './List';
import Card from './Card';
import App from './App';
import store from './store.js';

//snapshot tests
import renderer from 'react-test-renderer';

//this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List
    key={List.id}
    header={List.header}
    cards={['a','b']}
    />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List
        key={List.id}
        header={List.header}
        cards={['a','b']}
        />,)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });