import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomInput from "@/components/customInput";
import CategoryModal from "@/components/categoryModal";

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
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const [titleIncome, setTitleIncome] = useState<string>("");
  const [descIcome, setDescIncome] = useState<string>("");

  const handleSendData = () => {
    console.log("Enviando TitleIncome: ", titleIncome);
    console.log("Enviando DescIncome: ", descIcome);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  return (
    <View style={styles.viewStyle}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.Colors.BLUE, theme.Colors.BLACK]}
      >
        <View style={styles.containerTitle}>
          <MaterialIcons
            name="arrow-back"
            size={26}
            color={theme.Colors.PRIMARY}
          />
          <Text style={styles.textTitle}>Receita</Text>
        </View>

        <View style={styles.containerIncome}>
          <View style={styles.containerTextIncome}>
            <Text style={styles.textIncome}>Valor da receita</Text>
            <Text style={styles.textValueIncome}>R$ 0,00</Text>
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
            value={descIcome}
            onChangeText={setDescIncome}
          />
        </View>

        <Text style={styles.labelText}>Data</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display="inline"
            confirmTextIOS="Confirm"
            cancelTextIOS="Cancel"
          />
          <View style={[styles.dateTextContainer, styles.ContainerBackground]}>
            <MaterialIcons
              name="calendar-month"
              size={28}
              color={theme.Colors.GRAY}
            />
            <Text style={styles.dateText}>{date.toDateString()}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.labelText}>Categorias</Text>

        <TouchableOpacity
          style={[styles.dateTextContainer, styles.ContainerBackground]}
          onPress={() => setModalVisible(true)}
        >
          <MaterialIcons name="category" size={28} color={theme.Colors.GRAY} />
          <Text style={styles.dateText}>
            {selectedCategory ? selectedCategory.name : "Selecionar Categoria"}
          </Text>
        </TouchableOpacity>

        <CategoryModal
          categories={categories}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelectCategory={handleCategoryPress}
        />
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
  ContainerBackground: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 56,
    marginVertical: 10,

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
    alignItems: "center",
    gap: 12,
  },
});
