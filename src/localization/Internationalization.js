import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { languageCodes } from "../resources/constants/LanguageCodes";
import { storageKeys } from "../resources/constants/StorageKeys";

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    lng: localStorage.getItem(storageKeys.language) ?? languageCodes.en,
    interpolation: {
      escapeValue: false,
    }
  });