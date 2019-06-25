// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = {...driver}
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}