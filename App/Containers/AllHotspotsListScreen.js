import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  getNavigationOptionsWithAction,
  getNavBarIcon,
} from '../Navigation/HeaderBarSettings/navBarSettings';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AllHotspotsScreenStyle';
import ListItem from '../Components/ListItem';

class AllHotspotsScreen extends Component {
  static navigationOptions = ({ navigation }) =>
    Object.assign(
      {},
      getNavigationOptionsWithAction('#00b47f', '#fff', getNavBarIcon(navigation, '#fff')),
      {
        title: 'Available Hotspots',
        drawerLabel: 'Show hotspots as list',
      },
    );

  _keyExtractor = (item, index) => index; // todo switch to id

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={this._keyExtractor}
        data={this.props.hotspots}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            navigation={this.props.navigation}
            icon={'wifi'}
            iconColor={'#bababa'}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  hotspots: [
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
    {
      title: 'UPC Unirii 2',
      secureConnectionType: 'WPA2 Secured Wi-Fi',
      distance: '5 m',
    },
  ],
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllHotspotsScreen);
