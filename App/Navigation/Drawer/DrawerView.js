import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../Themes/Images';

const DrawerView = ({
  navigation: { state, navigate },
  items,
  activeItemKey,
  activeTintColor,
  inactiveTintColor,
  getLabel,
  onItemPress,
}) => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Image resizeMode="contain" style={{ width: 90, height: 90 }} source={Images.logo} />
    </View>
    <View>
      {items.map((route, index) => {
        const focused = activeItemKey === route.key;
        const color = focused ? activeTintColor : inactiveTintColor;
        const scene = { route, index, focused, tintColor: color };
        const label = getLabel(scene);
        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.item, focused && styles.focused]}
            activeOpacity={0.8}
            onPress={() => {
              onItemPress({ route, focused });
            }}
          >
            <Text style={styles.itemText}>{label}</Text>
            <Icon name={'angle-right'} size={20} color={'#fff'} />
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00856b',
  },
  logo: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 30,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderColor: '#00a287',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  focused: {},
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 20,
  },
});

export default DrawerView;
