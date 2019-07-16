import React, { Component } from 'react';
import { View, Text,Dimensions,WebView,Modal,Share } from 'react-native';
import {Container,Header,Content,Body,Left,Icon,Right,Title,Button } 
 from 'native-base';

    const webViewHeight = Dimensions.get('window').height - 55; 


class ModelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClose = () => {
      return this.props.onClose();
  }
  handleShare = () => {

  }
  render() {
      const {showModal, articleData} = this.props;
      const { url } = articleData;
      if( url != undefined) {
    return (
      <Modal
      animationType="slide"
      transparent
      visible={showModal}
      onRequestClose={this.handleClose}
      >
          <Container style={{margin: 15,marginBottom: 0,backgroundColor:'#fff'}}>
              <Header style={{backgroundColor:'#009387'}}>
                  <Left>
                      <Button onPress={this.handleClose} transparent>
                          <Icon name="close" style={{color:'white',fontSize:12}} />
                      </Button>
                  </Left>
                  <Body>
                      <Title children={articleData.title} style={{color:'#fff'}} />
                  </Body>
                  <Right>
                  <Button onPress={this.handleShare} transparent>
                          <Icon name="share" style={{color:'white',fontSize:12}} />
                      </Button>
                  </Right>
              </Header>
              <Content contentContainerStyle={{height : webViewHeight}}>
                <WebView source={{uri:url}} style={{flex: 1,}} 
                onError={this.handleClose} startInLoadingState
                scalesPageToFit
                />
              </Content>
          </Container>
      </Modal>
    );
      } else {
          return null;
      }
  }
}

export default ModelComponent;
