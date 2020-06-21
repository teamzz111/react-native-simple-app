import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);


export const errorCB = (err) => {
    console.log("SQL Error: " + err);
  },

export const successCB = () => {
    console.log("SQL executed fine");
  },

export const openCB = () => {
    console.log("Database OPENED");
  },

  
