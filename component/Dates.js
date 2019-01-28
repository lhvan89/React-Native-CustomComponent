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

    this.editStartDay = this.editStartDay.bind(this);
    this.editEndDay = this.editEndDay.bind(this);
  }

  render() {
    return (
      <View style={{marginHorizontal: 20}}>
        <DatesItem
          title='From'
          date={this.state.startDate}
          action={this.editStartDay}
        />
        <DatesItem
          title='To'
          date={this.state.endDate}
          action={this.editEndDay}
        />
      </View>
    );
  }

  editStartDay(){
    this.setState({
      startDate: 'Tue Aug. 22 ; 10:00 AM',
    })
  }

  editEndDay(){
    this.setState({
      endDate: 'Tue Aug. 24 ; 10:00 AM',
    })
  }
  
}
