export interface IUser {
    Cpf: string;
    Nome: string;
    DtNasc: Date;
    TipoEndereco: string;
    Endereco: string;
    Complemento: string;
    Bairro: string;
    Cidade: string;
    Uf: string;
    Cep: string;
    Telefone: string;
    Sexo: string;
    Email: string;
    Medicamentos: Array<any>;
    AutorizaContato: string;
    Status: string;
    Mensagem: string;
}
