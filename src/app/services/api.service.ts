import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ExternalHttpClient } from './httpclient.service';
import {throwError as observableThrowError, Observable} from 'rxjs';

@Injectable()
export class ApiService {
  // private urlBase = this.variabiliGlobali.urlWS;
  // private urlRoot = environment.urlRoot;
  urlWS = '';

  constructor(
    private httpclient: ExternalHttpClient,
    ) {
  }

  ritornaUrlWS() {
    return this.urlWS;
  }

  impostaUrlWS(e1) {
    this.urlWS = e1;
  }

  cambiaChar(ee, c1, c2) {
    while (ee.indexOf(c1) > -1) {
        ee = ee.replace(c1, c2);
    }
    return ee;
  }

  sistemaTesto(e): string {
    if (e === undefined || e === 'undefined' || e === '' || e === null) {
        return '';
    }

    let ee = e.toString();

    ee = this.cambiaChar(ee, '<', '%3C');
    ee = this.cambiaChar(ee, '>', '%3E');
    ee = this.cambiaChar(ee, '#', '%23');
    ee = this.cambiaChar(ee, '{', '%7B');
    ee = this.cambiaChar(ee, '}', '%7D');
    ee = this.cambiaChar(ee, '|', '%7C');
    ee = this.cambiaChar(ee, '\\', '%5C');
    ee = this.cambiaChar(ee, '^', '%5E');
    ee = this.cambiaChar(ee, '~', '%7E');
    ee = this.cambiaChar(ee, '[', '%5B');
    ee = this.cambiaChar(ee, ']', '%5D');
    ee = this.cambiaChar(ee, '`', '%60');
    // ee = this.cambiaChar(ee, ';', '%3B');
    ee = this.cambiaChar(ee, '/', '%2F');
    ee = this.cambiaChar(ee, '?', '%3F');
    ee = this.cambiaChar(ee, ':', '%3A');
    ee = this.cambiaChar(ee, '@', '%40');
    ee = this.cambiaChar(ee, '=', '%3D');
    ee = this.cambiaChar(ee, '&', '%26');
    ee = this.cambiaChar(ee, '$', '%24');

    return ee;
  }

  prendeSoloDatiValidi(s) {
    let ss = s;

    let a1 = ss.indexOf('<string');
    if (a1 > -1) {
      ss = ss.substring(a1, ss.length);
      a1 = ss.indexOf('>');
      if (a1 > -1) {
        ss = ss.substring(a1 + 1, ss.length);
        a1 = ss.indexOf('</string>');
        if (a1 > -1) {
          ss = ss.substring(0, a1);
        }
      }
    }

    ss = this.cambiaChar(ss, '&amp;', '&');
    ss = this.cambiaChar(ss, '&lt;', '<');
    ss = this.cambiaChar(ss, '&gt;', '>');
    ss = this.cambiaChar(ss, '&num;', '#');
    ss = this.cambiaChar(ss, '&lcub; &lbrace;', '{');
    ss = this.cambiaChar(ss, '&lcub;', '{');
    ss = this.cambiaChar(ss, '&lbrace;', '{');
    ss = this.cambiaChar(ss, '&lcub;&lbrace;', '{');
    ss = this.cambiaChar(ss, '&rcub; &rbrace;', '}');
    ss = this.cambiaChar(ss, '&rcub;', '}');
    ss = this.cambiaChar(ss, '&rbrace;', '}');
    ss = this.cambiaChar(ss, '&rcub;&rbrace;', '}');
    ss = this.cambiaChar(ss, '&verbar;', '|');
    ss = this.cambiaChar(ss, '&vert;', '|');
    ss = this.cambiaChar(ss, '&VerticalLine;', '|');
    ss = this.cambiaChar(ss, '&bsol;', '\\');
    ss = this.cambiaChar(ss, '&circ;', '^');
    ss = this.cambiaChar(ss, '&tilde;', '~');
    ss = this.cambiaChar(ss, '&lsqb;', '[');
    ss = this.cambiaChar(ss, '&lbrack;', '[');
    ss = this.cambiaChar(ss, '&rsqb;', ']');
    ss = this.cambiaChar(ss, '&rbrack;', ']');
    ss = this.cambiaChar(ss, '&grave;', '`');
    ss = this.cambiaChar(ss, '&semi;', ';');
    ss = this.cambiaChar(ss, '&sol;', '/');
    ss = this.cambiaChar(ss, '&quest;', '?');
    ss = this.cambiaChar(ss, '&colon;', ':');
    ss = this.cambiaChar(ss, '&commat;', '@');
    ss = this.cambiaChar(ss, '&equals;', '=');
    ss = this.cambiaChar(ss, '&dollar;', '$');

    return ss;
  }

