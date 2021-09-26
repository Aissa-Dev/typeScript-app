import { hasFormatter } from "../interfaces/HasFormatter.js";
//Classes
export class Invoice implements hasFormatter {
  constructor(
    public client: string,
    readonly details: string,
    private amount: number
  ) {}

  format = () => {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  };
}
