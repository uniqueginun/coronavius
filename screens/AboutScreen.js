import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "كوفيد- 19",
          style: { color: "#fff", fontWeight: "bold" }
        }}
        containerStyle={{
          backgroundColor: "#d86422",
          justifyContent: "center",
          height: 90,
          paddingBottom: 20,
          marginBottom: 15
        }}
      />
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/coronavirus.jpg")}
            style={{ width: "93%", height: 200 }}
          />
        </View>
        <View style={styles.block}>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              تعد فيروسات كورونا فصيلة كبيرة من الفيروسات التي تسبب اعتلالات
              تتنوع بين الزكام وأمراض أكثر وخامة، مثل متلازمة الشرق الأوسط
              التنفسية (MERS-CoV)، ومتلازمة الالتهاب الرئوي الحاد الوخيم (سارس)
              (SARS-CoV). ويُمثِّل فيروس كورونا المستجد (nCoV) سلالة جديدة لم
              يسبق تحديدها لدى البشر من قبل.
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              وتعد فيروسات كورونا حَيَوانِيّة المَصْدَر، ويعني ذلك أنها تنتقل
              بين الحيوانات والبشر. وتوصَّلت الاستقصاءات المستفيضة إلى أنَّ
              فيروس كورونا المسبب لمتلازمة الالتهاب الرئوي الحاد الوخيم (سارس)
              قد انتقل من سَنَانير الزبَّاد إلى البشر، بينما انتقل فيروس كورونا
              المسبب لمتلازمة الشرق الأوسط التنفسية من الجمال الوحيدة السنام إلى
              البشر. وينتشر العديد من فيروسات كورونا المعروفة بين الحيوانات، ولم
              تُصيب البشر بعد.
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              وتشمل الأعراض الشائعة للعدوى أعراضًا تنفسية والحمى والسعال وضيق
              النفس وصعوبات في التنفس. وفي الحالات الأكثر وخامة، قد تسبب العدوى
              الالتهاب الرئوي، ومتلازمة الالتهاب الرئوي الحاد الوخيم، والفَشَل
              الكُلَويّ، وحتى الوفاة.
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              وتشمل التوصيات الموحدة للوقاية من انتشار العدوى: غسل اليدين
              بانتظام، وتغطية الفم والأنف عند السعال والعطس، وطهي اللحوم والبيض
              جيدًا. بالإضافة إلى تجنب مخالطة أي شخص تبدو عليه أعراض الإصابة
              بمرض تنفسي، مثل السعال والعطس.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  block: {
    padding: 12
  },
  info: {
    marginVertical: 5,
    textAlign: "justify",
    color: "#fff",
    fontSize: 15
  },
  infoContainer: {
    backgroundColor: "#4d4947",
    padding: 5,
    borderRadius: 5,
    marginBottom: 8
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10
  }
});

export default AboutScreen;
