import { Controller, Get, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './model/invoice';



@Controller('invoice')
export class InvoiceController {

  constructor(private readonly invoiceService: InvoiceService) {

  }


  @Get('invoices')
  getInvoiceList(): Invoice[] {
    
    var list =  this.invoiceService.getInvoiceList();
    return list;
  }

 
  @Get('search')
  searchInvoices(@Query('date') date?: string, @Query('query') query?: string): Invoice[] {
    const invoiceDate = date ? new Date(date) : undefined;
    var invoices = this.invoiceService.searchInvoices(invoiceDate, query);
    return invoices;
  }
}
