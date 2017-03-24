import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const BookDetail = (props) => {
  return (
    <Card>
      <Text>{props.book.title}</Text>
    </Card>
  );
};

export default BookDetail;
