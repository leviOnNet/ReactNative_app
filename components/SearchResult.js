import { View, Text } from 'react-native'
import { COLORS, SIZES,SHADOWS } from "../constants";

const SearchResult = ({data}) => {
  return (
    <View style={{backgroundColor:COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base}}>
            <View style={{width:"100%", height: 190, marginTop:70}}>
            <Text style={{fontSize:25, height:200, width:'100%',padding:10,
        fontSize: 14,
        color:COLORS.gray,
        textAlign: 'center'}}>{data.value}</Text>
            </View>
      
    </View>
  )
}

export default SearchResult