import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Content extends Component {
  render() {
    const {name} = this.props;
    return (
      <View>
        <Text style={{color: 'red', alignItems: 'center'}}> {name} </Text>
        <Image
          style={{width: 400, height: 300, justifyContent: 'center'}}
          source = {{uri:'https://i.dailymail.co.uk/i/pix/2011/06/17/article-0-001937DD00000258-228_468x372.jpg'}}
        />
      </View> 
    );
  }
}
export default Content;