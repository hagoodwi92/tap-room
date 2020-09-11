import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currencyExchange';

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let exchange = $('#currency').val();
    let country = $('#country').val();
    $('#formOne').val("");
    $('#currency').val("");
    let promise = CurrencyExchange.getExchange(country, exchange);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showExchange').text(`The exchange rate of  in ${country} is ${body.conversion_rates.EGP}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

  });
});