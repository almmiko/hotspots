import React from 'react';
import { View, Platform } from 'react-native';
import { Header } from 'react-navigation';
import NavBarItem from './NavBarItem';

export const getNavigationOptionsWithAction = (backgroundColor, color, headerLeft) => ({
  headerStyle: {
    backgroundColor,
    elevation: 0,
  },
  headerTitleStyle: {
    color,
    fontWeight: '500',
  },
  headerTintColor: color,
  headerLeft,
  header: props => (
    <View>
      {Platform.OS === 'android' && Platform.Version >= 20
        ? <View
          style={{
            height: 24,
            backgroundColor: '#00B47F',
          }}
        />
        : null}
      <Header {...props} />
    </View>
  ),
});

export const getNavBarIcon = (navigation, color) => (
  <NavBarItem
    iconName="bars"
    color={color}
    onPress={() => {
      navigation.navigate('DrawerOpen');
    }}
  />
);
