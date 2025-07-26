import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export class Api<T> {
    constructor(private http: HttpClient, protected actionUrl: string) {}

    getAll(queryParams = {}, headers?: HttpHeaders): Observable<T> {
        const params = this.createQueryParams(queryParams);
        return this.http.get<T>(this.actionUrl, {
            params: params,
            headers: headers
        });
    }

    getById(id: string, queryParams = {}, headers?: HttpHeaders): Observable<T> {
        const params = this.createQueryParams(queryParams);
        return this.http.get<T>(`${this.actionUrl}/${id}`, {
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


}