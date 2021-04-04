import { StyleSheet } from "react-native";

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
  },
  buttonAdd: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    width: 70,
    height: 70,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9, //sobrepor demais itens
  },
  flatList: {
    top: 50,
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
    left: 10,
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
  },
  modalTitle:{
    fontSize:20,
    color:'white'
  }
});

export default styles;
