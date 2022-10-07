import { Negociacoes } from "./../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    this.limpaFormulario();
  }

  criaNegociacao(): Negociacao {
    return new Negociacao(
      this.inputData.valueAsDate,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber
    );
  }

  limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
