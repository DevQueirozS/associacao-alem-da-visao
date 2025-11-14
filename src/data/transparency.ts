interface Document {
  title: string;
  description: string;
  fileName: string; // O nome do arquivo PDF na pasta public/files/
}

export const documents: Document[] = [
  {
    title: "Resultado 1º Campeonato de Xadrez",
    description: "Resultado do 1º Campeonato de Xadrez da AAV (2024).",
    fileName: "RESULTADOS 1º CAMPEONATO DE XADREZ AAV.pdf",
  },
  {
    title: "Estatuto Social",
    description: "Estatuto social da Associação Além da Visão.",
    fileName: "ESTATUTO SOCIAL.pdf",
  },
  {
    title: "Balanço 2023",
    description: "Balanço Patrimonial 2023 da AAV.",
    fileName: "Balanço 2023.pdf",
  },
  // Adicione os outros documentos (Notícias, Convocações)
];
