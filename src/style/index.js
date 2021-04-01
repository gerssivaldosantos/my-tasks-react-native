import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222222',
      
    },
    title:{
        color:'white',
        fontSize:40,
        alignSelf:'center',
        marginTop:20,
        elevation:2,
        shadowColor:'#000',
        
    },
    buttonAdd:{
      textAlign: 'center',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        backgroundColor:'white',
        position: 'absolute',
        width:80,
        height:80,
        right:25,
        bottom:25,
        elevation:2,
        zIndex:9, //sobrepor demais itens
       
       
    },
    flatList:{
      top:50
    },
   
    task:{
          flex:1,
          flexDirection:'row',
          backgroundColor:'white',
          fontSize:40,
          marginTop:15,
          borderRadius:12,
          marginHorizontal:15,
          color:'#121212',
          paddingLeft:10,
          paddingRight:20,
          elevation: 1.5,
          shadowColor:'gray',
          shadowOpacity:0.4,
          shadowOffset:{
            width:-4,
            height:-5,
          }
          
    }
  });

  export default styles;
  