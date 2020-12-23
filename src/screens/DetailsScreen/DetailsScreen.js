import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ListItem, Body, Button, Toast, Left } from "native-base";
import { SvgUri } from "react-native-svg";
import axios from "axios";
import styles from "./DetailsStyle";
const API_KEY = "33cc1ce72e18b58c26d48f97a13121da";
const CustomListItem = ({ item, onpress }) => {
  let { capital, population, latlng, flag, name } = item;
  return (
    <ListItem>
      <Left style={styles.leftContainer}>
        <SvgUri width="100%" height="100%" uri={flag} viewbox="0 0 46 46" />
      </Left>

      <Body style={{ padding: 10 }}>
        <Text>
          <Text style={styles.listlabel}>Country: </Text>
          {name}
        </Text>
        <Text>
          <Text style={styles.listlabel}>Capital: </Text>
          {capital}
        </Text>
        <Text>
          <Text style={styles.listlabel}>Population: </Text>
          {population}
        </Text>
        <Text>
          <Text style={styles.listlabel}>LatLong: </Text>
          {latlng.join(", ") || "NA"}
        </Text>
      </Body>

      <Body>
        <Button
          onPress={() => onpress(capital)}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            Capital Weather
          </Text>
        </Button>
      </Body>
    </ListItem>
  );
};

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsData: props.route.params.details,
      loader: false,
    };
  }

  showIssue = () => {
    Toast.show({
      text: "No Records to display",
      position: "bottom",
    });
  };

  fetchCaptialInformation = async (capital) => {
    this.setState({ loader: true });
    try {
      let response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`
      );

      this.props.navigation.navigate("CapitalInfoScreen", {
        capitalInfo: response.data,
      });
    } catch (e) {
      this.showIssue();
    }
    this.setState({ loader: false });
  };
  remderOverLayIndicator = () => (
    <View style={styles.loader}>
      <ActivityIndicator color={"#000"} size={80} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.detailsData}
          renderItem={({ item }) => (
            <CustomListItem
              item={item}
              onpress={this.fetchCaptialInformation}
            />
          )}
          keyExtractor={(item, idx) => item + idx.toString()}
        />
        {this.state.loader ? this.remderOverLayIndicator() : null}
      </View>
    );
  }
}

export default DetailsScreen;
