import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/TooltipStyles';

export default class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: {},
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.container, this.props.styles]}>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name={'wifi'} size={25} color={'#fff'} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.info}>{this.props.text}</Text>
          </View>
          <Icon name={'angle-right'} size={20} color={'#36b97f'} />
        </View>
        <View style={styles.triangle} />
      </View>
    );
  }
}
