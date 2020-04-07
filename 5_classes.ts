class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `${name}: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numebrOfWheels: number = 4
//
//     constructor(theModel: string){
//         this.model = theModel
//     }
// }
class Car {
    readonly numebrOfWheels: number = 4
    constructor(readonly model: string) {}
}
//==================
// Modifier: protected, public, private

class Animal {
    protected voice: string = ''
    public color: string = '#000'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
// cat.voice - error

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('component on render')
    }
    info(): string {
        return 'this is info'
    }
}

