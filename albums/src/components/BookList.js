import React, { Component } from 'react';
import { View, Text } from 'react-native';
import fetch from 'isomorphic-fetch';

class BookList extends Component {

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  }

  render() {
    return (
      <View>
        <Text>Book List</Text>
      </View>
    );
  }
}

export default BookList;
