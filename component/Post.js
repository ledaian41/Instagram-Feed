import React, { Component } from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { Feather } from '@expo/vector-icons';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <View style={styles.info}>
          <Image source={this.props.item.avatar} style={styles.avatar} resizeMode="cover" />
          <Text style={styles.title}>{ this.props.item.name }</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={this.props.item.image} style={styles.postImage} resizeMode="cover" />
        </View>
        <View style={styles.actions}>
          <Feather name="heart" size={27} color="black" style={styles.icon} onPress={() => alert("Liked")} />
          <Feather name="message-square" size={27} color="black" style={styles.icon} />
          <Feather name="share" size={27} color="black" style={styles.icon} />
        </View>
        <Text style={styles.likeText}>{this.props.item.likeCount} likes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 23,
    margin: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  imageWrapper: {
    height: 300,
  },
  postImage: {
    flex: 1,
    width: null,
    height: null,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    marginStart: 4,
  },
  likeText: {
    marginStart: 4,
  }
});