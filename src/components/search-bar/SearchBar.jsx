import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./SearchBar.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

export const SearchBar = ({ handleSearch, searchQuery }) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={COLORS.primary} />
      <TextInput
        placeholder={t("¿A dónde quieres ir?")}
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  );
};
