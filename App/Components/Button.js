import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/ButtonStyles';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    styles: {},
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
