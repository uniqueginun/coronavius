import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Image, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchConts, fetchStats } from "../store/actions/CoronaActions";
import { Text, Overlay, Badge } from "react-native-elements";

import SearchableDropdown from "react-native-searchable-dropdown";
import Colors from "../Colors";
import AppHeader from "../components/AppHeader";

export default function StatisticScreen(props) {
  const countries = useSelector(state => state.virus.countries);

  const selectedCountry = useSelector(state => state.virus.selectedCntry);
  const confirmed = useSelector(state => state.virus.confirmed);
  const recovered = useSelector(state => state.virus.recovered);
  const deaths = useSelector(state => state.virus.deaths);
  const lastUpdate = useSelector(state => state.virus.lastUpdate);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      try {
        await dispatch(fetchConts());
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getCountries();
  }, []);

  const search = async country => {
    setLoading(true);
    try {
      await dispatch(fetchStats(country));
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require("../assets/img/coronavirus.jpg")}
      style={styles.container}
    >
      <AppHeader title="إحصائيات البلدان" />
      {loading ? (
        <Image
          source={require("../assets/img/loading.gif")}
          style={{ width: 150, height: 150 }}
        />
      ) : (
        <View style={{ width: "100%", paddingHorizontal: 10 }}>
          {visible ? null : (
            <View style={{ width: "100%" }}>
              <SearchableDropdown
                onItemSelect={item => search(item)}
                onRemoveItem={item => setCountry()}
                containerStyle={{ padding: 5 }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: "#ddd",
                  borderColor: "#bbb",
                  borderWidth: 1,
                  borderRadius: 5
                }}
                itemTextStyle={{ color: "#222" }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={countries}
                defaultIndex={0}
                resetValue={false}
                textInputProps={{
                  placeholder: "placeholder",
                  underlineColorAndroid: "transparent",
                  style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "#fff",
                    borderRadius: 5,
                    fontSize: 17,
                    color: "#000",
                    backgroundColor: "#fff"
                  },
                  placeholder: "الرجاء إختيار البلد:// ex: Sudan"
                }}
                listProps={{
                  nestedScrollEnabled: true
                }}
              />
            </View>
          )}
          <Overlay
            isVisible={visible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor={Colors.primary}
            width="90%"
            height="auto"
            overlayStyle={styles.overlap}
            onBackdropPress={() => setVisible(false)}
          >
            <View style={{ width: "100%" }}>
              <Text
                h3Style={{ padding: 20, textAlign: "center", color: "#fff" }}
                h3
              >
                {selectedCountry}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "#e3d8d8",
                  marginBottom: 6
                }}
              >{`Last Update: ${lastUpdate}`}</Text>
              <View style={styles.caseElement}>
                <Text style={{ color: "#e3d8d8", fontSize: 16 }}>المصابين</Text>
                <Badge
                  status="warning"
                  value={
                    <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                      {confirmed.value}
                    </Text>
                  }
                />
              </View>
              <View style={styles.caseElement}>
                <Text style={{ color: "#e3d8d8", fontSize: 16 }}>
                  عدد المتعافين
                </Text>
                <Badge
                  status="success"
                  value={
                    <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                      {recovered.value}
                    </Text>
                  }
                />
              </View>
              <View style={styles.caseElement}>
                <Text style={{ color: "#e3d8d8", fontSize: 16 }}>
                  عدد المتوفين
                </Text>
                <Badge
                  status="error"
                  value={
                    <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                      {deaths.value}
                    </Text>
                  }
                />
              </View>
            </View>
          </Overlay>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center"
  },
  overlap: {
    justifyContent: "center",
    alignItems: "center"
  },
  caseElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10
  }
});
