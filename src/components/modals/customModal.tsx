import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onClose }) => {
  const modalRef = useRef<any>(null);
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      propagateSwipe={true}
      swipeDirection="up"
      backdropOpacity={0.8}
      animationInTiming={400}
      animationIn="fadeInUpBig"
      style={styles.modal}
      ref={modalRef}
    >
      <View style={[styles.modalContent, styles.centeredView]}>
        <View style={styles.buttonContainer}>
          <View style={styles.contextStyle}>
            <TouchableOpacity
              style={[styles.modalButton, styles.firstButton]}
              onPress={() => navigation.navigate("income" as never)}
            >
              <MaterialIcons name="call-made" size={24} color="green" />
            </TouchableOpacity>
            <Text style={styles.textStyle}>Receita</Text>
          </View>
          <View style={styles.contextStyle}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => navigation.navigate("expense" as never)}
            >
              <MaterialIcons name="call-received" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.textStyle}>Despesa</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    position: "absolute",
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  centeredView: {
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
    width: "100%",
  },
  modalButton: {
    width: 60,
    height: 60,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: theme.Colors.PRIMARY_BACK,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  firstButton: {
    marginRight: 5,
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
  },
  contextStyle: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  textStyle: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
    fontSize: theme.Fontsize.Body,
  },
});

export default CustomModal;
