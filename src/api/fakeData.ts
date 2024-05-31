import faker from "faker";
import { ExtratoItem } from "@/api/statementApi";

const generateFakeExtratoData = (count: number): ExtratoItem[] => {
  const extratoData: ExtratoItem[] = [];
  for (let i = 0; i < count; i++) {
    const id = faker.datatype.uuid();
    const descricao = faker.commerce.productName();
    const data = faker.date.past().toISOString().split("T")[0];
    const categoria = faker.commerce.department();
    const valor = faker.finance.amount(-1000, 1000, 2);
    extratoData.push({
      id,
      descricao,
      data,
      categoria,
      valor: parseFloat(valor),
    });
  }
  return extratoData;
};

export default generateFakeExtratoData;
