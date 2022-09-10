import axios, { AxiosStatic } from 'axios';
import points from './points';
import { TPoints } from '@/types/api';

class Api {
    points: TPoints;
    axios: AxiosStatic;

    constructor(endpoints: TPoints) {
        this.points = endpoints;
        this.axios = axios;
        this.axios.defaults.baseURL = process.env.BASE_URL;
    }

    private getPointUrl(pointName: string, urlParams: any, paramId?: number | null) {
        const point = this.points[pointName];
        let result;

        if (typeof point === 'function') {
            result = point(urlParams);
        } else {
            result = point;
        }

        if (paramId) {
            result += (result[result.length - 1] === '/' ? '' : '/') + paramId;
        }

        return result;
    }

    async post(
        pointName: string,
        body: any,
        paramId?: number | null,
        { urlParams = {}, queryParams = {}, headers = {}, withCredentials = false } = {},
    ) {
        const pointUrl = this.getPointUrl(pointName, urlParams, paramId);

        const { data } = await this.axios.post(pointUrl, body, {
            params: queryParams,
            headers,
            withCredentials,
        });
        return data;
    }

    async get(
        pointName: string,
        paramId?: number | null,
        { urlParams = {}, queryParams = {}, headers = {}, withCredentials = false } = {},
    ) {
        const pointUrl = this.getPointUrl(pointName, urlParams, paramId);

        const { data } = await this.axios.get(pointUrl, {
            params: queryParams,
            headers,
            withCredentials,
        });
        return data;
    }

    async patch(
        pointName: string,
        body: any,
        paramId?: number | null,
        { urlParams = {}, queryParams = {}, headers = {} } = {},
    ) {
        const pointUrl = this.getPointUrl(pointName, urlParams, paramId);

        const { data } = await this.axios.patch(pointUrl, body, {
            params: queryParams,
            headers,
        });
        return data;
    }

    async put(
        pointName: string,
        body: any,
        paramId?: number | null,
        { urlParams = {}, queryParams = {}, headers = {} } = {},
    ) {
        const pointUrl = this.getPointUrl(pointName, urlParams, paramId);

        const { data } = await this.axios.put(pointUrl, body, {
            params: queryParams,
            headers,
        });
        return data;
    }

    async delete(
        pointName: string,
        paramId?: number | null,
        { urlParams = {}, queryParams = {}, headers = {} } = {},
    ) {
        const pointUrl = this.getPointUrl(pointName, urlParams, paramId);

        const { data } = await this.axios.delete(pointUrl, {
            params: queryParams,
            headers,
        });
        return data;
    }
}

export default new Api(points);
