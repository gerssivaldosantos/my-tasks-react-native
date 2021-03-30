import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F59968',
      
    },
    title:{
        color:'white',
        fontSize:40,
        alignSelf:'center',
        top:40,
        elevation:2,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
          width:1,
          height:3,
        }
    },
    buttonAdd:{
        position: 'absolute',
        width:80,
        height:80,
        right:25,
        bottom:25,
        alignItems:'center',
        justifyContent:'flex-end',
        elevation:2,
        zIndex:9, //sobrepor demais itens
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
          width:1,
          height:3,
        }
       
    },
    taskListItem:{
          fontSize:40,
          
    },
    taskList:{
          backgroundColor:'white',
          top:50
          
    }
  });

  export default styles;
  