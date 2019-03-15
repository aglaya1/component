import React, { Component } from 'react';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  StatusBar
} from 'react-native';

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : " #00d4ff "

    };
  }

  render() {
    var time_1 = 0.42
    var time_2 = 0.45
    var time_3 = 0.47
    return (

      <View>
      <Text style = {styles.titleText}>
      results:
      </Text>
    <Text style = {styles.judge_text}>
      judge 1 ({time_1})
    </Text>

    <Text style = {styles.judge_text}>
      judge 2 ({time_2})
    </Text>

    <Text style = {styles.judge_text}>
      judge 3 ({time_3})
    </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'black',
    fontSize: 72,
    textAlign: 'center',
    textAlignVertical : 'bottom'},
  judge_text: {
    color :'black',
    fontSize : 50,
    textAlignVertical :'bottom',
  },
});
