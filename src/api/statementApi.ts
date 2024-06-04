import fakeExtratoData from "./fakeData";

export interface ExtratoItem {
  id: string;
  descricao: string;
  data: string;
  categoria: string;
  valor: number;
}

const fetchExtratoData = async (): Promise<ExtratoItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeExtratoData);
    }, 1000);
  });
};

export default fetchExtratoData;

// import generateFakeExtratoData from "./fakeData";

// export interface ExtratoItem {
//   id: string;
//   descricao: string;
//   data: string;
//   categoria: string;
//   valor: number;
// }

// const fetchExtratoData = async (): Promise<ExtratoItem[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const fakeData = generateFakeExtratoData(5);
//       resolve(fakeData);
//     }, 1000);
//   });
// };

// export default fetchExtratoData;
