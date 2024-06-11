// O INCOMES é o data que fornece informações para o gráfico da home, deve conter os arrays de saldo
// toda vez que houver um novo saldo, um novo array é gerado

export const INCOMES = {
  Janeiro: [
    {
      id: "1",
      label: "pagamento",
      value: 1235,
      date: "10/05",
    },
    {
      id: "2",
      label: "vale pagamento",
      value: 535,
      date: "14/05",
    },
    {
      id: "3",
      label: "vale pagamento",
      value: 985,
      date: "16/05",
    },
  ],
  Fevereiro: [
    {
      id: "1",
      label: "pagamento",
      value: 1500,
      date: "02/02",
    },
    {
      id: "2",
      label: "vale pagamento",
      value: 800,
      date: "04/02",
    },
    {
      id: "3",
      label: "vale pagamento",
      value: 1200,
      date: "06/02",
    },
    {
      id: "4",
      label: "pagamento",
      value: 2000,
      date: "08/02",
    },
    {
      id: "5",
      label: "pagamento",
      value: 1000,
      date: "10/02",
    },
    {
      id: "6",
      label: "vale pagamento",
      value: 600,
      date: "12/02",
    },
    {
      id: "7",
      label: "pagamento",
      value: 1800,
      date: "14/02",
    },
    {
      id: "8",
      label: "vale pagamento",
      value: 950,
      date: "16/02",
    },
    {
      id: "9",
      label: "pagamento",
      value: 2200,
      date: "18/02",
    },
    {
      id: "10",
      label: "vale pagamento",
      value: 700,
      date: "20/02",
    },
  ],
};

// const que vai ser usada para formatar o data de Income(RECEITA)
const data = {
  date: new Date("2024-06-26T19:03:00.000Z"),
  titleIncome: "",
  incomeValue: "R$0.00",
  descIncome: "",
  selectedCategory: null,
  selectedSubcategory: null,
  type: "income",
};

// Função para tratar os dados
const tratarDados = (data: any) => {
  // Extraindo dia, mês e ano da data
  const date = new Date(data.date);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  // Transformando incomeValue em número
  const incomeValueNumber = parseFloat(
    data.incomeValue.replace(/[^0-9,-]+/g, "").replace(",", ".")
  );

  // Criando o array com os dados tratados
  const resultArray = [
    { date: `${day}/${month}/${year}` },
    { incomeValue: incomeValueNumber },
    { selectedCategory: data.selectedCategory },
    { selectedSubcategory: data.selectedSubcategory },
    { titleIncome: data.titleIncome },
    { type: data.type },
  ];

  return resultArray;
};

// Tratando os dados
const resultado = tratarDados(data);

// Exibindo o resultado
console.log(resultado);
