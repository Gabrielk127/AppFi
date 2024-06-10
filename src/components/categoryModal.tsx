import { theme } from "@/theme";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

interface CategoryModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (category: string, subcategory: string) => void;
}

const categories = [
  {
    id: "1",
    name: "Trânsito",
    subcategories: ["Combústivel", "Mecânico", "pedágio"],
  },
  {
    id: "2",
    name: "Casa",
    subcategories: ["Conta de luz", "Conta de água"],
  },
  {
    id: "3",
    name: "Lazer",
    subcategories: ["bares", "Academia", "Sorveteria"],
  },
];

const CategoryModal: React.FC<CategoryModalProps> = ({
  visible,
  onClose,
  onApply,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchText, setSearchText] = useState<string>("");

  const handleCategoryToggle = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleApply = () => {
    if (selectedCategory && selectedSubcategory) {
      onApply(selectedCategory, selectedSubcategory);
    }
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchText.toLowerCase()) ||
      category.subcategories.some((subcategory) =>
        subcategory.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Selecione uma Categoria</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor={theme.Colors.GREEN}
            value={searchText}
            onChangeText={setSearchText}
          />
          <FlatList
            data={filteredCategories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => handleCategoryToggle(item.name)}
                  style={
                    selectedCategory === item.name
                      ? styles.selectedCategory
                      : styles.category
                  }
                >
                  <Text style={styles.textCategory}>{item.name}</Text>
                </TouchableOpacity>
                {expandedCategory === item.name && (
                  <FlatList
                    data={item.subcategories.filter((subcategory) =>
                      subcategory
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )}
                    keyExtractor={(subcategory) => subcategory}
                    renderItem={({ item: subcategory }) => (
                      <TouchableOpacity
                        onPress={() => handleSubcategorySelect(subcategory)}
                        style={
                          selectedSubcategory === subcategory
                            ? styles.selectedSubcategory
                            : styles.subcategory
                        }
                      >
                        <Text style={styles.textCategory}>{subcategory}</Text>
                        <View
                          style={{
                            marginVertical: 10,
                            height: 1,
                            width: "100%",
                            backgroundColor: theme.Colors.MATTE_BLUE,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            )}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={onClose}>
              <Text style={styles.buttonTextStyle}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleApply}>
              <Text style={styles.buttonTextStyle}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    height: "70%",
    backgroundColor: theme.Colors.BLUE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: theme.Colors.PRIMARY,
    fontFamily: theme.fontFamily.body,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    borderColor: theme.Colors.MATTE_BLUE,
    color: theme.Colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 50,
    width: "100%",
  },
  textCategory: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
  },
  category: {
    padding: 10,
    fontSize: 16,
  },
  selectedCategory: {
    padding: 10,
    fontSize: 16,
    backgroundColor: theme.Colors.GREEN,
    borderRadius: 5,
    color: theme.Colors.PRIMARY,
  },
  subcategory: {
    padding: 10,
    fontSize: 14,
    color: theme.Colors.PRIMARY,
    paddingLeft: 20,
  },
  selectedSubcategory: {
    padding: 10,
    fontSize: 14,
    color: theme.Colors.PRIMARY,
    borderRadius: 5,
    paddingLeft: 20,
    backgroundColor: theme.Colors.MATTE_BLUE,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: theme.Colors.MATTE_BLUE,
    padding: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontFamily: theme.fontFamily.body,
    color: theme.Colors.PRIMARY,
  },
});

export default CategoryModal;
