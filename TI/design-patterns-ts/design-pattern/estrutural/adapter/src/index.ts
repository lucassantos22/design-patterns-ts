import PayonnerAdapter from "./adapters/PayonnerAdapter";
import Payonner from "./payonner/Payonner";
import Paypal from "./paypal/Paypal";

const payPalPayment = new Paypal
payPalPayment.payPalPayment()
payPalPayment.payPalreceive()

const payonnerPayment = new PayonnerAdapter(new Payonner)
payonnerPayment.payPalPayment()
payonnerPayment.payPalreceive()