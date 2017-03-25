import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BookDetail = ({ book }) => {
  const { title, artist, thumbnail_image } = book;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.headerImageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerImageStyle: {
    height: 50,
    width: 50
  }
};

export default BookDetail;
