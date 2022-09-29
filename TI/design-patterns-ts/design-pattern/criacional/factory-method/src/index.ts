import BikeTransport from "./transport/BicicleTransport"
import CarTransport from "./transport/CarTransport"
import MotorcycleTransport from "./transport/MotorcycleTransport"
import Transport from "./transport/Transport"

declare const process: any

let transport: Transport

if (process.argv.includes('--uber')) {
    transport = new CarTransport()
} else if (process.argv.includes('--log')) {
    transport = new MotorcycleTransport()
} else if (process.argv.includes('--bike')) {
    transport = new BikeTransport()
} else {
    console.log('Error')
}

transport && transport.startTransport()

// Deverá passar -- --uber ou -- --log