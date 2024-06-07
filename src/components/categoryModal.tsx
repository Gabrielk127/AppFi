import React, { useState } from "react";
import {
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";

interface Category {
  id: number;
  name: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

interface CategoryModalProps {
  categories: Category[];
  visible: boolean;
  onClose: () => void;
  onSelectCategories: (categories: Category[]) => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  categories,
  visible,
  onClose,
  onSelectCategories,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCategoryPress = (category: Category) => {
    if (selectedCategories.some((selected) => selected.id === category.id)) {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((item) => item.id !== category.id)
      );
    } else {
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    }
  };

  const handleApplyPress = () => {
    onSelectCategories(selectedCategories);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.searchContainer}>
            <MaterialIcons
              name="search"
              size={24}
              color={theme.Colors.GRAY}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar Categoria"
              placeholderTextColor={theme.Colors.GRAY}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
          <FlatList
            data={filteredCategories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryItem,
                  selectedCategories.some(
                    (selected) => selected.id === item.id
                  ) && styles.selectedCategory,
                ]}
                onPress={() => handleCategoryPress(item)}
              >
                <MaterialIcons
                  name={item.icon}
                  size={24}
                  color={theme.Colors.GOLDEN}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyPress}
          >
            <Text style={styles.applyButtonText}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: "50%",
    backgroundColor: theme.Colors.BLUE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: theme.Colors.GOLDEN,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: theme.Colors.PRIMARY,
    fontFamily: theme.fontFamily.body,
  },
  categoryItem: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.Colors.GOLDEN,
  },
  selectedCategory: {
    backgroundColor: theme.Colors.GOLDEN,
  },
  categoryText: {
    fontSize: 18,
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
  },
  applyButton: {
    backgroundColor: theme.Colors.PRIMARY,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: theme.fontFamily.body,
  },
});

export default CategoryModal;
