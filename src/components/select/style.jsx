import { styled, css } from "styled-components";

export const StyledSelect = styled.select.attrs({ defaultValue: "" })`
  display: block;
  width: 490px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid transparent;
  margin-top: 4px;
  outline: none;
  padding: 10px 12px;
  box-sizing: border-box;
  font-family: "Jost";
  font-size: 16px;

  ${(props) =>
    props.$error
      ? css`
          border-color: var(--red-color);
        `
      : css`
          &:focus {
            border-color: var(--main-color);
          }
        `}
`;

export const DefaultOption = styled.option.attrs({
  value: "",
  disabled: true,
  hidden: true,
})`
  color: red;
  padding: 0;
`;
