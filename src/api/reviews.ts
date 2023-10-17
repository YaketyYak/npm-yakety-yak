import ApiClient from "./client";

export default class Reviews {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    get() {
        return this.client.get('/reviews');
    }
}