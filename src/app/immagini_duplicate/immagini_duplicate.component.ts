import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from "@angular/core";
import { ApiService } from "../services/api.service";
import { ExternalHttpClient } from "../services/httpclient.service";
import Utils from "../Utility.component";

@Component({
    selector: 'app-immagini-duplicate',
    templateUrl: './immagini_duplicate.component.html',
    styleUrls: ['./immagini_duplicate.component.css']
  })
  
  export class ImmaginiDuplicateComponent implements OnInit, OnChanges {
    @ViewChild("divScroll", { static: false }) divToScroll: ElementRef;
    
    @Input() mascheraVisibile;
    @Input() idCategoria;
    @Input() pathImmagini;
    @Input() listaSelezionata;
    @Input() sbloccataProtezione = false;
    @Input() listaCategorie;
    @Input() listaImpostataDaTasto;
    @Input() lista;
    @Input() t;

    @Output() mascheraNascosta: EventEmitter<any> = new EventEmitter<any>();
    @Output() quantiPreferiti: EventEmitter<any> = new EventEmitter<any>();
    @Output() quantiPreferitiProt: EventEmitter<any> = new EventEmitter<any>();
    @Output() entratoTesto: EventEmitter<any> = new EventEmitter<any>();

    caricamentoInCorso = false;
    visualizzaThumb = false;

    ricercaPerMetodo1 = false;
    ricercaPerMetodo2 = false;
    ricercaPerPunti = false;
    ricercaPerPuntiDiagonale = false;
    ricercaPerPuntiCornice = false;
    ricercaPerPuntiCorpo = false;
    ricercaPerNegativo = false;
    ricercaPerHash = false;
    ricercaPerEssenziale = false;
    ricercaPerData = false;
    ricercaPerDimensioni = false;
    ricercaPerNomeUguale = false;
    ricercaPerPeso = false;
    ricercaPerStringa = false;
    ricercaPerPiccole = false;
    ricercaPer1280 = false;
    tuttiIMetodi = false;

    QuanteImmagini: number;
    Inizio: number;
    Pagina: number;
    NumeroPagine: number;
    righeTotali = 0;
    ciSonoSelezionate = false;
    quanteSelezionate = 0;

    lista2;
    lista3;
    filtroLista;

    fattoSpostamento = false;

    dimensioneImmagine = 250;
    
    visualizzaInfo = false;

    immagineVisualizzata = false;
    immaginePath;
    QualeRicerca;

    nomeRicerca;
    ricercaImpostata;
    stringaRicerca = '';
    popupEliminaSposta = false;
    testoEliminaSposta = '';
    pathImmagine;

    listaCategorie2;
    spostaACategoria = false;
    listaSelezionataPS;
    idNuovaCategoria;
    immagineSelezionata;
    spostaTutte: boolean;

    ricercaAnd = false;
    ricercaOr = false;

    messoInPausaElaborazione = false;
    esciDallElaborazione = false;
    selezionateTutte = false;
    tutteLeCategorie = false;

    larghezza;
    altezza;
    dimensioneImmaginePP;
    caratteri = 3;

    listaRicercheVisualizzata = false;
    ricercheCaricate;

    spostamentoTablet = true;
    Ordinamento = '';

    constructor(
        private http: ExternalHttpClient,
        private apiService: ApiService, 
        private Utils: Utils   
    ) {

    }

    ngOnInit(): void {
        const o = localStorage.getItem('Ordinamento');
        if (o !== null) {
            this.Ordinamento = o;
        } else {
            this.Ordinamento = 'SoloNome';
        }

        const st = localStorage.getItem('spostamentoTablet');
        if (st !== null) {
            this.spostamentoTablet = st === 'S' ? true : false;
        }

        const rh = localStorage.getItem('ricercaPerMetodo1');
        if (rh !== null) {
            this.ricercaPerMetodo1 = rh === 'S' ? true : false;
        }

        const r1 = localStorage.getItem('ricercaPer1280');
        if (r1 !== null) {
            this.ricercaPer1280 = r1 === 'S' ? true : false;
        }

        const rhc = localStorage.getItem('ricercaPerMetodo2');
        if (rhc !== null) {
            this.ricercaPerMetodo2 = rhc === 'S' ? true : false;
        }

        const rp = localStorage.getItem('ricercaPerPunti');
        if (rp !== null) {
            this.ricercaPerPunti = rp === 'S' ? true : false;
        }

        const rt = localStorage.getItem('ricercaPerTutti');
        if (rt !== null) {
            this.tuttiIMetodi = rt === 'S' ? true : false;
        }

        const c = localStorage.getItem('Caratteri');
        if (c !== null) {
            this.caratteri = +c;
        }

        const rp1 = localStorage.getItem('ricercaPerPuntiCornice');
        if (rp1 !== null) {
            this.ricercaPerPuntiCornice = rp1 === 'S' ? true : false;
        }

        const rp2 = localStorage.getItem('ricercaPerPuntiDiagonale');
        if (rp2 !== null) {
            this.ricercaPerPuntiDiagonale = rp2 === 'S' ? true : false;
        }

        const rp3 = localStorage.getItem('ricercaPerPuntiCorpo');
        if (rp3 !== null) {
            this.ricercaPerPuntiCorpo = rp3 === 'S' ? true : false;
        }

        const rpn = localStorage.getItem('ricercaPerNegativo');
        if (rpn !== null) {
            this.ricercaPerNegativo = rpn === 'S' ? true : false;
        }

        const rph = localStorage.getItem('ricercaPerHash');
        if (rph !== null) {
            this.ricercaPerHash = rph === 'S' ? true : false;
        }

        const rpe = localStorage.getItem('ricercaPerEssenziale');
        if (rpe !== null) {
            this.ricercaPerEssenziale = rpe === 'S' ? true : false;
        }

        const rd = localStorage.getItem('ricercaPerData');
        if (rd !== null) {
            this.ricercaPerData = rd === 'S' ? true : false;
        }

        const rdi = localStorage.getItem('ricercaPerDimensioni');
        if (rdi !== null) {
            this.ricercaPerDimensioni = rdi === 'S' ? true : false;
        }

        const rnu = localStorage.getItem('ricercaPerNomeUguale');
        if (rnu !== null) {
            this.ricercaPerNomeUguale = rnu === 'S' ? true : false;
        }

        const rpp = localStorage.getItem('ricercaPerPeso');
        if (rpp !== null) {
            this.ricercaPerPeso = rpp === 'S' ? true : false;
        }

        const rps = localStorage.getItem('ricercaPerStringa');
        if (rps !== null) {
            this.ricercaPerStringa = rps === 'S' ? true : false;
        }

        const rppi = localStorage.getItem('ricercaPerPiccole');
        if (rppi !== null) {
            this.ricercaPerPiccole = rppi === 'S' ? true : false;
        }

        const tc = localStorage.getItem('tutteLeCategorie');
        if (tc !== null) {
            this.tutteLeCategorie = tc === 'S' ? true : false;
        }

        const rao = localStorage.getItem('ricercaAndOr');
        if (rao !== null) {
            if (rao === '1') {
                this.ricercaAnd = true;
                this.ricercaOr = false;
            } else {
                this.ricercaAnd = false;
                this.ricercaOr = true;
            }
        } else {
            this.ricercaAnd = true;
            this.ricercaOr = false;
        }

        const sr = localStorage.getItem('stringaRicerca');
        if (sr !== null) {
            this.stringaRicerca = sr;
        } else {
            this.stringaRicerca = '';
        }

        const vi = localStorage.getItem('visualizzaInfo');
        if (vi !== null) {
            this.visualizzaInfo = vi === 'S' ? true : false;
        }

        const vt = localStorage.getItem('visualizzaThumb');
        if (vt !== null) {
            this.visualizzaThumb = vt === 'S' ? true : false;
        }

        const di =  localStorage.getItem('dimensioneImmagine');
        if (di !== null) {
            this.dimensioneImmagine = +di;
        } else {
            this.dimensioneImmagine = 250;
        }

        const qr =  localStorage.getItem('qualeRicerca');
        if (qr !== null) {
            this.QualeRicerca = +qr;
        } else {
            this.QualeRicerca = 1;
            this.eliminaTuttiIFlag();
            this.ricercaPerMetodo1 = true;
        }

        const qi = localStorage.getItem('quanteImmagini_' + this.QualeRicerca);
        if (qi !== null) {
            this.QuanteImmagini = +qi;
        } else {
            this.QuanteImmagini = 30;
        }

        const dipp =  localStorage.getItem('dimensioneImmaginePP');
        if (dipp !== null) {
            this.dimensioneImmaginePP = +dipp;
        } else {
            this.dimensioneImmaginePP = 250;
        }

        const l =  localStorage.getItem('larghezza');
        if (l !== null) {
            this.larghezza = +l;
        } else {
            this.larghezza = 250;
        }

        const a =  localStorage.getItem('altezza');
        if (a !== null) {
            this.altezza = +a;
        } else {
            this.altezza = 250;
        }

        const pg =  localStorage.getItem(this.prendeNomeItemPagina());
        if (pg !== null) {
            this.Pagina = +pg;
            this.Inizio = +this.Pagina * +this.QuanteImmagini;

            // console.log('Inizio 1: ', this.Inizio, this.Pagina, this.QuanteImmagini);
            // this.effettuaRicerca();
        } else {
            this.Pagina = 0;
            this.Inizio = 0;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
        if (changes["listaCategorie"]) {
            this.listaCategorie2 = changes["listaCategorie"].currentValue;
        }
        if (changes["listaImpostataDaTasto"]) {
            if (changes["listaImpostataDaTasto"].currentValue) {
                this.listaSelezionataPS = changes["listaImpostataDaTasto"].currentValue;
                this.trovaiDCategoriaScelta();
            }
        }
        if (changes["mascheraVisibile"]) {
            if (changes["mascheraVisibile"].currentValue === true) {                            
                this.leggeRicerche();
            }
        }
        if (changes["lista"]) {
            if (changes["lista"].currentValue) {
                this.lista2 = changes["lista"].currentValue;
                this.lista3 = changes["lista"].currentValue;
            }
        }
    }

    prendeNomeItemPagina() {
        let ritorno = this.QualeRicerca.toString() + '_Pagina';
        if (this.QualeRicerca === 4) {
            ritorno += '_' + this.idCategoria;
            ritorno += '_' + (this.ricercaPerPuntiCorpo === true ? 'S' : 'N');
            ritorno += '_' + (this.ricercaPerPuntiCornice === true ? 'S' : 'N');
            ritorno += '_' + (this.ricercaPerPuntiDiagonale === true ? 'S' : 'N');
            ritorno += '_' + (this.ricercaPerNegativo === true ? 'S' : 'N');
            ritorno += '_' + (this.ricercaPerHash === true ? 'S' : 'N');
        }
        if (this.QualeRicerca === 7) {
            ritorno += '_' + this.stringaRicerca;
            ritorno += '_' + this.ricercaAnd;
        }
        return ritorno;
    }

    avanti() {
        /* if (!this.ricercaHash && !this.ricercaData && !this.ricercaDimensioni && !this.ricercaPuntini) {
            return
        } */

        this.Inizio += +this.QuanteImmagini;
        this.Pagina++;

        // if (this.Inizio > this.NumeroPagine) { this.Inizio -= this.QuanteImmagini; return; }
        // if (this.Pagina > this.NumeroPagine) { this.Pagina = this.NumeroPagine; return; }

        localStorage.setItem(this.prendeNomeItemPagina(), this.Pagina.toString());

        this.effettuaRicerca();
    }

    indietro() {
        /* if (!this.ricercaHash && !this.ricercaData && !this.ricercaDimensioni && !this.ricercaPuntini) {
            return
        } */
        
        this.Inizio -= +this.QuanteImmagini;
        this.Pagina--;

        if (this.Inizio < 0) { this.Inizio = 0; return; }
        if (this.Pagina < 0) { this.Pagina = 0; return; }

        localStorage.setItem(this.prendeNomeItemPagina(), this.Pagina.toString());

        this.effettuaRicerca();
    }

    cambiaTutteLeCategorie(e) {
        setTimeout(() => {
            this.tutteLeCategorie = e.srcElement.checked;
            localStorage.setItem('tutteLeCategorie', this.tutteLeCategorie === true ? 'S' : 'N');
            // this.effettuaRicerca();
        }, 100);
    }

    CambiaValorePagina() {
        setTimeout(() => {
            this.Inizio = this.Pagina * this.QuanteImmagini;
            console.log('Inizio 2: ', this.Inizio, this.Pagina, this.QuanteImmagini);
            localStorage.setItem(this.prendeNomeItemPagina(), this.Pagina.toString());

            this.effettuaRicerca();
        }, 100);
    }

    chiudiMaschera() {
        this.mascheraNascosta.emit(new Date());
    }

    cambiaVisualizzaInfo(e) {
        setTimeout(() => {
            this.visualizzaInfo = e.srcElement.checked;
            localStorage.setItem('visualizzaInfo', this.visualizzaInfo === true ? 'S' : 'N');

            this.aggiustaDimensioni(this.ricercaImpostata);
        }, 100);      
    }

    cambiaVisualizzaThumb(e) {
        setTimeout(() => {
            this.visualizzaThumb = e.srcElement.checked;
            localStorage.setItem('visualizzaThumb', this.visualizzaThumb === true ? 'S' : 'N');
        }, 100);      
    }

    cambiaPagina() {
        const pg =  localStorage.getItem(this.prendeNomeItemPagina());
        if (pg !== null) {
            this.Pagina = +pg;
        } else {
            this.Pagina = 0;
        }
        this.Inizio = +this.Pagina * +this.QuanteImmagini;
        console.log('Inizio 3: ', this.Inizio, this.Pagina, this.QuanteImmagini);

        const qi = localStorage.getItem('quanteImmagini_' + this.QualeRicerca);
        if (qi !== null) {
            this.QuanteImmagini = +qi;
        } else {
            this.QuanteImmagini = 30;
        }
    }

    cambiaRicercaPerTutti(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.tuttiIMetodi = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerTutti', this.tuttiIMetodi === true ? 'S' : 'N');
            this.QualeRicerca = 99;
            localStorage.setItem('qualeRicerca', '99');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaMetodo1(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.ricercaPerMetodo1 = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerMetodo1', this.ricercaPerMetodo1 === true ? 'S' : 'N');
            this.QualeRicerca = 1;
            localStorage.setItem('qualeRicerca', '1');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaHashMetodo2(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.ricercaPerMetodo2 = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerMetodo2', this.ricercaPerMetodo2 === true ? 'S' : 'N');
            this.QualeRicerca = 8;
            localStorage.setItem('qualeRicerca', '8');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaData(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.ricercaPerData = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerData', this.ricercaPerData === true ? 'S' : 'N');
            this.QualeRicerca = 2;
            localStorage.setItem('qualeRicerca', '2');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicerca1280(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.ricercaPer1280 = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPer1280', this.ricercaPer1280 === true ? 'S' : 'N');
            this.QualeRicerca = 9;
            localStorage.setItem('qualeRicerca', '9');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaDimensioni(e) {
        this.eliminaTuttiIFlag();
            
        setTimeout(() => {
            this.ricercaPerDimensioni = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerDimensioni', this.ricercaPerDimensioni === true ? 'S' : 'N');
            this.QualeRicerca = 3;
            localStorage.setItem('qualeRicerca', '3');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPunti(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerPunti = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerPunti', this.ricercaPerPunti === true ? 'S' : 'N');
            this.QualeRicerca = 4;
            localStorage.setItem('qualeRicerca', '4');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPuntiCornice(e) {
        setTimeout(() => {
            this.ricercaPerPuntiCornice = e.srcElement.checked;
            localStorage.setItem('ricercaPerPuntiCornice', this.ricercaPerPuntiCornice === true ? 'S' : 'N');

            const pg =  localStorage.getItem(this.prendeNomeItemPagina());
            if (pg !== null) {
                this.Pagina = +pg;
                this.Inizio = +this.Pagina * +this.QuanteImmagini;

                console.log('Inizio 4: ', this.Inizio, this.Pagina, this.QuanteImmagini);
                // this.effettuaRicerca();
            } else {
                this.Pagina = 0;
                this.Inizio = 0;
            }

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPuntiDiagonale(e) {
        setTimeout(() => {
            this.ricercaPerPuntiDiagonale = e.srcElement.checked;
            localStorage.setItem('ricercaPerPuntiDiagonale', this.ricercaPerPuntiDiagonale === true ? 'S' : 'N');

            const pg =  localStorage.getItem(this.prendeNomeItemPagina());
            if (pg !== null) {
                this.Pagina = +pg;
                this.Inizio = +this.Pagina * +this.QuanteImmagini;
                
                console.log('Inizio 5: ', this.Inizio, this.Pagina, this.QuanteImmagini);
                // this.effettuaRicerca();
            } else {
                this.Pagina = 0;
                this.Inizio = 0;
            }

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPuntiCorpo(e) {
        setTimeout(() => {
            this.ricercaPerPuntiCorpo = e.srcElement.checked;
            localStorage.setItem('ricercaPerPuntiCorpo', this.ricercaPerPuntiCorpo === true ? 'S' : 'N');

            const pg =  localStorage.getItem(this.prendeNomeItemPagina());
            if (pg !== null) {
                this.Pagina = +pg;
                this.Inizio = +this.Pagina * +this.QuanteImmagini;

                console.log('Inizio 6: ', this.Inizio, this.Pagina, this.QuanteImmagini);
                // this.effettuaRicerca();
            } else {
                this.Pagina = 0;
                this.Inizio = 0;
            }

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerNegativo(e) {
        setTimeout(() => {
            this.ricercaPerNegativo = e.srcElement.checked;
            localStorage.setItem('ricercaPerNegativo', this.ricercaPerNegativo === true ? 'S' : 'N');

            const pg =  localStorage.getItem(this.prendeNomeItemPagina());
            if (pg !== null) {
                this.Pagina = +pg;
                this.Inizio = +this.Pagina * +this.QuanteImmagini;

                console.log('Inizio 6: ', this.Inizio, this.Pagina, this.QuanteImmagini);
                // this.effettuaRicerca();
            } else {
                this.Pagina = 0;
                this.Inizio = 0;
            }

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerHash(e) {
        setTimeout(() => {
            this.ricercaPerHash = e.srcElement.checked;
            localStorage.setItem('ricercaPerHash', this.ricercaPerHash === true ? 'S' : 'N');

            const pg =  localStorage.getItem(this.prendeNomeItemPagina());
            if (pg !== null) {
                this.Pagina = +pg;
                this.Inizio = +this.Pagina * +this.QuanteImmagini;

                console.log('Inizio 10: ', this.Inizio, this.Pagina, this.QuanteImmagini);
                // this.effettuaRicerca();
            } else {
                this.Pagina = 0;
                this.Inizio = 0;
            }

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerEssenziale(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerEssenziale = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerEssenziale', this.ricercaPerEssenziale === true ? 'S' : 'N');
            this.QualeRicerca = 10;
            localStorage.setItem('qualeRicerca', '10');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaNomeUguale(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerNomeUguale = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerNomeUguale', this.ricercaPerNomeUguale === true ? 'S' : 'N');
            this.QualeRicerca = 5;
            localStorage.setItem('qualeRicerca', '5');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerPeso(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerPeso = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerPeso', this.ricercaPerPeso === true ? 'S' : 'N');
            this.QualeRicerca = 6;
            localStorage.setItem('qualeRicerca', '6');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerStringa(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerStringa = true; // e.srcElement.checked;            
            localStorage.setItem('ricercaPerStringa', this.ricercaPerStringa === true ? 'S' : 'N');
            this.QualeRicerca = 7;
            localStorage.setItem('qualeRicerca', '7');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaRicercaPerPiccole(e) {
        this.eliminaTuttiIFlag();

        setTimeout(() => {
            this.ricercaPerPiccole = true; // e.srcElement.checked;
            localStorage.setItem('ricercaPerPiccole', this.ricercaPerPiccole === true ? 'S' : 'N');
            this.QualeRicerca = 8;
            localStorage.setItem('qualeRicerca', '8');

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    cambiaFiltroStringa(n, e) {
        this.ricercaAnd = false;
        this.ricercaOr = false;

        setTimeout(() => {
            if (n === 1) {
                this.ricercaAnd = true;
            } else {
                this.ricercaOr = true;
            }
            localStorage.setItem('ricercaAndOr', n);

            this.cambiaPagina();

            // this.effettuaRicerca();
        }, 100);      
    }

    eliminaTuttiIFlag() {
        this.ricercaPerData = false;
        this.ricercaPerDimensioni = false;
        this.ricercaPerMetodo1 = false;
        this.ricercaPerMetodo2 = false;
        this.ricercaPerPunti = false;
        this.ricercaPerNomeUguale = false;
        this.ricercaPerPeso = false;
        this.ricercaPerStringa = false;
        this.ricercaPerPiccole = false;
        this.ricercaPer1280 = false;
        this.ricercaPerEssenziale = false;
        this.tuttiIMetodi = false;

        localStorage.setItem('ricercaPerMetodo1', 'N');
        localStorage.setItem('ricercaPerMetodo2', 'N');
        localStorage.setItem('ricercaPerData', 'N');
        localStorage.setItem('ricercaPerDimensioni', 'N');
        localStorage.setItem('ricercaPerPunti', 'N');
        localStorage.setItem('ricercaPerNomeUguale', 'N');
        localStorage.setItem('ricercaPerPeso', 'N');
        localStorage.setItem('ricercaPerStringa', 'N');
        localStorage.setItem('ricercaPerPiccole', 'N');
        localStorage.setItem('ricercaPer1280', 'N');
        localStorage.setItem('ricercaPerEssenziale', 'N');
        localStorage.setItem('ricercaPerTutti', 'N');
    }

    SalvaValoreDimensioni() {
        setTimeout(() => {
            localStorage.setItem('dimensioneImmagine', this.dimensioneImmagine.toString());

            this.aggiustaDimensioni(this.ricercaImpostata);
        }, 100);
    }

    SalvaValoreCaratteri() {
        setTimeout(() => {
            localStorage.setItem('Caratteri', this.caratteri.toString());
        }, 100);
    }

    SalvaValoreRighe() {
        setTimeout(() => {
            localStorage.setItem('quanteImmagini_' + this.QualeRicerca, this.QuanteImmagini.toString());
        }, 100);
    }

    effettuaRicerca() {
        if (this.ricercaPerPiccole === true) {
            this.effettuaRicercaPerPiccole();
            return;
        }

        if (+this.QualeRicerca === 7)  {
            this.salvaRicerca();
        }

        const rExifDesc = this.ricercaPerMetodo1 === true ? 'S' : 'N';
        const rExifComm = this.ricercaPerMetodo2 === true ? 'S' : 'N';
        const rDime = this.ricercaPerDimensioni === true ? 'S' : 'N';
        const rData = this.ricercaPerData === true ? 'S' : 'N';
        const r1280 = this.ricercaPer1280 === true ? 'S' : 'N';
        const rPuntini = this.ricercaPerPunti === true ? 'S' : 'N';
        const rNomeUguale = this.ricercaPerNomeUguale === true ? 'S' : 'N';
        const rPeso = this.ricercaPerPeso === true ? 'S' : 'N';
        const rPuntiniDiagonale = this.ricercaPerPuntiDiagonale === true ? 'S' : 'N';
        const rPuntiniCornice = this.ricercaPerPuntiCornice === true ? 'S' : 'N';
        const rPuntiniCorpo = this.ricercaPerPuntiCorpo === true ? 'S' : 'N';
        const rPuntiniNegativi = this.ricercaPerNegativo === true ? 'S' : 'N';
        const rPuntiniHash = this.ricercaPerHash === true ? 'S' : 'N';
        const rPuntiniEssenziale = this.ricercaPerEssenziale === true ? 'S' : 'N';
        const rStringa = this.ricercaPerStringa === true ? 'S' : 'N';
        const tutte = this.tutteLeCategorie === true ? 'S' : 'N';
 
        if (rStringa === 'S') {
            /* if (this.stringaRicerca === '') {
                alert('Inserire una stringa di ricerca');
                return;
            } else {
                localStorage.setItem('stringaRicerca', this.stringaRicerca);
            } */
            localStorage.setItem('stringaRicerca', this.stringaRicerca);
        }

        this.caricamentoInCorso = true;
        this.quanteSelezionate = 0;
        this.selezionateTutte = false;

        // console.log('Azzero quante selezionate');

        // let Ordinamento = 'SoloNome';

        const AndOr = this.ricercaAnd === true ? '1' : '2';

        this.apiService.TrovaImmaginiUguali(
            this, 
            this.idCategoria,
            rExifDesc, 
            rExifComm, 
            rData, 
            rDime, 
            rPuntini,
            rPuntiniDiagonale,
            rPuntiniCornice,
            rPuntiniCorpo,
            rNomeUguale,
            rPeso,
            rStringa,
            this.stringaRicerca,
            this.QuanteImmagini,
            this.Inizio,
            AndOr,
            tutte,
            rPuntiniNegativi,
            rPuntiniEssenziale,
            r1280,
            this.caratteri,
            this.Ordinamento,
            rPuntiniHash,
            this.tuttiIMetodi ? 'S' : 'N'
        )
        .map(response => response)
          .subscribe(
            data => {
              if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                // console.log('Dati ritornati', data2);

                const d = data2.split("|");
                
                const ricercaPerTutti = new Array();

                const ricercaExifDesc = d[0];
                const ricercaData = d[1];
                const ricercaDimensioni = d[2];
                const ricercaPunti = d[3];
                const ricercaNomeUguale = d[4];
                const ricercaPeso = d[5];
                const ricercaStringa = d[6];
                const ricercaExifComm = d[7];
                const ricerca1280 = d[8];
                const ricercaEssenziale = d[9];
                const ricercaHash = d[10];

                let ricercaExifDescDati = undefined;
                let ricercaExifCommDati = undefined;
                let ricercaDataDati = undefined;
                let ricercaDimensioniDati = undefined;
                let ricercaPuntiniDati = undefined;
                let ricercaNomeUgualeDati = undefined;
                let ricercaPesoDati = undefined;
                let ricercaStringaDati = undefined;
                let ricerca1280Dati = undefined;
                let ricercaEssenzialeDati = undefined;
                let ricercaHashDati = undefined;

                let ok = true;

                if (ricercaEssenziale.indexOf('ERROR:') > -1 || ricercaEssenziale.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Essenziale: ' + ricercaEssenziale);
                        ok = false;
                    }
                }
                if (ricercaExifDesc.indexOf('ERROR:') > -1 || ricercaExifDesc.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Exif Desc: ' + ricercaExifDesc);
                        ok = false;
                    }
                }
                if (ricerca1280.indexOf('ERROR:') > -1 || ricerca1280.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('1280: ' + ricerca1280);
                        ok = false;
                    }
                }
                if (ricercaExifComm.indexOf('ERROR:') > -1 || ricercaExifComm.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Exif Comm: ' + ricercaExifComm);
                        ok = false;
                    }
                }
                if (ricercaData.indexOf('ERROR:') > -1 || ricercaData.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Data: ' + ricercaData);
                        ok = false;
                    }
                }
                if (ricercaDimensioni.indexOf('ERROR:') > -1 || ricercaDimensioni.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Dimensioni: ' + ricercaDimensioni);
                        ok = false;
                    }
                }
                if (ricercaPunti.indexOf('ERROR:') > -1 || ricercaPunti.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Punti: ' + ricercaPunti);
                        ok = false;
                    } else {
                        ok = true;
                    }
                }
                if (ricercaNomeUguale.indexOf('ERROR:') > -1 || ricercaNomeUguale.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Nome Uguale: ' + ricercaNomeUguale);
                        ok = false;
                    }
                }
                if (ricercaPeso.indexOf('ERROR:') > -1 || ricercaPeso.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Peso: ' + ricercaPeso);
                        ok = false;
                    }
                }
                if (ricercaStringa.indexOf('ERROR:') > -1 || ricercaStringa.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Stringa: ' + ricercaStringa);
                        ok = false;
                    }
                }
                if (ricercaHash.indexOf('ERROR:') > -1 || ricercaHash.indexOf('MDB:') > -1) {
                    if (!this.tuttiIMetodi) {
                        alert('Hash: ' + ricercaHash);
                        ok = false;
                    }
                }

                if (ok) {
                    if (!this.tuttiIMetodi) {
                        if (ricercaEssenziale.indexOf(';') > -1) {
                            ricercaEssenzialeDati = this.scannaArray(ricercaEssenziale, '16;5;6');
                            // console.log(this.ricercaHash);
                        } else {
                            ricercaEssenzialeDati = undefined;
                        }

                        if (ricercaExifDesc.indexOf(';') > -1) {
                            ricercaExifDescDati = this.scannaArray(ricercaExifDesc, '19');
                            // console.log(this.ricercaHash);
                        } else {
                            ricercaExifDescDati = undefined;
                        }

                        if (ricercaExifComm.indexOf(';') > -1) {
                            ricercaExifCommDati = this.scannaArray(ricercaExifComm, '20');
                            // console.log(this.ricercaHash);
                        } else {
                            ricercaExifCommDati = undefined;
                        }

                        if (ricerca1280.indexOf(';') > -1) {
                            // console.log(ricerca1280);
                            ricerca1280Dati = this.scannaArray(ricerca1280, '18');
                            // console.log(ricerca1280Dati);
                        } else {
                            ricerca1280Dati = undefined;
                        }

                        if (ricercaData.indexOf(';') > -1) {
                            ricercaDataDati = this.scannaArray(ricercaData, '7');
                        } else {
                            ricercaDataDati = undefined;
                        }

                        if (ricercaDimensioni.indexOf(';') > -1) {
                            ricercaDimensioniDati = this.scannaArray(ricercaDimensioni, '5;6');
                        } else {
                            ricercaDimensioniDati = undefined;
                        }

                        if (ricercaPunti.indexOf(';') > -1) {
                            let t = '';
                            if (this.ricercaPerPuntiCornice === true) {
                                t += '9;';
                            }
                            if (this.ricercaPerPuntiCorpo === true) {
                                t += '4;';
                            }
                            if (this.ricercaPerPuntiDiagonale === true) {
                                t += '8;';
                            }
                            if (this.ricercaPerNegativo === true) {
                                t += '3;';
                            }
                            if (this.ricercaPerHash === true) {
                                t += '18;';
                            }
                            if (this.ricercaPerEssenziale === true) {
                                t += '17;';
                            }
                            ricercaPuntiniDati = this.scannaArray(ricercaPunti, t); // ;4
                            // console.log(this.ricercaPuntini);
                        } else {
                            ricercaPuntiniDati = undefined;
                        }

                        if (ricercaNomeUguale.indexOf(';') > -1) {
                            ricercaNomeUgualeDati = this.scannaArray(ricercaNomeUguale, '15');
                            // console.log(this.ricercaPuntini);
                        } else {
                            ricercaNomeUgualeDati = undefined;
                        }

                        if (ricercaPeso.indexOf(';') > -1) {
                            ricercaPesoDati = this.scannaArray(ricercaPeso, '16');
                            // console.log(this.ricercaPuntini);
                        } else {
                            ricercaPesoDati = undefined;
                        }

                        if (ricercaStringa.indexOf(';') > -1) {
                            ricercaStringaDati = this.scannaArray(ricercaStringa, '11;10');
                            // console.log(this.ricercaPuntini);
                        } else {
                            ricercaStringaDati = undefined;
                            if (ricercaStringa.indexOf('ERROR') > -1) {
                                alert(ricercaStringa);
                            }
                        }

                        if (ricercaHash.indexOf(';') > -1) {
                            ricercaHashDati = this.scannaArray(ricercaHash, '21');
                            // console.log(this.ricercaHash);
                        } else {
                            ricercaHashDati = undefined;
                        }
                    }

                    if (this.tuttiIMetodi) {
                        let dati;

                        dati = this.scannaArray(ricercaEssenziale, '16;5;6');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaExifDesc, '19');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaExifComm, '20');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricerca1280, '18');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaData, '7');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaDimensioni, '5;6');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        let t = '';
                        if (this.ricercaPerPuntiCornice === true) {
                            t += '9;';
                        }
                        if (this.ricercaPerPuntiCorpo === true) {
                            t += '4;';
                        }
                        if (this.ricercaPerPuntiDiagonale === true) {
                            t += '8;';
                        }
                        if (this.ricercaPerNegativo === true) {
                            t += '3;';
                        }
                        if (this.ricercaPerHash === true) {
                            t += '18;';
                        }
                        if (this.ricercaPerEssenziale === true) {
                            t += '17;';
                        }
                        dati = this.scannaArray(ricercaPunti, t); // ;4
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaNomeUguale, '15');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaPeso, '16');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        dati = this.scannaArray(ricercaHash, '21');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });

                        dati = this.scannaArray(ricercaPunti, '9;4;8;3;18;17;');
                        dati.forEach(element => {
                            ricercaPerTutti.push(element);
                        });
                        // console.log(this.ricercaHash);
                    }
                }

                switch(this.QualeRicerca) {
                    case 1:
                        this.ricercaImpostata = ricercaExifDescDati;
                        this.nomeRicerca = 'EXIF DESCRIZIONE';
                        break;
                    case 2:
                        this.ricercaImpostata = ricercaDataDati;
                        this.nomeRicerca = 'DATA';
                        break;
                    case 3:
                        this.ricercaImpostata = ricercaDimensioniDati;
                        this.nomeRicerca = 'DIMENSIONI';
                        break;
                    case 4:
                        this.ricercaImpostata = ricercaPuntiniDati;
                        this.nomeRicerca = 'PUNTI';
                        break;
                    case 5:
                        this.ricercaImpostata = ricercaNomeUgualeDati;
                        this.nomeRicerca = 'NOME UGUALE';
                        break;
                    case 6:
                        this.ricercaImpostata = ricercaPesoDati;
                        this.nomeRicerca = 'PESO IN KB';
                        break;
                    case 7:
                        this.ricercaImpostata = ricercaStringaDati;
                        this.nomeRicerca = 'STRINGA';
                        break;
                    case 8:
                        this.ricercaImpostata = ricercaExifCommDati;
                        this.nomeRicerca = 'EXIF COMMENTO';
                        break;
                    case 9:
                        this.ricercaImpostata = ricerca1280Dati;
                        this.nomeRicerca = '1280';
                        break;
                    case 10:
                        this.ricercaImpostata = ricercaEssenzialeDati;
                        this.nomeRicerca = 'ESSENZIALI';
                        break;
                    case 99:
                        // console.log(ricercaPerTutti);
                        this.ricercaImpostata = ricercaPerTutti;
                        this.nomeRicerca = 'TUTTI I METODI';
                        break;
                    }

                this.divToScroll.nativeElement.scrollTop = 30;
                this.caricamentoInCorso = false;
              } else {
                alert('Errore nel rilevamento delle immagini');
                this.divToScroll.nativeElement.scrollTop = 30;
                this.caricamentoInCorso = false;
              }
        });    
    }

    eliminaImmagine(i) {
        if (i.Preferito === true || i.PreferitoProt === true) {
            if (!confirm('L\'immagine si trova tra i preferiti. Si vuole eliminare ugualmente ?')) {
                return;
            }    
        } else {
            if (!confirm('Si vuole eliminare l\'immagine con id ' + i.idMultimedia + '?')) {
                return;
            }
        }
      
        this.eliminaImmagine2(i, true);
    }

    eliminaImmagine2(i, accendeSpegne) {
        console.log(i);
        let idCateg;

        if (this.ricercaPerPiccole === false) {
            idCateg = this.idCategoria;
        } else {
            idCateg = i.idCategoria;
        }

        if (accendeSpegne === true) {
            this.caricamentoInCorso = true;
        }
        this.apiService.EliminaMultimediaDaID(
            this, 
            1, 
            idCateg, 
            i.idMultimedia)
          .map(response => response)
            .subscribe(
              data => {
                if (data) {
                    const data2 = this.apiService.prendeSoloDatiValidi(data);
        
                    if (data2.indexOf('ERROR:') > -1) {
                        // alert(data2);
                        setTimeout(() => {
                            this.eliminaImmagine2(i, accendeSpegne);
                        }, 1000);
                    } else {
                        if (accendeSpegne === true) {
                            this.caricamentoInCorso = false;
                        }
                        // i.Eliminata = true;
                        console.log('Elimino immagine', this.ricercaImpostata, i.idMultimedia)
                        this.ricercaImpostata.forEach(element => {
                            element.Values.forEach(element2 => {
                                if (element2.idMultimedia === i.idMultimedia) {
                                    element2.Eliminata = true;
                                }
                            });
                        });
                        this.righeTotali--;
                        this.fattoSpostamento = true;
                    }
                }
        });      
    }

    scannaArray(Stringone, QualeCampo) {
        const t = Stringone.split('*');
        const Righe = t[1];
        // if (this.ricercaPerStringa === true) {
        //     this.NumeroPagine =+Righe;
        // } else {
            this.NumeroPagine = Math.ceil(+Righe / this.QuanteImmagini) - 1;
        // }
        this.righeTotali = +Righe;
        const r = t[0].split('§');

        /* console.log(Stringone);
        console.log(t);
        console.log(Righe);
        console.log(r); */

        const rrrr = new Array();
        let q = 0;
        this.pathImmagine = new Array();
        let Settore = 1;

        r.forEach(element => {
            if (element && element !== '') {
                const rr = element.split(';');
                
                // console.log('Riga', rr);

                if (rr[10]) {
                    while (rr[10].indexOf('---PV---') > -1) {
                        rr[10] = rr[10].replace('---PV---', ';');
                    }
                }
                if (rr[11]) {
                    while (rr[11].indexOf('---PV---') > -1) {
                        rr[11] = rr[11].replace('---PV---', ';');
                    }
                }

                let p = rr[11];
                if (p) {
                    p = p.substring(p.indexOf('Condivise') + 10, p.length);
                    p = this.pathImmagini + '/' + p + '/' + rr[10];
                // this.pathImmagine.push('');

                q++;

                // this.Utils.immagineControllata = false;
                // });
                // const t = setInterval(() => {
                //     if (this.Utils.immagineControllata === true) {
                //         clearInterval(t);
                    
                        // this.pathImmagine[q] = pathImm;
                        // console.log('Controllo immagine: ', q, this.pathImmagine[q]);

                        // const n = rr[10].split('/');
                        // const NomeFile = n[(n.length - 1)];
                        // const Cartella = rr[10].replace(NomeFile, '');

                        const n = (rr[11] + rr[10]).split('/');
                        const NomeFile = n[(n.length - 1)];
                        let Cartella = (rr[11] + '/' + rr[10]).replace(NomeFile, '');
                        Cartella = Cartella.replace('//', '/');

                        let pathImm = p; // 'assets/immagini/icons/please_wait.gif';
                        if (this.visualizzaThumb === false) {
                            pathImm = 'assets/immagini/icons/No-image-found.jpg';
                        }

                        let NomeFileCorto = NomeFile;
                        if (NomeFileCorto.length > 25) {
                            NomeFileCorto = NomeFileCorto.substring(0, 11) + '...' + NomeFileCorto.substring(NomeFileCorto.length - 11, NomeFileCorto.length);
                        }
                        let CartellaCorta = Cartella;
                        if (CartellaCorta.length > 25) {
                            CartellaCorta = CartellaCorta.substring(0, 11) + '...' + CartellaCorta.substring(CartellaCorta.length - 11, CartellaCorta.length);
                        }

                        let selez = false;
                        if (Cartella.indexOf('/PICCOLE/') > -1 || NomeFile.indexOf('/PICCOLE/') > -1) {
                            selez = true;
                            this.quanteSelezionate++;
                            // console.log('Aumento quante selezionate', this.quanteSelezionate);

                            this.ciSonoSelezionate = true;
                        }

                        const rrr = {
                            NumeroImmagine: q,
                            Tipologia: rr[0],
                            idCategoria: +rr[1],
                            idMultimedia: +rr[2],
                            ExifDesc: rr[3],
                            Punti: +rr[4],
                            Width: +rr[5],
                            Height: +rr[6],
                            DataOra: rr[7],
                            PuntiDiagonale: +rr[8],
                            PuntiCornice: +rr[9],
                            NomeFile: NomeFile,
                            Percorso: rr[11],
                            PathCompleto: pathImm,
                            Cartella: Cartella,
                            CartellaCorta: CartellaCorta,
                            NomeFileCorto: NomeFileCorto,
                            Preferito: rr[12] !== '' ? true : false,
                            PreferitoProt: rr[13] !== '' ? true : false,
                            Protetto: rr[14] === 'S' ? true: false,
                            Eliminata: false,
                            SoloNome: rr[15],
                            Dimensioni: +rr[16],
                            Spostata: false,
                            SpostataACategoria: false,
                            Selezionata: selez,
                            ImmaginePerControllo: p,
                            ExifComm: rr[17],
                            NomePer1280: rr[18],
                            Descrizione: rr[19],
                            Commento: rr[20],
                            Hash: rr[21],
                            dimeX: this.dimensioneImmagine,
                            dimeY: this.dimensioneImmagine
                        }

                        let codice = '';
                        if (this.QualeRicerca !== 7 && this.QualeRicerca !== 99) {
                            // console.log('Campo di ricerca: ', QualeCampo);
                            if (QualeCampo.indexOf(';') === -1) {
                                codice = rr[+QualeCampo];  
                            } else {
                                const cc = QualeCampo.split(';');
                                cc.forEach(element2 => {
                                    if (element2 && element2 !== '') {
                                        codice += rr[+element2] + ' / ';  
                                    }
                                });
                                codice = codice.substring(0, codice.length -3);
                            }
                        } else {
                            if (this.QualeRicerca === 99) {
                                // codice = rr[0] + this.dimensioneImmagine;
                                let QualeCampo2 = '';
                                const cosa = rr[0];
                                const cosa2 = new Array();
                                for (let i = 0; i < cosa.length; i++) {
                                    cosa2.push(cosa.substring(i, i + 1));
                                }
                                // console.log('Schema arrivato: ', cosa, cosa2);

                                const q = QualeCampo.split(';');
                                let q2 = 0;
                                cosa2.forEach(element => {
                                    if (element === 'S') {
                                        QualeCampo2 += q[q2] + ';'
                                    }
                                    q2++;
                                });
                                // console.log('Codice preso: ', QualeCampo2);

                                if (QualeCampo.indexOf(';') === -1) {
                                    codice = rr[+QualeCampo];  
                                } else {        
                                    const cc = QualeCampo2.split(';');
                                    cc.forEach(element2 => {
                                        if (element2 && element2 !== '') {
                                            codice += rr[+element2] + ' / ';  
                                        }
                                    });
                                    codice = codice.substring(0, codice.length - 3);
                                }

                                // console.log('Campo di ricerca: ', QualeCampo2, codice);
                             } else {
                                codice = this.stringaRicerca;
                            }
                        }
                        // console.log('Codice di ricerca: ', codice);

                        let indice = 0;
                        let ok = '';

                        // if (this.QualeRicerca === 7) {
                            // rrrr.push({ Ricerca: this.stringaRicerca, Values: new Array()});
                        // }

                        rrrr.forEach(element2 => {
                            /* if (QualeCampo.indexOf(';') === -1) {
                                codiceControllo = rr[+QualeCampo];  
                            } else {
                                const cc = QualeCampo.split(';');
                                console.log(cc);
                                cc.forEach(element3 => {
                                    if (element3 && element3 !== '') {
                                        console.log(element2);
                                        console.log(element3);
                                        codiceControllo += element2[+element3];  
                                    }
                                });
                            }
                            console.log('--------------------'); */
                            if (this.QualeRicerca !== 7) {
                                let codiceControllo = element2.Ricerca;

                                if (codiceControllo.toUpperCase().trim() === codice.toUpperCase().trim()) {
                                    ok = '*';
                                }
                                if (ok === '') {
                                    indice++;
                                }
                            } else {
                                ok = '*';
                            }
                        });
                        
                        if (ok === '*') {
                            // Trovato indice, aggiungo
                            let ok = true;
                            // console.log(rrrr[indice]);
                            // console.log(rrr.Percorso + rrr.NomeFile);
                            rrrr[indice].Values.forEach(element2 => {
                                if (element2.Percorso + element2.NomeFile === rrr.Percorso + rrr.NomeFile) {
                                    ok = false;
                                }
                            });
                            ok = true;
                            if (ok) {
                                // console.log('Aggiungo');
                                rrrr[indice].Values.push(rrr);
                            }
                        } else {
                            rrrr.push({ Ricerca: codice, Settore: Settore, Values: [rrr]});
                            Settore++;
                        }
                //     }
                // }, 100);
                }
            }
        });

        // console.log(rrrr);

        // this.aggiustaDimensioni(rrrr);

        // console.log(rrrr);
        const rrrrr = new Array();
        rrrr.forEach(element => {
            if (element.Values.length > 1) {
                rrrrr.push(element);
            }
        });
        // console.log(rrrrr);

        return rrrrr;
    }

    aggiustaDimensioni(rrrr) {                
        // console.log('Aggiusto dimensioni', rrrr);
        rrrr.forEach(element => {
            element.Values.forEach(element2 => {
                // console.log('Immagine da controllare: ', element2.ImmaginePerControllo);
                if (this.visualizzaThumb === true) {
                    this.Utils.controllaImmagine(this.t, element2.ImmaginePerControllo).then((Ritorno) => {
                        let pathImm = '';
        
                        // if (this.Utils.ritornoControlloImmagine.indexOf('ERROR') > -1) {
                        if (Ritorno === 'ERROR') {
                            pathImm = 'assets/immagini/icons/No-image-found.jpg';
                        } else {
                            pathImm = Ritorno + '?d=' + new Date();
                        }
        
                        element2.PathCompleto = pathImm;
                        
                        const image = new Image();
                        image.src = pathImm;
                        image.onload = rs => {
                            let img_height = rs.currentTarget['height'];
                            let img_width = rs.currentTarget['width'];

                            if (img_width > this.dimensioneImmagine || img_height > this.dimensioneImmagine) {
                                // console.log('Immagine: ', element2.ImmaginePerControllo);
                                // console.log('Width: ', img_width);
                                // console.log('Height: ', img_height);

                                let xx = this.dimensioneImmagine;
                                if (this.visualizzaInfo === true)  {
                                    xx /= 2;
                                }
                                const x1 = (xx - 40) / img_width;
                                const y1 = (this.dimensioneImmagine - 22) / img_height;
                                if (x1 < y1) {
                                    img_width *= x1;
                                    img_height *= x1;
                                } else {
                                    img_width *= y1;
                                    img_height *= y1;
                                }

                                element2.dimeX = img_width;
                                element2.dimeY = img_height;

                                // console.log('Width definitivo: ', element2.dimeX);
                                // console.log('Height definitivo: ', element2.dimeY);
                            } else {
                                element2.dimeX = img_width;
                                element2.dimeY = img_height;

                                // console.log('Width originale: ', element2.dimeX);
                                // console.log('Height originale: ', element2.dimeY);
                            }
                        };
                    });
                } else {
                    let x1 = this.dimensioneImmagine;
                    if (this.visualizzaInfo === true)  {
                        x1 /= 2;
                    }
                    x1 -= 40;
                    const y1 = this.dimensioneImmagine - 22;

                    element2.dimeX = x1;
                    element2.dimeY = y1;
                }
            });
        });   
    }

    impostaPreferito(DatiElemento) {
        // console.log(DatiElemento);
        // return;

        let Cosa;

        if (DatiElemento.Preferito === true || DatiElemento.PreferitoProt === true) {
            Cosa = 'N';
        } else {
            Cosa = 'S';
        }

        const Protetto = DatiElemento.Protetto === true ? 'S' : 'N';

        this.apiService.ImpostaPreferito(this, 1, this.idCategoria, DatiElemento.idMultimedia, Cosa, Protetto)
        .map(response => response)
          .subscribe(
            data => {
                if (data) {
                    const data2 = this.apiService.prendeSoloDatiValidi(data);

                    if (data2.indexOf('ERROR:') === -1) {
                        const d = data2.split(';');
                        this.quantiPreferiti.emit(+d[0]);
                        this.quantiPreferitiProt.emit(+d[1]);

                        if (DatiElemento.Protetto) {
                            if (Cosa === 'S') {
                                // DatiElemento.PreferitoProt = true;

                                console.log('Imposto preferito prot immagine', this.ricercaImpostata, DatiElemento.idMultimedia)
                                this.ricercaImpostata.forEach(element => {
                                    element.Values.forEach(element2 => {
                                        if (element2.idMultimedia === DatiElemento.idMultimedia) {
                                            element2.PreferitoProt = true;
                                        }
                                    });
                                });        
                            } else {
                                // DatiElemento.PreferitoProt = false;

                                console.log('Tolgo preferito prot immagine', this.ricercaImpostata, DatiElemento.idMultimedia)
                                this.ricercaImpostata.forEach(element => {
                                    element.Values.forEach(element2 => {
                                        if (element2.idMultimedia === DatiElemento.idMultimedia) {
                                            element2.PreferitoProt = false;
                                        }
                                    });
                                });
                            }
                        } else {
                            if (Cosa === 'S') {
                                // DatiElemento.Preferito = true;

                                console.log('Imposto preferito immagine', this.ricercaImpostata, DatiElemento.idMultimedia)
                                this.ricercaImpostata.forEach(element => {
                                    element.Values.forEach(element2 => {
                                        if (element2.idMultimedia === DatiElemento.idMultimedia) {
                                            element2.Preferito = true;
                                        }
                                    });
                                });
                            } else {
                                // DatiElemento.Preferito = false;

                                console.log('Tolgo preferito immagine', this.ricercaImpostata, DatiElemento.idMultimedia)
                                this.ricercaImpostata.forEach(element => {
                                    element.Values.forEach(element2 => {
                                        if (element2.idMultimedia === DatiElemento.idMultimedia) {
                                            element2.Preferito = false;
                                        }
                                    });
                                });
                            }
                        }
                    } else {
                        alert(data2);
                    }
                }
        });    
    }

    visualizzaImmagine(i) {
        this.immaginePath = i.PathCompleto;
        this.immagineVisualizzata = true;
    }

    spostaImmagine(i) {
        if (!confirm('Si vuole spostare l\'immagine con id ' + i.idMultimedia + '?')) {
            return;
        }
        this.spostaImmagine2(i, true);
    }

    spostaImmagine2(i, accendeSpegne) {
        // console.log(i);

        let idCateg;

        if (this.ricercaPerPiccole === false) {
            idCateg = this.idCategoria;
        } else {
            idCateg = i.idCategoria;
        }

        if (accendeSpegne === true) {
            this.caricamentoInCorso = true;
        }
      
        this.apiService.SpostaImmaginiPiccole(
            this, 
            idCateg, 
            i.idMultimedia)
          .map(response => response)
            .subscribe(
              data => {
                if (data) {
                    const data2 = this.apiService.prendeSoloDatiValidi(data);
                    // console.log(data2);
        
                    if (data2.indexOf('ERROR:') > -1) {
                        setTimeout(() => {
                            this.spostaImmagine2(i, accendeSpegne);
                        }, 1000);
                        // alert(data2);
                    } else {
                        if (accendeSpegne === true) {
                            this.caricamentoInCorso = false;
                        }

                        // i.Spostata = true;

                        console.log('Sposta immagine', this.ricercaImpostata, i.idMultimedia)
                        this.ricercaImpostata.forEach(element => {
                            element.Values.forEach(element2 => {
                                if (element2.idMultimedia === i.idMultimedia) {
                                    element2.Spostata = true;
                                }
                            });
                        });

                        this.righeTotali--;
                        this.fattoSpostamento = true;
                    }
                }
        });      
    }

    cambiaSelezionata(e) {
        // console.log(e);
        e.Selezionata = !e.Selezionata;
        let q = 0;
        // console.log(this.ricercaImpostata);
        this.ricercaImpostata.forEach(element => {
            const v = element.Values;
            v.forEach(element2 => {
                if (element2.Selezionata === true) {
                    q++;
                }
            });
        });
        this.quanteSelezionate = q;
        // console.log('Selezionate: ', q);
        if (q > 0) {
            this.ciSonoSelezionate = true;
        } else {
            this.ciSonoSelezionate = false;
        }
    }

    spostaImmagineACategoria(rr) {
        this.spostaTutte = false;
        this.immagineSelezionata = rr;
        this.spostaACategoria = true;
        this.messoInPausaElaborazione = false;
        this.esciDallElaborazione = false;    
    }
      
    spostaImmagineACategoriaTutte() {
        this.spostaTutte = true;        
        this.spostaACategoria = true;
        this.messoInPausaElaborazione = false;
        this.esciDallElaborazione = false;    
    }

    erroreNelloSpostamento = '';
    inPausa = false;

    metteToglieInPausa() {
        this.inPausa = !this.inPausa;
        this.messoInPausaElaborazione = !this.messoInPausaElaborazione;
    }

    SpostaMultimediaAdAltraCategoriaTutte(s, v) {
        this.fattoSpostamento = false;
        const element = this.ricercaImpostata[s];
        if (!element) {
            alert('Nessun elemento selezionato');
            return;
        }
        const element2 = element.Values[v];
        if (this.esciDallElaborazione === true) {
            this.caricamentoInCorso = false;
            this.popupEliminaSposta = false;
            alert('Elaborazione bloccata');
            return;
        }
        if (this.messoInPausaElaborazione === true) {
            // this.testoEliminaSposta = 'Elaborazione ' + (v + 1) + '/' + element.Values.length + ' Settore ' + (s + 1) + '/' + this.ricercaImpostata.length + '\n---IN PAUSA---';
            setTimeout(() => {
                this.SpostaMultimediaAdAltraCategoriaTutte(s, v);
            }, 1000);
            return;
        }
        this.testoEliminaSposta = 'Elaborazione ' + (v + 1) + '/' + element.Values.length + ' Settore ' + (s + 1) + '/' + this.ricercaImpostata.length;

        if (element2.Selezionata === true && element2.Eliminata === false && element2.Spostata === false && element2.SpostataACategoria === false) {
            // console.log('Sposto immagine: ', element2);
            // return;
            this.immagineSelezionata = element2;
            this.SpostaMultimediaAdAltraCategoria(true);

            const t = setInterval(() => {
                if (this.fattoSpostamento === true) {
                    clearInterval(t);

                    if (this.erroreNelloSpostamento !== '') {
                        console.log(this.erroreNelloSpostamento + ': ' + (v + 1));
                        this.erroreNelloSpostamento = '';
                    }

                    /* if (this.erroreNelloSpostamento !== '') {
                        this.ciSonoSelezionate = false;
                        this.caricamentoInCorso = false;
                        this.spostaACategoria = false;
                        this.popupEliminaSposta = false;
                        alert(this.erroreNelloSpostamento);
                    } else { */
                        this.quanteSelezionate--;
                        v++;
                        // console.log('Incremento v: ', v, element.Values.length);
                        if (v >= element.Values.length) {
                            v = 0;
                            s++;
                            // console.log('Totale s: ', s, this.ricercaImpostata.length);
                            if (s >= this.ricercaImpostata.length) {
                                // console.log('Esco');
                                this.quanteSelezionate = 0;
                                this.ricercaImpostata.forEach(element => {
                                    const v = element.Values;
                                    v.forEach(element2 => {
                                        if (element2.Selezionata === true) {
                                            element2.Selezionata = false;
                                        }
                                    });
                                });
                                this.ciSonoSelezionate = false;
                                this.caricamentoInCorso = false;
                                this.spostaACategoria = false;
                                this.popupEliminaSposta = false;

                                // alert('Elaborazione terminata');
                            } else {
                                // console.log('Proseguo',s ,v);
                                this.SpostaMultimediaAdAltraCategoriaTutte(s, v);
                            }
                        } else {
                            // console.log('Proseguo',s ,v);
                            this.SpostaMultimediaAdAltraCategoriaTutte(s, v);
                        }
                    // }
                }
            }, 500);
        } else {
            v++;
            // console.log('Incremento v: ', v, element.Values.length);
            if (v >= element.Values.length) {
                v = 0;
                s++;
                // console.log('Totale s: ', s, this.ricercaImpostata.length);
                if (s >= this.ricercaImpostata.length) {
                    this.quanteSelezionate = 0;
                    this.ricercaImpostata.forEach(element => {
                        const v = element.Values;
                        v.forEach(element2 => {
                            if (element2.Selezionata === true) {
                                element2.Selezionata = false;
                            }
                        });
                    });
                    this.ciSonoSelezionate = false;
                    this.caricamentoInCorso = false;
                    this.spostaACategoria = false;
                    this.popupEliminaSposta = false;
                    // console.log('Esco');

                    // alert('Elaborazione terminata');
                } else {
                    // console.log('Proseguo',s ,v);
                    this.SpostaMultimediaAdAltraCategoriaTutte(s, v);
                }
            } else {
                // console.log('Proseguo',s ,v);
                this.SpostaMultimediaAdAltraCategoriaTutte(s, v);
            }
        }
    }

    id;
    indice;
    indiceMassimo;

    SpostaTutteACategoria() {
        this.caricamentoInCorso = true;
        // this.popupEliminaSposta = true;
        this.spostaACategoria = false;
        // this.SpostaMultimediaAdAltraCategoriaTutte(0, 0);

        // console.log(this.ricercaImpostata);
        this.id = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        let indice = 0;
        let q = 0;
        this.ricercaImpostata.forEach(element => {
            const v = element.Values;
            v.forEach(element2 => {
                if (element2.Selezionata === true) {
                    this.id[indice] += element2.idCategoria + ';' + element2.idMultimedia + '§';
                    q++;
                    if (q > 500) {
                        q = 0;
                        // alert ('Troppe selezione: Massimo 500');
                        // return;
                        indice++;
                        this.indiceMassimo = indice;
                    }
                }
            });
        });
        console.log(this.id, this.indiceMassimo);

        this.indice = 0;
        this.SpostaTutteACategoria2();
    }

    SpostaTutteACategoria2() {
        console.log('Spostamento mm a categoria: Indice ' + this.indice + ' / ' + this.indiceMassimo);

        this.apiService.SpostaTuttiMultimediaACategoria(
            this, 
            1, 
            this.id[this.indice],
            this.idNuovaCategoria)
        .map(response => response)
        .subscribe(
            data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);

                if (data2.indexOf('ERROR:') > -1) {
                    this.caricamentoInCorso = false;

                    alert(data2);
                } else {
                    this.indice++;
                    if (this.indice <= this.indiceMassimo) {
                        setTimeout(() => {
                            this.SpostaTutteACategoria2();
                        }, 100);
                    } else {
                        this.caricamentoInCorso = false;

                        this.id = undefined;
                        this.ricercaImpostata.forEach(element => {
                            const v = element.Values;
                            v.forEach(element2 => {
                                if (element2.Selezionata === true) {
                                    element2.Selezionata = false;
                                    element2.SpostataACategoria = true;
                                }
                            });
                        });
                    }
                }
            }
        });
    }

    ControllaSpostamentoACategoria() {
        console.log('Spostamento', this.spostaTutte);
        if (this.spostaTutte === true) {
            this.SpostaTutteACategoria();
        } else {
            this.SpostaMultimediaAdAltraCategoria(false);        
        }
    }

    SpostaMultimediaAdAltraCategoria(automatico) {
        if (this.idNuovaCategoria === -1) {
            alert('ID Categoria nullo');
            return;
        }
      
        let idCategoria;
        let idMultimedia;

        idCategoria = this.immagineSelezionata.idCategoria;
        idMultimedia = this.immagineSelezionata.idMultimedia;

        // console.log(idCategoria, idMultimedia, this.idNuovaCategoria);
        // return;
        this.erroreNelloSpostamento = '';

        this.apiService.SpostaMultimediaACategoria(
            this, 
            1, 
            idCategoria, 
            idMultimedia,
            this.idNuovaCategoria)
        .map(response => response)
        .subscribe(
            data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                this.caricamentoInCorso = false;

                if (data2.indexOf('ERROR:') > -1) {
                    /* alert(data2);
                    setTimeout(() => {
                        this.SpostaMultimediaAdAltraCategoria(automatico);
                    }, 1000); */
                    this.erroreNelloSpostamento = data2;
                    this.fattoSpostamento = true;
                } else {
                    this.immagineSelezionata.SpostataACategoria = true;
                    this.righeTotali--;
                    this.fattoSpostamento = true;
                    if (automatico === false) {
                        this.spostaACategoria = false;
                        // alert('Immagine spostata');
                    }
                }
            }
        });
    }

    spostaImmagineTutte() {
        if (!confirm('Si vogliono spostare tutte le immagini selezionate?')) {
            return;
        }
        this.caricamentoInCorso = true;
        this.popupEliminaSposta = true;
        this.testoEliminaSposta = '';
        this.messoInPausaElaborazione = false;
        this.esciDallElaborazione = false;    
        this.divToScroll.nativeElement.scrollTop = 30;
        this.eliminaSpostaImmagineTutte2(0, 0, 2);
    }

    eliminaImmagineTutte() {
        if (!confirm('Si vogliono eliminare tutte le immagini selezionate?')) {
            return;
        }
        this.caricamentoInCorso = true;
        this.popupEliminaSposta = true;
        this.testoEliminaSposta = '';
        this.messoInPausaElaborazione = false;
        this.esciDallElaborazione = false;    
        this.divToScroll.nativeElement.scrollTop = 30;
        this.eliminaSpostaImmagineTutte2(0, 0, 1);
    }

    eliminaSpostaImmagineTutte2(s, v, o) {
        this.fattoSpostamento = false;
        const element = this.ricercaImpostata[s];
        const element2 = element.Values[v];
        if (this.esciDallElaborazione === true) {
            this.caricamentoInCorso = false;
            this.popupEliminaSposta = false;
            alert('Elaborazione bloccata');
            return;
        }
        if (this.messoInPausaElaborazione === true) {
            this.testoEliminaSposta = 'Elaborazione ' + (v + 1) + '/' + element.Values.length + ' Settore ' + (s + 1) + '/' + this.ricercaImpostata.length + '\n---IN PAUSA---';
            setTimeout(() => {
                this.eliminaSpostaImmagineTutte2(s, v, o);
            }, 1000);
            return;
        }
        this.testoEliminaSposta = 'Elaborazione ' + (v + 1) + '/' + element.Values.length + ' Settore ' + (s + 1) + '/' + this.ricercaImpostata.length;
        if (element2.Selezionata === true && element2.Eliminata === false && element2.Spostata === false && element2.SpostataACategoria === false) {
            // console.log('Elimino immagine: ', element2);
            if (o === 1) {
                this.eliminaImmagine2(element2, false);
            } else {
                this.spostaImmagine2(element2, false);
            }
            const t = setInterval(() => {
                if (this.fattoSpostamento === true) {
                    clearInterval(t);
                    this.quanteSelezionate--;
                    v++;
                    // console.log('Incremento v: ', v, element.Values.length);
                    if (v >= element.Values.length) {
                        v = 0;
                        s++;
                        // console.log('Totale s: ', s, this.ricercaImpostata.length);
                        if (s >= this.ricercaImpostata.length) {
                            // console.log('Esco');
                            this.quanteSelezionate = 0;
                            this.ricercaImpostata.forEach(element => {
                                const v = element.Values;
                                v.forEach(element2 => {
                                    if (element2.Selezionata === true) {
                                        element2.Selezionata = false;
                                    }
                                });
                            });
                            this.ciSonoSelezionate = false;
                            this.caricamentoInCorso = false;
                            this.popupEliminaSposta = false;
                            this.spostaACategoria = false;

                            // ('Elaborazione terminata');
                        } else {
                            // console.log('Proseguo',s ,v);
                            this.eliminaSpostaImmagineTutte2(s, v, o);
                        }
                    } else {
                        // console.log('Proseguo',s ,v);
                        this.eliminaSpostaImmagineTutte2(s, v, o);
                    }
                }
            }, 500);
        } else {
            v++;
            // console.log('Incremento v: ', v, element.Values.length);
            if (v >= element.Values.length) {
                v = 0;
                s++;
                // console.log('Totale s: ', s, this.ricercaImpostata.length);
                if (s >= this.ricercaImpostata.length) {
                    this.quanteSelezionate = 0;
                    this.ricercaImpostata.forEach(element => {
                        const v = element.Values;
                        v.forEach(element2 => {
                            if (element2.Selezionata === true) {
                                element2.Selezionata = false;
                            }
                        });
                    });
                    this.ciSonoSelezionate = false;
                    this.caricamentoInCorso = false;
                    this.popupEliminaSposta = false;
                    this.spostaACategoria = false;
                    // console.log('Esco');

                    // alert('Elaborazione terminata');
                } else {
                    // console.log('Proseguo',s ,v);
                    this.eliminaSpostaImmagineTutte2(s, v, o);
                }
            } else {
                // console.log('Proseguo',s ,v);
                this.eliminaSpostaImmagineTutte2(s, v, o);
            }
        }
    }

    modificataComboImmaginiPS(e) {
        // console.log('***' + e.target.value + '***');
        if (e.target.value && e.target.value !== '') {
            this.listaSelezionataPS = e.target.value;
            this.trovaiDCategoriaScelta();
        } else {
            this.idNuovaCategoria = -1;
        }
    }

    trovaiDCategoriaScelta() {
        let categoria = this.listaSelezionataPS;
        if (categoria.indexOf('/') > -1) {
          const c = categoria.split('/');
          categoria = c[1];
        }

        this.apiService.RitornaIDCategoria(
            this, 
            1, 
            categoria
        )
        .map(response => response)
        .subscribe(
            data => {
            if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
    
                if (data2.indexOf('ERROR:') > -1) {
                    // alert(data2);
                } else {
                    this.idNuovaCategoria = data2;
                    console.log('ID nuova categoria', this.idNuovaCategoria);
                }
            }
        });
    }    

    selezionaTutte() {
        this.quanteSelezionate = 0;
        this.ricercaImpostata.forEach(element => {
            const v = element.Values;
            v.forEach(element2 => {
                if (this.selezionateTutte === false) {
                    element2.Selezionata = true;
                } else {
                    element2.Selezionata = false;
                }
                this.quanteSelezionate++;
            });
        });
        this.selezionateTutte = !this.selezionateTutte;
        if (this.quanteSelezionate > 0) {
            this.ciSonoSelezionate = true;
        } else {
            this.ciSonoSelezionate = false;
        }
    }

    esciDallaElaborazione() {
        if (confirm('Si vuole bloccare l\'elaborazione ?')) {
            this.esciDallElaborazione = true
        }
    }

    checkEdge(event) {
    }

    SalvaValoreLarghezza() {
        setTimeout(() => {
            localStorage.setItem('larghezza', this.larghezza.toString());
        }, 100);
    }

    SalvaValoreAltezza() {
        setTimeout(() => {
            localStorage.setItem('altezza', this.altezza.toString());
        }, 100);
    }

    SalvaValoreDimensioniPP() {
        setTimeout(() => {
            localStorage.setItem('dimensioneImmaginePP', this.dimensioneImmaginePP.toString());
        }, 100);
    }

    effettuaRicercaPerPiccole() {
        this.caricamentoInCorso = true;

        const tutte = this.tutteLeCategorie === true ? 'S' : 'N';

        this.apiService.TrovaImmaginiPiccole(
            this, 
            this.idCategoria,
            this.QuanteImmagini,
            this.Inizio,
            this.dimensioneImmaginePP,
            this.larghezza,
            this.altezza,
            tutte
        )
        .map(response => response)
          .subscribe(
            data => {
              if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') > -1) {
                    alert(data2);
                } else {
                    // console.log(data2);
                    const t = data2.split('*');
                    const Righe = t[1];
                    this.NumeroPagine = Math.ceil(+Righe / this.QuanteImmagini) - 1;
                    const d = t[0].split('§');
            
                    const dddd = new Array();
                    d.forEach(element => {
                        if (element && element !== '') {   
                            const dd = element.split(';');
                            
                            let p = dd[1];
                            p = p.substring(p.indexOf('Condivise') + 10, p.length);
                            p = this.pathImmagini + '/' + p + '/' + dd[2];

                            const n = (dd[1] + dd[2]).split('/');
                            const NomeFile = n[(n.length - 1)];
                            const Cartella = (dd[1] + dd[2]).replace(NomeFile, '');
            
                            let NomeFileCorto = NomeFile;
                            if (NomeFileCorto.length > 40) {
                                NomeFileCorto = NomeFileCorto.substring(0, 19) + '...' + NomeFileCorto.substring(NomeFileCorto.length - 19, NomeFileCorto.length);
                            }
                            let CartellaCorta = Cartella;
                            if (CartellaCorta.length > 40) {
                                CartellaCorta = CartellaCorta.substring(0, 19) + '...' + CartellaCorta.substring(CartellaCorta.length - 19, CartellaCorta.length);
                            }
            
                            // console.log(CartellaCorta);

                            const ddd = {
                                idMultimedia: +(dd[0].replace('*', '')),
                                Percorso: dd[1],
                                NomeFile: dd[2],
                                Preferito: dd[3] !== '' ? true : false,
                                PreferitoProt: dd[4] !== '' ? true : false,
                                Dimensioni: +dd[5],
                                Width: +dd[6],
                                Height: +dd[7],
                                DataOra: dd[8],
                                Protetto: dd[9] === 'S' ? true : false,
                                PathCompleto: p,
                                CartellaCorta: CartellaCorta,
                                NomeFileCorto: NomeFileCorto,        
                                Cartella: Cartella,
                                Eliminata: false,
                                Spostata: false,
                                SpostataACategoria: false,
                                idCategoria: +dd[10]
                            }
                            dddd.push(ddd);
                        }                    
                    });
                    this.nomeRicerca = 'Ricerca';
                    this.ricercaImpostata = [{Ricerca: 'Piccole', Values: dddd}];
                    console.log(this.ricercaImpostata);
                }

                this.divToScroll.nativeElement.scrollTop = 30;
                this.caricamentoInCorso = false;
              }
        });    
    }    

    entratoCampoStringa() {
        console.log('Entrato campo stringa');
        this.entratoTesto.emit(true);
    }

    lasciatoCampoStringa(aggiorna) {
        console.log('Uscito campo stringa');
        this.entratoTesto.emit(false);

        if (aggiorna === true) {
            this.cambiaPagina();
            // this.salvaRicerca();
        }
    }

    leggeRicerche() {
        this.apiService.LeggeRicerche(
            this
        )
        .map(response => response)
          .subscribe(
            data => {
              if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') > -1) {
                    alert(data2);
                } else {
                    // console.log(data2);
                    const r = data2.split('§');
                    const rrrr = new Array();
                    r.forEach(element => {
                        if (element && element !== '') {
                            const rr = element.split(';');
                            const rrr = {
                                Ricerca: rr[0],
                                AndOr: +rr[1],
                                Pagina: +rr[2],
                                DimeThumbs: +rr[3],
                                NumeroRighe: +rr[4]
                            }
                            rrrr.push(rrr);
                        }                        
                    });
                    this.ricercheCaricate = rrrr;
                }
            }
        });     
    }

    salvaRicerca() {
        const Stringa = this.stringaRicerca;
        let AndOr = '';
        if (this.ricercaAnd === true) {
            AndOr = '1';
        } else {
            AndOr = '2';
        }
        const Pagina = this.Pagina;
        const DimeThumbs = this.dimensioneImmagine;
        const NumeroRighe = this.QuanteImmagini;
        this.apiService.SalvaRicerca(
            this, 
            Stringa,
            AndOr,
            Pagina,
            DimeThumbs,
            NumeroRighe
        )
        .map(response => response)
          .subscribe(
            data => {
              if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') > -1) {
                    alert(data2);
                } else {
                }
            }
        });     
    }

    selezionaRicerca(r) {
        console.log(r);
        this.stringaRicerca = r.Ricerca;
        if (r.AndOr === 1) {
            this.ricercaAnd = true;
        } else {
            this.ricercaAnd = false;
        }
        this.Pagina = r.Pagina;
        this.dimensioneImmagine = r.DimeThumbs;
        this.QuanteImmagini = r.NumeroRighe;

        this.listaRicercheVisualizzata = false;
    }

    eliminaRicerca(r) {
        console.log(r);
        const Stringa = this.stringaRicerca;
        if (!confirm('Si vuole eliminare la ricerca \'' + Stringa + '\' ?')) {
            return;
        }
        this.apiService.EliminaRicerca(
            this, 
            Stringa
        )
        .map(response => response)
          .subscribe(
            data => {
              if (data) {
                const data2 = this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') > -1) {
                    alert(data2);
                } else {
                    this.leggeRicerche();
                }
            }
        });     
    }

    chiudiSpostamentoTablet() {
        this.spostamentoTablet = false;
    }

    caricaIdPerListaCambiata(tablet) {
        const idTipologia = 1;

        let categoria = this.listaSelezionataPS;
        if (categoria.indexOf('/') > -1) {
          const c = categoria.split('/');
          categoria = c[1];
        }
    
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
            
                if (data2.indexOf('ERROR:') > -1) {
                  alert(data2);
                } else {
                  this.idNuovaCategoria = data2;
                  console.log('ID nuova categoria', this.idNuovaCategoria);
    
                  // if (tablet === true) {
                    setTimeout(() => {
                        this.SpostaMultimediaAdAltraCategoriaTutte(0, 0);
                    }, 100);
                  // }
                }
            }
        });
    }
    
    SpostaMultimediaAdAltraCategoriaTablet(c) {
        console.log(c);
        this.listaSelezionataPS = c.NomeLista;
        setTimeout(() => {
            this.caricaIdPerListaCambiata(false);
        }, 100);
    }

    cambioOrdinamento() {
        setTimeout(() => {
            console.log(this.Ordinamento);
            localStorage.setItem('Ordinamento', this.Ordinamento);
        }, 100);
    }

    salvaSpostamentoTablet() {
        localStorage.setItem('spostamentoTablet', this.spostamentoTablet === true ? 'S' : 'N');
    }

    tastoPremuto(e) {
        console.log(e, this.filtroLista);
        setTimeout(() => {
            const l = new Array();
            this.lista3.forEach(element => {
                // console.log(element.NomeLista, this.filtroLista);
                if (element.NomeLista.toUpperCase().indexOf(this.filtroLista.toUpperCase().trim()) > -1) {
                    l.push(element);
                }
            });
            // console.log(this.filtroLista, l);
            this.lista2 = l;
        }, 10);
    }
  }