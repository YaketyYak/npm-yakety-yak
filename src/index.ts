import {ApiClient} from "./apiClient.js";
import {PaginatedResponse, ReviewResponse, YaketyYakOptions} from "./types";
import {Reviews} from "./reviews.js";

class YaketyYak {
    private readonly apiClient: ApiClient;

    constructor(apiKey: string, options?: YaketyYakOptions) {
        console.log('con', apiKey);

        this.apiClient = new ApiClient(
            apiKey, options
        );
    }

    getReviewsFor: ({reviewable}: { reviewable: string }) => Promise<PaginatedResponse<ReviewResponse>> = async ({reviewable}: { reviewable: string }) => {
        if (reviewable === undefined) {
            throw new Error('Reviewable is undefined');
        }

        return new Reviews(this.apiClient).get(reviewable)
    };
}

export {
    YaketyYak,
}