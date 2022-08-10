import { View, Text, Image, TouchableOpacity } from 'react-native'
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { useState, useEffect, setState } from 'react';



const CategoryCard = ({data}) => {
    
    



    let [joke, setJoke] = useState([]);
    const getJoke = (categ) => {
            
            fetch("https://api.chucknorris.io/jokes/random?category="+categ)
                .then(response => response.json())
                .then((json) => setJoke(json))
                .then((responseJson) => {
                    console.log('getting data from fetch', responseJson)
                

                })
                .catch(error => console.log(error))

            
        
        }
    

    

  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
      
            <View style={{ width:"100%", height: 250}}>
                
           
                <TouchableOpacity onPress={() => {getJoke(data)}} style={{alignContent:'center', width:'100%', alignItems:'center'}}>
                <Text style={{fontSize:50}}>{data}</Text>
                </TouchableOpacity>
            
            <Text style={{padding:10}}>{joke.value}</Text>
        </View>
        
        
        

     
    </View>
  )
}

export default CategoryCard