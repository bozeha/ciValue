export interface IUser {
    address: IAddress,
    company: ICompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}
export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}
export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}
