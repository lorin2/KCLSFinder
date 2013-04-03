(function () {
    'use strict';

    Debug.enableFirstChanceException(true);

    var locator = null;
    var libraryItem = 0;

    // Utility Function: Return DOM object for the element ID.
    function id(elementId) {
        return document.getElementById(elementId);
    }

    // Utility Function: Show the flyout, if hidden, regardless of other states.
    function showFlyout(flyout, anchor, placement) {
        WinJS.UI.getControl(flyout).show(anchor, placement);
    }

    // Utility Function: Hide the flyout, if visible, regardless of other states.
    function hideFlyout(flyout) {
        WinJS.UI.getControl(flyout).hide();
    }

    // Button event handler -- sends a command to the map to zoom to the current geolocation.
    function changeToCurrentLocation(e) {
        if (locator == null) {
            locator = new Windows.Devices.Geolocation.Geolocator();
        }

        if (locator != null) {
            locator.getGeopositionAsync().then(getPositionHandler);
        }
    }

    // Button event handler -- sends a command to the map to autocenter the locations.
    function changeToAutoCenter(e) {
        // Construct a message object to send to the iframe.
        var msg = {
            command: 'autoCenter'
        };

        // Send the message to the iframe.
        sendMsgToIframe(msg);
    }

    // Button event handler -- sends a command to the map to autocenter the locations.
    function toggleTrafficLayer(e) {
        hideFlyout(toggleTrafficFlyout);

        // Construct a message object to send to the iframe.
        var msg = {
            command: 'toggleTraffic'
        };

        // Send the message to the iframe.
        sendMsgToIframe(msg);
    }

    // Button event handler -- sends a command to the map to display directions to the current library location.
    function getDirections(e) {
        // Construct a message object to send to the iframe.
        var msg = {
            command: 'directions'
        };

        // Send the message to the iframe.
        sendMsgToIframe(msg);
    }

    // Extract latitude and longitude from the Geolocation position value
    // and send it to the iframe via a message.
    function getPositionHandler(geoposition) {
        if (geoposition) {
            // Construct a message object to send to the iframe.
            var msg = {
                command: 'myLocation',
                latitude: geoposition.coordinate.latitude,
                longitude: geoposition.coordinate.longitude,
                zoom: 14
            };

            // Send the message to the iframe.
            sendMsgToIframe(msg);
        } else {
            id('textDisplay').innerText = "Geolocation position value is null";
        }
    }

    // Send message to the map control.
    function sendMsgToIframe(msg) {
        // Convert the message object to a string and send to the map control in the iframe.
        var msgString = JSON.stringify(msg);
        document.frames['mapIframe'].postMessage(msgString, "ms-wwa-web://" + document.location.host);
    }

    // Receive messages from the map and display output.
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        // Only process messages from the host object.
        if (event.origin === "ms-wwa-web://" + document.location.host) {
            // Parse the message string into an object.
            var messageObject = JSON.parse(event.data);

            // Determine the command value and action.
            switch (messageObject.command) {
                case "libraryInfo":
                    id("textDisplay").innerHTML = messageObject.html;
                    break;
                case "myLocation":
                    displayToast(messageObject.html);
                    break;
                default:
                    break;
            }
        }
    }

    function showTrafficLayerFlyout() {
        showFlyout(toggleTrafficFlyout, toggleTraffic, "top");
    }

    function showlibraryListFlyout() {
        showFlyout(libraryListFlyout, selectLibrary, "top");
    }

    function changeLibrary(e) {
        hideFlyout(libraryListFlyout);
        displayTileNotifications(e.srcElement.selectedIndex);
    }

    function initialize() {
        // Register all your event handlers and set up any custom UI for the app.
        WinJS.UI.processAll();

        id('myLocation').addEventListener('click', changeToCurrentLocation, false);
        id('showAllLibraries').addEventListener('click', changeToAutoCenter, false);
        id('toggleTraffic').addEventListener('click', showTrafficLayerFlyout, false);
        id("selectLibrary").addEventListener("click", showlibraryListFlyout, false);
        id("libraryLocation").addEventListener("change", changeLibrary, false);
        id("toggle").addEventListener("change", toggleTrafficLayer, false);
    }

    // Register for the DOMContentLoaded event, which occurs when all DOM and script content has been loaded,
    // but not necessarily the images and content.
    document.addEventListener("DOMContentLoaded", initialize, false);
})();