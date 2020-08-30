import Vue from "vue";

const date = value => {
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

Vue.filter("date", date);
