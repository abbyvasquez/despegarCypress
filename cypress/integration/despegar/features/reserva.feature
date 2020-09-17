@feature-tag @reserva-tag
Feature: Realizar reserva
 
    Yo quiero realizar una reserva

  @tag-to-include
  Scenario: reserva de ticket
    Given Yo abro la pagina de despegar
    When Ingreso en el origen "Bogotá"
    And Ingreso en el destino "Cartagena de Indias, Bolívar, Colombia"
    And Ingreso fecha ida "Jue, 8 oct 2020"
    And Ingreso fecha regreso "Jue, 15 oct 2020"
    And Busca