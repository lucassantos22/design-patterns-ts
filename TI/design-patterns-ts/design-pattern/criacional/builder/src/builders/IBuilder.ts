import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Type from "../components/Type";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default interface IBuilder {

    reset (): void
    getVehicle(): Vehicle
    addWheel(wheel: Wheel): void
    setType(type: Type): void
    setSeats(seats: number): void
    setEngine(engine: Engine): void
    setTransmission(transmission: Transmission): void

}