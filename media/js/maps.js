var markersArray = [];	

//style
var pinkParksStyles = [
  {
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "lightness": -48 }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }
];

// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
  var pinkMapType = new google.maps.StyledMapType(pinkParksStyles,
    {name: "Pink Parks"});

//window height
function getWindowHeight() {
        if (window.self&&self.innerHeight) {
            return self.innerHeight;
        }
        if (document.documentElement&&document.documentElement.clientHeight) {
            return document.documentElement.clientHeight;
        }
        return 0;
    }

function resizeMapDiv() {
        //Resize the height of the div containing the map.

        //Do not call any map methods here as the resize is called before the map is created.
        var d=document.getElementById("map");

        var offsetTop=0;
        for (var elem=d; elem!=null; elem=elem.offsetParent) {
            offsetTop+=elem.offsetTop;

        }
        var height=250;

        if (height>=0) {
            d.style.height=height+"px";
        }
    }

var infoWindow = new google.maps.InfoWindow();





	


	



//main load



setMarkers(map, tbl);
 


//set markers
function clearOverlays() {
	

				    if (markersArray) {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
	  if ( i== (markersArray.length-1))
	  {markersArray = [];
	  }
    }
	}
	

	

	
  }


 //set Markers
function setMarkers(map, tbl) {
	

	
     var image = new google.maps.MarkerImage('http://www.metro.net/interactives/datatables/pass_token/media/images/blue_dot.png',
     new google.maps.Size(20, 20),
     new google.maps.Point(0,0),
     new google.maps.Point(10, 25));
	var numRows = tbl.rows.length;	
	
var topcellnum = tbl.rows[0].getElementsByTagName('td').length;		

	if (topcellnum > 1){
		



var markerBounds = new google.maps.LatLngBounds();


		

for (var i = 0; i < numRows; i++) {
	
	
	
var cells = tbl.rows[i].getElementsByTagName('td');

var inputs = tbl.rows[i].getElementsByTagName('input');

var coordd = inputs[0].value.split(",");


var myLatLng = new google.maps.LatLng(coordd[0], coordd[1]);
     var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
          //shadow: shadow,
          icon: image,
		  title: cells[0].innerHTML,
		  address: cells[1].innerHTML,
		  city: cells[2].innerHTML,
		  zip: cells[3].innerHTML,
		  phone: cells[4].innerHTML,
		  token: cells[5].innerHTML
        });
		  
markerBounds.extend(myLatLng);
map.fitBounds(markerBounds);

var stationinfoWindow = new google.maps.InfoWindow();

		  
google.maps.event.addListener(marker, 'click', function() {

	 
var datalocation = this.title;
var dataaddress = this.address;
var datacity = this.city;
var datazip = this.zip;
var dataphone = this.phone;
var datatoken = this.token;
	 
	 stationinfoWindow.setContent("<h4><strong>" + datalocation + "</strong></h4><strong>Address:</strong> " + dataaddress + "<br>" + datacity + ", " + datazip + "<br><strong>Phone:</strong> " + dataphone + "<br><strong>Token/Passes:</strong> " + datatoken);


stationinfoWindow.open(map,this);
infoWindow.close(map);


  });

		  markersArray.push(marker);
	  
}}
}  

    //]]>