import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Unorderedlist from "react-native-unordered-list";
import AppHeader from "../components/AppHeader";

export default class InstructionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader title="أسئلة وأجوبة حول فيروس كورونا" />
        <ScrollView>
          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                ما نوع الفيروس الجديد وما مدى خطورته؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                فيروس كورونا المستجد هو فيروس حيواني المصدر ينتقل للإنسان عند
                المخالطة اللصيقة لحيوانات المزرعة أو الحيوانات البرية المصابة
                بالفيروس. كما ينتقل عند التعامل مع فضلات هذه الحيوانات. ورغم أن
                المصدر الحيواني هو المصدر الرئيسي الأكثر ترجيحًا لهذه الفاشية،
                يجب إجراء المزيد من الاستقصاءات لتحديد المصدر الدقيق للفيروس
                وطريقة سريان
              </Text>
              <Text style={styles.answer}>
                وتنص إرشادات منظمة الصحة العالمية للبلدان والأفراد على احتمالية
                انتشار المرض بسبب مخالطة الحيوانات أو ملامسة الأغذية الملوثة أو
                انتقاله من شخص لآخر.
              </Text>
              <Text style={styles.answer}>
                ويتضح الآن وفقًا لأحدث المعلومات أنه يوجد على الأقل شكل من أشكال
                انتقال المرض بين البشر، ولكن لا يتضح إلى أي مدى. وتُعزز هذه
                المعلومات حالات العدوى بين العاملين في مجال الرعاية الصحية وبين
                أفراد الأسرة. كما تتسق هذه المعلومات مع التجارب مع الأمراض
                التنفسية الأخرى، لا سيّما مع الفاشيات الأخرى لفيروس كورونا.
              </Text>
              <Text style={styles.answer}>
                ووفقًا لما أوضحه المدير العام لمنظمة الصحة العالمية فإن : "هذه
                طارئة صحية في الصين، ولكنها لم تصبح طارئة صحية عامة بعد. ومن
                المحتمل أن تصبح طارئة عالمية. وتقييم المنظمة للمخاطر هو أن
                الفاشية تُمثِّل خطرًا بالغ الشدة في الصين، وخطرًا شديدًا على
                الصعيدين الإقليمي والعالمي".
              </Text>
            </View>
          </View>
          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>هل يمكن أن يتطور الفيروس؟</Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                لا زلنا في مراحل مبكرة جدًا من فهم هذا المرض، ولا زال هناك
                الكثير لا نعرفه. وتشير المعلومات الحالية إلى أن الفيروس قد يسبب
                أعراضًا خفيفة وتشبه الأنفلونزا، كما قد يسبب مرضًا وخيمًا. وبينما
                قد يظهر بمثابة مرض خفيف في البداية، قد يتطور إلى مرض أكثر وخامة،
                ويبدو أن الأشخاص الذين يعانون من حالات مرضية مزمنة قائمة أكثر
                عُرضة للإصابة بمرض أشد وخامة. كما يبدو أن المسنين أكثر استعدادًا
                للإصابة بمرض وخيم
              </Text>
              <Text style={styles.answer}>
                وسنواصل رصد المعلومات بشأن الحالات المرضية الحالية وأي حالات
                جديدة، لأنه من المهم فهم مدى وخامة هذا المرض
              </Text>
            </View>
          </View>
          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                ما هي توصيات منظمة الصحة العالمية للمسافرين للخارج؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                نشرت المنظمة نصائح بشأن السفر في 10 كانون الثاني/يناير. وبناءً
                على المعلومات المتوفرة حاليًا، لا يوجد بعد ما يبرر فرض أي قيود
                على السفر أو التجارة. (لا يعد تحرِّي المسافرين بشكل عام قيدًا
                مفروضًا على السفر). وفي حال تصاعد الوضع، ستوفر منظمة الصحة
                العالمية إرشادات بشأن مخاطر السفر إلى المناطق الموبوءة. ويجب على
                المسافرين الاطلاع على التوصيات الحالية للسفر. ففي ذروة وباء عام
                2003، كان خطر انتقال فيروس كورونا المسبب لمتلازمة الالتهاب
                الرئوي الحاد الوخيم (سارس) على المسافرين منخفضًا بشكل إجمالي.
                كما لم يتم فرض أي قيود على السفر أو التجارة عند ظهور فيروس
                كورونا المسبب لمتلازمة الشرق الأوسط التنفسية.
              </Text>
              <Text style={styles.answer}>
                وتُوصي المنظمة أنه يجب على الأشخاص القادمين من مدينة ووهان أو
                المناطق الأخرى التي تشهد خطرًا شديدًا معرفة الأعراض الرئيسية
                التي أوضحتها السلطات الصحية، كما يجب عليهم طلب المشورة الطبية من
                أحد الممارسين الصحيين إذا أُصيبوا بأعراض بعد مغادرتهم لمنطقة
                الفاشية. ويُنصح المسافرون بالتواصل مع أطبائهم أو السلطات الصحية
                الوطنية لديهم للحصول على معلومات إضافية، حيث قد تقوم بعض البلدان
                بتكييف توصيات المنظمة لإدراج اعتبارات وطنية.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                لماذا لا تُوصي منظمة الصحة العالمية بتدابير أكثر تقييدًا للسفر؟
                على سبيل المثال، حظر السفر؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                في ظل السياق الحالي، لا تُوصي المنظمة بفرض أي تدابير مقيدة
                للسفر، ولا يعود التحرِّي عند الدخول بفائدة كبيرة بشكل عام، كما
                يحتاج إلى موارد كبيرة. وفي حال كانت الأعراض تشير إلى الإصابة
                بمرض تنفسي قبل السفر أو أثنائه أو بعده، يُنصح المسافرون بطلب
                المساعدة الطبية ومشاركة تاريخ السفر مع مقدم خدمات الرعاية
                الصحية. وتوفر المنظمة إرشادات للمسافرين والمطارات ونقاط الدخول
                الأخرى، وستواصل تحديث هذه الإرشادات عند ظهور معلومات جديدة عن
                الفيروس.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل توجد إجراءات إحترازية وقائية تقوم بها المنظمة وما هي؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                في يوم 10 كانون الثاني/يناير، نشرت منظمة الصحة العالمية مجموعة
                من المعلومات حول كيفية تأهب البلدان لهذا الفيروس والاستجابة له،
                بما في ذلك كيفية رصد المرضى واختبار العينات وعلاج المرضى ومكافحة
                العدوى في المراكز الصحية والحفاظ على الإمدادات المناسبة والتواصل
                مع العامة بشأن هذا الفيروس الجديد.
              </Text>
              <Text style={styles.answer}>
                ويمكن الاطلاع على جميع المعلومات التقنية ذات الصلة بفيروس كورونا
                المستجد على هذا الرابط:
                https://www.who.int/health-topics/coronavirus
              </Text>
              <Text style={styles.answer}>
                وتُوصي المنظمة السلطات الصحية بالعمل مع قطاعات السفر والنقل
                والسياحة لتزويد المسافرين بالمعلومات اللازمة للحدّ عمومًا من خطر
                الإصابة بالعدوى التنفسية الحادة، وذلك من خلال العيادات الصحية
                للمسافرين ووكالات السفر وجهات تشغيل وسائل النقل وفي نقاط الدخول.
              </Text>
              <Text style={styles.answer}>
                وبناءً على المعلومات المتوفرة حاليًا، لا تُوصي المنظمة بفرض أي
                قيود على السفر أو التجارة. ويُوصى البلدان بمواصلة تعزيز تأهبها
                لحالات الطوارئ الصحية بما يتماشى مع اللوائح الصحية الدولية
                (2005).
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                ماذا توصي به المنظمة البلدان والأفراد؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                تشمل توصيات منظمة الصحة العالمية التوصيات المعتادة للعامة التي
                تهدف إلى الحدّ من التعرض للأمراض ونقلها، بما في ذلك النظافة
                الشخصية ونظافة الجهاز التنفسي والممارسات الغذائية الآمنة، ما
                يلي:
              </Text>
              <Unorderedlist>
                <Text>
                  غسل اليدين بالصابون والماء أو فرك اليدين بمطهر كحولي؛
                </Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>
                  تغطية الفم والأنف بقناع طبي أو منديل أو الأكمام أو ثني الكوع
                  عند السعال أو العطس؛
                </Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>
                  تجنب ملامسة أي شخص مصاب بأعراض زكام أو تشبه الأنفلونزا بدون
                  وقاية، والتماس الرعاية الطبية في حال الإصابة بحمى وسعال وصعوبة
                  في التنفس؛
                </Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>
                  عند زيارة الأسواق المفتوحة، تجنب الملامسة المباشرة دون وقاية
                  للحيوانات الحية والأسطح التي تلامسها الحيوانات؛
                </Text>
              </Unorderedlist>
              <Unorderedlist>
                <Text>طهي الطعام جيدًا، وبالأخص اللحوم.</Text>
              </Unorderedlist>
              <Text style={styles.answer}>
                وتم تشكيل فريق دعم إدارة الأحداث المعني بفيروس كورونا المستجد في
                المكتب الإقليمي للمنظمة بهدف تنسيق الدعم التقني، وتحديد القدرات
                الوطنية، واستعراض الاستفسارات التقنية الواردة من الدول الأعضاء
                والإجابة عنها، والقيام بالوظائف الأخرى المهمة. وجاري الآن شراء
                الإمدادات الصحية وتجهيزها مسبقًا في المركز الإقليمي للإمدادات
                اللوجستية لمنظمة الصحة العالمية في دبي بهدف توزيعها حسب
                الاقتضاء، كما جرى تأمين التمويل اللازم لإرسال العينات المختبرية
                إلى ثلاث مختبرات مرجعية عالمية لاختبارها.
              </Text>
              <Text style={styles.answer}>
                ويواصل المكتب الإقليمي للمنظمة رصد الوضع الذي يشهد تطورات سريعة
                للحدّ من خطر وفود فيروس كورونا المستجد إلى الإقليم، والعمل مع
                البلدان عن كثب لضمان تحديد الحالات المحتملة وفحصها والاستجابة
                لها سريعًا.
              </Text>
              <Text style={styles.answer}>
                لم تُبلِّغ بلدان إقليم شرق المتوسط عن أي حالات. وتُنسِّق منظمة
                الصحة العالمية مع البلدان في الإقليم لمواصلة تعزيز أنشطة التأهب
                بما يتوافق مع اللوائح الصحية الدولية (2005)، وأصدرت إرشادات
                تقنية عن كيفية القيام بذلك.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>هل هناك مبرر للفزع بين الناس؟</Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                لا، ليس بالضرورة. إذ تشير التقارير إلى أن العدوى بفيروس كورونا
                المستجد-2019 قد يسبب مرضًا خفيفًا إلى وخيمًا، وقد يصبح مميتًا في
                بعض الحالات. وحسب البيانات الحالية، يبدو أن أغلب الحالات الجديدة
                مصابة بمرض أخف، ولا يزال ضمن أنماط الأعراض الأكثر خفة التي
                تسببها الأمراض التنفسية.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل تعني حقيقة انتقال المرض بين البشر أننا بصدد جائحة؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                تُعرَّف الجائحة على أنها فاشية لعامل جديد مُسبب للمرض ينتشر
                بسهولة من شخص إلى آخر على مستوى العالم. ولم تؤدِ فيروسات كورونا
                الأخرى، بما في ذلك متلازمة الالتهاب الرئوي الحاد الوخيم (سارس)
                ومتلازمة الشرق الأوسط التنفسية، إلى جائحة عند ظهورها لأول مرة.
                ومع ذلك، لا يزال هناك الكثير لا نعلمه عن هذا الفيروس، وتحرص
                منظمة الصحة العالمية على رصد تطور هذه الفاشية.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل تُوصي منظمة الصحة العالمية بأي علاج محدد مضاد للفيروسات؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                لا توجد أي علاجات محددة لهذا النوع من فيروس كورونا المستجد،
                ويعتمد العلاج على الأعراض السريرية. وتوجد علاجات قيد الاستقصاء،
                من خلال تجارب عن طريق الملاحظة وتجارب سريرية يخضع لها المرضى
                المصابون بفيروس كورونا المسبب لمتلازمة الشرق الأوسط التنفسية.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>ما البلدان الأشد عُرضة للخطر؟</Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                ظهرت حالات نقلها أفراد إلى الخارج في العديد من البلدان، وتشمل
                تايلند واليابان وجمهورية كوريا والولايات المتحدة بالإضافة إلى
                تايوان والصين. ونظرًا لأننا في موسم ظهور الأنفلونزا، ومع حالة
                التيقُّظ الزائد، نتوقع ظهور تحذيرات وحالات جديدة في بلدان أخرى.
              </Text>
              <Text style={styles.answer}>
                ويواصل المكتب الإقليمي للمنظمة العمل مع البلدان لتوسيع نطاق
                تدابير التأهب والاستجابة، ورصد الوضع الذي يشهد تطورات سريعة
                للحدّ من خطر وفود فيروس كورونا المستجد إلى الإقليم.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                ما هو المدى الزمني للوصول إلى عقار مضاد لهذا الفيروس المستجد؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                حتى الآن لا توجد أية علاجات فعالة تمت الموافقة عليها من قبل
                منظمة الصحة العالمية لهذا النوع من فيروس كورونا المستجد، ويعتمد
                العلاج على الأعراض السريرية.
              </Text>
              <Text style={styles.answer}>
                وتوجد علاجات قيد الاستقصاء، من خلال تجارب عن طريق الملاحظة
                وتجارب سريرية يخضع لها المرضى المصابون بفيروس كورونا المسبب
                لمتلازمة الشرق الأوسط التنفسية.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل كانت هناك توقعات سابقة بظهور الفيروس وتحوره؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                هناك دائماً توقعات بتحور الفيروسات بناءً على الخبرات المكتسبة
                عبر تاريخ التعامل مع الفيروسات ونرى مثل هذه التحورات في عدة
                فيروسات أشهرها الإنفلونزا وكورونا وغيرها. ولكن من المستحيل تحديد
                كيف ومتى وأين يحدث التحور لذلك تركز المنظمة دائماً على أهمية
                التأهب والاستعداد واستكمال البنية الأساسية في مختلف البلدان
                لسرعة التصدي والاستجابة لأي فاشية أو تحور فيروسي.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل العادات غير الصحية مثل تدخين الشيشة وضعف البنية الأساسية لبعض
                الدول يمكن أن يكون لها أثر كبير في انتشار المرض؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                تدخين الشيشة ضار صحياً بالتأكيد لكن إرشادات منظمة الصحة العالمية
                للبلدان والأفراد تنص على احتمالية انتشار المرض بسبب مخالطة
                الحيوانات أو ملامسة الأغذية الملوثة أو انتقاله من شخص لآخر.
              </Text>
              <Text style={styles.answer}>
                ولا شك أن البلدان التي تتمتع ببنية أساسية قوية يمكنها أن تتصدى
                على نحو أفضل وأسرع لظهور أي فاشية من أي مرض.
              </Text>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                هل المنشآت الصحية في شرق المتوسط قادرة على استيعاب المصابين في
                حال اجتاح وباء فيروس كورونا المستجد الإقليم؟
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>
                تُعرَّف الجائحة على أنها فاشية لعامل جديد مُسبب للمرض ينتشر
                بسهولة من شخص إلى آخر على مستوى العالم. ولسنا بصدد هذه الحالة.
                ولم تؤدِ فيروسات كورونا الأخرى، بما في ذلك متلازمة الالتهاب
                الرئوي الحاد الوخيم (سارس) ومتلازمة الشرق الأوسط التنفسية، إلى
                جائحة عند ظهورها لأول مرة. ومع ذلك، لا يزال هناك الكثير لا نعلمه
                عن هذا الفيروس، وتحرص منظمة الصحة العالمية على رصد تطور هذه
                الفاشية. وتعمل عن قرب مع الدول الأعضاء. وجاري الآن شراء
                الإمدادات الصحية وتجهيزها مسبقًا في المركز الإقليمي للإمدادات
                اللوجستية لمنظمة الصحة العالمية في دبي بهدف توزيعها حسب
                الاقتضاء، كما جرى تأمين التمويل اللازم لإرسال العينات المختبرية
                إلى ثلاث مختبرات مرجعية عالمية لاختبارها.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  block: {
    paddingHorizontal: 10
  },
  question: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00436b"
  },
  answer: {
    lineHeight: 20,
    textAlign: "justify",
    paddingBottom: 8
  }
});
