var map;

function initMap() {

  // Maps Personalizados
  // https://snazzymaps.com
  var mapa = new google.maps.StyledMapType([
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
])

  var meuMarcador = 'imgs/icone.png';

  var endereco = {
    lat: -31.762102,
    lng: -52.342088
  }

  var meio = {
    lat: -31.763585,
    lng: -52.342892
  }

  var endereco2 = {
    lat: -31.764901,
    lng: -52.343998
  }

  var perto = 15;
  var longe = 3;

  map = new google.maps.Map(document.getElementById('map'), {
    center: meio,
    zoom: perto,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });
  // onde faz funcionar o mapa estilizado
  map.mapTypes.set('styled_map', mapa);
  map.setMapTypeId('styled_map');

  // marcador ao meu gosto
  var marker = new google.maps.Marker({
    position: endereco,
    icon: meuMarcador,
    map: map,
    title: "Ponto A"
  });
  // fazer um marcador
  var marker2 = new google.maps.Marker({
    position: endereco2,
    map: map,
    title: "Ponto B"
  });

  var conteudoJanela = "<div class='d-flex justify-content-between'>" +
  "<img class='maps-img' src='imgs/1.jpg' alt='foto avatar'>" +
  "<a href='https://www.globo.com' target='_blank'><h5>Olá, esta é a MooDev</h5></a>" +
"</div>";

  var infowindow = new google.maps.InfoWindow({
    content: conteudoJanela
  });

   marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

//botão de subir a tela
$('#topo').on('click', function(){
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 1500);
});



setInterval(function() {


  //colocar um relogio e data
var hoje = new Date();
var dia = hoje.getDate();
var mes = hoje.getMonth();
var ano = hoje.getFullYear();
var hora = hoje.getHours();
var min = hoje.getMinutes();
var seg = hoje.getSeconds();
// para fazer ter o zero nas unidades
var zeroMes = "";
var zeroMin = "";
var zeroSeg = "";

if(mes < 10){ 
  var zeroMes = 0;
};
if(min < 10){ 
  var zeroMin = 0;
};
if(min < 10){ 
  var zeroSeg = 0;
};

if(hora == 21){
  $("header").css('background-color', 'lightblue')
};


// aprestação do relogio e dia
  $('#hoje').html(dia + " / " + zeroMes + mes + " / " + ano + ' Horas: ' + hora + ":" + zeroMin + min + ":" + zeroSeg + seg);
    
}, 1000);














// jQuery load
// $(document).ready(function(){
// });
// function initMap(){};

  // Maps
  // var map;
  // function initMap(){
  //   // ========
  //   var address = {
  //     lat: -31.762166,
  //     lng: -52.341991
  //   }

  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: address.lat, lng: address.lng},
  //     zoom: 14

  //   });
    // ==========
    // var styledMapType = new google.maps.StyledMapType([
    // {
    //     "featureType": "all",
    //     "elementType": "labels.text",
    //     "stylers": [
    //         {
    //             "visibility": "off"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "all",
    //     "elementType": "labels.icon",
    //     "stylers": [
    //         {
    //             "visibility": "on"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "landscape.man_made",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "visibility": "on"
    //         },
    //         {
    //             "color": "#a5a5a5"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "landscape.man_made",
    //     "elementType": "geometry.stroke",
    //     "stylers": [
    //         {
    //             "color": "#000000"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "landscape.natural",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "visibility": "on"
    //         },
    //         {
    //             "color": "#0c5a15"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "poi.medical",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#fcfcfc"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "poi.place_of_worship",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "invert_lightness": true
    //         }
    //     ]
    // },
    // {
    //     "featureType": "poi.school",
    //     "elementType": "geometry.fill",
    //     "stylers": [
    //         {
    //             "color": "#ffffff"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "poi.sports_complex",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#ffffff"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "road.highway",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#000000"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "road.arterial",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#000000"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "road.local",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#000000"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "transit",
    //     "elementType": "labels.icon",
    //     "stylers": [
    //         {
    //             "visibility": "on"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "transit.line",
    //     "elementType": "geometry",
    //     "stylers": [
    //         {
    //             "color": "#ad0b0b"
    //         }
    //     ]
    // },
    // {
    //     "featureType": "water",
    //     "elementType": "geometry.fill",
    //     "stylers": [
    //         {
    //             "color": "#abdfec"
    //         }
    //     ]
    // }
    // ], {name: 'Pelotas GTA city'});


    // var address = {
    //   lat: -31.762166,
    //   lng: -52.341991
    // }

    // map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: address.lat, lng: address.lng},
    //   zoom: 14
      // mapTypeControlOptions: {
      //   mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
      //           'styled_map']
      // }
    // });

    // map.mapTypes.set('styled_map', styledMapType);
    // map.setMapTypeId('styled_map');

    // var marker = new google.maps.Marker({position: address, map: map});
  // }
