import Token from "../utils/token";
import IPaypalPayment from "./IPayPalPayment";

export default class Paypal implements IPaypalPayment{

    private token: Token

    authToken(): Token {
        return new Token()
    }

    payPalPayment(): void {
        this.token = this.authToken()
        console.log(`TOKEN: ${this.token.getToken()}`)
        console.log('Enviando pagamento via PayPal.')
    }

    payPalreceive(): void {
        console.log('Recebendo pagamento via PayPal.')
    }

}