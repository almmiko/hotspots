import React from 'react'
import NavBarItem from './NavBarItem'

export const getNavigationOptionsWithAction = (backgroundColor, color, headerLeft) => ({
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color,
    fontWeight: '500'
  },
  headerTintColor: color,
  headerLeft
})

export const getNavBarIcon = (navigation, color) => (
  <NavBarItem
    iconName='bars'
    color={color}
    onPress={() => {
      navigation.navigate('DrawerOpen')
    }}
  />
)
