import Transport from "./Transport";
import IVehile from "./vehicles/interfaces/IVehile";
import Bike from "./vehicles/Bike"

export default class BikeTransport extends Transport{
    protected createTransport(): IVehile {
        return new Bike()
    }

}