  RitornaSuccessivoMultimedia(t, idTipologia, Categoria, Filtro, Random) {
    const url = this.urlWS + '/RitornaSuccessivoMultimediaNuovo?' +
      'idTipologia=' + idTipologia + '&' +
      'Categoria=' + Categoria + '&' +
      'Filtro=' + Filtro + '&' +
      'Random=' + Random
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RitornaMultimediaDaID(t, idTipologia, idCategoria, idMultimedia, rilevaUguali) {
    const SoloCategoria = 'S';

    const url = this.urlWS + '/RitornaMultimediaDaId?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'rilevaUguali=' + rilevaUguali + '&' +
      'UgualiSoloCategoria=' + SoloCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RitornaInformazioniConversione(t) {
    const url = this.urlWS + '/RitornaInformazioniConversione'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  FinisceConversioneVideo(t, idTipologia, idCategoria, idMultimedia, SoloRitorno) {
    const url = this.urlWS + '/FinisceConversioneVideo?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'SoloRitorno=' + SoloRitorno
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RitornaQuantiPreferiti(t, idTipologia, idCategoria) {
    const url = this.urlWS + '/RitornaQuantiPreferiti?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria 
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  EliminaMultimediaDaID(t, idTipologia, idCategoria, idMultimedia) {
    const url = this.urlWS + '/EliminaMultimediaDaId?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RitornaInformazioniVideo(t, idTipologia, idCategoria, idMultimedia, Refresh) {
    const url = this.urlWS + '/RitornaInformazioniVideo?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'Refresh=' + Refresh
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RefreshInfoVideoTutti(t, Refresh) {
    const url = this.urlWS + '/RefreshTutteInformazioniVideo?' +
      'ForzaRefresh=' + Refresh
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  ConverteVideo(t, idTipologia, idCategoria, idMultimedia) {
    const url = this.urlWS + '/ConverteVideo?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'DaWeb=S'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  BloccaConvertiTuttiIVideo(t) {
    const url = this.urlWS + '/BloccaConvertiTuttiIVideo'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  ConvertiTuttiIVideo(t) {
    const url = this.urlWS + '/ConvertiTuttiIVideo'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  ImpostaPreferito(t, idTipologia, idCategoria, idMultimedia, SiNo, Protetto) {
    const url = this.urlWS + '/ImpostaPreferito?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'SiNo=' + SiNo + '&' +
      'Protetto=' + Protetto
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  ContaFiles(t, idTipologia) {
    const url = this.urlWS + '/RitornaQuantiFiles?' +
      'idTipologia=' + idTipologia 
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  RefreshArchivio(t, idTipologia, Categoria, EseguiSoloTest) {
    const url = this.urlWS + '/RitornaFilesNuovo?idTipologia=' + idTipologia + '&Categoria=' + Categoria + '&sEseguiSoloTest=' + EseguiSoloTest
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }  

  ContaRigheDuranteRefresh(t) {
    const url = this.urlWS + '/ContaRigheDuranteRefresh'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }  

  private catchAuthError() {
    // console.log('Errore: ', self);
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      /* console.log('ERRORE Http: ', res);
      if (res.status === 401 || res.status === 403) {
        const currentUrl = this._router.url;
        // if not authenticated
        if (currentUrl === '/login') {
          // todo: aggiungere un messaggio di errore
          console.log('Login failed');
        } else {
          if (localStorage) {
            localStorage.clear();
          }

          if (Utils.userRedirect === 'default') {
            const doveURL = Utils.urlRoot + 'login/';
            // alert(doveURL);
            // const url2 = this.sanitizer.bypassSecurityTrustUrl(doveURL) as string;
            // console.log(url2);
            // const ww = window.open(doveURL, '_blank');
            location.assign(doveURL);
          } else {
            location.assign(Utils.userRedirect);
          }
        }
      } */

      return observableThrowError(res);
    };
  }

  StaEseguendoRefresh(t) {
    const url = this.urlWS + '/StaEseguendoRefresh'
      ;
    // console.log(url);
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }  

  RitornaGriglia(t, idTipologia, Lista, Quante, Filtro) {
    const url = this.urlWS + '/RitornaMultimediaPerGriglia?' +
      'QuanteImm=' + Quante + '&' +
      'Categoria=' + Lista + '&' +
      'idTipologia=' + idTipologia + '&' +
      'Filtro=' + Filtro
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  SalvaMultimediaID(t, Progressivo, idTipologia, idCategoria, idMultimedia, Descrizione) {
    const url = this.urlWS + '/SalvaMultimediaID?' +
      'Progressivo=' + Progressivo + '&' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'Descrizione=' + Descrizione
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  CaricaMultimediaID(t, Progressivo) {
    const url = this.urlWS + '/CaricaMultimediaID?' +
      'Progressivo=' + Progressivo
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  EliminaMultimediaID(t, Progressivo) {
    const url = this.urlWS + '/EliminaMultimediaID?' +
      'Progressivo=' + Progressivo
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  CaricaListaMultimediaID(t, idTipologia, idCategoria) {
    const url = this.urlWS + '/CaricaListaMultimediaID?' +
      'idTipologia=' + idTipologia + '&' +
      'Categoria=' + idCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  ImpostaSuccessivoMultimedia(t, idTipologia, idMultimedia) {
    const url = this.urlWS + '/ImpostaSuccessivoMultimedia?' +
      'idTipologia=' + idTipologia + '&' +
      'idMultimedia=' + idMultimedia
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  CalcolaHashTutteImmagini(t, idCategoria) {
    const url = this.urlWS + '/CalcolaHashTutteImmagini?' +
      'idCategoria=' + idCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  CalcolaHashImmagine(t, idCategoria, idMultimedia, Refresh) {
    const url = this.urlWS + '/CalcolaHashImmagine?' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'Refresh=' + Refresh + '&' +
      'NumeroImmagineConvertita=-2'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  BloccaRitornaInformazioniImmagini(t) {
    const url = this.urlWS + '/BloccaRitornaInformazioniImmagini'
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  TrovaImmaginiUguali(t, idCategoria, ricercaPerMetodo1, ricercaPerMetodo2, ricercaPerData, ricercaPerDimensioni, ricercaPerPunti, ricercaPerPuntiDiagonale,
                      ricercaPerPuntiCornice, ricercaPerPuntiCorpo, ricercaPerNomeUguale, ricercaPerPeso, ricercaPerStringa, 
                      stringaRicerca, QuanteImmagini, Inizio, AndOr, TutteLeCategorie, ricercaPerNegativo, ricercaPerEssenziale, ricercaPer1280,
                      caratteri, Ordinamento, ricercaPerHash) {
    const url = this.urlWS + '/TrovaImmaginiUguali?' +
      'idCategoria=' + idCategoria + '&' +
      'ricercaPerMetodo1=' + ricercaPerMetodo1 + '&' +
      'ricercaPerMetodo2=' + ricercaPerMetodo2 + '&' +
      'ricercaPerData=' + ricercaPerData + '&' +
      'ricercaPerDimensioni=' + ricercaPerDimensioni + '&' +
      'ricercaPerPunti=' + ricercaPerPunti + '&' +
      'ricercaPerPuntiDiagonale=' + ricercaPerPuntiDiagonale + '&' +
      'ricercaPerPuntiCornice=' + ricercaPerPuntiCornice + '&' +
      'ricercaPerPuntiCorpo=' + ricercaPerPuntiCorpo + '&' +
      'ricercaPerNomeUguale=' + ricercaPerNomeUguale + '&' +
      'ricercaPerPeso=' + ricercaPerPeso + '&' +
      'ricercaPerStringa=' + ricercaPerStringa + '&' +
      'stringaRicerca=' + stringaRicerca + '&' +
      'QuanteImmagini=' + QuanteImmagini + '&' +
      'Inizio=' + Inizio + '&' +
      'AndOr=' + AndOr + '&' +
      'TutteLeCategorie=' + TutteLeCategorie + '&' +
      'ricercaPerNegativo=' + ricercaPerNegativo + '&' +
      'ricercaPerEssenziale=' + ricercaPerEssenziale + '&' +
      'ricercaPer1280=' + ricercaPer1280 + '&' +
      'Caratteri=' + caratteri + '&' +
      'Ordinamento=' + Ordinamento + '&' +
      'ricercaPerHash=' + ricercaPerHash
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }  

  TrovaImmaginiPiccole(t, idCategoria, QuanteImmagini, Inizio, Dimensioni, Width, Height, TutteLeCategorie) {
    const url = this.urlWS + '/TrovaImmaginiPiccole?' +
      'idCategoria=' + idCategoria + '&' +
      'QuanteImmagini=' + QuanteImmagini + '&' +
      'Inizio=' + Inizio + '&' +
      'Dimensioni=' + Dimensioni + '&' +
      'Width=' + Width + '&' +
      'Height=' + Height + '&' +
      'TutteLeCategorie=' + TutteLeCategorie
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }  

  SpostaImmaginiPiccole(t, idCategoria, idMultimedia) {
    const url = this.urlWS + '/SpostaImmaginePiccole?' +
      'idCategoria=' + idCategoria + '&' +
      'idMultimedia=' + idMultimedia
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }

  RitornaCategorie(t, idTipologia) {
    const url = this.urlWS + '/RitornaCategorie?idTipologia=' + idTipologia
    ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }

  CalcolaPuntiniImmagine(t, idCategoria, Refresh) {
    const url = this.urlWS + '/CalcolaPuntiniImmagine2?' +
      'idCategoria=' + idCategoria + '&' +
      'Refresh=' + Refresh
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  PrendeExifImmagini(t, idCategoria, Refresh) {
    const url = this.urlWS + '/PrendeExifImmagini?' +
      'idCategoria=' + idCategoria + '&' +
      'Refresh=' + Refresh
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  RitornaInformazioni(t, idTipologia, idCategoria) {
    const url = this.urlWS + '/RitornaInformazioni?' +
      'idTipologia=' + idTipologia + '&' +
      'idCategoria=' + idCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    return ritorno;
  }

  CreaCategoria(t, idTipologia, NomeCategoria, Protetta, AggiuntaInutile, SottoCategoria) {
    const url = this.urlWS + '/CreaCategoria?' +
      'idTipologia=' + idTipologia + '&' +
      'NomeCategoria=' + NomeCategoria + '&' +
      'Protetta=' + Protetta + '&' +
      'AggiuntaInutile=' + AggiuntaInutile + '&' +
      'SottoCategoria=' + SottoCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  SpostaTuttiMultimediaACategoria(t, idTipologia, idMultimedia, idNuovaCategoria) {
    const url = this.urlWS + '/SpostaTuttiMultimediaACategoria?' +
      'idTipologia=' + idTipologia + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'idNuovaCategoria=' + idNuovaCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  SpostaMultimediaACategoria(t, idTipologia, idVecchiaCategoria, idMultimedia, idNuovaCategoria) {
    const url = this.urlWS + '/SpostaMultimediaACategoria?' +
      'idTipologia=' + idTipologia + '&' +
      'idVecchiaCategoria=' + idVecchiaCategoria + '&' +
      'idMultimedia=' + idMultimedia + '&' +
      'idNuovaCategoria=' + idNuovaCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  RitornaIDCategoria(t, idTipologia, NomeCategoria) {
    const url = this.urlWS + '/RitornaIDCategoria?' +
      'idTipologia=' + idTipologia + '&' +
      'Categoria=' + NomeCategoria
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  RitornaInformazioniCategorie(t, idTipologia) {
    const url = this.urlWS + '/RitornaInformazioniCategorie?' +
      'idTipologia=' + idTipologia 
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }

  SalvaRicerca(t, Stringa, AndOr, Pagina, DimeThumbs, NumeroRighe) {
    const url = this.urlWS + '/SalvaRicerca?' +
      'Stringa=' + Stringa + '&' +
      'AndOr=' + AndOr + '&' +
      'Pagina=' + Pagina + '&' +
      'DimeThumbs=' + DimeThumbs + '&' +
      'NumeroRighe=' + NumeroRighe
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  EliminaRicerca(t, Stringa) {
    const url = this.urlWS + '/EliminaRicerche?' +
      'Stringa=' + Stringa
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

  LeggeRicerche(t) {
    const url = this.urlWS + '/TornaRicerche'
      ;
    const ritorno = this.httpclient.get(t, url);
    // console.log('Chiamata', url);
    return ritorno;
  }  

}
