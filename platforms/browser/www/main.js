(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"debug == true\" class=\"barraDebug\">\r\n  {{ operazioneInCorso }}\r\n</div>\r\n<div id=\"divTestScroll\" \r\n  style=\"position: absolute; left: 0px; top: 0px; font-size: 14px; width: 150px; height: 30px; background-color: red; color: white; border: 1px solid #999; z-index: 9999; overflow: hidden; white-space: nowrap;\">\r\n  {{ testoScrollabile[0] }}\r\n</div> -->\r\n\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div style=\"position: absolute; top: 9px; z-index: 9; left: 9px;\"\r\n  >\r\n  <img src=\"assets/immagini/icona_equalizz.png\" style=\"cursor: pointer; width: 38px; height: 38px;\" title=\"Mette / Toglie tasti\" (click)=\"metteToglieTasti()\">\r\n</div>\r\n\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div style=\"position: absolute; top: 9px; z-index: 9;\"\r\n  [style.right] = \"mascheraTesto == true ? '26%' : '9px'\"\r\n  >\r\n  <img src=\"assets/immagini/utente.png\" style=\"cursor: pointer; width: 38px; height: 38px;\" title=\"Cambia utente ({{utenza}})\" (click)=\"cambiaUtente()\">\r\n  <img src=\"assets/immagini/hamburger.png\" style=\"cursor: pointer; width: 38px; height: 38px;\" title=\"Apre Menù\" (click)=\"apreMenu()\">\r\n</div>\r\n\r\n<!-- Maschera menù \r\n[style.right] = \"mascheraTesto == true ? '25%' : '5px'\" -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div id=\"divMenu\" ngDraggable *ngIf=\"menuMostrato == true\" \r\n  style=\"position: absolute; top: 30%; left: 30%; z-index: 1010; width: auto; height: auto; padding: 10px; \r\n     box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n    margin-right: 5px; background-color: rgb(36 34 34); opacity: .85; border: 1px solid rgb(78 75 74); border-radius: 3px;\"\r\n  (click)=\"tt.settaZIndex(5)\"\r\n  >\r\n  <div style=\"width: 100%; text-align: center;\"><h4><span style=\"color: green;\">Menù</span></h4></div>\r\n  \r\n  <div style=\"float: left; margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"mascheraFiltroBrani == true\" (change)=\"storage.checkFiltroBrani(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Filtro brani</span>\r\n  </div>\r\n  <div style=\"float: left; margin-top: 10px;width: 50%;\">&nbsp;\r\n    <input type=\"checkbox\" [checked]=\"mascheraBrani == true\" (change)=\"storage.checkBrani(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Brani</span>\r\n  </div>\r\n  <div style=\"clear: both;\"></div>\r\n  <div style=\"float: left; margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"mascheraTesto == true\" (change)=\"storage.checkTesto(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Testo</span>\r\n  </div>\r\n  <div style=\"float: left; margin-top: 10px; width: 50%;\">&nbsp;\r\n    <input type=\"checkbox\" [checked]=\"mascheraOpzioni == true\" (change)=\"storage.checkOpzioni(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Opzioni</span>\r\n  </div>\r\n  <div style=\"clear: both;\"></div>\r\n  <div style=\"float: left; margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"mascheraArtisti == true\" (change)=\"storage.checkArtisti(tt, $event); apreDettaglioArtisti();\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Dettaglio Artisti</span>\r\n  </div>\r\n  <div style=\"float: left; margin-top: 10px; width: 50%;\">&nbsp;\r\n    <input type=\"checkbox\" [checked]=\"pannelloUtility == true\"  (change)=\"aprePannelloUtility()\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Utility</span>\r\n  </div>\r\n  <div style=\"clear: both;\"></div>\r\n  <div *ngIf=\"Amministratore == 'S'\" style=\"float: left; margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"debug == true\" (change)=\"storage.checkDebug(tt, $event)\" />&nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Modalità debug</span>\r\n  </div>\r\n  <div *ngIf=\"Amministratore != 'S'\" style=\"float: left; margin-top: 10px; width: 50%;\">\r\n    &nbsp;\r\n  </div>\r\n  <!-- <div style=\"float: left; margin-top: 10px; width: 50%;\">&nbsp;\r\n    <input type=\"checkbox\" [checked]=\"comandiVocaliAttivi == true\" (change)=\"storage.checkComandiVocali(tt, $event)\" />&nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Comandi<br />vocali</span>\r\n  </div> -->\r\n  <div style=\"clear: both;\"></div>\r\n  <div style=\"float: left;  margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"visuaTagBrano == true\" (change)=\"storage.checkVisuaTagBrano(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">Tag Brano</span>\r\n  </div>\r\n  <div style=\"float: left;  margin-top: 10px; width: 50%;\">\r\n    <input type=\"checkbox\" [checked]=\"mascheraAbout == true\" (change)=\"storage.checkAbout(tt, $event)\" /> &nbsp;\r\n    <span style=\"font-size: 15px; color: white;\">About</span>\r\n  </div>\r\n  <div style=\"clear: both;\"></div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"menuMostrato = false;\">\r\n  </div>\r\n</div>\r\n<!-- Maschera menù -->\r\n\r\n<!-- CARICAMENTO IN CORSO -->\r\n<div \r\n  *ngIf=\"caricamentoInCorso == true\"\r\n  style=\"\r\n    position: absolute;\r\n    left: calc(50% - 125px);\r\n    top: calc(50% - 175px);\r\n    width: 250px;\r\n    height: 350px;\r\n    z-index: 2500;\r\n  \"\r\n>\r\n  <img src=\"assets/immagini/wait2.gif\" style=\"width: 100%; height: 100%;\">\r\n</div>\r\n<!-- CARICAMENTO IN CORSO -->\r\n\r\n<!-- CORPO -->\r\n<div id=\"divSfondo\"\r\n  style=\"width: 100%; height: 100%; background-color: black; overflow: hidden;\"\r\n  (click)=\"accendeOpacita()\"\r\n>\r\n  <div *ngIf=\"modalitaYouTube === 'S'\" style=\"width: 100%; height: 100%; background-color: black;\">\r\n    <div *ngIf=\"staCaricandoVideo == false && videoNONCaricato == true && videoSource\" [style.width.%] = \"mascheraTesto == true ? 75 : 100\" style=\"height: 85%;\">\r\n      <youtube-player #videoPlayer videoId=\"{{videoSource}}\" width=\"100%\" height=\"100%\"></youtube-player>\r\n    </div>\r\n\r\n    <div *ngIf=\"staCaricandoVideo == false && videoNONCaricato == false && videoSource\" [style.width.%] = \"mascheraTesto == true ? 75 : 100\" style=\"height: 85%;\">\r\n      <video #videoPlayerLocale muted onloadedmetadata=\"this.muted=true\" controls width=\"100%\" height=\"100%\">\r\n        <source src=\"{{videoSource}}\"\r\n                type=\"video/mp4\">    \r\n        Sorry, your browser doesn't support embedded videos.\r\n      </video>\r\n    </div>\r\n\r\n    <!-- {{staCaricandoVideo}}--{{videoNONCaricato}} -->\r\n    <img *ngIf=\"staCaricandoVideo == true\" [style.width.%] = \"mascheraTesto == true ? 75 : 100\" style=\"height: 85%; z-index: 1000;\" src=\"assets/immagini/please wait.jpg\" />\r\n  </div>\r\n\r\n  <div id=\"divImmagine1\" \r\n    *ngIf=\"immagineBrano && modalitaYouTube === 'N'\"\r\n    [style.width] = \"mascheraTesto == true ? '75%' : '100%'\"\r\n    [style.opacity] = \"opacitaImmagine1\"\r\n    style=\"position: absolute; height: 100%; left: 0px; top: 0px; background-color: black; \r\n      background-repeat: no-repeat; background-size: cover; background-position: center;\"\r\n    [ngStyle]=\"{'background-image': getUrl()}\"\r\n  ></div>\r\n  \r\n  <div id=\"divImmagine2\"\r\n    *ngIf=\"immagineBrano && modalitaYouTube === 'N'\"\r\n    [style.width] = \"mascheraTesto == true ? '75%' : '100%'\"\r\n    [style.opacity] = \"opacitaImmagine2\"\r\n    style=\"position: absolute; height: 100%; left: 0px; top: 0px; background-color: black; \r\n      background-repeat: no-repeat; background-size: contain; background-position: center;\"\r\n    [ngStyle]=\"{'background-image': getUrl()}\"\r\n  ></div>\r\n  <!-- [@fade]=\"state\" (@fade.done)=\"onDone($event)\" -->\r\n\r\n  <div style=\"position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;\">\r\n    <div \r\n      [style.width] = \"mascheraTesto == true ? '75%' : '100%'\"\r\n      style=\"float: left;\">\r\n      <div style=\"width: 100%; height: 100%; padding: 5px; z-index: 1;\">\r\n\r\n        <div style=\"width: 100%; height: 100%;\">\r\n          <!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n          <div \r\n            style=\"width: 100%; height: auto; float: left; text-align: center;\r\n                  background-color: rgb(36 34 34);\r\n                  opacity: .85;\r\n                  border-radius: 5px;\r\n                  border: 1px solid #9995;\r\n                  -webkit-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n                  -moz-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n                  box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n            \">\r\n            <div style=\"width: 100%;\">\r\n              <div \r\n                style=\"\r\n                  height: 37px;\r\n                  width: calc(100% - 50px);\r\n                  float : left; \r\n                  text-align: center;\r\n                  opacity: .65;\r\n                  color: #fff700;\r\n                  white-space: nowrap;\r\n                  margin: 2px;\r\n                  border-radius: 3px;\r\n                \">\r\n                <span *ngIf=\"titoloBrano\" style=\"font-family: Verdana; font-size: 22px;\">{{scritte[qualeScritta]}}</span><br />\r\n              </div>\r\n\r\n              <div style=\"\r\n                margin: 2px;\r\n                width: 230px; \r\n                float : left; \r\n                height: auto;\r\n                text-align: right;\r\n                opacity: .75;\r\n                color: #fff700;\r\n                white-space: nowrap;\r\n                \">\r\n                <img *ngIf=\"modalitaYouTube == 'S'\" src=\"assets/immagini/icona_INDIETRO.png\" (click)=\"ytComponent.indietroVideo(this)\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <img *ngIf=\"modalitaYouTube == 'S'\" src=\"assets/immagini/icona_SALVA.png\" (click)=\"ytComponent.salvaVideo(this)\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <img *ngIf=\"modalitaYouTube == 'S'\" src=\"assets/immagini/icona_DOWNLOAD-TAG.png\" (click)=\"downloadVideo()\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <img *ngIf=\"modalitaYouTube == 'S' && videoNONCaricato == false\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaVideo()\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <img *ngIf=\"modalitaYouTube == 'S'\" src=\"assets/immagini/icona_REFRESH.png\" (click)=\"ytComponent.prendeVideoYouTube(this,'S')\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <img *ngIf=\"modalitaYouTube == 'S'\" src=\"assets/immagini/icona_AVANTI.png\" (click)=\"ytComponent.avanzaVideo(this)\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\">\r\n                <!-- <img src=\"assets/immagini/eliminadx.png\" title=\"Elimina Brano\" (click)=\"eliminaBrano()\" style=\"margin-right: 5px; cursor: pointer; width: 35px; height: 35px;\"> -->\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n              <!-- background-color: rgb(36 34 34);\r\n              border-radius: 5px;\r\n              border: 1px solid #9995;\r\n              -webkit-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n              -moz-box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n              box-shadow: 0px 0px 24px 2px rgba(0,0,0,0.75);\r\n               color: #fff700; -->\r\n          <div id=\"divBarraTasti\" \r\n            style=\"position: absolute; left: 0px; bottom: 5px;\r\n              padding: 3px;\r\n              margin-left: 5px;\r\n              opacity: .85;\r\n              white-space: nowrap;\r\n            \"\r\n            (click)=\"settaZIndex(11)\"\r\n            [style.width] = \"mascheraTesto == true ? '74%' : '99%'\">\r\n\r\n            <!-- Tasti musicali -->\r\n            <div *ngIf=\"visuaTasti == false\" \r\n              style=\"margin-right: 1%; float: left; padding: 2px;\"\r\n              [style.width.%]=\"visuaTagBrano ? '69' : '99'\">\r\n              &nbsp;\r\n            </div>\r\n            <div *ngIf=\"visuaTasti\"\r\n              [style.width.%]=\"visuaTagBrano ? '69' : '99' \"\r\n              style=\"color: #fff700; background-color: rgb(36 34 34); margin-right: 1%; float: left; border: 1px solid #6e605d; border-radius: 5px; padding: 2px;\">\r\n\r\n              <!-- PROSSIMO BRANO -->\r\n              <div style=\"width: 100%; height: 27px; margin-bottom: 5px;\">\r\n                <div class=\"nomeBrano\"\r\n                  [style.width]=\"fFiles.operazioneSuFile && fFiles.operazioneSuFile != '' ? titoloBranoAutomatico && titoloBranoAutomatico != '' ? '33%' :'50%' : titoloBranoAutomatico && titoloBranoAutomatico != '' ? '50%' : '100%'\"\r\n                >\r\n                  <span *ngIf=\"!fFiles.operazioneSuFile || fFiles.operazioneSuFile == '' || !titoloBranoAutomatico || titoloBranoAutomatico == ''\" >{{ artista }} - </span>\r\n                  <span *ngIf=\"!fFiles.operazioneSuFile || fFiles.operazioneSuFile == '' || !titoloBranoAutomatico || titoloBranoAutomatico == ''\" >{{ album }} - </span>\r\n                  {{ titoloBrano }}\r\n                </div>\r\n\r\n                <div\r\n                  *ngIf=\"titoloBranoAutomatico && titoloBranoAutomatico != ''\" \r\n                  [style.width]=\"fFiles.operazioneSuFile && fFiles.operazioneSuFile != '' ? '33%' : '50%'\"\r\n                  class=\"successivoMask\">\r\n                  <div style=\"width: 30px; float: left;\">\r\n                    <img src=\"assets/immagini/icona_REFRESH.png\" style=\"margin-top: -7px; margin-right: 5px; cursor: pointer; width: 20px; height: 20px;\" (click)=\"gestAndroid.scaricaProssimoBranoInAutomatico(tt)\">\r\n                  </div>\r\n                  <!-- Succ. {{titoloBranoAutomatico}} -->\r\n                  <div #txtTitoloBranoAutomatico id=\"txtTitoloBranoAutomatico\" style=\"width: calc(100% - 30px); float: left;\">\r\n                    {{ testoScrollabile[0] }}\r\n                  </div>\r\n                  <div style=\"clear: both;\"></div>\r\n                </div>            \r\n                \r\n                <div\r\n                  *ngIf=\"fFiles.operazioneSuFile && fFiles.operazioneSuFile != ''\" \r\n                  [style.width]=\"titoloBranoAutomatico && titoloBranoAutomatico != '' ? '33%' : '50%'\"\r\n                  class=\"downloadMask\">\r\n                  <!-- {{fFiles.operazioneSuFile}} -->\r\n                  <div #txtOperazioneSuFile id=\"txtOperazioneSuFile\" style=\"width: 100%;\">\r\n                    {{ testoScrollabile[1] }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- PROSSIMO BRANO -->\r\n              \r\n              <div style=\"width: 100%; float: left;\">\r\n                <div style=\"width: 20%; text-align: left; float: left; white-space: nowrap;\">\r\n                  &nbsp;{{tempoPassato}}\r\n                </div>\r\n                <div style=\"width: 60%; text-align: center; float: left; margin: -12px;\">\r\n                  <mat-slider min=\"1\" [max]=\"durata\" step=\"1\" [value]=\"posizioneBrano\" (input)=\"spostamentoBarra($event)\" ></mat-slider>\r\n                </div>\r\n                <div style=\"width: 20%; text-align: right; float: left; white-space: nowrap;\">\r\n                  &nbsp;{{tempoTotale}}\r\n                </div>\r\n              </div>\r\n              <div style=\"width: 33%; text-align: center; float: left; margin-top: 10px;\">\r\n                <img src=\"assets/immagini/indietro.png\"\r\n                  onmouseover=\"this.src='assets/immagini/indietro_flip.png'\"\r\n                  onmouseout=\"this.src='assets/immagini/indietro.png'\"\r\n                  (click)=\"indietroBrano()\"\r\n                  style=\"width: 64px; height: 64px;\">\r\n              </div>\r\n              <div style=\"width: 34%; text-align: center; float: left; margin-top: 10px;\">\r\n                <img *ngIf=\"staSuonando == true && staAspettandoCaricamento == false\" src=\"assets/immagini/icona_pausa.png\"\r\n                  onmouseover=\"this.src='assets/immagini/icona_pausa_flip.png'\"\r\n                  onmouseout=\"this.src='assets/immagini/icona_pausa.png'\"\r\n                  (click)=\"play(false);\"\r\n                  style=\"width: 64px; height: 64px;\">\r\n                <img *ngIf=\"staSuonando == false && staAspettandoCaricamento == false\" src=\"assets/immagini/icona_PLAY.png\"\r\n                  onmouseover=\"this.src='assets/immagini/icona_play_flip.png'\"\r\n                  onmouseout=\"this.src='assets/immagini/icona_PLAY.png'\"\r\n                  (click)=\"play(true);\"\r\n                  style=\"width: 64px; height: 64px;\">\r\n                <!-- <div *ngIf=\"staCaricandoVideo == true\" style=\"width: 10px; height: 64px;\">&nbsp;</div> -->\r\n              </div>\r\n              <div style=\"width: 33%; text-align: center; float: left; margin-top: 10px;\">\r\n                <img src=\"assets/immagini/avanti.png\"\r\n                  onmouseover=\"this.src='assets/immagini/avanti_flip.png'\"\r\n                  onmouseout=\"this.src='assets/immagini/avanti.png'\"\r\n                  (click)=\"avantiBrano()\"\r\n                  style=\"width: 64px; height: 64px;\">\r\n              </div>\r\n            </div>\r\n            <!-- Tasti musicali -->\r\n\r\n            <!-- Finestrella TAG -->\r\n            <div *ngIf=\"visuaTagBrano\" style=\"width: 30%;\r\n              height: 136px;\r\n              float: left;\r\n              color: #fff700;\r\n              background-color: rgb(36 34 34);\r\n              border: 1px solid #6e605d;\r\n              border-radius: 5px;\">\r\n              <div style=\"width: 100%; height: 25px; float: left; color: black; background-color: #83ff87; text-align: center; font-weight: bold;\">\r\n                Tags\r\n              </div>\r\n              <div *ngIf=\"braniFiltrati\" style=\"width: 100%; height: calc(100% - 25px); float: left; overflow: auto;\">\r\n                <table *ngIf=\"tagsBrano\" style=\"width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n                  <tr *ngFor=\"let tag of tagsBrano; index as j;\">\r\n                    <td>\r\n                      <img *ngIf=\"Amministratore == 'S'\" title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTag(tag.idTag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n                    </td>\r\n                    <td>\r\n                      {{tag.Progressivo}}\r\n                    </td>\r\n                    <td>\r\n                      {{tag.Tag}}\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n              <div style=\"position: absolute; top: 2px; right: 5px;\">\r\n                <img *ngIf=\"Amministratore == 'S'\" title=\"Aggiungi tag\" src=\"assets/immagini/icona_CERCA.png\" (click)=\"aggiungeTag()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n                <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"visuaTagBrano = false; storage.checkVisuaTagBrano(tt, false);\">\r\n              </div>\r\n            \r\n            </div>  \r\n            <!-- Finestrella TAG -->\r\n              \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Maschera Testo -->\r\n  </div>\r\n</div>\r\n<!-- CORPO -->\r\n\r\n<!-- Maschera Testo -->\r\n<div id=\"divTesto\"\r\n  *ngIf=\"mascheraTesto == true && immagineBrano\"\r\n  [style.width] = \"mascheraTesto == true ? '25%' : '0px'\"\r\n  [ngStyle]=\"{'background-image': 'linear-gradient(rgba(55,55,55,.65), rgba(155,155,155,.65)), url(' + immagineBrano + ')'}\"\r\n  style=\"\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0px;\r\n    background-color: rgb(37 37 37);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    padding: 3px;\r\n    color: #ffffc6;        \r\n    font-size: 12px;\r\n    opacity: .8;\r\n    line-height: 13px;\r\n    float: left;\r\n  \"      \r\n  (click)=\"settaZIndex(10)\"    \r\n  >\r\n  <div *ngIf=\"isConnected\" style=\"width: 100%; height: 80x; float: left; overflow-y: hidden; overflow-x: auto; white-space: nowrap;\">        \r\n    <img *ngIf=\"bellezza[0]\" title=\"Bellezza 1\" [src]=\"bellezza[0]\" (click)=\"settaStelle(1)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[0]\" title=\"Bellezza 1\" [src]=\"bellezza[0]\" (click)=\"settaStelle(1)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[1]\" title=\"Bellezza 2\" [src]=\"bellezza[1]\" (click)=\"settaStelle(2)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[2]\" title=\"Bellezza 3\" [src]=\"bellezza[2]\" (click)=\"settaStelle(3)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[3]\" title=\"Bellezza 4\" [src]=\"bellezza[3]\" (click)=\"settaStelle(4)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[4]\" title=\"Bellezza 5\" [src]=\"bellezza[4]\" (click)=\"settaStelle(5)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[5]\" title=\"Bellezza 6\" [src]=\"bellezza[5]\" (click)=\"settaStelle(6)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[6]\" title=\"Bellezza 7\" [src]=\"bellezza[6]\" (click)=\"settaStelle(7)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[7]\" title=\"Bellezza 8\" [src]=\"bellezza[7]\" (click)=\"settaStelle(8)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[8]\" title=\"Bellezza 9\" [src]=\"bellezza[8]\" (click)=\"settaStelle(9)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <img *ngIf=\"bellezza[9]\" title=\"Bellezza 10\" [src]=\"bellezza[9]\" (click)=\"settaStelle(10)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n    <br />\r\n    <img *ngIf=\"testoTradotto && testoTradotto != ''\" [src]=\"linguaggioIcona\" (click)=\"settaLinguaggio()\" style=\"cursor: pointer; width: 35px; height: 35px;\">\r\n    &nbsp;\r\n    <img src=\"assets/immagini/ascoltata.png\" style=\"cursor: pointer; width: 25px; height: 20px;\">{{volteAscoltatoBrano}}\r\n    <hr />\r\n  </div>\r\n  <div style=\"width: 100%; height: calc(100% - 80px); float: left; overflow: auto;\">\r\n    <div *ngIf=\"linguaggio == 'OR'\" style=\"margin-top: 10px; text-shadow: 1px 1px #000000;\" [innerHTML]=\"testo\"></div>\r\n    <div *ngIf=\"linguaggio == 'IT'\" style=\"margin-top: 10px; text-shadow: 1px 1px #000000;\" [innerHTML]=\"testoTradotto\"></div>\r\n  </div>\r\n</div>\r\n<!-- Maschera Testo -->\r\n\r\n<!-- ICON MENU INFO ARTISTA\r\n<div \r\n  *ngIf=\"playlistVisibile == false && infoArtistaVisibile == false && isConnected\"\r\n  style=\"position: absolute; top: calc(25% - 32px); left: -14px; z-index: 1001;\"\r\n  [style.left]=\"playlistVisibile ? '-275px' : '-21px'\"\r\n>\r\n  <img src=\"assets/immagini/icona_AVANTI_Rossa.png\"\r\n    style=\"width: 48px; height: 64px;\"\r\n    (click)=\"infoArtistaVisibile = !infoArtistaVisibile\">\r\n</div>\r\nICON MENU INFO ARTISTA -->\r\n\r\n<!-- MENU INFO ARTISTA -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div id=\"divInfoArtista\" ngDraggable [handle]=\"handleInfo\" *ngIf=\"mascheraArtisti\" \r\n  [style.height]=\"deviceGirante == 'Android' ? 'calc(100% - 200px)' : 'calc(100% - 170px)'\"\r\n  style=\"position: absolute; top: 55px; left: 0px; width: 60%; \r\n  box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n  background-color: rgb(36 34 34); border: 1px solid rgb(78 75 74); opacity: .85; border-radius: 5px; z-index: 1001;\r\n  overflow: hidden;\"\r\n  (click)=\"tt.settaZIndex(4)\"    \r\n  >\r\n  <div style=\"width: 100%; height: 50px; text-align: center; float: left;\">\r\n    <h5><span style=\"color: #c7bd1e\">INFO Artista {{artista}}</span></h5>\r\n    <hr />\r\n  </div>\r\n\r\n  <div *ngIf=\"caricamentoInCorsoIA\" style=\"height: calc(100% - 50px); width: 100%; float: left; overflow: auto;\">\r\n    <img style=\"width: 100%; height: 100%;\" src=\"assets/immagini/wait.gif\" />\r\n  </div>\r\n\r\n  <div *ngIf=\"!caricamentoInCorsoIA\" style=\"height: calc(100% - 50px); width: 100%; float: left; overflow: auto;\">\r\n    <div style=\"width: 100%; text-align: center;\">\r\n      <h6><span style=\"color: white\">Membri / Gruppi di appartenenza</span></h6>\r\n    </div>\r\n    <table *ngIf=\"membriArtista\" style=\"width: 100%;\" cellpading=\"0\" cellspacing=\"0\">\r\n      <tr>\r\n        <th style=\"color: white\">Nome</th>\r\n        <th style=\"color: white\">Inizio</th>\r\n        <th style=\"color: white\">Fine</th>\r\n        <th style=\"color: white\">Ruolo</th>\r\n        <th style=\"color: white\">Sesso</th>\r\n        <th style=\"color: white\">Nascita</th>\r\n        <th style=\"color: white\">Morte</th>\r\n        <th style=\"color: white\">Citta</th>\r\n        <th style=\"color: white\">Nazione</th>\r\n      </tr>\r\n      <tr *ngFor=\"let membro of membriArtista; index as j;\">\r\n        <td style=\"color:#11d267; cursor: pointer;\"><a (click)=\"goToLink('https://www.google.com/search?q=' + membro.Nome)\">{{membro.Nome}}</a></td>\r\n        <td style=\"color: white\">{{membro.Inizio}}</td>\r\n        <td style=\"color: white\">{{membro.Fine}}</td>\r\n        <td style=\"color: white\">{{membro.Ruolo}}</td>\r\n        <td style=\"color: white\">{{membro.Sesso}}</td>\r\n        <td style=\"color: white\">{{membro.DataNascita}}</td>\r\n        <td style=\"color: white\">{{membro.DataMorte}}</td>\r\n        <td style=\"color: white\">{{membro.Citta}}</td>\r\n        <td style=\"color: white\">{{membro.Nazione}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <br />\r\n    <div style=\"width: 100%; text-align: center;\">\r\n      <h6><span style=\"color: white\">Dischi</span></h6>\r\n    </div>\r\n    <table *ngIf=\"dischiArtista\" style=\"width: 100%;\" cellpading=\"0\" cellspacing=\"0\">\r\n      <tr>\r\n        <th style=\"color: white\">Titolo</th>\r\n        <th style=\"color: white\">Data</th>\r\n        <th style=\"color: white\">Tipo</th>\r\n      </tr>\r\n      <tr *ngFor=\"let disco of dischiArtista; index as j;\">\r\n        <td [style.background-color]=\"disco.Presente == 'S' ? '#c3f5b2' : '#f2f3f3'\" style=\"width: 70%;\">{{disco.Titolo}}</td>\r\n        <td [style.background-color]=\"disco.Presente == 'S' ? '#c3f5b2' : '#f2f3f3'\" style=\"width: 20%;\">{{disco.DataDisco}}</td>\r\n        <td [style.background-color]=\"disco.Presente == 'S' ? '#c3f5b2' : '#f2f3f3'\" style=\"width: 10%;\">{{disco.Tipologia}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <br />\r\n    <div style=\"width: 100%; text-align: center;\">\r\n      <h6><span style=\"color: white\">Collegamenti</span></h6>\r\n    </div>\r\n    <table *ngIf=\"urlsArtista\" style=\"width: 100%;\" cellpading=\"0\" cellspacing=\"0\">\r\n      <tr>\r\n        <th>Indirizzo</th>\r\n        <th>Tipo</th>\r\n      </tr>\r\n      <tr *ngFor=\"let url of urlsArtista; index as j;\">\r\n        <td style=\"width: 80%; color:blue; cursor: pointer;\"><a (click)=\"goToLink(url.Indirizzo)\">{{url.Indirizzo}}</a></td>\r\n        <td style=\"width: 20%;\">{{url.Tipologia}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img #handleInfo src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp;<img *ngIf=\"!caricamentoInCorsoIA\" src=\"assets/immagini/icona_REFRESH.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"caricaDettaglioArtista('S')\">\r\n    &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraArtisti = false; storage.checkArtisti(tt, false);\">\r\n  </div>\r\n</div>\r\n<!-- MENU INFO ARTISTA -->\r\n\r\n<!-- ICON MENU' SINISTRA\r\n<div \r\n  *ngIf=\"infoArtistaVisibile == false && isConnected\"\r\n  style=\"position: absolute; top: calc(63% - 32px); left: -14px; z-index: 1001;\"\r\n  [style.left]=\"playlistVisibile == true ? '275px' : '-21px'\"\r\n>\r\n  <img src=\"assets/immagini/icona_AVANTI.png\"\r\n    style=\"width: 48px; height: 64px;\"\r\n    (click)=\"playlistVisibile = !playlistVisibile\">\r\n</div>\r\nICON MENU' SINISTRA -->\r\n\r\n<!-- FILTRO BRANI -->\r\n<app-filtro\r\n  [mascheraFiltroBrani]=\"mascheraFiltroBrani\"\r\n  [deviceGirante]=\"deviceGirante\"\r\n  [mascheraOpzioni]=\"mascheraOpzioni\"\r\n  [mascheraTesto]=\"mascheraTesto\"\r\n  [fFiles]=\"fFiles\"\r\n  [braniFiltrati]=\"braniFiltrati\"\r\n  [storage]=\"storage\"\r\n  [eliminaMamma]=\"eliminaMamma\"\r\n  [canzoniLocali]=\"canzoniLocali\"\r\n  [canzoniMamma]=\"canzoniMamma\"\r\n  [consideraStelle]=\"consideraStelle\"\r\n  [maiVotate]=\"maiVotate\"\r\n  [isConnected]=\"isConnected\"\r\n  [tt]=\"tt\"\r\n  [filtroImpostato]=\"filtroImpostato\"\r\n  [quantiBraniFiltrati]=\"quantiBraniFiltrati\"\r\n  [numeroStelle]=\"numeroStelle\"\r\n  [tags]=\"tagsRicerca\"\r\n  [listaTags]=\"listaTags\"\r\n  [esclusioni]=\"esclusioni\"\r\n  [zIndex]=\"zIndex\"\r\n\r\n  (mascheraFiltroBraniEmit)=\"mascheraFiltroBrani = $event\"\r\n  (fFilesEmit)=\"fFiles = $event\"\r\n  (braniFiltratiEmit)=\"braniFiltrati = $event\"\r\n  (eliminaMammaEmit)=\"eliminaMamma = $event\"\r\n  (canzoniLocaliEmit)=\"canzoniLocali = $event\"\r\n  (canzoniMammaEmit)=\"canzoniMamma = $event\"\r\n  (consideraStelleEmit)=\"consideraStelle = $event\"\r\n  (maiVotateEmit)=\"maiVotate = $event\"\r\n  (filtroImpostatoEmit)=\"filtroImpostato = $event; filtraBrani();\"\r\n  (numeroStelleEmit)=\"numeroStelle = $event\"\r\n  (esclusioniEmit)=\"esclusioni = $event; filtraBrani();\"\r\n  (tagsEmit)=\"tagsRicerca = $event; filtraBrani();\"\r\n>\r\n</app-filtro>\r\n<!-- FILTRO BRANI -->\r\n\r\n<!-- MENU' LISTA BRANI  ngDraggable [handle]=\"handleTreeView\" -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \"\r\n[style.height]=\"deviceGirante == 'Android' ? 'calc(100% - 233px)' : 'calc(100% - 203px)'\" -->\r\n<div id=\"divListaBrani\" *ngIf=\"mascheraBrani\"\r\n  style=\"position: absolute; top: 55px; left: 3px; width: calc(50% - 5px); \r\n    box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n    height: calc(100% - 203px);\r\n    background-color: rgb(36 34 34); border: 1px solid rgb(78 75 74); opacity: .85; border-radius: 5px; z-index: 1001;\r\n    overflow: hidden; max-width: 250px;\"\r\n  (click)=\"tt.settaZIndex(3)\"    \r\n  >\r\n  <!-- <img src=\"assets/immagini/icona_INDIETRO.png\" style=\"position: absolute; right: 0px; top: 0px; z-index: 99;\" (click)=\"playlistVisibile = false\"> -->\r\n\r\n  <div style=\"width: 100%; height: 100%; float: left; border-top: 1px solid #999; -webkit-box-shadow: 1px -4px 12px -2px #000000; box-shadow: 1px -4px 12px -2px #000000;\">\r\n    <app-treeview\r\n      [braniFiltrati]=\"braniFiltrati\"\r\n      [numeroBranoSelezionato]=\"numeroBranoAttuale\"\r\n      [playlistVisibile]=\"mascheraBrani\"\r\n      [mostraCanzoni]=\"true\"\r\n      [listaTags]=\"listaTags\"\r\n      [Amministratore]=\"Amministratore\"\r\n      [deviceGirante]=\"deviceGirante\"\r\n\r\n      (branoInLocale)=\"branoPresenteSuSD = $event;\"\r\n      (branoClickato)=\"caricaBranoConClick($event)\"\r\n      (numeroBrani)=\"quantiBraniFiltrati = $event;\"\r\n      (braniCambiati)=\"braniFiltrati = $event\"\r\n    >\r\n    </app-treeview>\r\n  </div>\r\n  \r\n  <div style=\"position: absolute; top: 0px; right: 8px;\">\r\n    <!-- <img #handleTreeView src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp; -->\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraBrani = false; storage.checkBrani(tt, false);\">\r\n  </div>\r\n</div>\r\n<!-- MENU' LISTA BRANI -->\r\n\r\n<!-- ICONA MENU' DESTRA\r\n<div\r\n  *ngIf=\"isConnected\"\r\n  style=\"position: absolute; top: calc(50% - 32px); \"\r\n  [style.right]=\"impostazioniVisibile == true ? '230px' : '-21px'\"\r\n>\r\n  <img src=\"assets/immagini/icona_INDIETRO.png\" \r\n    style=\"width: 48px; height: 64px; opacity: .8;\" \r\n    (click)=\"impostazioniVisibile = !impostazioniVisibile\">\r\n</div>\r\nICONA MENU' DESTRA -->\r\n\r\n<!-- MENU' OPZIONI -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div id=\"divOpzioni\" ngDraggable [handle]=\"handleOpzioni\" *ngIf=\"mascheraOpzioni\" \r\n  [style.height]=\"deviceGirante == 'Android' ? 'calc(100% - 233px)' : 'calc(100% - 203px)'\"\r\n  [style.right] = \"mascheraTesto == true ? '25%' : '2px'\"\r\n  style=\"position: absolute; top: 55px; margin-right: 3px; width: 250px;  overflow: auto;\r\n        box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n        background-color: rgb(36 34 34); padding: 5px; z-index: 1009; opacity: .85;\r\n        border-radius: 5px; border: 1px solid rgb(78 75 74);\"\r\n  (click)=\"tt.settaZIndex(6)\"\r\n  >\r\n  <!-- <img src=\"assets/immagini/icona_AVANTI.png\" style=\"position: absolute; left: 0px; top: 0px; z-index: 99;\" (click)=\"impostazioniVisibile = false\"> -->\r\n  <br />\r\n  <br />\r\n  <div style=\"position: absolute; width: 97%; height: calc(100% - 40px); top: 20px; overflow: auto;\">\r\n    <table style=\"width: 100%;\">\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"random == 'S'\" (change)=\"storage.checkRandom(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Modalità Random</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"modalitaYouTube == 'S'\" (change)=\"storage.checkModalitaYouTube(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Modalità YouTube</span>\r\n        </td>\r\n      </tr>\r\n      <!-- <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"moadalitaLite\" (change)=\"storage.checkModalitaLight(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Modalità LITE</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"visuaTesto == 'S'\" (change)=\"checkVisuaTesto($event)\" />\r\n        </td>\r\n        <td>\r\n          Visualizza Testo\r\n        </td>\r\n      </tr> -->\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"sfuma == true\" (change)=\"storage.checkSfumaImmagini(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Sfuma immagini</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"cicla == true\" (change)=\"storage.checkCiclaImmagini(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Cicla sempre immagini</span>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"Amministratore == 'S'\">\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"debug == true\" (change)=\"storage.checkDebug(tt, $event); aprePannelloDebug();\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Modalità debug</span>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"deviceGirante == 'Android'\">\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"checkRicaricaBraniLocali == true\" (change)=\"storage.checkRicarica(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Ricarica locali</span>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"deviceGirante == 'Android'\">\r\n        <td style=\"text-align: center;\">\r\n          <input type=\"checkbox\" [checked]=\"limitaBrani == true\" (change)=\"storage.checkLimitaBrani(tt, $event)\" />\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Limita brani memorizzati su SD</span>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"deviceGirante == 'Android' && limitaBrani == true\">\r\n        <td style=\"text-align: center;\">\r\n        </td>\r\n        <td>\r\n          <input type=\"text\" [value]=\"numeroLimiteBrani\" (input)=\"storage.cambiaLimiteBrani(tt, $event.target.value)\" style=\"width: 99%;\">\r\n        </td>\r\n      </tr>     \r\n      <tr *ngIf=\"Amministratore == 'S'\">\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"assets/immagini/icona_CERCA.png\" style=\"cursor: pointer; width: 40px; height: 40px;\" (click)=\"scaricaTesto()\">\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Riscarica Testo</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"assets/immagini/SegueNo.png\" style=\"cursor: pointer; width: 40px; height: 40px;\" (click)=\"tuttoSchermo()\">\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Tutto Schermo</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"assets/immagini/icona_equalizz.png\" style=\"cursor: pointer; width: 40px; height: 40px;\" (click)=\"aprePannelloUtility()\">\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Utility</span>\r\n        </td>\r\n      </tr>     \r\n      <tr *ngIf=\"Amministratore == 'S'\">\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"assets/immagini/eliminadx.png\" style=\"cursor: pointer; width: 55px; height: 55px;\" (click)=\"eliminaImmagine()\">\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Elimina Immagine</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"assets/immagini/icona_DOWNLOAD-TAG.png\" style=\"cursor: pointer; width: 40px; height: 40px;\" (click)=\"scaricaImmagine()\">\r\n        </td>\r\n        <td>\r\n          <span style=\"color: white\">Scarica Immagine</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  \r\n  <div style=\"position: absolute; top: 0px; right: 5px;\">\r\n    <img #handleOpzioni src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraOpzioni = false; storage.checkOpzioni(tt, false);\">\r\n  </div>\r\n</div>\r\n<!-- MENU' OPZIONI -->\r\n\r\n<!-- MASCHERA RICERCA\r\n<div\r\n *ngIf=\"bRicercaBrano === true\"\r\n style=\"\r\n  position: absolute;\r\n  background-color: white;\r\n  opacity: .9;\r\n  left: 15%;\r\n  top: 15%;\r\n  width: 80%;\r\n  height: 70%;\r\n  border-radius: 5px;\r\n  border: 1px solid #999;\r\n  -webkit-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  text-align: center;\r\n  z-index: 999;\r\n\">\r\n  <h3>Ricerca brano</h3>\r\n  <hr />\r\n  Filtro&nbsp;\r\n  <input type=\"text\" (input)=\"utility.filtraBrani(this)\">&nbsp;\r\n  Rilevati: {{ listaFiltrata.length }}\r\n  <hr />\r\n  <div style=\"width: 100%; height: 60%; overflow: auto; text-align: left;\">\r\n    <ul>\r\n      <li *ngFor=\"let item of listaFiltrata; index as i;\" >\r\n        <div             \r\n          style=\"padding: 3px;\"            \r\n          (mouseover)=\"hover[i] = true\"\r\n          (mouseleave)=\"hover[i] = false\"\r\n          [style.background-color]=\"hover[i] == true  ? '#fbd0d0' : 'transparent'\"\r\n          (click)=\"selezioneBranoFiltrato(item)\"\r\n          >\r\n          Artista:&nbsp;{{item.Artista}}<br />\r\n          Album:&nbsp;{{item.Album}}<br />\r\n          Brano:&nbsp;{{item.Brano}}<br />\r\n        </div>\r\n        <br />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"bRicercaBrano = false\">\r\n  </div>\r\n</div>\r\n -->\r\n\r\n<!-- MESSAGGIO -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div \r\n  *ngIf=\"messaggioVisualizzato == true\"\r\n  style=\"\r\n    position: absolute;\r\n    top : 50px;\r\n    width: auto;\r\n    height: auto;\r\n    border: 1px solid #999;\r\n    opacity: .9;\r\n    border-radius: 3px;\r\n    z-index: 9999;\r\n    padding: 3px;\r\n    -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.75);    \r\n  \"\r\n  [style.right.%] = \"mascheraTesto == true ? 26 : 2\"\r\n  [style.background-color] = \"coloreSfondoMessaggio\"\r\n>\r\n  {{messaggio}}\r\n</div>\r\n<!-- MESSAGGIO -->\r\n\r\n<!-- MASCHERA UTILITY -->\r\n<div id=\"divUtility\" ngDraggable\r\n *ngIf=\"pannelloUtility === true\"\r\n style=\"\r\n  position: absolute;\r\n  background-color: white;\r\n  opacity: .95;\r\n  left: 5%;\r\n  top: 15%;\r\n  width: 90%;\r\n  height: 70%;\r\n  border-radius: 5px;\r\n  border: 1px solid #999;\r\n  -webkit-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  text-align: center;\r\n  overflow: auto;\r\n  z-index: 1012;\r\n  \"\r\n  (click)=\"settaZIndex(7)\"\r\n>\r\n  <h3>Utility</h3>\r\n  <hr />\r\n\r\n  <div style=\"width: 100%; height: 100%; display: contents;\">\r\n    <div *ngIf=\"Amministratore == 'S'\" class=\"bottoncione\" (click)=\"scaricaVideoPregressi()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/icona_DOWNLOAD-TAG.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Scarica Video\r\n    </div>\r\n    <div class=\"bottoncione\" (click)=\"storage.pulisceCookies()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/icona_ELIMINA-TAG.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Pulisce Cookies\r\n    </div>\r\n    <div *ngIf=\"Amministratore == 'S' && idUtenza == 1\" class=\"bottoncione\" (click)=\"eliminaBrutte()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/SuddenDeath.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Elimina Brutte\r\n    </div>\r\n    <div class=\"bottoncione\" (click)=\"gestioneUguali()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/uguali.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Uguali\r\n    </div>\r\n    <div *ngIf=\"deviceGirante == 'Android'\" class=\"bottoncione\" (click)=\"ricaricaBraniLocali()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/hd4.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Ricarica Brani Locali\r\n    </div>\r\n    <div class=\"bottoncione\" (click)=\"aprePannellogestioneBrani()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/icona_info.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Gestione Brani\r\n    </div>\r\n    <div class=\"bottoncione\" (click)=\"refreshCanzoni()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/preferito.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Refresh SOFT\r\n    </div>\r\n    <div class=\"bottoncione\" (click)=\"refreshCanzoniHARD(true)\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/icona_ATTENZIONE.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Refresh HARD\r\n    </div>\r\n    <div *ngIf=\"Amministratore == 'S' && idUtenza == 1\" class=\"bottoncione\" (click)=\"uploadBrani()\">\r\n      <div class=\"iconaDentro\"><img src=\"assets/immagini/icona-NASCONDE.png\" style=\"width: 100%; height: 100%;\"></div>\r\n      Upload Brani\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"pannelloUtility = false\">\r\n  </div>\r\n</div>\r\n<!-- MASCHERA UTILITY -->\r\n\r\n<!-- MASCHERA GESTIONE BRANI -->\r\n<div id=\"divGestioneBrani\" ngDraggable [handle]=\"handleGestBrani\"\r\n *ngIf=\"mascheraGestioneBrani === true\"\r\n style=\"\r\n  position: absolute;\r\n  background-color: black;\r\n  opacity: .95;\r\n  left: 5%;\r\n  top: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n  border-radius: 5px;\r\n  border: 1px solid #999;\r\n  -webkit-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  text-align: center;\r\n  z-index: 1013;\r\n  \"\r\n  (click)=\"settaZIndex(8)\"\r\n>\r\n  <h3>Gestione Brani</h3>\r\n  <hr />\r\n\r\n  <div style=\"width: 100%; height: 100%;\">\r\n    <div style=\"width: 25%; height: calc(100% - 70px); float: left; text-align: left; overflow: auto;\">\r\n      <app-treeview\r\n        [braniFiltrati]=\"datiJSON\"\r\n        [numeroBranoSelezionato]=\"numeroBrano\"\r\n        [playlistVisibile]=\"mascheraBrani\"\r\n        [mostraCanzoni]=\"false\"\r\n        [idUtenza]=\"idUtenza\"\r\n        [Amministratore]=\"Amministratore\"\r\n\r\n        (ritornoBrani)=\"braniAlbum($event)\"\r\n      >\r\n      </app-treeview>\r\n    </div>\r\n    <div style=\"width: 45%; height: 85%; float: left; text-align: left;\">\r\n      <app-album\r\n        [datiAlbum]=\"albumSelezionato\"\r\n        [urlImmagine]=\"urlImmagine\"\r\n        [idUtenza]=\"idUtenza\"\r\n        [Amministratore]=\"Amministratore\"\r\n\r\n        (datiJsonRitornati)=\"impostaDatiJSON($event)\"\r\n      >\r\n      </app-album>\r\n   \r\n    </div>\r\n    <div style=\"width: 30%; height: 85%; float: left; text-align: center; overflow: auto;\">\r\n      <app-immagini\r\n        [immagini]=\"immaginiArtista\"\r\n        [urlWS]=\"urlWS\"\r\n        [Amministratore]=\"Amministratore\"\r\n      >\r\n      </app-immagini>\r\n    </div>\r\n  </div>\r\n  <div style=\"clear: both;\"></div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img #handleGestBrani src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraGestioneBrani = false\">\r\n  </div>\r\n</div>\r\n<!-- MASCHERA GESTIONE BRANI -->\r\n\r\n<!-- MASCHERA GESTIONE UGUALI -->\r\n<div id=\"divUguali\" ngDraggable [handle]=\"handleUguali\"\r\n *ngIf=\"mascheraGestioneUguali === true\"\r\n style=\"\r\n  position: absolute;\r\n  background-color: white;\r\n  opacity: .95;\r\n  left: 5%;\r\n  top: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n  border-radius: 5px;\r\n  border: 1px solid #999;\r\n  -webkit-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  text-align: center;\r\n  z-index: 1002;\r\n\"\r\n(click)=\"settaZIndex(9)\"\r\n>\r\n  <h3>Gestione Uguali</h3>\r\n  <hr />\r\n\r\n  <div style=\"width: 100%; height: 100%;\">\r\n    <div style=\"width: 50%; height: 85%; float: left; text-align: left; overflow: auto;\">\r\n      <table *ngIf=\"uguali\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n          <th>\r\n            Artista\r\n          </th>\r\n          <th>\r\n            Brano\r\n          </th>\r\n          <th>\r\n            N°\r\n          </th>\r\n          <th>            \r\n          </th>\r\n          <th>\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let brano of uguali; index as i;\">\r\n          <td style=\"width: 48%;\">\r\n            {{brano.Artista}}\r\n          </td>\r\n          <td style=\"width: 48%;\">\r\n            {{brano.Brano}}\r\n          </td>\r\n          <td style=\"width: 4%; text-align: right;\">\r\n            {{brano.Quante}}\r\n          </td>\r\n          <td>\r\n            &nbsp;\r\n          </td>\r\n          <td>\r\n            <img src=\"assets/immagini/icona_CERCA.png\" title=\"Visualizza Brani\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"visualizzaUguali(brano);\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div style=\"width: 50%; height: 85%; float: left; text-align: left;\">\r\n      <table *ngIf=\"ugualiDettaglio\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n          <th>\r\n            Traccia\r\n          </th>\r\n          <th>\r\n            Anno\r\n          </th>\r\n          <th>\r\n            Album\r\n          </th>\r\n          <th>\r\n            <img src=\"assets/immagini/preferito.png\" style=\"cursor: pointer; width: 20px; height: 20px;\">        \r\n          </th>\r\n          <th>\r\n            <img src=\"assets/immagini/ascoltata.png\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n          </th>\r\n          <th>            \r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let brano of ugualiDettaglio; index as i;\">\r\n          <td>\r\n            {{brano.Traccia}}\r\n          </td>\r\n          <td>\r\n            {{brano.Anno}}\r\n          </td>\r\n          <td>\r\n            {{brano.Album}}\r\n          </td>\r\n          <td>\r\n            {{brano.Bellezza}}\r\n          </td>\r\n          <td>\r\n            {{brano.Ascoltata}}\r\n          </td>\r\n          <td>\r\n            <img src=\"assets/immagini/icona_ELIMINA-TAG.png\" title=\"Elimina brano\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"eliminaBranoUguali(brano)\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img #handleUguali src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraGestioneUguali = false\">\r\n  </div>\r\n</div>\r\n<!-- MASCHERA GESTIONE UGUALI -->\r\n\r\n<!-- ASSENZA RETE -->\r\n<div *ngIf=\"!isConnected\" style=\"position: absolute; top: 5px; left: calc(50% - 20px); width: 40px;\">\r\n  <img src=\"assets/immagini/wifi_1.png\" style=\"margin-right: 5px; cursor: pointer; width: 40px; height: 40px;\">\r\n</div>\r\n<!-- ASSENZA RETE -->\r\n\r\n<!-- \r\n<div style=\"position: absolute; bottom: 1px; left: 0px; width: 100%; height: 30px; text-align: center; background-color: white; opacity: .85; border: 1px solid #999;\">\r\n  {{appoSfondo}}\r\n</div>\r\n-->\r\n\r\n<!-- Maschera DEBUG ngDraggable [handle]=\"handleDebug\" -->\r\n<div id=\"divDebug\"\r\n  style=\"width: 90%; height: auto; position: absolute; left: 5%; top: 25%;\">\r\n  <div *ngIf=\"debug == true\"\r\n    style=\"\r\n      width: 100%;\r\n      height: 30px;\r\n      background-color: #171717;\r\n      border: 1px solid #68696d;\r\n      padding: 2px;\r\n      float: left;\r\n      box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      border-radius: 3px;\r\n      text-align: right;\"\r\n    (click)=\"settaZIndex(1)\"\r\n  >\r\n      <span style=\"color: green; margin-top: -2px;\">Filtro&nbsp;</span><input type=\"text\" [value]=\"filtroImpostatoDebug\" (input)=\"filtroImpostatoDebug = $event.target.value; utility.metteFiltroDebug(tt);\" style=\"width: 30%; margin-top: -2px;\">\r\n      <img #handleDebug src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n      &nbsp;<img src=\"assets/immagini/icona_REFRESH.png\" style=\"cursor: pointer; width: 25px; height: 25px; z-index: 9999; margin-top: -4px;\" (click)=\"debuggone = ''; debuggone2 = '';\">\r\n      &nbsp;<img src=\"assets/immagini/EMail.png\" style=\"cursor: pointer; width: 25px; height: 25px; z-index: 9999; margin-top: -4px;\" (click)=\"mandaEmail()\">\r\n      &nbsp;<img *ngIf=\"deviceGirante == 'Android'\" src=\"assets/immagini/icona_SALVA.png\" style=\"cursor: pointer; width: 25px; height: 25px; z-index: 9999; margin-top: -4px;\" (click)=\"salvaLog()\">\r\n      &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px; z-index: 9999; margin-top: -4px;\" (click)=\"debug = false\">\r\n  </div>\r\n  <div #scrollMe *ngIf=\"debug\" \r\n    [innerHTML]=\"debuggone2\" [scrollTop]=\"scrollMe.scrollHeight\"\r\n    style=\"width: 100%; height: 300px; overflow: auto; float: left;\r\n          background-color: yellow; border: 1px solid #999; border-radius: 3px;\"\r\n    (click)=\"settaZIndex(1)\"\r\n  >\r\n  </div>\r\n</div>\r\n<!-- Maschera DEBUG -->\r\n\r\n<!-- Maschera About -->\r\n<div *ngIf=\"mascheraAbout === true\" ngDraggable style=\"position: absolute;\r\n  z-index: 9999;\r\n  text-align: center;\r\n  left: 33%;\r\n  width: 33%;\r\n  top: 10%;\r\n  height: 75%;\r\n  overflow: auto;\r\n  opacity: .85;\r\n  background-color: white;\r\n  border: 1px solid #999;\r\n  border-radius: 5px;\r\n  padding-bottom: 5px;\r\n  box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\">\r\n  <h1>looWebPlayer</h1>\r\n  <hr />\r\n  @Copyright Looigi227\r\n  <img src=\"assets/immagini/looigi.JPG\" width=\"90%\" height=\"60%\" style=\"border: 1px solid #999; border-radius: 5px;;\">\r\n  <hr />\r\n  <!-- OS: <span style=\"color: red\">{{ os }}</span><br />\r\n  OS vers.: {{ osVers }}<br />\r\n  Device: {{ device }}<br />\r\n  User Agent: {{ userAgent }}<br />\r\n  Browser: {{ browser }}<br />\r\n  Mobile: {{ isMobile }}<br />\r\n  Tablet: {{ isTablet }}<br />\r\n  Desktop Device: {{ isDesktopDevice }}<br />\r\n  Path: {{ pathApp }}<br />\r\n  Cordova: {{ ceCordova }}\r\n  <hr /> -->\r\n\r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraAbout = false\">\r\n  </div>\r\n</div>\r\n<!-- Maschera About -->\r\n\r\n<!-- Icona cuffia -->\r\n<!--   [style.margin-top]=\"deviceGirante == 'Android' ? '30px' : '0px' \" -->\r\n<div *ngIf=\"cuffieAttive === true\" \r\n  style=\"position: absolute; top: 10px; left: 10px; width: 40px; height: 40px; z-index: 1500;\">\r\n  <img src=\"assets/immagini/cuffie.png\" style=\"width: 100%; height: 100%;\">\r\n</div>\r\n<!-- Icona cuffia -->\r\n\r\n<!-- Maschera lettura SD-->\r\n<div *ngIf=\"letturaSD == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      position: absolute;\r\n      width: auto;\r\n      max-width: 50%;\r\n      height: auto;\r\n      z-index: 9999;\r\n      left: 50%;\r\n      transform: translateX(-50%);\r\n      top: 35%;\r\n      padding: 5px;\r\n      overflow: hidden;\r\n      background-color: white;\r\n      border-radius: 3px;\r\n      border: 1px solid #999;\r\n      text-align: center;\">\r\n  Lettura SD in corso <br />\r\n  {{ cartellaEsaminata }}\r\n  <hr />\r\n  Brani rilevati: {{fFiles.filesInMemoria.length }}\r\n</div>\r\n<!-- Maschera lettura SD-->\r\n\r\n<!-- Finestra comandi vocali -->\r\n<div *ngIf=\"comandoVocale && comandoVocale !== ''\" \r\n  style=\"position: absolute; left: 10px; top: 10px; z-index: 9999; background-color: #ffffc6; border: 1px solid #999; border-radius: 3px; padding: 3px; width: auto; height: auto;\">\r\n  {{comandoVocale}}\r\n</div>\r\n<!-- Finestra comandi vocali -->\r\n\r\n<!-- Finestra tags -->\r\n<div *ngIf=\"mostraAggiungeTag == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      position: absolute;\r\n      width: auto;\r\n      max-width: 50%;\r\n      height: auto;\r\n      z-index: 9999;\r\n      left: 50%;\r\n      transform: translateX(-50%);\r\n      transform: translateY(-50%);\r\n      max-height: 80%;\r\n      top: 50%;\r\n      padding: 5px;\r\n      overflow: hidden;\r\n      background-color: white;\r\n      border-radius: 3px;\r\n      min-width: 150px;\r\n      border: 1px solid #999;\r\n      text-align: center;\">\r\n\r\n    <div style=\"width: 100%; max-height: 400px; overflow: auto; margin-top: 20px;\">\r\n      <table *ngIf=\"listaTagsVisualizzati\" style=\"width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n        <tr>\r\n          <th>\r\n          </th>\r\n          <th>\r\n          </th>\r\n          <th>\r\n            ID\r\n          </th>\r\n          <th>\r\n            Tag\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let tag of listaTagsVisualizzati; index as j;\">\r\n          <td>\r\n            <img title=\"Seleziona tag\" src=\"assets/immagini/matitadx.png\" (click)=\"selezionaTag(tag.idTag, tag.Tag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n          <td>\r\n            <img title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTagDaLista(tag.idTag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n          <td>\r\n            {{tag.idTag}}\r\n          </td>\r\n          <td>\r\n            {{tag.Tag}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\"><hr /></td>\r\n        </tr>\r\n        <tr style=\"text-align: left;\">\r\n          <td colspan=\"1\">\r\n            <span style=\"font-weight: bold;\">Tag</span>\r\n          </td>\r\n          <td colspan=\"3\">\r\n            <input type=\"text\" [(ngModel)]=\"nuovoTag\" style=\"width: 100%; min-width: 250px;\">\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: left;\">\r\n          <td colspan=\"4\">\r\n            <img title=\"Aggiungi tag\" src=\"assets/immagini/icona_SALVA.png\" (click)=\"aggiungeTagALista()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n      <div style=\"width: calc(100% - 60px); float: left; font-weight: bold;\">\r\n        Lista Tags\r\n      </div>\r\n      <div style=\"width: 60px; float: left; text-align: right;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mostraAggiungeTag = false\">\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Finestra utenti\r\n<div *ngIf=\"mostraSceltaUtenti == true || caricamentoInCorso == true\" -->\r\n<div *ngIf=\"mostraSceltaUtenti == true\" \r\n  style=\"z-index: 2450; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute; background-color: black; opacity: .65;\">\r\n</div>\r\n\r\n<div *ngIf=\"mostraSceltaUtenti == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      position: absolute;\r\n      width: auto;\r\n      max-width: 50%;\r\n      height: auto;\r\n      z-index: 2500;\r\n      left: 50%;\r\n      transform: translateX(-50%);\r\n      transform: translateY(-50%);\r\n      max-height: 80%;\r\n      top: 50%;\r\n      padding: 5px;\r\n      overflow: hidden;\r\n      background-color: white;\r\n      border-radius: 3px;\r\n      min-width: 150px;\r\n      border: 1px solid #999;\r\n      text-align: center;\">\r\n\r\n    <div style=\"width: 100%; max-height: 400px; overflow: auto; margin-top: 20px;\">\r\n      <table *ngIf=\"Utenti\" style=\"width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n        <tr>\r\n          <th>            \r\n          </th>\r\n          <th>\r\n            Utente\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let ute of Utenti; index as j;\">\r\n          <td>\r\n            <img title=\"Seleziona Utente\" src=\"assets/immagini/matitadx.png\" (click)=\"selezionaUtente(ute)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n          <td>\r\n            {{ute.Utente}}\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n      <div style=\"width: calc(100% - 60px); float: left; font-weight: bold;\">\r\n        Lista Utenti\r\n      </div>\r\n      <div style=\"width: 60px; float: left; text-align: right;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mostraSceltaUtenti = false\">\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"passwordBox == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      position: absolute;\r\n      width: auto;\r\n      max-width: 50%;\r\n      height: auto;\r\n      z-index: 2701;\r\n      left: 50%;\r\n      transform: translateX(-50%);\r\n      transform: translateY(-50%);\r\n      max-height: 80%;\r\n      top: 50%;\r\n      padding: 5px;\r\n      overflow: hidden;\r\n      background-color: white;\r\n      border-radius: 3px;\r\n      min-width: 150px;\r\n      border: 1px solid #999;\r\n      text-align: center;\">\r\n      <h5>Password per l'utente</h5>\r\n      <div style=\"width: 100%;\">\r\n          <div style=\"width: calc(100% - 60px); float: left;\">\r\n            <input type=\"password\" [(ngModel)]=\"pwd\" style=\"width: 100%;\">\r\n          </div>\r\n          <div style=\"width: 60px; text-align: right; float: left;\">\r\n            <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"passwordBox = false\">\r\n            <img src=\"assets/immagini/icona_AVANTI.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"checkPassword()\">\r\n          </div>\r\n      </div>\r\n</div>\r\n\r\n<!-- UPLOAD Brani-->\r\n<app-upload\r\n  [mascheraVisibile]=\"mascheraUploadVisibile\"\r\n  [urlPerUpload]=\"urlPerUpload\"\r\n  [t]=\"tt\"\r\n\r\n  (refreshBrani)=\"mascheraUploadVisibile = false; refreshCanzoniHARD(false);\"\r\n  (chiusuraMaschera)=\"mascheraUploadVisibile = false\"\r\n>\r\n</app-upload>\r\n<!-- UPLOAD Brani-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filtrobrani/filtrobrani.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filtrobrani/filtrobrani.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- FILTRO BRANI -->\r\n<div id=\"divFiltroBrani\" *ngIf=\"mascheraFiltroBrani\" ngDraggable [handle]=\"handleFiltro\"\r\n  [style.right] =\"mascheraOpzioni == true && mascheraTesto == true ? 'calc(25% + 259px)' : \r\n                  mascheraOpzioni == true && mascheraTesto == false ? '259px' : \r\n                  mascheraOpzioni == false && mascheraTesto == true ? 'calc(25% + 5px)' :\r\n                  mascheraOpzioni == false && mascheraTesto == false ? '3px' : '3px'\"\r\n  style=\"position: absolute; top: 55px; height: auto; padding: 8px; width: 50%; \r\n        box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n        background-color: rgb(36 34 34); z-index: 10; border: 1px solid rgb(78 75 74); opacity: .85; border-radius: 5px;\r\n        overflow: auto; max-width: 250px;\"\r\n  (click)=\"tt.settaZIndex(2)\"\r\n  >\r\n  <!-- <img src=\"assets/immagini/icona_INDIETRO.png\" style=\"position: absolute; right: 0px; top: 0px; z-index: 99;\" (click)=\"playlistVisibile = false\"> -->\r\n\r\n  <div style=\"width: 100%; height: auto;\">\r\n    <div style=\"width: 100%; text-align: left;\">\r\n      <h5 *ngIf=\"fFiles.filesInMemoria && deviceGirante === 'Android'\" style=\"color: greenyellow;\">Brani su SD {{fFiles.filesInMemoria.length}}</h5>\r\n      <h5 *ngIf=\"braniFiltrati\" style=\"color: #c7bd1e;\">Brani in lista {{quantiBraniFiltrati}}</h5>\r\n    </div>\r\n\r\n    <div style=\"width: 40%; float: left; margin-top: 3px;\">\r\n      <span style=\"color: white\">Filtro</span>\r\n    </div>\r\n    <div style=\"width: 60%; float: left; margin-top: 1px; text-align: right;\">\r\n      <div style=\"width: 100%\">\r\n        <div style=\"width: 25px; float: left; text-align: left;\">\r\n          <img title=\"Elimina filtro\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"cambiaFiltro('')\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n        </div>\r\n        <div style=\"width: calc(100% - 50px); float: left;\">\r\n          <input type=\"text\" [value]=\"filtroImpostato\" style=\"width: 100%\" (input)=\"filtroImpostato = $event.target.value\">\r\n        </div>\r\n        <div style=\"width: 25px; float: left; text-align: right;\">\r\n          <img title=\"Imposta filtro\" src=\"assets/immagini/icona_CERCA.png\" (click)=\"cambiaFiltro(filtroImpostato)\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"width: 40%; float: left; margin-top: 3px;\">\r\n      <span style=\"color: white\">Esclusioni</span>\r\n    </div>\r\n    <div style=\"width: 60%; float: left; margin-top: 1px; text-align: left;\">\r\n      <div style=\"width: 100%\">\r\n        <div style=\"width: 25px; float: left; text-align: left;\">\r\n          <img title=\"Elimina esclusione\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"cambiaEsclusioni('')\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n        </div>\r\n        <div style=\"width: calc(100% - 50px); float: left;\">\r\n          <input type=\"text\" [value]=\"esclusioni\"  style=\"width: 100%;\" (input)=\"esclusioni = $event.target.value\">\r\n        </div>\r\n        <div style=\"width: 25px; float: left; text-align: right;\">\r\n          <img title=\"Imposta esclusione\" src=\"assets/immagini/icona_CERCA.png\" (click)=\"cambiaEsclusioni(esclusioni)\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div style=\"width: 40%; float: left; margin-top: 3px;\">\r\n      <span style=\"color: white\">Tags</span>&nbsp;\r\n      <img title=\"Aggiunge tag\" src=\"assets/immagini/icona_CERCA.png\" (click)=\"aggiungeTagRicerca()\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n    </div>\r\n    <div *ngIf=\"tags\" style=\"width: 60%; float: left; margin-top: 1px; text-align: right; \">\r\n      <div *ngFor=\"let tag of tags\" \r\n        style=\"width: auto; height: 18px; float: left; padding: 2px; margin: 1px; \r\n          border: 1px solid #999; color: #264e2a; font-size: 14px;\r\n          background-color: #6fd872; border-radius: 2px;\">\r\n        <div style=\"width: 100%; float: left; height: 18px;\">\r\n          <div style=\"width: calc(100% - 25px); float: left; margin-top: -5px; white-space: nowrap;\">\r\n            {{tag}}\r\n          </div>\r\n          <div style=\"width: 25px; float: left; margin-top: -6px;\">\r\n            <img title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTag(tag)\" style=\"cursor: pointer; width: 15px; height: 15px;\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"eliminaMamma == false && canzoniLocali == false\" style=\"width: 100%; float: left; white-space: nowrap;\">\r\n      <input type=\"checkbox\" [checked]=\"canzoniMamma == true\" (change)=\"storage.checkCanzoniMamma(tt, $event)\" /> &nbsp;\r\n      <span style=\"font-size: 15px; color: white\">Solo c. mamma</span>\r\n    </div>\r\n    <div *ngIf=\"canzoniMamma == false && canzoniLocali == false\" style=\"width: 100%; float: left; white-space: nowrap;\">\r\n      <input type=\"checkbox\" [checked]=\"eliminaMamma == true\" (change)=\"storage.checkEliminaMamma(tt, $event)\" /> &nbsp;\r\n      <span style=\"font-size: 15px; color: white;\">Elimina c. mamma</span>\r\n    </div>\r\n    <div *ngIf=\"deviceGirante == 'Android' && canzoniMamma == false\" style=\"width: 100%; float: left; white-space: nowrap;\">\r\n      <input *ngIf=\"isConnected\" type=\"checkbox\" [checked]=\"canzoniLocali == true\" (change)=\"storage.checkSoloCanzoniLocali(tt, $event)\" /> &nbsp;\r\n      <span style=\"font-size: 15px; color: white;\">Solo canzoni locali</span>\r\n    </div>\r\n    <div *ngIf=\"canzoniLocali == false\" style=\"width: 100%; float: left;\">\r\n      <div style=\"width: 70%; float: left; white-space: nowrap;\">\r\n        <input type=\"checkbox\" [checked]=\"consideraStelle == true\" (change)=\"storage.checkConsideraStelle(tt, $event)\" /> &nbsp;\r\n        <span style=\"font-size: 15px; color: white;\">Stelle</span>\r\n      </div>\r\n      <div style=\"width: 30%; float: left; margin-top: -3px;\">\r\n        <input *ngIf=\"consideraStelle == true && maiVotate == false\" style=\"width: 100%;\" type=\"number\" min=\"1\" max=\"10\" [value]=\"numeroStelle\" (input)=\"storage.cambiaStelle(tt, $event.target.value)\">\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isConnected == true\" style=\"width: 100%; float: left; white-space: nowrap; margin-top: -3px;\">\r\n      <input *ngIf=\"consideraStelle == true\" type=\"checkbox\" [checked]=\"maiVotate == true\" (change)=\"storage.checkMaiVotate(tt, $event)\" />&nbsp;&nbsp;\r\n      <span *ngIf=\"consideraStelle == true\" style=\"font-size: 15px; color: white;\">Mai Votate</span>\r\n    </div>\r\n  </div>\r\n  \r\n  <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n    <img #handleFiltro src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n    &nbsp;<img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraFiltroBrani = false; storage.checkFiltroBrani(tt, false); mascheraFiltroBraniEmit.emit(false);\">\r\n  </div>\r\n</div>\r\n<!-- FILTRO BRANI -->\r\n\r\n<!-- Finestra tags -->\r\n<div *ngIf=\"mostraAggiungeTag == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n      position: absolute;\r\n      width: auto;\r\n      max-width: 30%;\r\n      height: auto;\r\n      z-index: 9999;\r\n      left: 30%;\r\n      max-height: 80%;\r\n      top: 20%;\r\n      padding: 5px;\r\n      overflow: hidden;\r\n      background-color: white;\r\n      border-radius: 3px;\r\n      min-width: 150px;\r\n      border: 1px solid #999;\r\n      text-align: center;\">\r\n\r\n    <div style=\"width: 100%; max-height: 400px; overflow: auto; margin-top: 20px;\">\r\n      <table *ngIf=\"listaTagsVisualizzati\" style=\"width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n        <tr>\r\n          <th>\r\n          </th>\r\n          <th>\r\n          </th>\r\n          <th>\r\n            ID\r\n          </th>\r\n          <th>\r\n            Tag\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let tag of listaTagsVisualizzati; index as j;\">\r\n          <td>\r\n            <img title=\"Seleziona tag\" src=\"assets/immagini/matitadx.png\" (click)=\"selezionaTag(tag.idTag, tag.Tag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n          <td>\r\n            <img title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTagDaLista(tag.idTag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n          <td>\r\n            {{tag.idTag}}\r\n          </td>\r\n          <td>\r\n            {{tag.Tag}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\"><hr /></td>\r\n        </tr>\r\n        <tr style=\"text-align: left;\">\r\n          <td colspan=\"1\">\r\n            <span style=\"font-weight: bold;\">Tag</span>\r\n          </td>\r\n          <td colspan=\"3\">\r\n            <input type=\"text\" [(ngModel)]=\"nuovoTag\" style=\"width: 100%; min-width: 250px;\">\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: left;\">\r\n          <td colspan=\"4\">\r\n            <img title=\"Aggiungi tag\" src=\"assets/immagini/icona_SALVA.png\" (click)=\"aggiungeTagALista()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n      <div style=\"width: calc(100% - 30px); float: left; font-weight: bold;\">\r\n        Lista Tags\r\n      </div>\r\n      <div style=\"width: 30px; float: left; text-align: right;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mostraAggiungeTag = false\">\r\n      </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestionealbum/gestionealbum.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestionealbum/gestionealbum.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width: 100%; height: 100%;\">\r\n    <div *ngIf=\"album\" style=\"margin: 1%; background-color: white; width: 98%; height: 98%; border: 1px solid #999; border-radius: 4px;\">\r\n        <div style=\"width: 100%; height: 150px; border-bottom: 1px solid #999;\">\r\n            <div style=\"width: 150px; height: 150px; float: left; border: 1px solid #999;\">\r\n                <img [src]=\"immagineAlbum\" style=\"width: 100%; height: 100%;\" />\r\n            </div>\r\n            <div style=\"width: calc(100% - 150px); height: 150px; float: left; overflow: auto; padding: 5px;\">\r\n                <h1>{{nomeAlbum}}</h1>\r\n                <h3>Anno {{album.anno}}</h3>\r\n                <div style=\"width: 100%; text-align: right; height: 35px; border-top: 1px solid #999; padding-top: 5px;\">\r\n                    <img src=\"assets/immagini/icona_DOWNLOAD-TAG.png\" title=\"Scarica immagine Album\" style=\"cursor: pointer; width: 35px; height: 35px;\" (click)=\"scaricaImmagineAlbum();\">\r\n                    &nbsp;\r\n                    <img src=\"assets/immagini/eliminadx.png\" title=\"Elimina Album\" style=\"cursor: pointer; width: 35px; height: 35px;\" (click)=\"eliminaAlbum();\">\r\n                    &nbsp;\r\n                    <img src=\"assets/immagini/matitadx.png\" title=\"Rinomina Album\" style=\"cursor: pointer; width: 35px; height: 35px;\" (click)=\"rinominaAlbum();\">\r\n                </div>                 \r\n            </div>\r\n\r\n        </div>\r\n       \r\n        <div style=\"width: 100%; height: calc(100% - 150px); float: left; overflow: auto;\">\r\n            <div style=\"width: 100%; overflow: auto; height: auto;\">\r\n                <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <th>\r\n                            N°\r\n                        </th>\r\n                        <th>\r\n                            Titolo\r\n                        </th>\r\n                        <th style=\"text-align: right;\">\r\n                            <img src=\"assets/immagini/ascoltata.png\" style=\"width: 20px; height: 15px;\">\r\n                        </th>\r\n                        <th style=\"text-align: right;\">\r\n                            <img src=\"assets/immagini/preferito.png\" style=\"width: 20px; height: 20px;\">\r\n                        </th>\r\n                        <th>                    \r\n                        </th>\r\n                        <th>                    \r\n                        </th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th colspan=\"6\"><hr /></th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let brano of album.brani; index as i;\">\r\n                        <td>\r\n                            {{brano.Traccia}}\r\n                        </td>\r\n                        <td>\r\n                            {{brano.Text}}\r\n                        </td>\r\n                        <td style=\"text-align: right;\">\r\n                            {{+brano.Ascoltata}}\r\n                        </td>\r\n                        <td style=\"text-align: right;\">\r\n                            {{brano.Stelle}}\r\n                        </td>\r\n                        <td style=\"text-align: right;\">\r\n                            <img src=\"assets/immagini/eliminadx.png\" title=\"Elimina Brano\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"eliminaBrano(brano);\">\r\n                        </td>\r\n                        <td style=\"text-align: right;\">\r\n                            <img src=\"assets/immagini/matitadx.png\" title=\"Rinomina Brano\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"rinominaBrano(brano);\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"mascheraRinomina || scaricamentoImmagine\" style=\"position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; background-color: #999; opacity: .5; z-index: 1000;\">\r\n</div>\r\n<div *ngIf=\"mascheraRinomina\"\r\n    style=\"\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 35%;\r\n        left: 35%;\r\n        width: auto;\r\n        height: auto;\r\n        background-color: #f9ff9b;\r\n        border: 1px solid #999;\r\n        border-radius: 4px;\r\n        z-index: 1001;\r\n        box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n    \">\r\n    <h4>Rinomina {{tipologia}}</h4>\r\n    <hr />\r\n    <table style=\"width: 100%; min-width: 450px;\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n            <td>\r\n                <span *ngIf=\"tipologia == 'Brano'\" style=\"font-size: 18px; font-weight: bold;\">Traccia</span>\r\n                <span *ngIf=\"tipologia == 'Album'\" style=\"font-size: 18px; font-weight: bold;\">Anno</span>\r\n                &nbsp;\r\n            </td>\r\n            <td>\r\n                <input style=\"font-size: 18px; width: 100%;\" type=\"number\" [(ngModel)]=\"nuovoNumero\" />\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                <span style=\"font-size: 18px; font-weight: bold;\">Nome</span>\r\n            </td>\r\n            <td>\r\n                <input style=\"font-size: 18px; width: 100%;\" type=\"text\" [(ngModel)]=\"nuovoNome\" />\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <hr />\r\n    <div style=\"width: 100%; height: 35px;\">\r\n        <div style=\"width: 50%; float: left; text-align: center;\">\r\n            <!-- <img src=\"assets/immagini/icona_INDIETRO.png\" style=\"cursor: pointer; width: 35px; height: 35px;\" (click)=\"mascheraRinomina = false\"> -->\r\n            &nbsp;\r\n        </div>\r\n        <div style=\"width: 50%; float: left; text-align: center;\">\r\n            <img src=\"assets/immagini/icona_SALVA.png\" style=\"cursor: pointer; width: 35px; height: 35px;\" (click)=\"salvaRinomina()\">\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraRinomina = false\">\r\n    </div>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"mascheraImmAlbum\" style=\"position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; background-color: #999; opacity: .5; z-index: 1000;\">\r\n</div> -->\r\n<div *ngIf=\"mascheraImmAlbum\"\r\n    style=\"\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 5%;\r\n        left: 5%;\r\n        width: 85%;\r\n        height: 85%;\r\n        background-color: #f9ff9b;\r\n        border: 1px solid #999;\r\n        border-radius: 4px;\r\n        z-index: 1001;\r\n        box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n        overflow-x: auto;\r\n    \">\r\n    <div style=\"width: auto; \">\r\n        <div *ngFor=\"let imm of immAlbum; index as k;\" class=\"bottoncione\">\r\n            <img [src]=\"imm.Path\" style=\"cursor: pointer; width: 130px; height: 130px;\" (click)=\"impostaImmagineAlbum(imm);\">\r\n            <br />\r\n            Kb. {{imm.Dimensioni}}\r\n            <br />\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraImmAlbum = false; scaricamentoImmagine = false;\">\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestioneimmagini/gestioneimmagini.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestioneimmagini/gestioneimmagini.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Immagini: {{immaginiArtista.length}}\r\n<hr />\r\n<div *ngFor=\"let immagine of immaginiArtista; index as i;\" class=\"bottoncione\">\r\n    <img [src]=\"immagine.Immagine\" style=\"width: 100%; height: 100%;\" (click)=\"premutaImmagine(immagine, $event, i)\" />\r\n</div>\r\n\r\n<!-- <div *ngIf=\"visualizzaPopup\" \r\n    style=\"position: absolute; background-color: #fdfd5e; padding: 3px; width: auto; height: auto; border: 1px solid #999;\"\r\n    [style.left.px]=\"popupLeft\" [style.top.px]=\"popupTop\">\r\n    {{testoImmagine}}\r\n    <br />\r\n</div> -->\r\n\r\n<div\r\n*ngIf=\"visualizzaImmagine == true\"\r\n style=\"\r\n  position: absolute;\r\n  background-color: white;\r\n  left: 5%;\r\n  top: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n  border-radius: 5px;\r\n  border: 1px solid #999;\r\n  -webkit-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 22px 6px rgba(0,0,0,0.75);\r\n  text-align: center;\r\n  z-index: 1002;\r\n\">\r\n    <div style=\"width: 100%; height: 40px; border-bottom: 1px solid #999;\">\r\n        <div style=\"width: calc(100% - 150px); height: 40px; float: left; text-align: left;\">\r\n            <div style=\"float: left; width: 30px; text-align: center;\">\r\n                <img src=\"assets/immagini/icona_INDIETRO.png\" title=\"Indietro\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"indietroImmagine()\">\r\n            </div>\r\n            <div style=\"float: left; width: calc(100% - 60px); text-align: center; height: 35px; overflow: auto;\">\r\n                <h5>{{testoImmagine}}</h5>\r\n            </div>\r\n            <div style=\"float: left; width: 30px; text-align: center;\">\r\n                <img src=\"assets/immagini/icona_AVANTI.png\" title=\"Avanti\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"avantiImmagine()\">\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 150px; height: 40px; float: left; text-align: right; padding-right: 30px;\">\r\n            <img src=\"assets/immagini/icona_ELIMINA-TAG.png\" title=\"Elimina Immagine\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"eliminaImmagine()\">\r\n            <img src=\"assets/immagini/icona_DOWNLOAD-TAG.png\" title=\"Scarica Immagine\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"scaricaImmagine()\">\r\n        </div>\r\n    </div>\r\n    <div [ngStyle]=\"{'background-image': getUrl()}\" style=\"width: 100%; height: calc(100% - 40px); background-repeat: no-repeat; background-size: contain; background-position: center;\" ></div>\r\n\r\n    <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"visualizzaImmagine = false\">\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/treeview/treeview.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treeview/treeview.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #divScroll style=\"width: 100%; height: 100%; overflow: auto; padding-bottom: 20px;\">\r\n  <div style=\"height: auto; white-space: nowrap; font-size: 12px;\">\r\n    <ul *ngIf=\"visibile && brani\">\r\n      <li *ngFor=\"let artista of brani; index as i;\">\r\n        <span style=\"cursor: pointer; margin-left: 5px;\" (click)=\"visibile[i][0] = !visibile[i][0]\">\r\n          <img *ngIf=\"!visibile[i][0]\" src=\"assets/immagini/menu.png\" width=\"20px\" height=\"20px\">\r\n          <img *ngIf=\"visibile[i][0]\" src=\"assets/immagini/menu_aperto.png\" width=\"20px\" height=\"20px\">\r\n          &nbsp;\r\n        </span>\r\n        <span [style.color]=\"visibile[i][0] === true ? '#80ff60' : 'white'\" \r\n          style=\"cursor: pointer;\"\r\n          title=\"{{ artista.text }}\"\r\n          [attr.id]=\"prendeNomeSistemato(artista.text)\">\r\n          <img *ngIf=\"Amministratore == 'S'\" src=\"assets/immagini/AggiornaConcorso.png\" title=\"Imposta Tags Artista\" style=\"cursor: pointer; width: 20px; height: 20px;\" (click)=\"impostaTagArtista(artista.text)\">\r\n          &nbsp;{{ artista.text }}\r\n        </span>\r\n        <ul>\r\n          <span *ngIf=\"visibile[i][0]\">\r\n            <li *ngFor=\"let album of artista.children; index as j;\">\r\n              <span *ngIf=\"mostraBrani\" style=\"cursor: pointer; margin-left: 15px;\" (click)=\"visibile[i][j + 1] = !visibile[i][j + 1]\">\r\n                <img *ngIf=\"!visibile[i][j + 1]\" src=\"assets/immagini/menu.png\" width=\"20px\" height=\"20px\">\r\n                <img *ngIf=\"visibile[i][j + 1]\" src=\"assets/immagini/menu_aperto.png\" width=\"20px\" height=\"20px\">\r\n                &nbsp;\r\n              </span>\r\n              <span *ngIf=\"mostraBrani\" \r\n                style=\"cursor: pointer;\"\r\n                title=\"{{ album.anno }} - {{ album.text }}\"\r\n                [style.color]=\"visibile[i][j + 1] === true ? '#80ff60' : 'white'\">\r\n                <!-- <img src=\"assets/immagini/AggiornaConcorso.png\" title=\"Imposta Tags Album\" style=\"cursor: pointer; width: 20px; height: 20px;\" (click)=\"impostaTagArtistaAlbum(artista.text, album.text)\">\r\n                &nbsp; -->\r\n                {{ album.anno }} - {{ album.text }}\r\n              </span>\r\n              <span *ngIf=\"!mostraBrani\" style=\"cursor: pointer; margin-left: 35px; font-size: 13px;\" \r\n                title=\"{{ album.anno }} - {{ album.text }}\"\r\n                [style.color]=\"visibile[i][j + 1] === true ? '#80ff60' : 'white'\" (click)=\"clickatoAlbum(i, j)\">\r\n                <!-- <img src=\"assets/immagini/AggiornaConcorso.png\" title=\"Imposta Tags Album\" style=\"cursor: pointer; width: 20px; height: 20px;\" (click)=\"impostaTagArtistaAlbum(artista.text, album.text)\">\r\n                &nbsp; -->\r\n                {{ album.Anno }} - {{ album.text }}\r\n              </span>\r\n              <ul *ngIf=\"mostraBrani\">\r\n                <span *ngIf=\"visibile[i][j + 1]\">\r\n                  <li *ngFor=\"let brano of album.children; index as k;\">\r\n                    <span style=\"cursor: pointer;\"\r\n                      [style.color]=\"brano.id === numeroBrano ? '#ffeb00' : brano.locale == true ? '#95fbf2' : 'white'\"\r\n                      [style.background-color]=\"brano.id === numeroBrano ? '#ddd' : 'transparent'\"\r\n                    >\r\n                      <div style=\"height: 25px; margin-left: 45px; overflow: hidden; width: calc(100% - 40px);\">\r\n                        <!-- <div [style.width]=\"brano.locale === false ? 'calc(100% - 105px)' : 'calc(100% - 125px)'\" -->\r\n                        <div (mouseover)=\"aprePopup($event, prendeTesto(brano, artista.text, album.anno + '-' + album.text))\" (mouseleave)=\"posY = -1000\"\r\n                          style=\"float: left; overflow: hidden; width: 100%;\">\r\n                          <!-- title=\"{{brano.traccia}}-{{brano.text}}\" -->\r\n                          <span (click)=\"numeroBrano = brano.id; suSSD = brano.locale; caricaBrano();\">\r\n                            {{brano.traccia}}-{{ brano.text }}\r\n                            &nbsp;<img *ngIf=\"deviceGirante == 'Android'\" src=\"assets/immagini/icona_info.png\" width=\"25px\" height=\"25px\" (click)=\"mostraInfos(brano, artista.text, album.anno + '-' + album.text)\">\r\n                          </span>\r\n                        </div>\r\n                        <!-- <div style=\"width: 20px; float: left; text-align: center;\">\r\n                          <img *ngIf=\"brano.locale === true\" src=\"assets/immagini/icona_SALVA.png\" title=\"Brano locale\" style=\"cursor: pointer; width: 20px; height: 20px;\">\r\n                        </div>\r\n                        <div style=\"width: 35px; float: left; text-align: center;\">\r\n                          <img *ngIf=\"brano.locale === false\" src=\"assets/immagini/preferito.png\" title=\"Bellezza\" style=\"cursor: pointer; width: 20px; height: 20px;\"><span *ngIf=\"brano.locale === false\">{{brano.stelle}}&nbsp;</span>\r\n                        </div>\r\n                        <div style=\"width: 35px; float: left; text-align: center;\">\r\n                          <img *ngIf=\"brano.locale === false\" src=\"assets/immagini/ascoltata.png\" title=\"Ascoltata\" style=\"cursor: pointer; width: 20px; height: 15px;\"><span *ngIf=\"brano.locale === false\">{{brano.ascoltata}}</span>\r\n                        </div>\r\n                        <div style=\"width: 35px; float: left; text-align: center;\">\r\n                          <img *ngIf=\"brano.locale === true\" title=\"Brano in locale\" src=\"assets/immagini/hd4.png\" style=\"cursor: pointer; width: 20px; height: 15px;\">\r\n                        </div>\r\n                        <div style=\"width: 35px; float: left; text-align: center;\">\r\n                          <img *ngIf=\"brano.tags != '-'\" src=\"assets/immagini/icona_info.png\" title=\"Tags\" style=\"cursor: pointer; width: 20px; height: 20px;\" (click)=\"mostraTag(brano)\">\r\n                          <span *ngIf=\"brano.tags == '-'\">&nbsp;</span>\r\n                        </div> -->\r\n                      </div>\r\n                      <div style=\"clear: both;\"></div>\r\n                    </span>\r\n                  </li>\r\n                </span>\r\n              </ul>\r\n            </li>\r\n          </span>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"fMostraTag == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n    position: fixed;\r\n    width: auto;\r\n    max-width: 50%;\r\n    height: auto;\r\n    z-index: 9999;\r\n    left: 50%;\r\n    min-width: 150px;\r\n    transform: translateX(-50%);\r\n    top: 35%;\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    border: 1px solid #999;\r\n    text-align: left;\">\r\n  \r\n  <!-- <table style=\"margin-top: 25px; width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n    <tr *ngFor=\"let tag of tagsBrano; index as j;\">\r\n      <td style=\"text-align: left;\">\r\n        {{tag.Tag}}\r\n      </td>\r\n    </tr>\r\n  </table> -->\r\n  <div style=\"width: 100%; padding-top: 20px;\"   \r\n    [innerHtml]=\"testoPopup\"\r\n    >\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n    <div style=\"width: calc(100% - 30px); float: left; font-weight: bold;\">\r\n      Tags Brano\r\n    </div>\r\n    <div style=\"width: 30px; float: left; text-align: right;\">\r\n      <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"fMostraTag = false\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"fMostraTagArtista == true\" style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n  position: fixed;\r\n  width: auto;\r\n  max-width: 50%;\r\n  height: auto;\r\n  min-width: 150px;\r\n  z-index: 9999;\r\n  left: 35%;\r\n  transform: translateX(-50%);\r\n  top: 35%;\r\n  padding: 5px;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  border: 1px solid #999;\r\n  text-align: center;\">\r\n  \r\n  <table style=\"margin-top: 25px; width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n    <tr *ngFor=\"let tag of tagsArtista; index as j;\">\r\n      <td>\r\n        <img *ngIf=\"Amministratore == 'S'\" title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTagArtista(tag.idTag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n      </td>\r\n      <td style=\"text-align: left;\">\r\n        {{tag.Tag}}\r\n      </td>\r\n    </tr>\r\n    <tr style=\"text-align: left;\">\r\n      <td colspan=\"3\">\r\n        <img *ngIf=\"Amministratore == 'S'\" title=\"Aggiungi tag\" src=\"assets/immagini/icona_CERCA.png\" (click)=\"aggiungeTagArtista()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n        <img *ngIf=\"Amministratore == 'S'\" title=\"Refresh tag\" src=\"assets/immagini/icona_REFRESH.png\" (click)=\"refreshTagArtista()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n    <div style=\"width: calc(100% - 30px); float: left; font-weight: bold;\">\r\n      Tags Artista\r\n    </div>\r\n    <div style=\"width: 30px; float: left; text-align: right;\">\r\n      <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"fMostraTagArtista = false\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Finestra tags [handle]=\"handleTV\" -->\r\n<div *ngIf=\"mostraAggiungeTag == true\" \r\n  style=\"box-shadow: rgb(0 0 0 / 75%) 0px 0px 24px 2px;\r\n    position: fixed;\r\n    width: auto;\r\n    max-width: 50%;\r\n    height: auto;\r\n    z-index: 9999;\r\n    left: 60%;\r\n    transform: translateX(-50%);\r\n    transform: translateY(-50%);\r\n    max-height: 80%;\r\n    top: 50%;\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    border: 1px solid #999;\r\n    text-align: center;\">\r\n\r\n  <div style=\"width: 100%; max-height: 400px; overflow: auto; margin-top: 20px;\">\r\n    <table style=\"width: 100%;\" cellapdding=\"0px\" cellspacing=\"0px\">\r\n      <tr>\r\n        <th>\r\n        </th>\r\n        <th>\r\n        </th>\r\n        <th>\r\n          ID\r\n        </th>\r\n        <th>\r\n          Tag\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let tag of listaTagsVisualizzati; index as j;\">\r\n        <td>\r\n          <img *ngIf=\"Amministratore == 'S'\" title=\"Seleziona tag\" src=\"assets/immagini/matitadx.png\" (click)=\"selezionaTag(tag.idTag, tag.Tag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n        </td>\r\n        <td>\r\n          <img *ngIf=\"Amministratore == 'S'\" title=\"Elimina tag\" src=\"assets/immagini/icona_ELIMINA-TAG.png\" (click)=\"eliminaTagDaLista(tag.idTag)\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n        </td>\r\n        <td>\r\n          {{tag.idTag}}\r\n        </td>\r\n        <td>\r\n          {{tag.Tag}}\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"Amministratore == 'S'\" >\r\n        <td colspan=\"4\"><hr /></td>\r\n      </tr>\r\n      <tr *ngIf=\"Amministratore == 'S'\" style=\"text-align: left;\">\r\n        <td colspan=\"1\">\r\n          <span style=\"font-weight: bold;\">Tag</span>\r\n        </td>\r\n        <td colspan=\"3\">\r\n          <input type=\"text\" [(ngModel)]=\"nuovoTag\" style=\"width: 100%; min-width: 250px;\">\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"Amministratore == 'S'\" style=\"text-align: left;\">\r\n        <td colspan=\"4\">\r\n          <img title=\"Aggiungi tag\" src=\"assets/immagini/icona_SALVA.png\" (click)=\"aggiungeTagALista()\" style=\"cursor: pointer; width: 25px; height: 25px;\">\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div style=\"position: absolute; top: 0px; left: 0px; width: 100%;\">\r\n    <div style=\"width: calc(100% - 60px); float: left; font-weight: bold;\">\r\n      Lista Tags\r\n    </div>\r\n    <div style=\"width: 60px; float: left; text-align: right;\">\r\n      <!-- <img #handleTV src=\"assets/immagini/move_window_logo.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" title=\"Sposta finestra\">\r\n      &nbsp; -->\r\n      <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mostraAggiungeTag = false\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- CARICAMENTO IN CORSO -->\r\n<div *ngIf=\"caricamentoInCorso == true\" \r\n  style=\"z-index: 1599; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute; background-color: black; opacity: .65;\">\r\n</div>\r\n<div \r\n  *ngIf=\"caricamentoInCorso == true\"\r\n  style=\"\r\n    position: fixed;\r\n    left: calc(50% - 125px);\r\n    top: calc(50% - 175px);\r\n    width: 250px;\r\n    height: 350px;\r\n    z-index: 1500;\r\n  \"\r\n>\r\n  <img src=\"assets/immagini/wait2.gif\" style=\"width: 100%; height: 100%;\">\r\n</div>\r\n<!-- CARICAMENTO IN CORSO -->\r\n\r\n<div \r\n  style=\"position: fixed; width: auto; height: auto; padding: 5px; background-color: white; border-radius: 3px; border: 1px solid #999; z-index: 1600;\"\r\n  [style.left.px]=\"posX\"\r\n  [style.top.px]=\"posY\"\r\n  [innerHtml]=\"testoPopup\"\r\n>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploadbrani/uploadbrani.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploadbrani/uploadbrani.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"mascheraVisibile == true\" \r\n  style=\"z-index: 2000; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute; background-color: black; opacity: .65;\">\r\n</div>\r\n\r\n<div *ngIf=\"mascheraVisibile\" \r\n    class=\"finestra\"\r\n>\r\n    <h5>Upload Brani</h5>\r\n    <hr />\r\n    <label for=\"file\">Scelta File</label>\r\n    <input type=\"file\"\r\n       id=\"file\"\r\n       multiple\r\n       (change)=\"appoggiaFiles($event.target.files)\">\r\n    <hr />\r\n\r\n    <div style=\"width: 100%;\">\r\n        <div style=\"width: 80%; float: left; text-align: left; \">\r\n            <input type=\"checkbox\" [checked]=\"effettuaRefreshBrani == true\" (click)=\"cambioRefreshBrani($event)\" /> &nbsp;\r\n            <span style=\"font-size: 15px; color: blue;\">Effettua refresh brani</span>\r\n        </div>\r\n        <div style=\"width: 20%; float: left; text-align: right;\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"handleFileInput()\">Esegui</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 0px; right: 1px;\">\r\n        <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"mascheraVisibile = false; fChiusuraMaschera();\">\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"mascheraVisibile == true && attendiUpload == true\"\r\n    class=\"finestra\"\r\n    style=\"padding: 10px; width: 40%; height: auto; text-align: center; z-index: 2001; background-color: #fdf7b0;\"\r\n>\r\n    Attendere prego... <br />\r\n    Caricamento in corso...<hr />\r\n    Caricamento brano {{ qualeFile + 1 }}/{{ fileCount }}\r\n</div>\r\n\r\n<div *ngIf=\"mascheraVisibile == true && visuaLog == true\"\r\n    class=\"finestra\"\r\n    style=\"padding: 10px;\r\n        width: 80%;\r\n        height: 80%;\r\n        left: 10%;\r\n        top: 10%;\r\n        text-align: center;\r\n        z-index: 2002;\r\n        background-color: #fffeef;\r\n        white-space: pre;\r\n        text-align: left;\r\n        overflow: auto;\"\r\n    [innerHtml]=\"contenutoLog\"\r\n    >\r\n\r\n</div>\r\n\r\n<div *ngIf=\"mascheraVisibile == true && visuaLog == true\" style=\"position: absolute; top: 0px; right: 1px; z-index: 2001;\">\r\n    <img src=\"assets/immagini/elimina_quadrato.png\" style=\"cursor: pointer; width: 25px; height: 25px;\" (click)=\"chiudeLog()\">\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");


var fade = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
        ])
    ])
];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-slider {\n  width: 100%;\n}\n\ninput[type=checkbox] {\n  /* Double-sized Checkboxes */\n  /* IE */\n  /* FF */\n  -webkit-transform: scale(1.5);\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(1.5);\n  padding: 10px;\n}\n\ntr {\n  margin-top: 2px;\n}\n\n.bottoncione {\n  margin: 10px;\n  width: 130px;\n  height: 100px;\n  border: 1px solid #999;\n  background-color: #ccc;\n  border-radius: 4px;\n  float: left;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.35);\n}\n\n.bottoncione:hover {\n  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);\n  border: 1px solid white;\n}\n\n.iconaDentro {\n  width: 130px;\n  height: 70px;\n}\n\n.barraDebug {\n  position: absolute;\n  background-color: gray;\n  opacity: 0.65;\n  top: 45px;\n  width: calc(75% - 10px);\n  border: 1px solid #999;\n  border-radius: 3px;\n  left: 5px;\n  height: 27px;\n  text-align: right;\n  color: #ffee73;\n  z-index: 1001;\n}\n\n.downloadMask {\n  position: absolute;\n  top: 72px;\n  left: 5px;\n  width: auto;\n  max-width: calc(100% - 10px);\n  white-space: nowrap;\n  height: 27px;\n  background-color: burlywood;\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 2px;\n  text-align: center;\n  color: red;\n  opacity: 0.75;\n  z-index: 1003;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.successivoMask {\n  position: absolute;\n  top: 45px;\n  left: 5px;\n  width: auto;\n  max-width: calc(100% - 10px);\n  white-space: nowrap;\n  height: 27px;\n  background-color: #c8ffc5;\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 2px;\n  text-align: center;\n  color: #027b0b;\n  opacity: 0.75;\n  z-index: 1002;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNvcmdlbnRpXFxBbmd1bGFyXFxsb29XZWJQbGF5ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBRUUsNEJBQUE7RUFDMkIsT0FBQTtFQUNDLE9BQUE7RUFDNUIsNkJBQUE7RUFBK0Isc0JBQUE7RUFDTCxVQUFBO0VBQzFCLHFCQUFBO0VBQ0EsYUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLGdEQUFBO0FDSUY7O0FEREE7RUFHRSwrQ0FBQTtFQUNBLHVCQUFBO0FDSUY7O0FEREE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURBQSxVQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQSxVQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQSxXQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNHRjs7QURBQSxvQkFBQTs7QUFDQTtFQUNFLGdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF1cclxue1xyXG4gIC8qIERvdWJsZS1zaXplZCBDaGVja2JveGVzICovXHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogSUUgKi9cclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogRkYgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIE9wZXJhICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRyIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5ib3R0b25jaW9uZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMzBweDsgXHJcbiAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcclxufVxyXG5cclxuLmJvdHRvbmNpb25lOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IFxyXG59XHJcblxyXG4uaWNvbmFEZW50cm8ge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5iYXJyYURlYnVnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG4gIHRvcDogNDVweDsgXHJcbiAgd2lkdGg6IGNhbGMoNzUlIC0gMTBweCk7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICBsZWZ0OiA1cHg7IFxyXG4gIGhlaWdodDogMjdweDsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIGNvbG9yOiAjZmZlZTczOzsgXHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuLmRvd25sb2FkTWFzayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBjb2xvcjogcmVkO1xyXG4gIG9wYWNpdHk6IC43NTtcclxuICB6LWluZGV4OiAxMDAzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN1Y2Nlc3Npdm9NYXNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICB3aWR0aDogYXV0bzsgXHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmM1OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OyBcclxuICBib3JkZXItcmFkaXVzOiAzcHg7IFxyXG4gIHBhZGRpbmc6IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGNvbG9yOiAjMDI3YjBiOztcclxuICBvcGFjaXR5OiAuNzU7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4OyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7IFxyXG59IiwibWF0LXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIC8qIERvdWJsZS1zaXplZCBDaGVja2JveGVzICovXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvKiBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnRyIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uYm90dG9uY2lvbmUge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uYm90dG9uY2lvbmU6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5pY29uYURlbnRybyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYmFycmFEZWJ1ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgb3BhY2l0eTogMC42NTtcbiAgdG9wOiA0NXB4O1xuICB3aWR0aDogY2FsYyg3NSUgLSAxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogMjdweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjZmZlZTczO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4uZG93bmxvYWRNYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwLjc1O1xuICB6LWluZGV4OiAxMDAzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3VjY2Vzc2l2b01hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmM1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAyN2IwYjtcbiAgb3BhY2l0eTogMC43NTtcbiAgei1pbmRleDogMTAwMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-connection-service */ "./node_modules/ng-connection-service/__ivy_ngcc__/fesm5/ng-connection-service.js");
/* harmony import */ var _varie_caricabrano_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./varie/caricabrano.component */ "./src/app/varie/caricabrano.component.ts");
/* harmony import */ var _varie_files__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./varie/files */ "./src/app/varie/files.ts");
/* harmony import */ var _varie_youtube_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./varie/youtube.component */ "./src/app/varie/youtube.component.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./varie/utility.component */ "./src/app/varie/utility.component.ts");
/* harmony import */ var _varie_happi_dev_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./varie/happi-dev.component */ "./src/app/varie/happi-dev.component.ts");
/* harmony import */ var _varie_caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./varie/caricabranoautomatico.component */ "./src/app/varie/caricabranoautomatico.component.ts");
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/speech.service */ "./src/app/services/speech.service.ts");
/* harmony import */ var _varie_storage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./varie/storage.component */ "./src/app/varie/storage.component.ts");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _varie_classetimer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./varie/classetimer.component */ "./src/app/varie/classetimer.component.ts");
/* harmony import */ var _varie_checkrete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./varie/checkrete */ "./src/app/varie/checkrete.ts");
/* harmony import */ var _varie_gestione_android_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./varie/gestione_android.component */ "./src/app/varie/gestione_android.component.ts");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/api2.service */ "./src/app/services/api2.service.ts");


















// import * as workerTimers from 'worker-timers';




// import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
var AppComponent = /** @class */ (function () {
    // public tt = this;
    // cuffie = new CuffieComponent();
    function AppComponent(http, 
    // private backgroundMode: BackgroundMode,
    // private files: ComponentFile,
    datePipe, sanitizer, apiService, ytComponent, utility, connectionService, Happi, caricaBrano, caricaBranoAutomatico, document, speechService, file, storage, speechRecognition, splashScreen, 
    // private deviceService: DeviceDetectorService,
    checkRete, gestAndroid) {
        this.http = http;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.ytComponent = ytComponent;
        this.utility = utility;
        this.connectionService = connectionService;
        this.Happi = Happi;
        this.caricaBrano = caricaBrano;
        this.caricaBranoAutomatico = caricaBranoAutomatico;
        this.document = document;
        this.speechService = speechService;
        this.file = file;
        this.storage = storage;
        this.speechRecognition = speechRecognition;
        this.splashScreen = splashScreen;
        this.checkRete = checkRete;
        this.gestAndroid = gestAndroid;
        this.testoScrollabile = ['', ''];
        this.scrollTimer = [null, null];
        this.posizioneCarattere = [0, 0];
        this.lunghezzaCampo = [0, 0];
        this.debug = false;
        this.moadalitaLite = true;
        this.debuggone = '';
        this.debuggone2 = '';
        this.filtroImpostatoDebug = '';
        this.ultimaVoltaLettoBrani = -1;
        this.braniSD = '';
        this.visuaTagBrano = false;
        this.mascheraUploadVisibile = false;
        this.esclusioni = '';
        this.visuaTasti = true;
        this.mostraSceltaUtenti = false;
        this.passwordBox = false;
        this.pwd = '';
        this.numeroBranoAttuale = -1;
        this.zIndex = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011];
        this.nomiDiv = ['', 'divDebug', 'divFiltroBrani', 'divListaBrani',
            'divInfoArtista', 'divMenu', 'divOpzioni',
            'divUtility', 'divGestioneBrani', 'divUguali', 'divTesto',
            'divBarraTasti'];
        this.lastClickZIndex = -1;
        this.filtroStandard = ['MP3MICA', 'MP3ANGEL', 'CARTON'];
        this.caricamentoInCorso = false;
        this.letturaSD = false;
        this.cartellaEsaminata = '';
        this.menuMostrato = false;
        this.mascheraFiltroBrani = false;
        this.mascheraBrani = false;
        this.mascheraOpzioni = false;
        this.mascheraArtisti = false;
        this.mascheraTesto = false;
        this.mascheraAbout = false;
        this.caricamentoInCorsoIA = false;
        this.pannelloUtility = false;
        this.vecchioMilli = 0;
        // tutteLeCanzoni = true;
        this.canzoniMamma = false;
        this.eliminaMamma = false;
        this.consideraStelle = false;
        this.numeroStelle = 5;
        this.filtroImpostato = '';
        this.title = 'looWebPlayer';
        this.immagineSfondo = '';
        this.titoloBrano = '';
        this.titoloBranoPerTesto = '';
        this.estensioneBrano = '';
        this.artista = '';
        this.album = '';
        this.random = 'S';
        // visuaTesto = 'S';
        this.staSuonando = false;
        this.pathBrano = '';
        this.audio = new Audio();
        this.tipo = '';
        this.inizioImmagini = -1;
        this.opacita = .95;
        this.quantiBraniFiltrati = 0;
        this.quantiBraniTutti = 0;
        this.brani = '';
        this.volteAscoltatoBrano = 0;
        this.immaginiCambiate = 0;
        this.mascheraGestioneBrani = false;
        this.mascheraGestioneUguali = false;
        this.staAspettandoCaricamento = false;
        this.impostatoBranoFinito = false;
        this.checkRicaricaBraniLocali = false;
        this.staLeggendoBrano = false;
        this.opacitaImmagine1 = .75;
        this.opacitaImmagine2 = 1;
        this.sfuma = true;
        this.cicla = true;
        this.finitoAttesa = false;
        this.erroreImmagine = false;
        this.qualeScritta = 0;
        this.contaTimerScritte = 0;
        this.canzoniLocali = false;
        this.state = 'in';
        this.counter = 0;
        this.enableAnimation = false;
        this.appoSfondo = '';
        this.numeroBrano = -1;
        this.quantiBrani = -1;
        this.ascoltati = new Array();
        this.ascoltate = 0;
        this.ascoltata = 0;
        this.durata = 1;
        this.posizioneBrano = 0;
        this.contaTimer = 0;
        this.contaTimerSalvataggio = 0;
        this.contaTimerOpacity = 0;
        this.utenza = '';
        this.idUtenza = -1;
        this.Amministratore = '';
        //ultimoFiltroArray;
        this.nonSalvareFiltro = true;
        // datiJSONAccorpati;
        this.bellezza = ['', '', '', '', '', '', '', ''];
        this.linguaggio = 'OR';
        this.linguaggioIcona = '';
        this.tempoPassato = '';
        this.tempoTotale = '';
        this.tempoTotaleBrano = -1;
        this.scaricatoAutomaticamente = false;
        this.vecchioConsideraStelle = undefined;
        this.configTV = {
            hasAllCheckBox: false,
            hasFilter: false,
            hasCollapseExpand: true,
            decoupleChildFromParent: false,
            maxHeight: 500
        };
        this.modalitaYouTube = 'N';
        this.videoSource = '';
        this.urlWS = '';
        this.urlMP3 = '';
        this.urlImmagine = '';
        this.staCaricandoVideo = false;
        this.numeroVideo = -1;
        this.bTuttoSchermo = false;
        this.bRicercaBrano = false;
        this.testoRicerca = '';
        this.messaggioVisualizzato = false;
        this.maiVotate = false;
        this.deviceGirante = '';
        this.fFiles = _varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"];
        this.isConnected = true;
        this.caricatoProssimoBrano = -1;
        this.titoloBranoAutomatico = '';
        this.limitaBrani = false;
        this.numeroLimiteBrani = 100;
        this.branoPresenteSuSD = false;
        // haEseguitoGiaIlCostruttore = false;
        this.pathBranoProssimo = '';
        this.cuffieAttive = false;
        this.lastCanzoniLocali = undefined;
        this.lastIsConnected = undefined;
        this.lastConsideraStelle = undefined;
        this.lastMaiVotate = undefined;
        this.tt = this;
        this.lastDown = 0;
        this.lastUp = 0;
        this.speechDisponibile = undefined;
        this.comandiVocaliAttivi = false;
        this.comandoVocale = '';
        this.mostraAggiungeTag = false;
        this.nuovoTag = '';
        this.splashScreen.show();
        document.addEventListener("backbutton", onBackKeyDown, false);
        function onBackKeyDown() {
            if (confirm('Chiudo il player ?')) {
                navigator['app'].exitApp();
            }
        }
    }
    AppComponent.prototype.prendeLivelloSegnale = function () {
    };
    AppComponent.prototype.azionaVoce = function (disponibile) {
        var _this = this;
        return;
        if (this.comandiVocaliAttivi === false) {
            return;
        }
        var options = {
            language: 'it-IT',
            matches: 9999,
            showPopup: false,
            showPartial: true
        };
        var lastDetto = '';
        if (disponibile) {
            this.utility.scriveDebug(this, 'Speech recognition attivato');
            this.speechRecognition.startListening(options)
                .subscribe(function (matches) {
                // this._ngZone.run(() => {
                _this.utility.scriveDebug(_this, 'Speech recognition lunghezza match: ' + matches.length);
                matches.forEach(function (element) {
                    _this.utility.scriveDebug(_this, 'Speech recognition elementi: ' + element);
                });
                var detto = (matches.length > 0) ? matches[matches.length - 1] : "";
                if (detto && detto !== '' && detto !== lastDetto) {
                    lastDetto = detto;
                    _this.comandoVocale = detto;
                    // alert(detto);
                    _this.utility.parsaTesto(_this, detto);
                }
                // });
            }, function (onerror) {
                _this.utility.scriveDebug(_this, 'Speech recognition error: ' + onerror);
                setTimeout(function () {
                    _this.azionaVoce(_this.speechDisponibile);
                }, 100);
            });
        }
        else {
            alert('Speech recognition non disponibile');
        }
    };
    AppComponent.prototype.attivaMonitorConnessione = function () {
        var _this = this;
        this.utility.scriveDebug(this, 'Controllo Connessione internet');
        this.apiService.impostaConnesso(true);
        this.connectionService.monitor().subscribe(function (isConnected) {
            _this.isConnected = isConnected;
            _this.apiService.impostaConnesso(isConnected);
            _this.utility.scriveDebug(_this, 'Connessione internet:' + isConnected);
            /* if (this.deviceGirante === 'Android') {
              if (isConnected === false) {
                this.utility.scriveDebug(this, 'Connessione internet mancante. Attivo brani locali');
                this.lastCanzoniLocali = this.canzoniLocali;
                this.lastConsideraStelle = this.consideraStelle;
                this.lastMaiVotate = this.maiVotate;
                this.lastIsConnected = isConnected;
      
                this.canzoniLocali = true;
                this.consideraStelle = false;
                this.maiVotate = false;
                this.utility.filtraBrani(this);
              } else {
                if (this.canzoniLocali === undefined) {
                  this.utility.scriveDebug(this, 'Connessione internet attiva.');
                  this.canzoniLocali =  localStorage.getItem('CanzoniLocali') === 'S' ? true : false;
                  this.consideraStelle =  localStorage.getItem('ConsideraStelle') === 'S' ? true : false;
                  this.maiVotate =  localStorage.getItem('maiVotate') === 'S' ? true : false;
            
                  this.utility.filtraBrani(this);
                } else {
                  if (this.lastIsConnected !== undefined) {
                    this.lastIsConnected = undefined;
                    this.utility.scriveDebug(this, 'Connessione internet attiva. Imposto ultimo canzoni locali');
                    this.canzoniLocali = this.lastCanzoniLocali;
                    this.consideraStelle = this.lastConsideraStelle;
                    this.maiVotate = this.lastMaiVotate;
                    this.utility.filtraBrani(this);
                  }
                }
              }
            } */
            if (_this.isConnected) {
                _this.noInternetConnection = false;
            }
            else {
                _this.noInternetConnection = true;
            }
        });
    };
    AppComponent.prototype.attivaCuffie = function (tt) {
        // document.addEventListener("deviceready", onDeviceReady.bind(null, t), false);
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            tt.scriveDebug('Detector cuffie attivato');
            window['HeadsetDetection'].registerRemoteEvents(function (status) {
                tt.scriveDebug('Detector cuffie. Cambio status: ' + status);
                switch (status) {
                    case 'headsetAdded':
                        tt.scriveDebug('Cuffie attaccate');
                        tt.cuffieAttive = true;
                        break;
                    case 'headsetRemoved':
                        tt.scriveDebug('Cuffie staccate');
                        tt.cuffieAttive = false;
                        if (tt.staSuonando) {
                            tt.play(true);
                        }
                        break;
                }
                ;
            });
            /* document.addEventListener("startcallbutton", onStartCallKeyDown, false);
            function onStartCallKeyDown() {
              alert('Premuto tasto inizio chiamata');
            }
            this.utility.scriveDebug(this, 'Attivato controllo inizio chiamata');
      
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
            function onVolumeDownKeyDown() {
              const ora = Date.now();
              if (ora - tt.lastDown < 1000) {
                tt.scriveDebug('Indietro canzone');
                tt.indietroBrano();
              } else {
                // tt.audio.setVolume(10);
                // tt.scriveDebug('Premuto tasto volume giù');
              }
              tt.lastDown = ora;
            }
            // this.utility.scriveDebug(this, 'Attivato controllo volume giù');
      
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
            function onVolumeUpKeyDown() {
              const ora = Date.now();
              if (ora - tt.lastUp < 1000) {
                tt.scriveDebug('Avanti canzone');
                tt.avantiBrano();
              } else {
                // tt.audio.setVolume(90);
                // tt.scriveDebug('Premuto tasto volume sù');
              }
              tt.lastUp = ora;
            }
            // this.utility.scriveDebug(this, 'Attivato controllo volume sù'); */
            /* document.addEventListener("backbutton", onBackKeyDown, false);
            function onBackKeyDown() {
              if (confirm('Chiudo il player ?')) {
                navigator['app'].exitApp();
              }
            } */
            // this.utility.scriveDebug(this, 'Attivato controllo tasto indietro');
        }
        // document.addEventListener("deviceready", onDeviceReady.bind(this), false);
    };
    // controllaFileLocali() {
    /* if (this.deviceGirante === 'Android') {
      // setTimeout(() => {
        const indice = 3;
        ComponentFile.esisteFile[indice] = '';
        const cartellaJSON1 = 'LooigiSoft';
        const nomeFileJSON1 = 'looWebPlayer/jsonBraniLocali.json';
        this.utility.scriveDebug(this, 'Controllo esistenza file locale jsonBraniLocali.json');
  
        this.file.checkIfFileExists(this, cartellaJSON1, nomeFileJSON1).then(Ritorno => {
          this.utility.scriveDebug(this, 'Esiste file locale jsonBraniLocali.json: ' + Ritorno);
          if (Ritorno === 'SI') {
            setTimeout(() => {
              this.leggeFileBraniLocali();
            }, 100);
          } else {
            setTimeout(() => {
              this.files.prendeTuttiIFilesInLocale(this, indice).then((Ritorno) => {
                this.sistemaStrutturaBraniLocali(true);
              });
            }, 10);
  
            /* let q = 0;
            const si2 = setInterval(() => {
              if (!ComponentFile.staLeggendoFiles[indice] && this.datiJSON) {
                this.utility.scriveDebug(this, 'Files locali letti');
                clearInterval(si2);
  
                this.sistemaStrutturaBraniLocali(true);
              } else {
                q++;
                if (q > 100) {
                  clearInterval(si2);
                  this.utility.visualizzaMessaggio(this, 'Problemi nel caricare il JSON', true);
                }
              }
            }, 1000);
          }
        }); */
    // }, 5000);
    /* let q = 0;
    const t1 = setInterval(() => {
      if (ComponentFile.esisteFile[indice] !== '') {
        // alert('Esistenza file brani locali: ' + Files.esisteFile);
        clearInterval(t1);

        if (this.checkRicaricaBraniLocali === true) {
          ComponentFile.esisteFile[indice] = 'NO';
        }

        if (ComponentFile.esisteFile[indice] === 'SI') {
          this.utility.scriveDebug(this, 'Esiste file locale jsonBraniLocali.json');
          ComponentFile.staLeggendoFiles[indice] = false;
          this.leggeFileBraniLocali();
        } else {
          setTimeout(() => {
            this.utility.scriveDebug(this, 'NON Esiste file locale jsonBraniLocali.json');
            ComponentFile.staLeggendoFiles[indice] = true;
            this.files.prendeTuttiIFilesInLocale(this, indice);

            let q = 0;
            const si2 = setInterval(() => {
              if (!ComponentFile.staLeggendoFiles[indice] && this.datiJSON) {
                this.utility.scriveDebug(this, 'Files locali letti');
                clearInterval(si2);

                this.sistemaStrutturaBraniLocali(true);
              } else {
                q++;
                if (q > 100) {
                  clearInterval(si2);
                  this.utility.visualizzaMessaggio(this, 'Problemi nel caricare il JSON', true);
                }
              }
            }, 1000);
          }, 100);
        }
      }
    }, 1000);
  } */
    // }
    AppComponent.prototype.scaricaJSON = function () {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.utility.scriveDebug(this, "Scarico JSON");
                this.getJSON(this).subscribe(function (data) {
                    _this.utility.scriveDebug(_this, "Scaricato JSON");
                    _this.parsaJSON1(data, true);
                    Ritorno('OK');
                });
                return [2 /*return*/];
            });
        }); });
    };
    AppComponent.prototype.getJSON = function (t) {
        this.utility.scriveDebug(this, 'Prende JSON di configurazione');
        return this.http.get(t, 'assets/config.json?id=' + new Date());
    };
    AppComponent.prototype.parsaJSON1 = function (data, scriviFile) {
        var d = JSON.parse(data._body);
        this.urlWS = d.url;
        this.urlMP3 = d.urlMP3;
        this.urlImmagine = d.urlImmagine;
        this.apiService.impostaUrlWS(d.url);
        this.apiService.impostaUrlMP3(d.urlMP3);
        this.apiService.impostaUrlImmagine(d.urlImmagine);
        this.urlPerUpload = d.urlUpload;
        this.utility.scriveDebug(this, 'Url: ' + this.urlWS);
        this.utility.scriveDebug(this, 'Url Immagini: ' + this.urlImmagine);
        this.utility.scriveDebug(this, 'Url Upload: ' + this.urlPerUpload);
        // return;
        // console.log(d.url, d.urlImmagine);
        // console.log(this.numeroBrano);
        // console.log(this.ultimoFiltro);
        // if (scriviFile && this.deviceGirante === 'Android') {
        //   Files.writeFile(this.cartellaJSON1, this.nomeFileJSON1, JSON.stringify(d));
        // }
        // this.creaUtenza();
        _varie_utility_component__WEBPACK_IMPORTED_MODULE_11__["UtilityComponent"].haEseguitoGiaIlCostruttore = true;
        this.utility.scriveDebug(this, 'Impostato flag già eseguito il costruttore: ' + _varie_utility_component__WEBPACK_IMPORTED_MODULE_11__["UtilityComponent"].haEseguitoGiaIlCostruttore);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (_varie_utility_component__WEBPACK_IMPORTED_MODULE_11__["UtilityComponent"].haEseguitoGiaIlCostruttore) {
            return;
        }
        this.apiService.impostaThis(this, this.utility);
        this.storage.leggeSettaggi(this);
        this.utility.scriveDebug(this, "Costruttore 1");
        // const devServ = this.deviceService.getDeviceInfo();
        // this.os = devServ.os;
        // this.userAgent = devServ.userAgent;
        // this.browser = devServ.browser;
        // this.device = devServ.device;
        // this.osVers = devServ.os_version;
        // this.isMobile = this.deviceService.isMobile();
        // this.isTablet = this.deviceService.isTablet();
        // this.isDesktopDevice = this.deviceService.isDesktop();
        this.pathApp = document.URL;
        if (this.pathApp.indexOf('http://') === -1 && this.pathApp.indexOf('https://') === -1) {
            this.deviceGirante = 'Android';
        }
        else {
            this.deviceGirante = 'Web Page';
        }
        this.deviceGirante = 'Android';
        this.utility.scriveDebug(this, "Costruttore 2");
        if (window['cordova']) {
            // console.log("Cordova found")
            // alert('Cordova trovato');
            this.ceCordova = true;
            // document.addEventListener('deviceready', this.iniziaTutto);
        }
        else {
            // console.log("Cordova not found")
            // alert('Cordova NON trovato');
            this.ceCordova = false;
        }
        // setTimeout(() => {
        this.utility.scriveDebug(this, "Costruttore 3");
        this.splashScreen.hide();
        this.utenza = localStorage.getItem('utenza');
        this.idUtenza = +localStorage.getItem('idUtenza');
        this.Amministratore = localStorage.getItem('tipoUtente');
        this.attivaMonitorConnessione();
        var t = localStorage.getItem('tutteLeCanzoni');
        this.filtroImpostato = localStorage.getItem('FiltroTesto');
        this.canzoniMamma = localStorage.getItem('CanzoniMamma') === 'S' ? true : false;
        this.eliminaMamma = localStorage.getItem('TutteCanzoni') === 'S' ? true : false;
        if (this.isConnected === true) {
            this.consideraStelle = localStorage.getItem('ConsideraStelle') === 'S' ? true : false;
            this.canzoniLocali = localStorage.getItem('CanzoniLocali') === 'S' ? true : false;
            this.maiVotate = localStorage.getItem('maiVotate') === 'S' ? true : false;
            if (this.deviceGirante !== 'Android') {
                this.canzoniLocali = false;
            }
        }
        else {
            if (this.deviceGirante === 'Android') {
                this.utility.scriveDebug(this, 'Connessione non valida. Imposto solo canzoni locali');
                this.canzoniLocali = true;
                this.consideraStelle = false;
                this.maiVotate = false;
            }
        }
        // if (this.canzoniMamma === true) {
        // this.filtroImpostato = '';
        // }
        var tutte = t === 'S' ? true : false;
        this.controllaEsistenzaCookieBellezza();
        /* setTimeout(() => {
          this.mascheraBrani = true;
          setTimeout(() => {
            this.mascheraBrani = false;
            // console.log(this.ultimoFiltroArray);
          }, 100);
        }, 100); */
        this.nonSalvareFiltro = false;
        // console.log('UTENZA / ID', this.utenza, this.idUtenza);
        this.utility.scriveDebug(this, "Utenza: " + this.idUtenza + ' - ' + this.utenza + ' (' + this.Amministratore + ')');
        this.titoloBranoAutomatico = '';
        this.fFiles.operazioneSuFile = '';
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        this.elem = document.documentElement;
        this.numeroBrano = +localStorage.getItem('numero_brano');
        this.numeroBranoAttuale = +localStorage.getItem('numero_brano');
        this.scaricaJSON().then(function (Ritorno) {
            if (Ritorno === 'OK') {
                _this.utility.scriveDebug(_this, 'Ricerca utenza:' + Ritorno);
                if (_this.isConnected) {
                    _this.utility.cercaUtenza(_this).then(function (Ritorno) {
                        _this.utility.scriveDebug(_this, 'Ricercata utenza:' + Ritorno);
                        if (Ritorno === 'OK') {
                            _this.checkRete.settaFramePrincipale(_this);
                            _this.checkRete.AttivaControllo();
                            if (_this.deviceGirante === 'Android') {
                                _this.gestAndroid.iniziaTutto(_this);
                            }
                            else {
                                _this.iniziaTutto();
                            }
                        }
                        else {
                            _this.utility.scriveDebug(_this, 'Problemi nella lettura dell\'utenza: ' + Ritorno);
                        }
                    });
                }
                else {
                    // Mancanza di rete. Per il momento vedo se esiste il cookie dell'utenza
                    if (!_this.utenza || _this.utenza === null || _this.utenza === '') {
                        if (_this.deviceGirante === 'Android') {
                            _this.gestAndroid.iniziaTutto(_this);
                        }
                        else {
                            _this.iniziaTutto();
                        }
                    }
                    else {
                        // Non c'è... Muoio così
                        alert('Mancanza di rete e del cookie dell\'utenza');
                    }
                }
            }
            else {
                // Non è riuscito a scaricare il file config.json
            }
        });
        // }, 2000);
        this.settaZIndex(this.nomiDiv.length - 1);
    };
    AppComponent.prototype.iniziaTutto = function () {
        var _this = this;
        // setTimeout(() => {
        this.utility.scriveDebug(this, 'Inizia tutto');
        // this.caricamentoInCorso = true;
        // setTimeout(() => {
        /* this.utility.scriveDebug(this, 'Costruttore: Ha Già eseguito: ' + UtilityComponent.haEseguitoGiaIlCostruttore);
        if (UtilityComponent.haEseguitoGiaIlCostruttore === true) {
          return;
        } */
        /* const app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        if ( app ) {
          this.deviceGirante = 'Android';
        } else {
          this.deviceGirante = 'Web Page';
        } */
        // this.utility.scriveDebug(this, 'Device:' + this.deviceGirante);
        // console.log(this.ultimoFiltroArray);
        /* if (this.deviceGirante === 'Android') {
          this.controllaFileLocali();

          this.prendeLivelloSegnale();
        }
        this.utility.scriveDebug(this, "Init 2"); */
        // this.scaricaJSON();
        // this.utility.scriveDebug(this, "Init 3");
        /* if (this.deviceGirante === 'Android') {
          if (this.comandiVocaliAttivi === true) {
            // Recognition delle chiacchiere Android
            this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
    
              if (!hasPermission) {
              this.speechRecognition.requestPermission()
                .then(
                  () => console.log('Granted'),
                  () => console.log('Denied')
                )
              }
            });
    
            this.speechRecognition.isRecognitionAvailable()
              .then((available: boolean) => { this.speechDisponibile = available; this.azionaVoce(available); } )
            // Recognition delle chiacchiere Android
          }
    
          this.attivaCuffie(this);
        } else {
          if (this.comandiVocaliAttivi === true) {
            // Recognition delle chiacchiere Windows
            this.speechService.init(this);
            this.speechService.start();
            // Recognition delle chiacchiere Windows
          }
        } */
        // setTimeout(() => {
        // this.utility.scriveDebug(this, "Init 3");
        // }, 100);
        // }, 100);
        // this.leggeTags();
        // this.utility.scriveDebug(this, "Init 4");
        // }, 100);
        this.utility.caricaJsonBrani(this).then(function (Ritorno) {
            if (Ritorno.indexOf('ERROR: ') === -1) {
                var ok = true;
                // console.log(JSON.parse(Ritorno));
                try {
                    _this.datiJSON = JSON.parse(Ritorno);
                }
                catch (e) {
                    ok = false;
                    _this.apiService.eliminaJSON(_this, _this.idUtenza)
                        .map(function (response) { return _this.apiService.controllaRitorno(response); })
                        .subscribe(function (data) {
                        alert('Problemi nel leggere il json dei brani. Struttura non valida.\nRiavviare l\'applicazione');
                    });
                }
                if (ok) {
                    _this.utility.prosegueCaricaJsonBrani2(_this, false);
                    _this.prosegueCaricaTutto();
                    _this.impostaBellezza();
                    _this.leggeTags();
                    _this.caricaBranoDaID();
                    _this.startTimerScritte();
                }
            }
            else {
                // Problemi nel caricare il json dei brani
                alert('Problemi nel caricare il json dei brani');
            }
        });
    };
    AppComponent.prototype.leggeTags = function () {
        var _this = this;
        this.utility.scriveDebug(this, "Lettura Tags: Inizio");
        var t = setInterval(function () {
            if (_this.apiService.urlWS) {
                _this.utility.scriveDebug(_this, "Lettura Tags: Lettura");
                clearInterval(t);
                _this.listaTags = new Array();
                _this.apiService.ritornaTuttiITags()
                    .map(function (response) { return _this.apiService.controllaRitorno(response); })
                    .subscribe(function (data) {
                    var data2 = _this.apiService.prendeSoloDatiValidi(data);
                    _this.utility.scriveDebug(_this, "Lettura Tags: Fine");
                    if (data2.indexOf('ERROR:') === -1) {
                        if (data2 && data2 !== '') {
                            var dd = data2.split('§');
                            dd.forEach(function (element) {
                                if (element && element !== '') {
                                    var d2 = element.split(';');
                                    var tt = {
                                        idTag: +d2[0],
                                        Tag: d2[1]
                                    };
                                    _this.listaTags.push(tt);
                                }
                            });
                        }
                        // console.log(this.listaTags);
                    }
                }, function (error) {
                    if (error instanceof Error) {
                        _this.utility.visualizzaMessaggio(_this, 'Lettura Lista Tags: ' + error.message, true);
                    }
                });
            }
        }, 1000);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // console.log('Div tree', this.divToScroll);
        // this.scrollaTesto('divTestScroll', this.testoProva, 0);
    };
    // caricaTutto() {
    // alert('3');
    // console.log(this.idUtenza, this.utenza);
    // this.utility.scriveDebug(this, 'Carica tutto 1');
    /* if (this.deviceGirante === 'Android') {
      const indice = 4;
      ComponentFile.esisteFile[indice] = '';
      const cartellaJSON1 = 'LooigiSoft';
      const nomeFileJSON1 = 'looWebPlayer/jsonBrani.json'
      this.utility.scriveDebug(this, 'Esiste file locale jsonBrani.json');

      this.file.checkIfFileExists(this, cartellaJSON1, nomeFileJSON1).then(Ritorno => {
        this.utility.scriveDebug(this, 'Esiste file locale jsonBrani.json: ' + Ritorno);
        if (Ritorno === 'SI') {
          this.leggeFileBrani();
        } else {
          this.continuaACaricareTutto();
        }
      });
    } else {
      this.caricaJsonBrani();
    }
    if (this.isConnected) {
      this.caricaJsonBrani();
    } else {
      if (this.deviceGirante === 'Android') {
        const indice = 4;
        ComponentFile.esisteFile[indice] = '';
        const cartellaJSON1 = 'LooigiSoft';
        const nomeFileJSON1 = 'looWebPlayer/jsonBrani.json'
        this.utility.scriveDebug(this, 'Esiste file locale jsonBrani.json');

        this.file.checkIfFileExists(this, cartellaJSON1, nomeFileJSON1).then(Ritorno => {
          this.utility.scriveDebug(this, 'Esiste file locale jsonBrani.json: ' + Ritorno);
          if (Ritorno === 'SI') {
            this.leggeFileBrani();
          } else {
            // this.continuaACaricareTutto();
            this.utility.scriveDebug(this, 'Connessione di rete non presente e file json non presente in locale.<br />Stoppo tutto');
          }
        });
      } */
    // }
    // }
    /* continuaACaricareTutto() {
      if (this.isConnected) {
        this.caricaJsonBrani();
      } else {
        this.leggeFileBrani();
      }
    } */
    /* leggeFileBrani() {
      if (this.datiJSON) {
        return;
      }
  
      // TENTATIVO DI EVITARE RICARICAMENTI INUTILI
      const ora = new Date().getTime();
      if (ora - this.ultimaVoltaLettoBrani < 500 && this.ultimaVoltaLettoBrani !== -1) {
        return;
      }
      this.ultimaVoltaLettoBrani = ora;
      // TENTATIVO DI EVITARE RICARICAMENTI INUTILI
  
      // alert('5');
      if (this.deviceGirante === 'Android') {
        const indice = 0;
        this.caricamentoInCorso = false;
  
        ComponentFile.fileJSON[indice] = '';
        const path = ComponentFile.pathSD + '/LooigiSoft/looWebPlayer/jsonBrani.json'
        this.file.readFile(this, path, indice).then((Ritorno: string) => {
          this.datiJSON = JSON.parse(Ritorno);
          this.utility.scriveDebug(this, 'Letto file locale jsonBrani.json. Righe ' + this.datiJSON.length);
  
          this.prosegueCaricaTutto();
          this.caricaBranoDaID();
        });
        /* const si = setInterval(() => {
          if (ComponentFile.fileJSON[indice] !== '') {
            // alert('6');
            clearInterval(si);
  
            this.datiJSON = JSON.parse(ComponentFile.fileJSON[indice]);
            this.utility.scriveDebug(this, 'Letto file locale jsonBrani.json. Righe ' + this.datiJSON.length);
  
            this.prosegueCaricaTutto();
            this.prosegueCaricaJSON();
          }
        }, 100) */
    // } else {
    //   this.prosegueCaricaTutto();
    //   this.caricaBranoDaID();
    // }
    // } */
    AppComponent.prototype.prosegueCaricaTutto = function () {
        // let c = 0;
        // const t = setInterval(() => {
        // console.log('Attesa dati json', new Date());
        // c++;
        // this.utility.scriveDebug(this, 'Attesa dati json: ' + c);
        // if (this.datiJSON) {
        // clearInterval(t);
        this.utility.scriveDebug(this, 'Letto file locale jsonBrani.json 2. Filtro brani');
        /* const b = new Array();
        const bb = { Ascoltata: 0, Estensione: '.mp3', id: 90000, Stelle: 0, path: 'W Pippetto', Text: 'Pippo Pippo', Traccia: '00', locale: true };
        b.push(bb);
        const n = { text: 'Brani SD', collapsed: true, children: [{ Anno: '0000', collapsed: true, text: 'Locale', children: b }] };
        this.datiJSON.push(n); */
        // console.log('Dati json arrivati', this.datiJSON);
        this.utility.filtraBrani(this);
        // this.utility.apreTree(this);
        // this.apreAlbero = !this.apreAlbero;
        // this.braniFiltrati = JSON.parse(JSON.stringify(this.braniFiltrati));
        // console.log(this.braniFiltrati);
        // console.log(this.bellezzeJSON);
        // console.log(this.numeroBrano);
        // }
        // }, 1000)
    };
    AppComponent.prototype.impostaDatiJSON = function (d) {
        this.datiJSON = d;
        this.utility.filtraBrani(this);
    };
    AppComponent.prototype.caricaBranoDaID = function () {
        /* const t = localStorage.getItem('tutteLeCanzoni');
        this.filtroImpostato = localStorage.getItem('FiltroTesto');
        this.canzoniMamma =  localStorage.getItem('CanzoniMamma') === 'S' ? true : false;
        this.eliminaMamma =  localStorage.getItem('TutteCanzoni') === 'S' ? true : false;
        if (this.isConnected === true) {
          this.consideraStelle =  localStorage.getItem('ConsideraStelle') === 'S' ? true : false;
          this.canzoniLocali =  localStorage.getItem('CanzoniLocali') === 'S' ? true : false;
          this.maiVotate =  localStorage.getItem('maiVotate') === 'S' ? true : false;
    
          if (this.deviceGirante !== 'Android') {
            this.canzoniLocali = false;
          }
        } else {
          if (this.deviceGirante === 'Android') {
            this.utility.scriveDebug(this, 'Connessione non valida. Imposto solo canzoni locali');
            this.canzoniLocali =  true;
            this.consideraStelle = false;
            this.maiVotate = false;
          }
        }
        
        // if (this.canzoniMamma === true) {
          // this.filtroImpostato = '';
        // }
        const tutte = t === 'S' ? true : false;
    
        this.controllaEsistenzaCookieBellezza();
        
        /* setTimeout(() => {
          this.mascheraBrani = true;
          setTimeout(() => {
            this.mascheraBrani = false;
            // console.log(this.ultimoFiltroArray);
          }, 100);
        }, 100); */
        // this.nonSalvareFiltro = false; 
        this.utility.scriveDebug(this, 'Caricato tutto 2. Caricato JSON brani');
        if (this.numeroBrano === 0) {
            this.numeroBrano = 1;
            this.numeroBranoAttuale = 1;
            this.utility.scriveDebug(this, 'Caricato tutto 3. Carico brano ' + this.numeroBrano);
            this.caricaBrano.caricaBrano(this);
            this.ascoltata++;
            this.ascoltati.push(this.numeroBrano);
        }
        else {
            this.utility.scriveDebug(this, 'Caricato tutto 4. Carico brano ' + this.numeroBrano);
            this.caricaBrano.caricaBrano(this);
            this.ascoltata++;
            this.ascoltati.push(this.numeroBrano);
            // console.log(this.variabiliGlobali.urlWS, this.variabiliGlobali.urlPerUpload);
        }
        this.utility.scriveDebug(this, 'Carico JSON brani. TERMINATO');
        // this.attivaMonitorConnessione();
    };
    /* nonHaTrovatoJSON() {
      this.apiService.ritornaJSONBrani(
        this.idUtenza
      ).map(response => this.apiService.controllaRitorno(response))
      .subscribe(
        data => {
          this.caricamentoInCorso = false;
          this.utility.scriveDebug(this, 'Carico JSON brani: OK');
          // alert('2: ' + data);
          if (data) {
            const data2 = this.apiService.prendeSoloDatiValidi(data);
            if (data2.indexOf('ERROR:') === -1 && data2.length > 10) {
              try {
                this.datiJSON = JSON.parse(data2);
              } catch (e) {
                console.log('Problemi sul dati JSON');
                this.refreshCanzoniSenzaDomanda();
              }
    
              if (this.deviceGirante === 'Android') {
                this.file.writeFile(this, 6, 'LooigiSoft', 'looWebPlayer/jsonBrani.json', JSON.stringify(this.datiJSON)).then((Ritorno) => {
  
                });
              }
  
              this.prosegueCaricaJSON();
            } else {
              // alert('data2');
              this.utility.visualizzaMessaggio(this, 'Carica JSON: ' + data2, true);
            }
          } else {
            // alert('Nessun dato ricevuto');
            this.utility.visualizzaMessaggio(this, 'Carica JSON: Nessun dato ricevuto', true);
          }
        },
        (error) => {
          this.caricamentoInCorso = false;
          this.utility.visualizzaMessaggio(this, 'Carica JSON: ' + error.message, true);
        }
      );
    } */
    AppComponent.prototype.caricaDettaglioArtista = function (forza) {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.caricamentoInCorsoIA = true;
        // console.log('Prendo dettaglio artista', this.artista);
        this.urlsArtista = new Array();
        this.dischiArtista = new Array();
        this.membriArtista = new Array();
        this.apiService.tornaDettagliArtista(this.artista, forza).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            _this.caricamentoInCorso = false;
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                var campi = data2.split('|');
                var dettaglioArtista = campi[0];
                var sUrl = campi[1];
                var sDischi = campi[2];
                var sMembri = campi[3];
                if (sUrl && sUrl !== '') {
                    var url = sUrl.split('§');
                    url.forEach(function (element) {
                        if (element !== '') {
                            var c = element.split(';');
                            var u = {
                                Indirizzo: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c[0], '*PI*', '|'), '*PV*', ';'),
                                Tipologia: c[1]
                            };
                            _this.urlsArtista.push(u);
                        }
                    });
                }
                if (sDischi && sDischi !== '') {
                    var dischi = sDischi.split('§');
                    dischi.forEach(function (element) {
                        if (element !== '') {
                            var c_1 = element.split(';');
                            var ok_1 = true;
                            _this.dischiArtista.forEach(function (element2) {
                                if (ok_1 && element2.Titolo === c_1[0]) {
                                    ok_1 = false;
                                }
                            });
                            if (ok_1) {
                                var u = {
                                    Titolo: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c_1[0], '*PI*', '|'), '*PV*', ';'),
                                    DataDisco: c_1[1],
                                    Tipologia: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c_1[2], '*PI*', '|'), '*PV*', ';'),
                                    Presente: c_1[3]
                                };
                                _this.dischiArtista.push(u);
                            }
                        }
                    });
                    _this.dischiArtista.sort(function (a, b) { return b.DataDisco.localeCompare(a.DataDisco); });
                }
                if (sMembri && sMembri !== '') {
                    var membri = sMembri.split('§');
                    membri.forEach(function (element) {
                        if (element !== '') {
                            var c = element.split(';');
                            var u = {
                                Nome: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c[0], '*PI*', '|'), '*PV*', ';'),
                                Tipologia: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c[1], '*PI*', '|'), '*PV*', ';'),
                                Inizio: c[2],
                                Fine: c[3],
                                Finito: c[4],
                                TipoArtista: _this.utility.effettuaReplace(_this.utility.effettuaReplace(c[5], '*PI*', '|'), '*PV*', ';'),
                                Ruolo: c[6],
                                Sesso: c[7],
                                Nazione: c[8],
                                Citta: c[9],
                                DataNascita: c[10],
                                DataMorte: c[11]
                            };
                            _this.membriArtista.push(u);
                            if (u.Finito === 'N' && u.TipoArtista === 'Person') {
                                if (u.Inizio) {
                                    _this.scritte.push('Membro della band dal ' + u.Inizio + ': ' + u.Nome);
                                }
                                else {
                                    _this.scritte.push('Membro della band: ' + u.Nome);
                                }
                            }
                        }
                    });
                    _this.membriArtista.sort(function (a, b) { return a.Inizio.localeCompare(b.Inizio); });
                }
                // console.log(this.membriArtista);
                // console.log(this.dischiArtista);
                // console.log(this.urlsArtista);
                _this.caricamentoInCorsoIA = false;
            }
            else {
                _this.caricamentoInCorsoIA = false;
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.caricamentoInCorsoIA = false;
                console.log('Error nel caricamento delle info', error);
            }
        });
    };
    AppComponent.prototype.controllaEsistenzaCookieBellezza = function () {
        return;
    };
    /* apriPlaylist() {
      this.mascheraBrani = true
    } */
    AppComponent.prototype.impostaBellezza = function () {
        // console.log('Prendo bellezza brano', this.numeroBrano);
        var bellezza2 = this.utility.ritornaStelleBrano(this, this.numeroBrano, true);
        // console.log('Prendo bellezza brano', this.numeroBrano, bellezza2);
        for (var i = 0; i < bellezza2; i++) {
            this.bellezza[i] = 'assets/immagini/preferito.png';
        }
        for (var i = bellezza2; i <= 10; i++) {
            this.bellezza[i] = 'assets/immagini/preferito_vuoto.png';
        }
    };
    AppComponent.prototype.spostamentoBarra = function (event) {
        var _this = this;
        this.accendeOpacita();
        // console.log("This is emitted as the thumb slides");
        if (this.deviceGirante !== 'Android') {
            this.audio.currentTime = event.value;
        }
        else {
            this.audioAndroid.seekTo(event.value);
        }
        this.posizioneBrano = event.value;
        this.tempoPassato = this.converteTempo(this.posizioneBrano);
        // console.log(event.value, this.audio.currentTime);
        if (this.videoNONCaricato === true) {
            if (this.videoplayer) {
                setTimeout(function () {
                    _this.videoplayer.seekTo(+_this.posizioneBrano, true);
                }, 100);
            }
        }
        else {
            if (this.videoplayerLocale) {
                // this.videoplayerLocale.nativeElement.mute();
                setTimeout(function () {
                    _this.videoplayerLocale.nativeElement.currentTime = +_this.posizioneBrano;
                }, 100);
            }
        }
    };
    AppComponent.prototype.startTimerScritte = function () {
        var _this = this;
        if (this.moadalitaLite) {
            return;
        }
        if (this.intervalScritte) {
            clearInterval(this.intervalScritte);
        }
        this.intervalScritte = setInterval(function () {
            _this.contaTimerScritte++;
            if (_this.contaTimerScritte > 3) {
                _this.contaTimerScritte = 0;
                _this.qualeScritta++;
                // console.log(this.contaTimerScritte);
                if (_this.scritte) {
                    if (_this.qualeScritta > _this.scritte.length - 1) {
                        _this.qualeScritta = 0;
                    }
                }
            }
        }, 1000);
    };
    AppComponent.prototype.converteTempo = function (e) {
        if (e) {
            var ee = e;
            var minuti = 0;
            var secondi = 0;
            while (ee > 59) {
                minuti++;
                ee -= 60;
            }
            secondi += ee;
            var min = minuti.toString().trim();
            if (min.length === 1) {
                min = '0' + min;
            }
            var sec = secondi.toString().trim();
            if (sec.indexOf('.') > -1) {
                sec = sec.substring(0, sec.indexOf('.'));
            }
            if (sec.length === 1) {
                sec = '0' + sec;
            }
            if (sec === '-0') {
                sec = '00';
            }
            // console.log(minuti,secondi,min,sec);
            return min + ':' + sec;
        }
        else {
            return '00:00';
        }
    };
    AppComponent.prototype.startTimerAndroid = function () {
        this.utility.scriveDebug(this, 'Start Timer Android. Inizio');
        this.accendeOpacita();
        /* if (this.timerAndroid) {
          this.pauseTimer();
        } */
        this.scaricatoAutomaticamente = false;
        this.caricatoProssimoBrano = -1;
        this.titoloBranoAutomatico = '';
        this.fFiles.operazioneSuFile = '';
        /* this.timerAndroid = workerTimers.setInterval(() => {
          this.funzionteTick();
        }, 1000); */
        // if (!this.classeTimer) {
        this.classeTimer = new _varie_classetimer_component__WEBPACK_IMPORTED_MODULE_18__["ClasseTimer"](this);
        this.classeTimer.parto();
        // }
    };
    /* startTimer() {
      this.utility.scriveDebug(this, 'Start Timer. Inizio');
      this.accendeOpacita();
  
      if (this.interval) {
        this.pauseTimer();
      }
      this.scaricatoAutomaticamente = false;
      this.caricatoProssimoBrano = -1;
      this.titoloBranoAutomatico = '';
      this.fFiles.operazioneSuFile = '';
  
      this.interval = setInterval(() => {
        this.funzionteTick();
      }, 1000);
    } */
    AppComponent.prototype.funzioneTick = function () {
        if (this.mascheraBrani) {
            this.accendeOpacita();
            this.contaTimerOpacity = 0;
        }
        // console.log(this.posizioneBrano);
        this.posizioneBrano++;
        // this.utility.scriveDebug(this, 'Posizione brano: ' + this.posizioneBrano + ' Durata: ' + this.tempoTotaleBrano);
        this.utility.scriveDebug(this, 'Tick1: ' + this.posizioneBrano);
        this.tempoPassato = this.converteTempo(this.posizioneBrano);
        this.utility.scriveDebug(this, 'Tick2: ' + this.tempoPassato);
        if (this.deviceGirante !== 'Android') {
            if ((this.audio.ended || this.posizioneBrano > this.tempoTotaleBrano) && this.impostatoBranoFinito === false) {
                // clearInterval(this.interval);
                this.impostatoBranoFinito = true;
                this.utility.scriveDebug(this, 'Fine brano, carico il successivo');
                if (this.caricatoProssimoBrano > -1) {
                    this.numeroBrano = this.caricatoProssimoBrano;
                }
                else {
                    this.numeroBrano = this.prendeNumeroProssimoBrano(2);
                }
                this.numeroBranoAttuale = this.numeroBrano;
                // console.log(this.numeroBrano);
                // return;
                if (this.numeroBrano > 0) {
                    this.caricaBrano.caricaBrano(this);
                    this.utility.scriveDebug(this, 'Fine brano, caricato il successivo: ' + this.numeroBrano);
                }
            }
        }
        else {
            // if (this.durata === -1) {
            if (this.audioAndroid) {
                var dur = this.audioAndroid.getDuration();
                this.utility.scriveDebug(this, 'Tick. Durata: ' + dur + ' - ' + this.durata);
                if (dur > 0 && dur > this.durata) {
                    // setTimeout(() => {
                    this.durata = dur;
                    this.utility.scriveDebug(this, 'Arrivata durata brano:' + this.durata);
                    this.tempoTotaleBrano = this.durata;
                    this.tempoTotale = this.converteTempo(this.durata);
                    this.utility.scriveDebug(this, 'Conversione durata brano:' + this.tempoTotale);
                    // }, 2000);
                }
            }
            // }
            if (this.durata > -1) {
                if (this.posizioneBrano > 15 && this.tempoTotaleBrano > 75 && !this.scaricatoAutomaticamente && this.posizioneBrano < 25) {
                    this.utility.scriveDebug(this, 'Start timer. Prendo prossimo brano in automatico');
                    // Prende prossimo brano
                    this.gestAndroid.scaricaProssimoBranoInAutomatico(this);
                }
                if (this.posizioneBrano > this.tempoTotaleBrano && this.impostatoBranoFinito === false) {
                    // clearInterval(this.interval);
                    this.impostatoBranoFinito = true;
                    this.utility.scriveDebug(this, 'Fine brano, carico il successivo');
                    if (this.caricatoProssimoBrano > -1) {
                        this.numeroBrano = this.caricatoProssimoBrano;
                    }
                    else {
                        this.numeroBrano = this.prendeNumeroProssimoBrano(2);
                    }
                    this.numeroBranoAttuale = this.numeroBrano;
                    // console.log(this.numeroBrano);
                    // return;
                    if (this.numeroBrano > 0) {
                        this.caricaBrano.caricaBrano(this);
                        this.utility.scriveDebug(this, 'Fine brano, caricato il successivo: ' + this.numeroBrano);
                    }
                }
            }
            this.utility.scriveDebug(this, 'Tick. Uscita');
        }
        this.contaTimerOpacity++;
        if (this.contaTimerOpacity === 5) {
            this.opacita = .05;
        }
        // this.contaTimer++;
        // if (this.contaTimer > 15) {
        //   this.cambiaImmagine();
        // console.log(this.immagineSfondo);
        // }
    };
    AppComponent.prototype.startTimerImmagine = function () {
        var _this = this;
        if (this.moadalitaLite === true) {
            return;
        }
        if (this.modalitaYouTube === 'S') {
            return;
        }
        this.utility.scriveDebug(this, 'Start timer immagine');
        if (this.intervalImmagine) {
            clearInterval(this.intervalImmagine);
        }
        if (this.cicla === true || (this.cicla === false && this.staSuonando)) {
            this.intervalImmagine = setInterval(function () {
                clearInterval(_this.intervalImmagine);
                if (_this.modalitaYouTube === 'S') {
                    return;
                }
                if (_this.sfuma) {
                    _this.cambiaImmagine1();
                }
                else {
                    _this.cambiaImmagine2();
                }
            }, 15000);
        }
    };
    AppComponent.prototype.cambiaImmagine1 = function () {
        var _this = this;
        if (this.modalitaYouTube === 'S') {
            return;
        }
        // console.log('Cambia immagine 1');
        if (this.timerInterval1) {
            clearInterval(this.timerInterval1);
        }
        this.timerInterval1 = setInterval(function () {
            // console.log(this.opacitaImmagine1, this.opacitaImmagine2);
            _this.opacitaImmagine1 -= .05;
            _this.opacitaImmagine2 -= .05;
            if (+_this.opacitaImmagine1 < 0) {
                _this.opacitaImmagine1 = 0;
            }
            if (+_this.opacitaImmagine2 < 0) {
                _this.opacitaImmagine1 = 0;
                _this.opacitaImmagine2 = 0;
                clearInterval(_this.timerInterval1);
                _this.utility.scriveDebug(_this, 'Cambio immagine');
                _this.cambiaImmagine2();
            }
        }, 150);
    };
    AppComponent.prototype.prendeImmagine = function () {
        this.contaTimer = 0;
        var r = Math.floor(Math.random() * (this.quanteImmagini - this.inizioImmagini + 1) + this.inizioImmagini);
        console.log('PRENDE IMMAGINE', r, this.quanteImmagini, this.inizioImmagini);
        if (this.immagini && this.immagini[r]) {
            if (this.immagini[r].immagine.indexOf('.gif') === -1) {
                this.appoSfondo = this.apiService.ritornaUrlImmagine() + 'ImmaginiMusica/' + this.artista + '/' +
                    this.immagini[r].cartella + '/' + this.immagini[r].immagine;
            }
            else {
                this.appoSfondo = this.apiService.ritornaUrlImmagine() + 'GifsMusica/' + this.artista + '/' + this.immagini[r].immagine;
            }
        }
        this.immaginiCambiate++;
        if (this.immaginiCambiate > 5) {
            this.immaginiCambiate = 0;
            this.scaricaNuovaImmagine();
        }
        // console.log('Cambio immagine', this.appoSfondo, this.immaginiCambiate);
    };
    AppComponent.prototype.cambiaImmagine2 = function () {
        var _this = this;
        if (this.timerInterval2) {
            clearInterval(this.timerInterval2);
        }
        if (this.modalitaYouTube === 'S') {
            return;
        }
        var conta = 0;
        this.finitoAttesa = false;
        this.erroreImmagine = false;
        this.timerInterval2 = setInterval(function () {
            if (_this.finitoAttesa === true) {
                _this.utility.scriveDebug(_this, 'Fine attesa immagine: ' + conta);
                if (_this.erroreImmagine === true) {
                    conta++;
                    if (+conta < 5) {
                        // console.log('Riprovo dopo Fine attesa 2', conta);
                        _this.finitoAttesa = false;
                        _this.erroreImmagine = false;
                        _this.controllaImmagineSeEsiste();
                    }
                    else {
                        clearInterval(_this.timerInterval2);
                        _this.appoSfondo = 'assets/immagini/looWPIcon.png';
                        setTimeout(function () {
                            _this.immagineSfondo = _this.appoSfondo;
                            _this.utility.scriveDebug(_this, 'Immagine sfondo: ' + _this.immagineSfondo);
                            if (_this.deviceGirante === 'Android') {
                                var b = _this.appoSfondo.split('/');
                                _this.file.writeFile(_this, 3, 'LooigiSoft', 'looWebPlayer/Immagini/' + _this.artista + '/' +
                                    _this.album + '/' + b[b.length - 1], _this.immagineSfondo).then(function (Ritorno) {
                                });
                            }
                            _this.cambiaImmagine3();
                        }, 100);
                    }
                }
                else {
                    clearInterval(_this.timerInterval2);
                }
            }
        }, 0, 1000);
        this.controllaImmagineSeEsiste();
    };
    AppComponent.prototype.controllaImmagineSeEsiste = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.prendeImmagine();
        var imm = this.appoSfondo;
        imm = imm.replace(this.urlImmagine, '');
        imm = imm.replace('Immagini/', '');
        this.utility.scriveDebug(this, 'Controllo immagine se esiste: ' + imm);
        this.apiService.esisteImm(imm).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2_1 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log('Controllo immagine se esiste. Ritorno: ', data2);
                _this.finitoAttesa = true;
                if (data2_1.indexOf('ERROR:') === -1) {
                    setTimeout(function () {
                        _this.appoSfondo = data2_1;
                        _this.immagineSfondo = _this.appoSfondo;
                        _this.utility.scriveDebug(_this, 'Immagine sfondo dopo controllo: ' + _this.immagineSfondo);
                        /*
                        QUI PER SALVARE TUTTE LE IMMAGINI CHE GIRANO
                        if (this.deviceGirante === 'Android') {
                          const b = this.appoSfondo.split('/');
          
                          this.utility.scriveImmagineSeNonEsiste(this, this.artista, this.album, b[b.length - 1], this.immagineSfondo);
                        } */
                        // this.cambiaImmagine3();
                    }, 100);
                }
                else {
                    _this.erroreImmagine = true;
                    // alert(data2);
                    // this.utility.visualizzaMessaggio(this, 'Controllo immagine: ' + data2, true);
                }
            }
        }, function (error) {
            _this.erroreImmagine = true;
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Controllo Immagine: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.cambiaImmagine3 = function () {
        var _this = this;
        var t = setInterval(function () {
            // console.log(this.opacitaImmagine1, this.opacitaImmagine2);
            _this.opacitaImmagine1 += .05;
            _this.opacitaImmagine2 += .05;
            if (+_this.opacitaImmagine1 > 1) {
                _this.opacitaImmagine1 = 1;
            }
            if (+_this.opacitaImmagine2 > .85) {
                _this.opacitaImmagine1 = .65;
                _this.opacitaImmagine2 = .85;
                clearInterval(t);
                _this.startTimerImmagine();
            }
        }, 150);
    };
    AppComponent.prototype.pauseTimer = function () {
        // if (this.deviceGirante === 'Android') {
        if (this.classeTimer) {
            // this.timerAndroid = undefined;
            // workerTimers.clearInterval(this.timerAndroid);
            this.classeTimer.stoppaTimer();
            this.classeTimer = undefined;
        }
        /* } else {
          if (this.interval) {
            clearInterval(this.interval);
          }
        } */
    };
    AppComponent.prototype.getUrl = function () {
        if (this.immagineSfondo && this.immagineSfondo !== '') {
            // console.log('url(\'' + this.immagineSfondo.replace('\'', '%27').replace(' ', '%20') + '\')');
            return 'url(\'' + this.immagineSfondo.replace('\'', '%27').replace(' ', '%20') + '\')';
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.play = function (s) {
        this.accendeOpacita();
        if (s === false) {
            this.staSuonando = false;
            if (this.deviceGirante !== 'Android') {
                if (this.audio) {
                    this.audio.pause();
                }
            }
            else {
                if (this.audioAndroid) {
                    this.audioAndroid.pause();
                }
            }
            if (this.videoNONCaricato === true) {
                if (this.videoplayer) {
                    this.videoplayer.pauseVideo();
                }
            }
            else {
                if (this.videoplayerLocale) {
                    // this.videoplayerLocale.nativeElement.mute();
                    this.videoplayerLocale.nativeElement.pause();
                }
            }
            this.pauseTimer();
            if (this.cicla === false) {
                clearInterval(this.intervalImmagine);
            }
        }
        else {
            this.staSuonando = true;
            if (this.deviceGirante !== 'Android') {
                if (this.audio) {
                    if (!this.staCaricandoVideo) {
                        this.audio.play();
                    }
                }
            }
            else {
                if (this.audioAndroid) {
                    if (!this.staCaricandoVideo) {
                        this.audioAndroid.play();
                    }
                }
            }
            if (this.videoNONCaricato === true) {
                if (this.videoplayer) {
                    this.videoplayer.playVideo();
                }
            }
            else {
                if (this.videoplayerLocale) {
                    // this.videoplayerLocale.nativeElement.mute();
                    this.videoplayerLocale.nativeElement.play();
                }
            }
            this.pauseTimer();
            if (this.modalitaYouTube === 'N') {
                if (this.deviceGirante === 'Android') {
                    this.startTimerAndroid();
                }
                else {
                    // this.startTimer();
                    this.startTimerAndroid();
                }
            }
            // if (this.cicla === false) {
            this.startTimerImmagine();
            // }
        }
    };
    AppComponent.prototype.indietroBrano = function () {
        var _this = this;
        this.utility.scriveDebug(this, 'Indietro brano.');
        if (_varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"].staScaricandoFile === true) {
            this.utility.scriveDebug(this, 'Indietro brano, download in corso. Lo interrompo.');
            _varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"].interrompiDownload = true;
        }
        this.accendeOpacita();
        // if (this.interval) {
        //   clearInterval(this.interval);
        // }
        this.pauseTimer();
        this.impostatoBranoFinito = false;
        this.staCaricandoVideo = true;
        if (this.videoNONCaricato === true) {
            try {
                this.videoplayer.stopVideo();
            }
            catch (e) {
            }
        }
        else {
            try {
                // this.videoplayerLocale.nativeElement.mute();
                this.videoplayerLocale.nativeElement.stop();
            }
            catch (e) {
            }
        }
        if (this.ascoltata > 0) {
            this.ascoltata--;
            // console.log('Indietro', this.ascoltati, this.ascoltati[this.ascoltata]);
            var brano_1 = undefined;
            this.braniFiltrati.forEach(function (element) {
                if (!brano_1) {
                    element.children.forEach(function (element2) {
                        if (!brano_1) {
                            element2.children.forEach(function (element3) {
                                if (!brano_1) {
                                    if (+element3.id === +_this.ascoltati[_this.ascoltata]) {
                                        brano_1 = element3;
                                    }
                                }
                            });
                        }
                    });
                }
            });
            this.numeroBrano = brano_1.id; //  this.ascoltati[this.ascoltata];
            this.numeroBranoAttuale = brano_1.id;
            // console.log(this.numeroBrano, this.ascoltati[this.ascoltata]);
            if (this.deviceGirante !== 'Android') {
                this.audio.pause();
            }
            else {
                this.audioAndroid.pause();
            }
            this.caricaBrano.caricaBrano(this);
        }
    };
    AppComponent.prototype.accendeOpacita = function () {
        if (this.modalitaYouTube === 'N') {
            this.opacita = .95;
            this.contaTimerOpacity = 0;
        }
    };
    AppComponent.prototype.avantiBrano = function () {
        var _this = this;
        this.utility.scriveDebug(this, 'Avanti brano, carico il successivo. Brani filtrati: ' + this.braniFiltrati.length + ' - Dati JSON: ' + this.datiJSON.length);
        if (!this.braniFiltrati || !this.datiJSON) {
            return;
        }
        /* if (this.interval) {
          clearInterval(this.interval);
        } */
        this.pauseTimer();
        if (this.intervalDurata) {
            clearInterval(this.intervalDurata);
        }
        this.impostatoBranoFinito = false;
        if (_varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"].staScaricandoFile === true) {
            this.utility.scriveDebug(this, 'Avanti brano, download in corso. Lo interrompo.');
            _varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"].interrompiDownload = true;
        }
        this.accendeOpacita();
        // console.log(this.ascoltata, this.ascoltate, this.ascoltati);
        this.staCaricandoVideo = true;
        if (this.videoNONCaricato === true) {
            try {
                this.videoplayer.stopVideo();
            }
            catch (e) {
            }
        }
        else {
            try {
                // this.videoplayerLocale.nativeElement.mute();
                this.videoplayerLocale.nativeElement.stop();
            }
            catch (e) {
            }
        }
        this.utility.scriveDebug(this, 'Avanti brano, ascoltata ' + this.ascoltata + '/' + this.ascoltate);
        if (this.ascoltata <= this.ascoltate) {
            this.ascoltata++;
            this.numeroBrano = this.ascoltati[this.ascoltata];
            this.numeroBranoAttuale = this.numeroBrano;
            this.utility.scriveDebug(this, 'Avanti brano, prendo vecchio: ' + this.numeroBrano);
            if (this.deviceGirante !== 'Android') {
                if (this.audio) {
                    this.audio.pause();
                }
            }
            else {
            }
            this.caricaBrano.caricaBrano(this);
        }
        else {
            this.ascoltata++;
            if (this.deviceGirante !== 'Android') {
                if (this.audio) {
                    this.audio.pause();
                }
            }
            else {
                if (this.audioAndroid) {
                    this.audioAndroid.pause();
                }
            }
            this.utility.scriveDebug(this, 'Avanti brano, cerco nuovo');
            this.utility.scriveDebug(this, 'Avanti brano, brano caricato automaticamente: ' + this.caricatoProssimoBrano);
            if (this.caricatoProssimoBrano > -1) {
                this.numeroBrano = this.caricatoProssimoBrano;
            }
            else {
                this.numeroBrano = this.prendeNumeroProssimoBrano(1);
            }
            this.numeroBranoAttuale = this.numeroBrano;
            this.utility.scriveDebug(this, 'Avanti brano, prendo nuovo: ' + this.numeroBrano);
            if (this.numeroBrano === -1) {
                this.utility.scriveDebug(this, 'Avanti brano. Ritornato -1. Ricarico un altro');
                setTimeout(function () {
                    _this.avantiBrano();
                }, 100);
                return;
            }
            this.ascoltati.push(this.numeroBrano);
            // console.log(this.numeroBrano);
            /* let q = 0;
            while(this.numeroBrano === -1 && q !== -1) {
              this.numeroBrano = this.prendeNumeroProssimoBrano(3);
              // console.log(this.numeroBrano);
              q++;
              if (q === 100) {
                q = -1;
                console.log('----------------------------------');
                console.log('ERRORE SU RILEVAMENTO BRANI');
                console.log('Quanti Brani Selezionati: ', this.ultimoFiltroArray.length);
                console.log('Brani: ', this.datiJSON);
                console.log('----------------------------------');
                alert('Problemi con la rilevazione del nuovo brano. Guardare la console');
              }
            } */
            // console.log(this.numeroBrano);
            // return;
            this.caricaBrano.caricaBrano(this);
            this.utility.scriveDebug(this, 'Avanti brano. Caricato');
        }
        // console.log('Avanti brano. Imposto bellezza');
        // return;
        this.impostaBellezza();
        // console.log(this.ascoltati, this.ascoltata);
    };
    AppComponent.prototype.prendeNumeroProssimoBrano = function (daDove) {
        var _this = this;
        if (!this.braniFiltrati) {
            alert('Nessun brano in archivio');
            return;
        }
        // this.debuggone = '';
        var random = -1;
        var q = 0;
        var brano = undefined;
        // console.log(this.braniFiltrati);
        // const quantiBraniSelezionati = this.braniFiltrati.length;
        this.utility.scriveDebug(this, 'Modalità Random: ' + this.random);
        // if (!this.quantiBraniFiltrati || this.quantiBraniFiltrati === 0) {
        //   this.quantiBraniFiltrati = this.braniFiltrati.length;
        // }
        var tentativi = 0;
        var esce = false;
        while ((!brano || !brano.id || brano.id === '') && esce === false) {
            if (this.random === 'S') {
                this.utility.scriveDebug(this, 'Inizio Random: ' + random);
                this.utility.scriveDebug(this, 'Già preso: ' + this.braniFiltrati[random]);
                this.utility.scriveDebug(this, 'Quanti brani filtrati: ' + this.quantiBraniFiltrati);
                // while (random === -1 || this.braniFiltrati[random] === '' || !this.braniFiltrati[random]) {
                while (random === -1) {
                    random = Math.floor(Math.random() * (this.quantiBraniFiltrati - 1 + 1)) + 1;
                    this.utility.scriveDebug(this, 'Testo Random: ' + random);
                }
                this.utility.scriveDebug(this, 'Fine Random: ' + random);
            }
            else {
                random = this.numeroBrano + 1;
                if (random > this.quantiBraniFiltrati - 1) {
                    random = 1;
                }
            }
            // const id = this.braniFiltrati[random];
            this.utility.scriveDebug(this, 'Brani filtrati: ' + this.quantiBraniFiltrati);
            this.utility.scriveDebug(this, 'Random: ' + random);
            if (this.braniFiltrati) {
                this.braniFiltrati.forEach(function (element) {
                    if (!brano) {
                        element.children.forEach(function (element2) {
                            if (!brano) {
                                element2.children.forEach(function (element3) {
                                    if (!brano) {
                                        q++;
                                        if (q === random) {
                                            brano = element3;
                                            _this.pathBranoProssimo = element3.path;
                                            _this.branoPresenteSuSD = element3.locale;
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
            if (this.deviceGirante === 'Android' && this.isConnected === false && this.branoPresenteSuSD === false) {
                brano = undefined;
                this.utility.scriveDebug(this, 'Assenza di connessione, dispositivo Android e brano non su SD. Riprovo');
            }
            else {
                if (!brano.id || brano.id === '') {
                    this.utility.scriveDebug(this, 'Nessuna informazione sul brano. Riprovo a cercarne un altro');
                    tentativi++;
                    if (tentativi > 10) {
                        alert('Troppi tentativi nel rilevare il numero del brano');
                        esce = true;
                    }
                }
                else {
                    this.utility.scriveDebug(this, 'Brano rilevato con id ' + random + ': ' + JSON.stringify(brano));
                    this.utility.scriveDebug(this, 'ID Brano rilevato: ' + brano.id);
                    this.utility.scriveDebug(this, 'Brano rilevato: ' + brano.text);
                    this.utility.scriveDebug(this, 'Path brano: ' + this.pathBranoProssimo);
                }
            }
        }
        if (this.deviceGirante === 'Android' && this.branoPresenteSuSD && brano.text && brano.text !== '') {
            _varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"].filesInMemoria.forEach(function (element) {
                if (element.toUpperCase().indexOf(brano.text.toUpperCase().trim()) > -1) {
                    _this.branoPresenteSuSD = true;
                }
            });
        }
        this.caricatoProssimoBrano = -1;
        this.utility.scriveDebug(this, 'Brano su SD: ' + this.branoPresenteSuSD);
        if (brano && brano.id) {
            return brano.id;
        }
        else {
            return -1;
        }
    };
    AppComponent.prototype.cambioSelezioneTV = function (e) {
        if (this.nonSalvareFiltro === true) {
            return;
        }
        this.braniFiltrati = ',' + e.toString() + ',';
        // console.log('Cambio selezione', e)
        // this.ultimoFiltroArray = this.braniFiltrati.split(',');
        // console.log(this.ultimoFiltroArray);
        this.contaTimerSalvataggio = 0;
        this.accendeTimerSalvataggio();
    };
    AppComponent.prototype.cambioFiltroTV = function (e) {
        // console.log(e);
        // console.log(this.itemsCanzoniFiltrate);
    };
    AppComponent.prototype.accendeTimerSalvataggio = function () {
        var _this = this;
        if (this.intervalSalvataggio) {
            clearInterval(this.intervalSalvataggio);
        }
        this.intervalSalvataggio = setInterval(function () {
            _this.contaTimerSalvataggio++;
            if (_this.contaTimerSalvataggio === 2) {
                _this.contaTimerSalvataggio = 0;
                clearInterval(_this.intervalSalvataggio);
                // localStorage.setItem('Dati_' + this.letteraItem, this.ultimoFiltro);
                // console.log('Filtro salvato');
            }
        }, 1000);
    };
    AppComponent.prototype.sistemaTesto = function (testo) {
        var t = '';
        if (testo) {
            t = testo;
            while (t.indexOf('***PV***') > -1) {
                t = t.replace('***PV***', ';');
            }
            while (t.indexOf('§') > -1) {
                t = t.replace('§', '<br />');
            }
            while (t.indexOf('%20') > -1) {
                t = t.replace('%20', ' ');
            }
        }
        return t;
    };
    AppComponent.prototype.refreshCanzoni = function () {
        if (!this.isConnected) {
            return;
        }
        if (confirm('Si vogliono ricaricare i dati delle canzoni ?')) {
            this.refreshCanzoniSenzaDomanda();
        }
    };
    AppComponent.prototype.refreshCanzoniSenzaDomanda = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.caricamentoInCorso = true;
        this.apiService.refreshDB(this.idUtenza).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                _this.caricamentoInCorso = false;
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.utility.visualizzaMessaggio(_this, 'Refresh Brani: Dati ricaricati', false);
                    // localStorage.removeItem('bellezzeJSON');
                    // // this.caricaTutto();
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Refresh brani: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Refresh Brani: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.refreshCanzoniHARD = function (chiedeConferma) {
        if (!this.isConnected) {
            return;
        }
        if (!chiedeConferma) {
            this.refreshCanzoniSenzaDomandaHard();
        }
        else {
            if (confirm('Si vogliono ricaricare COMPLETAMENTE i dati delle canzoni ?\nL\'operazione sarà molto lunga')) {
                this.refreshCanzoniSenzaDomandaHard();
            }
        }
    };
    AppComponent.prototype.refreshCanzoniSenzaDomandaHard = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.caricamentoInCorso = true;
        this.apiService.refreshDBHard(this.idUtenza).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                _this.caricamentoInCorso = false;
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.utility.visualizzaMessaggio(_this, 'Refresh Brani: Dati ricaricati', false);
                    // localStorage.removeItem('bellezzeJSON');
                    // // this.caricaTutto();
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Refresh brani: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Refresh Brani: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.effettuaReplace = function (str, find, replace) {
        var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        return str.replace(new RegExp(escapedFind, 'g'), replace);
    };
    AppComponent.prototype.tuttoSchermo = function () {
        if (this.bTuttoSchermo) {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
            this.bTuttoSchermo = false;
        }
        else {
            if (this.elem.requestFullscreen) {
                this.elem.requestFullscreen();
            }
            else if (this.elem.mozRequestFullScreen) {
                /* Firefox */
                this.elem.mozRequestFullScreen();
            }
            else if (this.elem.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.elem.webkitRequestFullscreen();
            }
            else if (this.elem.msRequestFullscreen) {
                /* IE/Edge */
                this.elem.msRequestFullscreen();
            }
            this.bTuttoSchermo = true;
        }
    };
    AppComponent.prototype.settaStelle = function (n) {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        // titoloBrano = '';
        // artista = '';
        // album = '';
        var params = {
            idCanzone: this.numeroBrano,
            Stelle: n
        };
        this.utility.scriveDebug(this, 'Setta stelle: ' + JSON.stringify(params));
        this.apiService.impostaStelle(this.idUtenza, params).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                _this.utility.scriveDebug(_this, 'Setta stelle. Ritorno: ' + data2);
                if (data2.indexOf('ERROR:') === -1) {
                    for (var i = 0; i < n; i++) {
                        _this.bellezza[i] = 'assets/immagini/preferito.png';
                    }
                    for (var i = n; i <= 10; i++) {
                        _this.bellezza[i] = 'assets/immagini/preferito_vuoto.png';
                    }
                    _this.utility.visualizzaMessaggio(_this, 'Stelle impostate: ' + n, false);
                    _this.datiJSON.forEach(function (element) {
                        element.children.forEach(function (element2) {
                            element2.children.forEach(function (element3) {
                                if (element3.id === _this.numeroBrano) {
                                    element3.Stelle = n;
                                }
                            });
                        });
                    });
                    _this.storage.checkTutteLeCanzoni(_this);
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Imposta Stelle: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Imposta Stelle: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.clickSuTreeView = function (e) {
        var _this = this;
        this.caricatoProssimoBrano = -1;
        var brano = e.srcElement.innerText;
        // console.log(brano);
        setTimeout(function () {
            _this.nonSalvareFiltro = false;
        }, 100);
    };
    AppComponent.prototype.cambiaFiltro = function (e) {
        var _this = this;
        if (e.length > 1) {
            this.listaFiltrata = new Array();
            this.hover = new Array();
            this.datiJSON.forEach(function (element) {
                if (element.Album.toUpperCase().indexOf(e.toUpperCase()) > -1 ||
                    element.Artista.toUpperCase().indexOf(e.toUpperCase()) > -1 ||
                    element.Brano.toUpperCase().indexOf(e.toUpperCase()) > -1) {
                    _this.listaFiltrata.push(element);
                    _this.hover.push(false);
                }
            });
            // console.log('Filtro:',this.listaFiltrata);
        }
    };
    AppComponent.prototype.selezioneBranoFiltrato = function (b) {
        // console.log(b);
        this.numeroBrano = b.Id;
        this.numeroBranoAttuale = this.numeroBrano;
        if (this.deviceGirante !== 'Android') {
            if (this.audio) {
                this.audio.pause();
            }
        }
        else {
            if (this.audioAndroid) {
                this.audioAndroid.pause();
            }
        }
        this.caricaBrano.caricaBrano(this);
    };
    AppComponent.prototype.eliminaImmagine = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        if (this.immagineSfondo === '') {
            alert('Nessuna immagine presente');
            return;
        }
        var imm = this.immagineSfondo;
        imm = imm.replace(this.urlWS, '');
        imm = imm.replace('Brani/', '');
        if (this.debug === true) {
            console.log(imm);
        }
        this.apiService.eliminaImm(imm).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.cambiaImmagine1();
                    // alert('Immagine eliminata');
                    _this.utility.visualizzaMessaggio(_this, 'Immagine eliminata', false);
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Elimina immagine: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Elimina immagine: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.scaricaFileEliminazioni = function () {
        if (!this.isConnected) {
            return;
        }
        var nomeFile = this.urlWS + 'Eliminazioni.txt';
        // console.log(nomeFile);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", nomeFile, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = 'Eliminazioni.txt';
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        };
        xhr.send();
    };
    AppComponent.prototype.scaricaImmagine = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        var imm = this.immagineSfondo;
        imm = imm.replace(this.urlWS, '');
        imm = imm.replace('Brani/', '');
        var imm2 = imm.split('/');
        var nomeFile = imm2[imm2.length - 1];
        console.log(imm);
        this.apiService.controllaSeGiaScaricata(imm).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", _this.immagineSfondo, true);
                    xhr.responseType = "blob";
                    xhr.onload = function () {
                        var urlCreator = window.URL || window.webkitURL;
                        var imageUrl = urlCreator.createObjectURL(this.response);
                        var tag = document.createElement('a');
                        tag.href = imageUrl;
                        tag.download = 'looWebPlayer_' + nomeFile;
                        document.body.appendChild(tag);
                        tag.click();
                        document.body.removeChild(tag);
                    };
                    xhr.send();
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Controllo immagine: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Controllo immagine: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.settaLinguaggio = function () {
        // console.log(this.linguaggio);
        if (this.linguaggio === 'OR') {
            this.linguaggio = 'IT';
            this.linguaggioIcona = 'assets/immagini/italiano.png';
        }
        else {
            this.linguaggio = 'OR';
            this.linguaggioIcona = 'assets/immagini/inglese.png';
        }
        localStorage.setItem('linguaggio', this.linguaggio);
    };
    AppComponent.prototype.eliminaVideo = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        var vid = this.youTubeVideos[this.numeroVideo].pathUrl;
        if (this.debug === true) {
            console.log(vid);
        }
        this.apiService.eliminaVideo(vid).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.youTubeVideos[_this.numeroVideo].Esiste = 'N';
                    _this.ytComponent.avanzaVideo(_this);
                    // alert('Immagine eliminata');
                    _this.utility.visualizzaMessaggio(_this, 'Video eliminato', false);
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Elimina Video: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Elimina Video: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.downloadVideo = function () {
        if (!this.isConnected) {
            return;
        }
        var prima = this.youTubeVideos[this.numeroVideo].linkVideo.substring(0, 1);
        var videoSource = this.urlWS + 'YouTube/' + prima + '/' + this.youTubeVideos[this.numeroVideo].linkVideo +
            this.youTubeVideos[this.numeroVideo].estensione;
        console.log('Download ', videoSource);
        var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
        FileSaver.saveAs(videoSource, this.youTubeVideos[this.numeroVideo].linkVideo +
            this.youTubeVideos[this.numeroVideo].estensione);
    };
    AppComponent.prototype.scaricaVideoPregressi = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.apiService.scaricaVideoPregressi().map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.utility.visualizzaMessaggio(_this, data2, false);
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Scarica Video: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.scriveVolteAscoltata = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.apiService.scriveVolteAscoltata(this.idUtenza, this.numeroBrano).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.ritornaVolteAscoltata();
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Setta volte ascoltata: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.ritornaVolteAscoltata = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.apiService.ritornaVolteAscoltata(this.idUtenza, this.numeroBrano).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.volteAscoltatoBrano = data2;
                }
                else {
                    _this.volteAscoltatoBrano = 0;
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.volteAscoltatoBrano = 0;
                _this.utility.visualizzaMessaggio(_this, 'Ritorna volte ascoltata: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.scaricaNuovaImmagine = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        // console.log('Scaricando nuova immagine', this.artista);
        if (!this.staSuonando) {
            return;
        }
        this.apiService.ScaricaNuovaImmagine({
            Artista: this.artista,
            Album: '',
            Canzone: ''
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                console.log('Scarica nuova immagine', data2);
                if (data2.indexOf('ERROR:') === -1) {
                }
                else {
                }
            }
        }, function (error) {
            if (error instanceof Error) {
            }
        });
    };
    AppComponent.prototype.scaricaTesto = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.apiService.ScaricaTesto({
            idCanzone: this.numeroBrano,
            Artista: this.artista,
            Album: this.album,
            Canzone: this.titoloBranoPerTesto
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    var d = data2.split('|');
                    _this.testo = _this.sistemaTesto(d[0]);
                    _this.testoTradotto = _this.sistemaTesto(d[1]);
                    console.log(_this.testo);
                    if (_this.testo.indexOf('Nessun testo rilevato') > -1) {
                        _this.Happi.prendeArtista(_this, _this.numeroBrano, _this.artista, _this.album, _this.titoloBrano);
                    }
                }
                else {
                    _this.volteAscoltatoBrano = 0;
                    _this.utility.visualizzaMessaggio(_this, 'Ritorna scarica testo: ' + data2, true);
                    _this.Happi.prendeArtista(_this, _this.numeroBrano, _this.artista, _this.album, _this.titoloBrano);
                }
            }
        }, function (error) {
            _this.volteAscoltatoBrano = 0;
            _this.Happi.prendeArtista(_this, _this.numeroBrano, _this.artista, _this.album, _this.titoloBrano);
            _this.utility.visualizzaMessaggio(_this, 'Ritorna scarica testo: ' + error.message, true);
        });
    };
    AppComponent.prototype.eliminaBrutte = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        if (!confirm('Si voglio eliminare le canzoni di bellezza < 4 ?')) {
            return;
        }
        this.apiService.EliminaBrutte(this.idUtenza).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Ritorna scarica testo: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Ritorna scarica testo: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.gestioneUguali = function () {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.apiService.RitornaUguali().map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.uguali = new Array();
                    var d = data2.split('§');
                    d.forEach(function (element) {
                        if (element) {
                            var dd = element.split(';');
                            var ddd = {
                                Artista: dd[0],
                                Brano: dd[1],
                                Quante: dd[2]
                            };
                            _this.uguali.push(ddd);
                        }
                    });
                    _this.pannelloUtility = false;
                    _this.mascheraGestioneUguali = true;
                    setTimeout(function () {
                        _this.settaZIndex(9);
                    }, 100);
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Ritorna uguali: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Ritorna uguali: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.visualizzaUguali = function (b) {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.ugualiSelezionato = b;
        // console.log(b);
        this.apiService.RitornaUgualiDettaglio(this.idUtenza, {
            Artista: b.Artista,
            Brano: b.Brano
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log('Ritorno uguali dettaglio: ', data2);
                if (data2.indexOf('ERROR:') === -1) {
                    var uguali_1 = new Array();
                    var d = data2;
                    var dd = d.split('§');
                    dd.forEach(function (element) {
                        if (element) {
                            var ddd = element.split(';');
                            var dddd = {
                                Id: ddd[0],
                                Artista: b.Artista,
                                Brano: b.Brano,
                                Album: ddd[1],
                                Bellezza: ddd[2],
                                Traccia: ddd[3],
                                Anno: ddd[4],
                                Ascoltata: ddd[5]
                            };
                            uguali_1.push(dddd);
                        }
                    });
                    _this.ugualiDettaglio = uguali_1;
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Ritorno uguali dettaglio: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Ritorno uguali dettaglio: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.braniAlbum = function (b) {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        this.albumSelezionato = b;
        // console.log(b);
        this.apiService.RitornaImmaginiArtista(b.artista).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.immaginiArtista = new Array();
                    var d = data2.split('§');
                    d.forEach(function (element) {
                        if (element) {
                            var dd = element.split(';');
                            var ddd = {
                                Artista: dd[0],
                                Cartella: dd[1],
                                Immagine: dd[2]
                            };
                            _this.immaginiArtista.push(ddd);
                        }
                    });
                    // console.log(this.immaginiArtista);
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Ritorna immagini artista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Ritorna immagini artista: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.eliminaBranoUguali = function (b) {
        var _this = this;
        if (!this.isConnected) {
            return;
        }
        console.log(b);
        if (confirm('Si vuole eliminare il brano ?')) {
            this.apiService.EliminaBrano(this.idUtenza, {
                Artista: b.Artista, Album: b.Album, Brano: b.Brano
            }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                .subscribe(function (data) {
                if (data) {
                    var data2 = _this.apiService.prendeSoloDatiValidi(data);
                    // console.log(data2);
                    if (data2.indexOf('ERROR:') === -1) {
                        _this.gestioneUguali();
                        _this.visualizzaUguali(_this.ugualiSelezionato);
                        _this.utility.visualizzaMessaggio(_this, 'Brano eliminato', true);
                    }
                    else {
                        _this.utility.visualizzaMessaggio(_this, 'Eliminazione brano: ' + data2, true);
                    }
                }
            }, function (error) {
                if (error instanceof Error) {
                    _this.utility.visualizzaMessaggio(_this, 'Eliminazione brano: ' + error.message, true);
                }
            });
        }
    };
    AppComponent.prototype.goToLink = function (url) {
        if (!this.isConnected) {
            return;
        }
        window.open(url, "_blank");
    };
    AppComponent.prototype.ricaricaBraniLocali = function () {
        var _this = this;
        var indice = 8;
        // ComponentFile.staLeggendoFiles[indice] = true;
        setTimeout(function () {
            _this.file.prendeTuttiIFilesInLocale(_this, 5).then(function (Ritorno) {
                alert('Brani ricaricati');
                window.location.reload();
            });
            /* const si2 = setInterval(() => {
              if (!ComponentFile.staLeggendoFiles[indice]) {
                clearInterval(si2);
                alert('Brani ricaricati');
                window.location.reload();
              }
            }, 1000); */
        }, 100);
    };
    AppComponent.prototype.apreMenu = function () {
        var _this = this;
        this.menuMostrato = !this.menuMostrato;
        if (this.menuMostrato === true) {
            // console.log('Apro pannello menù');
            setTimeout(function () {
                _this.settaZIndex(5);
            }, 100);
        }
    };
    AppComponent.prototype.caricaBranoConClick = function (e) {
        var _this = this;
        this.utility.scriveDebug(this, 'Brano clickato: ' + e);
        this.numeroBrano = e;
        this.numeroBranoAttuale = e;
        setTimeout(function () {
            _this.caricaBrano.caricaBrano(_this);
        }, 100);
    };
    AppComponent.prototype.salvaLog = function () {
        var _this = this;
        if (this.debuggone !== '') {
            var d = this.debuggone;
            while (d.indexOf('<br />') > -1) {
                d = d.replace('<br />', '\n');
            }
            this.file.writeFile(this, 9, 'LooigiSoft', 'looWebPlayer/log.txt', d).then(function (Ritorno) {
                _this.utility.visualizzaMessaggio(_this, 'Scrittura log eseguita', true);
            });
        }
    };
    AppComponent.prototype.converteNumeri = function (c) {
        var cc = '';
        for (var i = 0; i < c.length; i++) {
            cc += c.charCodeAt(i) + ';';
        }
        return cc;
    };
    AppComponent.prototype.mandaEmail = function () {
        var _this = this;
        if (this.debuggone !== '') {
            var quanto = 4096;
            var numero = 1;
            var d = this.debuggone;
            for (var i = 0; i <= d.length; i += quanto) {
                var parte = this.converteNumeri(d.substring(i, i + quanto));
                this.apiService.InviaMail({ Destinatario: 'looigi@gmail.com',
                    Oggetto: 'Invio log LWP ' + numero,
                    Corpo: parte }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                    .subscribe(function (data) {
                    if (data) {
                        var data2 = _this.apiService.prendeSoloDatiValidi(data);
                        // console.log(data2);
                        if (data2.indexOf('ERROR:') === -1) {
                            _this.utility.visualizzaMessaggio(_this, 'Log inviato', true);
                        }
                        else {
                            _this.utility.visualizzaMessaggio(_this, 'Problema su invio log: ' + data2, true);
                        }
                    }
                }, function (error) {
                    if (error instanceof Error) {
                        _this.utility.visualizzaMessaggio(_this, 'Invio log: ' + error.message, true);
                    }
                });
                numero++;
            }
        }
    };
    AppComponent.prototype.aggiungeTag = function () {
        this.mostraAggiungeTag = true;
        this.aggiornaTag();
    };
    AppComponent.prototype.aggiornaTag = function () {
        var _this = this;
        this.listaTagsVisualizzati = new Array();
        this.listaTags.forEach(function (element) {
            var ok = 'true';
            if (_this.tagsBrano) {
                _this.tagsBrano.forEach(function (element2) {
                    if (ok === 'true' && +element.idTag === +element2.idTag) {
                        ok = 'false';
                    }
                });
            }
            if (ok === 'true') {
                _this.listaTagsVisualizzati.push(element);
            }
        });
    };
    AppComponent.prototype.eliminaTag = function (id) {
        var _this = this;
        this.apiService.EliminaTagDaBrano(this.idUtenza, {
            NumeroBrano: this.numeroBrano,
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var t_1 = new Array();
                    _this.tagsBrano.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            t_1.push(element);
                        }
                    });
                    _this.tagsBrano = t_1;
                    _this.aggiornaTag();
                    _this.sistemaTagAListaBrani();
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.selezionaTag = function (id, testo) {
        var _this = this;
        this.apiService.AggiungeTagABrano(this.idUtenza, {
            NumeroBrano: this.numeroBrano,
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var progressivo_1 = 0;
                    _this.tagsBrano.forEach(function (element) {
                        if (element.Progressivo > progressivo_1) {
                            progressivo_1 = element.Progressivo;
                        }
                    });
                    progressivo_1++;
                    var tt = {
                        Progressivo: progressivo_1,
                        idTag: +id,
                        Tag: testo
                    };
                    _this.tagsBrano.push(tt);
                    _this.aggiornaTag();
                    _this.sistemaTagAListaBrani();
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.sistemaTagAListaBrani = function () {
        var _this = this;
        // console.log(this.braniFiltrati);
        // console.log(this.artista);
        // console.log(this.album);
        // console.log(this.titoloBrano);
        this.braniFiltrati.forEach(function (element) {
            if (element.text === _this.artista) {
                // console.log('Trovato artista', element);
                var albums = element.children;
                albums.forEach(function (element2) {
                    if (element2.text === _this.album) {
                        // console.log('Trovato album', element2);
                        var brani = element2.children;
                        brani.forEach(function (element3) {
                            if (element3.text === _this.titoloBrano) {
                                var t_2 = '';
                                var progressivo_2 = 1;
                                _this.tagsBrano.forEach(function (element4) {
                                    t_2 += progressivo_2 + ';' + element4.idTag + ';' + element4.Tag + '§';
                                    progressivo_2++;
                                });
                                element3.tags = t_2;
                                // console.log(element3, this.tagsBrano);
                            }
                        });
                    }
                });
            }
        });
    };
    AppComponent.prototype.aggiungeTagALista = function () {
        var _this = this;
        if (this.nuovoTag === '') {
            this.utility.visualizzaMessaggio(this, 'Inserire un tag', true);
            return;
        }
        this.apiService.SalvaTag({
            Tag: this.nuovoTag
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var tt = {
                        idTag: +data2,
                        Tag: _this.nuovoTag
                    };
                    _this.listaTags.push(tt);
                    _this.listaTagsVisualizzati.push(tt);
                    _this.nuovoTag = '';
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.eliminaTagDaLista = function (id) {
        var _this = this;
        this.apiService.EliminaTag({
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var l_1 = new Array();
                    _this.listaTagsVisualizzati.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l_1.push(element);
                        }
                    });
                    _this.listaTagsVisualizzati = l_1;
                    var l2_1 = new Array();
                    _this.listaTags.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l2_1.push(element);
                        }
                    });
                    _this.listaTags = l2_1;
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.filtraBrani = function () {
        // console.log('Filtro', this.filtroImpostato);
        // if (this.filtroImpostato.length > 2) {
        this.utility.filtraBrani(this);
        // }
    };
    AppComponent.prototype.metteToglieTasti = function () {
        this.visuaTasti = !this.visuaTasti;
    };
    AppComponent.prototype.cambiaUtente = function () {
        var _this = this;
        this.apiService.creaUtenza('')
            .map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            _this.utility.scriveDebug(_this, 'Lettura utenza: ok');
            // alert(data);
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(JSON.parse(data2));
                if (data2.indexOf('ERROR:') === -1) {
                    // Utenza da scegliere
                    var d = data2.split('§');
                    _this.Utenti = new Array();
                    d.forEach(function (element) {
                        if (element && element !== '') {
                            var dd = element.split(';');
                            var ddd = {
                                idUtente: +dd[0],
                                Utente: dd[1],
                                Amministratore: dd[2],
                                Password: dd[3]
                            };
                            _this.Utenti.push(ddd);
                        }
                    });
                    // console.log('Lista Utenti', this.Utenti);
                    _this.caricamentoInCorso = false;
                    _this.mostraSceltaUtenti = true;
                }
                else {
                    // alert('data2');
                    _this.utility.visualizzaMessaggio(_this, 'Lettura utenza: ' + data2, true);
                }
            }
            else {
                _this.utility.visualizzaMessaggio(_this, 'Lettura utenza: Nessun dato ricevuto', true);
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Lettura utenza: ' + error.message, true);
            }
        });
    };
    AppComponent.prototype.selezionaUtente = function (u) {
        this.utenteScelto = u;
        this.pwd = '';
        this.passwordBox = true;
    };
    AppComponent.prototype.checkPassword = function () {
        // console.log(this.utenteScelto, this.pwd);
        if (this.utenteScelto.Password === this.pwd) {
            this.utenza = this.utenteScelto.Utente;
            this.idUtenza = +this.utenteScelto.idUtente;
            this.Amministratore = this.utenteScelto.Amministratore;
            localStorage.setItem('utenza', this.utenza);
            localStorage.setItem('idUtenza', this.idUtenza.toString());
            localStorage.setItem('tipoUtente', this.Amministratore);
            this.passwordBox = false;
            this.utenteScelto = undefined;
            this.pwd = '';
            this.mostraSceltaUtenti = false;
            // // this.caricaTutto();
        }
        else {
            alert('Passowrd errata o non valida');
        }
    };
    AppComponent.prototype.uploadBrani = function () {
        // console.log('UPLOAD');
        this.mascheraUploadVisibile = !this.mascheraUploadVisibile;
    };
    AppComponent.prototype.settaZIndex = function (n) {
        var _this = this;
        /* if (this.lastClickZIndex === n) {
          return;
        } */
        this.lastClickZIndex = n;
        var conta = 0;
        var valore = 1000;
        this.zIndex.forEach(function (element) {
            if (+conta === +n) {
                _this.zIndex[conta] = 1900;
            }
            else {
                _this.zIndex[conta] = valore;
            }
            valore += 10;
            conta++;
        });
        // console.log('ZIndex: ', this.nomiDiv, this.zIndex);
        var nn = 0;
        this.nomiDiv.forEach(function (element) {
            if (element && element !== '' && element !== null) {
                // console.log(element);
                var ogg = document.getElementById(element);
                if (ogg && ogg !== null) {
                    ogg.style.zIndex = _this.zIndex[nn].toString();
                }
            }
            nn++;
        });
    };
    AppComponent.prototype.aprePannellogestioneBrani = function () {
        var _this = this;
        // console.log('Apro pannello gestione brani');
        this.mascheraGestioneBrani = true;
        setTimeout(function () {
            _this.settaZIndex(8);
        }, 100);
    };
    AppComponent.prototype.aprePannelloUtility = function () {
        var _this = this;
        // console.log('Apro pannello utility');
        this.pannelloUtility = true;
        setTimeout(function () {
            _this.settaZIndex(7);
        }, 100);
    };
    AppComponent.prototype.apreDettaglioArtisti = function () {
        var _this = this;
        // console.log('Apro pannello dettalio artisti');
        this.mascheraArtisti = true;
        setTimeout(function () {
            _this.settaZIndex(4);
        }, 100);
    };
    AppComponent.prototype.aprePannelloDebug = function () {
        var _this = this;
        // console.log('Apro pannello debug');
        this.debug = true;
        setTimeout(function () {
            _this.settaZIndex(1);
        }, 100);
    };
    AppComponent.prototype.scrollaTesto = function (cosa, campo, n) {
        var _this = this;
        if (campo !== '') {
            var t = document.getElementById(cosa);
            // console.log(t);
            if (t && t !== null) {
                var lungh = +t.offsetWidth;
                var fs1 = t.style.fontSize;
                var fs = void 0;
                if (fs1 && fs1 !== null && fs1.indexOf('px') > -1) {
                    fs = +(fs1.replace('px', ''));
                }
                else {
                    fs = 14;
                }
                var caratteri_1 = Math.round(lungh / (fs * .5));
                if (campo.length > caratteri_1) {
                    for (var i = 0; i <= (caratteri_1 / 2); i++) {
                        campo = '_' + campo;
                        campo += '_';
                    }
                    console.log('Lunghezza campo: ', lungh);
                    console.log('Dimensione font: ', fs);
                    console.log('Caratteri: ', caratteri_1);
                    console.log('Scritta: >>>' + campo + '<<<');
                    this.lunghezzaCampo[n] = campo.length;
                    this.posizioneCarattere[n] = 0;
                    this.testoScrollabile[n] = campo.substring(this.posizioneCarattere[n], this.posizioneCarattere[n] + caratteri_1);
                    if (this.scrollTimer[n] && this.scrollTimer[n] !== null) {
                        clearInterval(this.scrollTimer[n]);
                        this.scrollTimer[n] = null;
                    }
                    this.scrollTimer[n] = setInterval(function () {
                        _this.posizioneCarattere[n]++;
                        if (_this.posizioneCarattere[n] > _this.lunghezzaCampo[n]) {
                            _this.posizioneCarattere[n] = 0;
                        }
                        _this.testoScrollabile[n] = campo.substring(_this.posizioneCarattere[n], _this.posizioneCarattere[n] + caratteri_1);
                    }, 100);
                }
                else {
                    this.testoScrollabile[n] = campo;
                }
            }
            else {
                if (this.scrollTimer[n] && this.scrollTimer[n] !== null) {
                    clearInterval(this.scrollTimer[n]);
                    this.scrollTimer[n] = null;
                }
                this.testoScrollabile[n] = campo;
            }
        }
        else {
            if (this.scrollTimer[n] && this.scrollTimer[n] !== null) {
                clearInterval(this.scrollTimer[n]);
                this.scrollTimer[n] = null;
            }
            this.testoScrollabile[n] = '';
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_21__["ApiService"] },
        { type: _varie_youtube_component__WEBPACK_IMPORTED_MODULE_10__["YouTubeComponent"] },
        { type: _varie_utility_component__WEBPACK_IMPORTED_MODULE_11__["UtilityComponent"] },
        { type: ng_connection_service__WEBPACK_IMPORTED_MODULE_7__["ConnectionService"] },
        { type: _varie_happi_dev_component__WEBPACK_IMPORTED_MODULE_12__["HappiComponent"] },
        { type: _varie_caricabrano_component__WEBPACK_IMPORTED_MODULE_8__["CaricaBranoComponent"] },
        { type: _varie_caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_13__["CaricaBranoAutomaticoComponent"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _services_speech_service__WEBPACK_IMPORTED_MODULE_14__["VoiceRecognitionService"] },
        { type: _varie_files__WEBPACK_IMPORTED_MODULE_9__["ComponentFile"] },
        { type: _varie_storage_component__WEBPACK_IMPORTED_MODULE_15__["StorageComponent"] },
        { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_16__["SpeechRecognition"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_17__["SplashScreen"] },
        { type: _varie_checkrete__WEBPACK_IMPORTED_MODULE_19__["CheckReteComponent"] },
        { type: _varie_gestione_android_component__WEBPACK_IMPORTED_MODULE_20__["GestioneAndroidComponent"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoPlayer", { static: false })
    ], AppComponent.prototype, "videoplayer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayerLocale', { static: false })
    ], AppComponent.prototype, "videoplayerLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divImmagine1", { static: false })
    ], AppComponent.prototype, "divImmagine1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divImmagine2", { static: false })
    ], AppComponent.prototype, "divImmagine2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe')
    ], AppComponent.prototype, "myScrollContainer", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_5__["fade"],
            providers: [_services_speech_service__WEBPACK_IMPORTED_MODULE_14__["VoiceRecognitionService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/esm5/http.js");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treeview/treeview.component */ "./src/app/treeview/treeview.component.ts");
/* harmony import */ var _gestionealbum_gestionealbum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gestionealbum/gestionealbum.component */ "./src/app/gestionealbum/gestionealbum.component.ts");
/* harmony import */ var _gestioneimmagini_gestioneimmagini_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gestioneimmagini/gestioneimmagini.component */ "./src/app/gestioneimmagini/gestioneimmagini.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-connection-service */ "./node_modules/ng-connection-service/__ivy_ngcc__/fesm5/ng-connection-service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _varie_caricabrano_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./varie/caricabrano.component */ "./src/app/varie/caricabrano.component.ts");
/* harmony import */ var _varie_youtube_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./varie/youtube.component */ "./src/app/varie/youtube.component.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./varie/utility.component */ "./src/app/varie/utility.component.ts");
/* harmony import */ var _varie_happi_dev_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./varie/happi-dev.component */ "./src/app/varie/happi-dev.component.ts");
/* harmony import */ var _varie_caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./varie/caricabranoautomatico.component */ "./src/app/varie/caricabranoautomatico.component.ts");
/* harmony import */ var _varie_musixmatch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./varie/musixmatch.component */ "./src/app/varie/musixmatch.component.ts");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/__ivy_ngcc__/fesm5/angular2-draggable.js");
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/speech.service */ "./src/app/services/speech.service.ts");
/* harmony import */ var _varie_files__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./varie/files */ "./src/app/varie/files.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _varie_storage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./varie/storage.component */ "./src/app/varie/storage.component.ts");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ "./node_modules/@awesome-cordova-plugins/media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _varie_checkrete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./varie/checkrete */ "./src/app/varie/checkrete.ts");
/* harmony import */ var _varie_gestione_android_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./varie/gestione_android.component */ "./src/app/varie/gestione_android.component.ts");
/* harmony import */ var _varie_gestonemusica_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./varie/gestonemusica.component */ "./src/app/varie/gestonemusica.component.ts");
/* harmony import */ var _filtrobrani_filtrobrani_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./filtrobrani/filtrobrani.component */ "./src/app/filtrobrani/filtrobrani.component.ts");
/* harmony import */ var _uploadbrani_uploadbrani_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./uploadbrani/uploadbrani.component */ "./src/app/uploadbrani/uploadbrani.component.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_12__["TreeViewComponent"],
                _gestionealbum_gestionealbum_component__WEBPACK_IMPORTED_MODULE_13__["AlbumComponent"],
                _gestioneimmagini_gestioneimmagini_component__WEBPACK_IMPORTED_MODULE_14__["ImmaginiComponent"],
                _filtrobrani_filtrobrani_component__WEBPACK_IMPORTED_MODULE_35__["FiltroComponent"],
                _uploadbrani_uploadbrani_component__WEBPACK_IMPORTED_MODULE_36__["UploadBraniComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
                ngx_treeview__WEBPACK_IMPORTED_MODULE_10__["TreeviewModule"].forRoot(),
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_24__["AngularDraggableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                ng_connection_service__WEBPACK_IMPORTED_MODULE_16__["ConnectionServiceModule"],
            ],
            providers: [
                _services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
                _services_api2_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _varie_youtube_component__WEBPACK_IMPORTED_MODULE_19__["YouTubeComponent"],
                _varie_utility_component__WEBPACK_IMPORTED_MODULE_20__["UtilityComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"],
                _varie_happi_dev_component__WEBPACK_IMPORTED_MODULE_21__["HappiComponent"],
                _varie_musixmatch_component__WEBPACK_IMPORTED_MODULE_23__["MusixMatchComponent"],
                _varie_caricabrano_component__WEBPACK_IMPORTED_MODULE_18__["CaricaBranoComponent"],
                _varie_caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_22__["CaricaBranoAutomaticoComponent"],
                _varie_files__WEBPACK_IMPORTED_MODULE_26__["ComponentFile"],
                _services_speech_service__WEBPACK_IMPORTED_MODULE_25__["VoiceRecognitionService"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_27__["File"],
                _varie_storage_component__WEBPACK_IMPORTED_MODULE_28__["StorageComponent"],
                _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_29__["SpeechRecognition"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_30__["SplashScreen"],
                _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_31__["Media"],
                // MediaObject,
                _varie_checkrete__WEBPACK_IMPORTED_MODULE_32__["CheckReteComponent"],
                _varie_gestione_android_component__WEBPACK_IMPORTED_MODULE_33__["GestioneAndroidComponent"],
                _varie_gestonemusica_component__WEBPACK_IMPORTED_MODULE_34__["GestioneMusicaComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filtrobrani/filtrobrani.component.css":
/*!*******************************************************!*\
  !*** ./src/app/filtrobrani/filtrobrani.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRyb2JyYW5pL2ZpbHRyb2JyYW5pLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/filtrobrani/filtrobrani.component.ts":
/*!******************************************************!*\
  !*** ./src/app/filtrobrani/filtrobrani.component.ts ***!
  \******************************************************/
/*! exports provided: FiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroComponent", function() { return FiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../varie/utility.component */ "./src/app/varie/utility.component.ts");





var FiltroComponent = /** @class */ (function () {
    function FiltroComponent(apiService, utility) {
        this.apiService = apiService;
        this.utility = utility;
        this.mascheraFiltroBrani = false;
        this.quantiBraniFiltrati = 0;
        this.numeroStelle = 6;
        this.mascheraFiltroBraniEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fFilesEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.braniFiltratiEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eliminaMammaEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canzoniLocaliEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canzoniMammaEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.consideraStelleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maiVotateEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filtroImpostatoEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.numeroStelleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tagsEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.esclusioniEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mostraAggiungeTag = false;
        this.nuovoTag = '';
        // alert('ppp');
    }
    FiltroComponent.prototype.ngOnInit = function () {
        // alert('ppp2');
    };
    FiltroComponent.prototype.ngAfterViewInit = function () {
    };
    FiltroComponent.prototype.ngOnChanges = function (changes) {
        // alert('ppp3');
    };
    FiltroComponent.prototype.cambiaFiltro = function (e) {
        // this.storage.cambiaFiltro2(this.tt, e);
        this.filtroImpostatoEmit.emit(e);
        this.filtroImpostato = e;
        this.storage.cambiaFiltro2(this.tt, e);
        // console.log('Filtro: ', e);
    };
    FiltroComponent.prototype.cambiaEsclusioni = function (e) {
        this.storage.cambiaEsclusioni(this.tt, e);
        this.esclusioniEmit.emit(e);
        this.esclusioni = e;
        // console.log('Filtro: ', e);
    };
    FiltroComponent.prototype.eliminaTag = function (t) {
        var tt = new Array();
        this.tags.forEach(function (element) {
            if (element !== t) {
                tt.push(element);
            }
        });
        this.tags = tt;
        this.tagsEmit.emit(tt);
        this.storage.checkTagsRicerca(this.tt, this.tags);
        this.aggiornaTag();
    };
    FiltroComponent.prototype.aggiungeTagRicerca = function () {
        this.aggiornaTag();
        this.mostraAggiungeTag = true;
    };
    FiltroComponent.prototype.aggiornaTag = function () {
        var _this = this;
        // console.log(this.tags);
        this.listaTagsVisualizzati = new Array();
        this.listaTags.forEach(function (element) {
            var ok = 'true';
            if (_this.tags) {
                _this.tags.forEach(function (element2) {
                    var ele = element2.replace("'", "").replace("'", "").replace("\"", "").replace("\"", "");
                    if (ok === 'true' && element.Tag === ele) {
                        ok = 'false';
                    }
                });
            }
            if (ok === 'true') {
                _this.listaTagsVisualizzati.push(element);
            }
        });
    };
    FiltroComponent.prototype.selezionaTag = function (id, tag) {
        console.log(tag);
        this.tags.push(tag);
        this.tagsEmit.emit(this.tags);
        this.storage.checkTagsRicerca(this.tt, this.tags);
        this.aggiornaTag();
    };
    FiltroComponent.prototype.eliminaTagDaLista = function (id) {
        var _this = this;
        this.apiService.EliminaTag({
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var l_1 = new Array();
                    _this.listaTagsVisualizzati.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l_1.push(element);
                        }
                    });
                    _this.listaTagsVisualizzati = l_1;
                    var l2_1 = new Array();
                    _this.tags.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l2_1.push(element);
                        }
                    });
                    _this.tags = l2_1;
                    _this.tagsEmit.emit(_this.tags);
                    _this.storage.checkTagsRicerca(_this.tt, _this.tags);
                    _this.aggiornaTag();
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    FiltroComponent.prototype.aggiungeTagALista = function () {
        var _this = this;
        if (this.nuovoTag === '') {
            this.utility.visualizzaMessaggio(this, 'Inserire un tag', true);
            return;
        }
        this.apiService.SalvaTag({
            Tag: this.nuovoTag
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var tt = {
                        idTag: +data2,
                        Tag: _this.nuovoTag
                    };
                    _this.listaTags.push(tt);
                    _this.listaTagsVisualizzati.push(tt);
                    _this.nuovoTag = '';
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    FiltroComponent.ctorParameters = function () { return [
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__["UtilityComponent"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "mascheraFiltroBrani", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "deviceGirante", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "mascheraOpzioni", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "mascheraTesto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "fFiles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "braniFiltrati", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "storage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "eliminaMamma", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "canzoniLocali", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "canzoniMamma", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "consideraStelle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "maiVotate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "isConnected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "tt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "filtroImpostato", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "quantiBraniFiltrati", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "numeroStelle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "tags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "listaTags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "esclusioni", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FiltroComponent.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "mascheraFiltroBraniEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "fFilesEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "braniFiltratiEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "eliminaMammaEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "canzoniLocaliEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "canzoniMammaEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "consideraStelleEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "maiVotateEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "filtroImpostatoEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "numeroStelleEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "tagsEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FiltroComponent.prototype, "esclusioniEmit", void 0);
    FiltroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filtrobrani.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filtrobrani/filtrobrani.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_2__["fade"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filtrobrani.component.css */ "./src/app/filtrobrani/filtrobrani.component.css")).default]
        })
    ], FiltroComponent);
    return FiltroComponent;
}());



/***/ }),

/***/ "./src/app/gestionealbum/gestionealbum.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gestionealbum/gestionealbum.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottoncione {\r\n    margin: 10px;\r\n    width: 130px; \r\n    height: 130px; \r\n    border: 1px solid #999; \r\n    background-color: #ccc; \r\n    border-radius: 4px;\r\n    float: left;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.35);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbmVhbGJ1bS9nZXN0aW9uZWFsYnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFHZiw0Q0FBNEM7RUFDOUMiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uZWFsYnVtL2dlc3Rpb25lYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b25jaW9uZSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMzBweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/gestionealbum/gestionealbum.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gestionealbum/gestionealbum.component.ts ***!
  \**********************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../varie/utility.component */ "./src/app/varie/utility.component.ts");





var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(utility, apiService) {
        this.utility = utility;
        this.apiService = apiService;
        this.datiJsonRitornati = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipologia = '';
        this.vecchioNome = '';
        this.mascheraRinomina = false;
        this.mascheraImmAlbum = false;
        this.nuovoNome = '';
        this.nuovoNumero = '';
        this.scaricamentoImmagine = false;
    }
    AlbumComponent.prototype.ngOnInit = function () {
    };
    AlbumComponent.prototype.ngAfterViewInit = function () {
    };
    AlbumComponent.prototype.ngOnChanges = function (e) {
        if (e.datiAlbum) {
            if (e.datiAlbum.currentValue) {
                this.album = e.datiAlbum.currentValue;
                var anno = this.album.anno;
                for (var i = anno.length + 1; i <= 4; i++) {
                    anno = '0' + anno;
                }
                this.artista = this.album.artista;
                this.nomeAlbum = this.album.album;
                this.cartella = anno + '-' + this.album.album;
                this.immagineAlbum = this.apiService.ritornaUrlImmagine() + 'Immagini/' + this.artista + '/' +
                    this.cartella + '/Cover_' + this.artista + '.jpg';
                // console.log(this.album);
            }
        }
        if (e.urlImmagine) {
            if (e.urlImmagine.currentValue) {
                this.pathImmagini = e.urlImmagine.currentValue;
                // console.log('Percorso immagini', this.pathImmagini);
            }
        }
    };
    AlbumComponent.prototype.eliminaBrano = function (b) {
        console.log(b);
    };
    AlbumComponent.prototype.rinominaBrano = function (b) {
        // console.log(b);
        this.origine = b;
        this.vecchioNome = b.Text;
        this.nuovoNome = this.vecchioNome;
        this.nuovoNumero = b.Traccia;
        this.tipologia = 'Brano';
        this.mascheraRinomina = true;
    };
    AlbumComponent.prototype.eliminaAlbum = function () {
        console.log(this.album, this.nomeAlbum);
    };
    AlbumComponent.prototype.rinominaAlbum = function () {
        // console.log(this.album, this.nomeAlbum);
        this.origine = this.album;
        this.vecchioNome = this.nomeAlbum;
        this.nuovoNome = this.vecchioNome;
        this.nuovoNumero = this.album.anno;
        this.tipologia = 'Album';
        this.mascheraRinomina = true;
    };
    AlbumComponent.prototype.salvaRinomina = function () {
        var _this = this;
        if (this.tipologia === 'Brano') {
            this.apiService.RinominaBrano(this.idUtenza, {
                Artista: this.artista,
                Album: this.nomeAlbum,
                Brano: this.origine.Text,
                NuovaTraccia: this.nuovoNumero,
                NuovoNomeBrano: this.nuovoNome
            }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                .subscribe(function (data) {
                if (data) {
                    var data2 = _this.apiService.prendeSoloDatiValidi(data);
                    if (data2.indexOf('ERROR:') === -1) {
                        _this.datiJsonRitornati.emit(JSON.parse(data2));
                        _this.mascheraRinomina = false;
                    }
                    else {
                        _this.utility.visualizzaMessaggio(_this, 'Rinomina brano: ' + data2, true);
                    }
                }
            }, function (error) {
                if (error instanceof Error) {
                    _this.utility.visualizzaMessaggio(_this, 'Rinomina brano: ' + error.message, true);
                }
            });
        }
        else {
            this.apiService.RinominaAlbum(this.idUtenza, {
                Artista: this.artista,
                Album: this.origine.album,
                NuovoAnno: this.nuovoNumero,
                NuovoNomeAlbum: this.nuovoNome
            }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                .subscribe(function (data) {
                if (data) {
                    var data2 = _this.apiService.prendeSoloDatiValidi(data);
                    // console.log('Controllo immagine se esiste. Ritorno: ', data2);
                    if (data2.indexOf('ERROR:') === -1) {
                        _this.datiJsonRitornati.emit(JSON.parse(data2));
                        _this.mascheraRinomina = false;
                    }
                    else {
                        _this.utility.visualizzaMessaggio(_this, 'Rinomina album: ' + data2, true);
                    }
                }
            }, function (error) {
                if (error instanceof Error) {
                    _this.utility.visualizzaMessaggio(_this, 'Rinomina album: ' + error.message, true);
                }
            });
        }
    };
    AlbumComponent.prototype.scaricaImmagineAlbum = function () {
        var _this = this;
        this.scaricamentoImmagine = true;
        this.apiService.ScaricaImmagineAlbum({
            Artista: this.artista,
            Album: this.nomeAlbum,
            Anno: this.album.anno
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log('Controllo immagine se esiste. Ritorno: ', data2);
                if (data2.indexOf('ERROR:') === -1) {
                    var d = data2.split('§');
                    var imm_1 = new Array();
                    d.forEach(function (element) {
                        if (element) {
                            var dd = element.split(';');
                            var path = _this.pathImmagini + 'Appoggio/ImmaginiAlbum/' + dd[0];
                            imm_1.push({ Path: path, Nome: dd[0], Dimensioni: dd[1] });
                        }
                    });
                    _this.immAlbum = imm_1;
                    // console.log(this.immAlbum);
                    _this.mascheraImmAlbum = true;
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Scarica immagine album: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Scarica immagine album: ' + error.message, true);
            }
        });
    };
    AlbumComponent.prototype.impostaImmagineAlbum = function (imm) {
        var _this = this;
        console.log(imm);
        this.apiService.ImpostaImmagineAlbum({
            Artista: this.artista,
            Album: this.nomeAlbum,
            Anno: this.album.anno,
            NomeImmagine: imm.Nome
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log('Controllo immagine se esiste. Ritorno: ', data2);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.mascheraImmAlbum = false;
                    _this.scaricamentoImmagine = false;
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Scarica immagine album: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Scarica immagine album: ' + error.message, true);
            }
        });
    };
    AlbumComponent.ctorParameters = function () { return [
        { type: _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__["UtilityComponent"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlbumComponent.prototype, "datiAlbum", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlbumComponent.prototype, "urlImmagine", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlbumComponent.prototype, "idUtenza", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlbumComponent.prototype, "Amministratore", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AlbumComponent.prototype, "datiJsonRitornati", void 0);
    AlbumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gestionealbum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestionealbum/gestionealbum.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_2__["fade"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gestionealbum.component.css */ "./src/app/gestionealbum/gestionealbum.component.css")).default]
        })
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/gestioneimmagini/gestioneimmagini.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/gestioneimmagini/gestioneimmagini.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.bottoncione {\r\n    margin: 10px;\r\n    width: 130px; \r\n    height: 130px; \r\n    border: 1px solid #999; \r\n    background-color: #ccc; \r\n    border-radius: 4px;\r\n    float: left;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.35);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbmVpbW1hZ2luaS9nZXN0aW9uZWltbWFnaW5pLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBR2YsNENBQTRDO0VBQzlDIiwiZmlsZSI6InNyYy9hcHAvZ2VzdGlvbmVpbW1hZ2luaS9nZXN0aW9uZWltbWFnaW5pLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJvdHRvbmNpb25lIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiAxMzBweDsgXHJcbiAgICBoZWlnaHQ6IDEzMHB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/gestioneimmagini/gestioneimmagini.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gestioneimmagini/gestioneimmagini.component.ts ***!
  \****************************************************************/
/*! exports provided: ImmaginiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmaginiComponent", function() { return ImmaginiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../varie/utility.component */ "./src/app/varie/utility.component.ts");





var ImmaginiComponent = /** @class */ (function () {
    function ImmaginiComponent(utility, apiService) {
        this.utility = utility;
        this.apiService = apiService;
        this.visualizzaImmagine = false;
    }
    ImmaginiComponent.prototype.ngOnInit = function () {
    };
    ImmaginiComponent.prototype.ngAfterViewInit = function () {
    };
    ImmaginiComponent.prototype.ngOnChanges = function (e) {
        var _this = this;
        if (e.immagini) {
            this.immaginiArtista = new Array();
            if (e.immagini.currentValue) {
                e.immagini.currentValue.forEach(function (element) {
                    if (element.Immagine.toUpperCase().indexOf('COVER') === -1) {
                        var path = '';
                        if (element.Cartella.toUpperCase().indexOf('GIF') === -1) {
                            path = _this.apiService.ritornaUrlImmagine() + 'Immagini/' + element.Artista + '/' +
                                element.Cartella + '/' + element.Immagine;
                        }
                        else {
                            path = _this.apiService.ritornaUrlImmagine() + 'Gifs/' + element.Artista +
                                '/' + element.Immagine;
                        }
                        _this.immaginiArtista.push({ Immagine: path, Nome: element.Immagine });
                    }
                });
                this.immaginiArtista.sort(function (a, b) { return a.Nome - b.Nome; });
                // console.log(this.immaginiArtista);
            }
        }
    };
    ImmaginiComponent.prototype.premutaImmagine = function (i, e, n) {
        // console.log(n);
        this.visualizzaImmagine = true;
        this.immagineVisualizzata = n;
        this.prendeImmagine();
    };
    ImmaginiComponent.prototype.prendeImmagine = function () {
        var i = this.immaginiArtista[this.immagineVisualizzata];
        this.immagine = i.Immagine;
        this.testoImmagine = i.Nome + ' Imm. ' + (this.immagineVisualizzata + 1) + '/' + this.immaginiArtista.length;
    };
    ImmaginiComponent.prototype.indietroImmagine = function () {
        this.immagineVisualizzata--;
        if (this.immagineVisualizzata < 0) {
            this.immagineVisualizzata = this.immaginiArtista.length - 1;
        }
        this.prendeImmagine();
    };
    ImmaginiComponent.prototype.avantiImmagine = function () {
        this.immagineVisualizzata++;
        if (this.immagineVisualizzata > this.immaginiArtista.length - 1) {
            this.immagineVisualizzata = 0;
        }
        this.prendeImmagine();
    };
    ImmaginiComponent.prototype.eliminaImmagine = function () {
        var _this = this;
        if (this.immagine === '') {
            alert('Nessuna immagine presente');
            return;
        }
        var imm = this.immagine;
        imm = imm.replace(this.urlWS, '');
        imm = imm.replace('Brani/', '');
        imm = imm.replace('Immagini/', '');
        console.log(imm);
        this.apiService.eliminaImm(imm).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    _this.utility.visualizzaMessaggio(_this, 'Immagine eliminata', false);
                    // this.visualizzaImmagine = false;
                    var i_1 = new Array();
                    _this.immaginiArtista.forEach(function (element) {
                        if (element.Immagine !== _this.immagine) {
                            i_1.push(element);
                        }
                    });
                    _this.immaginiArtista = JSON.parse(JSON.stringify(i_1));
                    _this.prendeImmagine();
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Elimina immagine: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Elimina immagine: ' + error.message, true);
            }
        });
    };
    ImmaginiComponent.prototype.scaricaImmagine = function () {
        var _this = this;
        var imm = this.immagine;
        imm = imm.replace(this.urlWS, '');
        imm = imm.replace('Brani/', '');
        var imm2 = imm.split('/');
        var nomeFile = imm2[imm2.length - 1];
        console.log(imm);
        this.apiService.controllaSeGiaScaricata(imm).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", _this.immagine, true);
                    xhr.responseType = "blob";
                    xhr.onload = function () {
                        var urlCreator = window.URL || window.webkitURL;
                        var imageUrl = urlCreator.createObjectURL(this.response);
                        var tag = document.createElement('a');
                        tag.href = imageUrl;
                        tag.download = 'looWebPlayer_' + nomeFile;
                        document.body.appendChild(tag);
                        tag.click();
                        document.body.removeChild(tag);
                    };
                    xhr.send();
                }
                else {
                    // alert(data2);
                    _this.utility.visualizzaMessaggio(_this, 'Controllo immagine: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Controllo immagine: ' + error.message, true);
            }
        });
    };
    ImmaginiComponent.prototype.getUrl = function () {
        // console.log('url(\'' + this.immagineSfondo.replace('\'', '%27').replace(' ', '%20') + '\')');
        return 'url(\'' + this.immagine.replace('\'', '%27').replace(' ', '%20') + '\')';
    };
    ImmaginiComponent.ctorParameters = function () { return [
        { type: _varie_utility_component__WEBPACK_IMPORTED_MODULE_4__["UtilityComponent"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImmaginiComponent.prototype, "immagini", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImmaginiComponent.prototype, "urlWS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImmaginiComponent.prototype, "Amministratore", void 0);
    ImmaginiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-immagini',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gestioneimmagini.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestioneimmagini/gestioneimmagini.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_2__["fade"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gestioneimmagini.component.css */ "./src/app/gestioneimmagini/gestioneimmagini.component.css")).default]
        })
    ], ImmaginiComponent);
    return ImmaginiComponent;
}());



/***/ }),

/***/ "./src/app/services/api2.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/api2.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(httpclient) {
        this.httpclient = httpclient;
        // private urlBase = this.variabiliGlobali.urlWS;
        // private urlRoot = environment.urlRoot;
        this.urlWS = '';
        this.urlMP3 = '';
        this.urlImmagine = '';
        this.lastChiamata = '';
        this.errori = 0;
        this.eConnesso = true;
    }
    ApiService.prototype.impostaThis = function (t, u) {
        this.formPrincipale = t;
        this.utility = u;
    };
    ApiService.prototype.impostaConnesso = function (ec) {
        this.eConnesso = ec;
        // console.log('API Connesse', ec);
    };
    ApiService.prototype.controllaRitorno = function (r) {
        var rr = new Response();
        // this.apiService.controllaRitorno(response)  
        // console.log('Ritorno: ', r, typeof(r), JSON.stringify(r));
        if (JSON.stringify(r) === '{}') {
            rr['_body'] = '<?xml version="1.0" encoding="utf-8"?><string xmlns="http://wsLWP2.org/">ERROR: Nessuna connessione attiva</string></xml>';
        }
        else {
            if (r) {
                rr = r;
            }
            else {
                rr['_body'] = '<?xml version="1.0" encoding="utf-8"?><string xmlns="http://wsLWP2.org/">ERROR: Nessun ritorno</string></xml>';
            }
        }
        return rr.text();
    };
    ApiService.prototype.ritornaUrlWS = function () {
        return this.urlWS;
    };
    ApiService.prototype.ritornaUrlMP3 = function () {
        return this.urlMP3;
    };
    ApiService.prototype.impostaUrlWS = function (e1) {
        this.urlWS = e1;
    };
    ApiService.prototype.impostaUrlMP3 = function (e1) {
        this.urlMP3 = e1;
    };
    ApiService.prototype.ritornaUrlImmagine = function () {
        return this.urlImmagine;
    };
    ApiService.prototype.impostaUrlImmagine = function (e1) {
        this.urlImmagine = e1;
    };
    ApiService.prototype.cambiaChar = function (ee, c1, c2) {
        while (ee.indexOf(c1) > -1) {
            ee = ee.replace(c1, c2);
        }
        return ee;
    };
    ApiService.prototype.sistemaTesto = function (e) {
        if (e === undefined || e === 'undefined' || e === '' || e === null) {
            return '';
        }
        var ee = e.toString();
        ee = this.cambiaChar(ee, '.', '%2E');
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
    };
    ApiService.prototype.prendeSoloDatiValidi = function (s) {
        // console.log(JSON.stringify(s));
        if (JSON.stringify(s) === '{}') {
            return 'ERROR: Nessuna connessione attiva';
        }
        var ss = s;
        var a1 = ss.indexOf('<string');
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
    };
    ApiService.prototype.resettaErrori = function () {
        this.errori = 0;
    };
    ApiService.prototype.catchAuthError = function () {
        var _this = this;
        // console.log('Errore: ', self);
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            if (res.status === 0) {
                _this.errori++;
                if (_this.errori <= 5) {
                    setTimeout(function () {
                        _this.utility.scriveDebug(_this.formPrincipale, 'ERRORE HTTP: 0 MALEDETTO. Riprovo a ricaricare con la funzione ' + _this.lastChiamata);
                        switch (_this.lastChiamata) {
                            case '2':
                                _this.utility.scriveDebug(_this.formPrincipale, 'ERRORE HTTP: 0 MALEDETTO. Eseguo funzione 2');
                                _this.formChiamante.caricaBrano(_this.formPrincipale);
                                _this.utility.scriveDebug(_this.formPrincipale, 'ERRORE HTTP: 0 MALEDETTO. Eseguita funzione 2');
                                break;
                        }
                    }, 1000);
                }
                else {
                    _this.utility.scriveDebug(_this.formPrincipale, 'ERRORE HTTP: 0 MALEDETTO. Tentativi esauriti');
                    _this.formPrincipale.caricatoProssimoBrano = false;
                }
            }
            else {
                _this.utility.scriveDebug(_this.formPrincipale, 'ERRORE HTTP: ' + JSON.stringify(res));
            }
            // console.log('ERRORE Http: ', res);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
        };
    };
    ApiService.prototype.ritornaProssimoBrano = function (idUtente, params, formChiamante) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaProssimoBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaProssimoBrano?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Random=' + this.sistemaTesto(params.Random) + '&' +
            'vecchioBrano=' + this.sistemaTesto(params.NumeroBrano);
        this.formChiamante = formChiamante;
        this.lastChiamata = '1';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaProssimoBrano. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ritornaBrano = function (idUtente, params, formChiamante) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaBranoDaID?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Brano=' + this.sistemaTesto(params.NumeroBrano) +
            '&ForzaAggiornamentoTesto=N';
        this.formChiamante = formChiamante;
        this.lastChiamata = '2';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaBrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.scaricaVideoPregressi = function () {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaVideoPregressi. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaVideoPregressi';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaVideoPregressi. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ScaricaVideoYouTube = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaVideoYouTube. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaVideoYouTube?' +
            'prefisso=' + this.sistemaTesto(params.prefisso) + '&' +
            'link=' + this.sistemaTesto(params.link) + '&' +
            'estensione=' + this.sistemaTesto(params.estensione);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScricaVideoYouTube. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ritornaYouTube = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaYouTube. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaYouTube?' +
            'nomeArtista=' + this.sistemaTesto(params.nomeArtista) + '&' +
            'nomeBrano=' + this.sistemaTesto(params.nomeBrano) + '&' +
            'refresh=' + this.sistemaTesto(params.refresh);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaYouTube. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.SalvaVideoDefault = function (idBrano, idVideo) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. SalvaVideoDefault. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/SalvaVideoDefault?' +
            'idBrano=' + this.sistemaTesto(idBrano) + '&' +
            'idVideo=' + this.sistemaTesto(idVideo);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. SalvaVideoDefault. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.scriveVideoDaSalvare = function (video) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveVideoDaSalvare. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScriveVideoDaSalvare?' +
            'Video=' + this.sistemaTesto(video);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveVideoDaSalvare. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.salvaVideo = function (prefisso, link, estensione) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. SalvaVideo. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaVideoYouTube?' +
            'prefisso=' + this.sistemaTesto(prefisso) + '&' +
            'link=' + this.sistemaTesto(link) + '&' +
            'estensione=' + this.sistemaTesto(estensione);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. SalvaVideo. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.EliminaBrutte = function (idUtente) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaBrutte. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaBrutte?idUtente=' + idUtente;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaBrutte. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.RitornaUguali = function () {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaUguali. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaUguali';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaUguali. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ScaricaNuovaImmagine = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. Scarica nuova immagine. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaNuovaImmagine?' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Canzone=' + this.sistemaTesto(params.Canzone);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaNuovaImmagine. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.RitornaImmaginiArtista = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaImmaginiArtista. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaImmaginiArtista?' +
            'Artista=' + this.sistemaTesto(params);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaImmaginiArtista. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ScaricaTesto = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaTesto. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaTesto?' +
            'idCanzone=' + this.sistemaTesto(params.idCanzone) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Canzone=' + this.sistemaTesto(params.Canzone);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaTesto. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ScriveTesto = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveTesto. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScriveTestoBrano?' +
            'idCanzone=' + this.sistemaTesto(params.idCanzone) + '&' +
            'Testo=' + this.sistemaTesto(params.Testo);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveTesto. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ritornaJSONBrani = function (idUtente) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaJSONBrani. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaJSON?idUtente=' + idUtente;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaJSONBrani. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.creaUtenza = function (utenza) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. CreaUtenza. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/CreaRitornaUtenza?Utenza=' + utenza;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. CreaUtenza. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.refreshDB = function (idUtente) {
        var url = this.urlWS + 'wsLWP.asmx/RefreshCanzoni?idUtente=' + idUtente;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RefreshDB. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.refreshDBHard = function (idUtente) {
        var url = this.urlWS + 'wsLWP.asmx/RefreshCanzoniHard?idUtente=' + idUtente;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RefreshDBHard. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.scriveVolteAscoltata = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveVolteAscoltata. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/SettaAscoltataDaID?' +
            'idUtente=' + idUtente + '&' +
            'NumeroBrano=' + params;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScriveVolteAscoltata. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ritornaVolteAscoltata = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaVolteAscoltata. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaAscoltataDaID?' +
            'idUtente=' + idUtente + '&' +
            'NumeroBrano=' + params;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaVolteAscoltata. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.impostaStelle = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ImpostaStelle. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/SettaStelle?' +
            'idUtente=' + idUtente + '&' +
            'idCanzone=' + params.idCanzone + '&' +
            'Stelle=' + params.Stelle + '&';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ImpostaStelle. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.downloadPagina = function (url) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. DownloadPagina. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. DownloadPagina. URL: ' + url);
        return this.httpclient.downloadFile(url);
    };
    ApiService.prototype.eliminaImm = function (imm) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaImm. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaImmagine?' +
            'Immagine=' + this.sistemaTesto(imm);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaImm. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.eliminaVideo = function (vid) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaVideo. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaVideoFisico?' +
            'Video=' + this.sistemaTesto(vid);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaVideo. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.esisteImm = function (imm) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EsisteImm. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EsisteImmagine?' +
            'Immagine=' + this.sistemaTesto(imm);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EsisteImm. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.controllaSeGiaScaricata = function (imm) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ControllaSeGiaScaricata. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EsisteImmagineSalvata?' +
            'Immagine=' + this.sistemaTesto(imm);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ControllaSeGiaScaricata. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.RinominaBrano = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RinominaBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RinominaBrano?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Brano=' + this.sistemaTesto(params.Brano) + '&' +
            'NuovaTraccia=' + this.sistemaTesto(params.NuovaTraccia) + '&' +
            'NuovoNomeBrano=' + this.sistemaTesto(params.NuovoNomeBrano);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RinominaBrano. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.RitornaUgualiDettaglio = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaUgualiDettaglio. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaUgualiDettaglio?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Brano=' + this.sistemaTesto(params.Brano);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaUgualiDettaglio. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.RinominaAlbum = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RinominaAlbum. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RinominaAlbum?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'NuovoAnno=' + this.sistemaTesto(params.NuovoAnno) + '&' +
            'NuovoNomeAlbum=' + this.sistemaTesto(params.NuovoNomeAlbum);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RinominaAlbum. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.EliminaBrano = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaBrano?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Brano=' + this.sistemaTesto(params.Brano);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaBrano. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ScaricaImmagineAlbum = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaImmagineAlbum. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ScaricaImmagineAlbum?' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Anno=' + this.sistemaTesto(params.Anno);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ScaricaImmagineAlbum. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.ImpostaImmagineAlbum = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ImpostaImmagineAlbum. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/ImpostaImmagineAlbum?' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'Album=' + this.sistemaTesto(params.Album) + '&' +
            'Anno=' + this.sistemaTesto(params.Anno) + '&' +
            'NomeImmagine=' + this.sistemaTesto(params.NomeImmagine);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ImpostaImmagineAlbum. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.tornaDettagliArtista = function (artista, forza) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. TornaDettaglioArtista. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/DettagliArtista?' +
            'Artista=' + this.sistemaTesto(artista) + '&' +
            'Forza=' + forza;
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. TornaDettaglioArtista. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    ApiService.prototype.InviaMail = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. InviaMail. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/InviaMail?' +
            'Destinatario=' + this.sistemaTesto(params.Destinatario) + '&' +
            'Oggetto=' + this.sistemaTesto(params.Oggetto) + '&' +
            'Corpo=' + this.sistemaTesto(params.Corpo);
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. InviaMail. URL: ' + url);
        var ritorno = this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
        // console.log(ritorno);
        return ritorno;
    };
    // TAGS
    ApiService.prototype.ritornaTuttiITags = function () {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaTuttiITags. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaTuttiITags';
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ritornaTuttiITags. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.ritornaTagsBrano = function (params, formChiamante) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaTagsBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaTagDaBrano?' +
            'idBrano=' + this.sistemaTesto(params.NumeroBrano);
        this.formChiamante = formChiamante;
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. ritornaTagsBrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.AggiungeTagABrano = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. AggiungeTagABrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/AggiungeTagABrano?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'idBrano=' + this.sistemaTesto(params.NumeroBrano) + '&' +
            'idTag=' + this.sistemaTesto(params.idTag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. AggiungeTagABrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.EliminaTagDaBrano = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagDaBrano. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaTagDaBrano?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'idBrano=' + this.sistemaTesto(params.NumeroBrano) + '&' +
            'idTag=' + this.sistemaTesto(params.idTag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagDaBrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.SalvaTag = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. SalvaTag. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/SalvaTag?' +
            'Tag=' + this.sistemaTesto(params.Tag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagDaBrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.EliminaTag = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTag. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaTag?' +
            'idTag=' + this.sistemaTesto(params.idTag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagDaBrano. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.RitornaTuttiTagArtista = function (params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaTuttiITagArtista. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/RitornaTuttiTagArtista?' +
            'Artista=' + this.sistemaTesto(params.Artista);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. RitornaTuttiTagArtista. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.AggiungeTagAdArtista = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. AggiungeTagAdArtista. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/AggiungeTagAdArtista?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'idTag=' + this.sistemaTesto(params.idTag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. AggiungeTagAdArtista. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.EliminaTagAdArtista = function (idUtente, params) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagAdArtista. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaTagAdArtista?' +
            'idUtente=' + this.sistemaTesto(idUtente) + '&' +
            'Artista=' + this.sistemaTesto(params.Artista) + '&' +
            'idTag=' + this.sistemaTesto(params.idTag);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaTagAdArtista. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.checkRete = function (t, idUtente) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. CheckRete. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/CheckRete?' +
            'idUtente=' + this.sistemaTesto(idUtente);
        this.lastChiamata = '99';
        // this.utility.scriveDebug(this.formPrincipale, 'Apiservice. checkRete. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.prototype.eliminaJSON = function (t, idUtente) {
        if (this.eConnesso === false) {
            this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaJSON. Mancanza di connessione');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        var url = this.urlWS + 'wsLWP.asmx/EliminaJSON?' +
            'idUtente=' + this.sistemaTesto(idUtente);
        this.lastChiamata = '99';
        this.utility.scriveDebug(this.formPrincipale, 'Apiservice. EliminaJSON. URL: ' + url);
        return this.httpclient.get(this.formPrincipale, url).catch(this.catchAuthError());
    };
    ApiService.ctorParameters = function () { return [
        { type: _httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/httpclient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/httpclient.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/esm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../varie/utility.component */ "./src/app/varie/utility.component.ts");








var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
    }
    HttpService.prototype.setHeader = function (header, value) {
        this.headers.append(header, value);
    };
    HttpService.prototype.catchAuthError = function (self) {
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res);
        };
    };
    HttpService.prototype.get = function (t, url, params) {
        if (t.deviceGirante === 'Android') {
            var postHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"](this.headers);
            postHeaders.append('Content-Type', 'application/text');
            postHeaders.append("Cache-Control", "no-cache");
            postHeaders.append("Access-Control-Allow-Origin", "*");
            postHeaders.append("Access-Control-Allow-Credentials", "true");
            postHeaders.append("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
            postHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
            // console.log('HEADERS', this.headers);
            /* return this.http.get(url, {
              search: params,
              headers: postHeaders
            }).catch(this.catchAuthError(this)); */
            return this.http.get(url, {
                search: params,
                headers: postHeaders
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_varie_utility_component__WEBPACK_IMPORTED_MODULE_7__["UtilityComponent"].TimeOutConnessione), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
                // do something on a timeout
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
                // return e;
            }));
        }
        else {
            /* return this.http.get(url, {
              search: params,
              headers: this.headers
            }).catch(this.catchAuthError(this)); */
            return this.http.get(url, {
                search: params,
                headers: this.headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_varie_utility_component__WEBPACK_IMPORTED_MODULE_7__["UtilityComponent"].TimeOutConnessione), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
                // do something on a timeout
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
                // return e;
            }));
        }
    };
    HttpService.prototype.post = function (url, data) {
        var postHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"](this.headers);
        postHeaders.append('Content-Type', 'application/text');
        postHeaders.append("Cache-Control", "no-cache");
        postHeaders.append("Access-Control-Allow-Origin", "*");
        postHeaders.append("Access-Control-Allow-Credentials", "true");
        postHeaders.append("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
        postHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
        var body = JSON.stringify(data);
        return this.http.post(url, body, { headers: postHeaders })
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.post2 = function (url, data, postHeaders) {
        var body = JSON.stringify(data);
        return this.http.post(url, body, { headers: postHeaders })
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.put = function (url, data) {
        var putHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"](this.headers);
        putHeaders.append('Content-Type', 'application/json');
        var body = JSON.stringify(data);
        return this.http.put(url, body, { headers: putHeaders })
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.delete = function (url, data) {
        var postHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"](this.headers);
        postHeaders.append('Content-Type', 'application/json');
        var body = JSON.stringify(data);
        return this.http.delete(url, { headers: postHeaders, body: body })
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.downloadFile = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url, this.headers).toPromise()];
                    case 1:
                        r = _a.sent();
                        // console.log(r);
                        return [2 /*return*/, r];
                }
            });
        });
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/speech.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/speech.service.ts ***!
  \********************************************/
/*! exports provided: VoiceRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecognitionService", function() { return VoiceRecognitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var VoiceRecognitionService = /** @class */ (function () {
    function VoiceRecognitionService() {
        this.recognition = new webkitSpeechRecognition();
        this.isStoppedSpeechRecog = false;
        this.text = '';
    }
    VoiceRecognitionService.prototype.init = function (t) {
        var _this = this;
        this.formPrincipale = t;
        this.recognition.interimResults = true;
        this.recognition.lang = 'it';
        console.log("Speech recognition inited");
        this.recognition.addEventListener('result', function (e) {
            var transcript = Array.from(e.results)
                .map(function (result) { return result[0]; })
                .map(function (result) { return result.transcript; })
                .join('');
            _this.tempWords = transcript;
            console.log(transcript);
        });
    };
    VoiceRecognitionService.prototype.start = function () {
        var _this = this;
        this.isStoppedSpeechRecog = false;
        this.recognition.start();
        console.log("Speech recognition started");
        this.recognition.addEventListener('end', function (condition) {
            if (_this.isStoppedSpeechRecog) {
                _this.recognition.stop();
                console.log("End speech recognition");
            }
            else {
                _this.wordConcat();
                _this.recognition.start();
            }
        });
    };
    VoiceRecognitionService.prototype.stop = function () {
        this.isStoppedSpeechRecog = true;
        this.wordConcat();
        this.recognition.stop();
        console.log("End speech recognition");
    };
    VoiceRecognitionService.prototype.wordConcat = function () {
        var _this = this;
        this.text = this.tempWords;
        this.formPrincipale.comandoVocale = this.tempWords;
        setTimeout(function () {
            _this.formPrincipale.comandoVocale = '';
        }, 3000);
        this.formPrincipale.utility.parsaTesto(this.formPrincipale, this.tempWords);
        setTimeout(function () {
            _this.tempWords = '';
        }, 100);
    };
    VoiceRecognitionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VoiceRecognitionService);
    return VoiceRecognitionService;
}());



/***/ }),

/***/ "./src/app/treeview/treeview.component.css":
/*!*************************************************!*\
  !*** ./src/app/treeview/treeview.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n\r\n/* width */\r\n\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n\r\n\r\n/* Track */\r\n\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n\r\n\r\n/* Handle */\r\n\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n\r\n\r\n/* Handle on hover */\r\n\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZXZpZXcvdHJlZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7OztBQUdBLFVBQVU7OztBQUNWO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7O0FBRUEsVUFBVTs7O0FBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBLFdBQVc7OztBQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQSxvQkFBb0I7OztBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4OyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7IFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/treeview/treeview.component.ts":
/*!************************************************!*\
  !*** ./src/app/treeview/treeview.component.ts ***!
  \************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _varie_utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../varie/utility.component */ "./src/app/varie/utility.component.ts");






var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(utility, apiService, sanitizer) {
        this.utility = utility;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.mostraCanzoni = false;
        this.branoClickato = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.numeroBrani = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ritornoBrani = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.branoInLocale = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.braniCambiati = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibile = undefined;
        this.numeroBrano = -1;
        this.ultimoArtista = -1;
        this.ultimoAlbum = -1;
        this.quantiBrani = -1;
        this.mostraBrani = false;
        this.suSSD = false;
        this.fMostraTag = false;
        this.fMostraTagArtista = false;
        this.mostraAggiungeTag = false;
        this.artistaSelezionato = '';
        this.nuovoTag = '';
        this.caricamentoInCorso = false;
        this.posX = -1;
        this.posY = -100;
    }
    TreeViewComponent.prototype.ngOnInit = function () {
    };
    TreeViewComponent.prototype.ngAfterViewInit = function () {
    };
    TreeViewComponent.prototype.ngOnChanges = function (e) {
        if (e.braniFiltrati) {
            this.brani = e.braniFiltrati.currentValue;
            // console.log(this.brani);
            this.quantiBrani = this.contaBrani();
            this.apreTree();
        }
        if (e.numeroBranoSelezionato) {
            if (e.numeroBranoSelezionato.currentValue) {
                this.numeroBrano = e.numeroBranoSelezionato.currentValue;
                this.apreTree();
            }
        }
        if (e.mostraCanzoni) {
            this.mostraBrani = e.mostraCanzoni.currentValue;
        }
    };
    TreeViewComponent.prototype.caricaBrano = function () {
        var _this = this;
        // alert(this.suSSD + ':' + this.numeroBrano);
        this.branoInLocale.emit(this.suSSD);
        setTimeout(function () {
            _this.branoClickato.emit(_this.numeroBrano);
        }, 100);
    };
    TreeViewComponent.prototype.contaBrani = function () {
        var q = 0;
        if (this.brani) {
            var art_1 = 0;
            var alb_1 = 0;
            this.brani.forEach(function (element) {
                art_1++;
                element.children.forEach(function (element2) {
                    alb_1++;
                    element2.children.forEach(function (element3) {
                        q++;
                    });
                });
            });
            this.visibile = this.utility.creaMatrice(art_1, alb_1, false);
            // console.log(t.visibile[0][1]);
        }
        this.numeroBrani.emit(q);
        return q;
    };
    TreeViewComponent.prototype.apreTree = function () {
        var _this = this;
        if (this.brani && this.visibile) {
            if (this.visibile && this.ultimoArtista > -1 && this.visibile[this.ultimoArtista]) {
                this.visibile[this.ultimoArtista][0] = false;
                this.visibile[this.ultimoArtista][this.ultimoAlbum] = false;
                this.ultimoArtista = -1;
            }
            // this.visibile = new Array();
            var art_2 = 0;
            var alb_2 = 0;
            var f_1 = false;
            this.brani.forEach(function (element) {
                if (!f_1) {
                    art_2++;
                    alb_2 = 0;
                    element.children.forEach(function (element2) {
                        if (!f_1) {
                            alb_2++;
                            element2.children.forEach(function (element3) {
                                if (!f_1) {
                                    if (element3.id === _this.numeroBranoSelezionato) {
                                        _this.visibile[art_2 - 1][0] = true;
                                        _this.visibile[art_2 - 1][alb_2] = true;
                                        f_1 = true;
                                        _this.ultimoArtista = art_2 - 1;
                                        _this.ultimoAlbum = alb_2 - 1;
                                        // console.log('Aperto artista ' + art + ', album ' + (alb + 1) + '. TOP: ' + ((art -1) * 25));
                                        var ele = _this.utility.effettuaReplace(element.text, '\'', '_');
                                        _this.spostaDiv(_this.utility.effettuaReplace(ele, ' ', '_'));
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    TreeViewComponent.prototype.spostaDiv = function (pos) {
        var _this = this;
        if (this.playlistVisibile) {
            setTimeout(function () {
                var section = 'section_' + pos;
                // console.log('Sposto a sezione', section);
                if (_this.divScroll) {
                    _this.divScroll.nativeElement.scroll(0, 0);
                    var elem = document.querySelector('#' + section);
                    // console.log('Sezione', elem);
                    if (elem && elem !== null) {
                        var offsetTop = elem.getBoundingClientRect().top - 160;
                        // console.log('Scroll to', section, offsetTop);
                        _this.divScroll.nativeElement.scroll(0, offsetTop);
                    }
                }
            }, 100);
        }
    };
    TreeViewComponent.prototype.prendeNomeSistemato = function (n) {
        var nn = this.utility.effettuaReplace(n, '\'', '_');
        return 'section_' + this.utility.effettuaReplace(nn, ' ', '_');
    };
    TreeViewComponent.prototype.clickatoAlbum = function (art, alb) {
        // console.log(art, alb);
        var artista = this.brani[art].text;
        var album = this.brani[art].children[alb].text;
        var brani = this.brani[art].children[alb].children;
        var ritorno = {
            idArtista: art,
            artista: artista,
            idAlbum: alb,
            album: album,
            anno: this.brani[art].children[alb].Anno,
            brani: brani
        };
        this.ritornoBrani.emit(ritorno);
    };
    TreeViewComponent.prototype.mostraTag = function (brano) {
        var _this = this;
        this.tagsBrano = new Array();
        // console.log(brano.tags);
        var t = brano.tags.split('§');
        t.forEach(function (element) {
            if (element && element !== '') {
                var tt = element.split(';');
                var ttt = {
                    Progressivo: +tt[0],
                    Tag: tt[2]
                };
                _this.tagsBrano.push(ttt);
            }
        });
        this.fMostraTag = true;
    };
    TreeViewComponent.prototype.impostaTagArtista = function (artista) {
        var _this = this;
        // console.log(artista);
        var params = {
            Artista: artista
        };
        this.tagsArtista = new Array();
        this.caricamentoInCorso = true;
        this.apiService.RitornaTuttiTagArtista(params)
            .map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            _this.caricamentoInCorso = false;
            var data2 = _this.apiService.prendeSoloDatiValidi(data);
            _this.artistaSelezionato = artista;
            if (data2.indexOf('ERROR:') === -1) {
                if (data2 && data2 !== '' && data2 !== '-') {
                    var dd = data2.split('§');
                    dd.forEach(function (element) {
                        if (element && element !== '') {
                            var d2 = element.split(';');
                            if (d2[0] !== '' && d2[1] !== '') {
                                var tt = {
                                    idTag: +d2[0],
                                    Tag: d2[1]
                                };
                                _this.tagsArtista.push(tt);
                            }
                            _this.fMostraTagArtista = true;
                        }
                    });
                }
            }
            else {
                _this.fMostraTagArtista = true;
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Lettura Tags: ' + error.message, true);
            }
        });
    };
    TreeViewComponent.prototype.impostaTagArtistaAlbum = function (artista, album) {
        // Da implementare
    };
    TreeViewComponent.prototype.eliminaTagArtista = function (idTag) {
        var _this = this;
        console.log(idTag);
        this.caricamentoInCorso = true;
        this.apiService.EliminaTagAdArtista(this.idUtenza, {
            Artista: this.artistaSelezionato,
            idTag: idTag
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                _this.caricamentoInCorso = false;
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var t_1 = new Array();
                    _this.tagsArtista.forEach(function (element) {
                        if (+element.idTag !== +idTag) {
                            t_1.push(element);
                        }
                    });
                    _this.tagsArtista = t_1;
                    _this.aggiornaTag();
                    _this.sistemaTagAListaBrani();
                    _this.utility.visualizzaMessaggio(_this, data2, true);
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + error.message, true);
            }
        });
    };
    TreeViewComponent.prototype.aggiungeTagArtista = function () {
        this.mostraAggiungeTag = true;
        this.aggiornaTag();
    };
    TreeViewComponent.prototype.aggiornaTag = function () {
        var _this = this;
        this.listaTagsVisualizzati = new Array();
        this.listaTags.forEach(function (element) {
            var ok = 'true';
            if (_this.tagsArtista) {
                _this.tagsArtista.forEach(function (element2) {
                    if (ok === 'true' && +element.idTag === +element2.idTag) {
                        ok = 'false';
                    }
                });
            }
            if (ok === 'true') {
                _this.listaTagsVisualizzati.push(element);
            }
        });
        // console.log(this.listaTagsVisualizzati);
    };
    TreeViewComponent.prototype.selezionaTag = function (id, testo) {
        var _this = this;
        this.caricamentoInCorso = true;
        this.apiService.AggiungeTagAdArtista(this.idUtenza, {
            Artista: this.artistaSelezionato,
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                _this.caricamentoInCorso = false;
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    if (testo !== '') {
                        var progressivo_1 = 0;
                        _this.tagsArtista.forEach(function (element) {
                            if (element.Progressivo > progressivo_1) {
                                progressivo_1 = element.Progressivo;
                            }
                        });
                        progressivo_1++;
                        var tt = {
                            Progressivo: progressivo_1,
                            idTag: +id,
                            Tag: testo
                        };
                        _this.tagsArtista.push(tt);
                    }
                    _this.aggiornaTag();
                    _this.sistemaTagAListaBrani();
                    _this.utility.visualizzaMessaggio(_this, data2, true);
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a brano: ' + error.message, true);
            }
        });
    };
    TreeViewComponent.prototype.eliminaTagDaLista = function (id) {
        var _this = this;
        this.apiService.EliminaTag({
            idTag: id
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var l_1 = new Array();
                    _this.listaTagsVisualizzati.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l_1.push(element);
                        }
                    });
                    _this.listaTagsVisualizzati = l_1;
                    var l2_1 = new Array();
                    _this.listaTags.forEach(function (element) {
                        if (+element.idTag !== +id) {
                            l2_1.push(element);
                        }
                    });
                    _this.listaTags = l2_1;
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    TreeViewComponent.prototype.refreshTagArtista = function () {
        var id = '';
        this.tagsArtista.forEach(function (element) {
            id += element.idTag + ';';
        });
        if (id.length > 0) {
            id = id.substring(0, id.length - 1);
            this.selezionaTag(id, '');
        }
    };
    TreeViewComponent.prototype.aggiungeTagALista = function () {
        var _this = this;
        if (this.nuovoTag === '') {
            this.utility.visualizzaMessaggio(this, 'Inserire un tag', true);
            return;
        }
        this.apiService.SalvaTag({
            Tag: this.nuovoTag
        }).map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                if (data2.indexOf('ERROR:') === -1) {
                    var tt = {
                        idTag: +data2,
                        Tag: _this.nuovoTag
                    };
                    _this.listaTags.push(tt);
                    _this.listaTagsVisualizzati.push(tt);
                    _this.nuovoTag = '';
                }
                else {
                    _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + data2, true);
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(_this, 'Aggiunge tag a lista: ' + error.message, true);
            }
        });
    };
    TreeViewComponent.prototype.sistemaTagAListaBrani = function () {
        var _this = this;
        // console.log(this.braniFiltrati);
        // console.log(this.artista);
        // console.log(this.album);
        // console.log(this.titoloBrano);
        this.brani.forEach(function (element) {
            if (element.text === _this.artistaSelezionato) {
                // console.log('Trovato artista', element);
                var albums = element.children;
                albums.forEach(function (element2) {
                    var brani = element2.children;
                    brani.forEach(function (element3) {
                        var t = '';
                        var progressivo = 1;
                        _this.tagsArtista.forEach(function (element4) {
                            t += progressivo + ';' + element4.idTag + ';' + element4.Tag + '§';
                            progressivo++;
                        });
                        element3.tags = t;
                    });
                });
            }
        });
        this.braniCambiati.emit(this.brani);
    };
    TreeViewComponent.prototype.prendeTesto = function (b, artista, album) {
        var testo = '';
        testo += '<span style="margin-left: 30px; font-weight: bold;">Artista:</span> ' + artista + '<br />';
        testo += '<span style="margin-left: 30px; font-weight: bold;">Album:</span> ' + album + '<br />';
        testo += '<span style="margin-left: 30px; font-weight: bold;">Titolo:</span> ' + b.traccia + '-' + b.text + '<br />';
        if (this.deviceGirante === 'Android') {
            testo += '<img src="assets/immagini/hd4.png" width="25px" height="25px" />&nbsp;<span style="font-weight: bold;">Brano in locale</span>: ' + (b.locale === true ? 'Sì' : 'No') + '<br />';
        }
        testo += '<img src="assets/immagini/ascoltata.png" width="25px" height="25px" />&nbsp;<span style="font-weight: bold;">Ascoltato:</span> ' + b.ascoltata + '<br />';
        testo += '<img src="assets/immagini/preferito.png" width="25px" height="25px" />&nbsp;<span style="font-weight: bold;">Bellezza:</span> ' + b.stelle + '<br />';
        var t = b.tags.split('§');
        var tags = '';
        var q = 0;
        t.forEach(function (element) {
            if (element && element !== '') {
                var tt = element.split(';');
                tags += tt[2] + '; ';
                q++;
                if (q === 2) {
                    q = 0;
                    tags += '<br /><span style="margin-left: 30px;>&nbsp;</span>';
                }
            }
        });
        testo += '<img src="assets/immagini/icona_info.png" width="25px" height="25px" />&nbsp;<span style="font-weight: bold;">Tags:</span> ' + tags + '<br />';
        return this.sanitizer.bypassSecurityTrustHtml(testo);
    };
    TreeViewComponent.prototype.mostraInfos = function (b, artista, album) {
        this.testoPopup = this.prendeTesto(b, artista, album);
        this.fMostraTag = true;
    };
    TreeViewComponent.prototype.aprePopup = function (e, info) {
        if (this.deviceGirante === 'Android') {
            return;
        }
        // console.log(e, e.y, e.x);
        this.posY = e.y;
        this.posX = e.x;
        this.testoPopup = info;
    };
    TreeViewComponent.ctorParameters = function () { return [
        { type: _varie_utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divScroll", { static: false })
    ], TreeViewComponent.prototype, "divScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "braniFiltrati", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "numeroBranoSelezionato", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "playlistVisibile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "mostraCanzoni", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "listaTags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "idUtenza", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "Amministratore", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TreeViewComponent.prototype, "deviceGirante", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TreeViewComponent.prototype, "branoClickato", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TreeViewComponent.prototype, "numeroBrani", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TreeViewComponent.prototype, "ritornoBrani", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TreeViewComponent.prototype, "branoInLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TreeViewComponent.prototype, "braniCambiati", void 0);
    TreeViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treeview',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./treeview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/treeview/treeview.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_3__["fade"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./treeview.component.css */ "./src/app/treeview/treeview.component.css")).default]
        })
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "./src/app/uploadbrani/uploadbrani.component.css":
/*!*******************************************************!*\
  !*** ./src/app/uploadbrani/uploadbrani.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".finestra {\r\n    position: fixed;\r\n    left: 40%;\r\n    top: 40%;\r\n    padding: 5px;\r\n    border: 1px solid #999;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    /* transform: translateX(-50%);\r\n    transform: translateY(-50%); */\r\n    z-index: 2001;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkYnJhbmkvdXBsb2FkYnJhbmkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QjtrQ0FDOEI7SUFDOUIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZGJyYW5pL3VwbG9hZGJyYW5pLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmluZXN0cmEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7ICovXHJcbiAgICB6LWluZGV4OiAyMDAxO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/uploadbrani/uploadbrani.component.ts":
/*!******************************************************!*\
  !*** ./src/app/uploadbrani/uploadbrani.component.ts ***!
  \******************************************************/
/*! exports provided: UploadBraniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBraniComponent", function() { return UploadBraniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/esm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





var UploadBraniComponent = /** @class */ (function () {
    function UploadBraniComponent(datePipe, http) {
        this.datePipe = datePipe;
        this.http = http;
        this.refreshBrani = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chiusuraMaschera = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.attendiUpload = false;
        this.effettuaRefreshBrani = false;
        this.fileLogName = '';
        this.pathFileLog = '';
        this.visuaLog = false;
        this.contenutoLog = '';
    }
    UploadBraniComponent.prototype.ngOnInit = function () {
        this.fileCount = 0;
        this.files = undefined;
    };
    UploadBraniComponent.prototype.ngAfterViewInit = function () {
    };
    UploadBraniComponent.prototype.ngOnChanges = function (changes) {
    };
    UploadBraniComponent.prototype.fChiusuraMaschera = function () {
        this.chiusuraMaschera.emit(new Date().toString());
    };
    UploadBraniComponent.prototype.appoggiaFiles = function (files) {
        this.fileCount = files.length;
        this.files = files;
    };
    UploadBraniComponent.prototype.handleFileInput = function () {
        if (this.fileCount > 0) {
            var d1 = this.datePipe.transform(new Date(), 'dd-MM-yyyy_HHmmss', 'UTC');
            this.fileLogName = 'Log_' + d1;
            this.attendiUpload = true;
            this.qualeFile = 0;
            this.uploadFile();
        }
        else {
            this.attendiUpload = false;
            alert('Selezionare almeno un file');
        }
    };
    UploadBraniComponent.prototype.uploadFile = function () {
        var _this = this;
        var formData = new FormData();
        var fileName = '';
        var log = 'SI';
        // for (let i = 0; i < fileCount; i++) {
        formData.append('accept', this.files.item(this.qualeFile), this.files.item(this.qualeFile).name);
        fileName = this.files.item(this.qualeFile).name + ';';
        // console.log(fileName);
        // }
        formData.append('filelog', this.fileLogName);
        formData.append('nomefile', fileName);
        formData.append('log', log);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        console.log('Indirizzo upload', this.urlPerUpload + '/Default.aspx');
        this.http.post(this.urlPerUpload + '/Default.aspx', formData, options)
            .subscribe(function (data) {
            if (_this.qualeFile < _this.fileCount - 1) {
                _this.qualeFile++;
                setTimeout(function () {
                    _this.uploadFile();
                }, 100);
                return;
            }
            else {
                _this.files = undefined;
                _this.fileCount = 0;
                _this.attendiUpload = false;
                if (_this.effettuaRefreshBrani === true) {
                    _this.refreshBrani.emit(new Date().toString());
                }
                _this.pathFileLog = _this.urlPerUpload + '/Logs/' + _this.fileLogName + '.txt';
                _this.visuaLog = true;
                _this.http.get(_this.pathFileLog).subscribe(function (content) { return _this.contenutoLog = content.text(); });
            }
        }, function (error) {
            _this.attendiUpload = false;
            // t.scriveDebug('Errore nell\'invio', false);
            console.log(error);
        });
    };
    UploadBraniComponent.prototype.cambioRefreshBrani = function (e) {
        var _this = this;
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            _this.effettuaRefreshBrani = e.srcElement.checked;
        }, 10);
    };
    UploadBraniComponent.prototype.chiudeLog = function () {
        console.log('Chiudo schermata log');
        this.visuaLog = false;
    };
    UploadBraniComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UploadBraniComponent.prototype, "mascheraVisibile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UploadBraniComponent.prototype, "urlPerUpload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UploadBraniComponent.prototype, "t", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UploadBraniComponent.prototype, "refreshBrani", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UploadBraniComponent.prototype, "chiusuraMaschera", void 0);
    UploadBraniComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./uploadbrani.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploadbrani/uploadbrani.component.html")).default,
            animations: _animations__WEBPACK_IMPORTED_MODULE_2__["fade"],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./uploadbrani.component.css */ "./src/app/uploadbrani/uploadbrani.component.css")).default]
        })
    ], UploadBraniComponent);
    return UploadBraniComponent;
}());



/***/ }),

/***/ "./src/app/varie/caricabrano.component.ts":
/*!************************************************!*\
  !*** ./src/app/varie/caricabrano.component.ts ***!
  \************************************************/
/*! exports provided: CaricaBranoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaricaBranoComponent", function() { return CaricaBranoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caricabranoautomatico.component */ "./src/app/varie/caricabranoautomatico.component.ts");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files */ "./src/app/varie/files.ts");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/esm5/http.js");
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ "./node_modules/@awesome-cordova-plugins/media/__ivy_ngcc__/ngx/index.js");








var CaricaBranoComponent = /** @class */ (function () {
    function CaricaBranoComponent(utility, http, media, caricaBranoAuto) {
        this.utility = utility;
        this.http = http;
        this.media = media;
        this.caricaBranoAuto = caricaBranoAuto;
        this.braniCaricati = 0;
    }
    CaricaBranoComponent.prototype.ngOnInit = function () {
    };
    CaricaBranoComponent.prototype.ngOnChanges = function () {
    };
    CaricaBranoComponent.prototype.ngAfterViewInit = function () {
    };
    CaricaBranoComponent.prototype.caricaBranoGiaCaricato = function (t) {
        t.caricamentoInCorso = true;
        this.caricaBranoAuto.settaVariabili(t);
        this.prendeScritte(t);
        t.utility.scriveDebug(t, 'Carico brano già caricato. Impostate variabili');
        this.prosegueCaricamento(t);
        t.impostaBellezza();
        t.startTimerImmagine();
        t.utility.scriveDebug(t, 'Carico brano già caricato. Fine');
    };
    CaricaBranoComponent.prototype.prendeBranoInBaseAID = function (t, id) {
        var _this = this;
        var brano = undefined;
        t.braniFiltrati.forEach(function (element) {
            if (!brano) {
                // this.Artista = element.text;
                element.children.forEach(function (element2) {
                    if (!brano) {
                        // this.Album = element2.text;
                        element2.children.forEach(function (element3) {
                            if (!brano) {
                                if (element3.id === id) {
                                    // this.Brano = element3.text;
                                    // t.utility.scriveDebug(t, 'Rilevato brano: ' + this.Brano);
                                    brano = element3;
                                    _this.branoRilevato = {
                                        Artista: element.text,
                                        Anno: element2.anno,
                                        Album: element2.text,
                                        Brano: element3.text
                                    };
                                    t.pathBranoProssimo = element3.path;
                                    t.branoPresenteSuSD = element3.locale;
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    CaricaBranoComponent.prototype.caricaBrano = function (t) {
        var _this = this;
        t.utility.scriveDebug(t, 'Carico brano normale. Caricato prossimo brano: ' + t.caricatoProssimoBrano);
        if (t.deviceGirante === 'Android' && t.caricatoProssimoBrano > -1) {
            t.utility.scriveDebug(t, 'Carico brano già caricato. Inizio');
            this.caricaBranoGiaCaricato(t);
            t.caricatoProssimoBrano = -1;
            return;
        }
        t.caricamentoInCorso = true;
        t.utility.scriveDebug(t, 'Carico brano normale. Inizio caricamento brano normale');
        var ora = new Date();
        var milli = ora.getTime();
        if (milli - t.vecchioMilli < 500) {
            // return;
        }
        t.vecchioMilli = milli;
        // console.log(milli);
        t.immagineBrano = '';
        t.immagineSfondo = '';
        t.titoloBrano = '';
        t.artista = '';
        t.album = '';
        if (t.intervalDurata) {
            clearInterval(t.intervalDurata);
        }
        t.utility.scriveDebug(t, 'Carico brano normale. 1... idBrano: ' + t.numeroBrano);
        t.utility.scriveDebug(t, 'Carico brano normale. 1.5... Connesso: ' + t.isConnected);
        t.utility.scriveDebug(t, 'Carico brano normale. 1.75... Brano presente su SD: ' + t.deviceGirante + ' - ' + t.branoPresenteSuSD);
        if (t.deviceGirante === 'Android' && t.branoPresenteSuSD) {
            t.utility.scriveDebug(t, 'Cerco id brano: ' + t.numeroBrano);
            this.prendeBranoInBaseAID(t, t.numeroBrano);
            // Il brano è già stato scaricato... Inutile riprenderlo
            _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD = _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].pathSD + t.pathBranoProssimo;
            t.utility.scriveDebug(t, 'Carico brano da locale: ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
            t.utility.scriveDebug(t, 'Carico brano Path: ' + t.pathBranoProssimo);
            var ff = t.pathBranoProssimo;
            var branoLoo = true;
            if (ff.indexOf('looWebPlayer') === -1) {
                branoLoo = false;
            }
            ff = ff.substring(ff.indexOf('LooigiSoft'), ff.length);
            t.utility.scriveDebug(t, 'Parso stringa:' + ff);
            var parti = ff.split('/');
            // LooigiSoft/looWebPlayer/Brani/Artista/Album/Brano
            if (branoLoo === true) {
                t.artista = parti[3];
                t.album = parti[4];
                if (t.album.indexOf('-') > -1) {
                    var a = t.album.split('-');
                    t.anno = a[0];
                    t.album = a[1];
                }
                else {
                    t.anno = '0000';
                }
                // t.utility.scriveDebug(t, 'Parso stringa. Anno ' + t.anno);
                t.titoloBrano = parti[5];
                if (t.titoloBrano.indexOf('-') > -1) {
                    var a = t.titoloBrano.split('-');
                    t.traccia = a[0];
                    t.titoloBrano = a[1];
                }
                else {
                    t.traccia = '00';
                }
                if (t.titoloBrano.indexOf('.') > -1) {
                    var a = t.titoloBrano.split('.');
                    t.estensioneBrano = '.' + a[1];
                    t.titoloBrano = a[0];
                }
                else {
                    t.estensioneBrano = '';
                }
            }
            else {
                t.artista = 'Sconosciuto';
                t.album = 'Sconosciuto';
                t.traccia = '00';
                t.anno = '0000';
                t.titoloBrano = parti[parti.length - 1];
                if (t.titoloBrano.indexOf('.') > -1) {
                    var a = t.titoloBrano.split('.');
                    t.estensioneBrano = '.' + a[1];
                    t.titoloBrano = a[0];
                }
                else {
                    t.estensioneBrano = '';
                }
            }
            t.titoloBranoAutomatico = t.titoloBrano;
            t.scrollaTesto('txtTitoloBranoAutomatico', t.titoloBranoAutomatico, 0);
            t.utility.scriveDebug(t, 'Carico brano normale. Path ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
            t.utility.scriveDebug(t, 'Carico brano normale. Artista ' + t.artista);
            t.utility.scriveDebug(t, 'Carico brano normale. Anno ' + t.anno);
            t.utility.scriveDebug(t, 'Carico brano normale. Album ' + t.album);
            t.utility.scriveDebug(t, 'Carico brano normale. Titolo ' + t.titoloBrano);
            t.utility.scriveDebug(t, 'Carico brano normale. Traccia ' + t.traccia);
            t.utility.scriveDebug(t, 'Carico brano normale. Estensione ' + t.estensioneBrano);
            t.utility.scriveDebug(t, 'Carico brano normale. Titolo ' + t.titoloBrano);
            // t.imms = [];
            t.volteAscoltata = -1;
            t.numeroBrano = t.numeroBrano;
            t.quantiBrani = t.quantiBrani;
            t.dataBrano = '';
            t.dimensione = '';
            t.testo = '';
            t.testoTradotto = '';
            t.pathBrano = _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD;
            t.tipo = '';
            t.posizioneBrano = 0;
            t.durata = 1;
            t.quanteImmagini = 0;
            var pathImmagine = t.urlImmagine + 'ImmaginiMusica/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
            t.immagineBrano = pathImmagine;
            t.immagineSfondo = pathImmagine;
            t.utility.leggeTestoSeEsiste(t, t.artista, t.album, t.titoloBrano);
            t.utility.leggeImmagineSeEsiste(t, t.artista, t.album, t.titoloBrano);
            t.utility.scriveDebug(t, 'Path immagine ' + pathImmagine);
            this.prosegueCaricamento(t);
            t.utility.scriveDebug(t, 'Fine proseguo caricamento');
            t.caricamentoInCorso = false;
            t.imms = new Array();
            t.scritte = new Array();
            this.prendeScritte(t);
        }
        else {
            var params = {
                NumeroBrano: t.numeroBrano
            };
            if (t.isConnected) {
                t.utility.scriveDebug(t, 'Carico brano normale. 1.75... Ritorna brano: ' + params.NumeroBrano);
                t.apiService.ritornaBrano(t.idUtenza, params, this).map(function (response) { return t.apiService.controllaRitorno(response); })
                    .subscribe(function (data) {
                    t.utility.scriveDebug(t, 'Carico brano normale. 1.9...');
                    t.caricamentoInCorso = false;
                    if (data) {
                        var data2 = t.apiService.prendeSoloDatiValidi(data);
                        // console.log(data2);
                        t.utility.scriveDebug(t, 'Carico brano normale. 2... Ritornato brano...');
                        if (data2.indexOf('ERROR:') === -1) {
                            var dati = data2.split('|');
                            var datiCanzone = dati[0].split(';');
                            if (dati[1]) {
                                if (dati[1].indexOf('§') > -1) {
                                    t.imms = dati[1].split('§');
                                }
                                else {
                                    t.imms = new Array();
                                }
                            }
                            else {
                                t.imms = new Array();
                            }
                            // t.quanteImmagini = t.imms.length;
                            // this.utility.scriveDebug(t, 'Numero immagini artista:' + t.imms.length);
                            var datiCanzoneUlteriori = new Array();
                            if (dati[2]) {
                                if (dati[2].indexOf(';') > -1) {
                                    datiCanzoneUlteriori = dati[2].split(';');
                                }
                            }
                            // console.log(datiCanzone);
                            t.volteAscoltata = +datiCanzoneUlteriori[0];
                            t.numeroBrano = +datiCanzone[0];
                            t.quantiBrani = +datiCanzone[1];
                            t.titoloBrano = datiCanzone[5];
                            t.artista = datiCanzone[3];
                            t.estensioneBrano = datiCanzone[8];
                            t.album = datiCanzone[4];
                            t.anno = datiCanzone[6];
                            t.traccia = datiCanzone[7];
                            t.dataBrano = datiCanzone[9];
                            t.dimensione = datiCanzone[10];
                            if (t.traccia.length === 1) {
                                t.traccia = '0' + t.traccia;
                            }
                            for (var i = t.anno.length + 1; i <= 4; i++) {
                                t.anno = '0' + t.anno;
                            }
                            // t.impostaBellezza();
                            t.titoloBranoPerTesto = t.utility.sistemaTitoloBrano(t.titoloBrano);
                            console.log('Titolo brano: ', t.titoloBranoPerTesto);
                            t.testo = t.sistemaTesto(datiCanzoneUlteriori[2]);
                            // console.log(t.testo);
                            if (t.testo === '') {
                                t.testo = datiCanzone[3].toUpperCase() + '<br />' + t.titoloBranoPerTesto + '<br /><br />Nessun testo rilevato';
                            }
                            if (t.testo.indexOf('Nessun testo rilevato') > -1) {
                                t.Happi.prendeArtista(t, t.numeroBrano, t.artista, t.album, t.titoloBranoPerTesto);
                            }
                            else {
                                if (t.deviceGirante === 'Android') {
                                    t.utility.scriveTestoSeNonEsiste(t, t.artista, t.album, t.titoloBranoPerTesto, t.testo);
                                }
                            }
                            t.testoTradotto = t.sistemaTesto(datiCanzoneUlteriori[3]);
                            if (t.testoTradotto === '') {
                                t.testoTradotto = datiCanzone[3].toUpperCase() + '<br />' + t.titoloBranoPerTesto + '<br /><br />Nessun testo rilevato';
                            }
                            // console.log(t.testo);
                            // console.log(t.testoTradotto);
                            t.utility.scriveDebug(t, 'Carico brano normale. 3...');
                            if (t.estensioneBrano.indexOf('.') > -1) {
                                t.estensioneBrano = t.estensioneBrano.substring(t.estensioneBrano.indexOf('.'), t.estensioneBrano.length);
                            }
                            _this.prendeScritte(t);
                            t.utility.scriveDebug(t, 'Carico brano normale. 4...');
                            /* if (t.deviceGirante === 'Android') {
                              t.pathBrano = t.apiService.ritornaUrlMP3() + 'Brani/' +
                                t.artista + '/' + t.anno + '-' + t.album + '/' +
                                t.traccia + '-' + t.titoloBrano + t.estensioneBrano;
                            } else { */
                            t.pathBrano = t.apiService.ritornaUrlMP3() + 'MP3/' +
                                t.artista + '/' + t.anno + '-' + t.album + '/' +
                                t.traccia + '-' + t.titoloBrano + t.estensioneBrano;
                            // }
                            t.tipo = 'audio/mpeg';
                            if (t.titoloBrano.toUpperCase().indexOf('.MP3') > -1) {
                                t.titoloBrano = t.titoloBrano.replace('.mp3', '');
                                t.tipo = 'audio/mpeg';
                            }
                            if (t.titoloBrano.toUpperCase().indexOf('.WMA') > -1) {
                                t.titoloBrano = t.titoloBrano.replace('.wma', '');
                                t.tipo = 'audio/x-ms-wma';
                            }
                            while (t.pathBrano.indexOf(' ') > -1) {
                                t.pathBrano = t.pathBrano.replace(' ', '%20');
                            }
                            var cartelletta = 'LooigiSoft';
                            var titolone = 'looWebPlayer/Brani/' + t.artista + '/' + t.anno + '-' + t.album + '/' + t.traccia + '-' + t.titoloBrano + t.estensioneBrano;
                            t.utility.scriveDebug(t, 'Carico brano normale. Download tags brano');
                            _this.prendeTagsBrano(t);
                            if (t.deviceGirante === 'Android') {
                                // ComponentFile.percorsoFileSD = '';
                                t.utility.scriveDebug(t, 'Carico brano normale. Download brano: ' + t.pathBrano);
                                t.utility.scriveDebug(t, 'Carico brano normale. Cartella: ' + cartelletta);
                                t.utility.scriveDebug(t, 'Carico brano normale. Titolo: ' + titolone);
                                t.file.downloadBrano(t, t.pathBrano, cartelletta, titolone).then(function (Ritorno) {
                                    if (Ritorno === 'OK') {
                                        t.utility.scriveDebug(t, 'Carico brano normale. 4.1 ... Ritorno download *' + Ritorno + '*' + '\nFile: *' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD + '*');
                                        var pathImmagine = t.urlImmagine + 'ImmaginiMusica/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                                        var titolone_1 = 'looWebPlayer/ImmaginiMusica/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                                        t.file.downloadImmagine(t, pathImmagine, 'LooigiSoft', titolone_1).then(function (Ritorno2) {
                                        });
                                        _this.prosegueCaricamento(t);
                                    }
                                    else {
                                        t.utility.scriveDebug(t, 'Errore nel DL. Provo a prendere un altro brano');
                                        alert('Errore nel DL: ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                                        t.avantiBrano();
                                    }
                                });
                                /* const si = setInterval(() => {
                                  if (ComponentFile.percorsoFileSD !== '') {
                                    clearInterval(si);
                
                                    ComponentFile.percorsoImmagineSD = '';
                                    const pathImmagine = t.urlImmagine + 'Immagini/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                                    const titolone = 'looWebPlayer/Immagini/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                                    // alert(pathImmagine);
                                    // alert(titolone);
                                    t.files.downloadImmagine(pathImmagine, 'LooigiSoft', titolone);
                                    const si2 = setInterval(() => {
                                      if (ComponentFile.percorsoImmagineSD !== '') {
                                        clearInterval(si2);
                                      }
                                    }, 100)
                      
                                    this.prosegueCaricamento(t);
                                  }
                                }, 100) */
                            }
                            else {
                                if (!t.pathBrano || t.pathBrano === '') {
                                    t.utility.scriveDebug(t, 'Errore nel DL. Path brano vuoto... Provo a prendere un altro brano');
                                    alert('Errore nel DL. Path brano vuoto');
                                    t.avantiBrano();
                                }
                                else {
                                    _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD = t.pathBrano;
                                    _this.prosegueCaricamento(t);
                                }
                            }
                        }
                        else {
                            t.utility.scriveDebug(t, 'Carico brano normale. 19... ' + data2);
                            t.utility.visualizzaMessaggio(_this, 'Carico brano: ' + data2, true);
                            if (t.staSuonando) {
                                setTimeout(function () {
                                    t.avantiBrano();
                                }, 2000);
                            }
                        }
                    }
                    else {
                        t.utility.scriveDebug(t, 'Carico brano normale. 20... ' + data);
                        t.utility.visualizzaMessaggio(_this, 'Carico brano: ' + data, true);
                        if (t.staSuonando) {
                            setTimeout(function () {
                                t.avantiBrano();
                            }, 2000);
                        }
                    }
                }, function (error) {
                    if (error instanceof Error) {
                        t.caricamentoInCorso = false;
                        t.utility.visualizzaMessaggio(_this, 'Errore Carica Brano: ' + error.message, true);
                        alert('Errore ritorno carica brano: ' + error.message);
                    }
                });
            }
            else {
                if (t.deviceGirante === 'Android') {
                    // Non c'è connessione... Siamo su un dispositivo Android così tento di prendere un brano su SD
                    t.utility.scriveDebug(t, 'Carico brano normale. Nessuna connessione, Android');
                    t.numeroBrano = t.prendeNumeroProssimoBrano(9);
                    t.utility.scriveDebug(t, 'Carico brano normale. Brano in locale: ' + t.numeroBrano);
                    this.prendeBranoInBaseAID(t, t.numeroBrano);
                    var brano = this.branoRilevato.Brano;
                    var artista = this.branoRilevato.Artista;
                    var album = this.branoRilevato.Anno + '-' + this.branoRilevato.Album;
                    var nome = brano.traccia + '-' + brano.text;
                    var estensione = brano.estensione;
                    var nomeBrano_1 = t.file.sistemaNomeFile('looWebPlayer/Brani/' + artista + '/' + album + '/' + nome + '.' + estensione);
                    t.utility.scriveDebug(t, 'Carico brano normale. Path brano in locale: ' + nomeBrano_1);
                    t.titoloBrano = brano.text;
                    t.artista = this.branoRilevato.Artista;
                    t.estensioneBrano = brano.estensione;
                    t.album = this.branoRilevato.Album;
                    t.anno = this.branoRilevato.Anno;
                    t.traccia = brano.traccia;
                    t.dataBrano = '';
                    t.dimensione = -1;
                    this.prendeScritte(t);
                    t.tipo = 'audio/mpeg';
                    if (t.titoloBrano.toUpperCase().indexOf('.MP3') > -1) {
                        t.titoloBrano = t.titoloBrano.replace('.mp3', '');
                        t.tipo = 'audio/mpeg';
                    }
                    if (t.titoloBrano.toUpperCase().indexOf('.WMA') > -1) {
                        t.titoloBrano = t.titoloBrano.replace('.wma', '');
                        t.tipo = 'audio/x-ms-wma';
                    }
                    var pathTesto = t.file.sistemaNomeFile(_files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].pathSD + '/LooigiSoft/Testi/' + artista + '/' + album + '/' + nome + '.txt');
                    t.utility.scriveDebug(t, 'Carico brano normale. Path testo in locale: ' + pathTesto);
                    t.file.readFile(t, pathTesto, 7).then(function (Ritorno) {
                        t.testoTradotto = '';
                        t.testo = t.sistemaTesto(Ritorno);
                        var pathImmagine = t.urlImmagine + 'ImmaginiMusica/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                        t.utility.scriveDebug(t, 'Carico brano normale. Path immagine in locale: ' + pathImmagine);
                        t.file.readFile(t, pathImmagine, 5).then(function (Ritorno) {
                            t.immagineSfondo = Ritorno;
                            t.immagineBrano = Ritorno;
                            t.pathBrano = nomeBrano_1;
                            _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD = t.pathBrano;
                            t.utility.scriveDebug(t, 'Carico brano normale. Proseguo caricamento del brano in locale');
                            _this.prosegueCaricamento(t);
                        });
                    });
                }
                else {
                    alert('Connessione assente. Non riesco ad ottenere un brano');
                }
                // Non c'è rete, prendo i files in locale
                // alert('Nessuna rete, prendo un file in locale');
                /*
                const si = setInterval(() => {
                  if (!ComponentFile.staLeggendoFiles) {
                    clearInterval(si);
                    t.caricamentoInCorso = false;
          
                    const x = Math.floor(Math.random() * ComponentFile.filesInMemoria.length);
                    const f = ComponentFile.filesInMemoria[x];
                    let ff = f;
                    ff = ff.substring(ff.indexOf('LooigiSoft'), ff.length);
                    // alert(ff);
                    const parti = ff.split('/');
                    ComponentFile.percorsoFileSD = ComponentFile.pathSD + f;
                    // alert('File in locale preso\n' + f);
          
                    t.artista = parti[3];
                    t.album = parti[4];
                    if (t.album.indexOf('-') > -1) {
                      const a = t.album.split('-');
                      t.anno = a[0];
                      t.album = a[1];
                    } else {
                      t.anno = '0000';
                    }
                    t.titoloBrano = parti[5];
                    if (t.titoloBrano.indexOf('-') > -1) {
                      const a = t.titoloBrano.split('-');
                      t.traccia = a[0];
                      t.titoloBrano = a[1];
                    } else {
                      t.traccia = '00';
                    }
                    if (t.titoloBrano.indexOf('.') > -1) {
                      const a = t.titoloBrano.split('.');
                      t.estensioneBrano = '.' + a[1];
                      t.titoloBrano = a[0];
                    } else {
                      t.estensioneBrano = '';
                    }
          
                    t.testo = t.artista.toUpperCase() + '<br />' + t.titoloBrano.toUpperCase();
          
                    const pathImmagine = t.urlImmagine + 'Immagini/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
                    t.immagineBrano = pathImmagine;
                    t.immagineSfondo = pathImmagine;
        
                    console.log('Immagine brano 1: ', t.immagineBrano);
                    console.log('Immagine sfondo 1: ', t.immagineSfondo);
        
                    // alert(pathImmagine);
          
                    this.prosegueCaricamento(t);
          
                    t.imms = new Array();
                    t.scritte = new Array();
                    this.prendeScritte(t);
                  }
                }, 100); */
            }
        }
    };
    CaricaBranoComponent.prototype.prendeTagsBrano = function (t) {
        var _this = this;
        var params = {
            NumeroBrano: t.numeroBrano
        };
        t.tagsBrano = new Array();
        t.apiService.ritornaTagsBrano(params)
            .map(function (response) { return t.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            var data2 = t.apiService.prendeSoloDatiValidi(data);
            t.utility.scriveDebug(t, 'Tags brano: ' + data2);
            if (data2.indexOf('ERROR:') === -1) {
                if (data2 && data2 !== '' && data2 !== '-') {
                    var dd = data2.split('§');
                    dd.forEach(function (element) {
                        if (element && element !== '') {
                            var d2 = element.split(';');
                            var tt = {
                                Progressivo: +d2[0],
                                idTag: +d2[1],
                                Tag: d2[2]
                            };
                            t.tagsBrano.push(tt);
                        }
                    });
                }
            }
        }, function (error) {
            if (error instanceof Error) {
                t.utility.visualizzaMessaggio(_this, 'Lettura Tags: ' + error.message, true);
            }
        });
    };
    CaricaBranoComponent.prototype.prendeScritte = function (t) {
        t.utility.scriveDebug(t, 'Prende scritte 1');
        t.scritte = new Array();
        if (t.titoloBrano.indexOf('-') > -1) {
            var t1 = t.titoloBrano.split('-');
            if (t1[1].indexOf('.') > -1) {
                var tt = t1[1].split('.');
                t.scritte.push('Titolo: ' + tt[0]);
                t.scritte.push('Traccia: ' + t[0]);
                t.scritte.push('Tipologia: ' + tt[1]);
            }
            else {
                t.scritte.push('Titolo: ' + t[1]);
                t.scritte.push('Traccia: ' + t[0]);
            }
        }
        else {
            t.scritte.push('Titolo: ' + t.titoloBrano);
        }
        t.scritte.push('Artista: ' + t.artista);
        if (t.album.indexOf('-') > -1) {
            var t1 = t.album.split('-');
            t.scritte.push('Album: ' + t1[1]);
            t.scritte.push('Anno: ' + t1[0]);
        }
        else {
            t.scritte.push('Album: ' + t.album);
        }
        t.scritte.push('Numero Brano: ' + t.numeroBrano + '/' + t.quantiBrani);
        if (t.dimensione) {
            var d = t.dimensione;
            var f = 'b.';
            if (d > 1024) {
                d /= 1024;
                f = 'kb.';
            }
            if (d > 1024) {
                d /= 1024;
                f = 'Mb.';
            }
            d = Math.floor(d * 100) / 100;
            t.scritte.push('Dimensione Brano: ' + d + ' ' + f);
        }
        t.scritte.push('Data Brano: ' + t.dataBrano);
        t.qualeScritta = 0;
        t.utility.scriveDebug(t, 'Prende scritte 2: ' + t.scritte.length);
    };
    CaricaBranoComponent.prototype.downloadFile = function (t, url) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ responseType: _angular_http__WEBPACK_IMPORTED_MODULE_6__["ResponseContentType"].Blob });
        var u = url; // encodeURIComponent(url);
        u = t.apiService.cambiaChar(u, '&', '%26');
        u = t.apiService.cambiaChar(u, '\'', '%27');
        t.utility.scriveDebug(t, 'Download ' + u);
        return this.http.get(u, options)
            .map(function (res) { return res.blob(); });
        // .catch(this.handleError)
    };
    CaricaBranoComponent.prototype.prosegueCaricamento = function (t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var u, response, audioArrayBuffer, audioBlob, audioObjectURL;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.frm = t;
                        t.utility.scriveDebug(t, 'Prosegue caricamento');
                        t.utility.scriveDebug(t, 'Carico brano normale. 5...' + t.titoloBrano + ' - ' + t.tipo);
                        t.utility.scriveDebug(t, 'Carico brano normale. 5.2...' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                        if (t.impostatoBranoFinito === true) {
                            t.impostatoBranoFinito = false;
                        }
                        t.caricamentoInCorso = true;
                        if (!(t.deviceGirante !== 'Android')) return [3 /*break*/, 3];
                        u = _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD;
                        u = t.apiService.cambiaChar(u, '&', '%26');
                        u = t.apiService.cambiaChar(u, '\'', '%27');
                        t.utility.scriveDebug(t, 'Acquisizione brano ' + u);
                        return [4 /*yield*/, window.fetch(u)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        audioArrayBuffer = _a.sent();
                        audioBlob = new Blob([audioArrayBuffer]);
                        audioObjectURL = window.URL.createObjectURL(audioBlob);
                        // if (t.deviceGirante !== 'Android') {
                        t.audio.src = audioObjectURL;
                        t.audio.type = 'audio/mp3';
                        // } else {
                        //  t.audioAndroid = t.media.create(audioObjectURL);
                        // }
                        this.prosegueCaricamento2();
                        return [3 /*break*/, 4];
                    case 3:
                        // if (t.deviceGirante !== 'Android') {
                        //   t.audio.src = ComponentFile.percorsoFileSD;
                        //   this.prosegueCaricamento2();
                        // } else {
                        // alert('Brano: ' + ComponentFile.percorsoFileSD);
                        if (t.audioAndroid) {
                            t.audioAndroid.release();
                        }
                        t.utility.scriveDebug(t, 'Acquisizione brano Android: ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                        t.audioAndroid = this.media.create(_files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                        t.staLeggendoBrano = true;
                        t.audioAndroid.onStatusUpdate.subscribe(function (status) {
                            if (t.staLeggendoBrano === true) {
                                t.utility.scriveDebug(t, 'Update: ' + status);
                                /* if (status === 1) {
                                  setTimeout(() => {
                                    t.audioAndroid.play();
                                  }, 100);
                                } else {
                                  if (status === 2) {
                                    t.utility.scriveDebug(t, 'Durata brano: ' + t.audioAndroid.getDuration());
                                    this.prosegueCaricamento2();
                                    setTimeout(() => {
                                      t.audioAndroid.pause();
                                      t.staLeggendoBrano = false;
                                    }, 100);
                                  }
                                } */
                            }
                        });
                        t.audioAndroid.onSuccess.subscribe(function () {
                            // alert('Brano caricato correttamente');
                        });
                        // alert('Errore: ' + JSON.stringify(error)
                        t.audioAndroid.onError.subscribe(function (error) {
                        });
                        this.prosegueCaricamento2();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CaricaBranoComponent.prototype.prosegueCaricamento2 = function () {
        var _this = this;
        var t = this.frm;
        if (t.deviceGirante !== 'Android') {
            if (!t.audio) {
                t.audio = new Audio();
            }
        }
        else {
            if (!t.audioAndroid) {
                alert('SBAGLIATISSIMO!!!');
            }
        }
        // t.audio.pause();
        // alert('Brano da caricare:' + Files.percorsoFileSD);
        // t.audio = new Audio();
        // console.log(t.pathBrano);
        t.posizioneBrano = 0;
        t.durata = 1;
        /* try {
          t.audio.load();
        } catch (e) {
          t.utility.scriveDebug(t, 'Carico brano normale. ERRORE load: ' + e);
          alert('Errore nel load: ' + JSON.stringify(e));
          
          t.caricatoProssimoBrano = -1;
          t.titoloBranoAutomatico = '';
          t.fFiles.operazioneSuFile = '';
    
          t.caricamentoInCorso = false;
      
          if (t.staSuonando) {
            setTimeout(() => {
              // t.avantiBrano();
            }, 2000);
          }
          return;
        } */
        t.immaginiCambiate = 0;
        t.staAspettandoCaricamento = true;
        t.scaricatoAutomaticamente = false;
        if (t.intervalDurata) {
            clearInterval(t.intervalDurata);
        }
        var errori = 0;
        t.utility.scriveDebug(t, 'Carico brano normale. 5.5... Parte timer di attesa caricamento per il file ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
        // alert('Android: ***' + t.deviceGirante + '***');
        if (t.deviceGirante !== 'Android') {
            t.intervalDurata = setInterval(function () {
                if (t.audio.duration) {
                    clearInterval(t.intervalDurata);
                    _this.prosegueCaricamentoBrano(t);
                    t.audio.currentTime = 0;
                    t.durata = t.audio.duration;
                    t.tempoTotaleBrano = t.durata;
                    t.tempoTotale = t.converteTempo(t.durata);
                    t.posizioneBrano = 0;
                    // t.durata = 1;
                    t.utility.scriveDebug(t, 'Carico brano normale. 6...' + t.durata + ' - ' + t.tempoTotale + '. Sta suonando: ' + t.staSuonando);
                    t.scriveVolteAscoltata();
                    _this.braniCaricati++;
                    if (_this.braniCaricati > 10) {
                        _this.braniCaricati = 0;
                        _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].eliminaFiles(t, 3);
                    }
                    if (t.staSuonando === true) {
                        if (!t.staCaricandoVideo) {
                            t.audio.play();
                        }
                        t.startTimerAndroid();
                        if (t.cicla === false) {
                            t.startTimerImmagine();
                        }
                    }
                    t.staAspettandoCaricamento = false;
                    t.caricamentoInCorso = false;
                }
                else {
                    errori++;
                    if (errori > 5) {
                        clearInterval(t.intervalDurata);
                        // alert('Errore nel caricamento del brano.\nNon riesco a ottenere le informazioni.\nCarico il brano successivo...');
                        t.utility.scriveDebug(t, 'Errore nel caricamento del brano. Non riesco a ottenere le informazioni: ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                        alert('Errore nell\'ottenere le informazioni del brano: ' + _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].percorsoFileSD);
                        t.caricatoProssimoBrano = -1;
                        t.titoloBranoAutomatico = '';
                        t.scrollaTesto('txtTitoloBranoAutomatico', t.titoloBranoAutomatico, 0);
                        t.fFiles.operazioneSuFile = '';
                        t.scrollaTesto('txtOperazioneSuFile', t.fFiles.operazioneSuFile, 1);
                        t.caricamentoInCorso = false;
                        if (t.staSuonando) {
                            setTimeout(function () {
                                t.avantiBrano();
                            }, 2000);
                        }
                    }
                }
            }, 1000);
        }
        else {
            /* t.audioAndroid.onError.subscribe(error => {
              t.utility.scriveDebug(t, 'Errore nel caricamento del brano Android. Non riesco a ottenere le informazioni: ' + ComponentFile.percorsoFileSD);
              alert('Errore nell\'ottenere le informazioni del brano: ' + ComponentFile.percorsoFileSD);
      
              t.caricatoProssimoBrano = -1;
              t.titoloBranoAutomatico = '';
              t.fFiles.operazioneSuFile = '';
      
              t.caricamentoInCorso = false;
          
              if (t.staSuonando) {
                setTimeout(() => {
                  t.avantiBrano();
                }, 2000);
              }
            }); */
            // t.audioAndroid.onSuccess.subscribe(() => {
            // t.intervalDurata = setInterval(() => {
            //   if (t.audioAndroid.getDuration() > 0) {
            clearInterval(t.intervalDurata);
            this.prosegueCaricamentoBrano(t);
            t.audioAndroid.seekTo(0);
            t.durata = 1;
            t.posizioneBrano = 0;
            t.utility.scriveDebug(t, 'Carico brano normale Android. 6...' + t.durata + ' - ' + t.tempoTotale + '. Sta suonando: ' + t.staSuonando);
            t.scriveVolteAscoltata();
            this.braniCaricati++;
            if (this.braniCaricati > 10) {
                this.braniCaricati = 0;
                _files__WEBPACK_IMPORTED_MODULE_3__["ComponentFile"].eliminaFiles(t, 3);
            }
            if (t.staSuonando === true) {
                if (!t.staCaricandoVideo) {
                    t.audioAndroid.play();
                }
                t.startTimerAndroid();
                if (t.cicla === false) {
                    t.startTimerImmagine();
                }
            }
            t.staAspettandoCaricamento = false;
            t.caricamentoInCorso = false;
            /* } else {
              errori++;
              if (errori > 5) {
                clearInterval(t.intervalDurata);
    
                // alert('Errore nel caricamento del brano.\nNon riesco a ottenere le informazioni.\nCarico il brano successivo...');
                t.utility.scriveDebug(t, 'Errore nel caricamento del brano Android. Non riesco a ottenere le informazioni: ' + ComponentFile.percorsoFileSD);
                alert('Errore nell\'ottenere le informazioni del brano Android: ' + ComponentFile.percorsoFileSD);
    
                t.caricatoProssimoBrano = -1;
                t.titoloBranoAutomatico = '';
                t.fFiles.operazioneSuFile = '';
    
                t.caricamentoInCorso = false;
            
                if (t.staSuonando) {
                  setTimeout(() => {
                    t.avantiBrano();
                  }, 2000);
                }
              }
            }
          }, 1000); */
            // });
        }
        ;
    };
    CaricaBranoComponent.prototype.prosegueCaricamentoBrano = function (t) {
        t.utility.scriveDebug(t, 'Carico brano normale. 8... Immagini da db: ' + t.imms.length);
        t.immagini = new Array();
        var numeroImmagine = -1;
        var c = 0;
        t.inizioImmagini = -1;
        t.quanteImmagini = 0;
        t.imms.forEach(function (element) {
            if (element) {
                // console.log(element);
                var e = element.split(';');
                var i = {
                    idImmagine: +e[0],
                    cartella: e[1],
                    immagine: e[2]
                };
                // if (i && i.immagine && i.immagine.indexOf('.gif') > -1) {
                t.immagini.push(i);
                var cc = i.cartella;
                if (cc.indexOf('-') > -1) {
                    cc = cc.substring(cc.indexOf('-') + 1, cc.length);
                }
                // console.log(cc);
                if (i.immagine && i.immagine.toUpperCase().indexOf('COVER_') > -1) { //  && cc === t.album) {
                    numeroImmagine = c;
                }
                else {
                    if (cc || (i && i.immagine && i.immagine.indexOf('.gif') > -1)) {
                        if (t.inizioImmagini === -1) {
                            t.inizioImmagini = c;
                        }
                        t.quanteImmagini++;
                    }
                }
                c++;
            }
            // }
        });
        // console.log(t.immagini);
        t.utility.scriveDebug(t, 'Carico brano normale. 9... Immagini ' + t.quanteImmagini);
        t.utility.scriveDebug(t, 'Carico brano normale. 9.2.. Immagine COVER ' + numeroImmagine);
        if (numeroImmagine === -1) {
            t.immagineBrano = '../assets/immagini/looWPIcon.png';
        }
        // console.log(t.immagini, numeroImmagine, t.inizioImmagini, t.quanteImmagini, t.immagineBrano);
        var r = Math.floor(Math.random() * (t.quanteImmagini - t.inizioImmagini + 1) + t.inizioImmagini);
        // console.log(r);
        if (t.immagini && t.immagini[r] && t.immagini[r].immagine) {
            if (t.immagini[r].immagine.indexOf('.gif') === -1) {
                t.appoSfondo = t.urlImmagine + 'ImmaginiMusica/' + t.artista + '/' +
                    t.immagini[r].cartella + '/' + t.immagini[r].immagine;
            }
            else {
                t.appoSfondo = t.urlImmagine + 'Gifs/' + t.artista + '/' + t.immagini[r].immagine;
            }
            // console.log(t.appoSfondo);
            setTimeout(function () {
                t.immagineSfondo = t.appoSfondo;
            }, 100);
        }
        if (t.modalitaYouTube === 'S' &&
            t.artista.toUpperCase().indexOf('CARTONI') === -1 &&
            t.artista.toUpperCase().indexOf('DEMENZ') === -1 &&
            t.artista.toUpperCase().indexOf('3MICA') === -1 &&
            t.artista.toUpperCase().indexOf('3ANGELICA') === -1) {
            t.ytComponent.prendeVideoYouTube(this, 'N');
        }
        else {
            t.staCaricandoVideo = false;
        }
        // console.log(t.immagineSfondo);
        t.pauseTimer();
        t.utility.scriveDebug(t, 'Carico brano normale. 16');
        /* if (t.staSuonando === true) {
          if (!t.staCaricandoVideo) {
            t.audio.play();
          }
          t.startTimer();
          if (t.cicla === false) {
            t.startTimerImmagine();
          }
        } */
        t.utility.scriveDebug(t, 'Carico brano normale. 17');
        if (numeroImmagine > -1) {
            var nome = t.apiService.ritornaUrlImmagine() + 'ImmaginiMusica/' + t.artista + '/' +
                t.immagini[numeroImmagine].cartella + '/' + t.immagini[numeroImmagine].immagine;
            t.immagineBrano = t.effettuaReplace(nome, ' ', '%20');
            console.log('Immagine brano 2: ', t.immagineBrano);
            if (t.deviceGirante === 'Android') {
                t.utility.scriveImmagineSeNonEsiste(t, t.artista, t.immagini[numeroImmagine].cartella, t.immagini[numeroImmagine].immagine, t.immagineBrano);
            }
            // console.log(t.apiService.ritornaUrlImmagine() + 'Immagini/' + t.artista + '/', t.immagini[numeroImmagine], t.immagineBrano);
        }
        // console.log(t.immagini);
        // console.log(t.immagineBrano);
        if (t.cicla === true) {
            t.startTimerImmagine();
        }
        localStorage.setItem('numero_brano', t.numeroBrano.toString());
        t.utility.scriveDebug(t, 'Carico brano normale. 18... Fine');
        t.impostaBellezza();
        t.caricaDettaglioArtista('N');
        // t.utility.apreTree(this);
        // t.apreAlbero = !t.apreAlbero;
        // t.impostaBellezza();
        // console.log(datiCanzone, t.pathBrano, t.immagini);    
    };
    CaricaBranoComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"] },
        { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_7__["Media"] },
        { type: _caricabranoautomatico_component__WEBPACK_IMPORTED_MODULE_2__["CaricaBranoAutomaticoComponent"] }
    ]; };
    CaricaBranoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CaricaBranoComponent);
    return CaricaBranoComponent;
}());



/***/ }),

/***/ "./src/app/varie/caricabranoautomatico.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/varie/caricabranoautomatico.component.ts ***!
  \**********************************************************/
/*! exports provided: CaricaBranoAutomaticoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaricaBranoAutomaticoComponent", function() { return CaricaBranoAutomaticoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files */ "./src/app/varie/files.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");




var CaricaBranoAutomaticoComponent = /** @class */ (function () {
    function CaricaBranoAutomaticoComponent(utility) {
        this.utility = utility;
    }
    CaricaBranoAutomaticoComponent.prototype.ngOnInit = function () {
    };
    CaricaBranoAutomaticoComponent.prototype.ngOnChanges = function () {
    };
    CaricaBranoAutomaticoComponent.prototype.ngAfterViewInit = function () {
    };
    CaricaBranoAutomaticoComponent.prototype.caricaBrano = function (t) {
        var _this = this;
        t.scriveDebug('Carico brano automatico. Inizio');
        t.titoloBranoAutomatico = '';
        this.artista = '';
        this.album = '';
        t.scriveDebug('Carico brano automatico. 1... idBrano: ' + t.numeroBrano);
        t.scriveDebug('Carico brano automatico. 1.5... Connesso: ' + t.isConnected);
        if (t.deviceGirante === 'Android' && t.branoPresenteSuSD) {
            // Il brano è già stato scaricato... Inutile riprenderlo
        }
        else {
            var params = {
                NumeroBrano: t.numeroBrano
            };
            if (t.isConnected) {
                t.scriveDebug('Carico brano automatico. 1.75... Ritorna brano: ' + params.NumeroBrano);
                t.apiService.ritornaBrano(params).map(function (response) { return response.text(); })
                    .subscribe(function (data) {
                    t.scriveDebug('Carico brano automatico. 1.9...');
                    if (data) {
                        var data2 = t.apiService.prendeSoloDatiValidi(data);
                        // console.log(data2);
                        t.scriveDebug('Carico brano automatico. 2... Ritornato brano...');
                        if (data2.indexOf('ERROR:') === -1) {
                            var dati = data2.split('|');
                            var datiCanzone = dati[0].split(';');
                            _this.imms = dati[1].split('§');
                            var datiCanzoneUlteriori = dati[2].split(';');
                            // console.log(datiCanzone);
                            _this.volteAscoltata = +datiCanzoneUlteriori[0];
                            _this.numeroBrano = +datiCanzone[0];
                            _this.quantiBrani = +datiCanzone[1];
                            t.titoloBranoAutomatico = datiCanzone[5];
                            _this.artista = datiCanzone[3];
                            _this.estensioneBrano = datiCanzone[8];
                            _this.album = datiCanzone[4];
                            _this.anno = datiCanzone[6];
                            _this.traccia = datiCanzone[7];
                            _this.dataBrano = datiCanzone[9];
                            _this.dimensione = datiCanzone[10];
                            if (_this.traccia.length === 1) {
                                _this.traccia = '0' + _this.traccia;
                            }
                            for (var i = _this.anno.length + 1; i <= 4; i++) {
                                _this.anno = '0' + _this.anno;
                            }
                            // t.impostaBellezza();
                            _this.testo = t.sistemaTesto(datiCanzoneUlteriori[2]);
                            if (_this.testo === '') {
                                _this.testo = datiCanzone[3].toUpperCase() + '<br />' + datiCanzone[5] + '<br /><br />Nessun testo rilevato';
                            }
                            _this.testoTradotto = t.sistemaTesto(datiCanzoneUlteriori[3]);
                            if (_this.testoTradotto === '') {
                                _this.testoTradotto = datiCanzone[3].toUpperCase() + '<br />' + datiCanzone[5] + '<br /><br />Nessun testo rilevato';
                            }
                            // console.log(t.testo);
                            // console.log(t.testoTradotto);
                            t.scriveDebug('Carico brano automatico. 3...');
                            if (_this.estensioneBrano.indexOf('.') > -1) {
                                _this.estensioneBrano = _this.estensioneBrano.substring(_this.estensioneBrano.indexOf('.'), _this.estensioneBrano.length);
                            }
                            t.scriveDebug('Carico brano automatico. 4...');
                            _this.pathBrano = t.apiService.ritornaUrlWS() + 'Brani/' +
                                _this.artista + '/' + _this.anno + '-' + _this.album + '/' +
                                _this.traccia + '-' + t.titoloBranoAutomatico + _this.estensioneBrano;
                            _this.tipo = 'audio/mpeg';
                            if (t.titoloBranoAutomatico.toUpperCase().indexOf('.MP3') > -1) {
                                t.titoloBranoAutomatico = t.titoloBranoAutomatico.replace('.mp3', '');
                                _this.tipo = 'audio/mpeg';
                            }
                            if (t.titoloBranoAutomatico.toUpperCase().indexOf('.WMA') === -1) {
                                t.titoloBranoAutomatico = t.titoloBranoAutomatico.replace('.wma', '');
                                _this.tipo = 'audio/x-ms-wma';
                            }
                            while (_this.pathBrano.indexOf(' ') > -1) {
                                _this.pathBrano = _this.pathBrano.replace(' ', '%20');
                            }
                            var cartelletta = 'LooigiSoft';
                            var titolone = 'looWebPlayer/Brani/' + _this.artista + '/' + _this.anno + '-' + _this.album + '/' + _this.traccia + '-' + t.titoloBranoAutomatico + _this.estensioneBrano;
                            t.scriveDebug('Carico brano automatico. Titolo: ' + titolone);
                            if (t.deviceGirante === 'Android') {
                                _files__WEBPACK_IMPORTED_MODULE_2__["ComponentFile"].percorsoFileSD = '';
                                t.file.downloadBrano(t, _this.pathBrano, cartelletta, titolone).then(function (Ritorno) {
                                    t.caricatoProssimoBrano = _this.numeroBrano;
                                    t.scriveDebug('Carico brano automatico. Effettuato download: ' + _this.pathBrano);
                                });
                                /* const si = setInterval(() => {
                                  if (ComponentFile.percorsoFileSD !== '') {
                                    if (ComponentFile.percorsoFileSD !== 'Download interrotto') {
                                      clearInterval(si);
              
                                      t.caricatoProssimoBrano = this.numeroBrano;
                                      t.scriveDebug('Carico brano automatico. Effettuato download: ' + this.pathBrano);
                                    } else {
                                      t.scriveDebug('Carico brano automatico. Download bloccato');
                                      t.caricatoProssimoBrano = -1;
                                    }
                                  }
                                }, 100) */
                            }
                            else {
                                _files__WEBPACK_IMPORTED_MODULE_2__["ComponentFile"].percorsoFileSD = t.pathBrano;
                            }
                        }
                        else {
                            t.scriveDebug('Carico brano automatico. 19... ' + data2);
                            t.utility.visualizzaMessaggio(_this, 'Carico brano: ' + data2, true);
                        }
                    }
                    else {
                        t.scriveDebug('Carico brano automatico. 20... ' + data);
                        t.utility.visualizzaMessaggio(_this, 'Carico brano: ' + data, true);
                    }
                }, function (error) {
                    if (error instanceof Error) {
                        t.utility.visualizzaMessaggio(_this, 'Carica Brano: ' + error.message, true);
                    }
                });
            }
            else {
                t.scriveDebug('Non riesco a leggere le informazioni sul brano successivo per mancanza di rete');
            }
        }
    };
    CaricaBranoAutomaticoComponent.prototype.settaVariabili = function (t) {
        t.imms = this.imms;
        t.volteAscoltata = this.volteAscoltata;
        t.numeroBrano = this.numeroBrano;
        t.quantiBrani = this.quantiBrani;
        t.titoloBrano = t.titoloBranoAutomatico;
        t.artista = this.artista;
        t.estensioneBrano = this.estensioneBrano;
        t.album = this.album;
        t.anno = this.anno;
        t.traccia = this.traccia;
        t.dataBrano = this.dataBrano;
        t.dimensione = this.dimensione;
        t.testo = this.testo;
        t.testoTradotto = this.testoTradotto;
        t.pathBrano = this.pathBrano;
        t.tipo = this.tipo;
        t.posizioneBrano = 0;
    };
    CaricaBranoAutomaticoComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_3__["UtilityComponent"] }
    ]; };
    CaricaBranoAutomaticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CaricaBranoAutomaticoComponent);
    return CaricaBranoAutomaticoComponent;
}());



/***/ }),

/***/ "./src/app/varie/checkrete.ts":
/*!************************************!*\
  !*** ./src/app/varie/checkrete.ts ***!
  \************************************/
/*! exports provided: CheckReteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckReteComponent", function() { return CheckReteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");




var CheckReteComponent = /** @class */ (function () {
    function CheckReteComponent(utility, apiService) {
        this.utility = utility;
        this.apiService = apiService;
    }
    CheckReteComponent.prototype.ngOnInit = function () {
    };
    CheckReteComponent.prototype.ngOnChanges = function () {
    };
    CheckReteComponent.prototype.settaFramePrincipale = function (t) {
        this.frmPrincipale = t;
    };
    CheckReteComponent.prototype.AttivaControllo = function () {
        var _this = this;
        if (this.frmPrincipale.moadalitaLight) {
            return;
        }
        this.checkRete();
        var tt = setInterval(function () {
            _this.checkRete();
        }, 30000);
    };
    CheckReteComponent.prototype.checkRete = function () {
        var _this = this;
        this.staLeggendo = true;
        var t = setInterval(function () {
            if (_this.staLeggendo) {
                _this.utility.scriveDebug(_this.frmPrincipale, 'Lettura Rete. TimeOut');
                _this.frmPrincipale.ritornoGet.unsubscribe();
                _this.staLeggendo = false;
                _this.frmPrincipale.isConnected = false;
                _this.apiService.impostaConnesso(false);
            }
        }, _utility_component__WEBPACK_IMPORTED_MODULE_3__["UtilityComponent"].TimeOutConnessione);
        this.frmPrincipale.ritornoGet = this.apiService.checkRete(this, this.frmPrincipale.idUtenza)
            .map(function (response) { return _this.apiService.controllaRitorno(response); })
            .subscribe(function (data) {
            // this.utility.scriveDebug(this.frmPrincipale, 'Lettura Rete');
            _this.staLeggendo = false;
            clearInterval(t);
            if (data) {
                var data2 = _this.apiService.prendeSoloDatiValidi(data);
                // this.utility.scriveDebug(this.frmPrincipale, 'Lettura Rete. Ritorno: ' + data2);
                _this.frmPrincipale.isConnected = true;
                _this.apiService.impostaConnesso(true);
            }
            else {
                _this.utility.scriveDebug(_this.frmPrincipale, 'Lettura Rete. Nessun ritorno');
                _this.frmPrincipale.isConnected = false;
                _this.apiService.impostaConnesso(false);
            }
        });
    };
    CheckReteComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_3__["UtilityComponent"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    CheckReteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CheckReteComponent);
    return CheckReteComponent;
}());



/***/ }),

/***/ "./src/app/varie/classetimer.component.ts":
/*!************************************************!*\
  !*** ./src/app/varie/classetimer.component.ts ***!
  \************************************************/
/*! exports provided: ClasseTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasseTimer", function() { return ClasseTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm5/observable/timer.js");


var ClasseTimer = /** @class */ (function () {
    function ClasseTimer(t) {
        this.contatore = 0;
        this.fermaTimer = false;
        this.formPrincipale = t;
        // this.backgroundMode = bm;
        this.formPrincipale.utility.scriveDebug(this.formPrincipale, 'Instanzio classe timer');
    }
    ClasseTimer.prototype.parto = function () {
        // this.backgroundMode.enable();
        cordova.plugins.backgroundMode.enable();
        this.formPrincipale.utility.scriveDebug(this.formPrincipale, 'Faccio partire timer');
        this.fermaTimer = false;
        this.contatore = 0;
        this.initiateTimer();
    };
    ClasseTimer.prototype.ngOnInit = function () {
    };
    ClasseTimer.prototype.stoppaTimer = function () {
        this.fermaTimer = true;
        cordova.plugins.backgroundMode.disable();
        // this.backgroundMode.disable();
    };
    ClasseTimer.prototype.ngOnDestroy = function () {
        // if (this.formPrincipale.deviceGirante !== 'Android') {
        this.formPrincipale.utility.scriveDebug(this.formPrincipale, 'Distruggo classe timer');
        if (this.timerSub) {
            this.timerSub.unsubscribe();
            this.timerSub = undefined;
        }
        // } else {
        // }
    };
    ClasseTimer.prototype.initiateTimer = function () {
        var _this = this;
        // if (this.formPrincipale.deviceGirante !== 'Android') {
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
        this.timerSub = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe(function (x) {
            _this.contatore++;
            // console.log(this.contatore);
            if (_this.fermaTimer === true) {
                _this.formPrincipale.utility.scriveDebug(_this.formPrincipale, 'Stoppo timer');
                _this.timerSub.unsubscribe();
                _this.timerSub = undefined;
                return;
            }
            _this.formPrincipale.funzioneTick();
        });
        /* } else {
            this.timerSub = new window['nativeTimer'];
            this.timerSub.onTick = function(tick) {
                this.formPrincipale.funzioneTick();
            };
            this.timerSub.onError = function(errorMessage) {
            // invoked after error occurs
            };
            this.timerSub.onStop = function(hasError) {
            // invoked after stop
            };
            this.timerSub.start(
                1,
                1000,
                function() {
                  // invoked after successful start
                },
                function(errorMessage) {
                  // invoked after unsuccessful start
            });
        } */
    };
    return ClasseTimer;
}());



/***/ }),

/***/ "./src/app/varie/files.ts":
/*!********************************!*\
  !*** ./src/app/varie/files.ts ***!
  \********************************/
/*! exports provided: ComponentFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFile", function() { return ComponentFile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");



var ComponentFile = /** @class */ (function () {
    function ComponentFile(file) {
        this.file = file;
        this.index = 0;
        this.profondita = 0;
    }
    ComponentFile_1 = ComponentFile;
    ComponentFile.prototype.ngOnInit = function () {
    };
    ComponentFile.prototype.downloadImmagine = function (t, pathBrano, cartelletta, titolone) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var pathFile;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ComponentFile_1.pathBrano = pathBrano;
                ComponentFile_1.cartelletta = cartelletta;
                ComponentFile_1.titolone = titolone;
                ComponentFile_1.modalita = 'DOWNLOADIMMAGINE';
                pathFile = ComponentFile_1.pathSD + cartelletta + '/' + titolone;
                t.scriveDebug('CHECK FILE Per dl Immagine:\nControllo esistenza:\nPath: ' + pathFile);
                this.checkIfFileExists(t, cartelletta, titolone).then(function (Ritorno2) {
                    t.scriveDebug('Check File Immagine. Ritorno: ' + Ritorno2);
                    if (Ritorno2 === 'SI') {
                        ComponentFile_1.percorsoImmagineSD = pathFile;
                        Ritorno('OK');
                    }
                    else {
                        _this.checkIfFileExistsForDownload(t).then(function (Ritorno2) {
                            Ritorno('OK');
                        });
                    }
                });
                return [2 /*return*/];
            });
        }); });
    };
    ComponentFile.prototype.downloadBrano = function (t, pathBrano, cartelletta, titolone) {
        var _this = this;
        return new Promise(function (Ritorno) {
            ComponentFile_1.pathBrano = pathBrano;
            ComponentFile_1.cartelletta = cartelletta;
            ComponentFile_1.titolone = titolone;
            ComponentFile_1.modalita = 'DOWNLOADBRANO';
            var pathFile = ComponentFile_1.pathSD + cartelletta + '/' + titolone;
            t.scriveDebug('CHECK FILE Per dl brano. Path: ' + pathFile);
            t.scriveDebug('CHECK FILE Per dl brano. pathBrano: ' + pathBrano);
            t.scriveDebug('CHECK FILE Per dl brano. Cartelletta: ' + cartelletta);
            t.scriveDebug('CHECK FILE Per dl brano. Titolone: ' + titolone);
            _this.checkIfFileExists(t, cartelletta, titolone).then(function (Ritorno2) {
                t.scriveDebug('Check File Brano. Ritorno: ' + Ritorno2);
                if (Ritorno2 === 'SI') {
                    ComponentFile_1.percorsoFileSD = pathFile;
                    Ritorno('OK');
                }
                else {
                    _this.checkIfFileExistsForDownload(t).then(function (Ritorno2) {
                        t.scriveDebug('Check File Brano. Aggiorno file brani locali: ' + cartelletta + '/' + titolone);
                        var b = (cartelletta + '/' + titolone + '§');
                        t.braniSD += b;
                        _this.file.writeFile(ComponentFile_1.pathSD + 'LooigiSoft/looWebPlayer/', 'jsonBraniLocali.json', t.braniSD).then(function (Ritorno3) {
                            Ritorno('OK');
                        });
                        Ritorno('OK');
                    });
                }
            });
        });
    };
    ComponentFile.prototype.checkIfFileExists = function (t, cartelletta, titolone) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var path, f, filetto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t.scriveDebug('CHECK FILE 1.\n' + cartelletta + '\n' + titolone);
                        path = this.sistemaNomeFile(ComponentFile_1.pathSD + '/' + cartelletta + '/' + titolone);
                        t.scriveDebug('CHECK FILE 2.\n' + path);
                        f = path.split('/');
                        filetto = f[f.length - 1];
                        path = path.replace(filetto, '');
                        t.scriveDebug('CHECK FILE: Controllo esistenza:\nCartella: ' + path + '\nFile: ' + filetto); // + '\nModalità: ' + ComponentFile.modalita);
                        return [4 /*yield*/, this.file.checkFile(path, filetto).then(function (_) {
                                // ComponentFile.appoggioFile = this.sistemaNomeFile(path);
                                t.scriveDebug('CHECK FILE: Esiste file: ' + filetto);
                                // ComponentFile.esisteFile[indice] = 'SI';
                                Ritorno('SI');
                            }).catch(function (err) {
                                if (err.message.indexOf('NOT_FOUND') === -1) {
                                    t.scriveDebug('CHECK FILE: NON esiste file: ' + filetto + ' ERROR: ' + JSON.stringify(err));
                                }
                                // ComponentFile.esisteFile[indice] = 'NO';
                                Ritorno('NO');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        /* Files.appoggioFile = '';
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          // path is the full absolute path to the file.
          const path = Files.sistemaNomeFile(Files.pathSD + '/' + cartelletta + '/' + titolone);
          t.scriveDebug('CHECK FILE: Controllo esistenza:\n' + path + '\nModalità: ' + Files.modalita);
          window['resolveLocalFileSystemURL'](
            path,
            function fileEsistente(fileEntry) {
              Files.appoggioFile = Files.sistemaNomeFile(Files.pathSD + '/' + fileEntry.fullPath);
              t.scriveDebug('CHECK FILE: Esiste file: ' + Files.appoggioFile);
              Files.esisteFile[indice] = 'SI';
            },
            function() {
              t.scriveDebug('CHECK FILE: NON esiste file: ' + Files.appoggioFile);
              Files.esisteFile[indice] = 'NO';
            }
          );
        } */
    };
    ComponentFile.prototype.checkIfFileExistsForDownload = function (t) {
        return new Promise(function (Ritorno) {
            ComponentFile_1.interrompiDownload = false;
            ComponentFile_1.staScaricandoFile = true;
            ComponentFile_1.operazioneSuFile = 'Download in corso';
            t.scriveDebug('Download file:\nCartella: ' + ComponentFile_1.cartelletta + '\nPath: ' + ComponentFile_1.pathBrano +
                '\nTitolo: ' + ComponentFile_1.titolone + '\nModalità: ' + ComponentFile_1.modalita);
            switch (ComponentFile_1.modalita) {
                case 'DOWNLOADBRANO':
                    // alert('Download ' + Files.cartelletta + '/' + Files.titolone);
                    downloader.abort();
                    downloader.init({ folder: ComponentFile_1.cartelletta });
                    downloader.get(ComponentFile_1.pathBrano, null, ComponentFile_1.titolone);
                    document.addEventListener('DOWNLOADER_downloadError', function (event) {
                        var data = event['data'];
                        ComponentFile_1.operazioneSuFile = 'Errore Download: ' + JSON.stringify(data);
                        // alert('Errore nel download\n' + data);
                        ComponentFile_1.operazioneSuFile = 'Download interrotto';
                        ComponentFile_1.staScaricandoFile = false;
                        t.scriveDebug('Download file error: ' + JSON.stringify(event));
                        downloader.abort();
                        Ritorno('ERRORE');
                    });
                    document.addEventListener('DOWNLOADER_downloadProgress', function (event) {
                        var data = event['data'];
                        // alert(JSON.stringify(data));
                        ComponentFile_1.operazioneSuFile = 'Download in corso: ' + data[0];
                        if (ComponentFile_1.interrompiDownload === true) {
                            ComponentFile_1.operazioneSuFile = 'Download interrotto';
                            ComponentFile_1.staScaricandoFile = false;
                            downloader.abort();
                        }
                    });
                    document.addEventListener('DOWNLOADER_downloadSuccess', function (event) {
                        var data = event['data'];
                        // alert(JSON.stringify(data));
                        var patthino = JSON.stringify(data[0].nativeURL);
                        while (patthino.indexOf('\'') > -1) {
                            patthino = patthino.replace('\'', '');
                        }
                        while (patthino.indexOf('"') > -1) {
                            patthino = patthino.replace('"', '');
                        }
                        // alert('Brano scaricato\n' + JSON.stringify(data));
                        ComponentFile_1.percorsoFileSD = patthino; // this.sistemaNomeFile(ComponentFile.pathSD + patthino);
                        if (!ComponentFile_1.filesInMemoria) {
                            ComponentFile_1.filesInMemoria = new Array();
                        }
                        ComponentFile_1.filesInMemoria.push(ComponentFile_1.percorsoFileSD);
                        ComponentFile_1.operazioneSuFile = 'Download effettuato';
                        t.scriveDebug('Download file completato: ' + ComponentFile_1.percorsoFileSD);
                        ComponentFile_1.operazioneSuFile = '';
                        ComponentFile_1.staScaricandoFile = false;
                        downloader.abort();
                        Ritorno('OK');
                    });
                    break;
                case 'DOWNLOADIMMAGINE':
                    // alert('Download ' + Files.cartelletta + '/' + Files.titolone);
                    downloader.abort();
                    downloader.init({ folder: ComponentFile_1.cartelletta });
                    downloader.get(ComponentFile_1.pathBrano, null, ComponentFile_1.titolone);
                    document.addEventListener('DOWNLOADER_downloadError', function (event) {
                        var data = event['data'];
                        t.scriveDebug('Download file error: ' + JSON.stringify(data));
                        ComponentFile_1.operazioneSuFile = 'Download interrotto';
                        ComponentFile_1.staScaricandoFile = false;
                        downloader.abort();
                        Ritorno('ERRORE');
                    });
                    document.addEventListener('DOWNLOADER_downloadProgress', function (event) {
                        // const data = event['data'];
                        if (ComponentFile_1.interrompiDownload === true) {
                            ComponentFile_1.operazioneSuFile = 'Download interrotto';
                            ComponentFile_1.staScaricandoFile = false;
                            downloader.abort();
                        }
                    });
                    document.addEventListener('DOWNLOADER_downloadSuccess', function (event) {
                        var data = event['data'];
                        var patthino = JSON.stringify(data[0].fullPath);
                        while (patthino.indexOf('\'') > -1) {
                            patthino = patthino.replace('\'', '');
                        }
                        while (patthino.indexOf('"') > -1) {
                            patthino = patthino.replace('"', '');
                        }
                        // alert('Brano scaricato\n' + patthino);
                        ComponentFile_1.percorsoImmagineSD = this.sistemaNomeFile(ComponentFile_1.pathSD + patthino);
                        ComponentFile_1.staScaricandoFile = false;
                        t.scriveDebug('Download file completato: ' + ComponentFile_1.percorsoImmagineSD);
                        downloader.abort();
                        Ritorno('OK');
                    });
                    break;
            }
        });
        /* document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          // path is the full absolute path to the file.
          const path = this.sistemaNomeFile(ComponentFile.pathSD + '/' + ComponentFile.cartelletta + '/' + ComponentFile.titolone);
          // alert('Controllo esistenza:\n' + path + '\nModalità: ' + Files.modalita);
          window['resolveLocalFileSystemURL'](
            path,
            function fileEsistente(fileEntry) {
              ComponentFile.percorsoFileSD = this.sistemaNomeFile(ComponentFile.pathSD + '/' + fileEntry.fullPath);
              // alert('Il File ' + fileEntry.fullPath + ' esiste!');
            },
            function() {
              // alert('Il file non esiste\nModalità: ' + Files.modalita);
              ComponentFile.operazioneSuFile = 'Download in corso';
              switch (ComponentFile.modalita) {
                case 'DOWNLOADBRANO':
                  // alert('Download ' + Files.cartelletta + '/' + Files.titolone);
                  downloader.abort();
                  downloader.init({folder: ComponentFile.cartelletta });
                  downloader.get(ComponentFile.pathBrano, null, ComponentFile.titolone);
    
                  document.addEventListener('DOWNLOADER_downloadError', function(event) {
                    const data = event['data'];
                    ComponentFile.operazioneSuFile = 'Errore Download: ' + JSON.stringify(data[0]);
                    // alert('Errore nel download\n' + data);
                    ComponentFile.operazioneSuFile = 'Download interrotto';
                    ComponentFile.staScaricandoFile = false;
                    downloader.abort();
                  });
                  document.addEventListener('DOWNLOADER_downloadProgress', function(event) {
                    const data = event['data'];
                    ComponentFile.operazioneSuFile = 'Download in corso: ' + JSON.stringify(data[0]);
                    if (ComponentFile.interrompiDownload === true) {
                      ComponentFile.operazioneSuFile = 'Download interrotto';
                      ComponentFile.staScaricandoFile = false;
                      downloader.abort();
                    }
                  });
                  document.addEventListener('DOWNLOADER_downloadSuccess', function(event) {
                    const data = event['data'];
                    let patthino = JSON.stringify(data[0].fullPath);
                    while (patthino.indexOf('\'') > -1) {
                      patthino = patthino.replace('\'', '');
                    }
                    while (patthino.indexOf('"') > -1) {
                      patthino = patthino.replace('"', '');
                    }
                    // alert('Brano scaricato\n' + patthino);
                    ComponentFile.percorsoFileSD = this.sistemaNomeFile(ComponentFile.pathSD + patthino);
                    ComponentFile.filesInMemoria.push(ComponentFile.percorsoFileSD);
                    ComponentFile.operazioneSuFile = 'Download effettuato';
    
                    setTimeout(() => {
                      ComponentFile.operazioneSuFile = '';
                      ComponentFile.staScaricandoFile = false;
                    }, 1000);
                    downloader.abort();
                  });
                  break;
                case 'DOWNLOADIMMAGINE':
                  // alert('Download ' + Files.cartelletta + '/' + Files.titolone);
                  downloader.abort();
                  downloader.init({folder: ComponentFile.cartelletta });
                  downloader.get(ComponentFile.pathBrano, null, ComponentFile.titolone);
    
                  document.addEventListener('DOWNLOADER_downloadError', function(event) {
                    const data = event['data'];
                    ComponentFile.operazioneSuFile = 'Download interrotto';
                    ComponentFile.staScaricandoFile = false;
                    downloader.abort();
                  });
                  document.addEventListener('DOWNLOADER_downloadProgress', function(event) {
                    const data = event['data'];
                    if (ComponentFile.interrompiDownload === true) {
                      ComponentFile.operazioneSuFile = 'Download interrotto';
                      ComponentFile.staScaricandoFile = false;
                      downloader.abort();
                    }
                  });
                  document.addEventListener('DOWNLOADER_downloadSuccess', function(event) {
                    const data = event['data'];
                    let patthino = JSON.stringify(data[0].fullPath);
                    while (patthino.indexOf('\'') > -1) {
                      patthino = patthino.replace('\'', '');
                    }
                    while (patthino.indexOf('"') > -1) {
                      patthino = patthino.replace('"', '');
                    }
                    // alert('Brano scaricato\n' + patthino);
                    ComponentFile.percorsoImmagineSD = this.sistemaNomeFile(ComponentFile.pathSD + patthino);
                    ComponentFile.staScaricandoFile = false;
                    downloader.abort();
                  });
                  break;
                }
            }
          );
        } */
    };
    ComponentFile.prototype.sistemaNomeFile = function (pathP) {
        var path = pathP;
        path = path.replace('file:///', '');
        while (path.indexOf('//') > -1) {
            path = path.replace('//', '/');
        }
        path = 'file:///' + path;
        return path;
    };
    ComponentFile.prototype.createDir = function (t, indice, new_directoryP, salvaFile) {
        var _this = this;
        return new Promise(function (Ritorno) {
            var new_directory = '';
            var n = new_directoryP.split('/');
            for (var i = 0; i < n.length - 1; i++) {
                new_directory += n[i] + '/';
            }
            if (new_directory.length > 0) {
                new_directory = new_directory.substring(0, new_directory.length - 1);
            }
            if (new_directory === '') {
                return;
            }
            new_directory = new_directory.replace(ComponentFile_1.pathSD, '') + '/';
            // t.scriveDebug('CREATE DIR: ' + new_directory);
            var dirs = new_directory.split('/'); // .reverse();
            var p = '';
            var o = ComponentFile_1.pathSD;
            dirs.forEach(function (element) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(element !== '')) return [3 /*break*/, 2];
                            p += element + '/';
                            // t.scriveDebug('CREATE DIR:\nOrigine: ' + o + '\nPath: ' + p);
                            return [4 /*yield*/, this.file.createDir(o, p, false).then(function (_) {
                                    // t.scriveDebug('CREATA DIR: ' + p);
                                }).catch(function (err) {
                                    if (err.message.indexOf('EXISTS') === -1) {
                                        t.scriveDebug('CREATA DIR: ' + p + '. Errore: ' + JSON.stringify(err));
                                    }
                                })];
                        case 1:
                            // t.scriveDebug('CREATE DIR:\nOrigine: ' + o + '\nPath: ' + p);
                            _a.sent();
                            o += p;
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
            if (salvaFile) {
                _this.writeFile2(t, indice).then(function (_) {
                });
            }
            Ritorno('OK');
        });
        /* document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          t.scriveDebug('CREATE DIR: device is ready');
          window['requestFileSystem'] = window['requestFileSystem'] || window['webkitRequestFileSystem'];
          window['requestFileSystem'](1, 0, gotFS, fail);
        }
        function fail() {
          t.scriveDebug('CREATE DIR: failed to get filesystem');
        }
      
        function gotFS(fileSystem) {
          window['FS'] = fileSystem;
          
          var printDirPath = function(entry){
            t.scriveDebug('CREATE DIR: Dir path - ' + entry.fullPath);
          }
          
          createDirectory(new_directory, printDirPath);
        }
    
        function createDirectory(path, success) {
          var dirs = path.split('/'); // .reverse();
          let indice2 = 0;
          var root = window['FS'].root;
          
          var createDir = function() {
            // pathDaScrivere += (dirs[indice] + '/');
            // indice++;
            // pathDaScrivere = pathDaScrivere.substring(0, pathDaScrivere.length - 1);
            let dir = dirs[indice2];
            indice2++;
            t.scriveDebug('CREATE DIR: create dir ' + dir + '. Indice: ' + indice2);
            if (dir === undefined) {
              t.scriveDebug('CREATE DIR: all dir created');
              success(root);
    
              if (salvaFile) {
                Files.writeFile2(t, indice);
              }
            } else {
              root.getDirectory(dir, {
                create : true,
                exclusive : false
              }, successCB, failCB);
            }
          };
          
          var successCB = function(entry){
            t.scriveDebug('CREATE DIR: dir created ' + entry.fullPath);
            root = entry;
            if(dirs.length > indice2 - 1){
              createDir();
            }else{
              t.scriveDebug('CREATE DIR: all dir created');
              success(entry);
    
              if (salvaFile) {
                Files.writeFile2(t, indice);
              }
            }
          };
          
          var failCB = function(){
            t.scriveDebug('CREATE DIR: failed to create dir ' + dirs[indice2]);
          };
          
          createDir();
        }  */
    };
    ComponentFile.prototype.writeFile = function (t, indice, path, filename, blob) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var rit, path2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rit = '';
                        ComponentFile_1.pathJson[indice] = path;
                        ComponentFile_1.fileNameJson[indice] = filename;
                        ComponentFile_1.blobJson[indice] = blob;
                        path2 = this.sistemaNomeFile(ComponentFile_1.pathSD + ComponentFile_1.pathJson[indice] + '/' + ComponentFile_1.fileNameJson[indice]);
                        t.scriveDebug('WRITE FILE: Path: ' + path2);
                        return [4 /*yield*/, this.createDir(t, indice, path2, true).then(function (Ritorno) {
                                rit = Ritorno;
                            })];
                    case 1:
                        _a.sent();
                        Ritorno(rit);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ComponentFile.prototype.writeFile2 = function (t, indice) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var path, f, filetto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.sistemaNomeFile(ComponentFile_1.pathSD + ComponentFile_1.pathJson[indice] + '/' + ComponentFile_1.fileNameJson[indice]);
                        t.scriveDebug('CREATE FILE ARR:\nPath: ' + path);
                        f = path.split('/');
                        filetto = f[f.length - 1];
                        path = path.replace(filetto, '');
                        t.scriveDebug('CREATE FILE:\nPath: ' + path + '\nFile: ' + filetto);
                        return [4 /*yield*/, this.file.writeFile(path, filetto, ComponentFile_1.blobJson[indice]).then(function (_) {
                                t.scriveDebug('CREATE FILE Ok');
                                Ritorno('OK');
                            }).catch(function (err) {
                                t.scriveDebug('CREATE FILE Error: ' + JSON.stringify(err));
                                Ritorno('ERRORE: ' + err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        /* document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          const path = Files.sistemaNomeFile(Files.pathSD + Files.pathJson[indice] + '/' + Files.fileNameJson[indice]);
    
          let path2 = '';
          const n = path.split('/');
          for (let i = 0; i < n.length - 1; i++) {
            path2 += n[i] + '/';
          }
          let nome = path.replace(path2, '');
          if (path2.length > 0) {
            path2 = path2.substring(0, path2.length - 1);
          }
          
          t.scriveDebug('WRITE FILE: Scrivo file nella cartella ' + path2 + ' con nome ' + nome + '. Lunghezza: ' + Files.blobJson[indice].length);
          window['resolveLocalFileSystemURL'](
            path2,
            function success(dataDirEntry) {
              dataDirEntry['getFile'](nome, { create: true, exclusive: false }, function (newFileEntry) {
              newFileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function () {
                  t.scriveDebug('WRITE FILE: Scritto file ' + path);
                  // alert('File JSON creato');
                };
    
                fileWriter.onerror = function (e) {
                  t.scriveDebug('WRITE FILE: Errore nella scrittura del JSON: ' + JSON.stringify(e));
                };
    
                const blob = new Blob([Files.blobJson[indice]], { type: newFileEntry.type });
    
                fileWriter.write(blob);
              });
            }, function(e) {
              t.scriveDebug('WRITE FILE: Errore nella creazione del file:' + e.code + '. ' + path);
            });
          }, function error(e) {
            t.scriveDebug('WRITE FILE: Errore nello risolvere la cartella: ' + e.code + ' -> ' + path);
          });
        } */
    };
    ComponentFile.prototype.readFile = function (t, nomeFile, indice) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var path, f, filetto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = nomeFile;
                        f = nomeFile.split('/');
                        filetto = f[f.length - 1];
                        path = path.replace(filetto, '');
                        t.scriveDebug('CREATE FILE: Path: ' + path + ' File: ' + filetto);
                        return [4 /*yield*/, this.file.readAsText(path, filetto).then(function (fileStr) {
                                t.scriveDebug('CREATE FILE Ok');
                                // ComponentFile.fileJSON[indice] = fileStr;
                                Ritorno(fileStr);
                            }).catch(function (err) {
                                t.scriveDebug('CREATE FILE Error: ' + JSON.stringify(err));
                                // ComponentFile.fileJSON[indice] = 'Error: ' + err;
                                Ritorno('ERROR: ' + JSON.stringify(err));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // Files.fileNameJson[indice] = nomeFile;
        /* const path = Files.sistemaNomeFile(nomeFile);
    
        let path2 = '';
        const n = path.split('/');
        for (let i = 0; i < n.length - 1; i++) {
          path2 += n[i] + '/';
        }
        let nome = path.replace(path2, '');
        if (path2.length > 0) {
          path2 = path2.substring(0, path2.length - 1);
        } */
        // alert('Leggo file ' + nomeFile);
        /* t.scriveDebug('READ FILE: Leggo file 1: ' + nomeFile + ' Indice: ' + indice);
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          window['resolveLocalFileSystemURL'](
            Files.fileNameJson[indice],
            function success(fileEntry) {
              fileEntry['file'](function (file) {
                const reader = new FileReader();
                reader.onloadend = function() {
                  const fileData = this.result;
                  Files.fileJSON[indice] = <string>fileData;
                  t.scriveDebug('READ FILE: Letto file. Lunghezza ' + Files.fileJSON[indice].length);
              };
              reader.readAsText(file);
            }, function(e) {
              t.scriveDebug('READ FILE: Errore nell\'apertura del file:' + e.code + '.' + e.message + ' -> ' + nomeFile);
            });
          }, function error(e) {
            t.scriveDebug('READ FILE: Errore nella risoluzione della cartella: ' + e.code + ' -> ' + nomeFile);
          });
        } */
    };
    ComponentFile.eliminaFiles = function (t, indice) {
        return;
        if (ComponentFile_1.giaEliminati === true) {
            return;
        }
        ComponentFile_1.giaEliminati = true;
        // alert('Files totali sulla sd: ' + Files.filesInMemoria.length);
        // alert('Files massimi: ' + t.numeroLimiteBrani);
        if (t.limitaBrani === true) {
            var perc = t.numeroLimiteBrani * 75 / 100;
            if (ComponentFile_1.filesInMemoria.length > perc) {
                var diff = (ComponentFile_1.filesInMemoria.length - perc) + 1;
                // alert('Differenza: ' + diff);
                var quanti = 0;
                var indice_1 = 0;
                var fatti = '';
                while (quanti <= diff) {
                    var x = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                    // alert('Random: ' + x);
                    for (var i = 0; i <= indice_1; i++) {
                        indice_1++;
                        if (indice_1 > ComponentFile_1.filesInMemoria.length) {
                            indice_1 = 0;
                        }
                    }
                    var q = 0;
                    while (fatti.indexOf(';' + indice_1 + ';') > -1 && q < ComponentFile_1.filesInMemoria.length) {
                        q++;
                        indice_1++;
                        if (indice_1 > ComponentFile_1.filesInMemoria.length) {
                            indice_1 = 0;
                        }
                    }
                    // alert('Indice da eliminare: ' + indice + ' ' + quanti + '/' + diff);
                    if (q < ComponentFile_1.filesInMemoria.length) {
                        var path = t.file.sistemaNomeFile(ComponentFile_1.pathSD + ComponentFile_1.filesInMemoria[indice_1]);
                        // alert('Elimino: ' + path);
                        // // this.cancellaFileFisico(indice, path);
                        fatti += ';' + indice_1 + ';';
                    }
                    else {
                        quanti = diff;
                    }
                    quanti++;
                }
                // alert('Fine');
                if (t.deviceGirante === 'Android') {
                    alert('Elimina files 2. Eliminati: ' + quanti);
                }
            }
        }
    };
    ComponentFile.prototype.cancellaFileFisico = function (t, indice, nomeFile) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var path, f, filetto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = nomeFile;
                        f = nomeFile.split('/');
                        filetto = f[f.length - 1];
                        path = path.replace(filetto, '');
                        t.scriveDebug('DELETE FILE: Path: ' + path + ' File: ' + filetto);
                        return [4 /*yield*/, this.file.removeFile(path, filetto).then(function (fileStr) {
                                t.scriveDebug('DELETE FILE Ok');
                                Ritorno('OK');
                            }).catch(function (err) {
                                t.scriveDebug('DELETE FILE Error: ' + JSON.stringify(err));
                                Ritorno('ERRORE: ' + JSON.stringify(err));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        /* Files.fileNameJsonDaEliminare = nomeFile;
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          window['resolveLocalFileSystemURL'](
            Files.fileNameJsonDaEliminare[indice],
            function success(fileEntry) {
              fileEntry.remove(function(){
                  // The file has been removed successfully
              },function(error){
                  // Error deleting the file
              });
            });
        }; */
    };
    ComponentFile.prototype.prendeTuttiIFilesInLocale = function (t, indice) {
        var _this = this;
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var path, f, filetto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = ComponentFile_1.pathSD;
                        f = path.split('/');
                        filetto = f[f.length - 1];
                        path = path.replace(filetto, '');
                        t.letturaSD = true;
                        // ComponentFile.profondita = 0;
                        t.scriveDebug('Inizio lettura SD:\nPath: ' + path + '\nCartella: ' + filetto);
                        return [4 /*yield*/, this.prendeFilesInDir(t, path, filetto, indice)];
                    case 1:
                        _a.sent();
                        // ComponentFile.staLeggendoFiles[indice] = false;
                        t.scriveDebug('Presi tutti i files in locale');
                        t.scriveDebug('Righe: ' + ComponentFile_1.filesInMemoria.length);
                        t.scriveDebug('Riga 1: ' + ComponentFile_1.filesInMemoria[0]);
                        // alert('Elimina i files in più');
                        // ComponentFile.eliminaFiles(t, indice);
                        t.letturaSD = false;
                        // ComponentFile.profondita--;
                        // if (ComponentFile.profondita <= 0) {
                        /* setTimeout(() => {
                          ComponentFile.staLeggendoFiles[indice] = false;
                          t.scriveDebug('Presi tutti i files in locale');
                          t.scriveDebug('Righe: ' + ComponentFile.filesInMemoria.length);
                          t.scriveDebug('Riga 1: ' + ComponentFile.filesInMemoria[0]);
                          // alert('Elimina i files in più');
                  
                          // ComponentFile.eliminaFiles(t, indice);
                          t.caricamentoInCorso = false;
                        }, 3000); */
                        Ritorno('OK');
                        return [2 /*return*/];
                }
            });
        }); });
        // }
    };
    ComponentFile.prototype.prendeFilesInDir = function (t, path, filetto, indice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    path = this.sistemaNomeFile(path);
                                    // t.scriveDebug('READ DIR: Path: ' + path + ' File: ' + filetto);
                                    // t.scriveDebug('READ DIR: Profondità: ' + this.profondita);
                                    return [4 /*yield*/, this.file.listDir(path, filetto).then(function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            var result_1, result_1_1, file, name_1, tutto, e_1_1;
                                            var e_1, _a;
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _b.trys.push([0, 6, 7, 8]);
                                                        result_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result), result_1_1 = result_1.next();
                                                        _b.label = 1;
                                                    case 1:
                                                        if (!!result_1_1.done) return [3 /*break*/, 5];
                                                        file = result_1_1.value;
                                                        if (!(file.isDirectory == true && file.name != '.' && file.name != '..')) return [3 /*break*/, 3];
                                                        t.cartellaEsaminata = file.name;
                                                        return [4 /*yield*/, this.prendeFilesInDir(t, path + filetto + '/', file.name, indice).then(function (Ritorno) {
                                                            })];
                                                    case 2:
                                                        _b.sent();
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        if (file.isFile == true) {
                                                            name_1 = file.name;
                                                            if (name_1.toUpperCase().indexOf('MP3') > -1 || name_1.toUpperCase().indexOf('WMA') > -1) {
                                                                tutto = path + filetto + '/' + name_1;
                                                                // tutto = tutto.replace('file:///', '');
                                                                tutto = tutto.replace(ComponentFile_1.pathSD, '');
                                                                ComponentFile_1.filesInMemoria.push(tutto);
                                                            }
                                                        }
                                                        _b.label = 4;
                                                    case 4:
                                                        result_1_1 = result_1.next();
                                                        return [3 /*break*/, 1];
                                                    case 5: return [3 /*break*/, 8];
                                                    case 6:
                                                        e_1_1 = _b.sent();
                                                        e_1 = { error: e_1_1 };
                                                        return [3 /*break*/, 8];
                                                    case 7:
                                                        try {
                                                            if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                                                        }
                                                        finally { if (e_1) throw e_1.error; }
                                                        return [7 /*endfinally*/];
                                                    case 8: return [2 /*return*/];
                                                }
                                            });
                                        }); }).catch(function (err) {
                                            if (err.indexOf('NOT_FOUND') === -1) {
                                                t.scriveDebug('READ DIR Error ' + JSON.stringify(err));
                                            }
                                        })];
                                case 1:
                                    // t.scriveDebug('READ DIR: Path: ' + path + ' File: ' + filetto);
                                    // t.scriveDebug('READ DIR: Profondità: ' + this.profondita);
                                    _a.sent();
                                    Ritorno('OK');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    var ComponentFile_1;
    ComponentFile.cartelletta = '';
    ComponentFile.pathBrano = '';
    ComponentFile.titolone = '';
    ComponentFile.modalita = '';
    ComponentFile.operazioneSuFile = '';
    ComponentFile.percorsoFileSD = '';
    ComponentFile.percorsoFileSDProssimo = '';
    ComponentFile.filesInMemoria = new Array();
    // static profondita = 0;
    // static staLeggendoFiles = [false, false, false, false, false, false, false, false, false, false, false];
    ComponentFile.percorsoImmagineSD = '';
    ComponentFile.pathJson = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.fileNameJson = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.fileNameJsonDaEliminare = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.blobJson = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.fileJSON = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.giaEliminati = false;
    ComponentFile.esisteFile = ['', '', '', '', '', '', '', '', ''];
    ComponentFile.appoggioFile = '';
    ComponentFile.pathSD = 'file:///storage/emulated/0/';
    ComponentFile.interrompiDownload = false;
    ComponentFile.staScaricandoFile = false;
    ComponentFile.ctorParameters = function () { return [
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] }
    ]; };
    ComponentFile = ComponentFile_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ComponentFile);
    return ComponentFile;
}());



/***/ }),

/***/ "./src/app/varie/gestione_android.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/varie/gestione_android.component.ts ***!
  \*****************************************************/
/*! exports provided: GestioneAndroidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestioneAndroidComponent", function() { return GestioneAndroidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _caricabrano_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caricabrano.component */ "./src/app/varie/caricabrano.component.ts");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files */ "./src/app/varie/files.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");


// import { BackgroundMode } from "@awesome-cordova-plugins/background-mode/ngx";
// import { BackgroundMode } from "@awesome-cordova-plugins/background-mode/ngx";




var GestioneAndroidComponent = /** @class */ (function () {
    function GestioneAndroidComponent(utility, caricaBrano, apiService, file) {
        this.utility = utility;
        this.caricaBrano = caricaBrano;
        this.apiService = apiService;
        this.file = file;
        /* this.backgroundMode.enable();
        this.backgroundMode.setDefaults({ title: "looWebPlayer", text: 'looWebPlayer'});
        this.backgroundMode.on('activate').subscribe(() => {
            this.backgroundMode.disableWebViewOptimizations();
        }); */
    }
    GestioneAndroidComponent.prototype.ngOnInit = function () {
    };
    GestioneAndroidComponent.prototype.ngOnChanges = function () {
    };
    GestioneAndroidComponent.prototype.iniziaTutto = function (t) {
        var _this = this;
        this.frmPrincipale = t;
        if (t.isConnected) {
            // Carica brani da web
            this.utility.caricaJsonBrani(t).then(function (Ritorno) {
                var rit = Ritorno.substring(0, 5);
                // this.utility.scriveDebug(t, 'Ritorno lettura dei brani: ' + rit);
                if (rit !== 'ERROR') {
                    var ok = true;
                    try {
                        t.datiJSON = JSON.parse(Ritorno);
                    }
                    catch (e) {
                        ok = false;
                        _this.apiService.eliminaJSON(t, t.idUtenza)
                            .map(function (response) { return _this.apiService.controllaRitorno(response); })
                            .subscribe(function (data) {
                            alert('Problemi nel leggere il json dei brani. Struttura non valida.\nRiavviare l\'applicazione');
                        });
                    }
                    if (ok) {
                        _this.utility.prosegueCaricaJsonBrani2(t, false);
                        _this.leggeFileBraniLocali(t);
                        _this.utility.filtraBrani(t);
                        t.impostaBellezza();
                        t.leggeTags();
                        _this.caricaBranoDaID(t);
                        t.startTimerScritte();
                        t.caricamentoInCorso = false;
                    }
                }
                else {
                    _this.utility.scriveDebug(t, 'Problemi nella lettura dei brani: ' + Ritorno);
                }
            });
        }
        else {
            // Carica brani locali
            this.caricaJsonBraniDaLocale(t);
        }
    };
    GestioneAndroidComponent.prototype.caricaJsonBraniDaLocale = function (t) {
        var _this = this;
        this.utility.scriveDebug(t, 'Siamo senza connessione. Provo a cercare il file dei brani in locale');
        this.file.checkIfFileExists(this, 'LooigiSoft', 'looWebPlayer/jsonBrani.json').then(function (Ritorno) {
            _this.utility.scriveDebug(t, 'Esiste file locale jsonBrani.json: ' + Ritorno);
            if (Ritorno === 'SI') {
                setTimeout(function () {
                    var path = _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].pathSD + '/LooigiSoft/looWebPlayer/jsonBrani.json';
                    _this.file.readFile(_this, path, 2).then(function (Ritorno) {
                        try {
                            t.datiJSON = JSON.parse(Ritorno);
                            _this.utility.prosegueCaricaJsonBrani2(t, false);
                            _this.leggeFileBraniLocali(t);
                            _this.utility.filtraBrani(_this);
                            t.impostaBellezza();
                            t.leggeTags();
                            _this.caricaBranoDaID(t);
                            t.startTimerScritte();
                            t.caricamentoInCorso = false;
                        }
                        catch (e) {
                            _this.utility.scriveDebug(t, 'Problemi sul dati JSON');
                            return;
                        }
                    });
                }, 100);
            }
        });
    };
    GestioneAndroidComponent.prototype.caricaBranoDaID = function (t) {
        if (t.numeroBrano === 0) {
            t.numeroBrano = 1;
            t.numeroBranoAttuale = 1;
            this.utility.scriveDebug(t, 'Caricato tutto 3. Carico brano ' + t.numeroBrano);
            this.caricaBrano.caricaBrano(t);
            t.ascoltata++;
            t.ascoltati.push(t.numeroBrano);
        }
        else {
            this.utility.scriveDebug(t, 'Caricato tutto 4. Carico brano ' + t.numeroBrano);
            this.caricaBrano.caricaBrano(t);
            t.ascoltata++;
            t.ascoltati.push(t.numeroBrano);
            // console.log(this.variabiliGlobali.urlWS, this.variabiliGlobali.urlPerUpload);
        }
    };
    GestioneAndroidComponent.prototype.leggeFileBraniLocali = function (t) {
        var _this = this;
        var indice = 2;
        _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].fileJSON[indice] = '';
        var path = _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].pathSD + '/LooigiSoft/looWebPlayer/jsonBraniLocali.json';
        // alert('Carico files brani locali ' + path);
        this.file.readFile(this, path, indice).then(function (Ritorno) {
            if (Ritorno.indexOf('ERROR: ') > -1) {
                _this.file.prendeTuttiIFilesInLocale(_this, indice).then(function (Ritorno) {
                    _this.sistemaStrutturaBraniLocali(t, true);
                });
            }
            else {
                t.braniSD = Ritorno;
                _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].filesInMemoria = new Array();
                var b = Ritorno.split('§');
                _this.utility.scriveDebug(t, 'Letto file brani locali: Lungehzza ritorno: ' + Ritorno.length);
                _this.utility.scriveDebug(t, 'Letto file brani locali: Lungehzza array: ' + b.length);
                b.forEach(function (element) {
                    _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].filesInMemoria.push(element);
                });
                // alert('Contenuto file: ' + Files.fileJSON);
                // alert('Struttura file: ' + Files.filesInMemoria.length);
                _this.utility.scriveDebug(t, 'Letto file brani locali: Brani caricati ' + _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].filesInMemoria.length);
                _this.sistemaStrutturaBraniLocali(t, false);
            }
        });
    };
    GestioneAndroidComponent.prototype.sistemaStrutturaBraniLocali = function (t, salva) {
        var _this = this;
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: ' + _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].filesInMemoria.length);
        var id = 90000;
        var brani = '';
        var q = 0;
        var b = new Array();
        _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"].filesInMemoria.forEach(function (element) {
            brani += element + '§';
            var nome = '';
            var traccia = '';
            var path = '';
            var estensione = '';
            var nn = element.split('/');
            var artista = 'Sconosciuto';
            var album = 'Sconosciuto';
            if (element.indexOf('LooigiSoft') > -1) {
                artista = nn[3];
                // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: Tutto ' + nn);
                // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: Artista ' + artista);
                if (nn[4].indexOf('-') > -1) {
                    var alb = nn[4].split('-');
                    album = alb[1];
                }
                else {
                    album = nn[4];
                }
            }
            // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: Artista ' + album);
            nn.forEach(function (element2) {
                if (element2.toUpperCase().indexOf('.MP3') > -1 || element2.toUpperCase().indexOf('.WMA') > -1 && element2.text !== '') {
                    nome = element2;
                    path = element;
                    if (nome.indexOf('-') > -1) {
                        var nn_1 = nome.split('-');
                        traccia = nn_1[0];
                        nome = '';
                        for (var i = 1; i < nn_1.length; i++) {
                            nome += nn_1[i];
                        }
                    }
                    if (nome.indexOf('.') > -1) {
                        for (var i = nome.length - 1; i > 0; i--) {
                            if (estensione === '') {
                                if (nome.substring(i, i + 1) === '.') {
                                    estensione = nome.substring(i, nome.length);
                                    nome = nome.replace(estensione, '');
                                }
                            }
                        }
                    }
                }
            });
            if (nome !== '' && path !== '') {
                var bb = { Artista: artista, Album: album, Ascoltata: 0, Estensione: estensione, id: id, Stelle: 0,
                    path: path, Text: nome, Traccia: traccia !== '' ? traccia : '00' };
                // this.utility.scriveDebug(t, 'Aggiungo brano locale. ID:' + id + ' Path: ' + path);
                // alert(nome + ' - ' + element);
                // alert(JSON.stringify(bb));
                id++;
                q++;
                b.push(bb);
            }
        });
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Aggiunti ' + q);
        if (salva === true) {
            this.file.writeFile(this, 9, 'LooigiSoft', 'looWebPlayer/jsonBraniLocali.json', JSON.stringify(brani)).then(function (Ritorno) {
                _this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Scrittura file brani locali:' + Ritorno);
            });
        }
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Righe prima della modifica: ' + t.datiJSON.length);
        // const n = { text: 'Brani SD', collapsed: true, children: [{ Anno: '0000', collapsed: true, text: 'Locale', children: b }] };
        // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Righe interne struttura: ' + b.length);
        var trovato = false;
        var nonTrovati = new Array();
        q = 0;
        b.forEach(function (branoSuSD) {
            trovato = false;
            if (branoSuSD.Artista !== 'Sconosciuto') {
                // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: Cerco ' + branoSuSD.Artista + ' - ' + branoSuSD.Album + ' - ' + branoSuSD.Text);
                if (trovato === false) {
                    t.datiJSON.forEach(function (element) {
                        if (trovato === false && element.text === branoSuSD.Artista) {
                            // this.utility.scriveDebug(t, 'Artista: ' + element.text + ' - ' + branoSuSD.Artista);
                            var albums = element.children;
                            albums.forEach(function (element2) {
                                if (trovato === false && element2.text === branoSuSD.Album) {
                                    // this.utility.scriveDebug(t, 'Album: ' + element2.text + ' - ' + branoSuSD.Album);
                                    var brani_1 = element2.children;
                                    brani_1.forEach(function (element3) {
                                        if (trovato === false && element3.Text === branoSuSD.Text) {
                                            // this.utility.scriveDebug(t, 'Brano: ' + element3.Text + ' - ' + branoSuSD.Text);
                                            // this.utility.scriveDebug(t, 'TROVATO:  ' + element3.Text);
                                            element3.locale = true;
                                            trovato = true;
                                            q++;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
            if (!trovato) {
                // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali: NON Trovato');
                nonTrovati.push(branoSuSD);
                /* let ce = false;
                this.datiJSON.forEach(element => {
                  if (ce === false && element.text === 'Brani SD') {
                    ce = true;
                  }
                });
                // this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Rilevati nella struttura: ' + ce); */
            }
        });
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Righe Aggiornate: ' + q);
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Righe NON trovate: ' + nonTrovati.length);
        var n = { text: 'Brani SD', collapsed: true, children: [{ Anno: '0000', collapsed: true, text: 'Locale', children: nonTrovati }] };
        try {
            t.datiJSON.push(n);
        }
        catch (e) {
            this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Errore nel riempimento della struttura: ' + JSON.stringify(e));
        }
        this.utility.scriveDebug(t, 'Sistemazione struttura brani locali. Righe dopo la modifica: ' + t.datiJSON.length);
    };
    /*
        // prende brano random di quelli già scaricati
        const x = Math.floor(Math.random() * ComponentFile.filesInMemoria.length);
        const f = ComponentFile.filesInMemoria[x];
        let ff = f;
        ff = ff.substring(ff.indexOf('LooigiSoft'), ff.length);
        // alert(ff);
        const parti = ff.split('/');
        ComponentFile.percorsoFileSD = ComponentFile.pathSD + f;
        // alert('File in locale preso\n' + f);
    
        t.artista = parti[3];
        t.album = parti[4];
        if (t.album.indexOf('-') > -1) {
          const a = t.album.split('-');
          t.anno = a[0];
          t.album = a[1];
        } else {
          t.anno = '0000';
        }
        t.titoloBrano = parti[5];
        if (t.titoloBrano.indexOf('-') > -1) {
          const a = t.titoloBrano.split('-');
          t.traccia = a[0];
          t.titoloBrano = a[1];
        } else {
          t.traccia = '00';
        }
        if (t.titoloBrano.indexOf('.') > -1) {
          const a = t.titoloBrano.split('.');
          t.estensioneBrano = '.' + a[1];
          t.titoloBrano = a[0];
        } else {
          t.estensioneBrano = '';
        }
    
        t.testo = t.artista.toUpperCase() + '<br />' + t.titoloBrano.toUpperCase();
    
        const pathImmagine = t.urlImmagine + 'Immagini/' + t.artista + '/' + t.anno + '-' + t.album + '/Cover_' + t.artista + '.jpg';
        t.immagineBrano = pathImmagine;
        t.immagineSfondo = pathImmagine;
        // alert(pathImmagine);
    
        // this.caricaBrano.prosegueCaricamento(this);
    
        t.imms = new Array();
        t.scritte = new Array();
        this.caricaBrano.prendeScritte(this);
    }        */
    GestioneAndroidComponent.prototype.scaricaProssimoBranoInAutomatico = function (t) {
        t.scaricatoAutomaticamente = true;
        this.utility.scriveDebug(t, 'Avanti brano, cerco nuovo');
        t.numeroBrano = t.prendeNumeroProssimoBrano(1);
        this.utility.scriveDebug(t, 'Avanti brano, prendo nuovo: ' + t.numeroBrano);
        t.caricaBranoAutomatico.resettaErrori(t);
        t.caricaBranoAutomatico.caricaBrano(t);
    };
    GestioneAndroidComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"] },
        { type: _caricabrano_component__WEBPACK_IMPORTED_MODULE_3__["CaricaBranoComponent"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _files__WEBPACK_IMPORTED_MODULE_4__["ComponentFile"] }
    ]; };
    GestioneAndroidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GestioneAndroidComponent);
    return GestioneAndroidComponent;
}());



/***/ }),

/***/ "./src/app/varie/gestonemusica.component.ts":
/*!**************************************************!*\
  !*** ./src/app/varie/gestonemusica.component.ts ***!
  \**************************************************/
/*! exports provided: GestioneMusicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestioneMusicaComponent", function() { return GestioneMusicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var GestioneMusicaComponent = /** @class */ (function () {
    function GestioneMusicaComponent() {
    }
    GestioneMusicaComponent.prototype.ngOnInit = function () {
    };
    GestioneMusicaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GestioneMusicaComponent);
    return GestioneMusicaComponent;
}());



/***/ }),

/***/ "./src/app/varie/happi-dev.component.ts":
/*!**********************************************!*\
  !*** ./src/app/varie/happi-dev.component.ts ***!
  \**********************************************/
/*! exports provided: HappiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappiComponent", function() { return HappiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _musixmatch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./musixmatch.component */ "./src/app/varie/musixmatch.component.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");







var HappiComponent = /** @class */ (function () {
    function HappiComponent(apiService, http, utility, MusixMatch) {
        this.apiService = apiService;
        this.http = http;
        this.utility = utility;
        this.MusixMatch = MusixMatch;
        this.chiave = '6fc0bc7j7XUiCrggzyGJN4mCVDvUA1mo7ylOvhALhgKZxs8oy0wQsfbt';
        this.ultimaVoltaTMS = -1;
    }
    HappiComponent.prototype.ngOnInit = function () {
    };
    HappiComponent.prototype.ngOnChanges = function () {
    };
    HappiComponent.prototype.ngAfterViewInit = function () {
    };
    HappiComponent.prototype.prendeArtista = function (t, idBrano, Artista, Album, Traccia) {
        var _this = this;
        var ora = new Date().getTime();
        if (ora - this.ultimaVoltaTMS < t.ritardoPerFunzioni && this.ultimaVoltaTMS !== -1) {
            return;
        }
        this.ultimaVoltaTMS = ora;
        this.tt = t;
        this.idBranoT = idBrano;
        this.ArtistaT = Artista;
        this.AlbumT = Album;
        this.TracciaT = Traccia;
        var idArtista = -1;
        var idAlbum = -1;
        var idTraccia = -1;
        var lyrics = '';
        if (t.debug === true) {
            console.log('Cerco testo: ', Artista, Album, Traccia);
        }
        this.prendeArtistaGet(t, Artista).subscribe(function (data) {
            var d = JSON.parse(data._body);
            // console.log(d);
            var result = d.result;
            result.forEach(function (element) {
                if (idArtista === -1 && element.artist.trim().toUpperCase().indexOf(Artista.trim().toUpperCase()) > -1) {
                    idArtista = element.id_artist;
                    if (t.debug === true) {
                        console.log('ID Artista:', idArtista);
                    }
                    _this.prendeAlbumGet(t, idArtista).subscribe(function (data2) {
                        var d = JSON.parse(data2._body);
                        var result = d.result.albums;
                        result.forEach(function (element) {
                            if (idAlbum === -1 && element.album.trim().toUpperCase().indexOf(Album.trim().toUpperCase()) > -1) {
                                idAlbum = element.id_album;
                                if (t.debug === true) {
                                    console.log('ID Album:', idAlbum);
                                }
                                _this.prendeTracciaGet(t, idArtista, idAlbum).subscribe(function (data3) {
                                    var d = JSON.parse(data3._body);
                                    // console.log('Tracce', d, Traccia);
                                    var result = d.result.tracks;
                                    result.forEach(function (element) {
                                        if (idTraccia === -1 && element.track.trim().toUpperCase().indexOf(Traccia.trim().toUpperCase()) > -1) {
                                            idTraccia = element.id_track;
                                            if (t.debug === true) {
                                                console.log('ID Traccia:', idTraccia);
                                            }
                                            _this.prendeLyricsGet(t, idArtista, idAlbum, idTraccia).subscribe(function (data4) {
                                                if (data4.ok) {
                                                    var d_1 = JSON.parse(data4._body);
                                                    // console.log(d);
                                                    lyrics = d_1.result.lyrics;
                                                    lyrics = Artista.toUpperCase() + '<br />' + Traccia.toUpperCase() + '<br /><br />' + lyrics;
                                                    t.testo = lyrics;
                                                    t.testoTradotto = '';
                                                    var lyrics2 = lyrics;
                                                    while (lyrics2.indexOf('&') > -1) {
                                                        lyrics2 = lyrics2.replace('&', '-AND-');
                                                    }
                                                    while (lyrics2.indexOf('?') > -1) {
                                                        lyrics2 = lyrics2.replace('?', '-PI-');
                                                    }
                                                    while (lyrics2.indexOf('/') > -1) {
                                                        lyrics2 = lyrics2.replace('/', '-SL-');
                                                    }
                                                    while (lyrics2.indexOf('\\') > -1) {
                                                        lyrics2 = lyrics2.replace('\\', '-CS-');
                                                    }
                                                    while (lyrics2.indexOf('=') > -1) {
                                                        lyrics2 = lyrics2.replace('=', '-UG-');
                                                    }
                                                    while (lyrics2.indexOf('(') > -1) {
                                                        lyrics2 = lyrics2.replace('(', '-PA-');
                                                    }
                                                    while (lyrics2.indexOf(')') > -1) {
                                                        lyrics2 = lyrics2.replace(')', '-PC-');
                                                    }
                                                    while (lyrics2.indexOf('<') > -1) {
                                                        lyrics2 = lyrics2.replace('<', '-MIN-');
                                                    }
                                                    while (lyrics2.indexOf('>') > -1) {
                                                        lyrics2 = lyrics2.replace('>', '-MAX-');
                                                    }
                                                    if (t.debug === true) {
                                                        console.log('Traccia acquisita');
                                                    }
                                                    _this.apiService.ScriveTesto({
                                                        idCanzone: idBrano,
                                                        Testo: lyrics2
                                                    }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                                                        .subscribe(function (data) {
                                                        if (data) {
                                                            var data2_1 = _this.apiService.prendeSoloDatiValidi(data);
                                                            // console.log(data2);
                                                            if (data2_1.indexOf('ERROR:') === -1) {
                                                            }
                                                            else {
                                                            }
                                                        }
                                                    }, function (error) {
                                                    });
                                                    // console.log(lyrics);
                                                }
                                                else {
                                                    // nessuan lyrics rilevata
                                                    _this.MusixMatch.prendeArtista(t, idBrano, Artista, Album, Traccia);
                                                }
                                            });
                                        }
                                    });
                                    if (idTraccia === -1) {
                                        // nessuna traccia rilevata
                                        _this.MusixMatch.prendeArtista(t, idBrano, Artista, Album, Traccia);
                                    }
                                });
                            }
                        });
                        if (idAlbum === -1) {
                            // Nessun album rilevato
                            _this.MusixMatch.prendeArtista(t, idBrano, Artista, Album, Traccia);
                        }
                    });
                }
            });
            if (idArtista === -1) {
                // Nessun artista rilevato
                _this.MusixMatch.prendeArtista(t, idBrano, Artista, Album, Traccia);
            }
        });
    };
    HappiComponent.prototype.prendeArtistaGet = function (t, Artista) {
        var url = 'https://api.happi.dev/v1/music?q=' + Artista + '&limit=&apikey=' + this.chiave + '&type=artist&lyrics=0';
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    HappiComponent.prototype.prendeAlbumGet = function (t, Album) {
        var url = 'https://api.happi.dev/v1/music/artists/' + Album + '/albums?apikey=' + this.chiave;
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    HappiComponent.prototype.prendeTracciaGet = function (t, Artista, Album) {
        var url = 'https://api.happi.dev/v1/music/artists/' + Artista + '/albums/' + Album + '/tracks?apikey=' + this.chiave;
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    HappiComponent.prototype.prendeLyricsGet = function (t, Artista, Album, Traccia) {
        var url = 'https://api.happi.dev/v1/music/artists/' + Artista + '/albums/' + Album + '/tracks/' + Traccia + '/lyrics?apikey=' + this.chiave;
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    HappiComponent.prototype.catchAuthError = function () {
        var _this = this;
        // console.log('Errore: ', self);
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            // console.log('ERRORE Http: ', res);
            if (res.status === 404) {
                _this.MusixMatch.prendeArtista(_this.tt, _this.idBranoT, _this.ArtistaT, _this.AlbumT, _this.TracciaT);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res);
        };
    };
    HappiComponent.ctorParameters = function () { return [
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_6__["UtilityComponent"] },
        { type: _musixmatch_component__WEBPACK_IMPORTED_MODULE_5__["MusixMatchComponent"] }
    ]; };
    HappiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HappiComponent);
    return HappiComponent;
}());



/***/ }),

/***/ "./src/app/varie/musixmatch.component.ts":
/*!***********************************************!*\
  !*** ./src/app/varie/musixmatch.component.ts ***!
  \***********************************************/
/*! exports provided: MusixMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusixMatchComponent", function() { return MusixMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");






var MusixMatchComponent = /** @class */ (function () {
    function MusixMatchComponent(apiService, http, utility) {
        this.apiService = apiService;
        this.http = http;
        this.utility = utility;
        this.chiave = 'e79c8738286330240a3492c4de967cb7';
        this.ultimaVoltaTMS = -1;
    }
    MusixMatchComponent.prototype.ngOnInit = function () {
    };
    MusixMatchComponent.prototype.ngOnChanges = function () {
    };
    MusixMatchComponent.prototype.ngAfterViewInit = function () {
    };
    MusixMatchComponent.prototype.prendeArtista = function (t, idBrano, Artista, Album, Traccia) {
        var _this = this;
        var ora = new Date().getTime();
        if (ora - this.ultimaVoltaTMS < t.ritardoPerFunzioni && this.ultimaVoltaTMS !== -1) {
            return;
        }
        this.ultimaVoltaTMS = ora;
        var idArtista = -1;
        var idAlbum = -1;
        var idTraccia = -1;
        var lyrics = '';
        if (t.debug === true) {
            console.log('Cerco testo: ', Artista, Album, Traccia);
        }
        this.prendeArtistaGet(t, Artista).subscribe(function (data) {
            var d = JSON.parse(data._body);
            // console.log(d);
            var result = d.message.body.artist_list;
            result.forEach(function (element) {
                if (idArtista === -1 && element.artist.artist_name.trim().toUpperCase().indexOf(Artista.trim().toUpperCase()) > -1) {
                    idArtista = element.artist.artist_id;
                    if (t.debug === true) {
                        console.log('ID Artista:', idArtista);
                    }
                    _this.prendeAlbumGet(t, idArtista).subscribe(function (data2) {
                        var d = JSON.parse(data2._body);
                        // console.log(d);
                        var result = d.message.body.album_list;
                        result.forEach(function (element) {
                            if (idAlbum === -1 && element.album.album_name.trim().toUpperCase().indexOf(Album.trim().toUpperCase()) > -1) {
                                idAlbum = element.album.album_id;
                                if (t.debug === true) {
                                    console.log('ID Album:', idAlbum);
                                }
                                _this.prendeTracciaGet(t, idAlbum).subscribe(function (data3) {
                                    var d = JSON.parse(data3._body);
                                    // console.log(d);
                                    var result = d.message.body.track_list;
                                    result.forEach(function (element) {
                                        if (idTraccia === -1 && element.track.track_name.trim().toUpperCase().indexOf(Traccia.trim().toUpperCase()) > -1) {
                                            idTraccia = element.track.track_id;
                                            if (t.debug === true) {
                                                console.log('ID Traccia:', idTraccia);
                                            }
                                            _this.prendeLyricsGet(t, idTraccia).subscribe(function (data4) {
                                                var d = JSON.parse(data4._body);
                                                console.log(d);
                                                return;
                                                if (data4.ok) {
                                                    lyrics = d.result.lyrics;
                                                    lyrics = Artista.toUpperCase() + '<br />' + Traccia.toUpperCase() + '<br /><br />' + lyrics;
                                                    t.testo = lyrics;
                                                    t.testoTradotto = '';
                                                    var lyrics2 = lyrics;
                                                    while (lyrics2.indexOf('&') > -1) {
                                                        lyrics2 = lyrics2.replace('&', '-AND-');
                                                    }
                                                    while (lyrics2.indexOf('?') > -1) {
                                                        lyrics2 = lyrics2.replace('?', '-PI-');
                                                    }
                                                    while (lyrics2.indexOf('/') > -1) {
                                                        lyrics2 = lyrics2.replace('/', '-SL-');
                                                    }
                                                    while (lyrics2.indexOf('\\') > -1) {
                                                        lyrics2 = lyrics2.replace('\\', '-CS-');
                                                    }
                                                    while (lyrics2.indexOf('=') > -1) {
                                                        lyrics2 = lyrics2.replace('=', '-UG-');
                                                    }
                                                    while (lyrics2.indexOf('(') > -1) {
                                                        lyrics2 = lyrics2.replace('(', '-PA-');
                                                    }
                                                    while (lyrics2.indexOf(')') > -1) {
                                                        lyrics2 = lyrics2.replace(')', '-PC-');
                                                    }
                                                    while (lyrics2.indexOf('<') > -1) {
                                                        lyrics2 = lyrics2.replace('<', '-MIN-');
                                                    }
                                                    while (lyrics2.indexOf('>') > -1) {
                                                        lyrics2 = lyrics2.replace('>', '-MAX-');
                                                    }
                                                    if (t.debug === true) {
                                                        console.log('Traccia acquisita');
                                                    }
                                                    _this.apiService.ScriveTesto({
                                                        idCanzone: idBrano,
                                                        Testo: lyrics2
                                                    }).map(function (response) { return _this.apiService.controllaRitorno(response); })
                                                        .subscribe(function (data) {
                                                        if (data) {
                                                            var data2_1 = _this.apiService.prendeSoloDatiValidi(data);
                                                            // console.log(data2);
                                                            if (data2_1.indexOf('ERROR:') === -1) {
                                                            }
                                                            else {
                                                            }
                                                        }
                                                    }, function (error) {
                                                    });
                                                    // console.log(lyrics);
                                                }
                                                else {
                                                    // nessuan lyrics rilevata
                                                }
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    });
                }
            });
        });
    };
    MusixMatchComponent.prototype.prendeArtistaGet = function (t, Artista) {
        var url = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.search?apikey=' + this.chiave + '&q_artist=' + Artista + '&page_size=5';
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    MusixMatchComponent.prototype.prendeAlbumGet = function (t, idArtista) {
        var url = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=' + this.chiave + '&artist_id=' + idArtista + '&s_release_date=desc&g_album_name=1';
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    MusixMatchComponent.prototype.prendeTracciaGet = function (t, idAlbum) {
        var url = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?apikey=' + this.chiave + '&album_id=' + idAlbum + '&page=1&page_size=2';
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    MusixMatchComponent.prototype.prendeLyricsGet = function (t, idTraccia) {
        var url = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=' + this.chiave + '&track_id=' + idTraccia;
        return this.http.get(t, url).catch(this.catchAuthError());
    };
    MusixMatchComponent.prototype.catchAuthError = function () {
        // console.log('Errore: ', self);
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            // console.log('ERRORE Http: ', res);
            if (res.status === 404) {
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res);
        };
    };
    MusixMatchComponent.ctorParameters = function () { return [
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"] }
    ]; };
    MusixMatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MusixMatchComponent);
    return MusixMatchComponent;
}());



/***/ }),

/***/ "./src/app/varie/storage.component.ts":
/*!********************************************!*\
  !*** ./src/app/varie/storage.component.ts ***!
  \********************************************/
/*! exports provided: StorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageComponent", function() { return StorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");



var StorageComponent = /** @class */ (function () {
    function StorageComponent(utility) {
        this.utility = utility;
    }
    StorageComponent.prototype.leggeSettaggi = function (t) {
        var m0 = localStorage.getItem('CheckRicaricaBraniLocali');
        if (m0 === null) {
            t.checkRicaricaBraniLocali = false;
        }
        else {
            t.checkRicaricaBraniLocali = m0 === 'S' ? true : false;
        }
        var m1 = localStorage.getItem('MascheraFiltroBrani');
        if (m1 === null) {
            t.mascheraFiltroBrani = false;
        }
        else {
            t.mascheraFiltroBrani = m1 === 'S' ? true : false;
        }
        var m2 = localStorage.getItem('MascheraBrani');
        if (m2 === null) {
            t.mascheraBrani = false;
        }
        else {
            t.mascheraBrani = m2 === 'S' ? true : false;
        }
        var m3 = localStorage.getItem('MascheraOpzioni');
        if (m3 === null) {
            t.mascheraOpzioni = false;
        }
        else {
            t.mascheraOpzioni = m3 === 'S' ? true : false;
        }
        var m4 = localStorage.getItem('MascheraArtisti');
        if (m4 === null) {
            t.mascheraArtisti = false;
        }
        else {
            t.mascheraArtisti = m4 === 'S' ? true : false;
        }
        var m5 = localStorage.getItem('MascheraTesto');
        if (m5 === null) {
            t.mascheraTesto = false;
        }
        else {
            t.mascheraTesto = m5 === 'S' ? true : false;
        }
        var m6 = localStorage.getItem('ComandiVocaliAttivi');
        if (m6 === null) {
            t.comandiVocaliAttivi = false;
        }
        else {
            t.comandiVocaliAttivi = m6 === 'S' ? true : false;
        }
        t.modalitaYouTube = localStorage.getItem('modalitaYouTube');
        if (t.modalitaYouTube === null) {
            t.modalitaYouTube = 'N';
        }
        // console.log(t.modalitaYouTube);
        var d2 = localStorage.getItem('limita_brani');
        if (d2 === null || d2 === 'S') {
            t.limitaBrani = true;
        }
        var d3 = localStorage.getItem('limite_brani');
        if (d3 !== null) {
            t.numeroLimiteBrani = +d3;
        }
        // console.log(t.debug);
        t.random = localStorage.getItem('random');
        if (t.random === null) {
            t.random = 'S';
        }
        /* t.visuaTesto = localStorage.getItem('visuaTesto');
        if (t.visuaTesto === null) {
          t.visuaTesto = 'S';
        } */
        var n = localStorage.getItem('NumeroStelle');
        if (n === null) {
            t.numeroStelle = 5;
        }
        else {
            t.numeroStelle = +n;
        }
        var mv = localStorage.getItem('maiVotate');
        if (mv === null) {
            t.maiVotate = false;
        }
        else {
            t.maiVotate = mv === 'S' ? true : false;
        }
        var tlc = localStorage.getItem('tutteLeCanzoni');
        /* if (tlc === null) {
          t.tutteLeCanzoni = true;
        } else {
          if (tlc === 'S') {
            t.tutteLeCanzoni = true;
          } else {
            t.tutteLeCanzoni = false;
          }
        } */
        t.sfuma = localStorage.getItem('sfuma') === 'S' ? true : false;
        t.cicla = localStorage.getItem('cicla') === 'S' ? true : false;
        /* t.ultimoFiltro = localStorage.getItem('Dati_' + tlc);
        if (t.ultimoFiltro !== null) {
          t.ultimoFiltroArray = t.ultimoFiltro.split(',');
        } else {
          t.ultimoFiltroArray = new Array();
        }
        console.log('Impostato ultimo filtro 0', t.ultimoFiltroArray); */
        t.linguaggio = localStorage.getItem('linguaggio');
        if (t.linguaggio === null) {
            t.linguaggio = 'OR';
        }
        if (t.linguaggio === 'OR') {
            t.linguaggioIcona = 'assets/immagini/inglese.png';
        }
        else {
            t.linguaggioIcona = 'assets/immagini/italiano.png';
        }
        var d = localStorage.getItem('debug');
        if (d === null || d === 'S') {
            t.debug = true;
        }
        var tt = localStorage.getItem('tagsRicerca');
        if (tt === null) {
            t.tagsRicerca = {};
        }
        else {
            t.tagsRicerca = JSON.parse(tt);
        }
        var f = localStorage.getItem('FiltroTesto');
        if (f === null) {
            t.filtroImpostato = '';
        }
        else {
            t.filtroImpostato = f;
        }
        t.visuaTagBrano = localStorage.getItem('visuaTagBrano') === 'S' ? true : false;
        var ee = localStorage.getItem('esclusioni');
        if (ee === null) {
            t.esclusioni = '';
        }
        else {
            t.esclusioni = ee;
        }
    };
    StorageComponent.prototype.cambiaFiltro2 = function (t, e) {
        // if (e.length > 2) {
        // console.log(e);
        t.filtroImpostato = e;
        localStorage.setItem('FiltroTesto', t.filtroImpostato);
        // this.checkTutteLeCanzoni(t);
        /* } else {
          if (e === '') {
            t.filtroImpostato = '';
            this.checkTutteLeCanzoni(t);
          }
        } */
    };
    StorageComponent.prototype.cambiaEsclusioni = function (t, e) {
        // if (e.length > 2) {
        // console.log(e);
        t.esclusioni = e;
        localStorage.setItem('esclusioni', t.esclusioni);
        // this.checkTutteLeCanzoni(t);
        /* } else {
          if (e === '') {
            t.filtroImpostato = '';
            this.checkTutteLeCanzoni(t);
          }
        } */
    };
    StorageComponent.prototype.checkVisuaTagBrano = function (t, e) {
        if (e === false) {
            t.visuaTagBrano = false;
        }
        else {
            t.visuaTagBrano = e.srcElement.checked;
        }
        localStorage.setItem('visuaTagBrano', t.visuaTagBrano === true ? 'S' : 'N');
    };
    StorageComponent.prototype.checkCanzoniMamma = function (t, e) {
        t.canzoniMamma = e.srcElement.checked;
        if (t.canzoniMamma === true) {
            t.consideraStelle = false;
        }
        localStorage.setItem('CanzoniMamma', t.canzoniMamma === true ? 'S' : 'N');
        this.checkTutteLeCanzoni(t);
    };
    StorageComponent.prototype.checkEliminaMamma = function (t, e) {
        t.eliminaMamma = e.srcElement.checked;
        localStorage.setItem('TutteCanzoni', t.eliminaMamma === true ? 'S' : 'N');
        this.checkTutteLeCanzoni(t);
    };
    StorageComponent.prototype.checkSoloCanzoniLocali = function (t, e) {
        if (t.isConnected === true) {
            t.canzoniLocali = e.srcElement.checked;
            if (t.consideraStelle === true) {
                t.vecchioConsideraStelle = t.consideraStelle;
                t.consideraStelle = false;
            }
            else {
                if (t.vecchioConsideraStelle === undefined) {
                    var v = localStorage.getItem('ConsideraStelle');
                    t.vecchioConsideraStelle = v === 'S' ? true : false;
                }
                t.consideraStelle = t.vecchioConsideraStelle;
            }
            localStorage.setItem('CanzoniLocali', t.canzoniLocali === true ? 'S' : 'N');
            this.checkTutteLeCanzoni(t);
        }
        else {
            t.canzoniLocali = true;
        }
    };
    StorageComponent.prototype.checkConsideraStelle = function (t, e) {
        if (t.isConnected === true) {
            t.consideraStelle = e.srcElement.checked;
            localStorage.setItem('ConsideraStelle', t.consideraStelle === true ? 'S' : 'N');
            this.checkTutteLeCanzoni(t);
        }
        else {
            t.canzoniLocali = true;
        }
    };
    StorageComponent.prototype.cambiaStelle = function (t, e) {
        if (e < 0 || e > 10) {
            alert('Valore non valido');
            t.numeroStelle = 5;
            return;
        }
        t.numeroStelle = e;
        localStorage.setItem('NumeroStelle', t.numeroStelle.toString());
        this.checkTutteLeCanzoni(t);
    };
    StorageComponent.prototype.checkMaiVotate = function (t, e) {
        t.maiVotate = e.srcElement.checked;
        localStorage.setItem('maiVotate', t.maiVotate === true ? 'S' : 'N');
        this.checkTutteLeCanzoni(t);
    };
    StorageComponent.prototype.checkTutteLeCanzoni = function (t) {
        setTimeout(function () {
            // const filtro = chi;
            // t.tutteLeCanzoni = e.srcElement.checked;
            // t.filtraBrani();
            /* t.ultimoFiltro = localStorage.getItem('Dati_' + t.tutteLeCanzoni);
            if (t.ultimoFiltro !== null) {
              t.ultimoFiltroArray = t.ultimoFiltro.split(',');
            } else {
              t.ultimoFiltroArray = new Array();
            } */
            t.utility.filtraBrani(t);
        }, 10);
    };
    StorageComponent.prototype.checkComandiVocali = function (t, e) {
        if (e.srcElement) {
            t.comandiVocaliAttivi = e.srcElement.checked;
        }
        else {
            t.comandiVocaliAttivi = e;
        }
        localStorage.setItem('ComandiVocaliAttivi', t.comandiVocaliAttivi === true ? 'S' : 'N');
        if (t.comandiVocaliAttivi === true) {
            t.speechService.init(this);
            t.speechService.start();
        }
        else {
            t.speechService.stop();
        }
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkFiltroBrani = function (t, e) {
        if (e.srcElement) {
            t.mascheraFiltroBrani = e.srcElement.checked;
        }
        else {
            t.mascheraFiltroBrani = e;
        }
        localStorage.setItem('MascheraFiltroBrani', t.mascheraFiltroBrani === true ? 'S' : 'N');
        this.utility.scriveDebug(t, 'Filtro brani: ' + t.mascheraFiltroBrani);
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkBrani = function (t, e) {
        if (!e.srcElement) {
            t.mascheraBrani = e;
        }
        else {
            t.mascheraBrani = e.srcElement.checked;
        }
        localStorage.setItem('MascheraBrani', t.mascheraBrani === true ? 'S' : 'N');
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkTesto = function (t, e) {
        if (!e.srcElement) {
            t.mascheraTesto = e;
        }
        else {
            t.mascheraTesto = e.srcElement.checked;
        }
        localStorage.setItem('MascheraTesto', t.mascheraTesto === true ? 'S' : 'N');
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkOpzioni = function (t, e) {
        if (!e.srcElement) {
            t.mascheraOpzioni = e;
        }
        else {
            t.mascheraOpzioni = e.srcElement.checked;
        }
        localStorage.setItem('MascheraOpzioni', t.mascheraOpzioni === true ? 'S' : 'N');
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkArtisti = function (t, e) {
        if (!e.srcElement) {
            t.mascheraArtisti = e;
        }
        else {
            t.mascheraArtisti = e.srcElement.checked;
        }
        localStorage.setItem('MascheraArtisti', t.mascheraArtisti === true ? 'S' : 'N');
        this.gestisceFinestre();
    };
    StorageComponent.prototype.checkAbout = function (t, e) {
        if (!e.srcElement) {
            t.mascheraAbout = e;
        }
        else {
            t.mascheraAbout = e.srcElement.checked;
        }
    };
    StorageComponent.prototype.checkDebug = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            t.debug = e.srcElement.checked;
            localStorage.setItem('debug', t.debug === true ? 'S' : 'N');
            // console.log(sfuma, this.sfuma);
        }, 100);
    };
    StorageComponent.prototype.checkRicarica = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            t.checkRicaricaBraniLocali = e.srcElement.checked;
            localStorage.setItem('CheckRicaricaBraniLocali', t.checkRicaricaBraniLocali === true ? 'S' : 'N');
            // console.log(sfuma, this.sfuma);
        }, 100);
    };
    StorageComponent.prototype.checkLimitaBrani = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            t.limitaBrani = e.srcElement.checked;
            localStorage.setItem('limita_brani', t.limitaBrani === true ? 'S' : 'N');
            // console.log(sfuma, this.sfuma);
        }, 100);
    };
    StorageComponent.prototype.cambiaLimiteBrani = function (t, e) {
        if (e.length > 0) {
            // console.log(e);
            t.numeroLimiteBrani = +e;
            localStorage.setItem('limite_brani', t.numeroLimiteBrani.toString());
        }
        else {
            alert('Valore non valido');
        }
    };
    StorageComponent.prototype.checkRandom = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            if (e.srcElement.checked === true) {
                t.random = 'S';
            }
            else {
                t.random = 'N';
            }
            localStorage.setItem('random', t.random);
        }, 100);
    };
    /* checkVisuaTesto(e) {
      setTimeout(() => {
        // console.log(e.srcElement.checked);
        if (e.srcElement.checked === true) {
          this.visuaTesto = 'S';
        } else {
          this.visuaTesto = 'N';
        }
        localStorage.setItem('visuaTesto', this.visuaTesto);
      }, 100);
    } */
    StorageComponent.prototype.checkSfumaImmagini = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            var sfuma;
            if (e.srcElement.checked === true) {
                sfuma = 'S';
            }
            else {
                sfuma = 'N';
            }
            t.sfuma = e.srcElement.checked;
            localStorage.setItem('sfuma', sfuma);
            // console.log(sfuma, this.sfuma);
        }, 100);
    };
    StorageComponent.prototype.checkCiclaImmagini = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            var cicla;
            if (e.srcElement.checked === true) {
                cicla = 'S';
                t.startTimerImmagine();
            }
            else {
                if (t.intervalImmagine) {
                    clearInterval(t.intervalImmagine);
                }
                cicla = 'N';
            }
            t.cicla = e.srcElement.checked;
            localStorage.setItem('cicla', cicla);
            // console.log(sfuma, this.sfuma);
        }, 100);
    };
    StorageComponent.prototype.checkModalitaYouTube = function (t, e) {
        setTimeout(function () {
            // console.log(e.srcElement.checked);
            if (e.srcElement.checked === true) {
                t.modalitaYouTube = 'S';
                if (t.videoNONCaricato === true) {
                    if (t.videoplayer && t.modalitaYouTube === 'S') {
                        setTimeout(function () {
                            t.videoplayer.playVideo();
                        }, 100);
                    }
                }
                else {
                    if (t.videoplayerLocale && t.modalitaYouTube === 'S') {
                        // this.videoplayerLocale.nativeElement.mute();
                        setTimeout(function () {
                            t.videoplayerLocale.nativeElement.play();
                        }, 100);
                    }
                }
            }
            else {
                t.modalitaYouTube = 'N';
                if (t.videoNONCaricato === true) {
                    if (t.videoplayer && t.modalitaYouTube === 'S') {
                        setTimeout(function () {
                            t.videoplayer.stopVideo();
                        }, 100);
                    }
                }
                else {
                    if (t.videoplayerLocale && t.modalitaYouTube === 'S') {
                        // this.videoplayerLocale.nativeElement.mute();
                        setTimeout(function () {
                            t.videoplayerLocale.nativeElement.stop();
                        }, 100);
                    }
                }
            }
            localStorage.setItem('modalitaYouTube', t.modalitaYouTube);
        }, 100);
    };
    StorageComponent.prototype.pulisceCookies = function () {
        if (confirm('Si vogliono eliminare tutti i cookies')) {
            // localStorage.removeItem('utenza');
            // localStorage.removeItem('idUtenza');
            // localStorage.removeItem('bellezzeJSON');
            localStorage.removeItem('Dati_S');
            localStorage.removeItem('Dati_F');
            localStorage.removeItem('Dati_M');
            localStorage.removeItem('tutteLeCanzoni');
            localStorage.removeItem('CanzoniMamma');
            localStorage.removeItem('TutteCanzoni');
            localStorage.removeItem('numero_brano');
            localStorage.removeItem('idUtenza');
            localStorage.removeItem('filtro');
            localStorage.removeItem('utenza');
            localStorage.removeItem('tipoUtente');
            localStorage.removeItem('sfuma');
            localStorage.removeItem('cicla');
            localStorage.removeItem('random');
            localStorage.removeItem('visuaTesto');
            localStorage.removeItem('modalitaYouTube');
            localStorage.removeItem('linguaggio');
            localStorage.removeItem('tagsRicerca');
            window.location.reload();
        }
    };
    StorageComponent.prototype.gestisceFinestre = function () {
    };
    StorageComponent.prototype.checkTagsRicerca = function (t, e) {
        t.tagsRicerca = e;
        localStorage.setItem('tagsRicerca', JSON.stringify(e));
        this.checkTutteLeCanzoni(t);
    };
    StorageComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_2__["UtilityComponent"] }
    ]; };
    StorageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageComponent);
    return StorageComponent;
}());



/***/ }),

/***/ "./src/app/varie/utility.component.ts":
/*!********************************************!*\
  !*** ./src/app/varie/utility.component.ts ***!
  \********************************************/
/*! exports provided: UtilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityComponent", function() { return UtilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ "./src/app/services/api2.service.ts");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpclient.service */ "./src/app/services/httpclient.service.ts");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files */ "./src/app/varie/files.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var UtilityComponent = /** @class */ (function () {
    function UtilityComponent(datePipe, file, apiService, http) {
        this.datePipe = datePipe;
        this.file = file;
        this.apiService = apiService;
        this.http = http;
    }
    UtilityComponent.prototype.ngOnInit = function () {
    };
    UtilityComponent.prototype.parsaTesto = function (form, cosa) {
        console.log('Comando vocale da parsare: ', cosa);
        if (!cosa || cosa === undefined || cosa === 'undefined' || cosa === '') {
            return;
        }
        switch (cosa.toUpperCase().trim()) {
            case 'PLAY':
                if (form.staSuonando === false) {
                    form.scriveDebug('Arrivato comando vocale play');
                    form.play(true);
                }
                break;
            case 'STOP':
                if (form.staSuonando === true) {
                    form.scriveDebug('Arrivato comando vocale stop');
                    form.play(false);
                }
                break;
            case 'INDIETRO':
                form.scriveDebug('Arrivato comando vocale indietro');
                form.indietroBrano();
                break;
            case 'AVANTI':
                form.scriveDebug('Arrivato comando vocale avanti');
                form.avantiBrano();
                break;
        }
    };
    UtilityComponent.prototype.filtraBrani = function (t) {
        var _this = this;
        t.maxID = 0;
        var filtro = t.filtroImpostato;
        if (filtro === ';') {
            filtro = '';
        }
        // console.log(t.datiJSON);
        t.utility.scriveDebug(t, 'Filtra brani - Numero righe: ' + t.datiJSON.length);
        t.utility.scriveDebug(t, 'Filtra brani - Filtro: ' + filtro);
        t.utility.scriveDebug(t, 'Filtra brani - Stelle: ' + t.consideraStelle);
        t.utility.scriveDebug(t, 'Filtra brani - Mai Votate: ' + t.maiVotate);
        t.utility.scriveDebug(t, 'Filtra brani - Numero Stelle: ' + t.numeroStelle);
        t.utility.scriveDebug(t, 'Filtra brani - Tags Ricerca: ' + JSON.stringify(t.tagsRicerca));
        t.utility.scriveDebug(t, 'Filtra brani - Esclusioni: ' + t.esclusioni);
        // if ((!filtro || filtro === null || filtro === '') && !t.eliminaMamma && !t.consideraStelle && t.canzoniMamma === false) {
        //     t.braniFiltrati = t.datiJSON;
        // } else {
        t.braniFiltrati = new Array();
        t.quantiBraniFiltrati = 0;
        if (!filtro) {
            filtro = '';
        }
        if (filtro.indexOf(';') === -1) {
            filtro += ';';
        }
        if (!t.esclusioni) {
            t.esclusioni = '';
        }
        if (t.canzoniMamma === true) {
            filtro = 'MP3MIC;MP3ANGEL;' + filtro;
        }
        // console.log('Filtro', filtro);
        var f = filtro.split(';');
        var esclusioni = t.esclusioni.split(';');
        if (t.datiJSON) {
            t.utility.scriveDebug(t, 'Filtra brani - 1');
            t.datiJSON.forEach(function (element) {
                var ok = false;
                var tr = undefined;
                var fai = true;
                if (t.eliminaMamma === true) {
                    // console.log('Controllo', element.text);
                    if (element.text.toUpperCase().indexOf('MP3MIC') > -1 || element.text.toUpperCase().indexOf('MP3ANGEL') > -1) {
                        fai = false;
                        // console.log('Skippo', element.text);
                    }
                }
                if (t.canzoniLocali === true) {
                    if (element.text !== 'Brani SD') {
                        fai = false;
                    }
                }
                if (fai) {
                    // console.log('Vado ', element.text)
                    element.children.forEach(function (element2) {
                        // console.log(element2);
                        element2.children.forEach(function (element3) {
                            // console.log(element2);
                            // if (t.eliminaMamma || t.consideraStelle) {
                            if (_this.controllaFiltro(element.text + element2.text + element3.Text, f) === true) {
                                var ok1 = true;
                                // const numeroStelleBrano = this.ritornaStelleBrano(t, element3.id, false);
                                var numeroStelleBrano = element3.Stelle;
                                // console.log('Passato filtro testo', element3.Text, numeroStelleBrano);
                                if (t.consideraStelle === true && t.maiVotate === false) {
                                    if (+t.numeroStelle > numeroStelleBrano) {
                                        // console.log(this.numeroStelle, element3, element3.Stelle);
                                        ok1 = false;
                                    }
                                }
                                else {
                                    // console.log(this.consideraStelle, this.maiVotate);
                                    if (t.consideraStelle === true && t.maiVotate === true) {
                                        // console.log(element3.Stelle);
                                        var locale = element3.locale;
                                        // const path = element3.path.toUpperCase();
                                        if (numeroStelleBrano > 0 || locale === true) {
                                            ok1 = false;
                                        }
                                    }
                                }
                                if (ok1) {
                                    // console.log(element3, element3.Stelle);
                                    var q_1 = 0;
                                    // const numeroArtista = 0;
                                    if (!tr) {
                                        var artista = {
                                            children: undefined,
                                            collapsed: true,
                                            text: element.text,
                                        };
                                        tr = artista;
                                        // numeroArtista = 0;
                                        // } else {
                                        // tr[numeroArtista] = artista;
                                    }
                                    if (!tr.children) {
                                        tr.children = new Array();
                                    }
                                    q_1 = 0;
                                    var numeroAlbum_1 = -1;
                                    if (tr.children) {
                                        tr.children.forEach(function (element4) {
                                            if (numeroAlbum_1 === -1) {
                                                if (element4.text === element2.text) {
                                                    numeroAlbum_1 = q_1;
                                                }
                                            }
                                            q_1++;
                                        });
                                    }
                                    var an = element2.Anno;
                                    if (!an || an === '') {
                                        an = '0000';
                                    }
                                    for (var i = an.length + 1; i <= 4; i++) {
                                        an = '0' + an;
                                    }
                                    var album = {
                                        children: undefined,
                                        collapsed: true,
                                        text: element2.text,
                                        anno: an,
                                    };
                                    if (numeroAlbum_1 === -1) {
                                        tr.children.push(album);
                                        numeroAlbum_1 = tr.children.length - 1;
                                        // } else {
                                        // tr.children[numeroAlbum] = album;
                                    }
                                    // console.log(numeroAlbum, tr);
                                    if (!tr.children[numeroAlbum_1].children) {
                                        tr.children[numeroAlbum_1].children = new Array();
                                    }
                                    // console.log(element3);
                                    var scrive_1 = true;
                                    if (scrive_1) {
                                        // Controllo tags
                                        if (t.tagsRicerca.length > 0) {
                                            var tagsBrano_1 = new Array();
                                            var dd = element3.Tags.split('§');
                                            dd.forEach(function (element) {
                                                if (element && element !== '') {
                                                    var d2 = element.split(';');
                                                    var tt = {
                                                        Progressivo: +d2[0],
                                                        idTag: +d2[1],
                                                        Tag: d2[2]
                                                    };
                                                    tagsBrano_1.push(tt);
                                                }
                                            });
                                            var quanti_1 = 0;
                                            tagsBrano_1.forEach(function (element6) {
                                                if (scrive_1) {
                                                    t.tagsRicerca.forEach(function (element5) {
                                                        var ele = element5.replace("'", "").replace("'", "").replace("\"", "").replace("\"", "");
                                                        // console.log(element3.Text, element6.Tag, ele);
                                                        if (element6.Tag === ele) {
                                                            quanti_1++;
                                                        }
                                                    });
                                                }
                                            });
                                            if (quanti_1 === 0) {
                                                tr = undefined;
                                                scrive_1 = false;
                                            }
                                        }
                                        // Controllo tags
                                        if (scrive_1) {
                                            // Esclusioni
                                            if (esclusioni.length > 0) {
                                                var tutto_1 = (element.text + element2.text + element3.Text).toUpperCase().trim();
                                                // console.log(tutto);
                                                esclusioni.forEach(function (element7) {
                                                    if (scrive_1 === true && element7 && element7 !== '') {
                                                        // console.log('Controllo esculsioni', tutto, element7.toUpperCase().trim());
                                                        if (scrive_1 === true && tutto_1.indexOf(element7.toUpperCase().trim()) > -1) {
                                                            // console.log('Escludo', tutto, element7.toUpperCase().trim());
                                                            scrive_1 = false;
                                                            tr = undefined;
                                                        }
                                                    }
                                                });
                                            }
                                            // Esclusioni
                                            if (scrive_1) {
                                                var tra = element3.Traccia;
                                                if (!tra || tra === '') {
                                                    tra = '00';
                                                }
                                                if (tra.length === 1) {
                                                    tra = '0' + tra;
                                                }
                                                tr.children[numeroAlbum_1].children.push({
                                                    id: element3.id,
                                                    text: element3.Text,
                                                    traccia: tra,
                                                    // value: element3.value,
                                                    stelle: element3.Stelle,
                                                    estensione: element3.Estensione,
                                                    ascoltata: +element3.Ascoltata,
                                                    locale: element3.locale === undefined ? false : element3.locale,
                                                    path: element3.path,
                                                    tags: element3.Tags
                                                });
                                                t.quantiBraniFiltrati++;
                                                ok = true;
                                            }
                                        }
                                    }
                                    // console.log(element3);
                                    // console.log(element3.Stelle);
                                    // this.ultimoFiltro += element3.value + ',';
                                }
                            }
                            // }
                        });
                    });
                }
                if (ok) {
                    // console.log(tr);
                    // const t: TreeviewItem = new TreeviewItem(tr);
                    // this.itemsCanzoniFiltrate.push(t);
                    if (tr) {
                        t.braniFiltrati.push(tr);
                    }
                }
            });
        }
        // }
        /* if (t.deviceGirante === 'Android') {
          t.file.writeFile(this, 4, 'LooigiSoft', 'looWebPlayer/TuttoILJSON.json', JSON.stringify(t.datiJSON)).then((Ritorno) => {
            t.utility.scriveDebug(t, 'Scritto file Tutto il JSON');
            t.file.writeFile(this, 4, 'LooigiSoft', 'looWebPlayer/BraniFiltrati.json', JSON.stringify(t.braniFiltrati)).then((Ritorno) => {
              t.utility.scriveDebug(t, 'Scritto file Brani Filtrati');
            });
          });
        } */
        t.utility.scriveDebug(t, 'Filtra brani - Quanti Brani filtrati: ' + t.quantiBraniFiltrati);
        // t.quantiBraniFiltrati = this.contaBrani(t);
        t.utility.scriveDebug(t, 'Filtra brani - Brani filtrati: ' + t.braniFiltrati.length);
        // console.log(t.braniFiltrati);
        // this.creaHTMLBrani(t);
    };
    UtilityComponent.prototype.effettuaReplace = function (str, find, replace) {
        var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        return str.replace(new RegExp(escapedFind, 'g'), replace);
    };
    UtilityComponent.prototype.creaMatrice = function (x, y, valore) {
        var m = new Array();
        for (var i = 0; i <= x; i++) {
            m.push(new Array());
            m[i][0] = false;
            for (var j = 1; j <= y + 1; j++) {
                m[i].push(valore);
            }
        }
        // console.log(m);
        return m;
    };
    UtilityComponent.prototype.controllaFiltro = function (daDove, cosa) {
        var ok = false;
        var ceFiltro = false;
        cosa.forEach(function (element) {
            if (element !== '') {
                ceFiltro = true;
            }
        });
        if (!ceFiltro) {
            return true;
        }
        // console.log('Filtro', daDove, cosa);
        cosa.forEach(function (element) {
            if (element && element !== '') {
                var ele = element.replace("'", "").replace("'", "").replace("\"", "").replace("\"", "").toUpperCase().trim();
                if (ok === false) {
                    // console.log(daDove, ele);
                    if (daDove.toUpperCase().indexOf(ele) > -1) {
                        // console.log(daDove, element);
                        ok = true;
                    }
                }
            }
        });
        return ok;
    };
    UtilityComponent.prototype.ritornaStelleBrano = function (t, n, debug) {
        if (!t.datiJSON) {
            return;
        }
        var valore = -1;
        t.datiJSON.forEach(function (element) {
            if (valore === -1) {
                element.children.forEach(function (element2) {
                    if (valore === -1) {
                        element2.children.forEach(function (element3) {
                            if (valore === -1) {
                                if (element3.id === t.numeroBrano) {
                                    valore = element3.Stelle;
                                }
                            }
                        });
                    }
                });
            }
        });
        /* let r = t.datiJSON.filter(x => +x.id === +n); */
        /* if (r && r[0]) {
          valore = +r[0].B;
        } else {
          console.log('Nessuna bellezza rilevata per il brano ', n);
        } */
        return valore;
    };
    UtilityComponent.prototype.visualizzaMessaggio = function (t, messaggio, errore) {
        if (errore === false) {
            t.coloreSfondoMessaggio = 'rgb(237, 255, 134)';
        }
        else {
            t.coloreSfondoMessaggio = 'rgb(255, 237, 134)';
        }
        t.messaggio = messaggio;
        t.messaggioVisualizzato = true;
        if (t.timerMessaggio) {
            clearInterval(t.timerMessaggio);
        }
        t.timerMessaggio = setInterval(function () {
            t.messaggioVisualizzato = false;
        }, 5000);
    };
    UtilityComponent.prototype.scriveImmagineSeNonEsiste = function (t, artista, album, nome, blob) {
        var indice = 1;
        _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].esisteFile[indice] = '';
        var cartellaJSON1 = 'LooigiSoft';
        var nomeFileJSON1 = 'looWebPlayer/Immagini/' + artista + '/' + album + '/' + nome;
        t.utility.scriveDebug(t, 'Esiste file immagine ' + nomeFileJSON1 + ' per scrittura');
        t.file.checkIfFileExists(t, indice, cartellaJSON1, nomeFileJSON1).then(function (Ritorno) {
            t.utility.scriveDebug(t, 'Esiste file immagine ' + nomeFileJSON1 + ': ' + Ritorno);
            if (Ritorno !== 'SI') {
                t.file.writeFile(t, indice, 'LooigiSoft', 'looWebPlayer/Immagini/' + artista + '/' +
                    album + '/' + nome, blob);
            }
        });
        ;
        /* let q = 0;
        const t1 = setInterval(() => {
          if (ComponentFile.esisteFile[indice] !== '') {
            clearInterval(t1);
            if (ComponentFile.esisteFile[indice] === 'SI') {
            } else {
              t.file.writeFile(t, indice, 'LooigiSoft', 'looWebPlayer/Immagini/' + artista + '/' +
                album + '/' + nome, blob);
            }
          }
        }); */
    };
    UtilityComponent.prototype.leggeImmagineSeEsiste = function (t, artista, album, nome) {
        var indice = 2;
        _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].esisteFile[indice] = '';
        var cartellaJSON1 = 'LooigiSoft';
        var nomeFileJSON1 = 'looWebPlayer/Immagini/' + artista + '/' + album + '/' + nome;
        t.utility.scriveDebug(t, 'Esiste file immagine ' + nomeFileJSON1 + ' per lettura');
        t.file.checkIfFileExists(t, indice, cartellaJSON1, nomeFileJSON1).then(function (Ritorno) {
            t.utility.scriveDebug(t, 'Esiste file immagine ' + nomeFileJSON1 + ': ' + Ritorno);
            if (Ritorno === 'SI') {
                // Carica immagine
                var indice_1 = 5;
                _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].fileJSON[indice_1] = '';
                var path = t.file.sistemaNomeFile(_files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].pathSD + '/LooigiSoft/Immagini/' + artista + '/' + album + '/' + nome);
                t.file.readFile(t, path, indice_1).then(function (Ritorno) {
                    t.immagineSfondo = Ritorno;
                    t.immagineBrano = Ritorno;
                });
                /* const si = setInterval(() => {
                  if (ComponentFile.fileJSON[indice] !== '') {
                    clearInterval(si);
            
                    t.immagineSfondo = ComponentFile.fileJSON[indice];
                    t.immagineBrano = ComponentFile.fileJSON[indice];
                  }
                }); */
            }
        });
        /* let q = 0;
        const t1 = setInterval(() => {
          if (ComponentFile.esisteFile[indice] !== '') {
            clearInterval(t1);
            if (ComponentFile.esisteFile[indice] === 'SI') {
              // Carica immagine
              const indice = 5;
              ComponentFile.fileJSON[indice] = '';
              const path = t.file.sistemaNomeFile(ComponentFile.pathSD + '/LooigiSoft/Immagini/' + artista + '/' + album + '/' + nome);
              t.file.readFile(t, path, indice);
              const si = setInterval(() => {
                if (ComponentFile.fileJSON[indice] !== '') {
                  clearInterval(si);
          
                  t.immagineSfondo = ComponentFile.fileJSON[indice];
                  t.immagineBrano = ComponentFile.fileJSON[indice];
                }
              });
            }
          }
        }); */
    };
    UtilityComponent.prototype.scriveTestoSeNonEsiste = function (t, artista, album, nome, blob) {
        var indice = 7;
        _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].esisteFile[indice] = '';
        var cartellaJSON1 = 'LooigiSoft';
        var nomeFileJSON1 = 'looWebPlayer/Testi/' + artista + '/' + album + '/' + nome + '.txt';
        t.utility.scriveDebug(t, 'Esiste file testo ' + nomeFileJSON1 + ' per scrittura');
        t.file.checkIfFileExists(t, indice, cartellaJSON1, nomeFileJSON1).then(function (Ritorno) {
            t.utility.scriveDebug(t, 'Esiste file testo ' + nomeFileJSON1 + ': ' + Ritorno);
            if (Ritorno !== 'SI') {
                t.file.writeFile(t, indice, 'LooigiSoft', 'looWebPlayer/Testi/' + artista + '/' +
                    album + '/' + nome + '.txt', blob);
            }
        });
        /* let q = 0;
        const t1 = setInterval(() => {
          if (ComponentFile.esisteFile[indice] !== '') {
            clearInterval(t1);
            if (ComponentFile.esisteFile[indice] === 'SI') {
            } else {
              t.file.writeFile(t, indice, 'LooigiSoft', 'looWebPlayer/Testi/' + artista + '/' +
                album + '/' + nome + '.txt', blob);
            }
          }
        }); */
    };
    UtilityComponent.prototype.leggeTestoSeEsiste = function (t, artista, album, nome) {
        var indice = 8;
        _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].esisteFile[indice] = '';
        var cartellaJSON1 = 'LooigiSoft';
        var nomeFileJSON1 = 'looWebPlayer/Testi/' + artista + '/' + album + '/' + nome + '.txt';
        t.utility.scriveDebug(t, 'Esiste file testo ' + nomeFileJSON1 + ' per lettura');
        t.file.checkIfFileExists(t, indice, cartellaJSON1, nomeFileJSON1).then(function (Ritorno) {
            t.utility.scriveDebug(t, 'Esiste file testo ' + nomeFileJSON1 + ': ' + Ritorno);
            if (Ritorno === 'SI') {
                // Carica immagine
                var indice_2 = 5;
                _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].fileJSON[indice_2] = '';
                var path = t.file.sistemaNomeFile(_files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"].pathSD + '/LooigiSoft/Testi/' + artista + '/' + album + '/' + nome + '.txt');
                t.file.readFile(t, path, indice_2).then(function (Ritorno) {
                    t.testo = Ritorno;
                    t.testoTradotto = '';
                });
                /* const si = setInterval(() => {
                  if (ComponentFile.fileJSON[indice] !== '') {
                    clearInterval(si);
            
                    t.testo = ComponentFile.fileJSON[indice];
                    t.testoTradotto = '';
                  }
                }); */
            }
        });
        /* let q = 0;
        const t1 = setInterval(() => {
          if (ComponentFile.esisteFile[indice] !== '') {
            clearInterval(t1);
            if (ComponentFile.esisteFile[indice] === 'SI') {
              // Carica immagine
              const indice = 5;
              ComponentFile.fileJSON[indice] = '';
              const path = t.file.sistemaNomeFile(ComponentFile.pathSD + '/LooigiSoft/Testi/' + artista + '/' + album + '/' + nome + '.txt');
              t.file.readFile(t, path, indice);
              const si = setInterval(() => {
                if (ComponentFile.fileJSON[indice] !== '') {
                  clearInterval(si);
          
                  t.testo = ComponentFile.fileJSON[indice];
                  t.testoTradotto = '';
                }
              });
            }
          }
        }); */
    };
    UtilityComponent.prototype.scriveDebug = function (t, cosa) {
        if (t.debug === true) {
            console.log(cosa, t.debug);
            var d = this.datePipe.transform(new Date(), 'HH:mm:ss', 'UTC');
            // if (this.deviceGirante === 'Android') {
            // if (cosa.toUpperCase().indexOf('ERROR') > -1) {
            //   this.debuggone += (d + ' -> ' + cosa + '<br />'); 
            // } else {
            t.debuggone += (d + ' -> ' + cosa + '<br />');
            // }
            this.metteFiltroDebug(t);
            // } else {
            //   console.log(d + ' -> ' + cosa);
            // }
            // this.operazioneInCorso = cosa;
        }
    };
    UtilityComponent.prototype.metteFiltroDebug = function (t) {
        if (t.filtroImpostatoDebug !== '') {
            var righe = t.debuggone.split('<br />');
            var d_1 = '';
            righe.forEach(function (element) {
                if (element.toUpperCase().indexOf(t.filtroImpostatoDebug.toUpperCase().trim()) > -1) {
                    d_1 += element + '<br />';
                }
            });
            t.debuggone2 = d_1;
        }
        else {
            t.debuggone2 = t.debuggone;
        }
        if (t.filtroImpostato === '') {
            try {
                t.myScrollContainer.nativeElement.scrollTop = t.myScrollContainer.nativeElement.scrollHeight;
            }
            catch (err) {
            }
        }
    };
    UtilityComponent.prototype.cercaUtenza = function (t) {
        var _this = this;
        /* if (UtilityComponent.haEseguitoGiaIlCostruttore) {
          return;
        } */
        return new Promise(function (Ritorno) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.scriveDebug(t, "Crea utenza: Inizio");
                // setTimeout(() => {
                // alert('1');
                /* if (!this.isConnected) {
                  // alert('2');
                  this.caricaTutto();
                  return;
                } */
                // alert(this.utenza);
                if (!t.utenza || t.utenza === null || t.utenza === '') {
                    this.apiService.creaUtenza('')
                        .map(function (response) { return t.apiService.controllaRitorno(response); })
                        .subscribe(function (data) {
                        _this.scriveDebug(t, 'Lettura utenza: ok');
                        // alert(data);
                        if (data) {
                            var data2 = _this.apiService.prendeSoloDatiValidi(data);
                            // console.log(JSON.parse(data2));
                            if (data2.indexOf('ERROR:') === -1) {
                                if (data2.indexOf('§') === -1) {
                                    // Utenza rilevata
                                    var d = data2.split(';');
                                    t.utenza = d[2];
                                    t.idUtenza = +d[1];
                                    t.Amministratore = d[3];
                                    localStorage.setItem('utenza', t.utenza);
                                    localStorage.setItem('idUtenza', t.idUtenza.toString());
                                    localStorage.setItem('tipoUtenza', t.Amministratore);
                                    Ritorno('OK');
                                    // this.caricaTutto();
                                }
                                else {
                                    // Utenza da scegliere
                                    var d = data2.split('§');
                                    t.Utenti = new Array();
                                    d.forEach(function (element) {
                                        if (element && element !== '') {
                                            var dd = element.split(';');
                                            var ddd = {
                                                idUtente: +dd[0],
                                                Utente: dd[1],
                                                Amministratore: dd[2],
                                                Password: dd[3]
                                            };
                                            t.Utenti.push(ddd);
                                        }
                                    });
                                    // console.log('Lista Utenti', this.Utenti);
                                    t.caricamentoInCorso = false;
                                    t.mostraSceltaUtenti = true;
                                }
                            }
                            else {
                                // alert('data2');
                                _this.visualizzaMessaggio(_this, 'Lettura utenza: ' + data2, true);
                                Ritorno('ERROR: ' + data2);
                            }
                        }
                        else {
                            _this.visualizzaMessaggio(_this, 'Lettura utenza: Nessun dato ricevuto', true);
                            Ritorno('ERROR: Nessun dato ricevuto');
                        }
                    }, function (error) {
                        if (error instanceof Error) {
                            _this.visualizzaMessaggio(_this, 'Lettura utenza: ' + error.message, true);
                            Ritorno('ERROR: ' + error.message);
                        }
                    });
                }
                else {
                    this.scriveDebug(t, 'Lettura utenza. Skippo');
                    // this.caricaTutto();
                    Ritorno('OK');
                }
                return [2 /*return*/];
            });
        }); });
    };
    UtilityComponent.prototype.caricaJsonBrani = function (t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.scriveDebug(t, 'Carico JSON brani');
                return [2 /*return*/, new Promise(function (Ritorno) {
                        t.caricamentoInCorso = true;
                        if (t.isConnected) {
                            _this.apiService.ritornaJSONBrani(t.idUtenza).map(function (response) { return _this.apiService.controllaRitorno(response); })
                                .subscribe(function (data) {
                                t.caricamentoInCorso = false;
                                var d = _this.apiService.prendeSoloDatiValidi(data);
                                console.log(d);
                                Ritorno(d);
                            });
                        }
                        else {
                            _this.scriveDebug(t, 'Connessione assente. Impossibile recuperare il JSON dei brani');
                            // this.refreshCanzoniSenzaDomanda();
                            // this.nonHaTrovatoJSON();
                            Ritorno('ERROR: Connessione assente');
                        }
                        // alert('1');
                        // if (t.isConnected) {
                        /* this.getJSONBrani(t).subscribe(data => {
                          // this.caricamentoInCorso = false;
                          if (data && data !== null) {
                            this.scriveDebug(t, 'Caricato JSON brani');
                            try {
                              // t.datiJSON = JSON.parse(data._body);
                              Ritorno(data._body);
                            } catch (e) {
                              this.scriveDebug(t, 'Problemi sul dati JSON: ' + e.message);
                              // this.refreshCanzoniSenzaDomanda();
                              // this.nonHaTrovatoJSON();
                              Ritorno('ERROR: ' + e.message);
                              return;
                            }
                                    
                            // t.prosegueCaricaJsonBrani2(true);
                          } else {
                            this.scriveDebug(t, 'Ritorno nullo del dati JSON');
                            // this.refreshCanzoniSenzaDomanda();
                            // this.nonHaTrovatoJSON();
                            Ritorno('ERROR: Ritorno nullo');
                          }
                        }); */
                    })];
            });
        });
    };
    UtilityComponent.prototype.getJSONBrani = function (t) {
        this.scriveDebug(t, 'Prende JSON brani');
        var path = t.urlWS + 'Canzoni_' + t.idUtenza + '.json?id=' + new Date();
        return this.http.get(t, path).catch(this.catchAuthError(this));
    };
    UtilityComponent.prototype.catchAuthError = function (t) {
        var _this = this;
        // console.log('Errore: ', self);
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            console.log('ERRORE Http: ', res);
            if (res.status === 404) {
                _this.scriveDebug(t, 'JSON non trovato');
                // this.nonHaTrovatoJSON();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(res);
        };
    };
    UtilityComponent.prototype.prosegueCaricaJsonBrani2 = function (t, scrivo) {
        var _this = this;
        this.scriveDebug(t, 'Proseguo elaborazione file brani');
        t.datiJSON.forEach(function (element) {
            var artista = element.text;
            element.children.forEach(function (element2) {
                var album = element2.text;
                var anno = element2.Anno;
                if (!anno || anno === null || anno === '') {
                    anno = '0000';
                }
                element2.children.forEach(function (element3) {
                    var titolo = element3.Text;
                    var traccia = element3.Traccia;
                    if (!traccia || traccia === '' || traccia === null) {
                        traccia = '00';
                    }
                    var estensione = element3.Estensione;
                    var path = 'LooigiSoft/looWebPlayer/Brani/' + artista + '/' + anno + '-' + album + '/' + traccia + '-' + titolo + estensione;
                    element3.path = path;
                    element3.locale = false;
                });
            });
        });
        // console.log(this.datiJSON);
        if (t.deviceGirante === 'Android' && scrivo === true) {
            this.file.writeFile(this, 4, 'LooigiSoft', 'looWebPlayer/jsonBrani.json', JSON.stringify(t.datiJSON)).then(function (Ritorno) {
                _this.scriveDebug(t, 'Aggiornato file brani');
            });
        }
        // this.prosegueCaricaJSON();
    };
    UtilityComponent.prototype.sistemaTitoloBrano = function (t) {
        /* let a = t.indexOf('.');
        if (a > -1) {
    
        } */
        return t;
    };
    UtilityComponent.haEseguitoGiaIlCostruttore = false;
    UtilityComponent.TimeOutConnessione = 10000;
    UtilityComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _files__WEBPACK_IMPORTED_MODULE_5__["ComponentFile"] },
        { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ]; };
    UtilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], UtilityComponent);
    return UtilityComponent;
}());



/***/ }),

/***/ "./src/app/varie/youtube.component.ts":
/*!********************************************!*\
  !*** ./src/app/varie/youtube.component.ts ***!
  \********************************************/
/*! exports provided: YouTubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeComponent", function() { return YouTubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.component */ "./src/app/varie/utility.component.ts");



var YouTubeComponent = /** @class */ (function () {
    function YouTubeComponent(utility) {
        this.utility = utility;
    }
    YouTubeComponent.prototype.ngOnInit = function () {
    };
    YouTubeComponent.prototype.prendeVideoYouTube = function (t, refresh) {
        if (refresh === 'S') {
            if (!confirm('Si vogliono scaricare nuovamente i video ?')) {
                return;
            }
        }
        t.staCaricandoVideo = true;
        t.videoSource = '';
        console.log('Sta suonando', t.staSuonando, t.audio);
        if (t.staSuonando && t.audio) {
            // if (t.interval) {
            // t.pauseTimer();
            // t.interval = undefined;
            // }
            t.audio.pause();
        }
        t.youTubeVideos = new Array();
        setTimeout(function () {
            // Acquisizione youtube video
            var params = {
                nomeArtista: t.artista,
                nomeBrano: t.titoloBrano,
                refresh: refresh
            };
            t.scriveDebug('Carico brano. 10... Carico filmati youtube');
            t.apiService.ritornaYouTube(params).map(function (response) { return response.text(); })
                .subscribe(function (data) {
                if (data) {
                    t.staCaricandoVideo = false;
                    if (t.staSuonando && t.audio) {
                        t.audio.play();
                        if (t.videoNONCaricato === true) {
                            if (t.videoplayer) {
                                t.videoplayer.playVideo();
                            }
                        }
                        else {
                            if (t.videoplayerLocale) {
                                // this.videoplayerLocale.nativeElement.mute();
                                t.videoplayerLocale.nativeElement.play();
                            }
                        }
                        t.posizioneBrano = 0;
                        t.startTimer();
                    }
                    var data3 = t.apiService.prendeSoloDatiValidi(data);
                    // console.log(data2);
                    t.scriveDebug('Carico brano. 11... Caricati filmati youtube');
                    if (data3.indexOf('ERROR:') === -1) {
                        var data33 = data3.split('|');
                        var data2 = data33[0];
                        var numeroVideoDefault = +data33[1];
                        var r = data2.split('§');
                        r.forEach(function (element) {
                            if (element) {
                                var rrr = element.split(';');
                                var nomeLink = rrr[0];
                                while (nomeLink.indexOf('=') > -1) {
                                    nomeLink = nomeLink.substring(rrr[0].indexOf('=') + 1, rrr[0].Length);
                                }
                                var rr = {
                                    linkVideo: nomeLink,
                                    nomeVideo: rrr[1],
                                    estensione: rrr[2],
                                    prefisso: rrr[3],
                                    Esiste: rrr[4],
                                    pathUrl: rrr[5]
                                };
                                t.youTubeVideos.push(rr);
                            }
                        });
                        t.scriveDebug('Carico brano. 12... Carico filmati youtube. Filmati ' + t.youTubeVideos.length);
                        // console.log(t.youTubeVideos);
                        if (t.youTubeVideos.length > 0) {
                            var rnum_1 = -1;
                            // if (numeroVideoDefault === -1) {
                            var q_1 = 0;
                            t.youTubeVideos.forEach(function (element) {
                                if (rnum_1 === -1 && element.Esiste === 'S') {
                                    rnum_1 = q_1;
                                }
                                q_1++;
                            });
                            if (rnum_1 === -1) {
                                rnum_1 = Math.floor(Math.random() * t.youTubeVideos.length - 1);
                            }
                            // while (!t.youTubeVideos[rnum]) {
                            // rnum = Math.floor(Math.random() * t.youTubeVideos.length - 1);
                            // }
                            // } else {
                            //   rnum = numeroVideoDefault;
                            // }
                            t.scriveDebug('Carico brano. 13... Impostato video ' + rnum_1);
                            t.scritte.push('Video you tube: ' + rnum_1 + '/' + (t.youTubeVideos.length - 1));
                            t.numeroVideo = rnum_1;
                            t.staCaricandoVideo = false;
                            setTimeout(function () {
                                // console.log('Video caricato:', t.youTubeVideos[rnum]);
                                if (t.youTubeVideos && t.youTubeVideos[rnum_1]) {
                                    if (t.youTubeVideos[rnum_1].Esiste === 'S') {
                                        t.videoNONCaricato = false;
                                        t.videoSource = t.urlWS + t.youTubeVideos[rnum_1].pathUrl;
                                    }
                                    else {
                                        t.videoNONCaricato = true;
                                        t.videoSource = t.youTubeVideos[rnum_1].linkVideo;
                                    }
                                    // console.log(t.videoSource);
                                    setTimeout(function () {
                                        // console.log(t.posizioneBrano);
                                        if (t.videoNONCaricato === true) {
                                            if (t.videoplayer) {
                                                t.videoplayer.mute();
                                                if (t.staSuonando === true) {
                                                    t.scriveDebug('Carico brano. 14... Play youtube');
                                                    t.videoplayer.playVideo();
                                                    if (t.videoplayer) {
                                                        setTimeout(function () {
                                                            t.videoplayer.seekTo(+t.posizioneBrano, true);
                                                        }, 100);
                                                    }
                                                    /* setTimeout(() => {
                                                      t.videoplayer.seekTo(+t.posizioneBrano, false);
                                                    }, 1000); */
                                                }
                                            }
                                        }
                                        else {
                                            if (t.videoplayer) {
                                                // t.videoplayerLocale.nativeElement.mute();
                                                if (t.staSuonando === true) {
                                                    t.scriveDebug('Carico brano. 15... Play youtube');
                                                    t.videoplayerLocale.nativeElement.play();
                                                    setTimeout(function () {
                                                        t.videoplayerLocale.nativeElement.currentTime = +t.posizioneBrano;
                                                    }, 1000);
                                                }
                                            }
                                        }
                                    }, 1000);
                                }
                            }, 100);
                        }
                    }
                    else {
                        t.scriveDebug('Carico brano. 15... Errore filmati youtube: ' + data3);
                        console.log(data3);
                        t.youTubeVideos = new Array();
                    }
                }
                else {
                    t.staCaricandoVideo = false;
                    if (t.staSuonando) {
                        t.audio.play();
                    }
                }
            });
            // Acquisizione youtube video
        }, 1000);
    };
    YouTubeComponent.prototype.avanzaVideo = function (t) {
        var rnum = t.numeroVideo + 1;
        if (rnum > t.youTubeVideos.length - 1) {
            rnum = 0;
        }
        t.numeroVideo = rnum;
        this.utility.visualizzaMessaggio(t, 'Video caricato ' + rnum + '/' + (t.youTubeVideos.length - 1) + '\n' + t.youTubeVideos[rnum].pathUrl, false);
        if (t.debug === true) {
            console.log('Avanza video', t.numeroVideo);
        }
        this.settaVideo(t);
    };
    YouTubeComponent.prototype.indietroVideo = function (t) {
        var rnum = t.numeroVideo - 1;
        if (rnum < 0) {
            rnum = t.youTubeVideos.length - 1;
        }
        t.numeroVideo = rnum;
        this.utility.visualizzaMessaggio(t, 'Video caricato ' + rnum + '/' + (t.youTubeVideos.length - 1) + '\n' + t.youTubeVideos[rnum].pathUrl, false);
        if (t.debug === true) {
            console.log('Indietro Video', t.numeroVideo);
        }
        this.settaVideo(t);
    };
    YouTubeComponent.prototype.settaVideo = function (t) {
        t.staCaricandoVideo = false;
        setTimeout(function () {
            // t.numeroVideo = t.numeroVideo;
            if (t.youTubeVideos && t.youTubeVideos[t.numeroVideo]) {
                if (t.youTubeVideos[t.numeroVideo].Esiste === 'S') {
                    t.videoNONCaricato = false;
                    t.videoSource = t.urlWS + t.youTubeVideos[t.numeroVideo].pathUrl;
                }
                else {
                    t.videoNONCaricato = true;
                    t.videoSource = t.youTubeVideos[t.numeroVideo].linkVideo;
                }
                if (t.debug === true) {
                    console.log('Video impostato', t.videoSource, t.numeroVideo, t.youTubeVideos.length);
                }
                t.scritte.forEach(function (element) {
                    if (element.indexOf('Video you tube') > -1) {
                        element = 'Video you tube: ' + t.numeroVideo + '/' + (t.youTubeVideos.length - 1);
                    }
                });
                setTimeout(function () {
                    if (t.videoNONCaricato === true) {
                        t.videoplayer.mute();
                        if (t.staSuonando === true) {
                            setTimeout(function () {
                                t.videoplayer.playVideo();
                            }, 1000);
                        }
                    }
                    else {
                        // t.videoplayerLocale.nativeElement.mute();
                        if (t.staSuonando === true) {
                            setTimeout(function () {
                                t.videoplayerLocale.nativeElement.play();
                            }, 1000);
                        }
                    }
                }, 1000);
            }
        }, 500);
    };
    YouTubeComponent.prototype.salvaVideo = function (t) {
        var _this = this;
        if (!t.youTubeVideos[t.numeroVideo]) {
            return;
        }
        var nomeVideo = t.youTubeVideos[t.numeroVideo].linkVideo;
        nomeVideo = 'https://www.youtube.com/watch?' + t.youTubeVideos[t.numeroVideo].prefisso + '=' +
            nomeVideo + t.youTubeVideos[t.numeroVideo].estensione;
        console.log('Video da salvare:', t.youTubeVideos[t.numeroVideo].prefisso, t.youTubeVideos[t.numeroVideo].linkVideo, t.youTubeVideos[t.numeroVideo].estensione);
        t.apiService.salvaVideo(t.youTubeVideos[t.numeroVideo].prefisso, t.youTubeVideos[t.numeroVideo].linkVideo, t.youTubeVideos[t.numeroVideo].estensione).map(function (response) { return response.text(); })
            .subscribe(function (data) {
            if (data) {
                var data2 = t.apiService.prendeSoloDatiValidi(data);
                // console.log(data2);
                if (data2.indexOf('ERROR:') === -1) {
                    setTimeout(function () {
                        t.youTubeVideos[t.numeroVideo].Esiste = 'S';
                        t.videoNONCaricato = false;
                        var prima = t.youTubeVideos[t.numeroVideo].linkVideo.substring(0, 1);
                        t.videoSource = t.urlWS + 'YouTube/' + prima + '/' + t.youTubeVideos[t.numeroVideo].linkVideo +
                            t.youTubeVideos[t.numeroVideo].estensione;
                        console.log('Video scaricato', t.videoSource);
                        if (t.staSuonando) {
                            setTimeout(function () {
                                if (t.videoplayerLocale) {
                                    // t.videoplayerLocale.nativeElement.mute();
                                    t.videoplayerLocale.nativeElement.play();
                                    setTimeout(function () {
                                        t.videoplayerLocale.nativeElement.currentTime = +t.posizioneBrano;
                                    }, 1000);
                                }
                            }, 1000);
                        }
                        _this.utility.visualizzaMessaggio(t, 'Video salvato', false);
                    }, 1000);
                }
                else {
                    t.apiService.scriveVideoDaSalvare(nomeVideo).map(function (response) { return response.text(); })
                        .subscribe(function (data) {
                        if (data) {
                            var data2_1 = t.apiService.prendeSoloDatiValidi(data);
                            console.log(data2_1);
                            if (data2_1.indexOf('ERROR:') === -1) {
                                // console.log('Video inserito nella lista da scaricare');
                                _this.utility.visualizzaMessaggio(t, 'Video inserito nella lista da scaricare', true);
                            }
                            else {
                                // alert(data2);
                                _this.utility.visualizzaMessaggio(t, 'Salva Video: ' + data2_1, true);
                            }
                        }
                    }, function (error) {
                        if (error instanceof Error) {
                            _this.utility.visualizzaMessaggio(t, 'Salva Video: ' + error.message, true);
                        }
                    });
                }
                t.apiService.SalvaVideoDefault(t.numeroBrano, t.numeroVideo).map(function (response) { return response.text(); })
                    .subscribe(function (data) {
                    if (data) {
                        var data2_2 = t.apiService.prendeSoloDatiValidi(data);
                        if (data2_2.indexOf('ERROR:') === -1) {
                            console.log('Video salvato come default');
                        }
                        else {
                            // console.log(data2);
                            _this.utility.visualizzaMessaggio(t, 'Salva Video: ' + data2_2, true);
                        }
                    }
                });
            }
        }, function (error) {
            if (error instanceof Error) {
                _this.utility.visualizzaMessaggio(t, 'Salva Video: ' + error.message, true);
            }
        });
    };
    YouTubeComponent.ctorParameters = function () { return [
        { type: _utility_component__WEBPACK_IMPORTED_MODULE_2__["UtilityComponent"] }
    ]; };
    YouTubeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], YouTubeComponent);
    return YouTubeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sorgenti\Angular\looWebPlayer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map