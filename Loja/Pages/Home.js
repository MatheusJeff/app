import React from 'react';
import {View, Text,FlatList,TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import celso from "../Images/images.png"

const back = {uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}



const Home = () => {
    const navigation = useNavigation()
    const [destination,setDestination] = React.useState([
        {
            id: 1,
            name: "Natal",
            img: "",
        },
        {
            id: 2,
            name: "Maceio",
            img: "",
        },
        {
            id: 3,
            name: "Recife",
            img: "",
        },
        {
            id: 4,
            name: "Recife",
            img: "",
        },
        {
            id: 5,
            name: "Recife",
            img: "",
        },
])
    return(
          <View>
              <ImageBackground
                source={back}
                style={{width: '100%', height: 270}}
                imageStyle={{borderBottomRightRadius: 65}}>
                  <View style={styles.searchContainer}>
                      <Text style={styles.userGreet}>Olá Matheus,</Text>
                      <Text style={styles.userText}>Where would you like to go today?</Text>
                  </View>
                  <View>
                      <TextInput
                        style={styles.searchBox}
                        placeholder='Procure o destino'
                        placeholderTextColor
                      ></TextInput>
                      <Icon name="search" size={22} color="#666" style={{position: "absolute", top: 30,right: 60, opacity: 0.6}}/>
                  </View>
              </ImageBackground>
            <View style={{padding: 16}}>
              <Text style={{
                  fontSize: 26, fontWeight: 'bold'
              }}>Destination</Text></View>
              <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false} 
              data={destination}
              keyExtractor={item => item.id.toString()}
              renderItem={({item,index}) => renderDestination(item,index)}
              />
          </View>
    );
  }

  function renderDestination({navigation}){
    return(
        <TouchableOpacity onPress={() => {navigation.navigate(HomeScreen)}}>
            <Image source={celso}  style={{width: 150, marginRight: 14, height: 250, borderRadius: 10}}/>
        </TouchableOpacity>
    )
}
  export default Home

  const styles = StyleSheet.create({
      userText: {
          fontSize: 16,
          fontWeight: 'normal',
          color: 'white'
      },
      userGreet: {
          fontSize: 38,
          fontWeight: 'bold',
          color: 'white'
      },
      searchContainer: {
          paddingTop: 100,
          paddingLeft: 16
      },
      searchBox: {
        marginTop: 16,
        backgroundColor: "#fff",
        padding: 12,
        paddingLeft: 24,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: "90%"
      },
      
  })