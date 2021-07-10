//6.2 vou colocar o id e data como propr opcional
//6.3 'number|string' quer dizer que pode se comportar como nr e string

export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: string;
}
