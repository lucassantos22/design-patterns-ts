import { ICar } from '../interfaces'

export default class Car implements ICar{
    constructor(
        private color: string,
        private year: number,
        private engine: number,
        private seats: number,
        private doors: number
    ){
        this.configure(this.color, this.year, this.engine, this.seats, this.doors)
    }

    startVehicle(): void {
        console.log('Ligando os motores.')
    }
    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`Criando um carro: ${color}, ${year}, ${engine}, ${seats}, ${doors}`)
        this.startVehicle()
    }
}