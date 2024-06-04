// import faker from "faker";
// import { ExtratoItem } from "@/api/statementApi";

// const generateFakeExtratoData = (count: number): ExtratoItem[] => {
//   const extratoData: ExtratoItem[] = [];
//   for (let i = 0; i < count; i++) {
//     const id = faker.datatype.uuid();
//     const descricao = faker.commerce.productName();
//     const data = faker.date.past().toISOString().split("T")[0];
//     const categoria = faker.commerce.department();
//     const valor = faker.finance.amount(-1000, 1000, 2);
//     extratoData.push({
//       id,
//       descricao,
//       data,
//       categoria,
//       valor: parseFloat(valor),
//     });
//   }
//   return extratoData;
// };

// export default generateFakeExtratoData;
import { ExtratoItem } from "@/api/statementApi";

// Dados de extrato fictícios para testes
const fakeExtratoData: ExtratoItem[] = [
  {
    id: "1",
    descricao: "Salário",
    data: "2023-01-01",
    categoria: "Renda",
    valor: 4000,
  },
  {
    id: "2",
    descricao: "Compra no supermercado",
    data: "2023-01-02",
    categoria: "Alimentação",
    valor: -150,
  },
  {
    id: "3",
    descricao: "Gasolina",
    data: "2023-01-03",
    categoria: "Transporte",
    valor: -200,
  },
  {
    id: "4",
    descricao: "Restaurante",
    data: "2023-01-04",
    categoria: "Lazer",
    valor: -80,
  },
  {
    id: "5",
    descricao: "Mensalidade academia",
    data: "2023-01-05",
    categoria: "Saúde",
    valor: -100,
  },
  {
    id: "6",
    descricao: "Pagamento aluguel",
    data: "2023-01-06",
    categoria: "Moradia",
    valor: -1200,
  },
  {
    id: "7",
    descricao: "Compra de roupas",
    data: "2023-01-07",
    categoria: "Vestuário",
    valor: -300,
  },
  {
    id: "8",
    descricao: "Serviços de streaming",
    data: "2023-01-08",
    categoria: "Entretenimento",
    valor: -50,
  },
  {
    id: "9",
    descricao: "Consulta médica",
    data: "2023-01-09",
    categoria: "Saúde",
    valor: -200,
  },
  {
    id: "10",
    descricao: "Jantar especial",
    data: "2023-01-10",
    categoria: "Lazer",
    valor: -250,
  },
];

export default fakeExtratoData;
