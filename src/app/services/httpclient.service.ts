
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
// import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/catch';

import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ExternalHttpClient {

  headers;

  constructor(private http: HttpClient) {
    this.headers = new Headers();
  }

  setHeader(header, value) {
    this.headers.append(header, value);
  }

  private catchAuthError(self: ExternalHttpClient) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      return observableThrowError(res);
    };
  }

  get(t, url, params?): Observable<any> {
    if (params) {
      url += params.toString();
    }
    // console.log(url);
    // t.utility.scriveDebug(t, 'Device: ' + t.deviceGirante);
    // t.utility.scriveDebug(t, 'Chiamata: ' + url);

    if (t.deviceGirante === 'Android') {
      const postHeaders = new HttpHeaders(this.headers);
      postHeaders.append('Content-Type', 'application/text');
      postHeaders.append("Cache-Control", "no-cache");
      postHeaders.append("Access-Control-Allow-Origin", "*");
      postHeaders.append("Access-Control-Allow-Credentials", "true");
      postHeaders.append("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
      postHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      // console.log('HEADERS', this.headers);
      /* return this.http.get(url, {
        search: params,
        headers: postHeaders
      }).catch(this.catchAuthError(this)); */

      const HTTPOptions: Object = {
        headers: postHeaders,
        responseType: 'text'
      }

      return this.http.get(
        url, HTTPOptions
      )
      .map(data => { 
        // t.utility.scriveDebug(t, 'Ritorno funzione Android: ' + url);
        // t.utility.scriveDebug(t, data);

        return data; 
      })
      .pipe(
        timeout(10000),
        catchError(e => {
          // do something on a timeout
          t.utility.scriveDebug(t, 'Errore funzione get Android: ' + url);
          t.utility.scriveDebug(t, JSON.stringify(e));

          return of(null);
          // return e;
        })
      );
    } else {
      /* return this.http.get(url, {
        search: params,
        headers: this.headers
      }).catch(this.catchAuthError(this)); */

      const HTTPOptions: Object = {
        headers: this.headers,
        responseType: 'text'
      }

      return this.http.get(url,  HTTPOptions)
        .map(data => { 
          // t.utility.scriveDebug(t, 'Ritorno funzione WEB: ' + url);
          // t.utility.scriveDebug(t, data);
          return data; 
        })
        .pipe(
        timeout(10000),
        catchError(e => {
          // do something on a timeout
          t.utility.scriveDebug(t, 'Errore funzione get Android: ' + url);
          t.utility.scriveDebug(t, JSON.stringify(e));

          return of(null);
          // return e;
        })
      );

      return this.http.get(
        url, {
          headers: this.headers
        }
      )
      .pipe(
        timeout(10000),
        catchError(e => {
          // do something on a timeout
          t.utility.scriveDebug(this, 'TIMEOUT 2 funzione ' + url);

          return of(null);
          // return e;
        })
      );
    }
  }

  post(t, url, data) {
    const postHeaders = new Headers(this.headers);
    postHeaders.append('Content-Type', 'application/text');
    
    postHeaders.append("Cache-Control", "no-cache");
    postHeaders.append("Access-Control-Allow-Origin", "*");
    postHeaders.append("Access-Control-Allow-Credentials", "true");
    postHeaders.append("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    postHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
  
    const HTTPOptions: Object = {
      headers: postHeaders,
      responseType: 'text'
    }

    // const body = JSON.stringify(data);
    // return this.http.post(url, body, {headers: postHeaders})

    return this.http.post<any>(url, data, HTTPOptions)
      .map(data => { 
        // t.utility.scriveDebug(t, 'Ritorno funzione WEB: ' + url);
        // t.utility.scriveDebug(t, data);
        return data; 
      })
      .pipe(
      // timeout(UtilityComponent.TimeOutConnessione),
      catchError(e => {
        // do something on a timeout
        t.utility.scriveDebug(t, 'Errore funzione get Android: ' + url);
        t.utility.scriveDebug(t, JSON.stringify(e));

        return of(null);
        // return e;
      })
    );
      // .catch(this.catchAuthError(this));
  }

  /* post2(url, data, postHeaders) {
    const body = JSON.stringify(data);
    return this.http.post(url, body, {headers: postHeaders})
      .catch(this.catchAuthError(this));
  }

  put(url, data) {
    const putHeaders = new Headers(this.headers);
    putHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this.http.put(url, body, {headers: putHeaders})
      .catch(this.catchAuthError(this));
  }

  delete(url, data) {
    const postHeaders = new Headers(this.headers);
    postHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify(data);
    return this.http.delete(url, {headers: postHeaders, body: body})
      .catch(this.catchAuthError(this));
  } */

  async downloadFile(url) {
    const r = await this.http.get(url, this.headers).toPromise();
    // console.log(r);
    return r;
  }
}