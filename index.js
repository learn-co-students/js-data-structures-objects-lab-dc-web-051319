// Write your solution in this file!
const driver = {};

// returns a driver with the original key value pairs and the new key value pair
// reuturns a cloned object with new data
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

// updates `driver` with the given `key` and `value` 
// it is destructive and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

// deletes `key` from a clone of driver and returns the new driver 
// it is non-destructive
function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj
}

// returns driver without the delete key/value pair
// is destructive
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}