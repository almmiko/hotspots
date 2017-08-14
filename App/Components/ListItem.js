import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = (props) => {
  const { icon, iconColor, title, secureConnectionType, distance } = props;
  const { navigate } = props.navigation;

  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.8}
      onPress={() => {
        navigate('HotspotInfoScreen');
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
};

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
