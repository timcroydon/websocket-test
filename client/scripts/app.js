/*global L, ko */

var app = (function () {
    'use strict';

    var self = {
        location: ko.observable(),
        heading: ko.observable()
    };

    function setHeading(heading) {

    }

    function setLocation(pos) {
        self.location(pos);
        self.marker.setLatLng(pos);
    }

    self.initMap = function () {
        // TODO: get actual position
        var map = L.map('map').setView([51.505, -0.09], 13),
            marker = L.marker([51.505, -0.09], {
                title: 'My location',
                alt: 'My current location'
            }).addTo(map);

        map.on('click', function (e) {
            setLocation(e.latlng);
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 18
        }).addTo(map);

        self.map = map;
        self.marker = marker;
    };

    self.initMap();

    return self;
}());

ko.applyBindings(app);
