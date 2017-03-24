import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BookDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.book.title}</Text>
      </CardSection>
    </Card>
  );
};

export default BookDetail;
