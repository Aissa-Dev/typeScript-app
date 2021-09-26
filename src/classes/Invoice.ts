import { hasFormatter } from "../interfaces/HasFormatter.js";
//Classes
export class Invoice implements hasFormatter {
  constructor(
    public client: string,
    private amount: number,
    readonly details: string
  ) {}

  format = () => {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  };
}
