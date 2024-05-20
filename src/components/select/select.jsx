import { StyledSelect, DefaultOption } from "./style";

export function Select({ value = "", onChange, error }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <StyledSelect defaultValue={value} $error={error} onChange={handleChange}>
      <DefaultOption>Выбрать</DefaultOption>
      <option>Категория 1</option>
      <option>Категория 2</option>
      <option>Категория 3</option>
      <option>Категория 4</option>
      <option>Категория 5</option>
    </StyledSelect>
  );
}
