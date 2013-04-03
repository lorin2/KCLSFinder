var activation = Windows.ApplicationModel.Activation;
var notifications = Windows.UI.Notifications;

var libraryNames = new Array(
    "",
    "Bellevue",
    "Kirkland",
    "Redmond");

var rssFeeds = new Array(
    "",
    "http://eventinfo.kcls.org/evanced/lib/eventsxml.asp?ag=&et=&lib=2&nd=30&feedtitle=Bellevue+Library%3CBR%3ESchedule+of+Events&dm=rss2&LangType=0",
    "http://eventinfo.kcls.org/evanced/lib/eventsxml.asp?ag=&et=&lib=20&nd=30&feedtitle=Kirkland+Library%3CBR%3ESchedule+of+Events&dm=rss2&LangType=0",
    "http://eventinfo.kcls.org/evanced/lib/eventsxml.asp?ag=&et=&lib=30&nd=30&feedtitle=Redmond+Library%3CBR%3ESchedule+of+Events&dm=rss2&LangType=0");

var libraryIndex = 0;

function displayToast(msgString) {
    // Get the toast manager for the current app.
    var notificationManager = notifications.ToastNotificationManager;

    // Specify the type of template for the toast.
    var toastTemplateType = notifications.ToastTemplateType['toastImageAndText01'];

    // getTemplateContent returns a Windows.Data.Xml.Dom.XmlDocument object containing the toast XML.
    var toastXml = notificationManager.getTemplateContent(toastTemplateType);

    // Use methods from the XML document to specify all the required parameters for the toast.
    var images = toastXml.getElementsByTagName("image");

    // To reference an image contained in your app's package, use the "package://" protocol.
    images[0].setAttribute("src", "package://images\\compass_rose.png");
    images[0].setAttribute("alt", "Compass rose");

    // Set the text element for the XML.
    var textNodes = toastXml.getElementsByTagName("text");
    textNodes.forEach(function (value) {
        value.appendChild(toastXml.createTextNode(msgString));
    });

    // Create a toast from the XML; then create a ToastNotifier object to send the toast.
    var toast = new notifications.ToastNotification(toastXml);

    // Display the toast on the desktop.
    notificationManager.createToastNotifier().show(toast);
}

function displayTileNotifications(index) {
    // Clear any previous tile notifications sent to the app's default tile.
    notifications.TileUpdateManager.createTileUpdaterForApplication().clear();

    // If no library is selected as the default, return without sending tile notifications.
    if (index == 0) {
        return;
    }

    libraryIndex = index;

    WinJS.xhr({ url: rssFeeds[libraryIndex] }).
                then(processPosts, downloadError);

    // Enable the TileUpdateManager to cycle through up to 5 update notifications.
    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);
}

function processPosts(request) {
    // Parse the RSS feed.
    var items = request.responseXML.selectNodes("//item");
    if (items.length == 0) {
        // Handle error downloading posts;
    }

    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var title = item.selectNodes("title")[0].text;
        var desc = item.selectNodes("description")[0].text;

        // Extract the date and time portion of the description.
        var when = desc.slice(desc.search("</b>") + 5, desc.search("<br>"));

        if (i < 5) {
            sendTileTextNotification(libraryNames[libraryIndex], title, when);
        } else {
            return;
        }
    }
}

function downloadError() {
    // Handle error downloading posts.
}

function sendTileTextNotification(title, event, when) {
    // get a filled in version of the template by using getTemplateContent
    var tileXml = notifications.TileUpdateManager.getTemplateContent(notifications.TileTemplateType.tileWideText01);

    // You will need to look at the template documentation to know how many text fields a particular template has
    // You can also use the Advanced Tile SDK Sample to preview all of the templates

    // get the text attributes for this template and fill them in
    var tileAttributes = tileXml.getElementsByTagName("text");
    tileAttributes[0].appendChild(tileXml.createTextNode(title));
    tileAttributes[1].appendChild(tileXml.createTextNode(event));
    tileAttributes[2].appendChild(tileXml.createTextNode(when));

    // create the notification from the XML
    var tileNotification = new notifications.TileNotification(tileXml);

    // send the notification to the app's default tile
    notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);

    // Display the XML as text -- useful for debugging.
    var xmlText = tileXml.getXml();
}