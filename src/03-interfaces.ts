// Дженерик-интерфейсы : передача аргумент типа
//Когда некоторые свойства интерфейса могут принимать произвольный тип

// interface User<T> {
//   id: T;
// }

// const mango: User<number> = { id: 24 };
// const poly: User<string> = { id: 'qwerty' };

// console.log(mango, poly);

///////////////////////////////////////////////////

// interface Tab<T> {
//   id: string;
//   position: number;
//   active: boolean;
//   content: T;
// }

// type TString = Tab<string>;
// type TStringArrayTab = Tab<string[]>;

// const tab1: TString = {
//   id: 'id-1',
//   position: 2,
//   active: false,
//   content: 'tab data',
// };

// const tab2: TStringArrayTab = {
//   id: 'id-2',
//   position: 4,
//   active: true,
//   content: ['content-1', 'content-2'],
// };

// console.log(tab1, tab2);

export {};
