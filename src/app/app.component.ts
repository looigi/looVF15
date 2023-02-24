import { AfterViewInit, Component, ElementRef, getPlatform, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApiService } from './services/api.service';
import 'rxjs/Rx';
import { DomSanitizer, EventManager } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import { fromEvent } from "rxjs";
import * as Hammer from 'hammerjs';
import Utils from './Utility.component';
import { ExternalHttpClient } from './services/httpclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})

export class AppComponent implements OnInit, AfterViewInit {
  static meStesso = AppComponent;

  // @ViewChild("videoPlayer", { static: false }) videoplayer;
  @ViewChild("contenitore", { static: false }) Contenitore: ElementRef;
  @ViewChild("immagine", { static: false }) Immagine: ElementRef;

  EseguiSoloTest = true;
  questo = this;

  title = 'looVF';
  QuanteImmaginiPerGriglia = 50;
  sbloccataProtezione = false;
  debug = true;
  ceCordova = false;
  deviceGirante;
  menuCellulare = false;
  lastSwipe = -1;
  slideshowAzionato = false;
  slideshowTimer;
  secondiSS = 10;
  contatore = 0;
  modalitaRandomI = true;
  modalitaRandomV = true;
  visualizzataFinestraBottoniI = false;
  visualizzataFinestraBottoniV = false;
  InformazioniVideo = false;
  VideoConvertito = false;
  InformazioniVideoJson;
  utilityMostrate = false;
  ElaboraUtility = false;
  multimediaAttualeI = -1;
  idCategoriaAttualeI = -1;
  idTipologiaAttualeI = -1;
  categoriaAttualeI;
  multimediaAttualeV = -1;
  idCategoriaAttualeV = -1;
  idTipologiaAttualeV = -1;
  categoriaAttualeV;
  listaMultimediaId;
  listaMultimediaIdI;
  listaMultimediaIdV;
  idMultimediaMostrate = false;
  idTipologiaPerSceltaID = -1;
  idMultimediaModMostrate = false;
  DescrizioneIDM;
  IDM;
  idTipoMod;
  ProgressivoMod;
  avanzamentoConversioneMostrato = false;
  testoAvanzamentoConversione = '';
  listaIDSelezionata = '';
  IDSelezionato;
  infoImmagini = false;
  infoVideo = false;
  immaginiUguali;
  mascheraUguali = false;
  staCaricando = false;

  modalitaDoppia;

  hammertime;

  caricamentoInCorsoI = false;
  caricamentoInCorsoV = false;
  urlWS;
  pathWS;
  pathCC;
  pathPiccole;
  listaImmagini;
  listaAppoggioPerComponenti;
  listaVideo;
  pathThumb;
  Tipologia;
  categoriaTipologia;
  listaSelezionata;
  listaSelezionataVideo;
  lista;
  listaOrdinata;
  listaTasti;
  informazioniMM;
  informazioniMMI;
  informazioniMMV;
  pathImmagine;
  pathVideo;
  visualizzateI = new Array();
  visualizzateV = new Array();
  indiceV = 0;
  indiceI = 0;
  quantiFilesI = 0;
  quantiFilesV = 0;
  tipoVideo;
  FiltroImmagini = '';
  FiltroVideo = '';
  thumbsVideo;
  visualizzataIntestazione = false;
  opacitaLinguetta = .5;
  refreshInCorso = false;
  timeoutLetturaRighe;
  righeRilevate;
  durataVideo;
  griglia = true;

  testoScrollabileImmagine = '';
  testoScrollabileVideo = '';
  scrollTimer = undefined;
  posizioneCarattereI = 0;
  posizioneCarattereV = 0;
  lunghezzaCampoI = 0;
  lunghezzaCampoV = 0;

  strutturaGriglia;
  refreshGriglia = false;
  opacitaBarraI = 1;
  opacitaBarraV = 1;

  alive:boolean=true;
  result:string;
  visibileMM = true;

  mascheraVisibileDuplicati = false;
  mascheraVisibilePiccole = false;

  quantiPreferiti;
  quantiPreferitiProt;

  visualizzaInformazioni = false;
  informazioniImmagine;
  bloccaTimer = false;
  vecchieInformazioniVarie = '';

  creaCategoria = false;
  nomeNuovaCategoria = '';
  categoriaProtetta = false;
  spostaACategoria = false;
  aggiuntaInutile = false;
  sottoCategoria = false;
  listaSelezionataPerCreaCategoria;

  // idTipologiaSpostamento;
  idNuovaCategoria;
  listaSelezionataPerSpostamento;
  listaSelezionataPS = '';

  informazioniCategorieVisualizzate = false;
  informazioniCategorie = new Array();

  associazioneTastiCategorie = false;
  tastiConfigurati = [];
  listaSelezionataDaTasto = '';

  dimensioneImm;
  visualizzaTuttoSchermo = false;
  entratoInUnCampoTesto = false;

  impostazioniMostrate = false;
  spostamentoTablet = true;

  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log(event.code);
    if (this.entratoInUnCampoTesto === true) {
      return;
    }

    if (this.staCaricando === true) {
      return;
    }

