import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatesItem from './DatesItem'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Mon Aug. 21 ; 10:00 AM',
      endDate: 'Mon Aug. 23 ; 10:00 AM'
    };
  }

  updateStartDate (date) {
    this.setState({
      startDate: date
    });
  }

  updateEndDate (date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <View style={{marginHorizontal: 20}}>
        <DatesItem
          title='From'
          date={this.state.startDate}
          onPressButton={this.updateStartDate.bind(this)}
        />
        <DatesItem
          title='To'
          date={this.state.endDate}
          onPressButton={this.updateEndDate.bind(this)}
        />
      </View>
    );
  }
  
}
