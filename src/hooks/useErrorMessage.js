import { useTranslation } from "react-i18next";

export function useErrorMessageBy(code) {
  const { t, i18n } = useTranslation();
  return i18n.exists(code) ? t(code) : t("errorGeneric");
}