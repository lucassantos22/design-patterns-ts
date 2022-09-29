// DIP - Princípio da Inversão de Dependência - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Abstrações não devem depender de detalhes.
import Payment from "./payment/Payment"

const payment = new Payment()
payment.pay(400)