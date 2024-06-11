// Data.ts
interface Goal {
  id: number;
  date: string;
  title: string;
  accumulated: number;
  goal: number;
}

export const GOALS: Goal[] = [
  {
    id: 1,
    date: "22/12/2024",
    title: "Comprar Carro",
    accumulated: 25000,
    goal: 45000,
  },
  {
    id: 2,
    date: "22/12/2024",
    title: "Comprar Casa",
    accumulated: 5000,
    goal: 100000,
  },
  {
    id: 3,
    date: "22/12/2024",
    title: "jOGO DO TIGRINHO",
    accumulated: 900,
    goal: 1000,
  },
];
