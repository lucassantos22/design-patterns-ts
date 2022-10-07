import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Type from "../components/Type";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {

    private vehicle = new Vehicle()

    reset(): void {
        this.vehicle = new Vehicle
    }

    getVehicle(): Vehicle {
        const result: Vehicle = this.vehicle
        this.reset()
        return result
    }

    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel)
    }

    setType(type: Type) {
        this.vehicle.type = type
    }

    setSeats(seats: number) {
        this.vehicle.seats = seats
    }

    setEngine(engine: Engine) {
        this.vehicle.engine = engine
    }

    setTransmission(transmission: Transmission) {
        this.vehicle.transmission = transmission
    }
}