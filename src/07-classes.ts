interface Params {
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string; // constructor в интерфейсе описывать не нужно
  addToppings(topping: string): void; // приватные свойства в интерфейсе не нужно описывать
}

class Pizza implements IPizza {
  public size: string; // По умолчанию свойства публичные public
  private toppings: string[]; // private - указываем приватное свойство то есть к нему можно достучаться внутри методов класса

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  public addToppings(topping: string) {
    this.toppings.push(topping);
  }

  private validateTopping(topping: string) {
    console.log(topping);
    return true;
  }
}

const pizza = new Pizza({ size: "medium", toppings: ["cheese"] });

console.log(pizza);

export {};
