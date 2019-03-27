import $ from 'jquery';

export function callApi(pokemonName) {
  let request = new XMLHttpRequest();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
  const getElements = function (response) {
    $('#pokemonName').text(JSON.stringify(response.name));
    $('.pokemonImage').text(JSON.stringify(response.url));
    for (let i = 1; i <= 5; i++) {
      $('.moves' + i).text(JSON.stringify(response.moves[i].move.name));
    }
    $('.pokeType').text(JSON.stringify(response.types[0].type.name));
  };
}