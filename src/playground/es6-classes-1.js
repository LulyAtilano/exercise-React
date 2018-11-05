class Person {
    constructor(name = "Anonymous", age = 0 ) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Lourdes Atilano', 31);
console.log(me.getDescription());
console.log(me.getGretting());

const other = new Person();
console.log(other.getDescription());
console.log(other.getGretting());