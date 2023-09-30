import React, { useState, useEffect } from "react";
import { validator } from "../utils/validator";
import TextField from "../components/form/textField";
// import SelectField from "../components/form/selectField";
import RadioField from "../components/form/radioField";
// import MultiSelectField from "../components/form/multiSelectField";
import CheckBoxField from "../components/form/checkBoxField";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, signUp } from "../store/users";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(getAuthErrors());
  const [data, setData] = useState({
    email: "",
    password: "",
    phone: "",
    sex: "male",
    name: "",
    licence: false
  });
  // const qualities = useSelector(getQualities());
  // const qualitiesList = qualities.map((q) => ({
  //   label: q.name,
  //   value: q._id
  // }));
  // const professions = useSelector(getProfessions());
  // const professionsList = professions.map((p) => ({
  //   label: p.name,
  //   value: p._id
  // }));
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введен некорректно"
      }
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения"
      },
      min: {
        message: "Имя должно состоять минимум из 3 символов",
        value: 3
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы 1 заглавную букву"
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы 1 цифру"
      }
    },
    phone: {
      isNumber: {
        message: "Номер телефона введен некорректно"
      }
    }
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = { ...data };
    dispatch(signUp(newData));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Номер телефона"
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <TextField
        label="Имя"
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      {/* <SelectField
        label="Выберите вашу профессию"
        defaultOption="Выберите..."
        name="profession"
        options={professionsList}
        onChange={handleChange}
        value={data.profession}
        error={errors.profession}
      /> */}
      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "Other", value: "other" }
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="Выберите ваш пол"
      />
      {/* <MultiSelectField
        options={qualitiesList}
        onChange={handleChange}
        defaultValue={data.qualities}
        name="qualities"
        label="Выберите ваши качества"
        error={errors.qualities}
      /> */}
      {/* <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
      >
        Подтвердить <a>лицензионное</a> соглашение
      </CheckBoxField> */}

      {loginError && <p className="text-danger">{loginError}</p>}

      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary w-100 mx-auto"
      >
        Отправить
      </button>
    </form>
  );
};

export default RegisterForm;
