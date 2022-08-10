import { Text, View, SafeAreaView, FlatList } from "react-native"
import CategoryCard from "../components/CategoryCard";
import FocusedStatusBar  from "../components/FocusedStatusBar";
import HomeHeader  from "../components/HomeHeader";
import { COLORS } from "../constants";
import { useState, useEffect } from 'react';
import SearchResult from "../components/SearchResult";


const Home = () => {


  const [isLoading, setLoading] = useState(true);  
  let [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((json) => setCategory(json))
      .catch((error) => console.error(error))
     
  }, []);
  
  let [jokes, setJokes] = useState([]);

  const handleSearch = (value) => {
    
    fetch("https://api.chucknorris.io/jokes/search?query="+value)
          .then(response => response.json())
          .then((json) => setJokes(json.result))
          .then((responseJson) => {
              console.log('getting data from search', responseJson)
          

          });

          
     
  }



  return (
    <SafeAreaView style={ {flex : 1}}>
        
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1}}>
            <View>
                
                <FlatList 
            
                data={jokes} 
                renderItem={({ item }) => <SearchResult data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                />
               
            </View>
            <View style={{ zIndex:0 }} >
                
                
                <FlatList 
            
                data={category} 
                renderItem={({ item }) => <CategoryCard data={item} />}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                
                />
            </View>

            <View style={{
                position:"absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
            }}>
                <View style={{ height:300,backgroundColor: COLORS.primary}} />
                <View style={{ flex: 1,backgroundColor: COLORS.primary}} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home