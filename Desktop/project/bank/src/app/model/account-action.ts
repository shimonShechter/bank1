import { Account } from './account';

export enum ActionEnum{
    Input = "Input",
    Output = "Output",
    loan = "loan"


}

export class AccountAction {
    id:number
    AccountId:number
    Type:ActionEnum
    Amount:number
}
