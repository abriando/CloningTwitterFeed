import React, { Component } from 'react';
import {Text, View, StatusBar, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
     };
  }

  render() {
    return (
    <SafeAreaView style={{height:'100%'}}>
    
    <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#ffff"/>
        <View style={{height:50}}>
            <View style={style.top_nav}>
               <View style={style.top_nav_icon}>
                 <View style={style.top_nav_iconImage}>
                   <Image 
                    source={{uri:'https://images.unsplash.com/photo-1648132907626-e705f96e5513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}
                    style={{width:30, height:30, borderRadius:50, marginRight:10}}/>
                </View>
                <View style={style.top_nav_iconTwitter}>
                  <AntDesign name="twitter" size={22} color="#1DA1F2"/>
                </View>
                <View style={style.top_nav_iconStar}>
                  <MaterialCommunityIcons name="star-four-points-outline" size={22} color="#1DA1F2"/>
                </View>
              </View>
            </View> 
        </View>
    
        <View style={{ height:'auto'}}>
              <View style={style.content}>
                                    <View style={style.content_container}>
                                          <Image 
                                          source={{uri:'https://images.unsplash.com/photo-1648063987793-6247b5eb05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}}
                                          style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>JohnSena 
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @johnSena 
                                              <Entypo name="dot-single" size={10} color="#657786"/> 2 menit
                                                <View style={{paddingLeft:95}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Top defending 🚫
                                            🔝 Nathan Aké or Raúl Albiol: who impressed you more this week? <Text style={{color:"#1DA1F2"}}>#UCL #MUNNOR..</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={style.content_container_iconAction}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              23
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              13
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 80
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
                          <View style={style.content}>
                                    <View style={style.content_container}>
                                      <Image 
                                        source={{uri:'https://images.unsplash.com/photo-1615084581480-f1fc82420acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}}
                                        style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>Cesmirasea 
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @cesy 
                                              <Entypo name="dot-single" size={10} color="#657786"/> 15 menit
                                                <View style={{paddingLeft:100}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Hey Creators 👋🏽 what have you been working on lately?
                                                I’d love to see any links or works in progress. <Text style={{color:"#1DA1F2"}}>#HBD #happybirthday</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://images.unsplash.com/photo-1560173045-beaf11c65dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlydGhkYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={{marginTop:10, flexDirection:'row', marginBottom:17}}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              149
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              49
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 9
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
                          <View style={style.content}>
                                    <View style={style.content_container}>
                                      <Image 
                                        source={{uri:'https://images.unsplash.com/photo-1580059887244-67ae60a8f432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2aWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}}
                                        style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>Devileye
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @eye 
                                              <Entypo name="dot-single" size={10} color="#657786"/> 30 menit
                                                <View style={{paddingLeft:100}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Digital Art 
                                              Tittle : 𝐒  𝐕  𝐑  𝐑  𝐄  𝐀  𝐋  𝐈  𝐒  𝐌
                                              By : Rizki Zulkarnain 
                                              Date : April / 16th / 2022<Text style={{color:"#1DA1F2"}}>#NFT #nftart #nftartist #art #digitalart #digitalartwork #digitalarts #NFTs #artwork #ArtistOnTwitter #drawing #painting #digitalpainting #Artist #ArtistOfIndonesia</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://images.unsplash.com/photo-1586512213618-d8242ba86ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={{marginTop:10, flexDirection:'row', marginBottom:17}}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              49
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              42
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 1
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
        </View>
        </ScrollView>
        <View style={{}}>
              <View style={style.bottom_nav}>
                <View style={style.bottom_nav_icon}>
                  <View style={style.bottom_nav_iconHome}>
                    <Feather name="home" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconSearch}>
                    <AntDesign name="search1" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconNotif}>
                    <Ionicons name="notifications-outline" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconMail}>
                    <AntDesign name="mail" size={26} color="#14171A"/>
                  </View>
                </View>
              </View>
          </View>
     
    </SafeAreaView>
     );
  }
}

const style = StyleSheet.create({
  top_nav:{
    marginTop:10,
    flexDirection:'row', 
    borderBottomWidth:1, 
    borderBottomColor:'#E1E8ED'
  },
  top_nav_icon:{
    marginHorizontal:20, 
    flexDirection:'row', 
    marginBottom:8
  },
  top_nav_iconImage:{
    marginTop:5
  },
  top_nav_iconTwitter:{
    paddingLeft:130, 
    marginTop:7
  },
  top_nav_iconStar:{
    paddingLeft:140, 
    marginTop:6
  },
  content:{
    marginTop:10, 
    flexDirection:'row', 
    borderBottomWidth:1, 
    borderBottomColor:'#E1E8ED',
  },
  content_container:{
    flexDirection:'row', 
    marginHorizontal:20
  },
  content_container_iconAction:{
    marginTop:10, 
    flexDirection:'row', 
    marginBottom:12
  },
  bottom_nav:{
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#E1E8ED'
  },
  bottom_nav_icon:{
    marginHorizontal:37,
    flexDirection:'row', 
    marginBottom:10,
    marginTop:4
  },
  bottom_nav_iconHome:{
    marginTop:5,
  },
  bottom_nav_iconSearch:{
    marginTop:5,
    marginLeft:70
  },
  bottom_nav_iconNotif:{
    marginTop:5,
    marginLeft:70
  },
  bottom_nav_iconMail:{
    marginTop:5,
    marginLeft:70
  }
})

export default App;