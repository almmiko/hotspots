import React from 'react';
import { Header } from 'react-navigation';

const withHeaderWrapper = Component => class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.title,
    header: props => <Header {...props} />,
  });

  render() {
    return <Component {...this.props} />;
  }
};

export default withHeaderWrapper;
