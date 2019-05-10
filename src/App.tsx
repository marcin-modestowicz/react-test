import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import PostList from 'components/PostList';
import RootStore from 'stores/RootStore';

class App extends Component {
  render() {
    return (
      <Provider rootStore={new RootStore()}>
        <PostList></PostList>
      </Provider>
    );
  }
}

export default App;
