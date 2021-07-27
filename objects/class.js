class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

const player = new Player('Goke', 'Human');
player.introduce();

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play(){
        console.log(`I'm a ${this.type}`);
    }
}

const wizard = new Wizard('Harry', 'Gryffindor');
wizard.introduce();
wizard.play();