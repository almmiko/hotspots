import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class NavBarItem extends Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  }

  render () {
    const { iconName, onPress, color } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ paddingHorizontal: 20 }}
        onPress={() => onPress()}
      >
        <Icon name={iconName} size={20} color={color} />
      </TouchableOpacity>

    )
  }
}

export default NavBarItem
