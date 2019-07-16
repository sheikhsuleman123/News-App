import React, { Component } from 'react';

import {Alert,View,Text,ActivityIndicator } from 'react-native';

import { Container, Content , List  } from 'native-base';

import DataItem from '../../components/dataItem';
import ModalComponent from '../../components/model';
import {getArticles} from '../../servise/news';

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);
    
    this. handleItemDataonPress = this. handleItemDataonPress.bind(this);

    this.state = {
      isLoading: true,
      data:null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataonPress = (articleData) => {
    // Alert.alert("hallo 2")
    this.setState({
      setModalVisible : true,
      modalArticleData : articleData
    })
  }
  handleModalClose = () => {
    this.setState({
      setModalVisible:false,
      modalArticleData:{}
    });
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
       <ActivityIndicator style={{marginTop:30}} animating={this.state.isLoading} />
     <Text style={{alignSelf:'center',marginTop:5}}>Please wait..</Text>
      </View>
      ) : 
   (
         <List 
         dataArray={this.state.data}
          renderRow={(item) => {
          return( 
          <DataItem onPress={this.handleItemDataonPress}  data={item} />
          )
          }} 
           />
        )

    return (
      <Container>
        
        <Content>
          {view}
        </Content>

        <ModalComponent 
        showModal={this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalClose}
        />

      </Container>
    );
  }
}