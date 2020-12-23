import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  loader: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    elevation: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    opacity: 0.4,
  },

  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },

  listlabel: {
    fontWeight: "bold",
    color: "black",
  },

  leftContainer: {
    height: "100%",
    width: "100%",
    aspectRatio: 1,
  },
});

export default styles;
