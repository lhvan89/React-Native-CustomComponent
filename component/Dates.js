import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatesItem from './DatesItem'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{marginHorizontal: 20}}>
        <DatesItem
          title='From'
          date={this.props.startDate}
        />
        <DatesItem
          title='To'
          date={this.props.endDate}
        />
      </View>
    );
  }
}
