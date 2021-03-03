// A discriminated union, or tagged union,
// allows to combine union
//     types
//     type aliases
//     type guards
// to get full autocompletion and checking for types with a common string literal property
// The components that make up a discriminated union are the following:
//         1. Several types that share a common string literal property, called a discriminant.
//         2. A type alias for a union of these types, called a union.
//         3. A type guard that checks the discriminant.
var iPrism = {
    height: 20,
    width: 10,
    depth: 20,
    kind: "cuboid"
};
function volume(prism) {
    // Type Guard
    switch (prism.kind) {
        case "cube":
            return prism.size * prism.size * prism.size;
        case "cuboid":
            return prism.width * prism.depth * prism.height;
        default:
            assertNever(prism);
            break;
    }
}
function assertNever(arg) {
    throw new Error("Possible new tagged type: " + arg);
}
console.log(volume(iPrism));
