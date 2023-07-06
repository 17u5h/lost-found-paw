import styled from "styled-components";
import {vars} from "./vars";

export const UILightButton = styled.button`
  padding: 4px 16px;
  background-color: ${vars.$colorThemeMain};
  font-size: ${vars.$fontsizeBigger};
  color: ${vars.$colorThemeReverse};
  border: 1px solid ${vars.$colorThemeReverse};
  border-radius: 4px;
  transition: background-color 0.1s, color 0.1s;

  &:hover {
    color: ${vars.$colorThemeMain};
    background-color: ${vars.$colorThemeReverse};
    border: 1px solid ${vars.$colorThemeMain};
  }
`

export const UIDarkButton = styled.button`
  padding: 4px 16px;
  background-color: transparent;
  font-size: ${vars.$fontsizeBigger};
  color: ${vars.$colorThemeMain};
  border: 1px solid ${vars.$colorThemeMain};
  border-radius: 4px;
  transition: background-color 0.1s, color 0.1s;

  &:hover {
    color: ${vars.$colorThemeReverse};
    background-color: ${vars.$colorThemeMain};
  }
`