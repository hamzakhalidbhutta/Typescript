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

// In Listing 1-29 the cube and cuboid types both share the discriminant “kind.”
// The types are added to the prism union, which results in full autocompletion in the switch statement in the volume function.
// The switch statement acts as a type guard, meaning the type of prism in each case is the correct narrowed type.
// The default case is used like a safety net to ensure there are no types that are part of the discriminated union that have been left out of the switch statement.
// For example, if you were to add a triangular prism to the discriminated union, you would receive a warning “Argument of type ‘TriangularPrism’ is not assignable to parameter of type ‘never’”, which tells you that it was not handled by the volume method.
interface Cube {
  kind: "cube";
  size: number;
}

interface Cuboid {
  kind: "Cuboid";
  height: number;
  width: number;
  depth: number;
}

// Union
type Prism = Cube | Cuboid;



function volume(prism: Prism): number {
  // Type Guard
  switch (prism.kind) {
    case "cube":
      return prism.size * prism.size * prism.size;
    case "Cuboid":
      return prism.width * prism.depth * prism.height;
    default:
      assertNever(prism);
      break;
  }
}
function assertNever(arg: never): never {
  throw new Error("Possible new tagged type: " + arg);
}
let prismCal: Prism;
volume(prismCal);