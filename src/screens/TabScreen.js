import React, { Component } from 'react';
import {View } from 'react-native';
import { Container, Header,Right, Tab,Left,Body, Tabs, ScrollableTab,Title } from 'native-base';
import Tab1 from './Tabs/tabOne';
import Tab2 from './Tabs/tabTwo';
import Tab3 from './Tabs/tabThree';

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header  hasTabs>
          <Body>
            <Title style={{marginLeft:'42%'}}>Header</Title>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab tabStyle={{backgroundColor:'#009387'}}
          textStyle={{fontSize: 35,color:"white"}} 
          activeTabStyle={{backgroundColor:'#009387'}}
          activeTextStyle={{color:'white'}}
          heading="TomCruise">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} 
          activeTabStyle={{backgroundColor:'#009387'}}
          textStyle={{fontSize: 35,color:"white"}}  
          activeTextStyle={{color:'white'}}
          heading="suleman">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}}
          textStyle={{fontSize: 35,color:"white"}} 
           activeTabStyle={{backgroundColor:'#009387'}}
           activeTextStyle={{color:'white'}}
           heading="Kamran">
            <Tab3 />
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}