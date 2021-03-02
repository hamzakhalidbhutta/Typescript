// Used for making optional, readonly or nullable types of the similar type

// Manual method of making a readonly, optional and nullable types
// The Lengthy Method

interface readOnlyOptions {
  readonly name: string;
  readonly isSelected: boolean;
}

interface optionalOptions {
  name?: string;
  isSelected?: boolean;
}

interface nullableOptions {
  name: string | null;
  isSelected: boolean | null;
}

// Shortcut Method
interface options {
  name: string;
  isSelected: boolean;
}

type readOnlyOpt<T> = { readonly [key in keyof T]: T[key] };
type optional<T> = { [key in keyof T]?: T[key] };
type nullable<T> = { [key in keyof T]: T[key] | null };

type optionalOption = optional<options>

let selectOption : optionalOption = {
    name: "Yes! that was optional."
};

console.log("Was isSelected is optional?\n"+ selectOption.name)