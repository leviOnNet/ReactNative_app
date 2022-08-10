import { View, Text, TextInput, Image } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'


const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      padding: 10,
      backgroundColor: COLORS.primary

    }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            height:100
          }}>
            <Image source={assets.Norris} resizeMode="contain" style={{height:70,width:70}} />
        </View>
        <View style={{ marginVertical: SIZES.font}}>
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}}>
              Hello there!
            </Text>
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base/2}}>
              We got a chunk of Chuck Norris Jokes for you. Search or click a category to get chuckling.
            </Text>
        </View>
        <View style={{marginTop:SIZES.font}}>
            <View style={{width:'100%', borderRadius: SIZES.font, backgroundColor:COLORS.gray,flexDirection:'row',alignItems:'center',paddingHorizontal:SIZES.font,paddingVertical:SIZES.small}}>
              <Image 
                source={assets.search}
                resizeMode="contain"
                style={{width:20,height:20, marginRight:SIZES.base}}
              />
              <TextInput 
                placeholder='Search Jokes'
                style={{ flex:1}}
                onChangeText={onSearch}
              />
            </View>
        </View>
    </View>
  )
}

export default HomeHeader