// interface IAddFn {
//   (a: number, b: number): number;          // через интерфейс
// }

type AddFn = (a: number, b: number) => number;

const addExpression: AddFn = function (x, y) {
  return x + y;
};

const res: string = addExpression(2, 3).toString();

console.log(res);

/////////////////////////////////////////////////////////////////

type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
  const rest = restParams.reduce((acc, num) => acc + num);
  return a + b + c + rest;
};

fn(1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 0, 0, 5, 4, 3);

/////////////////////////////////////////////////////////////////

type LogFn = (message: string) => void; // неявный возврат

const log: LogFn = (message) => {
  console.log(message);
};

log("Hello world!");

/////////////////////////////////////////////////////////////////
enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  //   logSize: () => void;
  //   getSize: () => string;                         //Старый синтаксис
  //   addTopping: (topping: string) => void;
  logSize(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);

export {};
