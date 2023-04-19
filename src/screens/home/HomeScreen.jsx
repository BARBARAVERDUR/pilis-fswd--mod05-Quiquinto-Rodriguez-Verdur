import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./HomeScreen.styles";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

export const HomeScreen = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
        alert(t("Lenguaje cambiado con éxito"));
      })
      .catch((err) => {
        alert(t("Hubo un error al intentar cambiar el lenguaje"));
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/main.jpg")}
      >
        <View>
          <TouchableOpacity
            onPress={() => changeLanguage("es")}
            style={[
              styles.langButton,
              {
                borderColor:
                  currentLanguage === "es" ? "#037CFC" : "transparent",
              },
            ]}
          >
            <Text style={styles.langText}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeLanguage("en")}
            style={[
              styles.langButton,
              {
                borderColor:
                  currentLanguage === "es" ? "#037CFC" : "transparent",
              },
            ]}
          >
            <Text style={styles.langText}>Español</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          {t(
            "Consulta el Calendario de Jujuy y enterate de todos los eventos!"
          )}
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
