import ReservaPage from '../page/ReservaPage';
const reservaPage=new ReservaPage();
const url = "https://www.despegar.com.co/";

class reservaAction {

loadPage() {
  cy.visit(url);
 }

 writeOrigin(origin) {
  reservaPage.getOrigin().type(origin);
 }

 
 writeDestino(destino) {
  reservaPage.getDestino().type(destino);
 }

 writeFechaIda(fechaida) {
  reservaPage.getFechaIda().click();
  reservaPage.getFechaIdaDIa().click({force: true});
 }

 writeFechaRegreso(fecharegreso) {
  reservaPage.getFechaRegreso().click();
  reservaPage.getFechaRegresoDIa().click({force: true});
 }

 busca() {
  reservaPage.getBtnBusca().click();
 }

}


export default reservaAction