import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import {
  getNavigationOptionsWithAction,
  getNavBarIcon,
} from '../Navigation/HeaderBarSettings/navBarSettings';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AllHotspotsMapScreenStyle';

class AllHotspotsScreen extends Component {
  static navigationOptions = ({ navigation }) =>
    Object.assign(
      {},
      getNavigationOptionsWithAction('#00b47f', '#fff', getNavBarIcon(navigation, '#fff')),
      {
        title: 'Available Hotspots',
        drawerLabel: 'All hotspots',
      },
    );

  state = {
    forceMapRerender: 1,
  };

  componentWillMount() {
    setTimeout(
      () =>
        this.setState({
          forceMapRerender: 0,
        }),
      500,
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.container, { marginTop: this.state.forceMapRerender }]}>
        <MapView
          style={[styles.map]}
          provider="google"
          showsUserLocation
          showsMyLocationButton
          followsUserLocation
          loadingEnabled
          toolbarEnabled
          zoomEnabled
          rotateEnabled
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigate('AllHotspotsListScreen')}
            activeOpacity={0.7}
            style={styles.button}
          >
            <Text style={styles.buttonText}>View hotspots list</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllHotspotsScreen);
