import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Type from "../components/Type";
import Wheel from "../components/Wheel";

export default class Vehicle {

    private _type: Type
    private _engine: Engine
    private _transmission: Transmission
    private _wheels: Wheel[] = []
    private _seats: number

    addWheel (wheel: Wheel) {
        this._wheels.push(wheel)
    }

    get type(): Type {
        return this._type
    }

    set type (type: Type) {
        this._type = type
    }

    get engine(): Engine {
        return this._engine
    }

    set engine (engine: Engine) {
        this._engine = engine
    }

    get transmission(): Transmission {
        return this._transmission
    }

    set transmission (transmission: Transmission) {
        this._transmission = transmission
    }

    get wheels(): Wheel[] {
        return this._wheels
    }

    get wheelsTotal(): number {
        return this._wheels.length
    }

    get seats(): number {
        return this._seats
    }

    set seats (seats: number) {
        this._seats = seats
    }

}