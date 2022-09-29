import IVehicle from "./interfaces/IVehile";

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando viagem...')
    }
    getCargo(): void {
        console.log('Buscando carga pequena...')
    }

}