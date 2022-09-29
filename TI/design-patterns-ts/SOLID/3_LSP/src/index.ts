// LSP - Liskov Substitution Principle - Uma classe derivada pode ser substituível por sua classe base

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const crediCard = new CreditCard
const debitCard = new DebitCard
const rewardsCard = new NubankRewards

crediCard.validate()
crediCard.collectPayment()

debitCard.validate()
debitCard.collectPayment()

rewardsCard.validate()
rewardsCard.collectPayment()