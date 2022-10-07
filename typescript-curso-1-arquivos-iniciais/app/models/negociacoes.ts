import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // Para retornar uma lista imutável: ReadonlyArray<Negociacao> ou readonly Negociacao[]
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
