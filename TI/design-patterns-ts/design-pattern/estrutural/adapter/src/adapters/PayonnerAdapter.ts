import Payonner from "../payonner/Payonner";
import IPaypalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/token";

export default class PayonnerAdapter implements IPaypalPayment {

    constructor(private payonner: Payonner) {
        console.log('Adaptando o Payonner para padrões do PayPal.')
    }

    authToken(): Token {
        return this.payonner.authToken()
    }

    payPalPayment(): void {
        return this.payonner.sendPayment()
    }

    payPalreceive(): void {
        return this.payonner.receivePayment()
    }

}