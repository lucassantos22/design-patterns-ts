import Token from "../utils/token";

export default interface IPaypalPayment {

    authToken(): Token
    payPalPayment(): void
    payPalreceive(): void

}