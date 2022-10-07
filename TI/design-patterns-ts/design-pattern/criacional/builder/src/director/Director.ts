import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Type from "../components/Type";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default class Director {

    constructor(private builder: IBuilder) {}

    constructSedanCar() {
        this.builder.setType(Type.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }

    constructSuv() {
        this.builder.setType(Type.SUV)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(2000))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }

    get(): Vehicle {
        return this.builder.getVehicle()
    }

}