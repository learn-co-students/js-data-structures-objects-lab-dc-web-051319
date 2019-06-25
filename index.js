function updateDriverWithKeyAndValue(driver, key, value) {
    let pair = {};
    pair[key] = value;
    let drivers = Object.assign(pair, driver);
    return drivers;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
};


function deleteFromDriverByKey(driver, key) {
    let clone = Object.assign({}, driver);
    delete clone[key];
    return clone;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};

const driver = { me: "driving" }