import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";

const builder = new VehicleBuilder
const director = new Director(builder)
director.constructSedanCar()

const sedan = builder.getVehicle()
console.log(sedan)

/*

Usado para evitar construtores com múltiplos parâmetros
Têm uma classe builder com métodos que modificam os atributos da classe principal
Têm uma classe director que recebe o builder por parâmetro e montam o objeto inteiro

*/