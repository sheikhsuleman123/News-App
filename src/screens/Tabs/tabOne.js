import React, { Component } from 'react';

import {Alert,View,Text,ActivityIndicator } from 'react-native';

import { Container, Content , List  } from 'native-base';

import DataItem from '../../components/dataItem';

import {getArticles} from '../../servise/news';

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data:null
    }
  }
  componentDidMount() {
    getArticles().then( data => {
        this.setState({
          isLoading: false,
          data: data
        });
      }, error => {
        Alert.alert('Error', 'Something went wrong');
      })
    }
  render() {
    console.log(this.state.data);
   
   let view = this.state.isLoading ? (
     <View> 
       <ActivityIndicator animating={this.state.isLoading} />
     <Text>Please wait..</Text>
      </View>
      ) : 
   (
         <List 
         dataArray={this.state.data}
          renderRow={(item) => {
          return( 
          <DataItem data={item} />
          )
          }} 
           />
        )

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}