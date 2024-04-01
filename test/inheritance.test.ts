describe('Inheritence', () => {

    // parent class
    class Employee {
        name: string;

        constructor (name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
        
    }

    class Director extends Manager {

    }

    it('should support', () => {

        const employee = new Employee('Ahmad');
        console.info(employee.name);

        const manager = new Manager('Andika');
        console.info(manager.name);

        const director = new Director('Budi');
        console.info(director.name);

    });

});