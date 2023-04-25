import { StyleSheet } from "react-native";
import { EventsListScreen } from "../event-list/EventsListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../home/HomeScreen";
import { ProfileScreen } from "../profile/ProfileScreen";
import { SCREENS } from "../../utils";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  [SCREENS.HOME]: "home",
  [SCREENS.PROFILE]: "person",
  [SCREENS.SEARCH]: "search",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]; // TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar,
  };
};
export const MainStackScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={SCREENS.HOME}
        options={{ title: t("Inicio") }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        options={{ title: t("Explorar") }}
        component={EventsListScreen}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        options={{ title: t("Perfil") }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
  },
});
