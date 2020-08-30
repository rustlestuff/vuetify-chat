import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase/app";
import "firebase/firestore";

import users from "./users";
import conversations from "./conversations";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);

Vue.use(Vuex);
const state = {
  db: firebase.firestore()
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: { users, conversations }
});
