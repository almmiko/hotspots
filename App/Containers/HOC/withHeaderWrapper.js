import React from 'react';
import { Platform, View } from 'react-native';
import { Header } from 'react-navigation';

const withHeaderWrapper = Component => class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.title,
    headerStyle: {
      backgroundColor: '#00B47F',
      elevation: 0,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
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

  render() {
    return <Component {...this.props} />;
  }
};

export default withHeaderWrapper;
