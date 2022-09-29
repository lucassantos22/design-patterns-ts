// SRP - Single Responsability Principle (Cada classe não pode ter mais de um motivo pra existir, uma responsabilidade)
// Se alterar classe cliente, não altera classe notify

import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client()
const notificacao = new Notify(cliente)
console.log(notificacao.sendEmail())