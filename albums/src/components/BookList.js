import React, { Component } from 'react';
import { View, Text } from 'react-native';
import fetch from 'isomorphic-fetch';

class BookList extends Component {

  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ albums: responseJson });
      });
  }

  render() {
    return (
      <View>
        <Text>`Book List: ${this.state.albums.length}` </Text>
      </View>
    );
  }
}

export default BookList;
