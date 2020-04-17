import axios from "axios";

// utils
import { cryptUserData } from 'src/Utils/crypt';

// actions
import { SUBMIT_LOGIN_FORM, SUBMIT_SIGNUP_FORM, LOGOUT } from "./actions";
import { failMessage, successMessage } from "../Popup/actions";

export default (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case LOGOUT: {
      localStorage.clear();
      next(action);
      break;
    }
    case SUBMIT_LOGIN_FORM: {
      axios({
        method: "POST",
        url: `${process.env.LOGIN_API_URL}`,
        data: action.userData
      })
        .then((res) => {
          console.log(res);
          store.dispatch(successMessage(res.data.message));

          res.data.message = undefined;
          action.userData = res.data;

          const dataCrypted = cryptUserData(res.data);
          localStorage.setItem("udta", dataCrypted);
          next(action);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (!err.response) {
            return store.dispatch(failMessage("Le serveur a rencontré un problème. Veuillez contacter un administrateur"));
          }
          if (Array.isArray(err.response.data.errors)) {
            const { msg } = err.response.data.errors[0];
            return store.dispatch(failMessage(msg));
          }

          return store.dispatch(failMessage(err.response.data.errors));
        });
      break;
    }
    case SUBMIT_SIGNUP_FORM: {
      axios({
        method: "POST",
        url: `${process.env.SIGNUP_API_URL}`,
        data: action.userData
      })
        .then((res) => {
          console.log(res);
          store.dispatch(successMessage(res.data.message));
          next(action);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (!err.response) {
            return store.dispatch(failMessage("Le serveur a rencontré un problème. Veuillez contacter un administrateur"));
          }
          if (Array.isArray(err.response.data.errors)) {
            const { msg } = err.response.data.errors[0];
            return store.dispatch(failMessage(msg));
          }
          return store.dispatch(failMessage(err.response.data.errors));
        });

      break;
    }
    default: {
      next(action);
      break;
    }
  }
};
