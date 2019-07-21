import React, { Component } from "react";
import {Image, StyleSheet, View} from "react-native";
import { Feather } from '@expo/vector-icons';

export default class Header extends Component {
  render() {
    const instagramLogo = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
    };
    return (
      <View style={styles.header}>
        <Image source={instagramLogo} style={styles.logo}  resizeMode="contain" />
        <Feather name="inbox" size={27} color="black" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    height: 40,
  },
});