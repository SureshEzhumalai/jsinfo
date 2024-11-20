console.log('objects in js')

// calculator program using object - 20/11/2024

calculator = {
    a,
    b,
    read(){
        this.a = prompt('Enter a number ', '');
        this.b = prompt('Enter another number ', '');
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    }
}