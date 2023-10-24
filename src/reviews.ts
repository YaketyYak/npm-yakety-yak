import {ApiClient} from "./apiClient";
import {PaginatedResponse, ReviewResponse} from "./types";

export class Reviews {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    get: (reviewable: string) => Promise<PaginatedResponse<ReviewResponse>> = async (reviewable: string) => {
        return this.apiClient.get('/reviews?reviewable=' + reviewable);
    }
}