    if (this.modalitaDoppia === false) {
      if (event.code === 'ArrowRight') { // } || event.code === 'Space') {
        if (this.modalitaDoppia === false && this.Tipologia == 'Immagini') {
          this.avantiMM(1);
        }
      }
      if (event.code === 'ArrowLeft') {
        if (this.modalitaDoppia === false && this.Tipologia == 'Immagini') {
          this.indietroMM(1);
        }
      }
      if (event.code.indexOf('Digit') > -1)  {
        const n = +event.code.replace('Digit', '');
        this.listaSelezionataPS = this.tastiConfigurati[n].Lista;
        setTimeout(() => {
          this.caricaIdPerListaCambiata(false);
        }, 100);
      }
      if (event.code === 'KeyS') {
        this.SpostaMultimediaAdAltraCategoria();
        setTimeout(() => {
          // this.avantiMM('SI');
        }, 1000);
      }
      if (event.code === 'KeyE') {
        if (this.modalitaDoppia === false && this.Tipologia === 'Immagini') {
          this.EliminaMultimedia(1);
          setTimeout(() => {
            // this.avantiMM('SI');
          }, 1000);
        }
      }
      if (event.code === 'KeyP') {
        if (this.informazioniMMI.Preferito === false) {
          this.impostaPreferito(1, 'S');
          this.informazioniMMI.Preferito = true;
        } else {
          if (confirm('Il multimedia è già tra i preferiti.\nSi vuole togliere ?')) {
            this.impostaPreferito(1, 'N');
            this.informazioniMMI.Preferito = false;
          }
        }
      }
    }
  }

  constructor(
    private http: HttpClient,
    protected sanitizer: DomSanitizer,
    private apiService: ApiService,
    private Utils: Utils
  ) {
    function onBackKeyDown(t) {
      if (confirm('Chiudo l\'applicazione ?')) {
        t.pathImmagine = '';
        t.pathVideo = '';
        t.visibileMM = false;
        setTimeout(() => {
          navigator['app'].exitApp();
        }, 1000);
      }
    }    
    document.addEventListener("backbutton",  onBackKeyDown.bind(this), false);
    
    const tc = localStorage.getItem('tastiConfigurati');
    this.tastiConfigurati = new Array();
    if (tc === null) {
      for (let i = 0; i <= 9; i++) {
        const t = {
          idTasto: i,
          Lista: ''
        }
        this.tastiConfigurati.push(t);
      }
    } else {
      const t = tc.split(';');
      let i = 0;
      t.forEach(element => {
        if (element && element !== '') {
          const tt = {
            idTasto: i,
            Lista: element
          }
          this.tastiConfigurati.push(tt);
        } else {
          const tt = {
            idTasto: i,
            Lista: ''
          }
          this.tastiConfigurati.push(tt);
        }
        i++;
      });
    }

    this.Tipologia = localStorage.getItem('Tipologia');
    this.FiltroImmagini = localStorage.getItem('FiltroI');
    if (this.FiltroImmagini === null) { this.FiltroImmagini = ''; }
    this.FiltroVideo = localStorage.getItem('FiltroV');
    if (this.FiltroVideo === null) { this.FiltroVideo = ''; }
    
    const atc = localStorage.getItem('associazioneTastiCategorie');
    this.associazioneTastiCategorie = (atc === 'S' ? true : false);
    
    const est = localStorage.getItem('eseguiSoloTest');
    this.EseguiSoloTest = (est === 'S' ? true : false);

    const st = localStorage.getItem('spostamentoTablet');
    this.spostamentoTablet = (st === 'S' ? true : false);

    const mu = localStorage.getItem('mascheraUguali');
    this.mascheraUguali = (mu === 'S' ? true : false);

    const vts = localStorage.getItem('visualizzaTuttoSchermo');
    this.visualizzaTuttoSchermo = (vts === 'S' ? true : false);

    const vi = localStorage.getItem('VisualizzatIntestazione');
    this.visualizzataIntestazione = (vi === 'S' ? true : false);
    
    const sc = localStorage.getItem('spostaACategoria');
    this.spostaACategoria = (sc === 'S' ? true : false);

    let qi = localStorage.getItem('QuanteImmaginiGriglia');
    if (qi === null) { qi = '50'; }
    this.QuanteImmaginiPerGriglia = +qi;

    const md = localStorage.getItem('ModalitaDoppia');
    this.modalitaDoppia = (md === 'S' ? true : false);

    if (this.ceCordova === false) {
      this.opacitaBarraI = .2;
      this.opacitaBarraV = .2;
    } else {
      this.opacitaBarraI = 1;
      this.opacitaBarraV = 1;
    }

    const g = localStorage.getItem('Griglia');
    this.griglia = (g === 'S' ? true : false);

    const vin = localStorage.getItem('VisualizzaInformazioni');
    this.visualizzaInformazioni = (vin === 'S' ? true : false);
    // // console.log('Visualizza Informazioni', this.visualizzaInformazioni);
    if (this.visualizzaInformazioni === true) {
      setTimeout(() => {
        this.caricaInformazioni();
      }, 5000);
    }

    const r = localStorage.getItem('RandomI');
    this.modalitaRandomI = (r === 'S' ? true : false);

    const rr = localStorage.getItem('RandomV');
    this.modalitaRandomV = (rr === 'S' ? true : false);

    const bI = localStorage.getItem('ApreBottoniI');
    this.visualizzataFinestraBottoniI = (bI === 'S' ? true : false);

    const bV = localStorage.getItem('ApreBottoniV');
    this.visualizzataFinestraBottoniV = (bV === 'S' ? true : false);

    this.caricamentoTipologie();

    setTimeout(() => {
      const idI = localStorage.getItem('idCategoriaAttualeI');
      this.idCategoriaAttualeI = +idI;
  
      const idV = localStorage.getItem('idCategoriaAttualeV');
      this.idCategoriaAttualeV = +idV;        
    }, 1000);
  }

  caricamentoTipologie() {
    this.caricamentoInCorsoI = true;
    this.caricamentoInCorsoV = true;
    this.http.get('assets/config.json').subscribe(d => {
      // const data2 = JSON.parse(data);
      // console.log(d);
      // const d =  {pathWS: '', pathCC: '', pathPiccole: ''}; // JSON.parse(data);
      this.urlWS = d['pathWS'] + 'looVF.asmx';
      this.pathWS = d['pathWS'];
      this.pathCC = d['pathCC'];
      this.pathPiccole = d['pathPiccole'];
      this.apiService.impostaUrlWS(this.urlWS);

      this.controllaSeStaEseguendoRefresh();

      this.leggeCategorieVideo();
      this.leggeCategorieImmagini();

      this.getPercorsoThumb().subscribe(data => {
        this.pathThumb = data; // ._body;

        const a = this.pathThumb.indexOf('CartelleCondivise');
        this.pathThumb = this.pathThumb.substring(a + 17, this.pathThumb.length);
        this.pathThumb = this.pathCC + '/' + this.pathThumb;
        // // console.log(this.pathThumb);
      }, error => {
        alert('Lettura percorso Thumb. ERRORE: ' + JSON.stringify(error._body));
      });

      let q = 0;
      const t = setInterval(() => {
        if (this.listaImmagini  && this.listaVideo && this.urlWS && (this.listaSelezionata || this.listaSelezionataVideo)) {
          this.caricamentoInCorsoI = false;
          this.caricamentoInCorsoV = false;

          clearInterval(t);

          const tip = localStorage.getItem('Tipologia');
          if (tip !== null) {
            this.Tipologia = tip;
          } else {
            this.Tipologia = 'Immagini';
          }
          this.cambiaLista(this.Tipologia);

          setTimeout(() => {
            if (this.griglia === true) {
              this.refreshGriglia = true;
              this.caricaGriglia();
            } else {
              if (this.Tipologia === 'Immagini' || this.modalitaDoppia === true) {
                const mm = localStorage.getItem('UltimoMMI');
                if (mm !== null) {
                  this.informazioniMMI = JSON.parse(mm);
                  // console.log('Informazioni MMi', this.informazioniMMI);
                  this.multimediaAttualeI = this.informazioniMMI.idMultimedia;
                  this.idCategoriaAttualeI = this.informazioniMMI.idCategoria;
                  this.idTipologiaAttualeI = 1;
                  this.CaricaListaMultimediaID(1, this.idCategoriaAttualeI);

                  const lis = localStorage.getItem('ListaIDSelezionataImmagine');
                  if (lis !== null) {
                    this.listaIDSelezionata = lis;
                  }

                  this.visualizzaMM(1, '');
                  const iu = localStorage.getItem('ImmaginiUguali');
                  if (iu !== null) {
                    this.immaginiUguali = JSON.parse(iu);
                  }

                  this.ritornaNumeroPreferiti(this.idTipologiaAttualeI, this.idCategoriaAttualeI);
                } else {
                  // console.log('Carico multimedia I');
                  this.caricaMultimedia();
                }
              } 

              if (this.Tipologia !== 'Immagini' || this.modalitaDoppia === true) {
                const mm = localStorage.getItem('UltimoMMV');
                if (mm !== null) {
                  this.informazioniMMV = JSON.parse(mm);
                  // console.log('Informazioni MMv', this.informazioniMMV);
                  this.multimediaAttualeV = this.informazioniMMV.idMultimedia;
                  this.idCategoriaAttualeV = this.informazioniMMV.idCategoria;
                  this.idTipologiaAttualeV = 2;
                  this.CaricaListaMultimediaID(2, this.idCategoriaAttualeV);

                  this.ritornaNumeroPreferiti(this.idTipologiaAttualeV, this.idCategoriaAttualeV);

                  this.apiService.RitornaInformazioniVideo(this, 2, this.informazioniMMV.idCategoria, this.informazioniMMV.idMultimedia, 'N')
                  .map(response => response)
                    .subscribe(
                      data => {
                        if (data) {
                          const data2 = this.apiService.prendeSoloDatiValidi(data);
            
                          // alert('Avanti 7: ' + data);
                          if (data2.indexOf('ERROR') === -1) {
                            // console.log('Informazioni MMV:', this.informazioniMMV);

                            const campi = data2.split(';');
                            const convertito = campi[0];
                            // // console.log('Informazioni JSON:', campi[1]);
                            /* campi[1] = campi[1].replace('"{"', '{"');
                            campi[1] = campi[1].replace('"}"', '}"');
                            campi[1] = campi[1].replace('"{"', '{"');
                            campi[1] = campi[1].replace('"}"', '}"'); */

                            const jsone = JSON.parse(campi[1]);
                            // console.log('Informazioni JSON:', jsone);
                            this.VideoConvertito = false; // convertito === 'S' ? true : false;

                            this.InformazioniVideoJson = undefined;

                            if (jsone.streams) {
                              jsone.streams.forEach(element => {
                                if (element.codec_type === 'video') {
                                  // console.log('Rilevato codec video', element);
                                  if (element.codec_name === 'h264') {
                                    // console.log('Rilevato codec video h264');
                                    this.VideoConvertito = true; // convertito === 'S' ? true : false;
                                  }
                                }
                              });
                              // console.log(jsone.streams[0])

                              const jjj = new Array();
                              const jj = { Titolo: 'Convertito', Valori: [{ Nome: 'Convertito', Valore: convertito }]};
                              jjj.push(jj);

                              let quale = 0;
                              jsone.streams.forEach(element => {
                                let stringa = JSON.stringify(element);
                                stringa = stringa.replace('{', '');
                                stringa = stringa.replace('}', '');
                                const campi = stringa.split(',');
                                // // console.log(campi);
                                const j = new Array();

                                campi.forEach(element2 => {
                                  const campi2 = element2.split(':');
                                  const nome = campi2[0].replace('"', '').replace('"', '');
                                  const valore = campi2[1].replace('"', '').replace('"', '');

                                  const jj = { Nome: nome, Valore: valore };
                                  j.push(jj);
                                });
                                jjj.push({ Titolo: 'Stream ' + quale, Valori: j});
                                quale++;
                              });
                              // console.log(jjj);
                              this.InformazioniVideoJson = jjj;
                            } else {
                              this.VideoConvertito = true;
                            }

                            this.visualizzaMM(2, '');
                          }
                        }
                  });

                } else {
                  // console.log('Carico multimedia V');
                  this.caricaMultimedia();
                }
              }
            }
          }, 500);
        } else {
          q++;
          if (q > 5) {
            this.caricamentoInCorsoI = false;
            this.caricamentoInCorsoV = false;
            alert('Problemi di lettura rete');
            clearInterval(t);
          }
        }
      }, 1000);
    }, error => {
      alert('Lettura file JSON. ERRORE: ' + JSON.stringify(error._body));
    });
  }

  leggeCategorieVideo() {
    this.listaVideo = new Array();
    this.getListaVideo().subscribe(data => {
      // console.log('Letta lista video', data);
      
      const l = data.split('§');
      const ccc = new Array();
      /* const cc = {
        Tipologia: 'Video',
        NomeLista: 'Tutto',
        PathLista: '',
        Protetta: false,
      }
      ccc.push(cc); */
      l.forEach(element => {
        if (element && element !== '') {
          const c = element.split(';');
          let nomeLista = c[0];
          while (nomeLista.indexOf('\n') > -1) {
            nomeLista = nomeLista.replace('\n', '');
          }
          while (nomeLista.indexOf('\r') > -1) {
            nomeLista = nomeLista.replace('\r', '');
          }

          // console.log('Paths: ', c[1]);

          const cc = {
            Tipologia: 'Video',
            NomeLista: nomeLista,
            PathLista: c[1],
            Protetta: c[2] === 'N' ? false : true,
          }
          let ok = true;
          if (this.sbloccataProtezione === false) {
            if (cc.Protetta === true) {
              ok = false;
            }
          }
          if (ok) {
            ccc.push(cc);
          }
        }
      });

      if (this.sbloccataProtezione === true) {
        const cc = {
          Tipologia: 'Video',
          NomeLista: 'Preferiti Prot',
          PathLista: '',
          Protetta: true,
        }
        ccc.push(cc);
      }

      const cc2 = {
        Tipologia: 'Video',
        NomeLista: 'Preferiti',
        PathLista: '',
        Protetta: true,
      }
      ccc.push(cc2);

      if (this.sbloccataProtezione === true) {
        const cc = {
          Tipologia: 'Immagini',
          NomeLista: 'Tutto',
          PathLista: '',
          Protetta: true,
        }
        ccc.push(cc);
      }

      this.listaVideo = JSON.parse(JSON.stringify(ccc));
      this.listaVideo.sort((a, b) => { return a.NomeLista > b.NomeLista ? 1 : -1; });
      // console.log(this.listaVideo);

      this.selezionaUltimaLista();
    }, error => {
      alert('Letta lista video. ERRORE: ' + JSON.stringify(error._body));
    });
  }

  leggeCategorieImmagini() {
    this.listaImmagini = new Array();
    this.apiService.RitornaCategorie(this, 1)
    .map(response => response)
    .subscribe(
      data2 => {
        const data = this.apiService.prendeSoloDatiValidi(data2);

        if (data.indexOf('ERROR:') === -1) {
          // console.log('Letta lista immagini', data);

          const l = data.split('§');
          const ccc = new Array();
          /* const cc = {
            Tipologia: 'Immagini',
            NomeLista: 'Tutto',
            PathLista: '',
            Protetta: false,
          }
          ccc.push(cc); */
          l.forEach(element => {
            if (element && element !== '') {
              const c = element.split(';');
              // 1;1;Foto Nostre;N;§
              let nomeLista = c[2];
              while (nomeLista.indexOf('\n') > -1) {
                nomeLista = nomeLista.replace('\n', '');
              }
              while (nomeLista.indexOf('\r') > -1) {
                nomeLista = nomeLista.replace('\r', '');
              }
              // console.log('Paths: ', c[5]);
              const cc = {
                Tipologia: 'Immagini',
                NomeLista: nomeLista,
                PathLista: c[5],
                Protetta: c[3] === 'N' ? false : true,
                QuanteAggiunte: +c[4],
                AggiuntaInutile: c[5],
                CategoriaMadre: +c[6]
              }
              let ok = true;
              if (this.sbloccataProtezione === false) {
                if (cc.Protetta === true) {
                  ok = false;
                }
              }
              if (ok) {
                ccc.push(cc);
              }
            }
          });

          if (this.sbloccataProtezione === true) {
            const cc = {
              Tipologia: 'Immagini',
              NomeLista: 'Preferiti Prot',
              PathLista: '',
              Protetta: true,
            }
            ccc.push(cc);
          }

          const cc2 = {
            Tipologia: 'Immagini',
            NomeLista: 'Preferiti',
            PathLista: '',
            Protetta: true,
          }
          ccc.push(cc2);

          if (this.sbloccataProtezione === true) {
            const cc = {
              Tipologia: 'Immagini',
              NomeLista: 'Tutto',
              PathLista: '',
              Protetta: true,
            }
            ccc.push(cc);
          }

          this.listaImmagini = JSON.parse(JSON.stringify(ccc));
          this.listaAppoggioPerComponenti = JSON.parse(JSON.stringify(ccc));
          // this.listaImmagini.sort((a, b) => { return a.NomeLista > b.NomeLista ? 1 : -1; });
          console.log(this.listaAppoggioPerComponenti);

          this.selezionaUltimaLista();
        } else {
          alert(data);
        }
    }); // , error => {
    //   alert('Letta lista immagini. ERRORE: ' + JSON.stringify(error._body));
    // });
  }

  ritornaNumeroPreferiti(idTipo, idCategoria) {
    this.apiService.RitornaQuantiPreferiti(this, idTipo, idCategoria)
    .map(response => response)
    .subscribe(
      data => {
        if (data) {
          const data2 = this.apiService.prendeSoloDatiValidi(data);
          const d = data2.split(';');
          this.quantiPreferiti = +d[0];
          this.quantiPreferitiProt = +d[1];
        }
    });
  }

  scale = 100;
  pinchScale = 0;
  deltaX = 0;
  deltaY = 0;
  doubleTap;
  last_scale;
  doubleTaps = 0;

  ngAfterViewInit(): void {
    if (this.Immagine && this.modalitaDoppia === false) {
      this.hammerIt(this, this.Immagine.nativeElement);
    }

    /* var mc = new Hammer.Manager(this.Immagine.nativeElement, {
      recognizers: [
        // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
        [Hammer.Pinch, { enable: true }],
        // [Hammer.Pan, { enable: true }],
        [Hammer.Swipe,{ enable: true, direction: Hammer.DIRECTION_HORIZONTAL }],
      ]
    });
    mc.set({ enable: true }); QUI */

    /* mc.get('doubletap');
    mc.on("doubletap", this.onDoubleTap.bind(null, this)); */

    /* mc.get('pinch');
    mc.on("pinch", this.onPinch.bind(null, this)); QUI */

    /* mc.get('pinchend');
    mc.on("pinchend", this.onPinchEnd.bind(null, this));

    mc.get('pan');
    mc.on('pan', this.onPan.bind(null, this)); */

    /* mc.get('swipe');
    mc.on("swipe", this.onSwipe.bind(null, this)); QUI */
  }

  selezionaUltimaLista() {
    setTimeout(() => {
      // console.log('Seleziono lista', this.Tipologia);
      if (this.modalitaDoppia === true) {
        // console.log('Combo immagini:', this.listaImmagini, this.listaImmagini.length);
        if (this.listaImmagini && this.listaImmagini.length > 0) {
          const prima = localStorage.getItem('ListaSelezionataI');
          // console.log('Cambio lista immagine:', prima);
          this.listaSelezionata = prima;
          if (this.listaSelezionata === null) { this.listaSelezionata = ''; }
        }

        const lv = localStorage.getItem('ListaSelezionataV');
        if (lv !== null) {
          this.listaSelezionataVideo = lv;
        } else {
          this.listaSelezionataVideo = 'Filmacci';
        }
      } else {
        if (this.Tipologia === 'Immagini') {
          // console.log('Combo immagini:', this.listaImmagini, this.listaImmagini.length);
          if (this.listaImmagini && this.listaImmagini.length > 0) {
            const prima = localStorage.getItem('ListaSelezionataI');
            // console.log('Cambio lista immagine:', prima);
            this.listaSelezionata = prima;
            if (this.listaSelezionata === null) { this.listaSelezionata = ''; }
          }
        } else {
          // console.log('Combo video:', this.listaVideo, this.listaVideo.length);
          if (this.listaVideo && this.listaVideo.length > 0) {
            const prima = localStorage.getItem('ListaSelezionataV')
            this.listaSelezionataVideo = prima;
            // console.log('Cambio lista immagine:', prima);
            if (this.listaSelezionataVideo === null) { this.listaSelezionataVideo = ''; }
          }
        }
      }
    }, 100);
  }

  controllaSeStaEseguendoRefresh() {
    this.apiService.StaEseguendoRefresh(this)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);
            const c = data2.split(';');
            
            if (!c[3]) { c[3] = 'S'; }

            // console.log('Controllo su refresh', c);

            if (c[0].indexOf('NON ') === -1) {
              this.refreshInCorso = true;
              this.impostaLetturaRighe();
            }

            if (c[1] === 'S' && c[3] === 'N') {
              // Sta convertendo un video, apro la schermatina
              this.caricamentoInCorsoV = true;
              this.vecchieInformazioni = new Array();
              this.vecchiaScritta = '';
              this.staConvertendo = true;

              if (!this.informazioniMMV) {
                const mm = localStorage.getItem('UltimoMMV');
                if (mm !== null) {
                  this.informazioniMMV = JSON.parse(mm);
                }
              }
              // console.log('Sta convertendo video', this.informazioniMMV);

              this.RitornaInformazioniConversione();
            }

            if (c[2] !== '') {
              const rinominaVideoConvertiti = c[2];
              // console.log(rinominaVideoConvertiti);
            }

            this.conversioneAutomaticaInCorso = false;
            if (c[3] === 'S') {
              this.conversioneAutomaticaInCorso = true;
            }

            this.conversioneAutomaticaInCorsoI = false;
            if (c[4] === 'S') {
              this.conversioneAutomaticaInCorsoI = true;
            }
          }
    });
  }

  HTTPOptions: Object = {
    responseType: 'text'
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/config.json')
    .catch(this.catchAuthError());
  }

  public getListaImmagini(): Observable<any> {
    return this.http.get(this.pathWS + 'PercorsiImmagini.txt?d=' + new Date(),  this.HTTPOptions)
    .catch(this.catchAuthError());
  }

  public getListaVideo(): Observable<any> {
    return this.http.get(this.pathWS + 'PercorsiVideo.txt?d=' + new Date(),  this.HTTPOptions)
    .catch(this.catchAuthError());
  }

  public getPercorsoThumb(): Observable<any> {
    return this.http.get(this.pathWS + 'PercorsoThumbs.txt',  this.HTTPOptions)
    .catch(this.catchAuthError());
  }

  public getAvanzamentoConversione(): Observable<any> {
    return this.http.get(this.pathWS + '/Logs/ConversioneAutomatica.txt?d=' + new Date(),  this.HTTPOptions)
    .catch(this.catchAuthError());
  }

  public getAvanzamentoConversioneI(): Observable<any> {
    return this.http.get(this.pathWS + '/Logs/RitornaInformazioniImmagine.txt?d=' + new Date(),  this.HTTPOptions)
    .catch(this.catchAuthError());
  }

  private catchAuthError() {
    // // console.log('Errore: ', self);
    // we have to pass HttpService's own instance here as `self`
    return (res) => {
      // console.error('ERRORE Http: ' + res.body);

      return observableThrowError(res);
    };
  }

  ngOnInit() {
    if(window['cordova']){
      this.ceCordova = true;
    } else {
      this.ceCordova = false;
    }
    // this.ceCordova = true;

    const pathApp = document.URL;
    if (pathApp.indexOf( 'http://' ) === -1 && pathApp.indexOf( 'https://' ) === -1) {
      this.deviceGirante = 'Android';
    } else {
      this.deviceGirante = 'Web Page';
    }
  }

  modificataComboImmagini() {
    if (this.listaSelezionata && this.listaSelezionata !== '') {
      this.listaIDSelezionata = '';
      this.multimediaAttualeI = 1;
      
      this.impostaSuccessivoMultimedia(1, 1);

      if (this.modalitaDoppia === false) {
        // // console.log('Cambio lista', this.listaSelezionata, this.listaImmagini);
        if (this.Tipologia === 'Immagini') {
          localStorage.setItem('ListaSelezionataI', this.listaSelezionata);
        } else {
          localStorage.setItem('ListaSelezionataV', this.listaSelezionata);
        }

        this.CaricaListaMultimediaID(1, this.listaSelezionata);
      } else {
        this.CaricaListaMultimediaID(1, this.listaSelezionata);
      }
    }
  }

  modificataComboVideo() {
    if (this.listaSelezionataVideo && this.listaSelezionataVideo !== '') {
      // console.log('Cambio lista', this.listaSelezionataVideo);
      localStorage.setItem('ListaSelezionataV2', this.listaSelezionataVideo);
      
      this.CaricaListaMultimediaID(2, this.listaSelezionataVideo);
    }
  }

  cambiaLista(e) {
    // alert('Tipologia selezionata: ' + e);
    setTimeout(() => {
      this.Tipologia = e;

      // // console.log('CAMBIO LISTA', this.Tipologia);
      localStorage.setItem('Tipologia', this.Tipologia);
      if (this.Tipologia === 'Immagini' || this.modalitaDoppia === true) {
        this.lista = JSON.parse(JSON.stringify(this.listaImmagini));
        this.listaOrdinata = JSON.parse(JSON.stringify(this.lista));
        this.listaOrdinata.sort((a, b) => { return a.NomeLista > b.NomeLista ? 1 : -1; });

        this.listaTasti = JSON.parse(JSON.stringify(this.listaImmagini));
        this.listaTasti.push({
          NomeLista: "",
          PathLista: "",
          Protetta: false,
          Tipologia: "Immagini"
        });

        let primo = true;
        this.lista.forEach(element => {
          element['RigaDispari'] = primo;
          primo = !primo;
        });
        // console.log(this.lista);

        this.listaSelezionata = localStorage.getItem('ListaSelezionataI');

        if (this.informazioniMMI && this.informazioniMMI.length > 0) {
          this.informazioniMM = this.informazioniMMI[this.informazioniMMI.length - 1];
        } else {
          const mm = localStorage.getItem('UltimoMMI');
          if (mm !== null) {
            this.informazioniMM = JSON.parse(mm);
          } else {
            this.informazioniMM = undefined;
          }
        }
        this.informazioniMMI = this.informazioniMM;
      }

      if (this.Tipologia !== 'Immagini' || this.modalitaDoppia === true) {
        if (this.modalitaDoppia === false) {
          this.lista = JSON.parse(JSON.stringify(this.listaVideo));
          this.listaOrdinata = JSON.parse(JSON.stringify(this.lista));
          this.listaOrdinata.sort((a, b) => { return a.NomeLista > b.NomeLista ? 1 : -1; });

          this.listaTasti = JSON.parse(JSON.stringify(this.listaVideo));
          this.listaTasti.push({
            NomeLista: "",
            PathLista: "",
            Protetta: false,
            Tipologia: "Immagini"
          });

          let primo = true;
          this.lista.forEach(element => {
            element['RigaDispari'] = primo;
            primo = !primo;
          });
  
          this.listaSelezionata = localStorage.getItem('ListaSelezionataV');
        // } else {
        //   this.lista = JSON.parse(JSON.stringify(this.listaVideo));
        }

        if (this.informazioniMMV && this.informazioniMMV.length > 0) {
          this.informazioniMM = this.informazioniMMV[this.informazioniMMV.length - 1];
        } else {
          const mm = localStorage.getItem('UltimoMMV');
          if (mm !== null) {
            this.informazioniMM = JSON.parse(mm);
          } else {
            this.informazioniMM = undefined;
          }
        }
        this.informazioniMMV = this.informazioniMM;
      }

      if (this.modalitaDoppia === true) {
        this.visualizzaMM(1, '');
        this.visualizzaMM(2, '');
      } else {
        const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;

        this.visualizzaMM(idTipologia, '');
      }

      setTimeout(() => {
        if (this.Immagine && this.modalitaDoppia === false) {
          this.hammerIt(this, this.Immagine.nativeElement);
        }
      }, 1000);
  
      this.contaFiles();
    }, 100);
  }

  contaFiles() {
    const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;

    this.apiService.ContaFiles(this, idTipologia)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);
            if (data2.indexOf('ERROR') === -1) {
              if (idTipologia === 1) {
                this.quantiFilesI = data2;
              } else {
                this.quantiFilesV = data2;
              }
            } else {
              alert(data2);
            }
          }
    });
  }

  caricaGriglia() {
    if (this.refreshInCorso === true) {
      return;
    }
    if (this.refreshGriglia === false) {
      this.disegnaGriglia();
      return;
    }
    const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;
    // const Quante = 30;

    this.strutturaGriglia = new Array();

    this.caricamentoInCorsoI = true;
    this.apiService.RitornaGriglia(this, idTipologia, this.listaSelezionata, this.QuanteImmaginiPerGriglia, this.FiltroImmagini)
    .map(response => response)
    .subscribe(
      data => {
        if (data) {
          const data2 = this.apiService.prendeSoloDatiValidi(data);
          if (data2.indexOf('ERROR') === -1) {
            // // console.log(data2);
            const cc = data2.split('§');
            const strutt = new Array();
            cc.forEach(element => {
              if (element && element !== '') {
                const c = element.split(';');
                const thumb = c[0];
                let percorso = c[1]; // .split(';');

                while (percorso.indexOf('***PV***') > -1) {
                  percorso = percorso.replace('***PV***', ';');
                }
                const n = percorso.split('/');
                const nomeMM = n[n.length - 1];
                const cartellaMM = n[n.length - 2];

                if (idTipologia === 1) {
                  // console.log('Lista selezionata per griglia', this.listaSelezionata);
                  let pathImmagine;
                  if (this.listaSelezionata === 'Piccole') {
                    pathImmagine = this.pathPiccole + '/' + this.listaSelezionata + '/' + percorso; // + '?d=' + new Date();
                  } else {
                    pathImmagine = this.pathCC + '/' + this.listaSelezionata + '/' + percorso; // + '?d=' + new Date();
                  }

                  while (pathImmagine.indexOf('***PV***') > -1) {
                    pathImmagine = pathImmagine.replace('***PV***', ';');
                  }
            
                  const i = {
                    Path: percorso,
                    Cartella: cartellaMM,
                    Nome: nomeMM,
                    Dimensioni: +c[2],
                    DataFile: c[3],
                    idCategoria: +c[4],
                    idMultimedia: +c[5],
                    PercorsoCompleto: pathImmagine
                  }
                  strutt.push(i);
                } 

                if (idTipologia === 2) {
                  let pathVideo = this.pathCC + '/' + percorso; // + '?d=' + new Date();
                  if (pathVideo.indexOf(this.listaSelezionata) === -1) {
                    pathVideo = this.pathCC + '/' + this.listaSelezionata + '/' + percorso; // + '?d=' + new Date();        
                  }
                  while (pathVideo.indexOf('***PV***') > -1) {
                    pathVideo = this.pathVideo.replace('***PV***', ';');
                  }
                  
                  let thumbsVideo = this.pathThumb + '/' + thumb; //  + '?d=' + new Date();
                  while (thumbsVideo.indexOf('***PV***') > -1) {
                    thumbsVideo = thumbsVideo.replace('***PV***', ';');
                  }
                  // // console.log(this.thumbsVideo);
            
                  const v = {
                    Path: percorso,
                    Cartella: cartellaMM,
                    Nome: nomeMM,
                    Dimensioni: +c[2],
                    DataFile: c[3],
                    idCategoria: +c[4],
                    idMultimedia: +c[5],
                    Thumb: thumb,
                    PercorsoCompleto: thumbsVideo,
                  }
                  strutt.push(v);
                }
              }
            });
            // console.log(strutt);
            this.strutturaGriglia = strutt;
            this.caricamentoInCorsoI = false;

            this.disegnaGriglia();
        } else {
          this.caricamentoInCorsoI = false;
          alert(data);
        }
      }
    });
  }

  esceDaFiltroImmagini() {
    setTimeout(() => {
      localStorage.setItem('FiltroI', this.FiltroImmagini);
    }, 100);
  }

  esceDaFiltroVideo() {
    setTimeout(() => {
      localStorage.setItem('FiltroV', this.FiltroVideo);
    }, 100);
  }

  caricaMultimedia() {
    let idTipologia;
    let filtro;

    if (this.Tipologia === 'Immagini') {
      idTipologia = 1;
      filtro = this.FiltroImmagini;
    } else {
      idTipologia = 2;  
      filtro = this.FiltroVideo;
    }

    /* if (idTipologia === 1) {
      if (this.modalitaDoppia == true) {
        // idTipologia = 1;
        filtro = this.FiltroImmagini;
      } else {
        if (this.Tipologia === 'Immagini') {
          // idTipologia = 1;
          filtro = this.FiltroImmagini;
        } else {
          // idTipologia = 2;  
          filtro = this.FiltroVideo;
        }
      }
    } else {
      if (idTipologia === 2) {
        // idTipologia = 2;  
        filtro = this.FiltroVideo;
      } else {
        // idTipologia = idTipologia;
        if (idTipologia === 1) {
          filtro = this.FiltroImmagini;
        } else {
          filtro = this.FiltroVideo;
        }
      }
    } */
    // alert('Id tipologia in carica multimedia: ' + idTipologia + '\nBarra a sinistra: ' + idTipologia + '\nDoppia: ' + this.modalitaDoppia);

    if (idTipologia === 1) {
      this.indiceI++;
    } 
    if (idTipologia === 2) {
      // this.videoplayer.nativeElement.pause();
      this.indiceV++;
    }

    // // console.log(this.griglia);
    if (this.griglia === true) {
      this.caricaGriglia();
    }
    if (this.refreshInCorso === true) {
      return;
    }
    localStorage.setItem('FiltroV', this.FiltroVideo);

    let listaSelezionata = this.listaSelezionata;
    if (this.modalitaDoppia === true) {
      if (idTipologia === 2) {
        listaSelezionata = this.listaSelezionataVideo;
      }
    }
    if (listaSelezionata.indexOf('/') > -1) {
      const l = listaSelezionata.split('/');
      listaSelezionata = l[1];
    }
    // alert('Avanti 3');
    let Random;
    
    if (idTipologia === 1) {
      this.caricamentoInCorsoI = true;
      Random = this.modalitaRandomI === true ? 'S' : 'N';
    } else {
      this.caricamentoInCorsoV = true;
      Random = this.modalitaRandomV === true ? 'S' : 'N';
    }

    // this.pathImmagine = 'assets/immagini/icons/please_wait.gif';

    // console.log('Carica multimedia', idTipologia, listaSelezionata, filtro, Random);
    this.staCaricando = true;
    this.apiService.RitornaSuccessivoMultimedia(this, idTipologia, listaSelezionata, filtro, Random)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);
            if (data2.indexOf('ERROR') === -1) {
              // console.log(data2);
              // alert('Avanti 4: ' + data2);
              this.prendeMultiMediaDaID(idTipologia, data2);
            } else {
              this.staCaricando = false;
              if (idTipologia === 1) {
                this.caricamentoInCorsoI = false;
              } else {
                this.caricamentoInCorsoV = false;
              }

              alert(data2);
            }
          } else {
            this.staCaricando = false;
            // alert('Avanti 5');
            if (idTipologia === 1) {
              this.caricamentoInCorsoI = false;
            } else {
              this.caricamentoInCorsoV = false;
            }

          }
    });
  }

  caricaMultimediaID(idTipo) {
    let id;
    if (idTipo === 1) {
      if (this.idCategoriaAttualeI === -1) {
        if (this.informazioniMMI) {
          // console.log('ID Categoria immagini vuota. La imposto dall\'ultima', this.informazioniMMI);
          this.idCategoriaAttualeI = this.informazioniMMI.idCategoria;
        } else {
          alert('ID Categoria Immagini = -1');
        }
      }
      id = this.multimediaAttualeI + ';' + this.idCategoriaAttualeI + ';' + this.quantiFilesI + ';' + this.categoriaAttualeI;
    } else {
      if (this.idCategoriaAttualeI === -1) {
        if (this.informazioniMMV) {
          // console.log('ID Categoria video vuota. La imposto dall\'ultima', this.informazioniMMV);
          this.idCategoriaAttualeV = this.informazioniMMV.idCategoria;
        } else {
          alert('ID Categoria Video = -1');
        }
      }
      id = this.multimediaAttualeV + ';' + this.idCategoriaAttualeV + ';' + this.quantiFilesV + ';' + this.categoriaAttualeV;
    }
    this.prendeMultiMediaDaID(idTipo, id);

    this.impostaSuccessivoMultimedia(idTipo, id);
  }
  
  prendeMultiMediaDaID(idTipologia, id) {
    const i = id.split(';');
    const idMultimedia = i[0];
    const idCategoria = i[1];
    const categoria = i[3];
    const Ultimo = i[4];
    const Inizio = i[5];
    // const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;

    // alert('Avanti 6: ' + idMultimedia);

    if (idTipologia === 1) {
      this.idCategoriaAttualeI = idCategoria;
      this.idTipologiaAttualeI = idTipologia;
      this.multimediaAttualeI = idMultimedia;
      this.categoriaAttualeI = categoria;
      this.quantiFilesI = +i[2];
    } else {
      this.idCategoriaAttualeV = idCategoria;
      this.idTipologiaAttualeV = idTipologia;
      this.multimediaAttualeV = idMultimedia;
      this.categoriaAttualeV = categoria;
      this.quantiFilesV = +i[2];
    }

    // console.log('Prende multimedia da id', id);
    // console.log('idTipologia ', idTipologia);
    // console.log('idCategoria ', idCategoria);
    // console.log('idMultimedia ', idMultimedia);
    // console.log('Ultimo ', Ultimo);
    // console.log('Inizio ', Inizio);

    if (idMultimedia > -1) {
      // console.log('Ritorna MM da ID', idTipologia, idCategoria, idMultimedia);
      this.apiService.RitornaMultimediaDaID(this, idTipologia, idCategoria, idMultimedia, this.mascheraUguali === true ? 'S' : 'N')
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
              const data22 = this.apiService.prendeSoloDatiValidi(data);
              // console.log(data2);

              let data2 = data22;
              let uguali = '';

              if (data22.indexOf('|') > -1) {
                const data222 = data22.split('|');
                data2 = data222[0];
                uguali = data222[1];
              }

              this.immaginiUguali = undefined;
              if (uguali !== '') {
                this.immaginiUguali = new Array();

                const ugu = uguali.split('§');
                const ugua = new Array();
                ugu.forEach(element => {
                  if (element) {
                    const ugu2 = element.split(';');

                    let percorso = ugu2[1];
                    while (percorso.indexOf('***PV***') > -1) {
                      percorso = percorso.replace('***PV***', ';');
                    }
                    let pathLista = ugu2[0];
                    const a = pathLista.indexOf('CartelleCondivise');
                    pathLista = pathLista.substring(a + 17, pathLista.length);
          
                    const pathImmagine = this.pathCC + '/' + pathLista + '/' + percorso;

                    const ugu3 = {
                      idMultimedia: +ugu2[2],
                      PathImmagine: pathImmagine,
                      NomeFile: ugu2[1],
                      idCategoria: +ugu2[3]
                    };
                    ugua.push(ugu3);
                  }
                });

                setTimeout(() => {
                  this.immaginiUguali = ugua;

                  console.log('Uguali: ', ugua);                    
                }, 1000);
              }
              if (this.immaginiUguali) {
                localStorage.setItem('ImmaginiUguali', JSON.stringify(this.immaginiUguali));
              } else {
                localStorage.removeItem('ImmaginiUguali');
              }

              let filePresente = false;
              if (this.Tipologia === 'Immagini') {
                const d = data2.split(';');
                if (d[11] === 'S') { 
                  filePresente = true; 
                } else {
                  if (data2.indexOf('Nessun file') === -1) {
                    // alert(data2);
                    data2 += 'Nessun file';
                  }
                }
                console.log('Avanti 7: ', d, d[11]);
              } else {
                filePresente = true;
              }

              if (data2.indexOf('ERROR') === -1 && data2.toUpperCase().indexOf('THUMBS.DB') === -1 && filePresente === true) { //
                // §Yeah/20210901_173915.jpg;1388746;09/04/2021 18:56:46;3;34587;
                const c = data2.split('§');
                const thumb = c[0];
                // // console.log(thumb);
                const dati = c[1].split(';');
                let percorso = dati[0];
                while (percorso.indexOf('***PV***') > -1) {
                  percorso = percorso.replace('***PV***', ';');
                }
                const n = percorso.split('/');
                const nomeMM = n[n.length - 1];
                const cartellaMM = n[n.length - 2];

                // alert('Avanti 8');
                if (idTipologia === 1) {
                  this.informazioniMMI = {
                    Path: percorso,
                    Cartella: cartellaMM,
                    Nome: nomeMM,
                    Dimensioni: +dati[1],
                    DataFile: dati[2],
                    idCategoria: +dati[3],
                    idMultimedia: +dati[4],
                    Preferito: dati[5] === 'S' ? true : false,
                    Hash: dati[6],
                    Punti: +dati[7],
                    Width: +dati[8],
                    Height: +dati[9],
                    DataOra: dati[10]
                  }
                  // console.log('Informazioni MMI:', this.informazioniMMI);
                  // this.IDM = idMultimedia;

                  this.caricamentoInCorsoI = false;

                  // alert('Avanti 9');
                  this.visualizzaMM(idTipologia, categoria);
  
                  // // console.log(this.informazioniMM, this.pathImmagine);  
                } else {
                  let js = undefined;
                  try {
                    js = JSON.parse(dati[6]);
                  } catch (e) {

                  }
                  this.informazioniMMV = {
                    Path: percorso,
                    Cartella: cartellaMM,
                    Nome: nomeMM,
                    Dimensioni: +dati[1],
                    DataFile: dati[2],
                    idCategoria: +dati[3],
                    idMultimedia: +dati[4],
                    Thumb: thumb,
                    Preferito: dati[5] === 'S' ? true : false,
                    Jsone: js
                  }
                  // console.log('Informazioni MMV:', this.informazioniMMV);
                  // this.IDM = idMultimedia;

                  this.apiService.RitornaInformazioniVideo(this, idTipologia, idCategoria, idMultimedia, 'N')
                  .map(response => response)
                    .subscribe(
                      data => {
                        if (data) {
                          const data2 = this.apiService.prendeSoloDatiValidi(data);
            
                          // alert('Avanti 7: ' + data);
                          if (data2.indexOf('ERROR') === -1) {
                            // console.log('Informazioni MMV:', this.informazioniMMV);

                            const campi = data2.split(';');
                            const convertito = campi[0];
                            const jsone = JSON.parse(campi[1]);
                            // console.log('Informazioni JSON:', jsone);
                            this.VideoConvertito = false; // convertito === 'S' ? true : false;

                            this.InformazioniVideoJson = undefined;

                            if (jsone.streams) {
                              jsone.streams.forEach(element => {
                                if (element.codec_type === 'video') {
                                  // console.log('Rilevato codec video', element);
                                  if (element.codec_name === 'h264') {
                                    // console.log('Rilevato codec video h264');
                                    this.VideoConvertito = true; // convertito === 'S' ? true : false;
                                  }
                                }
                              });
                              // console.log(jsone.streams[0])

                              const jjj = new Array();
                              const jj = { Titolo: 'Convertito', Valori: [{ Nome: 'Convertito', Valore: convertito }]};
                              jjj.push(jj);

                              let quale = 0;
                              jsone.streams.forEach(element => {
                                let stringa = JSON.stringify(element);
                                stringa = stringa.replace('{', '');
                                stringa = stringa.replace('}', '');
                                const campi = stringa.split(',');
                                // // console.log(campi);
                                const j = new Array();

                                campi.forEach(element2 => {
                                  const campi2 = element2.split(':');
                                  const nome = campi2[0].replace('"', '').replace('"', '');
                                  const valore = campi2[1].replace('"', '').replace('"', '');

                                  const jj = { Nome: nome, Valore: valore };
                                  j.push(jj);
                                });
                                jjj.push({ Titolo: 'Stream ' + quale, Valori: j});
                                quale++;
                              });
                              // console.log(jjj);
                              this.InformazioniVideoJson = jjj;

                              this.caricamentoInCorsoV = false;
                          
                              // alert('Avanti 9');
                              this.visualizzaMM(idTipologia, categoria);
              
                              // // console.log(this.informazioniMM, this.pathImmagine);
                            } else {
                              this.VideoConvertito = true;
                            }
                          }
                        }
                  });            
                }
                this.staCaricando = false;
              } else {
                this.staCaricando = false;
                if (idTipologia === 1) {
                  this.caricamentoInCorsoI = false;
                } else {
                  this.caricamentoInCorsoV = false;
                }
                this.dimensioneImm = '300px 300px';
                this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';

                if (data2.indexOf('Nessun file') === -1) {
                  alert(data2);
                } else {
                  console.log('Nessun file... Carico il prossimo')
                  setTimeout(() => {
                    this.avantiMM(idTipologia);
                  }, 100);
                }
              }
            } else {
              this.staCaricando = false;
              if (idTipologia === 1) {
                this.caricamentoInCorsoI = false;
              } else {
                this.caricamentoInCorsoV = false;
              }
              this.dimensioneImm = '300px 300px';
              this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';
            }
      });
    } else {
      this.staCaricando = false;
      this.informazioniMM = undefined;

      if (idTipologia === 1) {
        this.caricamentoInCorsoI = false;
      } else {
        this.caricamentoInCorsoV = false;
      }

      alert('Nessun multimedia rilevato');
    }
  }

  visualizzaMM(idTipologia, categoria) {
    // if (!this.pathCC || !this.informazioniMMI || !this.informazioniMMV) {
    //   return;
    // }

    // const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;
    // const idTipologia = idTipologia2 === '' ? 1 : 2;
    
    let listona = this.listaSelezionata;

    if (this.listaSelezionata === 'Preferiti' || this.listaSelezionata === 'Preferiti Prot' || this.listaSelezionata === 'Tutto') {
      listona = categoria;
    } else {
      /* if (this.modalitaDoppia === true) {
        if (idTipologia === 1) {
          listona = this.listaSelezionata; // localStorage.getItem('ListaSelezionataI');
        } else {
          listona = this.listaSelezionataVideo; // localStorage.getItem('ListaSelezionataV');
        }
      } else { */
        if (idTipologia === 1) {
          if (!this.listaSelezionata) {
            const li = localStorage.getItem('ListaSelezionataI');
            if (li !== null) {
              this.listaSelezionata = li;
            } else {
              this.listaSelezionata = 'Fotacce';
            }    
          }
          listona = this.listaSelezionata; // localStorage.getItem('ListaSelezionataI');
        } else {
          if (!this.listaSelezionataVideo) {
            const lv = localStorage.getItem('ListaSelezionataV');
            if (lv !== null) {
              this.listaSelezionataVideo = lv;
            } else {
              this.listaSelezionataVideo = 'Filmacci';
            }    
          }
          listona = this.listaSelezionataVideo; // localStorage.getItem('ListaSelezionataV');
        }
      // }
    }

    console.log('Visualizza MM. Lista Selezionata Immagini: ', this.listaSelezionata);
    console.log('Visualizza MM. Lista Selezionata Video: ', this.listaSelezionataVideo);
    console.log('Visualizza MM. Tipologia: ', idTipologia);
    console.log('Visualizza MM. Listona da ricercare: ', listona);

    let lista;

    if (idTipologia === 1) {
      // listona = localStorage.getItem('ListaSelezionataI');
      lista = JSON.parse(JSON.stringify(this.listaImmagini));
    } else {
      // listona = this.listaSelezionataVideo; // localStorage.getItem('ListaSelezionataV');
      lista = JSON.parse(JSON.stringify(this.listaVideo));
    }
    console.log('Visualizza MM. Lista in cui ricercare: ', lista);

    let path = '';
    lista.forEach(element => {
      if (element.NomeLista === listona) {
        path = element.PathLista;
        // console.log('Visualizza MM. Path di ricerca: ', path);
        if (path) {
          const a = path.indexOf('CartelleCondivise');
          path = path.substring(a + 17, path.length);
        }
      }
    });

    if (!path || path === '') {
      return;
    }

    console.log('Visualizza MM. IdTipologia: ', idTipologia);
    console.log('Visualizza MM. Lista in cui ricercare: ', lista)
    console.log('Visualizza MM. Categoria: ', categoria)
    console.log('Visualizza MM. Path: ', path);

    if (idTipologia === 1) {
      // console.log('Visualizza MM. idMultimedia Immagine: ', this.informazioniMMI.idMultimedia);
      if (this.informazioniMMI && this.informazioniMMI.idMultimedia > -1) {
        this.multimediaAttualeI = this.informazioniMMI.idMultimedia;
        this.IDM = this.informazioniMMI.idMultimedia;
        this.idTipologiaPerSceltaID = 1;
        
        this.dimensioneImm = this.prendeDimensioniImmagine(this.informazioniMMI);
      }
    } else {
      // console.log('Visualizza MM. idMultimedia Video: ', this.informazioniMMV.idMultimedia);
      if (this.informazioniMMV.idMultimedia > -1) {
        this.multimediaAttualeV = this.informazioniMMV.idMultimedia;
        this.IDM = this.informazioniMMV.idMultimedia;
        this.idTipologiaPerSceltaID = 2;
      }
    }
    // this.idMultimedia = this.IDM;
    // console.log('Visualizza MM. IDM: ', this.IDM);

    if (path === '') {
      // console.log('Esco per path vuoto.');
      return;
    }

    // alert('Avanti 10');
    /* // console.log(this.pathCC);
    // console.log(path);
    // console.log(this.informazioniMMI.Path); */

    let idMM;

    let pImm;

    if (idTipologia === 1 && this.informazioniMMI) {
      // console.log('Visualizza MM. Lista Selezionata: ', this.listaSelezionata);
      if (this.listaSelezionata === 'Piccole') {
        pImm = this.pathPiccole + '/Fotacce/' + this.informazioniMMI.Path; // + '?d=' + new Date();
        // console.log('Path Piccole', this.pathPiccole);
      } else {
        pImm = this.pathCC + path + '/' + this.informazioniMMI.Path; // + '?d=' + new Date();
        // console.log('Path CC', this.pathCC);
      }

      while (pImm.indexOf('***PV***') > -1) {
        pImm = pImm.replace('***PV***', ';');
      }

      // this.Utils.immagineControllata = false;
      this.Utils.controllaImmagine(this, pImm).then((Ritorno) => {
      // const t = setInterval(() => {
      //   if (this.Utils.immagineControllata === true) {
      //     clearInterval(t);
      
          // // console.log('Controllo immagine: ', this.Utils.ritornoControlloImmagine);
        // if (this.Utils.ritornoControlloImmagine.indexOf('ERROR') > -1) {
          if (Ritorno === 'ERROR') {
            this.dimensioneImm = '300px 300px';
            this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';
          } else {
            this.pathImmagine = pImm + '?d=' + new Date();
          }
          // console.log('Path', path);
          // console.log('Path immagine', this.pathImmagine);
    
          if (this.indiceI >= this.visualizzateI.length) {
            this.visualizzateI.push(this.informazioniMMI);
          }
          localStorage.setItem('UltimoMMI', JSON.stringify(this.informazioniMMI));
          this.informazioniMM = this.informazioniMMI;
          idMM = this.informazioniMM.idMultimedia;
    
          const testoScrollabile = this.informazioniMM.Cartella + '/' + this.informazioniMM.Nome + ' Dimens.: ' + 
            this.informazioniMM.Dimensioni + ' Data: ' + this.informazioniMM.DataFile;
          this.scrollaTesto(idTipologia, 'txtInformazioniI', testoScrollabile);
      //   }
      // }, 100);
      });
    } 

    if (idTipologia === 2 && this.informazioniMMV) {
      let pathVideo = this.pathCC + path + '/' + this.informazioniMMV.Path; // + '?d=' + new Date();

      let listaSelezionata = this.listaSelezionata;
      if (this.modalitaDoppia === true) {
        listaSelezionata = this.listaSelezionataVideo;
      }
      if (pathVideo.indexOf(listaSelezionata) === -1) {
        pathVideo = this.pathCC + path + '/' + listaSelezionata + '/' + this.informazioniMMV.Path; // + '?d=' + new Date();        
      }
      while (pathVideo.indexOf('***PV***') > -1) {
        pathVideo = this.pathVideo.replace('***PV***', ';');
      }
      this.pathVideo = pathVideo; // this.sanitizer.bypassSecurityTrustUrl(pathVideo);
      // console.log(this.pathVideo);

      this.thumbsVideo = this.pathThumb + '/' + this.informazioniMMV.Thumb; //  + '?d=' + new Date();
      while (this.thumbsVideo.indexOf('***PV***') > -1) {
        this.thumbsVideo = this.thumbsVideo.replace('***PV***', ';');
      }
      // // console.log(this.thumbsVideo);

      const e = this.informazioniMMV.Path.split('.');
      const este = e[e.length -1].toUpperCase().trim();
      switch (este) {
        case 'MP4':
          this.tipoVideo = 'video/mp4';
          break;
        case 'AVI':
          this.tipoVideo = 'video/x-msvideo';
          break;
        default:
          this.tipoVideo = '';
      }

      /* const v = this.videoplayer.nativeElement;
      v.addEventListener("loadedmetadata", function(e) {
        // this.durataVideo = e.timeStamp;
        // console.log('Durata Video:', e.target['duration']);
      }, false); */
   
      if (this.indiceV >= this.visualizzateV.length) {
        this.visualizzateV.push(this.informazioniMMV);
      }
      localStorage.setItem('UltimoMMV', JSON.stringify(this.informazioniMMV));
      this.informazioniMM = this.informazioniMMV;

      idMM = this.informazioniMMV.idMultimedia;
      const testoScrollabile = this.informazioniMM.Cartella + '/' + this.informazioniMM.Nome + ' Dimens.: ' + 
        this.informazioniMM.Dimensioni + ' Data: ' + this.informazioniMM.DataFile;
      this.scrollaTesto(idTipologia, 'txtInformazioniV', testoScrollabile);
    }

    // alert('Avanti 11');
    // // console.log(testoScrollabile);

    if (this.ceCordova === false) {
      this.opacitaBarraV = .2;
      this.opacitaBarraI = .2;
    } else {
      this.opacitaBarraV = 1;
      this.opacitaBarraI = 1;
    }

    /* setTimeout(() => {
      if (this.Immagine) {
        this.hammerIt(this, this.Immagine.nativeElement);
      }
    }, 1000); */

    // alert('Avanti 12');

    if (this.slideshowAzionato === true) {
      this.timerSlideShow();
    }
  }

  avantiMM(daDove) {
    if (this.refreshInCorso === true) {
      return;
    }

    // alert('Avanti 2');
    this.caricaMultimedia();

    if (this.visualizzaInformazioni && this.vecchieInformazioniVarie) {
      let idTipologia;

      if (this.modalitaDoppia == true) {
        idTipologia = -1;
      } else {
        if (this.Tipologia === 'Immagini') {
          idTipologia = 1;
        } else {
          idTipologia = 2;  
        }
      }

      this.creaArrayInformazioni(this.vecchieInformazioniVarie, idTipologia);
    }
  }

  indietroMM(idTipologia) {
    console.log('Indietro', this.refreshInCorso);
    if (this.refreshInCorso === true) {
      return;
    }

    // let idTipologia;

    if (idTipologia === 1) {
      if (this.modalitaDoppia == true) {
        idTipologia = 1;
      } else {
        if (this.Tipologia === 'Immagini') {
          idTipologia = 1;
        } else {
          idTipologia = 2;  
        }
      }
    } else {
      if (idTipologia === 2) {
        idTipologia = 2;  
      } else {
        idTipologia = idTipologia;
      }
    }

    console.log('Indietro', idTipologia, this.indiceI, this.indiceV);

    let idMM;
    let inizioI = this.indiceI;
    let inizioV = this.indiceV;

    if (+idTipologia === 1) {
      if (this.indiceI > 0) {
        let ok = false;
        while (ok === false) {
          this.indiceI--;
          this.informazioniMMI = this.visualizzateI[this.indiceI];
          if (this.informazioniMMI || this.indiceI === 0) {
            ok = true;
          }
        }
        if (this.informazioniMMI) {
          idMM = this.informazioniMMI.idMultimedia;

          console.log('Indietro immagine', this.indiceI, idMM, this.informazioniMMI);
          this.visualizzaMM(idTipologia, '');
          // console.log('Informazioni immagine per indietro', this.informazioniMMI);
        } else {
          console.log('Non ho trovato multimedia immagini andando indietro', inizioI, this.visualizzateI);
        }
      }
    } else {
      if (this.indiceV > 0) {
        // this.videoplayer.nativeElement.pause();
        let ok = false;
        while (ok === false) {
          this.indiceV--;
          this.informazioniMMV = this.visualizzateV[this.indiceV];
          if (this.informazioniMMV || this.indiceV === 0) {
            ok = true;
          }
        }
        if (this.informazioniMMI) {
          idMM = this.informazioniMMI.idMultimedia;
          // console.log('Informazioni immagine per indietro', this.informazioniMMI);

          console.log('Indietro video', this.indiceV, idMM, this.informazioniMMV);
          this.visualizzaMM(idTipologia, '');
        } else {
          console.log('Non ho trovato multimedia video andando indietro', inizioV, this.visualizzateV);
        }
      }
    }

    this.impostaSuccessivoMultimedia(idTipologia, idMM);

    if (this.visualizzaInformazioni && this.vecchieInformazioniVarie) {
      if (this.modalitaDoppia == true) {
        this.creaArrayInformazioni(this.vecchieInformazioniVarie, -1);
      } else {
        this.creaArrayInformazioni(this.vecchieInformazioniVarie, idTipologia);
      }
    }
  }

  impostaSuccessivoMultimedia(idTipologia, idMM) {
    this.apiService.ImpostaSuccessivoMultimedia(
      this, 
      idTipologia,
      idMM
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
            } else {
              alert(data2);
            }
          }
    });     

  }
  
  scrollaTesto(idTipologia, cosa, campo) {
    if (campo !== '') {
      const t = document.getElementById(cosa);
      // // console.log(t);
      if (t && t !== null) {
        const lungh = +t.offsetWidth;
        const fs1 = t.style.fontSize;
        let fs;
        if (fs1 && fs1 !== null && fs1.indexOf('px') > -1) {
          fs = +(fs1.replace('px', ''));
        } else {
          fs = 14;
        }
        const caratteri = Math.round(lungh / (fs * .5));

        if (campo.length > caratteri) {
          for (let i = 0; i <= (caratteri / 2); i++) {
            campo = ' ' + campo;
            campo += ' ';
          }

          if (idTipologia === 1) {
            this.lunghezzaCampoI = campo.length;
            this.posizioneCarattereI = 0
          } else {
            this.lunghezzaCampoV = campo.length;
            this.posizioneCarattereV = 0
          }

          /* // console.log('Lunghezza campo: ', lungh);
          // console.log('Dimensione font: ', fs);
          // console.log('Caratteri: ', caratteri);
          // console.log('Scritta: >>>' + campo + '<<<');
          // console.log('Lunghezza Scritta: ' + campo.length); */

          if (idTipologia === 1) {
            this.testoScrollabileImmagine = campo.substring(this.posizioneCarattereI, this.posizioneCarattereI + caratteri);
          } else {
            this.testoScrollabileVideo = campo.substring(this.posizioneCarattereV, this.posizioneCarattereV + caratteri);
          }

          if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
            this.scrollTimer = undefined;
          }
          this.scrollTimer = setInterval(() => {
            if (idTipologia === 1) {
              this.posizioneCarattereI++;
              if (this.posizioneCarattereI > this.lunghezzaCampoI) {
                this.posizioneCarattereI = 0;
              }
            } else {
              this.posizioneCarattereV++;
              if (this.posizioneCarattereV > this.lunghezzaCampoV) {
                this.posizioneCarattereV = 0;
              }
            }

            if (idTipologia === 1) {
              this.testoScrollabileImmagine = campo.substring(this.posizioneCarattereI, this.posizioneCarattereI + caratteri);
            } else {
              this.testoScrollabileVideo = campo.substring(this.posizioneCarattereV, this.posizioneCarattereV + caratteri);
            }
              // // console.log(this.posizioneCarattere, caratteri, this.testoScrollabile);
          }, 100);
        } else {
          // // console.log('Campo più corto del div: ', campo);
          if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
            this.scrollTimer = undefined;
          }

          if (idTipologia === 1) {
            this.testoScrollabileImmagine = campo;
          } else {
            this.testoScrollabileImmagine = campo;
          }
        }
      } else {
        // // console.log('Non rilevato div');
        if (this.scrollTimer) {
          clearInterval(this.scrollTimer);
          this.scrollTimer = undefined;
        }

        if (idTipologia === 1) {
          this.testoScrollabileImmagine = campo;
        } else {
          this.testoScrollabileImmagine = campo;
        }
      }
    } else {
      // // console.log('Campo vuoto');
      if (this.scrollTimer) {
        clearInterval(this.scrollTimer);
        this.scrollTimer = undefined;
      }
  
      if (idTipologia === 1) {
        this.testoScrollabileImmagine = '';
      } else {
        this.testoScrollabileImmagine = '';
      }
    }
  }

  apreChiudeMenu() {
    this.visualizzataIntestazione = !this.visualizzataIntestazione;
    if (this.ceCordova === false) {
      this.opacitaBarraI = .2;
      this.opacitaBarraV = .2;
    } else {
      this.opacitaBarraI = 1;
      this.opacitaBarraV = 1;
    }
    localStorage.setItem('VisualizzatIntestazione', this.visualizzataIntestazione === true ? 'S' : 'N');
  }

  settaOpacitaLinguetta(v) {
    this.opacitaLinguetta = v;
    // // console.log(v);
  }

  impostaLetturaRighe() {
    if (this.timeoutLetturaRighe) {
      clearInterval(this.timeoutLetturaRighe);
      this.timeoutLetturaRighe = undefined;
    }
    this.timeoutLetturaRighe = setInterval(() => {
      this.apiService.ContaRigheDuranteRefresh(this)
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
              const data2 = this.apiService.prendeSoloDatiValidi(data);
              if (data2.indexOf('ERROR') === -1) {
                this.righeRilevate = data2;
              } else {
                // console.log(data2);
              }
            }
      });
    }, 30000, 30000)
  }

  refreshArchivio() {
    if (this.refreshInCorso === true) {
      return;
    }

    let selezione = this.listaSelezionata;
    const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;

    if (!confirm('Si vuole elaborare soltanto la categoria \'' + selezione + '\'?\n\nRispondere ANNULLA elaborerà tutte le categorie')) {
      selezione = '';
    }

    if (confirm('L\'elaborazione durerà molto tempo.\nSi vuole proseguire ?')) {
      this.refreshInCorso = true;

      if (idTipologia === 1) {
        this.caricamentoInCorsoI = true;
      } else {
        this.caricamentoInCorsoV = true;
      }

      this.impostaLetturaRighe();

      this.apiService.RefreshArchivio(this, idTipologia, selezione, this.EseguiSoloTest === true ? 'S' : 'N')
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
              const data2 = this.apiService.prendeSoloDatiValidi(data);
              if (data2.indexOf('ERROR') === -1) {
                clearInterval(this.timeoutLetturaRighe);
                this.timeoutLetturaRighe = undefined;
                this.refreshInCorso = false;

                if (this.modalitaDoppia === true) {
                  this.caricaMultimedia();
                  this.caricaMultimedia();
                } else {
                  const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;
            
                  this.caricaMultimedia();
                }
              } else {
                alert(data2);
              }
            } else {
              if (idTipologia === 1) {
                this.caricamentoInCorsoI = false;
              } else {
                this.caricamentoInCorsoV = false;
              }
            }
      });
    }
  }

  /* azionaVideo() {
    const v = this.videoplayer.nativeElement;

    if (v.paused) {
      v.play();
      setTimeout(() => {
        v.currentTime = "550.0";
        // console.log(v.currentTime);
        v.play();
      }, 2000);
    } else {
      v.pause();
    }
  } */

  impostaVisualizzaInformazioni() {
    setTimeout(() => {
      localStorage.setItem('VisualizzaInformazioni', this.visualizzaInformazioni === true ? 'S' : 'N');
      if (this.visualizzaInformazioni === true) {
        this.caricaInformazioni();
      } else {
        this.bloccaTimer = true;
      }
    }, 100);
  }

    impostaVisualizzaTuttoSchermo() {
    setTimeout(() => {
      localStorage.setItem('visualizzaTuttoSchermo', this.visualizzaTuttoSchermo === true ? 'S' : 'N');
    }, 100);
  }

  impostaVisualizzaCategoria() {
    setTimeout(() => {
      localStorage.setItem('spostaACategoria', this.spostaACategoria === true ? 'S' : 'N');
    }, 100);
  }

  impostaVisualizzaTasti() {
    setTimeout(() => {
      localStorage.setItem('associazioneTastiCategorie', this.associazioneTastiCategorie === true ? 'S' : 'N');
    }, 100);
  }

  impostaSoloTest() {
    setTimeout(() => {
      localStorage.setItem('eseguiSoloTest', this.EseguiSoloTest === true ? 'S' : 'N');
    }, 100);
  }

  impostaSpostamentoTablet() {
    setTimeout(() => {
      localStorage.setItem('spostamentoTablet', this.spostamentoTablet === true ? 'S' : 'N');
    }, 100);
  }

  impostaMascheraUguali() {
    setTimeout(() => {
      localStorage.setItem('mascheraUguali', this.mascheraUguali === true ? 'S' : 'N');
    }, 100);
  }

  impostaGriglia() {
    setTimeout(() => {
      if (this.Immagine && this.modalitaDoppia === false) {
        this.hammerIt(this, this.Immagine.nativeElement);
      }

      localStorage.setItem('Griglia', this.griglia === true ? 'S' : 'N');
      this.caricaGriglia();
    }, 100);
  }

  impostaRandomI(e) {
    setTimeout(() => {
      const c = e.srcElement.checked;
      this.modalitaRandomI = c;
      localStorage.setItem('RandomI', this.modalitaRandomI === true ? 'S' : 'N');
      // console.log(e);
    }, 100);
  }

  impostaRandomV(e) {
    setTimeout(() => {
      const c = e.srcElement.checked;
      this.modalitaRandomV = c;
      localStorage.setItem('RandomV', this.modalitaRandomV === true ? 'S' : 'N');
      // console.log(e);
    }, 100);
  }

  disegnaGriglia() {
    // console.log('Disegno griglia');

    this.refreshGriglia = false;
  }

  selezioneDaGriglia(i) {
    // console.log('Immagine selezionata da griglia:' ,i);    
    const idTipologia = this.Tipologia === 'Immagini' ? 1 : 2;
    if (idTipologia === 1) {
      this.informazioniMMI = i;
      this.multimediaAttualeI = i.idMultimedia;
      this.idCategoriaAttualeI = this.informazioniMMI.idCategoria;
    } else {
      this.informazioniMMV = i;
      this.multimediaAttualeV = i.idMultimedia;
      this.idCategoriaAttualeV = this.informazioniMMV.idCategoria;
    }
    this.griglia = false;

    this.apiService.ImpostaSuccessivoMultimedia(
      this, 
      idTipologia,
      i.idMultimedia
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              /* if (this.modalitaDoppia === true) {
                this.visualizzaMM(1, '');
                this.visualizzaMM(2, '');
              } else {
                this.visualizzaMM(idTipologia, '');
              } */

              setTimeout(() => {
                if (this.modalitaDoppia === false) {
                  this.hammerIt(this, this.Immagine.nativeElement);
                }
              }, 1000);

              this.caricaMultimediaID(idTipologia);
            } else {
              alert(data2);
            }
          }
    });     
  }

  rinfrescaGriglia() {
    this.refreshGriglia = true;
    this.caricaGriglia();
  }

  opacitaSiI() {
    if (this.ceCordova === true) {
      return;
    }

    this.opacitaBarraI = 1;
  }

  opacitaNoI() {
    if (this.ceCordova === true) {
      return;
    }

    this.opacitaBarraI = .2;
  }

  opacitaSiV() {
    if (this.ceCordova === true) {
      return;
    }

    this.opacitaBarraV = 1;
  }

  opacitaNoV() {
    if (this.ceCordova === true) {
      return;
    }

    this.opacitaBarraV = .2;
  }

  /* onSwipe(t, event) {
    // // console.log(event);
    // const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";
    // const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : "";
    // // console.log(x, y);
    if (event.offsetDirection === 2) {
      t.avantiMM();
    }
    if (event.offsetDirection === 4) {
      t.indietroMM();
    }
  }

  onDoubleTap(t, e) {
    this.doubleTaps++;
  }

  pinchone = '';

  onPinch(t, ev) {
    // // console.log(event);
    // t.pinchone = JSON.stringify(ev);
    t.pinchScale =  Math.max(.999, Math.min(this.last_scale * (ev.scale), 4));
    this.last_scale = ev.scale;
  }

  onPinchEnd(t, ev) {
    this.last_scale = ev.scale;
  }

  onPan(t, e) {
    t.deltaX = e.deltaX;
    t.deltaY = e.deltaY;
  } */

  /* lastClick = -1;

  clickImmagine() {
    const ora = new Date().getTime();
    if (ora - this.lastClick < 500) {
      // console.log('Double click');
    }
    this.lastClick = ora;
  }

  erroreImmagine(e) {
    // console.log(e);
    this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';
  } */

  hammerIt(t, elm) {
    if (!elm) {
      return;
    }
    // return;

    t.hammertime = new Hammer(elm, {});
    t.hammertime.get('swipe').set({
        enable: true
    });
    t.hammertime.get('pinch').set({
      enable: true
    });
    var posX = 0,
        posY = 0,
        scale = 1,
        last_scale = 1,
        last_posX = 0,
        last_posY = 0,
        max_pos_x = 0,
        max_pos_y = 0,
        transform = "",
        el = elm;
    
    /* try {
      t.hammertime.un('doubletap pan pinch panend pinchend swipe', agisceGesture);
    } catch (e) {
      // // console.log(e);
    } */
    t.hammertime.on('doubletap pan pinch panend pinchend swipe', function(ev) {
      // // console.log(ev.type);

      if (ev.type == "doubletap") {
          transform =
              "translate3d(0, 0, 0) " +
              "scale3d(2, 2, 1) ";
          scale = 2;
          last_scale = 2;
          try {
              if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
                  transform =
                      "translate3d(0, 0, 0) " +
                      "scale3d(1, 1, 1) ";
                  scale = 1;
                  last_scale = 1;
              }
          } catch (err) {}
          el.style.webkitTransform = transform;
          transform = "";
      }

      //pan    
      if (scale != 1) {
          posX = last_posX + ev.deltaX;
          posY = last_posY + ev.deltaY;
          max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
          max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
          if (posX > max_pos_x) {
              posX = max_pos_x;
          }
          if (posX < -max_pos_x) {
              posX = -max_pos_x;
          }
          if (posY > max_pos_y) {
              posY = max_pos_y;
          }
          if (posY < -max_pos_y) {
              posY = -max_pos_y;
          }
      }

      /* if (ev.type == "swipe") {
        // // console.log(ev);
        if (ev.offsetDirection === 4) {
          const ora = new Date().getTime();
          if (ora - t.lastSwipe > 1000) {
            // setTimeout(() => {
              t.indietroMM();
            // }, 100);
            // // console.log('Swipe indietro');
          }
          t.lastSwipe = ora;
        }
        if (ev.offsetDirection === 2) {
          const ora = new Date().getTime();
          if (ora - t.lastSwipe > 1000) {
          // setTimeout(() => {
            // alert('Avanti 1');
            t.avantiMM();
          // }, 100);
          // // console.log('Swipe avanti');
          }
          t.lastSwipe = ora;
        }
      } */

      //pinch
      if (ev.type == "pinch") {
        scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
      }
      if(ev.type == "pinchend"){
        last_scale = scale;
      }

      //panend
      if(ev.type == "panend"){
        last_posX = posX < max_pos_x ? posX : max_pos_x;
        last_posY = posY < max_pos_y ? posY : max_pos_y;
        // // console.log(posX, posY);
      }

      if (scale != 1) {
        transform =
            "translate3d(" + posX + "px," + posY + "px, 0) " +
            "scale3d(" + scale + ", " + scale + ", 1)";
      }

      if (transform) {
        el.style.webkitTransform = transform;
        // // console.log(transform);
      }
    });
  }

  azionaSlideshow() {
    this.slideshowAzionato = !this.slideshowAzionato;

    if (this.slideshowAzionato === true) {
      this.timerSlideShow();
    } else {
      clearInterval(this.slideshowTimer);
      this.slideshowTimer = undefined;
    }
  }

  timerSlideShow() {
    this.contatore = this.secondiSS;

    clearInterval(this.slideshowTimer);
    this.slideshowTimer = undefined;

    this.slideshowTimer = setInterval(() => {
      this.contatore--;
      if (this.contatore === 0) {
        clearInterval(this.slideshowTimer);
        this.avantiMM(1);
      }
    }, 1000);
  }

  cambiaModalitaDoppia(e) {
    setTimeout(() => {
      this.modalitaDoppia = e.srcElement.checked;
      localStorage.setItem('ModalitaDoppia', this.modalitaDoppia === true ? 'S' : 'N');

      this.caricamentoTipologie();
      
      if (this.modalitaDoppia === true) {
        this.visualizzaMM(2, '');
      } else {        
        this.cambiaLista('Immagini');
      }
    }, 100);
  }

  cambiaCategoriaProtetta(e) {
    setTimeout(() => {
      this.categoriaProtetta = e.srcElement.checked;
    }, 100);
  }

  cambiaAggiuntaInutile(e) {
    setTimeout(() => {
      this.aggiuntaInutile = e.srcElement.checked;
    }, 100);
  }

  cambiaSottoCategoria(e) {
    setTimeout(() => {
      this.sottoCategoria = e.srcElement.checked;
    }, 100);
  }

  impostaPreferito(idTipologia, Cosa) {
    // let idTipologia;
    let idCategoria;
    let idMultimedia;
    let Protetto;
    let lista;
    let selezionata;

    if (idTipologia === 1) {
      if (this.modalitaDoppia == true) {
        idTipologia = 1;
        idCategoria = this.informazioniMMI.idCategoria;
        idMultimedia = this.informazioniMMI.idMultimedia;
        lista = this.listaImmagini;
        selezionata = this.listaSelezionata;
      } else {
        if (this.Tipologia === 'Immagini') {
          idTipologia = 1;
          idCategoria = this.informazioniMMI.idCategoria;
          idMultimedia = this.informazioniMMI.idMultimedia;
          lista = this.listaImmagini;
          selezionata = this.listaSelezionata;
        } else {
          idTipologia = 2;  
          idCategoria = this.informazioniMMV.idCategoria;
          idMultimedia = this.informazioniMMV.idMultimedia;
          lista = this.listaVideo;
          selezionata = this.listaSelezionataVideo;
        }
      }
    } else {
      if (idTipologia === 2) {
        idTipologia = 2;  
        idCategoria = this.informazioniMMV.idCategoria;
        idMultimedia = this.informazioniMMV.idMultimedia;
        lista = this.listaVideo;
        selezionata = this.listaSelezionataVideo;
      } else {
        idTipologia = idTipologia;
        idCategoria = this.informazioniMM.idCategoria;
        idMultimedia = this.informazioniMM.idMultimedia;
        if (idTipologia === 1) {
          lista = this.listaImmagini;
          selezionata = this.listaSelezionata;
        } else {
          lista = this.listaVideo;
          selezionata = this.listaSelezionataVideo;
        }
      }
    }

    lista.forEach(element => {
      if (element.NomeLista === selezionata) {
        Protetto = element.Protetta === true ? 'S' : 'N';
      }      
    });
    // console.log('Imposta preferito: ', lista, selezionata, Protetto);

    this.apiService.ImpostaPreferito(this, idTipologia, idCategoria, idMultimedia, Cosa, Protetto)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);
            const d = data2.split(';');
            this.quantiPreferiti = +d[0];
            this.quantiPreferitiProt = +d[1];

            if (idTipologia === 1) {
              this.informazioniMMI.Preferito = Cosa === 'S' ? true : false;
              localStorage.setItem('UltimoMMI', JSON.stringify(this.informazioniMMI));
            } else {
              this.informazioniMMV.Preferito = Cosa === 'S' ? true : false;
              localStorage.setItem('UltimoMMV', JSON.stringify(this.informazioniMMV));
            }
            // this.informazioniMM.Preferito = Cosa === 'S' ? true : false;
          }
    });
  }

  sbloccaProtezione() {
    this.sbloccataProtezione = true;
    this.caricamentoTipologie();
  }

  vecchieInformazioni = new Array();
  vecchiaScritta = '';
  staConvertendo = false;
  conversioneAutomaticaInCorso = false;
  conversioneAutomaticaInCorsoI = false;

  converteVideo() {
    /* if (!confirm('Si vuole convertire il file video?')) {
      return;
    } */

    // console.log(this.informazioniMMV);

    this.caricamentoInCorsoV = true;
    this.vecchieInformazioni = ['Lettura Informazioni Video'];
    this.vecchiaScritta = '';
    this.staConvertendo = true;

    this.apiService.ConverteVideo(
      this, 
      2, 
      this.informazioniMMV.idCategoria, 
      this.informazioniMMV.idMultimedia)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR:') > -1) {
              this.staConvertendo = false;
              this.caricamentoInCorsoV = false;
              alert(data2);
            } else {
              this.RitornaInformazioniConversione();
            }
          }
    });
  }

  RitornaInformazioniConversione() {
    let conta = 0;
    const t = setInterval(()=> {
      this.apiService.RitornaInformazioniConversione(
        this)   
      .map(response => response)
        .subscribe(
          data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // // console.log(data2);
            if (this.vecchiaScritta === data2) {
              conta++;
              if (conta > 2) {
                clearInterval(t);

                this.FinisceConversioneVideo();
              }
            } else {
              this.vecchieInformazioni = data2.split(';');
              this.vecchiaScritta = data2;
            }
          }
      });
    }, 3000);              
  }

  FinisceConversioneVideo()  {
    this.apiService.FinisceConversioneVideo(
      this, 
      2, 
      this.informazioniMMV.idCategoria, 
      this.informazioniMMV.idMultimedia,
      'N')
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            this.caricamentoInCorsoV = false;

            const data2 = this.apiService.prendeSoloDatiValidi(data);

            const dd = data2.split(';');
            // console.log('Ritorno: ', dd[0], dd[1], dd[2]);

            const vecchioNome = this.informazioniMMV.Nome;
            this.informazioniMMV.Nome = dd[0];
            this.informazioniMMV.Path = dd[0]; // this.informazioniMMV.Path.replace(vecchioNome, dd[0]);

            this.visualizzaMM(2, this.informazioniMMV.idCategoria);     

            this.vecchieInformazioni = ['Video convertito.', 'Dimensioni vecchio file: ' + dd[1], 'Dimensioni Nuovo File: ' + dd[2]];
            // console.log('Video convertito:', this.informazioniMMV);
            // // console.log('Dimensioni vecchio file: ', dd[1]);
            // // console.log('Dimensioni Nuovo file: ', dd[2]);

            localStorage.setItem('UltimoMMV', JSON.stringify(this.informazioniMMV));                    

            setTimeout(() => {
              this.staConvertendo = false;
            }, 2000);
          }
    });
  }

  EliminaMultimedia(idTipologia) {
    let cosa;

    if (idTipologia === 1) {
      cosa = 'l\'immagine selezionata ';
    } else {
      cosa = 'il video selezionato ';
    }

    if (!confirm('Si vuole eliminare ' + cosa + '?')) {
      return;
    }

    this.EliminaMultimedia2(idTipologia);
  }

  EliminaMultimedia2(idTipologia) {
    let idCategoria;
    let idMultimedia;

    if (idTipologia === 1) {
      // console.log(this.informazioniMMI);
      this.caricamentoInCorsoI = true;
      idCategoria = this.informazioniMMI.idCategoria;
      idMultimedia = this.informazioniMMI.idMultimedia;
    } else {
      // console.log(this.informazioniMMV);
      this.caricamentoInCorsoV = true;
      idCategoria = this.informazioniMMV.idCategoria;
      idMultimedia = this.informazioniMMV.idMultimedia;
    }

    this.apiService.EliminaMultimediaDaID(
      this, 
      idTipologia, 
      idCategoria, 
      idMultimedia)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            if (idTipologia === 1) {
              this.caricamentoInCorsoI = false;
            } else {
              this.caricamentoInCorsoV = false;
            }

            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR:') > -1) {
              // alert(data2);
              setTimeout(() => {
                this.EliminaMultimedia2(idTipologia);
              }, 1000);
            } else {
              this.dimensioneImm = '300px 300px';
              this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';

              this.immaginiUguali = undefined;
              localStorage.removeItem('ImmaginiUguali');

              // alert('Immagine eliminata');
            }
        }
    });
  }

  apreBottoniI() {
    this.visualizzataFinestraBottoniI = !this.visualizzataFinestraBottoniI;
    localStorage.setItem('ApreBottoniI', this.visualizzataFinestraBottoniI === true ? 'S' : 'N');
  }

  apreBottoniV() {
    this.visualizzataFinestraBottoniV = !this.visualizzataFinestraBottoniV;
    localStorage.setItem('ApreBottoniV', this.visualizzataFinestraBottoniV === true ? 'S' : 'N');
  }

  RefreshInfoVideo() {
    this.apiService.RitornaInformazioniVideo(this, 2, this.informazioniMMV.idCategoria, this.informazioniMMV.idMultimedia, 'S')
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // alert('Avanti 7: ' + data);
            if (data2.indexOf('ERROR') === -1) {
              // console.log('Informazioni MMV:', this.informazioniMMV);

              const campi = data2.split(';');
              const convertito = campi[0];
              // // console.log('Informazioni JSON:', campi[1]);
              /* campi[1] = campi[1].replace('"{"', '{"');
              campi[1] = campi[1].replace('"}"', '}"');
              campi[1] = campi[1].replace('"{"', '{"');
              campi[1] = campi[1].replace('"}"', '}"'); */

              const jsone = JSON.parse(campi[1]);
              // console.log('Informazioni JSON:', jsone);
              this.VideoConvertito = false; // convertito === 'S' ? true : false;

              this.InformazioniVideoJson = undefined;

              if (jsone.streams) {
                jsone.streams.forEach(element => {
                  if (element.codec_type === 'video') {
                    // console.log('Rilevato codec video', element);
                    if (element.codec_name === 'h264') {
                      // console.log('Rilevato codec video h264');
                      this.VideoConvertito = true; // convertito === 'S' ? true : false;
                    }
                  }
                });
                // console.log(jsone.streams[0])

                const jjj = new Array();
                const jj = { Titolo: 'Convertito', Valori: [{ Nome: 'Convertito', Valore: convertito }]};
                jjj.push(jj);

                let quale = 0;
                jsone.streams.forEach(element => {
                  let stringa = JSON.stringify(element);
                  stringa = stringa.replace('{', '');
                  stringa = stringa.replace('}', '');
                  const campi = stringa.split(',');
                  // // console.log(campi);
                  const j = new Array();

                  campi.forEach(element2 => {
                    const campi2 = element2.split(':');
                    const nome = campi2[0].replace('"', '').replace('"', '');
                    const valore = campi2[1].replace('"', '').replace('"', '');

                    const jj = { Nome: nome, Valore: valore };
                    j.push(jj);
                  });
                  jjj.push({ Titolo: 'Stream ' + quale, Valori: j});
                  quale++;
                });
                // console.log(jjj);
                this.InformazioniVideoJson = jjj;
              } else {
                this.VideoConvertito = true;
              }
            }
          }
    });
  }

  ConvertiVideoTutti() {
    this.apiService.ConvertiTuttiIVideo(this)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // alert('Avanti 7: ' + data);
            if (data2.indexOf('ERROR') === -1) {
              this.conversioneAutomaticaInCorso = true;
              alert('Conversione lanciata');
            }
          }
    });
  }

  BloccaConvertiVideoTutti() {
    this.apiService.BloccaConvertiTuttiIVideo(this)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // alert('Avanti 7: ' + data);
            if (data2.indexOf('ERROR') === -1) {
              alert('L\'elaborazione è stata bloccata. Al termine della conversione\nattuale il server uscirà');
              this.conversioneAutomaticaInCorso = false;
            } else {
              alert(data2);
            }
          }
    });
  }

  RefreshInfoVideoTutti() {
    if (!confirm('L\'operazione potrebbe essere molto lunga.\nSi vuole proseguire ?')) {
      return;
    }
    let Refresh = 'N';
    if (confirm('Si vuole forzare il refresh di tutte le informazioni dei video?\n(Premendo Annulla, si effettuerà lo skip delle voci già presenti')) {
      Refresh = 'S';
    }

    this.caricamentoInCorsoI = true;
    this.caricamentoInCorsoV = true;
    this.ElaboraUtility = true;

    this.apiService.RefreshInfoVideoTutti(this, Refresh)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // alert('Avanti 7: ' + data);
            if (data2.indexOf('ERROR') === -1) {
              this.caricamentoInCorsoI = false;
              this.caricamentoInCorsoV = false;
              this.ElaboraUtility = false;

              alert(data2);
            } else {
              alert(data2);
            }
          }
    });
  }

  aprePopupID(idTipo) {
    this.idTipologiaPerSceltaID = idTipo;
    if (idTipo === 1) {
      this.listaMultimediaId = this.listaMultimediaIdI;
    } else {
      this.listaMultimediaId = this.listaMultimediaIdV;
    }
    // // console.log('Lista multimedia', this.listaMultimediaId);
    this.idMultimediaMostrate = true; 
  }

  CaricaListaMultimediaID(idTipo, idCategoria) {
    // // console.log('Ricerca multimedia id per ', idTipo, idCategoria);
    // return;

    this.apiService.CaricaListaMultimediaID(
      this, 
      idTipo,
      idCategoria
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              // // console.log('Caricamento lista multimedia ID per categoria ' + idTipo, data2);
              const d = data2.split('§');
              const lista = new Array();
              d.forEach(element => {
                if (element && element !== '') {
                  const ddd = element.split(';');
                  const dd = {
                    Progressivo: +ddd[0],
                    idMultimedia: +ddd[1],
                    Descrizione: ddd[2]
                  }
                  lista.push(dd);

                  if (this.listaIDSelezionata === dd.Descrizione) {
                    this.ProgressivoMod = dd.Progressivo;
                    // alert('Valore progressivo: ' + this.ProgressivoMod);
                  }
                }
              });
              if (idTipo === 1) {
                this.listaMultimediaIdI = lista;
              } else {
                this.listaMultimediaIdV = lista;
              }
              this.listaMultimediaId = lista;
            } else {
              if (idTipo === 1) {
                this.listaMultimediaIdI = new Array();
              } else {
                this.listaMultimediaIdV = new Array();
              }
              this.listaMultimediaId = new Array();
              // alert(data2);
            }
          }
    });
  }

  eliminaIDMultimedia(idTipo, Progressivo) {
    this.apiService.EliminaMultimediaID(
      this, 
      Progressivo
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              alert('Eliminazione effettuata');
              let lista;
              if (idTipo === 1) {
                lista = this.listaSelezionata;
              } else {
                lista = this.listaSelezionataVideo;
              }
              // // console.log(lista);
              this.CaricaListaMultimediaID(idTipo, lista);
            } else {
              alert(data2);
            }
          }
    });
  }

  caricaIDMultimedia(idTipo, Progressivo, Descrizione) {
    this.listaIDSelezionata = Descrizione;
    if (idTipo === 1) {
      localStorage.setItem('ListaIDSelezionataImmagine', this.listaIDSelezionata);
    } else {
      localStorage.setItem('ListaIDSelezionataVideo', this.listaIDSelezionata);
    }

    this.IDSelezionato = Progressivo;
    
    this.apiService.CaricaMultimediaID(
      this, 
      Progressivo
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              // alert('2506: ' + data2);
              if (idTipo === 1) {
                this.multimediaAttualeI = data2;
              } else {
                this.multimediaAttualeV = data2;
              }
              // console.log('ID Multimedia caricato', data2);

              // this.caricaMultimediaID(idTipo);
              // this.idMultimediaMostrate = false; 

              this.apiService.ImpostaSuccessivoMultimedia(
                this, 
                idTipo,
                data2
              )
              .map(response => response)
                .subscribe(
                  data => {
                    if (data) {
                      const data2 = this.apiService.prendeSoloDatiValidi(data);
          
                      if (data2.indexOf('ERROR') === -1) {
                        this.caricaMultimediaID(idTipo);

                        this.idMultimediaMostrate = false; 
                      } else {
                        alert(data2);
                      }
                    }
              });     
            } else {
              alert(data2);
            }
          }
    });
  }

  SalvaNuovoId = false;

  modificaIDMultimedia(idTipo, Progressivo, Descrizione, idMultimedia, Nuovo) {
    this.DescrizioneIDM = Descrizione;
    if (idMultimedia === -1) {
      if (idTipo === 1) {
        if (this.multimediaAttualeI > -1) {
          this.IDM = this.multimediaAttualeI;
          // console.log('Settaggio IDM: Immagine ', this.multimediaAttualeI);
        } else {
          alert('id Multimedia Immagine = 1');
          return;
        }
      } else {
        if (this.multimediaAttualeV > -1) {
          this.IDM = this.multimediaAttualeV;
          // console.log('Settaggio IDM: Video', this.multimediaAttualeV);
        } else {
          alert('id Multimedia Video = 1');
          return;
        }
      }
    } else {
      if (idMultimedia > -1) {
        this.IDM = idMultimedia;
        // console.log('Settaggio IDM: Valore passato ', idMultimedia);
      } else  {
        alert('id Multimedia = 1');
        return;
      }
    }
    // console.log('Settaggio IDM: Valore finale ', this.IDM);

    if (Nuovo === true) {
      this.SalvaNuovoId = true;
    } else {
      this.ProgressivoMod = Progressivo;
    }

    this.idTipoMod = idTipo;

    this.idMultimediaModMostrate = true;
  }

  salvaIDMM() {
    // alert(this.SalvaNuovoId);
    if (this.SalvaNuovoId === true) {
      this.ProgressivoMod = undefined;
    }
    // alert(this.ProgressivoMod);
    this.salvaMultimedia(this.idTipoMod, this.ProgressivoMod, this.DescrizioneIDM, this.IDM);
  }

  salvaMultimedia(idTipo, Progressivo, Descrizione, idMultimedia) {
    if (!Progressivo) {
      if (this.SalvaNuovoId === false) {
        let lista;

        if (idTipo === 1) {
          lista = this.listaMultimediaIdI;
        } else {
          lista = this.listaMultimediaIdV;
        }
        lista.forEach(element => {
          if (element.Descrizione === this.listaIDSelezionata) {
            if (!Progressivo) {
              Progressivo = element.Progressivo;
            }
          }
        });
      } else {
        Progressivo = '';
      }
    }
    this.SalvaNuovoId = false;

    // alert('Progressivo ID ' + Progressivo);
    // return;

    let idCategoria;

    if (idTipo === 1) {
      idCategoria = this.idCategoriaAttualeI;
    } else {
      idCategoria = this.idCategoriaAttualeV;
    }

    this.apiService.SalvaMultimediaID(
      this, 
      Progressivo,
      idTipo,
      idCategoria,
      idMultimedia,
      Descrizione
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              // alert('Salvataggio effettuato');
              this.CaricaListaMultimediaID(idTipo, idCategoria);
              this.idMultimediaModMostrate = false;
            } else {
              alert(data2);
            }
          }
    });
  }

  VisualizzaAvanzamentoConversione() {
    this.avanzamentoConversioneMostrato = true;

    this.getAvanzamentoConversione().subscribe(data => {
      let b = data._body;
      while (b.indexOf('\n') > -1) {
        b = b.replace('\n', '<br />');
      };
      this.testoAvanzamentoConversione = b;
    }, error => {
      alert('Lettura avanzamento conversione. ERRORE: ' + JSON.stringify(error._body));
    });
  }

  VisualizzaAvanzamentoConversioneI() {
    this.avanzamentoConversioneMostrato = true;

    this.getAvanzamentoConversioneI().subscribe(data => {
      let b = data._body;
      while (b.indexOf('\n') > -1) {
        b = b.replace('\n', '<br />');
      };
      this.testoAvanzamentoConversione = b;
    }, error => {
      alert('Lettura avanzamento conversione immagini. ERRORE: ' + JSON.stringify(error._body));
    });
  }

  uscitaCampoQuanti(e) {
    // // console.log(e.srcElement.value);
    const valore = e.srcElement.value;
    localStorage.setItem('QuanteImmaginiGriglia', valore);
  }

  RefreshInfoImmaginiTutti() {
    const idCategoria = this.idCategoriaAttualeI;

    this.apiService.CalcolaHashTutteImmagini(
      this,
      idCategoria
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              this.conversioneAutomaticaInCorsoI = true;
              alert('Acquisizione informazioni immagini lanciata per categoria ' + idCategoria);
            } else {
              alert(data2);
            }
          }
    });
  }

  PrendeInformazioniImmagine(Refresh)  {
    const idCategoria = this.idCategoriaAttualeI;
    const idMultimedia = this.multimediaAttualeI;

    this.apiService.CalcolaHashImmagine(
      this,
      idCategoria,
      idMultimedia,
      Refresh
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR') === -1) {
              const d = data2.split(';');
              this.informazioniMMI.Hash = d[0];
              this.informazioniMMI.Punti = +d[1];
              this.informazioniMMI.Width = +d[2];
              this.informazioniMMI.Height = +d[3];
              this.informazioniMMI.DataOra = d[4];
              localStorage.setItem('UltimoMMI', JSON.stringify(this.informazioniMMI));

              // console.log(data2);
              alert('Informazioni salvate sul db');
            } else {
              alert(data2);
            }
          }
    });
  }

  BloccaInformazioniImmagini() {
    this.apiService.BloccaRitornaInformazioniImmagini(this)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            // alert('Avanti 7: ' + data);
            if (data2.indexOf('ERROR') === -1) {
              alert('L\'elaborazione è stata bloccata. Al termine della conversione\nattuale il server uscirà');
              this.conversioneAutomaticaInCorsoI = false;
            } else {
              alert(data2);
            }
          }
    });
  }

  RilevaImmaginiUguali() {
    this.mascheraVisibileDuplicati = true;
  }

  chiudeMascheraDuplicati() {
    this.mascheraVisibileDuplicati = false;
  }

  RilevaImmaginiPiccole() {
    this.mascheraVisibilePiccole = true;
  }

  
  chiudeMascheraPiccole() {
    this.mascheraVisibilePiccole = false;
  }

  SpostaImmagine(i) {
    const idMultimedia = this.multimediaAttualeI;

    /* if (!confirm('Si vuole spostare l\'immagine con id ' + idMultimedia + '?')) {
      return;
    } */

    this.SpostaImmagine2(i);
  }

  SpostaImmagine2(i) {
    const idCategoria = this.idCategoriaAttualeI;
    const idMultimedia = this.multimediaAttualeI;
    
    this.apiService.SpostaImmaginiPiccole(
        this, 
        idCategoria, 
        idMultimedia)
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                // // console.log(data2);
    
                if (data2.indexOf('ERROR:') > -1) {
                  // alert(data2);
                  setTimeout(() => {
                    this.SpostaImmagine2(i);
                  }, 1000);
                } else {
                  this.dimensioneImm = '300px 300px';
                  this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';

                  this.immaginiUguali = undefined;
                  localStorage.removeItem('ImmaginiUguali');    
                  // alert('Immagine spostata correttamente');
                }
            }
    });      
  }

  CaricaExifImmagini(Refresh) {
    let idCategoria = this.idCategoriaAttualeI;
    if (confirm('Si vogliono caricare tutti i dati di tutte le categorie\noppure solo la categoria attuale ?\n\nOK = Tutte le categorie / Annulla = Categoria attuale')) {
      idCategoria = -1;
    }
    // console.log(idCategoria);
    // return;

    this.apiService.PrendeExifImmagini(
        this, 
        idCategoria, 
        Refresh)
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                // // console.log(data2);
    
                if (data2.indexOf('ERROR:') > -1) {
                  alert(data2);
                } else {
                  alert('Carica exif immagini in elaborazione');
                }
            }
    });      
  }

  CaricaPuntiMancanti(Refresh) {
    let idCategoria = this.idCategoriaAttualeI;
    if (confirm('Si vogliono caricare tutti i dati di tutte le categorie\noppure solo la categoria attuale ?\n\nOK = Tutte le categorie / Annulla = Categoria attuale')) {
      idCategoria = -1;
    }
    // console.log(idCategoria);
    // return;

    this.apiService.CalcolaPuntiniImmagine(
        this, 
        idCategoria, 
        Refresh)
      .map(response => response)
        .subscribe(
          data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                // // console.log(data2);
    
                if (data2.indexOf('ERROR:') > -1) {
                  alert(data2);
                } else {
                  alert('Carica punti mancanti in elaborazione');
                }
            }
    });      
  }

  caricamentoInformazioni = false;

  caricaInformazioni() {
    let idCategoria;
    let idTipologia;

    this.caricamentoInformazioni = true;
    if (this.modalitaDoppia === true) {
      idTipologia = -1;
      idCategoria = -1;
    } else {
      if (this.Tipologia === 'Immagini') {
        idTipologia = this.idTipologiaAttualeI;
        idCategoria = this.idCategoriaAttualeI;
      } else {
        idTipologia = this.idTipologiaAttualeV;
        idCategoria = this.idCategoriaAttualeV;
      }
    }

    this.apiService.RitornaInformazioni(
      this,
      idTipologia,
      idCategoria
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
              const data2 = this.apiService.prendeSoloDatiValidi(data);
              // // console.log(data2);
              this.caricamentoInformazioni = false;
  
              if (data2.indexOf('ERROR:') > -1) {
                this.informazioniImmagine = undefined;
                alert(data2);
              } else {
                this.vecchieInformazioniVarie = data2;

                this.creaArrayInformazioni(data2, idTipologia);

                this.bloccaTimer = false;
                this.attivaTimer();            
              }
          }
    });    
  }

  timerInformazioni;

  chiudeInformazioni() {
    this.visualizzaInformazioni = false;
    clearInterval(this.timerInformazioni);
    this.timerInformazioni = undefined;
  }

  attivaTimer() {
    if (!this.timerInformazioni) {
      this.timerInformazioni = setInterval(() => {
        // clearInterval(this.timerInformazioni);
        // if (this.bloccaTimer !== true) {
          this.caricaInformazioni();
        // }
      }, 60000)
    }
  }

  creaArrayInformazioni(data2, idTipologia) {
    const d = data2.split('§');
    const dddd = new Array();
    d.forEach(element => {
      if (element && element !== '') {
        const dd = element.split(';');
        const ddd = {
          Informazione: dd[0],
          Valore: +dd[1]
        }
        dddd.push(ddd);
      }
    });

    if (idTipologia === 1 || idTipologia === -1) {
      const dddI = {
        Informazione: 'Immagini Visualizzate',
        Valore: +this.indiceI
      }
      dddd.push(dddI);
    }

    if (idTipologia === 2 || idTipologia === -1) {
      const dddV = {
        Informazione: 'Video Visualizzati',
        Valore: +this.indiceV
      }
      dddd.push(dddV);
    }

    const dddIP = {
      Informazione: 'Preferiti',
      Valore: +this.quantiPreferiti + +this.quantiPreferitiProt
    }
    dddd.push(dddIP);

    this.informazioniImmagine = dddd;
  }

  cambiaCategoriaTipologia() {
    setTimeout(() => {
      // console.log(this.categoriaTipologia);
    }, 100);
  }

  CreazioneNuovaCategoria() {
    this.nomeNuovaCategoria = '';
    this.categoriaProtetta = true;
    this.categoriaTipologia = '1';
    this.sottoCategoria = false;
    this.listaSelezionataPerCreaCategoria = '';
    this.creaCategoria = true;
  }

  CreazioneCategoriaSalvataggio() {
    // console.log(this.categoriaTipologia);
    // console.log(this.categoriaProtetta);

    if (this.nomeNuovaCategoria === '') {
      alert('Inserire il nome della categoria');
      return;
    }

    if (this.sottoCategoria === true && this.listaSelezionataPerCreaCategoria === '') {
      alert('Inserire il nome della sottocategoria');
      return;
    }

    this.apiService.CreaCategoria(
      this,
      this.categoriaTipologia,
      this.nomeNuovaCategoria,
      this.categoriaProtetta === true ? 'S' : 'N',
      this.aggiuntaInutile === true ? 'S' : 'N',
      this.listaSelezionataPerCreaCategoria
    ).map(response => response)
      .subscribe(
        data => {
          if (data) {
              const data2 = this.apiService.prendeSoloDatiValidi(data);
              // // console.log(data2);
  
              if (data2.indexOf('ERROR:') > -1) {
                alert(data2);
              } else {
                if (+this.categoriaTipologia === 1) {
                  this.leggeCategorieImmagini();
                } else {
                  this.leggeCategorieVideo();
                }
                alert('Nuova categoria creata');
              }
          }
    });    
  }

  /* apriSpostaCategoria(idTipologia) {
    this.idTipologiaSpostamento = idTipologia;
    if (idTipologia === 1) {
      this.listaSelezionataPerSpostamento = this.listaSelezionata;
    } else {
      this.listaSelezionataPerSpostamento = this.listaSelezionataVideo;
    }
    this.spostaACategoria = true;
  } */

  modificataComboImmaginiPS(e) {
    if (e.target.value && e.target.value !== '') {
      this.listaSelezionataPS = e.target.value;
      this.caricaIdPerListaCambiata(false);
    } else {
      this.idNuovaCategoria = -1;
    }
  }

  modificataComboCreaCategoria(e) {
    if (e.target.value && e.target.value !== '') {
      this.listaSelezionataPerCreaCategoria = e.target.value;
    }
  }

  caricaIdPerListaCambiata(tablet) {
    let idTipologia;

    if (this.modalitaDoppia === true) {
      idTipologia = -1;
      alert('Da gestire');
      return;
    } else {
      if (this.Tipologia === 'Immagini') {
        idTipologia = 1;
      } else {
        idTipologia = 2;
      }
    }

    if (this.modalitaDoppia === true) {
      this.caricamentoInCorsoI = true;
      this.caricamentoInCorsoV = true;
    } else {
      if (idTipologia === 1) {
        this.caricamentoInCorsoI = true;
      } else {
        this.caricamentoInCorsoV = true;
      }
    }
    if (!idTipologia) {
      alert('ID Tipologia non definito');
      return;
    }

    let categoria = this.listaSelezionataPS;
    if (categoria.indexOf('/') > -1) {
      const c = categoria.split('/');
      categoria = c[1];
    }

    // alert('Ritorna id 1: ' + idTipologia + '-' + categoria);

    this.apiService.RitornaIDCategoria(
      this,
      idTipologia, 
      categoria
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (this.modalitaDoppia === true) {
              this.caricamentoInCorsoI = false;
              this.caricamentoInCorsoV = false;
            } else {
              if (idTipologia === 1) {
                this.caricamentoInCorsoI = false;
              } else {
                this.caricamentoInCorsoV = false;
              }
            }
        
            if (data2.indexOf('ERROR:') > -1) {
              alert(data2);
            } else {
              this.idNuovaCategoria = data2;
              // console.log('ID nuova categoria', this.idNuovaCategoria);

              if (tablet === true) {
                this.SpostaMultimediaAdAltraCategoria();
              }
            }
        }
    });
  }
  
  cambiataLista() {
    let lista;
    let idTipologia;
    if (this.Tipologia === 'Immagini') {
      idTipologia = 1;
    } else {
      idTipologia = 2;
    }
    
    if (idTipologia === 1) {
      lista = this.listaSelezionata;
    } else {
      lista = this.listaSelezionataVideo;
    }
    if (lista.indexOf('/') > -1) {
      const l = lista.split('/');
      lista = l[1];
    }
    console.log('Lista cambiata', lista, idTipologia);
    // alert('Lista cambiata: ' + idTipologia + '\nLista: ' + lista)

    if (lista.indexOf('Preferiti') > -1 || lista.indexOf('Tutto') > -1) {
      if (idTipologia === 1) {
        this.idCategoriaAttualeI = -1;
      } else {
        this.idCategoriaAttualeV = -1;
      }
      return;
    }

    let categoria = lista;
    if (categoria.indexOf('/') > -1) {
      const c = categoria.split('/');
      categoria = c[1];
    }

    // alert('Ritorna id 2: ' + idTipologia + '-' + categoria);

    this.apiService.RitornaIDCategoria(
      this, 
      idTipologia, 
      categoria
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (this.modalitaDoppia === true) {
              this.caricamentoInCorsoI = false;
              this.caricamentoInCorsoV = false;
            } else {
              if (idTipologia === 1) {
                this.caricamentoInCorsoI = false;
              } else {
                this.caricamentoInCorsoV = false;
              }
            }
        
            if (data2.indexOf('ERROR:') > -1) {
              alert(data2);
            } else {
              if (idTipologia === 1) {
                this.idCategoriaAttualeI = data2;
              } else {
                this.idCategoriaAttualeV = data2;
              }
              localStorage.setItem('idCategoriaAttualeI', data2);
              localStorage.setItem('idCategoriaAttualeV', data2);

              this.caricaInformazioni();
              // // console.log('ID categoria rilevata', this.idCategoriaAttualeI);
            }
        }
    });
  }

  SpostaMultimediaAdAltraCategoriaTablet(e) {
    console.log(e);
    this.listaSelezionataPS = e.NomeLista;
    this.listaSelezionataDaTasto = this.listaSelezionataPS;
    setTimeout(() => {
      this.caricaIdPerListaCambiata(true);
    }, 100);

  }
  
  SpostaMultimediaAdAltraCategoria() {
    if (this.idNuovaCategoria === -1) {
      alert('ID Categoria nullo');
      return;
    }

    let idCategoria;
    let idMultimedia;
    let idTipologia = 1;

    if (this.modalitaDoppia === true) {
      idTipologia = -1;
      alert('Da gestire');
      return;
    } else {
      if (this.Tipologia === 'Immagini') {
        idTipologia = 1;
      } else {
        idTipologia = 2;
      }
    }

    if (idTipologia === 1) {
      idCategoria = this.informazioniMMI.idCategoria;
      idMultimedia = this.informazioniMMI.idMultimedia;
    } else {
      idCategoria = this.informazioniMMV.idCategoria;
      idMultimedia = this.informazioniMMV.idMultimedia;
    }

    this.apiService.SpostaMultimediaACategoria(
      this, 
      idTipologia, 
      idCategoria, 
      idMultimedia,
      this.idNuovaCategoria)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR:') > -1) {
              // alert(data2);
              setTimeout(() => {
                this.SpostaMultimediaAdAltraCategoria();
              }, 1000);
            } else {
              // this.spostaACategoria = false;
              // alert('Immagine spostata');
              this.dimensioneImm = '300px 300px';
              this.pathImmagine = 'assets/immagini/icons/No-image-found.jpg';
            }
        }
    });
  }

  caricaInformazioniCategorie() {
    let idTipologia;

    this.caricamentoInformazioni = true;
    if (this.modalitaDoppia === true) {
      idTipologia = -1;
    } else {
      if (this.Tipologia === 'Immagini') {
        idTipologia = this.idTipologiaAttualeI;
      } else {
        idTipologia = this.idTipologiaAttualeV;
      }
    }

    this.informazioniCategorie = new Array();

    this.apiService.RitornaInformazioniCategorie(
      this, 
      idTipologia
    )
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            this.caricamentoInformazioni = false;
            const data2 = this.apiService.prendeSoloDatiValidi(data);
        
            if (data2.indexOf('ERROR:') > -1) {
              alert(data2);
            } else {
              // // console.log(data2);
              const d = data2.split('§');
              const ddd = new Array();
              d.forEach(element => {
                if (element && element !== '') {
                  const dd = element.split(';');
                  const dddd = {
                    Categoria: dd[0],
                    Tutte: dd[1],
                    Preferiti: dd[2],
                    InfoImmagini: dd[3],
                    InfoVideo: dd[4]
                  };
                  ddd.push(dddd);
                }                
              });
              this.informazioniCategorie = ddd;
            }
        }
    });
    this.informazioniCategorieVisualizzate = !this.informazioniCategorieVisualizzate;
  }

  fAssociazioneTastiCategorie() {
    this.associazioneTastiCategorie = !this.associazioneTastiCategorie;
  }

  listaSelezionataTasti = ['', '', '', '', '', '', '', '', '', ''];

  cambiaTasto(n, e) {
    setTimeout(() => {
      const indice = e.srcElement.selectedIndex;
      const c = this.listaTasti[indice].NomeLista;
      // console.log(this.listaTasti[indice]);
      this.tastiConfigurati[n].Lista = c;
      // console.log(this.listaSelezionataTasti[n]);
    }, 100);
  }

  salvaTasti() {
    console.log(this.tastiConfigurati);
    let tc = '';
    this.tastiConfigurati.forEach(element => {
      tc += element.Lista + ';';
    });
    localStorage.setItem('tastiConfigurati', tc);
    alert('Tasti salvati');
  }

  impostaListaTasto(n) {
    this.listaSelezionataPS = this.tastiConfigurati[n].Lista;
    this.listaSelezionataDaTasto = this.listaSelezionataPS;
    setTimeout(() => {
      this.caricaIdPerListaCambiata(false);
    }, 100);
  }

  prendeDimensioniImmagine(Imm) {
    if (this.visualizzaTuttoSchermo === true) {
      return 'contain';
    }
    // alert(window.innerWidth + ' x ' + window.innerHeight);
    // this.dimensioneImm = Imm.Width + 'px ' + Imm.Height + 'px';

    let sX = window.innerWidth;
    if (this.modalitaDoppia === true) {
      sX /= 2;
    }
    const sY = window.innerHeight;
    // console.log('Dimensioni schermo: ', sX, sY)
    let dimeX = Imm.Width;
    let dimeY = Imm.Height;
    // console.log('Dimensioni originali: ', dimeX, dimeY)
    if (dimeX > sX || dimeY > sY) {
      let moltiplX = 0;
       if (dimeX > sX) {
        moltiplX = sX / dimeX;
       } 
       let moltiplY = 0;
       if (dimeY > sY) {
        moltiplY = sY / dimeY;
       }
       // console.log('Moltiplicatori X Y: ', moltiplX, moltiplY)
       let moltipl;
       if (moltiplX > moltiplY) {
        moltipl = moltiplX;
       } else {
        moltipl = moltiplY;
       }
       dimeX *= moltipl;
       dimeY *= moltipl;
       // console.log('Nuove dimensioni: ', dimeX, dimeY)
    }

    return dimeX + 'px ' + dimeY + 'px';
  }

  entratoCampoTesto(e) {
    if (e !== undefined) {
      this.entratoInUnCampoTesto = e;
    }
  }

  chiudiSpostamentoTablet() {
    this.spostamentoTablet = false;
    localStorage.setItem('spostamentoTablet', 'N');
  }

  eliminaImmagine(quale) {
    console.log('Eliminazione immagine',quale);

    const idTipologia = 1;
    const idCategoria = quale.idCategoria;
    const idMultimedia = quale.idMultimedia;

    if (idTipologia === 1) {
      this.caricamentoInCorsoI = true;
    } else {
      this.caricamentoInCorsoV = true;
    }

    this.apiService.EliminaMultimediaDaID(
      this, 
      idTipologia, 
      idCategoria, 
      idMultimedia)
    .map(response => response)
      .subscribe(
        data => {
          if (data) {
            if (idTipologia === 1) {
              this.caricamentoInCorsoI = false;
            } else {
              this.caricamentoInCorsoV = false;
            }

            const data2 = this.apiService.prendeSoloDatiValidi(data);

            if (data2.indexOf('ERROR:') > -1) {
              // alert(data2);
              setTimeout(() => {
                this.eliminaImmagine(quale);
              }, 1000);
            } else {
              quale.PathImmagine = 'assets/immagini/icons/No-image-found.jpg';
              // alert('Immagine eliminata');
            }
        }
    });
  }
}
