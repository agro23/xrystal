export class User {

  constructor(private id: string, public name: string, private wallet: object[]) {
    this.id = id;
    this.name = name;
    this.wallet = wallet;
  }

}
