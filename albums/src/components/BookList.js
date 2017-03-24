import React, { Component } from 'react';
import { View } from 'react-native';
import fetch from 'isomorphic-fetch';
import BookDetail from './BookDetail';

class BookList extends Component {

  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ albums: responseJson });
      });
  }

  renderBooks() {
    console.log(this.state.albums);
    return this.state.albums.map(album =>
      <BookDetail key={album.title} book={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderBooks()}
      </View>
    );
  }
}

export default BookList;
