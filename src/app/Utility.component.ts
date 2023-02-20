import { Injectable } from "@angular/core";
import {throwError as observableThrowError, Observable} from 'rxjs';
import { ExternalHttpClient } from "./services/httpclient.service";

@Injectable()
export default class Utils {
    // ritornoControlloImmagine = '';
    // immagineControllata = false;
  
    constructor(
        private http: ExternalHttpClient,
    ) {

    }

    async controllaImmagine(t, imm) {
        return new Promise(async (Ritorno) => {
            // console.log('Controllo immagine', imm);
            this.vedeSeEsisteImmagine(t, imm).subscribe(data => {
                // this.ritornoControlloImmagine = 'OK';
                // this.immagineControllata = true;
                Ritorno(imm);
            }, error => {
                // this.ritornoControlloImmagine = 'ERROR: '; //  + JSON.stringify(error);
                // this.immagineControllata = true;
                Ritorno('ERROR');
            });
        });
    }

    vedeSeEsisteImmagine(t, imm): Observable<any> {
        return this.http.get(t, imm)
        .catch(this.catchAuthError());
    }

    private catchAuthError() {
        // console.log('Errore: ', self);
        // we have to pass HttpService's own instance here as `self`
        return (res) => {
            // console.error('ERRORE Http: ' + res.body);

            return observableThrowError(res);
        };
    }
}