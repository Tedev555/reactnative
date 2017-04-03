import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryListComponent extends Component {
  render() {
    console.log('HI');
    console.log(this.props);
    return <View />;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

const LibraryList = connect(mapStateToProps)(LibraryListComponent);
export { LibraryList };
