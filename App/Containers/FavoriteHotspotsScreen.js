import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { getNavigationOptionsWithAction, getNavBarIcon } from '../Navigation/HeaderBarSettings/navBarSettings'

// Styles
import styles from './Styles/FavoriteHotspotsScreenStyle'

class FavoriteHotspotsScreen extends Component {
  static propTypes = {}

  static navigationOptions = ({ navigation }) => (
    Object.assign({}, getNavigationOptionsWithAction('#00b47f', '#fff', getNavBarIcon(navigation, '#fff')), {
      drawerLabel: 'Favorite Hotspots',
      title: 'Favorite Hotspots'
    }))

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>FavoriteHotspotsScreen Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus culpa deleniti dicta dolor, dolore eaque facere magnam, nam, nostrum numquam officiis quam quidem ullam voluptatem? Autem dolore harum magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi exercitationem laudantium quas. Adipisci alias beatae, earum esse explicabo, id ipsum, labore libero numquam quae saepe tempore tenetur voluptate! Suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur fugiat minus modi, natus nesciunt perspiciatis quas vel. Ad aperiam consequatur dolore, dolores fugiat illum in ipsum modi nemo quia!</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHotspotsScreen)
