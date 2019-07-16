import React, { Component } from 'react';
import {Alert } from 'react-native';
import {ListItem,View, Left, Right, Thumbnail , Body , Text , Button} from 'native-base'
import TimeAgo from './time';

class dataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    Alert.alert("hallo")
    const {url,title} = this.data;
    this.props.onPress(url,title);
  }

  render() {
    return (
      
<ListItem thumbnail>
<Left>
  <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://media.gettyimages.com/photos/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-picture-id146107054?s=612x612' }} />
</Left>
<Body>
  <Text numberOfLines={2}>{this.data.title}</Text>
  <Text note numberOfLines={2}>{this.data.description}</Text>
  <View style={{flex:1,flexDirection:'row',marginTop: 8}}>
      <Text note>{this.data.source.name} </Text>
      <TimeAgo time={this.data.publishedAt}/>
  </View>
</Body>
<Right>
  <Button transparent onPress={this.handlePress}>
    <Text>View</Text>
  </Button>
</Right>
</ListItem>
      
    );
  }
}
export default dataItem;
