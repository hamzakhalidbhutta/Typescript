// Used for making optional, readonly or nullable types of the similar type

// Manual method of making a readonly, optional and nullable types
// The Lengthy Method


// For example you have an array of users. Some are admin & others are not. You want to call an admin only method on the admin users, and some other method on all other users.

// Its specifically so that you get type safety in situations in which the objects do not have the same fields. It allows TS to narrow the types within your duck typing control flow logic.

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