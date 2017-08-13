import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getNavigationOptionsWithAction, getNavBarIcon } from '../Navigation/HeaderBarSettings/navBarSettings'

// Styles
import styles from './Styles/FavoriteHotspotsScreenStyle'
import ListItem from '../Components/ListItem';

class FavoriteHotspotsScreen extends Component {
  static propTypes = {}

  static navigationOptions = ({ navigation }) => (
    Object.assign({}, getNavigationOptionsWithAction('#00b47f', '#fff', getNavBarIcon(navigation, '#fff')), {
      drawerLabel: 'Favorite Hotspots',
      title: 'Favorite Hotspots'
    }))

  _keyExtractor = (item, index) => index; //todo switch to id

  render () {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={this._keyExtractor}
        data={this.props.favoriteHotspots}
        renderItem={({item}) => <ListItem {...item} icon={'heart'} iconColor={'#ff6969'} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteHotspots: [
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
      {
        title: 'UPC Unirii 2',
        secureConnectionType: 'WPA2 Secured Wi-Fi',
        distance: '5 m'
      },
    ],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHotspotsScreen)
