import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  buttonStyle: {
    width: "60%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
  },
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
  formField: {
    height: 300,
    width: "100%",
    backgroundColor: "beige",
    borderWidth: 0.1,
    elevation: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPlate: {
    backgroundColor: "#fff",
    width: "70%",
    borderWidth: 2,
    elevation: 3,
  },
  countryText: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default styles;
