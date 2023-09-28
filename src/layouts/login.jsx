import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RegisterForm from "../components/registerForm";
import LoginForm from "../components/loginForm";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorList, getIsLoggedIn } from "../store/users";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const loggedIn = useSelector(getIsLoggedIn());

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
    dispatch(clearErrorList());
  };

  if (loggedIn) return history.push("/");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="container-fix col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <h3 className="mb-4">Регистрация</h3>
              <RegisterForm />
              <p className="mt-2">
                Уже есть аккаунт?{" "}
                <a role="button" onClick={toggleFormType}>
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Вход</h3>
              <LoginForm />
              <p className="mt-2">
                Нет аккаунта?{" "}
                <a role="button" onClick={toggleFormType}>
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
