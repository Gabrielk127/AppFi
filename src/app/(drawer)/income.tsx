import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import CustomInput from "@/components/customInput";
import CategoryModal from "@/components/categoryModal";
import DatePicker from "@/components/datePicker";
import { TextInputMask } from "react-native-masked-text";
import { Link } from "expo-router";
import ButtonBack from "@/components/buttonBack";

export default function Income() {
  const type = "income";
  const [date, setDate] = useState<Date>(new Date());
  const [titleIncome, setTitleIncome] = useState<string>("");
  const [descIncome, setDescIncome] = useState<string>("");
  const [incomeValue, setIncomeValue] = useState<string>("R$0.00");
  const [isEditingValue, setIsEditingValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  const handleApply = (category: string, subcategory: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setModalVisible(false);
  };

  const handleGoBackAndClearForm = () => {
    setDate(new Date());
    setTitleIncome("");
    setDescIncome("");
    setSelectedCategory("");
    setSelectedSubcategory("");
    setIncomeValue("0.00");
    setIsEditingValue(false);
  };

  const handleSendData = async () => {
    handleGoBackAndClearForm();
    const data = {
      date,
      titleIncome,
      descIncome,
      selectedCategory,
      selectedSubcategory,
      incomeValue,
      type,
    };

    console.log(data);

    //   try {
    //     const response = await fetch("https://sua-api.com/endpoint", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });

    //     if (response.ok) {
    //       const responseData = await response.json();
    //       console.log("Dados enviados com sucesso:", responseData);
    //     } else {
    //       console.error("Erro ao enviar os dados:", response.statusText);
    //     }
    //   } catch (error) {
    //     console.error("Erro na requisição:", error);
    //   }
  };

  return (
    <View style={styles.viewStyle}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <View style={styles.containerTitle}>
          <ButtonBack />
          <Text style={styles.textTitle}>Receita</Text>
        </View>

        <View style={styles.containerIncome}>
          <View style={styles.containerTextIncome}>
            <Text style={styles.textIncome}>Valor da receita</Text>
            {isEditingValue ? (
              <TextInputMask
                style={styles.textValueIncome}
                type={"money"}
                options={{
                  precision: 2,
                  separator: ",",
                  delimiter: ".",
                  unit: "R$",
                  suffixUnit: "",
                }}
                value={incomeValue}
                onChangeText={setIncomeValue}
                onBlur={() => setIsEditingValue(false)}
                autoFocus={true}
              />
            ) : (
              <TouchableOpacity onPress={() => setIsEditingValue(true)}>
                <Text style={styles.textValueIncome}>{incomeValue}</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.typeCoin}>BRL</Text>
        </View>
      </LinearGradient>

      <SafeAreaView style={styles.containerView}>
        <View style={styles.formTextContainer}>
          <Text style={styles.labelText}>Título</Text>
          <CustomInput
            icon="title"
            placeholder="ex: Salário..."
            value={titleIncome}
            onChangeText={setTitleIncome}
          />
        </View>

        <View style={styles.formTextContainer}>
          <Text style={styles.labelText}>Descrição</Text>
          <CustomInput
            icon="subtitles"
            placeholder="ex: Pagamento"
            value={descIncome}
            onChangeText={setDescIncome}
          />
        </View>

        <Text style={styles.labelText}>Data</Text>
        <DatePicker date={date} onDateChange={setDate} />

        <Text style={styles.labelText}>Categorias</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View
            style={[
              styles.containerBackground,
              { height: 100, justifyContent: "space-between" },
            ]}
          >
            <View style={styles.containerCategory}>
              <Text style={styles.textCategory}>
                Categoria: {selectedCategory}
              </Text>
              <Text style={styles.textCategory}>
                Subcategoria: {selectedSubcategory}
              </Text>
            </View>
            <MaterialIcons name="add" size={28} color={theme.Colors.GRAY} />

            <CategoryModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onApply={handleApply}
            />
          </View>
        </TouchableOpacity>

        <Link href={"/"} asChild>
          <TouchableOpacity
            style={styles.containerSend}
            onPress={handleSendData}
          >
            <Text style={styles.textSend}>Cadastrar</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  gradient: {
    height: 250,
  },
  containerTitle: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 30,
    gap: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: 18,
  },
  containerIncome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 30,
    paddingTop: 40,
  },
  containerTextIncome: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textIncome: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 12,
  },
  textValueIncome: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
    fontSize: 24,
  },
  typeCoin: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 12,
  },
  containerView: {
    height: "100%",
    backgroundColor: theme.Colors.PRIMARY,
    borderRadius: 50,
    marginTop: -50,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  containerBackground: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 56,
    marginBottom: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  formTextContainer: {
    marginVertical: 15,
  },
  labelText: {
    marginBottom: 10,
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 14,
  },
  dateTextContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  dateText: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.GRAY,
  },
  containerCategory: {
    gap: 5,
  },
  textCategory: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.GRAY,
    fontSize: 12,
  },

  containerSend: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.Colors.MATTE_BLUE,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textSend: {
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.GREEN,
  },
});
