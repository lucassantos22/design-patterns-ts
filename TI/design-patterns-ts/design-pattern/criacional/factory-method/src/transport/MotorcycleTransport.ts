import Transport from "./Transport";
import IVehile from "./vehicles/interfaces/IVehile";
import Motorcycle from './vehicles/Motorcycle'

export default class MotorcycleTransport extends Transport {
    createTransport(): IVehile {
        return new Motorcycle()
    }
}