export enum Color {
  rojo = 1,
  negro,
  azul,
  verde
}

export interface Heroe{
  nombre: string,
  vuela: boolean,
  color: string | Color
}
