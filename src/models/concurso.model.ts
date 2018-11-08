import { Estado } from "./estado.model";

export interface Concurso {
  id?: number;
  titulo: string;
  sumario: string;
  responsavel: string;
  data_publicacao: string;
  conteudo: string;
  estado_id: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
  decorators?: any;
  estado?: Estado;
}
