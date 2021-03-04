/* 
  
  * Type guards are used when we have declared a variable with custom type and we have to check the
  * Custom type guard that determines if a supplied object meets the requirementse
  * The standard type guards include
      typeof
      instanceof
  * We can write our own custom type guard.

*/

function typeGuardExample(stringNumber: string | number) {
  // Error: Property does not exist on tyep 'number'
  // const a = stringNumber.length;
  // Error: Property does not exist on tyep 'string'
  // const b = stringNumber.toFixed();
  // Type guard
  if (typeof stringNumber === "string") {
    // OK
    return stringNumber.length;
  } else {
    // OK
    return stringNumber.toFixed();
  }
}
console.log(typeGuardExample("23"));

// Custom Guard
interface SpeedControllerable {
  increaseSpeed(): void;
  decreseSpeed(): void;
  stop(): void;
}

function isSpeedControllable(
  treadmill: SpeedControllerable | any
): treadmill is SpeedControllerable {
  if (treadmill.increaseSpeed && treadmill.decreseSpeed && treadmill.stop)
    return true;
  else return false;
}

function fanSpeedControllerTypeGuard(
  treadmill: SpeedControllerable
): treadmill is SpeedControllerable {
  if (isSpeedControllable(treadmill)) {
    return true;
  }
  return false;
}

let treadmill: SpeedControllerable;
treadmill.increaseSpeed = function a () {
    console.log("Fan Speed Increased");
}
treadmill.decreseSpeed = function d () {
    console.log("Fan Speed Decreased");
}
treadmill.stop = function a () {
    console.log("Fan Stopped");
}
if (fanSpeedControllerTypeGuard(treadmill)) {
console.log("Speed Controlled")
}