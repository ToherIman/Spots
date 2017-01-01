let MAP_ZOOM = 15;

Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.onCreated(function() {
  let self = this;

  GoogleMaps.ready('map', function(map) {
    let marker;

    self.autorun(function () {
      let latLng = Geolocation.latLng();
      //Write user position to db
      console.log(latLng);
      const userId = Meteor.userId();
      const userPosition = Position.findOne({user: userId});

      if(!userPosition && Meteor.userId()) {
        Position.insert({
            user: Meteor.userId(),
            latLng: latLng
        });
      }
      else {
        Position.update({_id: userPosition._id}, { $set: {latLng: latLng}});
      }
      console.log(userPosition.latLng);
      //Finished writing user position to db
      if(! latLng)
      return;

      if(!marker) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance,
          label: 'R'
        });
      }

      else {
        marker.setPosition(latLng);
      }
      map.instance.setCenter(marker.getPosition());
      map.instance.setZoom(MAP_ZOOM);


    });

    //Add custom markers on map
    google.maps.event.addListener(map.instance, 'click', function(event) {
      Spots.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), user: Meteor.userId() });
      console.log(Spots.find().fetch());
    });

     var markers = {};

    Spots.find().observe({
      added (document) {
        let marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          label: 'S',
          map: map.instance,
          id: document._id
        });

        google.maps.event.addListener(marker, 'dragend', function(event) {
          Spots.update(marker.id, {$set: {lat: event.latLng.lat(), lng: event.latLng.lng()}});
        });

        google.maps.event.addListener(marker, 'click', function(event) {
          let selectedMarker = marker.id;
          Session.set('place', marker.id);
          console.log(selectedMarker);
        });
        markers[document._id] = marker;
      },
      changed: function (newDocument, oldDocument) {
        markers[newDocument._id].setPosition({lat: newDocument.lat, lng: newDocument.lng});
      },
      removed: function (oldDocument) {
        markers[oldDocument._id].setMap(null);
        google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
        delete markers[oldDocument._id];
      }
    });


  });
});

Template.map.helpers({
  geolocationError: function () {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function () {
    var latLng = Geolocation.latLng();
    if(GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM
      };
    }
  }
});
