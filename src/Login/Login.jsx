import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../components/FormsControls/FormsControls";
import { required } from "../utils/validators/validator";
import { connect } from "react-redux";
import {login} from '../redux/auth-reducer'
import { Redirect } from "react-router-dom";
import ss from './Login.module.sass'

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        placeholder={"Email"} 
        name={"email"} 
        component={Input} 
        validate={[required]}
        />
      </div>
      <div>
        <Field 
        placeholder={"Password"} 
        name={"password"} 
        component={Input} 
        validate={[required]}
        type='password'
        />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me 
        
      </div>
      {/* {props.error ? <div className={ss.blockError}>{props.error}</div> : null}  */}
      <div>
        <button> Login </button>
      </div>
    </form>
  );
}
// --------- its HOC ----------
const LoginReduxForm = reduxForm({
  // необходимо использовать уникальное имя
  form: "login",
})(LoginForm); // тут вводим ту форму, вокруг которой нам необходимо создать reduxForm

function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) { return <Redirect to={'/profile'}/>}

  return (
    <>
      <h1>LOGIN</h1>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login} )(Login) ;



