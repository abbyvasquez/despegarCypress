import { Given,When, And } from "cypress-cucumber-preprocessor/steps";

import ReservaAction from '../../actions/ReservaAction';

const reservaAction =new ReservaAction();


Given(`Yo abro la pagina de despegar`, () => {
   reservaAction.loadPage();
  });

When(`Ingreso en el origen {string}`, origin => {
    reservaAction.writeOrigin(origin);
   });

And(`Ingreso en el destino {string}`, destino => {
    reservaAction.writeDestino(destino);
   });


And(`Ingreso fecha ida {string}`, fechaida => {
    reservaAction.writeFechaIda(fechaida);
   });

And(`Ingreso fecha regreso {string}`, fecharegreso => {
    reservaAction.writeFechaRegreso(fecharegreso);
   });

And(`Busca`, () => {
    reservaAction.busca();
   });