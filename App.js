import React, { Component } from 'react';
import { StyleSheet, AppRegistry, SafeAreaView, FlatList } from 'react-native';
import Header from './component/Header';
import Post from './component/Post';

const feedData = [
  {
    id: 1,
    name: 'Lisa',
    image: require('./assets/home04.jpg'),
    likeCount: 128,
    avatar: require('./assets/random_ava_1.png')
  },
  {
    id: 2,
    name: 'Bob',
    image: require('./assets/home05.jpg'),
    likeCount: 20,
    avatar: require('./assets/random_ava_2.png')
  },
  {
    id: 3,
    name: 'Terry',
    image: require('./assets/home06.jpg'),
    likeCount: 132,
    avatar: require('./assets/random_ava_3.png')
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default class App extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Header />
          <FlatList
              data={feedData}
              renderItem={({item}) => <Post item={item}/>}
              keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('InstagramFeed', () => App);