
import { callApi } from "../src/js/pokeApi";
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $('#userSearch').submit(function(e) {
    e.preventDefault();
    $('#results').show();
    let pokemonName = $('#pokeName').val();
    callApi(pokemonName);
  });
});