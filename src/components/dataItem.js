import React, { Component } from 'react';
import {ListItem, Left, Right, Thumbnail , Body , Text , Button} from 'native-base'

class dataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
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
</Body>
<Right>
  <Button transparent>
    <Text>View</Text>
  </Button>
</Right>
</ListItem>
      
    );
  }
}
export default dataItem;
