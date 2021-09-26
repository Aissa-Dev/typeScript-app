import { hasFormatter } from "../interfaces/HasFormatter.js";
//Classes
export class Payment implements hasFormatter {
  constructor(
    public recipient: string,
    readonly details: string,
    private amount: number
  ) {}
  format = () => {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  };
}
