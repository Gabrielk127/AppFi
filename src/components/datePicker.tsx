import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { theme } from "@/theme";

interface DatePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event: any, selectedDate?: Date) => {
    hideDatePicker();
    if (selectedDate) {
      onDateChange(selectedDate);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={[styles.dateTextContainer, styles.containerBackground]}>
          <MaterialIcons
            name="calendar-month"
            size={28}
            color={theme.Colors.GRAY}
          />
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </View>
      </TouchableOpacity>
      {isDatePickerVisible && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={handleConfirm}
          onTouchCancel={hideDatePicker}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
  dateTextContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  dateText: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.GRAY,
  },
});

export default DatePicker;