export interface Publication {
  image?: string;
  video?: string;
  type: "image" | "video";
  description: string;
  link?: string;
}

export interface LoginResponse {
  ok: boolean;
  message?: string;
  // Adicione outros campos de resposta, se houver (ex: token)
}

// Para os controles de acessibilidade
export type FontSize =
  | "font-normal"
  | "font-medium"
  | "font-large"
  | "font-xlarge";
export type Theme = "light-mode" | "dark-mode";
