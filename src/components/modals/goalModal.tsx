import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { theme } from "@/theme";
import CircularProgressBar from "../graphs/circularProgressBar";

interface GoalItem {
  id: number;
  date: string;
  title: string;
  accumulated: number;
  goal: number;
}

const GoalModal: React.FC<{ goal: GoalItem | null; onClose: () => void }> = ({
  goal,
  onClose,
}) => {
  const resultBalance = Number(goal?.goal) - Number(goal?.accumulated);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={goal !== null}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {goal && (
            <>
              <View style={{ padding: 30 }}>
                <View style={styles.containerHeader}>
                  <Text style={styles.titleStyle}>{goal.title}</Text>
                  <TouchableOpacity onPress={onClose}>
                    <Text style={styles.buttonClose}>Fechar</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.dateStyle}>{goal.date}</Text>

                <View style={styles.containerGraph}>
                  <CircularProgressBar
                    progress={goal.accumulated}
                    maxValue={goal.goal}
                    strokeWidth={50}
                    size={300}
                    backgroundColor={theme.Colors.SECUNDARY}
                    color={theme.Colors.GREEN}
                  />
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Text style={styles.resultBalanceStyle}>Faltam:</Text>
                    <Text style={styles.resultBalanceStyle}>
                      R$
                      {String(resultBalance)}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.containerText}>
                <Text style={styles.textData}>
                  Acumulado: R$ {goal.accumulated}
                </Text>
                <Text style={styles.textData}>Meta: R$ {goal.goal}</Text>
                <View style={styles.containerButton}>
                  <TouchableOpacity>
                    <Text style={styles.buttonAction}>Adicionar depósito</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.buttonAction}>Finalizar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonClose: {
    padding: 7,
    backgroundColor: theme.Colors.SECUNDARY,
    fontFamily: theme.fontFamily.light,

    borderRadius: 10,
  },
  modalContent: {
    backgroundColor: theme.Colors.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    height: "90%",
  },
  titleStyle: {
    fontFamily: theme.fontFamily.heading,
    color: theme.Colors.BLACK,
    fontSize: 16,
  },
  dateStyle: {
    fontFamily: theme.fontFamily.light,
    color: theme.Colors.GRAY,
    fontSize: 14,
  },
  containerGraph: {
    justifyContent: "center",
    alignItems: "center",
  },
  resultBalanceStyle: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.BLACK,
    fontSize: 16,
  },
  textData: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.BLACK,
    fontSize: 14,
  },
  containerText: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    height: "100%",

    backgroundColor: theme.Colors.SECUNDARY,
    padding: 30,
    marginTop: 20,
    flexDirection: "column",
    gap: 10,
  },
  buttonAction: {
    padding: 10,
    width: "100%",
    backgroundColor: theme.Colors.GREEN,
    borderRadius: 15,

    textAlign: "center",
    color: theme.Colors.PRIMARY,
    fontFamily: theme.fontFamily.light,
  },
  containerButton: {
    marginTop: 40,
    flexDirection: "column",
    gap: 10,
  },
});

export default GoalModal;
