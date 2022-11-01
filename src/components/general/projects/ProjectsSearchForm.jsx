import * as styled from "./projectsSearchFormStyled.js";
import useDeviceProps, { PropsPerDevice } from "../../../hooks/useDeviceProps";
import { useTranslation } from "react-i18next";

const propsLocal = {
  searchMinWidthRem: 40,
  buttonMinWidthRem: 7,
  buttonClassName: "",
  buttonChildren: "search",
  buttonFontFamily: "poppins",
};

const propsPerDevice = new PropsPerDevice({
  desktop: {...propsLocal},
  tablet: {...propsLocal, searchMinWidthRem: 0},
  mobile: {
    ...propsLocal, 
    searchMinWidthRem: 0, 
    className: "material-icons", 
    buttonFontFamily: "Material Icons", 
    buttonChildren: "search", 
    buttonMinWidthRem: 3,
    isMobile: true,
  },
});

export default function ProjectsSearchForm() {
  const [ propsLocal ] = useDeviceProps(propsPerDevice);
  const [ t ] = useTranslation();

  return (
    <styled.Form>
      <styled.SearchInput 
        propsLocal={propsLocal}
        type="search"
        placeholder={t("keyword")} />

      <styled.SearchButton 
        type="submit"
        propsLocal={propsLocal}
        className={propsLocal.className}
        children={ propsLocal.isMobile ? propsLocal.buttonChildren : t(propsLocal.buttonChildren) }/>
    </styled.Form>
  );
}