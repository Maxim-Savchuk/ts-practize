interface PluginConfig {
  selector: string;
  readonly perPage: number;
  startIndex?: number;
  draggable?: boolean;
}

const config: PluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  //   startIndex: 0,
  //   draggable: false,
};

config.selector = "#reset";

//////////////////////////////////
// interface Employees {
//   [key: string]: number[];
// }

// const employees: Employees = {
//   mango: [5, 4, 3],
//   poly: [10, 7],
//   ajax: [20, 12, 4],
// };

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 20,
  wiki: 15,
};

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log(config, employees, bestEmployeeName);

export {};
