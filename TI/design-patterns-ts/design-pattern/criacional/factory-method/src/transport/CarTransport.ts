import Transport from "./Transport";
import IVehile from "./vehicles/interfaces/IVehile";
import Car from './vehicles/Car'

export default class CarTransport extends Transport {
    protected createTransport(): IVehile {
        return new Car()
    }
}