const db = require('./index.js');

const Company = require('./Models/Company');
const User = require('./Models/User');
const Category = require('./Models/Category');
const Article = require('./Models/Article');

const bcrypt = require('bcrypt-nodejs');


var dbHelpers = {

  /////////////////////
  //      USERS      //
  /////////////////////

  // creating a new user
  addUser: (obj) => {},

  // updating a user's password, during forgot pw or after invitation
  updateUser: (obj) => {},


  /////////////////////
  //    COMPANIES    //
  /////////////////////

  // creating a company
  addCompany: (obj) => {},


  /////////////////////
  //    CATEGORIES   //
  /////////////////////

  // create a Category for Articles
  addCategory: (obj) => {},

  // update a Category's name or description
  updateCategory: (obj) => {},

  // removing a category
  deleteCategory: (obj) => {},


  /////////////////////
  //     ARTICLES    //
  /////////////////////

  // create an article with content
  addArticle: (obj) => {},

  // update an article
  updateArticle: (obj) => {},

  // delete an article
  updateArticle: (obj) => {},


  //////////////////////////////
  //    TEST DATA FUNCTIONS   //
  //////////////////////////////

  clearTables: () => {},

  dropTables: () => {
    db.drop();
  },

  recreateDB: () => {
    Company.sync().then(() => User.sync().then(() => Category.sync().then(() => Article.sync())));
  }
}

module.exports = dbHelpers;