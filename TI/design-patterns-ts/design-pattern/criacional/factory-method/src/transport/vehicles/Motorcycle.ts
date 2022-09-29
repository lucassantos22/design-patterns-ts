import IVehicle from "./interfaces/IVehile";

export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando a entrega...')
    }
    getCargo(): void {
        console.log('Pegamos a encomenda!')
    }

}