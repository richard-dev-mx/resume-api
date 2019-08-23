/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

class storageHelper {

    static initialize(url) {
      const mongoose = require('mongoose');
      return mongoose.connect(encodeURI(url), { useNewUrlParser: true });
    }
  
    static isValidId(id) {
      return id.match(/^[0-9a-fA-F]{24}$/);
    }
  
  }
  
  module.exports = storageHelper;