import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>
          Nulla id tincidunt ex. Aenean nec dui convallis, dignissim elit ac, mattis erat. Mauris condimentum purus vitae dui accumsan vehicula. Nulla consectetur elementum ex, id ullamcorper orci lobortis vitae. Ut rutrum, libero id congue mollis, arcu lectus lobortis ante, in finibus augue orci congue nunc. Nullam faucibus velit metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pulvinar purus et nunc consequat, dignissim bibendum ante euismod. Aliquam vitae arcu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec mauris a est fringilla mollis. Morbi vitae felis a libero sollicitudin pellentesque.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    alignItems: 'center',
  }
});

export default Footer;