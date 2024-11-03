import { Injectable } from '@nestjs/common';
import { InvoiceItem } from './model/invoice.item';
import { Invoice } from './model/invoice';
import { Customer } from './model/customer';
import { InvoiceStatus } from './model/invoice-status';


@Injectable()
export class InvoiceService {

     INVOICES_QUANTITY : number  = 9;

    getInvoiceList(): Invoice[] {
        const invoices: Invoice[] = [];
      
        const customers: Customer[] = [
          new Customer('ABC Corporation', '456 Business Avenue, Cityville', 'John Doe', '+1-987-654-321', 'john.doe@abccorp.com'),
          new Customer('XYZ Media', '123 Media Street, Townsville', 'Jane Smith', '+1-111-222-333', 'jane.smith@xyzmedia.com'),
          new Customer('Global Ventures', '789 Enterprise Road, Metropolis', 'Richard Roe', '+1-444-555-666', 'richard.roe@globalventures.com'),
          new Customer('Tech Innovators', '321 Startup Ave, Silicon City', 'Mary Major', '+1-777-888-999', 'mary.major@techinnovators.com'),
          new Customer('Future Works', '654 Horizon Blvd, Tomorrowland', 'David Black', '+1-000-111-222', 'david.black@futureworks.com'),
          new Customer('Optima Solutions', '159 Optimization Lane, Innoville', 'Alice Blue', '+1-333-444-555', 'alice.blue@optimasolutions.com'),
          new Customer('Pinnacle Holdings', '951 Peakview Drive, Summit City', 'Mark Green', '+1-666-777-888', 'mark.green@pinnacleholdings.com')
        ];
      
        const itemsList: InvoiceItem[][] = [
          [new InvoiceItem(1, 'Basic TV Package', 1, 50), new InvoiceItem(2, 'HD Upgrade', 1, 10)],
          [new InvoiceItem(1, 'Sports Package', 1, 40), new InvoiceItem(2, 'Family Entertainment', 1, 25)],
          [new InvoiceItem(1, 'News Package', 1, 15), new InvoiceItem(2, 'Premium Movies', 1, 35)],
          [new InvoiceItem(1, 'Full Entertainment', 1, 75), new InvoiceItem(2, 'HD Channel Upgrade', 1, 10)],
          [new InvoiceItem(1, 'Documentary Package', 1, 20), new InvoiceItem(2, 'Premium Sports', 1, 45)],
          [new InvoiceItem(1, 'Basic TV Package', 1, 50), new InvoiceItem(2, 'News & Docs', 1, 20)],
          [new InvoiceItem(1, 'Sports and Entertainment', 1, 60), new InvoiceItem(2, 'HD Upgrade', 1, 10)]
        ];
      
        // Invoice names and suppliers for different invoices
        const invoiceNames = [
          'Monthly Subscription - ABC',
          'Quarterly Package - XYZ Media',
          'Annual Entertainment Plan - Global Ventures',
          'Full Package - Tech Innovators',
          'Documentary & Sports - Future Works',
          'Basic and News - Optima Solutions',
          'Sports & HD - Pinnacle Holdings',
          'Documentary & Sports - Future Works',
          'Basic and News - Optima Solutions'
        ];
      
        const supplierNames = [
          'MediaCompany Ltd.',
          'MediaCompany Ltd.',
          'PremiumContent Providers Inc.',
          'StreamingWorld Inc.',
          'FutureTV Providers',
          'Optimized Media Services',
          'Pinnacle Media Distributors',
          'Optimized Media Services',
          'FutureTV Providers'
        ];
      
       
        for (let i = 0; i < this.INVOICES_QUANTITY; i++) {
          const invoice = new Invoice(
            `INV-100${i + 1}`,                      // Invoice number
            invoiceNames[i],                        // Invoice name
            supplierNames[i],                       // Supplier name
            (i < 4) ? new Date('2024-11-03'): new Date('2024-11-05'),                
            new Date('2024-22-10'),                 // Due date
            `CUST-${1000 + i}`,                     // Customer ID
            customers[i],                           // Customer
            itemsList[i],                           // Items
            17,                                     // Tax percentage (17%)
            500,
            (i < 3) ? InvoiceStatus.Waiting : InvoiceStatus.InProcess
          );
          invoices.push(invoice);
        }

        invoices[7].invoiceStatus = InvoiceStatus.Rejected;
        invoices[8].invoiceStatus = InvoiceStatus.Rejected;

        return invoices;
      }


      searchInvoices(invoiceDate?: Date, searchQuery?: string): Invoice[] {

        var invoices =this.getInvoiceList();
        return invoices.filter((invoice) => {
          let matchesDate = true;
          let matchesSearchQuery = true;
    
          // If invoiceDate is provided, check if it matches
          if (invoiceDate) {
            matchesDate = invoice.invoiceDate.toDateString() === invoiceDate.toDateString();
          }
    
          // If searchQuery is provided, check if it matches invoiceName or supplierName
          if (searchQuery) {
            const queryLower = searchQuery.toLowerCase();
            matchesSearchQuery =
              invoice.invoiceName.toLowerCase().includes(queryLower) ||
              invoice.supplierName.toLowerCase().includes(queryLower);
          }
    
          return matchesDate && matchesSearchQuery;
        });
      }
      

  // Method to populate an invoice with the sample data
  getSampleInvoice(): Invoice {
    const customer = new Customer(
      'ABC Corporation',
      '456 Business Avenue, London, England',
      'John Doe',
      '+1-987-654-321',
      'john.doe@abccorp.com'
    );

    const items: InvoiceItem[] = [
      new InvoiceItem(1, 'Basic TV Package', 1, 50.00),
      new InvoiceItem(2, 'Premium Sports Package', 1, 30.00),
      new InvoiceItem(3, 'News & Documentary Package', 1, 20.00),
      new InvoiceItem(4, 'Family Entertainment Package', 1, 25.00),
      new InvoiceItem(5, 'HD Channel Upgrade', 1, 10.00)
    ];

    const invoice = new Invoice(
      'INV-12345',
      "TV package",  
      "Yes",
      new Date('2024-08-10'),
      new Date('2024-22-10'),
      'CUST-98765',
      customer,
      items,
      17, // Tax Percentage (17%),
      500,
      InvoiceStatus.InProcess
    );

    return invoice;
  }
}
