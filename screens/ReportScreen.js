import React, { Component } from "react";
import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Badge,
  Header
} from "react-native-elements";
import { connect } from "react-redux";
import { fetchDialy } from "../store/actions/CoronaActions";
import AppHeader from "../components/AppHeader";

class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    try {
      await this.props.fetchDialy();
    } catch (error) {
      console.log(error);
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title="إحصائيات بالتواريخ" />
        <ScrollView>
          {this.state.loading ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/img/loading.gif")}
                style={{ width: 150, height: 150 }}
              />
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                paddingBottom: 50
              }}
            >
              {this.props.reportData.map((u, i) => {
                return (
                  <Card key={i} title={u.reportDateString}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                      }}
                    >
                      <Text>داخل الصين</Text>
                      <Badge
                        status="error"
                        value={
                          <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                            {u.mainlandChina}
                          </Text>
                        }
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                      }}
                    >
                      <Text>خارج الصين </Text>
                      <Badge
                        status="primary"
                        value={
                          <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                            {u.otherLocations}
                          </Text>
                        }
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                      }}
                    >
                      <Text>إجمالي الإصابات </Text>
                      <Badge
                        status="warning"
                        value={
                          <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                            {u.totalConfirmed}
                          </Text>
                        }
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                      }}
                    >
                      <Text>إجمالي المتعافين </Text>
                      <Badge
                        status="success"
                        value={
                          <Text style={{ color: "#fff", paddingHorizontal: 5 }}>
                            {u.totalRecovered || 0}
                          </Text>
                        }
                      />
                    </View>
                  </Card>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  reportData: state.virus.dialyReport
});

export default connect(mapStateToProps, { fetchDialy })(ReportScreen);
