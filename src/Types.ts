export interface IAddress {
  street: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  address: IAddress;
}
