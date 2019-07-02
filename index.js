const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return { ...driver, ...{ [key]: value } };
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
