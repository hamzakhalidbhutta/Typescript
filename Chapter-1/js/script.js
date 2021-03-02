// Type guards are used when we have declared a variable with custom type and we have to check the
// Custom type guard that determines if a supplied object meets the requirementse
// The standard type guards include
// typeof
// instanceof
// We can write our own custom type guard.
function typeGuardExample(stringNumber) {
    // Error: Property does not exist on tyep 'number'
    // const a = stringNumber.length;
    // Error: Property does not exist on tyep 'string'
    // const b = stringNumber.toFixed();
    // Type guard
    if (typeof stringNumber === "string") {
        // OK
        return stringNumber.length;
    }
    else {
        // OK
        return stringNumber.toFixed();
    }
}
console.log(typeGuardExample("23"));
function isSpeedControllable(treadmill) {
    if (treadmill.increaseSpeed && treadmill.decreseSpeed && treadmill.stop)
        return true;
    else
        return false;
}
function fanSpeedControllerTypeGuard(treadmill) {
    if (isSpeedControllable(treadmill)) {
        return true;
    }
    return false;
}
