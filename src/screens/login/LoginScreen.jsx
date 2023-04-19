import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "../../api/user/user";
import { useUser } from "../../contexts/UserContext";
import { SCREENS } from "../../utils";
import { styles } from "./LoginScreen.styles";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

export const LoginScreen = () => {
  const { t, i18n } = useTranslation();

  const navigation = useNavigation();
  const { setCurrentUser } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = ({ username, password }) => {
    User.LogIn(username, password).then((user) => {
      setCurrentUser(user);
      navigation.navigate(SCREENS.HOME);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Inicio de Sesión")}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={t("Nombre de usuario")}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
        rules={{ required: t("El nombre de usuario es requerido") }}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={t("Contraseña")}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: t("La constraseña es requerida") }}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
      >
        <Text style={styles.buttonText}>{t("Entrar")}</Text>
      </TouchableOpacity>
    </View>
  );
};
