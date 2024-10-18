import { Customer } from "./customer";
import { InvoiceStatus } from "./invoice-status";
import { InvoiceItem } from "./invoice.item";


export class Invoice {
    invoiceNumber: string;
    invoiceName: string;
    supplierName: string;
    invoiceDate: Date;
    dueDate: Date;
    customerId: string;
    customer: Customer;
    items: InvoiceItem[] = [];
    taxPercentage: number;
    totalAmount: number;
    invoiceStatus: InvoiceStatus;

    constructor(invoiceNumber: string, 
                invoiceName: string,
                supplierName: string,
                invoiceDate: Date, 
                dueDate: Date, 
                customerId: string, 
                customer: Customer, 
                items: InvoiceItem[], 
                taxPercentage: number,
                totalAmount: number,
                invoiceStatus: InvoiceStatus) {

      this.invoiceNumber = invoiceNumber;
      this.invoiceName   = invoiceName;
      this.supplierName  = supplierName;
      this.invoiceDate   = invoiceDate;
      this.dueDate       = dueDate;
      this.customerId    = customerId;
      this.customer      = customer;
      this.items         = items;
      this.taxPercentage = taxPercentage;
      this.totalAmount   = totalAmount;
      this.invoiceStatus = invoiceStatus;
    }
  
    get subtotal(): number {
      return this.items.reduce((sum, item) => sum + item.total, 0);
    }
  
    get taxAmount(): number {
      return (this.subtotal * this.taxPercentage) / 100;
    }
  
    // get totalAmount(): number {
    //   return this.subtotal + this.taxAmount;
    // }
  }
  