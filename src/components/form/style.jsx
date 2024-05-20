import { styled, css } from "styled-components";

export const StyledForm = styled.form`
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 12px 24px 24px;
  border-radius: 12px;
`;

export const Heading = styled.h3`
  color: var(--black-color);
  margin: 12px 0;
  font-size: 28px;
  font-weight: 500;
`;

export const Label = styled.label`
  color: var(--gray-color);
  font-weight: 500;
  font-size: 14px;
`;

export const CheckboxLabel = styled.label`
  color: var(--black-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  margin: 0;
  border-color: red;
  accent-color: var(--main-color);
  border-radius: 4px;
  outline: none;

  &:focus {
    outline: 1px auto var(--main-color);
  }
`;

export const Input = styled.input`
  display: block;
  width: 490px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid transparent;
  margin-top: 4px;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  color: var(--black-color);
  caret-color: var(--main-color);

  &::placeholder {
    color: var(--gray-color);
    font-family: "Jost";
  }

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

  ${(props) =>
    props.type === "number" &&
    css`
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}
`;

export const Total = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const Amount = styled.span`
  font-weight: 400;
`;

export const SendButton = styled.button.attrs({
  type: "submit",
})`
  background-color: var(--main-color);
  border: none;
  border-radius: 40px;
  height: 40px;
  cursor: pointer;
  color: var(--white-color);
  font-weight: 300;
  font-size: 16px;

  &:disabled {
    background-color: var(--gray-color);
  }
`;

export const SubmitErrorMessage = styled.p`
  width: 100%;
  font-size: 14px;
  margin: 0;
  color: var(--red-color);
  font-weight: 400;
  margin-top: 2px;
`;
