import ApiClient from "./api/client";
import Reviews from "./api/reviews";
import { AxiosResponse } from "axios";

class YaketyYak {
    private apiClient: ApiClient;

    constructor() {
        this.apiClient = new ApiClient();
    }

    configure(apiKey: string) {
        // 2|7ReHLfzERe5WIpVhLdLjKQgLjHbzVGcEq809CcMl5c6ad14e
        console.log('ApiKey', apiKey);
        this.apiClient.apiKey = apiKey;

        // return this;
    }

    getReviews(): Promise<AxiosResponse<any>> {
        const client = new Reviews(this.apiClient)
        return client.get()
    }
}

const singleton = new YaketyYak();

export {
    singleton as YaketyYak,
}