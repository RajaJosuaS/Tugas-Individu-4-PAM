import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchIp } from "../actions/ipActions";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const [Awal, setAwal] = useState("");
  const [Tujuan, setTujuan] = useState("");
  const [Tgl, setTgl] = useState("04 November 2022");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ipState = useSelector((state) => state.ip);
  const { loading, ip, error } = ipState;

  useEffect(() => {
    dispatch(fetchIp());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20 }} />
        <Icon
          name="user"
          size={40}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -53,
          }}
        />
        <Text style={styles.headerText}>Hiling.id</Text>
      </View>
      <View style={styles.box2} />
      <View style={styles.boxInput}>
        <SafeAreaView>
          <Text style={styles.textInput}>Lokasi Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan lokasi keberangkatan"
            style={styles.input}
            onChangeText={(val) => setAwal(val)}
          />
          <Text style={styles.textInput}>Lokasi Tujuan</Text>
          <TextInput
            placeholder="Masukkan Lokasi Tujuan"
            style={styles.input}
            onChangeText={(val) => setTujuan(val)}
          />
          <Text style={styles.textInput}>Tanggal Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan Tanggal Keberangkatan"
            style={styles.input}
            onChangeText={(val) => setTgl(val)}
          />
        </SafeAreaView>
        <Button
          title="Cari"
          color="#FF7F10"
          onPress={() =>
            navigation.navigate("Hasil Pencarian", {
              awal: Awal,
              tujuan: Tujuan,
              tgl: Tgl,
            })
          }
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, marginBottom: 50 }}>
          Aplikasi Pencarian Penerbangan
        </Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <Text>IP Anda: {ip}</Text>
        )}
      </View>
      <Text style={{ textAlign: "center", marginBottom: 70 }}>
        Copyright Raja Josua Simanungkalit | 120140134
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1.3,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 40,
  },
  box2: {
    backgroundColor: "#fff",
    flex: 1,
  },
  boxInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 35,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  textInput: {
    fontWeight: 700,
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
