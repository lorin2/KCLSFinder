(function () {
    'use strict';

    Debug.enableFirstChanceException(true);

    // Create the collection including all objects.
    function createCollection(className) {
        var obj = new Array();
        var t = new libraryCollection();
        for (var _item in t) {
            eval("obj." + _item + " = t." + _item);
        }
        return obj;
    }

    // Define the collection properties and methods.
    function libraryCollection() {
        this.container = "";
        this.add = function (obj) {
            this.push(obj);
        }
    }

    // Define the library collection values.
    function library(title, size, latitude, longitude, description) {
        this.title = title;
        this.size = size;  // KCLS defines libraries as: Large, Medium, and Small.
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
        this.infoWindow = null;
        this.marker = null;
    }

    // Initialize the library collection with data --
    // in this case, all KCLS member libraries.
    function init(map) {
        libraryCollection = new createCollection("libraryCollection");
        libraryCollection.add(new library(
        "Algona-Pacific Library",
        3,
        47.27147, -122.25348,
        '<b>Algona-Pacific Library</b><br/>' +
        '255 Ellingson Rd, Pacific<br/>' +
        '253-833-3554<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/algonapacific/">more info</a></div>'));
        libraryCollection.add(new library(
        "Auburn Library",
        1,
        47.29830, -122.21870,
        '<b>Auburn Library</b><br/>' +
        '1140 Auburn Way S, Auburn<br/>' +
        '253- 931-3018<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/auburn/">more info</a></div>'));
        libraryCollection.add(new library(
        "Bellevue Regional Library",
        1,
        47.62025, -122.19420,
        '<b>Bellevue Regional Library</b><br/>' +
        '1111 110th Ave NE, Bellevue<br/>' +
        '425-450-1765<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>9am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/bellevue/">more info</a></div>'));
        libraryCollection.add(new library(
        "Black Diamond Library",
        3,
        47.31213, -122.01273,
        '<b>Black Diamond Library</b><br/>' +
        '24707 Roberts Dr, Black Diamond<br/>' +
        '360-886-1105<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/blackdiamond/">more info</a></div>'));
        libraryCollection.add(new library(
        "Bothell Library",
        1,
        47.76056, -122.21040,
        '<b>Bothell Library</b><br/>' +
        '18215 98th Ave NE, Bothell<br/>' +
        '425-486-7811<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/bothell/">more info</a></div>'));
        libraryCollection.add(new library(
        "Boulevard Park Library",
        3,
        47.49554, -122.30769,
        '<b>Boulevard Park Library</b><br/>' +
        '12015 Roseberg Ave S, Seattle<br/>' +
        '206-242-8662<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>11am - 8:30pm</td></tr>' +
        '<tr><td style="text-align: right">Fri-Sat:</td><td>11am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/boulevardpark/">more info</a></div>'));
        libraryCollection.add(new library(
        "Burien Library",
        1,
        47.46759, -122.33952,
        '<b>Burien Library</b><br/>' +
        '400 SW 152nd Street, Burien<br/>' +
        '206-243-3490<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/burien/">more info</a></div>'));
        libraryCollection.add(new library(
        "Carnation Library",
        3,
        47.65046, -121.91229,
        '<b>Carnation Library</b><br/>' +
        '4804 Tolt Ave, Carnation<br/>' +
        '425-333-4398<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/carnation/">more info</a></div>'));
        libraryCollection.add(new library(
        "Covington Library",
        1,
        47.35905, -122.12203,
        '<b>Covington Library</b><br/>' +
        '27100 164th Ave SE, Covington<br/>' +
        '253-630-8761<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/covington/">more info</a></div>'));
        libraryCollection.add(new library(
        "Des Moines Library",
        2,
        47.40820, -122.31977,
        '<b>Des Moines Library</b><br/>' +
        '21620 11th Avenue S, Des Moines<br/>' +
        '206-824-6066<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/desmoines/">more info</a></div>'));
        libraryCollection.add(new library(
        "Duvall Library",
        3,
        47.74138, -121.98616,
        '<b>Duvall Library</b><br/>' +
        '15619 Main Street NE, Duvall<br/>' +
        '425-788-1173<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Tue:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Wed:</td><td>10am - 7pm</td></tr>' +
        '<tr><td style="text-align: right">Thu:</td><td>1pm - 7pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/duvall/">more info</a></div>'));
        libraryCollection.add(new library(
        "Fairwood Library",
        1,
        47.45059, -122.15481,
        '<b>Fairwood Library</b><br/>' +
        '17009 140th Ave SE, Fairwood<br/>' +
        '425-226-0522<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/fairwood/">more info</a></div>'));
        libraryCollection.add(new library(
        "Fall City Library",
        3,
        47.56884, -121.89392,
        '<b>Fall City Library</b><br/>' +
        '33415 SE 42nd Place, Fall City<br/>' +
        '425-222-5951<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/fallcity/">more info</a></div>'));
        libraryCollection.add(new library(
        "Federal Way Regional Library",
        1,
        47.29436, -122.33192,
        '<b>Federal Way Regional Library</b><br/>' +
        '34200 1st Way S, Federal Way<br/>' +
        '253-838-3668<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/federalway/">more info</a></div>'));
        libraryCollection.add(new library(
        "Federal Way 320th Library",
        2,
        47.31567, -122.32097,
        '<b>Federal Way 320th Library</b><br/>' +
        '848 S 320th St, Federal Way<br/>' +
        '253-839-0257<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/320th/">more info</a></div>'));
        libraryCollection.add(new library(
        "Foster Library",
        2,
        47.47436, -122.28293,
        '<b>Foster Library</b><br/>' +
        '4060 S 144th, Tukwila<br/>' +
        '206-242-1640<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>11am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/foster/">more info</a></div>'));
        libraryCollection.add(new library(
        "Greenbridge Library",
        3,
        47.51620, -122.34519,
        '<b>Greenbridge Library</b><br/>' +
        '9720 8th Ave SW, Seattle<br/>' +
        '206-762-1682<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Tue:</td><td>2 - 7pm</td></tr>' +
        '<tr><td style="text-align: right">Wed-Thu:</td><td>1 - 8pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>12 - 4pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/greenbridge/">more info</a></div>'));
        libraryCollection.add(new library(
        "Issaquah Library",
        1,
        47.53050, -122.03698,
        '<b>Issaquah Library</b><br/>' +
        '10 West Sunset Way, Issaquah<br/>' +
        '425-822-2459<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/issaquah/">more info</a></div>'));
        libraryCollection.add(new library(
        "Kenmore Library",
        3,
        47.76022, -122.24360,
        '<b>Kenmore Library</b><br/>' +
        '18138 73rd NE, Kenmore<br/>' +
        '425-486-8747<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>11am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>11am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/kenmore/">more info</a></div>'));
        libraryCollection.add(new library(
        "Kent Library",
        1,
        47.38247, -122.23414,
        '<b>Kent Library</b><br/>' +
        '212 2nd Avenue N, Kent<br/>' +
        '253-859-3330<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/kent/">more info</a></div>'));
        libraryCollection.add(new library(
        "Kingsgate Library",
        2,
        47.72983, -122.17630,
        '<b>Kingsgate Library</b><br/>' +
        '12315 NE 143rd St, Kirkland<br/>' +
        '425-821-7686<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/kingsgate/">more info</a></div>'));
        libraryCollection.add(new library(
        "Kirkland Library",
        1,
        47.67605, -122.20295,
        '<b>Kirkland Library</b><br/>' +
        '308 Kirkland Ave, Kirkland<br/>' +
        '425-822-2459<br/>' +
        '<div class="hours">' +
        '<table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/kirkland/">more info</a></div>'));
        libraryCollection.add(new library(
        "Lake Forest Park Library",
        3,
        47.75385, -122.27837,
        '<b>Lake Forest Park Library</b><br/>' +
        '17171 Bothell Way NE, Lake Forest Park<br/>' +
        '206-362-8860<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/lakeforestpark/">more info</a></div>'));
        libraryCollection.add(new library(
        "Library Express @ Redmond Ridge",
        3,
        47.69250, -122.04398,
        '<b>Library Express @ Redmond Ridge</b><br/>' +
        '10735 Cedar Park Crescent NE, Redmond<br/>' +
        '425-885-1861<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/libraryexpress/">more info</a></div>'));
        libraryCollection.add(new library(
        "Lake Hills Library",
        2,
        47.60303, -122.13555,
        '<b>Lake Hills Library</b><br/>' +
        '15590 Lake Hills Blvd, Bellevue<br/>' +
        '425-747-3350<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/lakehills/">more info</a></div>'));
        libraryCollection.add(new library(
        "Library Connection @ Crossroads",
        3,
        47.61964, -122.13069,
        '<b>Library Connection @ Crossroads</b><br/>' +
        'Crossroads Shopping Center<br/>' +
        '15600 NE 8th St, Bellevue<br/>' +
        '425-644-6203<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Sat:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>11am - 6pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/crossroads/">more info</a></div>'));
        libraryCollection.add(new library(
        "Library Connection @ Southcenter",
        3,
        47.45898, -122.25696,
        '<b>Library Connection @ Southcenter</b><br/>' +
        'Westfield Shopping Center<br/>' +
        '1386 Southcenter Mall, Tukwila<br/>' +
        '206-242-6044<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Sat:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>11am - 7pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/southcenter/">more info</a></div>'));
        libraryCollection.add(new library(
        "Maple Valley Library",
        2,
        47.38020, -122.04890,
        '<b>Maple Valley Library</b><br/>' +
        '21844 SE 248th St, Maple Valley<br/>' +
        '425-432-4620<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/maplevalley/">more info</a></div>'));
        libraryCollection.add(new library(
        "Mercer Island Library",
        2,
        47.56738, -122.22146,
        '<b>Mercer Island Library</b><br/>' +
        '4400 88th Ave SE, Mercer Island<br/>' +
        '206-236-3537<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/mercerisland/">more info</a></div>'));
        libraryCollection.add(new library(
        "Muckleshoot Library",
        3,
        47.24392, -122.11378,
        '<b>Muckleshoot Library</b><br/>' +
        '39917 Auburn Enumclaw Rd SE, Auburn<br/>' +
        '253-931-6779<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/muckleshoot/">more info</a></div>'));
        libraryCollection.add(new library(
        "Newport Way Library",
        2,
        47.57053, -122.14904,
        '<b>Newport Way Library</b><br/>' +
        '14250 SE Newport Way, Bellevue<br/>' +
        '425-747-2390<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/newportway/">more info</a></div>'));
        libraryCollection.add(new library(
        "North Bend Library",
        2,
        47.49688, -121.78330,
        '<b>North Bend Library</b><br/>' +
        '115 E 4th, North Bend<br/>' +
        '425-888-0554<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/northbend/">more info</a></div>'));
        libraryCollection.add(new library(
        "Redmond Regional Library",
        1,
        47.67899, -122.12805,
        '<b>Redmond Regional Library</b><br/>' +
        '15990 NE 85th, Redmond<br/>' +
        '425-885-1861<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/redmond/">more info</a></div>'));
        libraryCollection.add(new library(
        "Renton Library",
        1,
        47.48205, -122.20335,
        '<b>Renton Library</b><br/>' +
        '100 Mill Avenue S, Renton<br/>' +
        '425-226-6043<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/renton/">more info</a></div>'));
        libraryCollection.add(new library(
        "Renton Highlands Library",
        1,
        47.50341, -122.18072,
        '<b>Renton Highlands Library</b><br/>' +
        '2902 NE 12th St, Renton<br/>' +
        '425-277-1831<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/rentonhighlands/">more info</a></div>'));
        libraryCollection.add(new library(
        "Richmond Beach Library",
        3,
        47.77182, -122.38470,
        '<b>Richmond Beach Library</b><br/>' +
        '19601 21st Ave NW, Shoreline<br/>' +
        '206-546-3522<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/richmondbeach/">more info</a></div>'));
        libraryCollection.add(new library(
        "Sammamish Library",
        2,
        47.60068, -122.03689,
        '<b>Sammamish Library</b><br/>' +
        '825 228th Ave SE, Sammamish<br/>' +
        '425-392-3130<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/sammamish/">more info</a></div>'));
        libraryCollection.add(new library(
        "Shoreline Library",
        1,
        47.75554, -122.32508,
        '<b>Shoreline Library</b><br/>' +
        '345 NE 175th, Shoreline<br/>' +
        '206-362-7550<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>12 - 8pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/shoreline/">more info</a></div>'));
        libraryCollection.add(new library(
        "Skykomish Library",
        3,
        47.70853, -121.36104,
        '<b>Skykomish Library</b><br/>' +
        '100 5th St, Skykomish<br/>' +
        '360-677-2660<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon & Thu:</td><td>1 - 7pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>1 - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 2pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/skykomish/">more info</a></div>'));
        libraryCollection.add(new library(
        "Skyway Library",
        3,
        47.49110, -122.23739,
        '<b>Skyway Library</b><br/>' +
        '7614 S 126th St, Seattle<br/>' +
        '206-772-5541<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/skyway/">more info</a></div>'));
        libraryCollection.add(new library(
        "Snoqualmie Library",
        3,
        47.52988, -121.87221,
        '<b>Snoqualmie Library</b><br/>' +
        '7824 Center Blvd SE, Snoqualmie<br/>' +
        '425-888-1223<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/snoqualmie/">more info</a></div>'));
        libraryCollection.add(new library(
        "Valley View Library",
        3,
        47.44322, -122.27354,
        '<b>Valley View Library</b><br/>' +
        '17850 Military Rd S, SeaTac<br/>' +
        '206-242-6044<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/valleyview/">more info</a></div>'));
        libraryCollection.add(new library(
        "Vashon Library",
        2,
        47.45084, -122.45964,
        '<b>Vashon Library</b><br/>' +
        '17210 Vashon Hwy SW, Vashon Island<br/>' +
        '206-463-2069<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 8pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>11am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/snoqualmie/">more info</a></div>'));
        libraryCollection.add(new library(
        "White Center Library",
        3,
        47.50192, -122.35444,
        '<b>White Center Library</b><br/>' +
        '11220 16th SW, Seattle<br/>' +
        '206-243-0233<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>11am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>11am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>11am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/whitecenter/">more info</a></div>'));
        libraryCollection.add(new library(
        "Woodinville Library",
        1,
        47.75186, -122.08219,
        '<b>Woodinville Library</b><br/>' +
        '17105 Avondale Rd NE, Woodinville<br/>' +
        '425-486-7811<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '<tr><td style="text-align: right">Sun:</td><td>1 - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/woodinville/">more info</a></div>'));
        libraryCollection.add(new library(
        "Woodmont Library",
        3,
        47.36111, -122.30848,
        '<b>Woodmont Library</b><br/>' +
        '26809 Pacific Highway S, Des Moines<br/>' +
        '253-839-0121<br/>' +
        '<div class="hours"><table><tbody>' +
        '<tr><td style="text-align: right">Mon-Thu:</td><td>10am - 9pm</td></tr>' +
        '<tr><td style="text-align: right">Fri:</td><td>10am - 6pm</td></tr>' +
        '<tr><td style="text-align: right">Sat:</td><td>10am - 5pm</td></tr>' +
        '</tbody></table></div>' +
        '<div class="info"><a href="http://www.kcls.org/woodmont/">more info</a></div>'));

        return libraryCollection;
    }

    // The function below has globally visible by appending it to the specified namespace, "LibraryCollection".
    // For example, the init function now has global scope -- you invoke "LibraryCollection.init()".
    WinJS.Namespace.define("LibraryCollection", {
        init: init
    });
})();