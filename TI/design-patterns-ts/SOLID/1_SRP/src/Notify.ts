import Client from "./Client"

export default class Notify {
    constructor(private client: Client) {}

    sendEmail(): boolean {
        return !!this.client
    }
}