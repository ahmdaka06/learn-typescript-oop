describe('Properties', () => {

    class Customer {

        readonly id: number;
        name: string;
        age?: number = 10;

        constructor(id: number, name: string = 'Guest') {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string) : void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should can have properties', () => {
        
        const customer: Customer = new Customer(1, 'John');
        customer.age = 30;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);

    });

    it('should can have method', () => {
    
        const customer: Customer = new Customer(1, 'John');
        customer.sayHello('Doe');
    
    });

});