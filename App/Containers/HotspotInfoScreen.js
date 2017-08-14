import React, { Component } from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HotspotInfoScreenStyle';

class HotspotInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <View><Text>aweomse</Text></View>,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text>HotspotInfoScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HotspotInfoScreen);
