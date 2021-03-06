import { StyleSheet } from "react-native";
const primaryColor = "#ff8700"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  title: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 20,
    elevation: 2,
    shadowColor: "#000",
    backgroundColor: primaryColor,
    padding: 10,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  TextBody:{
    
    color: "#565656",
    fontSize: 55,
    textAlign: 'center',
    textAlignVertical:'bottom',
    height:'40%'
  },
  TextBody2:{
    
    color: "#565656",
    fontSize: 20,
    textAlign:'center',
    textAlignVertical:'top',
    height:'60%'
  },
  buttonAbout:{
    position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    
  },
  buttonAboutIcon:{
    color: "#E5994E"
  },
  buttonAdd: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: primaryColor,
    position: "absolute",
    width: 70,
    height: 70,
    right: 25,
    bottom: 25,
    zIndex: 9, //sobrepor demais itens
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonAddIcon: {
    color: "white",
  },
  flatList: {
    top: 5,
    zIndex: 9,
    flex:1
  },

  task: {
    alignItems: "center",
    height: 43,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    fontSize: 40,
    marginTop: 15,
    borderRadius: 12,
    marginHorizontal: 15,
    color: "#121212",
    paddingLeft: 10,
    paddingRight: 20,
    elevation: 1.5,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: -4,
      height: -5,
    },
  },
  taskText: {
    paddingLeft: 10,
    color: "#121212",
    fontSize: 20,
    paddingRight: 20,
  },
  buttonReturn: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: 7,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonReturnIcon: {
    color: "white",
  },
  modalHeader: {
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "#262626",
    alignItems: "center",
    borderRadius: 5,
  },
  modalHeaderTitle: {
    marginLeft: 20,

    fontSize: 20,
    color: "white",
  },
  modalBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  modalTitle: {
    backgroundColor: primaryColor,
    color: "white",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "flex-start",
    top: 48,
    fontSize: 23,
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  modalInput: {
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    top: 180,
    left: -20,
    width: "75%",
    height: 120,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    textAlignVertical: "top",
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 2,
    fontSize: 20,
  },
  submitButton: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 210,
    right: 40,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  submitButtonIcon: {
    color: "#121212",
    left: 1,
  },
});

export default styles