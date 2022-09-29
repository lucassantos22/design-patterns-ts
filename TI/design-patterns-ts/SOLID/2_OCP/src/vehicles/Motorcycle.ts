import { IMotorcycle } from '../interfaces'

export default class Motorcycle implements IMotorcycle{
    constructor(
        private color: string,
        private year: number,
        private engine: number,
    ){
        this.configure(this.color, this.year, this.engine)
    }

    startVehicle(): void {
        console.log('Ligando os motores.')
    }
    configure(color: string, year: number, engine: number): void {
        console.log(`Criando um carro: ${color}, ${year}, ${engine}`)
        this.startVehicle()
    }
}