import {
  LOAD_DATA,
  SAVE_AND_NEXT_QUESTION,
  SKIP_QUESTION,
  SAVE_AND_SUBMIT,
  SAVE_USER_DETAIL,
  ADMIN_AUTH,
} from "../action-types";

export const skipQuestion = (data) => {
  return { type: SKIP_QUESTION, data };
};

export const saveAndNextQuestion = (data) => {
  return { type: SAVE_AND_NEXT_QUESTION, data };
};

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    data,
  };
};

export const saveAndSubmit = (data) => {
  return { type: SAVE_AND_SUBMIT, data };
};

export const saveUserDetails = (detail) => {
  return {
    type: SAVE_USER_DETAIL,
    detail,
  };
};

export const adminAuth = (status) => {
  return {
    type: ADMIN_AUTH,
    status,
  };
};
