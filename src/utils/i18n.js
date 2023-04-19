import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./en.json";
import en from "./es.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "es",
  resources: {
    en: en,
    es: es,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
