const fs = require('fs');

var configuration;

const getConfiguration = function(){
    if(!configuration){
        configuration = readConfiguration();
    }
    return configuration;
}


function readConfiguration (){
    let configFile = process.env.CONFIG;
    if(!configFile){
        throw Error("A file path to config file must be provided by using the environment variable CONFIG");
    }

    let configFileReaded = fs.readFileSync(configFile, 'utf8');
    let config = JSON.parse(configFileReaded);

    checkConfigurationIsValid(config);

    return config;
}


function checkConfigurationIsValid(config) {
    checkMandatoryProperty('node.implementation', config);
    checkMandatoryProperty('node.host', config);
    checkMandatoryProperty('node.port', config);
}


/**
 * Check if a property exists in a json object; otherwise, throw an exception
 * @param {*} propertyName 
 * @param {*} jsonObject 
 */
function checkMandatoryProperty(propertyName, jsonObject) {
    if (!isPropretyInObject(propertyName, jsonObject)) {
      throw Error(`${propertyName} parameter is required to start the application. Check the configuration file.`);
    } else {
      console.log(`${propertyName}\t\t ... OK`);
    }
  }


  /**
* Recursive function that reads a JSON looking for a given property. Return true if the property is found.
* @param {*} keyToSearch 
* @param {*} obj 
*/
const isPropretyInObject = function (keyToSearch, obj){
    let currentProperty = keyToSearch.split('.')[0];
    let restOfProperties = keyToSearch.split('.').splice(1).join('.');
    if(obj[currentProperty] === undefined){
      return false;
    }
    else if(restOfProperties){
      let objectToSearch = obj[currentProperty];
      return isPropretyInObject(restOfProperties, objectToSearch);
    }
    else {
      return true;
    }
  };


  module.exports = {
      getConfiguration,
  }