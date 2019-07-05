
import React, { Component } from 'react';
import TabScreen from './src/screens/TabScreen'
import { View, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TabScreen />
    );
  }
}

export default App;
