import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';
import {
  getNavigationOptionsWithAction,
  getNavBarIcon,
} from '../Navigation/HeaderBarSettings/navBarSettings';
import Button from '../Components/Button';

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

  modal = null;

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
          <Button
            // onPress={() => navigate('AllHotspotsListScreen')}
            onPress={() => this.modal.open()}
            text="View hotspots list"
          />
        </View>

        <Modal
          style={styles.modal}
          backdropOpacity={0.3}
          position={'bottom'}
          ref={(r) => {
            this.modal = r;
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Connect to UPC Unirii 2</Text>
            <Text style={styles.modalSubTitle}>
              Please insert the password in order to connect.
            </Text>
            <TextInput style={styles.input} secureTextEntry />
            <Button
              styles={[styles.modalBtn, { marginTop: 30 }]}
              text="Connect"
              onPress={() => {}}
            />
            <Button styles={styles.modalBtn} text="Add Hotspot to Favorites" onPress={() => {}} />
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllHotspotsScreen);
