describe('Getter and Setter', () => {
    class Category {
        _name?: string;

        get name(): string {
            if(this._name) {
                return this._name;
            } else {
                return 'empty';
            }
        }

        set name(value: string) {
            if (value != '') {
                this._name = value;
            }
        }
    }

    it('should support in class', () => {

        const category = new Category();
        console.info(category.name); // empty

        category.name = 'Electronics';
        console.info(category.name); // Electronics

        category.name = '';
        console.info(category.name); // Electronics


    });
});