// OCP - Open Closed Principal - Aberto para extensão e fechado para modificação
// Se eu precisar criar uma bike, só criar uma classe e uma interface nova sem mudar as existentes

import TypeVehicle from "./enums/TypeVehicle";
import { Car, Motorcycle } from "./vehicles";

const type = TypeVehicle.CAR

if (type === TypeVehicle.CAR) {
    new Car('Amarelo', 2022, 2.0, 4, 4)
}

/* if (type === TypeVehicle.MOTORCYCLE) {
    new Motorcycle('Amarelo', 2022, 2.0)
} */

