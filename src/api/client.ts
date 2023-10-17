import axios, {AxiosResponse} from 'axios';

export default class ApiClient {
    protected _apiKey: string|undefined;
    set apiKey(value: string) {
        this._apiKey = value;
    }

    get(url: string): Promise<AxiosResponse<any>> {
        return axios.get(url);
    }
}