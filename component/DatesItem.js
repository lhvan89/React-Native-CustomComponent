import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.date
    }
  }

  onPressButton(data) {
    this.props.onPressButton(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={{flexDirection: 'row' }}>
          <Text style={styles.date}>{this.props.date}</Text>
          <TouchableOpacity onPress={() => {this.onPressButton("Tue Aug. 22 ; 10:00 AM")}}>
            <Text style={styles.button}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    color: '#92969a',
    lineHeight: 21.5,
  },
  date:{
    paddingRight: 10,
    fontSize: 13,
    color: '#1b2031',
    lineHeight: 21.5,
  },
  button: {
    fontSize: 12,
    color: '#ffffff',
    backgroundColor: '#1eb786',
    width: 53,
    borderRadius: 11,
    overflow: 'hidden',
    lineHeight: 21.5,
    textAlign: 'center',
  }
});