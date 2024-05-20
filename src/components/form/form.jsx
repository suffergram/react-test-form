import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { RequiredMark } from "../required-mark/required-mark";
import {
  StyledForm,
  Heading,
  Label,
  CheckboxLabel,
  Checkbox,
  Input,
  Total,
  Amount,
  SendButton,
  SubmitErrorMessage,
} from "./style";
import { Select } from "../select/select";

const defaultValues = {
  name: "",
  rating: "",
  accreditation: false,
  sum: "",
  category: "",
  comment: "",
  file: "",
};

export function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const [amount, setAmount] = useState(0);

  const errorMessage = "Введите корректное значение";

  const watchRequiredFileds = watch(["name", "rating", "sum", "category"]);
  const watchSum = watch("sum");
  const watchAccreditation = watch("accreditation");
  const watchRating = watch("rating");

  useEffect(() => {
    const sum = Number(watchSum);
    setAmount(watchAccreditation ? sum + sum * 0.2 : sum);
  }, [watchAccreditation, watchSum]);

  const handleCheckRatingInput = (event) => {
    if (
      event.key === "e" ||
      event.key === "-" ||
      event.key === "." ||
      (watchRating === "" && event.key === "0") ||
      Number(watchRating) * 10 + Number(event.key) > 100
    ) {
      event.preventDefault();
    }
  };

  const handleCheckSumInput = (event) => {
    if (event.key === "e" || event.key === "-") {
      event.preventDefault();
    }
  };

  const handleCheckSum = (event, onChange) => {
    const val = event.target.value;

    if (
      Number(val) <= 999999.99 &&
      (!val.split(".")[1] || val.split(".")[1]?.length <= 2)
    ) {
      onChange(Number(val));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Heading>Заполните форму</Heading>

      <Label>
        ФИО
        <RequiredMark />
        <Input
          inputMode="text"
          maxLength={30}
          placeholder="Заполнить"
          $error={!!errors["name"]?.message}
          {...register("name", {
            required: errorMessage,
            minLength: {
              value: 10,
              message: errorMessage,
            },
            maxLength: 30,
          })}
        />
        <SubmitErrorMessage>{errors["name"]?.message}</SubmitErrorMessage>
      </Label>

      <Label>
        Рейтинг
        <RequiredMark />
        <Input
          inputMode="number"
          type="number"
          step={1}
          placeholder="Введите значение от 1 до 100"
          onKeyDown={handleCheckRatingInput}
          $error={!!errors["rating"]?.message}
          {...register("rating", {
            required: errorMessage,
            min: {
              value: 1,
              message: errorMessage,
            },
            max: {
              value: 100,
              message: errorMessage,
            },
          })}
        />
        <SubmitErrorMessage>{errors["rating"]?.message}</SubmitErrorMessage>
      </Label>

      <CheckboxLabel>
        <Checkbox type="checkbox" {...register("accreditation")}></Checkbox>
        Имеется аккредитация
      </CheckboxLabel>

      <Label>
        Желаемая сумма
        <RequiredMark />
        <Controller
          control={control}
          name="sum"
          rules={{
            validate: (value) =>
              value < 0 || value > 999999.99 || value.length === 0
                ? errorMessage
                : true,
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              inputMode="number"
              type="number"
              placeholder="0"
              value={value}
              $error={!!error}
              onKeyDown={handleCheckSumInput}
              onChange={(event) => handleCheckSum(event, onChange)}
            />
          )}
        />
        <SubmitErrorMessage>{errors["sum"]?.message}</SubmitErrorMessage>
      </Label>

      <Label>
        Категория
        <RequiredMark />
        <Controller
          control={control}
          name="category"
          rules={{
            validate: (value) => (value.length === 0 ? errorMessage : true),
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select value={value} onChange={onChange} error={!!error} />
          )}
        />
        <SubmitErrorMessage>{errors["category"]?.message}</SubmitErrorMessage>
      </Label>

      <Label>
        Комментарий
        <Input
          placeholder="Заполнить"
          maxLength={200}
          $error={!!errors["comment"]?.message}
          {...register("comment", {
            maxLength: {
              value: 200,
              message: errorMessage,
            },
          })}
        />
        <SubmitErrorMessage>{errors["comment"]?.message}</SubmitErrorMessage>
      </Label>

      <input type="file" multiple accept=".pdf" {...register("file")} />

      <Total>
        Итоговая сумма <Amount>{amount.toLocaleString("ru-RU")}</Amount>
      </Total>

      <SendButton disabled={watchRequiredFileds.some((field) => field === "")}>
        Отправить
      </SendButton>
    </StyledForm>
  );
}
