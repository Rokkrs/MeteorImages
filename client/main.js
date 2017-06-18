// Any JS in here is automatically ran for us

// Import the Reacct Library
import React from 'react';
import ReactDOM from 'React-dom';

// Create a component
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
