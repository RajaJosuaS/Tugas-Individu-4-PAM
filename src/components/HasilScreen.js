import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import DataPenerbangan from "./Jadwal";

const HasilScreen = ({ route, navigation }) => {
  const tampil = DataPenerbangan[2].map((tgl, index) => {
    if (
      route.params.tgl == tgl ||
      route.params.awal == DataPenerbangan[0][index] ||
      route.params.tujuan == DataPenerbangan[1][index]
    ) {
      return (
        <View style={styles.showbox} key={index}>
          <View style={styles.showbox1}>
            <Text style={styles.textShowbox1}>{DataPenerbangan[0][index]}</Text>
            <View style={styles.iconshowbox2}>
              <Icon name="plane" size={40} style={{ color: "green" }}></Icon>
              <Text style={styles.textBold}>{DataPenerbangan[3][index]}</Text>
            </View>
          </View>
          <View style={styles.showbox3}>
            <Text style={styles.textShowbox1}>-</Text>
          </View>
          <View style={styles.showbox2}>
            <Text style={styles.textShowbox1}>{DataPenerbangan[1][index]}</Text>
            <Text style={styles.textBlue}>{DataPenerbangan[2][index]}</Text>
          </View>
        </View>
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="arrow-left" size={30} style={{ color: "white" }} />
        </TouchableOpacity>
        <Icon
          name="user"
          size={40}
          style={{ marginLeft: "auto", marginTop: -30, color: "white" }}
        />
        <Text style={styles.textHeader}>Hiling.id</Text>
        <Text style={styles.textHeader2}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.textHeader2}>({route.params.tgl})</Text>
      </View>
      <View style={styles.box2}>
        <SafeAreaView style={{ height: 530 }}>
          <ScrollView>{tampil}</ScrollView>
        </SafeAreaView>
        <Text style={{ textAlign: "center", paddingTop: 15 }}>
          Copyright Raja Josua Simanungkalit | 120140134
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1,
    padding: 15,
  },
  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  textHeader2: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: 400,
  },
  box2: {
    flex: 5,
  },
  showbox: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 17,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  showbox1: {
    flexDirection: "column",
    width: 130,
  },
  showbox2: {
    flexDirection: "column",
  },
  showbox3: {
    flexDirection: "column",

    width: 30,
  },
  textShowbox1: {
    fontSize: 18,
    fontWeight: 600,
  },
  iconshowbox2: {
    flexDirection: "row",
  },
  textBold: {
    fontSize: 16,
    fontWeight: 800,
    marginLeft: 10,
    marginTop: 5,
  },
  textBlue: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 5,
    color: "blue",
  },
});

export default HasilScreen;