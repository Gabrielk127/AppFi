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

interface Category {
  id: number;
  name: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

const categories: Category[] = [
  { id: 1, name: "Investimento", icon: "assessment" },
  { id: 2, name: "Outros", icon: "assignment" },
  { id: 3, name: "Presente", icon: "card-giftcard" },
  { id: 4, name: "Prêmio", icon: "card-membership" },
  { id: 5, name: "Salário", icon: "card-travel" },
  { id: 6, name: "Salário", icon: "card-travel" },
  { id: 7, name: "Salário", icon: "card-travel" },
  { id: 8, name: "Salário", icon: "card-travel" },
];

export default function Income() {
  const type = "income";
  const [date, setDate] = useState<Date>(new Date());
  const [titleIncome, setTitleIncome] = useState<string>("");
  const [descIncome, setDescIncome] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [incomeValue, setIncomeValue] = useState<string>("R$0.00");
  const [isEditingValue, setIsEditingValue] = useState(false);

  const handleCategoryPress = (categories: Category[]) => {
    setSelectedCategories(categories);
    setModalVisible(false);
  };

  const handleGoBackAndClearForm = () => {
    setDate(new Date());
    setTitleIncome("");
    setDescIncome("");
    setSelectedCategories([]);
    setIncomeValue("0.00");
    setIsEditingValue(false);
  };

  const handleSendData = async () => {
    handleGoBackAndClearForm();
    const data = {
      date,
      titleIncome,
      descIncome,
      selectedCategories,
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
          <Link href={"/"}>
            <MaterialIcons
              name="arrow-back"
              size={26}
              color={theme.Colors.PRIMARY}
            />
          </Link>
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
            placeholder="Salário..."
            value={titleIncome}
            onChangeText={setTitleIncome}
          />
        </View>

        <View style={styles.formTextContainer}>
          <Text style={styles.labelText}>Descrição</Text>
          <CustomInput
            icon="subtitles"
            placeholder="Pagamento"
            value={descIncome}
            onChangeText={setDescIncome}
          />
        </View>

        <Text style={styles.labelText}>Data</Text>
        <DatePicker date={date} onDateChange={setDate} />

        <Text style={styles.labelText}>Categorias</Text>
        <SafeAreaView></SafeAreaView>
        <View
          style={[
            styles.categoryContainer,
            styles.containerBackground,
            { height: 100, padding: 20 },
          ]}
        >
          {selectedCategories.map((category) => (
            <View key={category.id} style={styles.selectedCategory}>
              <MaterialIcons
                name={category.icon}
                size={24}
                color={theme.Colors.GOLDEN}
              />
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => setModalVisible(true)}
          >
            <MaterialIcons name="add" size={24} color={theme.Colors.PRIMARY} />
          </TouchableOpacity>
        </View>

        <CategoryModal
          categories={categories}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelectCategories={handleCategoryPress}
        />

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
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  categoryButton: {
    backgroundColor: theme.Colors.GREEN,
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  selectedCategory: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.Colors.BLUE,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 1,
    margin: 2,
  },
  categoryText: {
    fontSize: 14,
    color: theme.Colors.PRIMARY,
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
