import {YaketyYakOptions} from "./types";

export class ApiClient {
    protected _apiKey: string | undefined;

    private _baseUrl: string = 'https://app.yakety-yak.io/api/v1';
    private readonly _options?: YaketyYakOptions;

    constructor(apiKey: string, options?: YaketyYakOptions) {
        this._apiKey = apiKey;
        this._options = options;
    }

    get = async (url: string) => {
        let response = await fetch(this.buildUrl(url), {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this._apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (response.status === 401) {
            throw new Error('Unauthenticated, there may be something wrong with your ApiKey');
        }

        if (response.status === 403) {
            throw new Error('Forbidden');
        }

        if (response.status === 422) {
            throw new Error('Invalid Request, you may have added an invalid reviewable');
        }

        if (response.status != 200) {
            throw new Error('Invalid Request');
        }

        return response.json();
    }

    private buildUrl(uri: string) {
        if (this._options && this._options.baseUrl) {
            return this._options.baseUrl + uri;
        }

        return this._baseUrl + uri;
    }
}