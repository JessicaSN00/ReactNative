import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Social extends Component{
  render() {
    return (
      <View style={styles.content}>
        <Image
          style={{width: 50, height: 50}}
          source = {{uri:'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_square-512.png'}}        
        />
        <Image
          style={{width: 50, height: 50, marginLeft: 10, marginRight: 20}}
          source = {{uri:'https://vignette.wikia.nocookie.net/es.starwars/images/9/92/Twitter_Icon.png/revision/latest?cb=20151201204526'}}  
        />
         <Image
          style={{width: 50, height: 50}}
          source = {{uri:'https://i0.wp.com/lilliputadventure.com/wp-content/uploads/2018/06/Instagram-Icon.png?fit=1455%2C1454'}}  
        />
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  icons: {
    width: 50,
    height: 50
  }
});

export default Social;