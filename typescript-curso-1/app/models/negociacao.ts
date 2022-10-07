export class Negociacao {
  // Declarando o atributo public e readonly, é o mesmo que declarar os getters e setters.
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  // Programação defensiva: criar uma nova instância da data
  // para evitar que a data original seja modificada através dos métodos do objeto Date;
  get data(): Date {
    return new Date(this._data.getTime());
  }

  get volume() {
    return this.quantidade * this.valor;
  }
}
