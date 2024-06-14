import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import { Link } from "expo-router";
import { theme } from "@/theme";
import CustomInput from "@/components/customInput";
import DatePicker from "@/components/datePicker";
import ButtonBack from "@/components/buttonBack";

export default function GoalsRegister() {
  const [date, setDate] = useState<Date>(new Date());
  const [titleGoal, setTitleGoal] = useState<string>("");
  const [descGoal, setDescGoal] = useState<string>("");
  const [goalValue, setGoalValue] = useState<string>("R$0.00");
  const [accumlatedValue, setAccumulatedValue] = useState<string>("");
  const [isEditingValue, setIsEditingValue] = useState(false);

  const handleGoBackAndClearForm = () => {
    setDate(new Date());
    setTitleGoal("");
    setDescGoal("");
    setGoalValue("0.00");
    setAccumulatedValue("");
    setIsEditingValue(false);
  };

  const handleSendData = async () => {
    handleGoBackAndClearForm();
    const data = {
      date,
      titleGoal,
      descGoal,
      goalValue,
      accumlatedValue,
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
          <Text style={styles.textTitle}>Novo Objetivo</Text>
        </View>

        <View style={styles.containerIncome}>
          <View style={styles.containerTextIncome}>
            <Text style={styles.textIncome}>Valor da Meta</Text>
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
                value={goalValue}
                onChangeText={setGoalValue}
                onBlur={() => setIsEditingValue(false)}
                autoFocus={true}
              />
            ) : (
              <TouchableOpacity onPress={() => setIsEditingValue(true)}>
                <Text style={styles.textValueIncome}>{goalValue}</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.typeCoin}>BRL</Text>
        </View>
      </LinearGradient>

      <SafeAreaView style={styles.containerView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.formTextContainer}>
            <View>
              <Text style={styles.labelText}>Valor inicial</Text>
              <CustomInput
                icon="attach-money"
                placeholder="R$50,00"
                value={accumlatedValue}
                onChangeText={setAccumulatedValue}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.formTextContainer}>
            <View>
              <Text style={styles.labelText}>Título</Text>
              <CustomInput
                icon="title"
                placeholder="ex: Comprar um carro"
                value={titleGoal}
                onChangeText={setTitleGoal}
              />
            </View>
          </View>

          <View style={styles.formTextContainer}>
            <View>
              <Text style={styles.labelText}>Descrição</Text>
              <CustomInput
                icon="subtitles"
                placeholder="ex: Comprar uma BMW"
                value={descGoal}
                onChangeText={setDescGoal}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>Data</Text>
            <DatePicker date={date} onDateChange={setDate} />
          </View>

          <Link href={"/"} asChild>
            <TouchableOpacity
              style={styles.containerSend}
              onPress={handleSendData}
            >
              <Text style={styles.textSend}>Cadastrar</Text>
            </TouchableOpacity>
          </Link>
        </ScrollView>
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
    flexDirection: "column",
    gap: 5,
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
  scrollView: {
    flexGrow: 1,
  },
});
