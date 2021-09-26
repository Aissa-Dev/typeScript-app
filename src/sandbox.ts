// exemple 01
let greet: (a: string, b: number) => void;

greet = (name: string, age: number) => {
  console.log(`${name} has ${age} years old`);
};

// exemple 02
let calc: (a: number, b: number, c: string) => number;

calc = (x: number, y: number, action: string) => {
  if (action === "add") {
    return x + y;
  } else {
    return x - y;
  }
};

// exemple 03
