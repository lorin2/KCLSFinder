// The map.js file handles all processing for the Google Maps API.
(function () {
    'use strict';

    var map = null;
    var bounds = null;
    var trafficLayer = null;
    var trafficFlag = false;
    var geocoder = null;

    // Process messages from parent frame (default.html).
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        // Only process messages from the host object.
        if (event.origin === "ms-wwa://" + document.location.host) {

            // Parse the message string into an object.
            var messageObject = JSON.parse(event.data);

            // Determine the command value and action.
            switch (messageObject.command) {
                case "myLocation":
                    displayReverseGeolocation(messageObject.latitude, messageObject.longitude);
                    // Fall through.
                case "zoomTo":
                    // Change the location and zoom level.
                    zoomTo(messageObject.latitude, messageObject.longitude, messageObject.zoom);
                    break;
                case "autoCenter":
                    // Center the map so all locations display.
                    map.fitBounds(bounds);
                    break;
                case "toggleTraffic":
                    displayTraffic();
                    break;
                case "directions":
                    displayDirectionsToLibrary();
                    break;
                default:
                    break;
            }
        }
    }

    function displayReverseGeolocation(lat, lng) {
        if (geocoder == null) {
            geocoder = new google.maps.Geocoder();
        }

        if (geocoder != null) {
            var latlng = new google.maps.LatLng(lat, lng);

            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        // Construct a message object.
                        var msg = {
                            command: 'myLocation',
                            html: results[1].formatted_address
                        };

                        // Send the message to the parent.
                        sendMsgToParent(msg);
                    } else {
                        var geolocation__error_01 = "No results found";
                    }
                } else {
                    var geolocation_error_02 = "Geocoder failed due to: " + status;
                }
            });
        }
    }

    function zoomTo(latitude, longitude, zoomLevel) {
        var latLng = new google.maps.LatLng(latitude, longitude);
        var myOptions = {
            zoom: zoomLevel,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map.setOptions(myOptions);
    }

    // Toggle the Google Maps Traffic Layer on the displayed map.
    function displayTraffic() {
        if (trafficLayer == null) {
            trafficLayer = new google.maps.TrafficLayer();
        }

        if (trafficLayer != null) {
            if (trafficFlag == false) {
                trafficLayer.setMap(map);
                trafficFlag = true;
            } else {
                trafficLayer.setMap(null);
                trafficFlag = false;
            }
        }
    }

    // Serialize the msg object and post it to the parent.
    function sendMsgToParent(msg) {
        // Convert the message object to a string and send to the map control in the iframe.
        var msgString = JSON.stringify(msg);
        window.parent.postMessage(msgString, "ms-wwa://" + document.location.host);
    }

    // Initialize the Google Maps map object
    function initialize() {
        // Initialize the data in the library collection.
        var libraryCollection = LibraryCollection.init(map);

        // Initialize the map object.
        var myOptions = {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"),
        myOptions);

        var image = null;
        var libraryLatLng = null;

        // Iterate through the data objects in libraryCollection.js
        for (var i = 0; i < libraryCollection.length; i++) {
            // Retrieve the latitude and longitude values of the library location.
            libraryLatLng = new google.maps.LatLng(libraryCollection[i].latitude, libraryCollection[i].longitude);

            // Set the marker icon according to the library size.
            if (libraryCollection[i].size == 1) image = '../images/large_book.png';
            if (libraryCollection[i].size == 2) image = '../images/medium_book.png';
            if (libraryCollection[i].size == 3) image = '../images/small_book.png';

            // Create the marker for the library.
            // Markers are icons that identify locations on the map. In this case,
            // a book image is used for a marker.
            libraryCollection[i].marker = new google.maps.Marker({
                position: libraryLatLng,
                map: map,
                icon: image,
                title: libraryCollection[i].title,
                html: libraryCollection[i].description
            });

            // Set the Click event handler for the marker so that it returns
            // data for the specific library location. In addition, zoom to the location.
            var marker = libraryCollection[i].marker;
            google.maps.event.addListener(marker, 'click', function () {
                zoomTo(this.position.lat(), this.position.lng(), 16);

                // Construct a message object.
                var msg = {
                    command: 'libraryInfo',
                    html: this.html
                };

                // Send the message to the parent.
                sendMsgToParent(msg);
            });
        }

        //  Center the map based on all library locations.
        autoCenter(libraryCollection);
    }

    // Determine the center point given an array of locations.
    function autoCenter(libraryCollection) {
        //  Create a new viewpoint bounds rectangle.
        bounds = new google.maps.LatLngBounds();

        //  Iterate through all the markers in the libraryCollection.
        for (var i = 0; i < libraryCollection.length; i++) {
            // Ignore Skykomish Library -- it's too far east and skews the bounds. Sorry :-(.
            if (libraryCollection[i].title == "Skykomish Library") {
                continue;
            }
            var marker = libraryCollection[i].marker;

            // Extend the bounds to contain the given point (i.e., library location).
            bounds.extend(marker.position);
        }

        //  Set the viewport to contain the given bounds.
        map.fitBounds(bounds);
    }

    // Once the script is loaded, call the initialize() function.
    document.addEventListener("DOMContentLoaded", initialize, false);
})();
