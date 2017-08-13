import React from 'react'
import NavBarItem from './NavBarItem'

export const getNavigationOptionsWithAction = (backgroundColor, color, headerLeft) => ({
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color
  },
  headerTintColor: color,
  headerLeft
})

export const getNavBarIcon = navigation => (
  <NavBarItem
    iconName='bars'
    onPress={() => {
      navigation.navigate('DrawerOpen')
    }}
  />
)
