import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export class Api<T> {
    constructor(private http: HttpClient, protected actionUrl: string) { }

    getAll(queryParams = {}, headers?: HttpHeaders, routeParams?: any): Observable<T> {
        const params = this.createQueryParams(queryParams);
        const routeUrl = this.createRouteParams(routeParams);
        return this.http.get<T>(routeUrl, {
            params: params,
            headers: headers
        });
    }

    getById(id: string, queryParams = {}, headers?: HttpHeaders,  routeParams?: any): Observable<T> {
        const params = this.createQueryParams(queryParams);
        const routeUrl = this.createRouteParams(routeParams);

        return this.http.get<T>(`${routeUrl}/${id}`, {
            params: params,
            headers: headers
        });
    }
    create(item: T, headers?: HttpHeaders): Observable<T> {
        return this.http.post<T>(this.actionUrl, item, { headers: headers });
    }

    update(id: string, item: T, headers?: HttpHeaders): Observable<T> {
        return this.http.put<T>(`${this.actionUrl}/${id}`, item, { headers: headers });
    }

    delete(id: string, headers?: HttpHeaders): Observable<T> {
        return this.http.delete<T>(`${this.actionUrl}/${id}`, { headers: headers });
    }

    private createQueryParams(params: any): HttpParams {
        let httpParams = new HttpParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                httpParams = httpParams.set(key, params[key]);
            }
        }
        return httpParams;
    }

    private createRouteParams(routeParams: any): string {
        let url = this.actionUrl;
        if (routeParams) {
            for (const param in routeParams) {
                if (param) {
                    const regex = new RegExp(':'.concat(param));
                    url = url.replace(regex, routeParams[param]);
                }
            }
        }
        return url;
    }

}