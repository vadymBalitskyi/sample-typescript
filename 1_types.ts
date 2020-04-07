const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TS']

//Tuple(кортеж) - Tuple creates an array with other data types
const contact: [string, number] = ['Vadym', 12345]

//Any
let variable: any = 42
//...
variable = 'New String'
variable = []

//FUNCTIONS
// Void means that the function does not return
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Vad')

//Never - when the function throws issues and never stop or it works all time
function throwError(msg: string): never {
    throw new Error('msg')
}

//Type - the function allows to create own types (alias)
type login = string
const login: login = 'admin'

type ID = string | number
const id1: ID = 123
const id2: ID = '123'
// const id3: ID = true

type SomeType = string | null | undefined

