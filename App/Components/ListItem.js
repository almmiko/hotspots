import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListItem extends React.PureComponent {
  state = {
    disabledButton: false,
  };

  preventDoubleNav = () => {
    this.setState({ disabledButton: true });
    setTimeout(() => {
      this.setState({ disabledButton: false });
    }, 2000);
  };

  render() {
    const { icon, iconColor, title, secureConnectionType, distance } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        disabled={this.state.disabledButton}
        style={styles.row}
        activeOpacity={0.8}
        onPress={() => {
          this.preventDoubleNav();
          navigate('HotspotInfoScreen', { data: this.props });
        }}
      >
        <Icon style={styles.icon} name={icon} size={20} color={iconColor} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.connectionType}>{secureConnectionType}</Text>
        </View>
        <Text style={styles.distance}>{distance}</Text>
        <Icon style={styles.info} name={'angle-right'} size={20} color={'#36b97f'} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ececec',
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    color: '#36b97f',
    fontWeight: '400',
    fontSize: 16,
  },
  connectionType: {
    color: '#707070',
    fontSize: 12,
  },
  info: {
    width: '70%',
  },
  icon: {
    width: '15%',
  },
  distance: {
    width: '13%',
  },
});

ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;
