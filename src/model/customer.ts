export class Customer {
    name: string;
    address: string;
    contactPerson: string;
    phone: string;
    email: string;
  
    constructor(name: string, address: string, contactPerson: string, phone: string, email: string) {
      this.name = name;
      this.address = address;
      this.contactPerson = contactPerson;
      this.phone = phone;
      this.email = email;
    }
  }