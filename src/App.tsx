import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import PostList from 'components/PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <PostList></PostList>
      </Provider>
    );
  }
}

export default App;
