export class InvoiceItem {
    itemNumber: number;
    description: string;
    quantity: number;
    unitPrice: number;
  
    constructor(itemNumber: number, description: string, quantity: number, unitPrice: number) {
      this.itemNumber = itemNumber;
      this.description = description;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
    }
  
    
    get total(): number {
      return this.quantity * this.unitPrice;
    }
  }