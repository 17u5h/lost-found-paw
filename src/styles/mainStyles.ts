import styled from "styled-components";
import {vars} from "./vars";

export const CardListWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`

export const CardListContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  border: 1px solid #ccc;

  &:hover {
    box-shadow: 0 0 10px #ccc;
  }
`

export const CardTitle = styled.p`
  position: absolute;
  width: 96%;
  display: flex;
  justify-content: center;
  top: 4px;
  left: 10px;
  font-size: ${vars.$fontsizeTitle};
  color: #fff;
  text-shadow: 1px 0 4px #000,
  0 1px 4px #000,
  -1px 0 4px #000,
    0 -1px 4px #000;
`

export const CardImage = styled.img`
  width: 100%;
  object-fit: contain;
`

export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
	padding: 10px;
	color: #000;
  background-color: #f3f3f3;
	display: flex;
	flex-direction: column;
	gap: 8px;
`
