import { hasFormatter } from "../interfaces/HasFormatter.js";
//Classes
export class Payment implements hasFormatter {
  constructor(
    public recipient: string,
    private amount: number,
    readonly details: string
  ) {}

  format = () => {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  };
}
