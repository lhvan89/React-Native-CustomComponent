import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Dates from '../component/Dates'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Mon Aug. 21 ; 10:00 AM',
      endDate: 'Mon Aug. 23 ; 10:00 AM'
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        <Dates
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </View>
    );
  }
}