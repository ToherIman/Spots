var require = meteorInstall({"client":{"template.chat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.chat.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("chat");                                                                              // 2
Template["chat"] = new Template("Template.chat", (function() {                                             // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    "class": "message_block"                                                                               // 6
  }, "\n    ", Blaze.If(function() {                                                                       // 7
    return Spacebars.call(view.lookup("social"));                                                          // 8
  }, function() {                                                                                          // 9
    return [ "\n    ", HTML.P("\n      ", HTML.SPAN(Spacebars.include(view.lookupTemplate("rooms"))), "\n      ", HTML.SPAN(Spacebars.include(view.lookupTemplate("users"))), "\n    "), "\n    " ];
  }, function() {                                                                                          // 11
    return [ "\n      ", Spacebars.include(view.lookupTemplate("messagesBlock")), "\n    " ];              // 12
  }), "\n  ");                                                                                             // 13
}));                                                                                                       // 14
                                                                                                           // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.header.js                                                                               //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("header");                                                                            // 2
Template["header"] = new Template("Template.header", (function() {                                         // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    "class": "header"                                                                                      // 6
  }, "\n    ", HTML.A({                                                                                    // 7
    "class": "loging_buttons"                                                                              // 8
  }, Spacebars.include(view.lookupTemplate("loginButtons"))), HTML.Raw('\n    <a class="name">SP&#9737;TS</a>\n    <button class="social">\n      Rooms\n    </button>\n  '));
}));                                                                                                       // 10
                                                                                                           // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.map.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.map.js                                                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("map");                                                                               // 2
Template["map"] = new Template("Template.map", (function() {                                               // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    "class": "map_container"                                                                               // 6
  }, "\n    ", Blaze.Unless(function() {                                                                   // 7
    return Spacebars.call(view.lookup("geolocationError"));                                                // 8
  }, function() {                                                                                          // 9
    return [ "\n      ", Blaze._TemplateWith(function() {                                                  // 10
      return {                                                                                             // 11
        name: Spacebars.call("map"),                                                                       // 12
        options: Spacebars.call(view.lookup("mapOptions"))                                                 // 13
      };                                                                                                   // 14
    }, function() {                                                                                        // 15
      return Spacebars.include(view.lookupTemplate("googleMap"));                                          // 16
    }), "\n      " ];                                                                                      // 17
  }, function() {                                                                                          // 18
    return [ "\n      Geolocation faild: ", Blaze.View("lookup:geolocationError", function() {             // 19
      return Spacebars.mustache(view.lookup("geolocationError"));                                          // 20
    }), "\n      " ];                                                                                      // 21
  }), "\n  ");                                                                                             // 22
}));                                                                                                       // 23
                                                                                                           // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.messages.js                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("messagesBlock");                                                                     // 2
Template["messagesBlock"] = new Template("Template.messagesBlock", (function() {                           // 3
  var view = this;                                                                                         // 4
  return [ HTML.DIV({                                                                                      // 5
    "class": "messages_block"                                                                              // 6
  }, "\n      ", Blaze.Each(function() {                                                                   // 7
    return Spacebars.call(view.lookup("messages"));                                                        // 8
  }, function() {                                                                                          // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("message")), "\n      " ];                // 10
  }), "\n  "), HTML.Raw('\n  <form class="new-message">\n    <input type="text" name="message" class="message" placeholder="Type new message">\n  </form>') ];
}));                                                                                                       // 12
                                                                                                           // 13
Template.__checkName("message");                                                                           // 14
Template["message"] = new Template("Template.message", (function() {                                       // 15
  var view = this;                                                                                         // 16
  return HTML.DIV({                                                                                        // 17
    "class": "message"                                                                                     // 18
  }, "\n      ", HTML.A({                                                                                  // 19
    "class": "message_username"                                                                            // 20
  }, Blaze.View("lookup:username", function() {                                                            // 21
    return Spacebars.mustache(view.lookup("username"));                                                    // 22
  })), " ", HTML.SPAN({                                                                                    // 23
    "class": "message_timestamp"                                                                           // 24
  }, Blaze.View("lookup:dateFormat", function() {                                                          // 25
    return Spacebars.mustache(view.lookup("dateFormat"), view.lookup("createdAt"));                        // 26
  })), "\n      ", HTML.DIV("\n        ", HTML.A({                                                         // 27
    "class": "message_text"                                                                                // 28
  }, Blaze.View("lookup:text", function() {                                                                // 29
    return Spacebars.mustache(view.lookup("text"));                                                        // 30
  })), "\n      "), "\n    ");                                                                             // 31
}));                                                                                                       // 32
                                                                                                           // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.rooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.rooms.js                                                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("rooms");                                                                             // 2
Template["rooms"] = new Template("Template.rooms", (function() {                                           // 3
  var view = this;                                                                                         // 4
  return [ HTML.Raw("<p>\n    Rooms:\n  </p>\n  "), HTML.FORM({                                            // 5
    "class": "new-room"                                                                                    // 6
  }, "\n    ", HTML.Raw('<input type="text" name="text" placeholder="Enter room name">'), "\n\n    ", HTML.LABEL(HTML.INPUT({
    type: "checkbox",                                                                                      // 8
    checked: function() {                                                                                  // 9
      return Spacebars.mustache(view.lookup("checked"));                                                   // 10
    },                                                                                                     // 11
    "class": "toggle-checked"                                                                              // 12
  }), "Private"), "\n\n  "), "\n\n  ", Blaze.Each(function() {                                             // 13
    return Spacebars.call(view.lookup("rooms"));                                                           // 14
  }, function() {                                                                                          // 15
    return [ "\n      ", HTML.P({                                                                          // 16
      "class": "room"                                                                                      // 17
    }, Blaze.View("lookup:name", function() {                                                              // 18
      return Spacebars.mustache(view.lookup("name"));                                                      // 19
    }), " ", Blaze.View("lookup:isOwner", function() {                                                     // 20
      return Spacebars.mustache(view.lookup("isOwner"));                                                   // 21
    }), " "), "\n  " ];                                                                                    // 22
  }) ];                                                                                                    // 23
}));                                                                                                       // 24
                                                                                                           // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.spot.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.spot.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("spot");                                                                              // 2
Template["spot"] = new Template("Template.spot", (function() {                                             // 3
  var view = this;                                                                                         // 4
  return HTML.P(HTML.Raw('\n    <p>\n      Spot Info\n      <button class="addSpot">Edit spot info</button>\n      <button class="deleteSpot">Delete spot</button>\n    </p>\n    '), Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("spot"), "editing"));                                  // 6
  }, function() {                                                                                          // 7
    return [ "\n    ", HTML.LI("\n      SpotID: ", Blaze.View("lookup:spot._id", function() {              // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "_id"));                                // 9
    }), "\n    "), "\n    ", HTML.LI("\n      UserID: ", Blaze.View("lookup:spot.user", function() {       // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "user"));                               // 11
    }), "\n    "), "\n    ", HTML.FORM({                                                                   // 12
      "class": "new-spot"                                                                                  // 13
    }, "\n      ", HTML.LI("\n        Spot Name", HTML.INPUT({                                             // 14
      type: "text",                                                                                        // 15
      name: "spotName",                                                                                    // 16
      placeholder: function() {                                                                            // 17
        return Blaze.If(function() {                                                                       // 18
          return Spacebars.call(Spacebars.dot(view.lookup("spot"), "name"));                               // 19
        }, function() {                                                                                    // 20
          return [ " ", Blaze.View("lookup:spot.name", function() {                                        // 21
            return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "name"));                         // 22
          }), " " ];                                                                                       // 23
        }, function() {                                                                                    // 24
          return " Type new ";                                                                             // 25
        });                                                                                                // 26
      }                                                                                                    // 27
    }), "\n      "), "\n      ", HTML.LI("\n        Spot Type", HTML.INPUT({                               // 28
      type: "text",                                                                                        // 29
      name: "spotType",                                                                                    // 30
      placeholder: function() {                                                                            // 31
        return Blaze.If(function() {                                                                       // 32
          return Spacebars.call(Spacebars.dot(view.lookup("spot"), "type"));                               // 33
        }, function() {                                                                                    // 34
          return [ " ", Blaze.View("lookup:spot.type", function() {                                        // 35
            return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "type"));                         // 36
          }), " " ];                                                                                       // 37
        }, function() {                                                                                    // 38
          return " Add type of spot ";                                                                     // 39
        });                                                                                                // 40
      }                                                                                                    // 41
    }), "\n      "), "\n      ", HTML.LI("\n        Description ", HTML.INPUT({                            // 42
      type: "text",                                                                                        // 43
      name: "description",                                                                                 // 44
      placeholder: function() {                                                                            // 45
        return Blaze.If(function() {                                                                       // 46
          return Spacebars.call(Spacebars.dot(view.lookup("spot"), "descr"));                              // 47
        }, function() {                                                                                    // 48
          return [ " ", Blaze.View("lookup:spot.descr", function() {                                       // 49
            return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "descr"));                        // 50
          }), " " ];                                                                                       // 51
        }, function() {                                                                                    // 52
          return " Add description ";                                                                      // 53
        });                                                                                                // 54
      }                                                                                                    // 55
    }), "\n      "), "\n      ", HTML.INPUT({                                                              // 56
      type: "submit",                                                                                      // 57
      value: "Submit"                                                                                      // 58
    }), "\n    "), "\n    " ];                                                                             // 59
  }, function() {                                                                                          // 60
    return [ "\n    ", HTML.LI("\n      SpotID: ", Blaze.View("lookup:spot._id", function() {              // 61
      return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "_id"));                                // 62
    }), "\n    "), "\n    ", HTML.LI("\n      UserID: ", Blaze.View("lookup:spot.user", function() {       // 63
      return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "user"));                               // 64
    }), "\n    "), "\n    ", Blaze.If(function() {                                                         // 65
      return Spacebars.call(Spacebars.dot(view.lookup("spot"), "name"));                                   // 66
    }, function() {                                                                                        // 67
      return [ "\n    ", HTML.LI("\n      Spot Name ", Blaze.View("lookup:spot.name", function() {         // 68
        return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "name"));                             // 69
      }), "\n    "), "\n    " ];                                                                           // 70
    }), "\n    ", Blaze.If(function() {                                                                    // 71
      return Spacebars.call(Spacebars.dot(view.lookup("spot"), "type"));                                   // 72
    }, function() {                                                                                        // 73
      return [ "\n    ", HTML.LI("\n      Spot Type ", Blaze.View("lookup:spot.type", function() {         // 74
        return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "type"));                             // 75
      }), "\n    "), "\n    " ];                                                                           // 76
    }), "\n    ", Blaze.If(function() {                                                                    // 77
      return Spacebars.call(Spacebars.dot(view.lookup("spot"), "descr"));                                  // 78
    }, function() {                                                                                        // 79
      return [ "\n    ", HTML.LI("\n      Spot Description ", Blaze.View("lookup:spot.descr", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("spot"), "descr"));                            // 81
      }), "\n    "), "\n    " ];                                                                           // 82
    }), "\n    " ];                                                                                        // 83
  }), "\n\n  ");                                                                                           // 84
}));                                                                                                       // 85
                                                                                                           // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.users.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.users.js                                                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("users");                                                                             // 2
Template["users"] = new Template("Template.users", (function() {                                           // 3
  var view = this;                                                                                         // 4
  return [ HTML.Raw('<p>\n    Users:\n  </p>\n  <form class="user">\n    <input type="text" name="user" placeholder="find users">\n  </form>\n  '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));                                                           // 6
  }, function() {                                                                                          // 7
    return [ "\n    ", HTML.LI("\n      ", Blaze.View("lookup:username", function() {                      // 8
      return Spacebars.mustache(view.lookup("username"));                                                  // 9
    }), "\n    "), "\n  " ];                                                                               // 10
  }) ];                                                                                                    // 11
}));                                                                                                       // 12
                                                                                                           // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.main.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return HTML.DIV("\n    ", Spacebars.include(view.lookupTemplate("header")), "\n\n    ", HTML.DIV({       // 4
    "class": "mainblock"                                                                                   // 5
  }, "\n\n      ", HTML.DIV({                                                                              // 6
    "class": "chat"                                                                                        // 7
  }, "\n        ", Spacebars.include(view.lookupTemplate("chat")), "\n      "), "\n\n      ", HTML.DIV({   // 8
    "class": "map"                                                                                         // 9
  }, "\n        ", Spacebars.include(view.lookupTemplate("map")), "\n      "), "\n\n     ", HTML.DIV({     // 10
    "class": "spot"                                                                                        // 11
  }, "\n       ", Spacebars.include(view.lookupTemplate("spot")), "\n     "), "\n\n    "), "\n  ");        // 12
}));                                                                                                       // 13
Meteor.startup(Template.body.renderToDocument);                                                            // 14
                                                                                                           // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/chat.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.chat.helpers({                                                                                    // 1
  'social': function () {                                                                                  // 2
    function social() {                                                                                    // 1
      return Session.get('social');                                                                        // 3
    }                                                                                                      // 4
                                                                                                           //
    return social;                                                                                         // 1
  }()                                                                                                      // 1
});                                                                                                        // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/header.js                                                                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"map.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/map.js                                                                                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var MAP_ZOOM = 15;                                                                                         // 1
                                                                                                           //
Meteor.startup(function () {                                                                               // 3
  GoogleMaps.load();                                                                                       // 4
});                                                                                                        // 5
                                                                                                           //
Template.map.onCreated(function () {                                                                       // 7
  var self = this;                                                                                         // 8
                                                                                                           //
  GoogleMaps.ready('map', function (map) {                                                                 // 10
    var marker = void 0;                                                                                   // 11
                                                                                                           //
    self.autorun(function () {                                                                             // 13
      var latLng = Geolocation.latLng();                                                                   // 14
      //Write user position to db                                                                          //
      console.log(latLng);                                                                                 // 16
      var userId = Meteor.userId();                                                                        // 17
      var userPosition = Position.findOne({ user: userId });                                               // 18
                                                                                                           //
      if (!userPosition && Meteor.userId()) {                                                              // 20
        Position.insert({                                                                                  // 21
          user: Meteor.userId(),                                                                           // 22
          latLng: latLng                                                                                   // 23
        });                                                                                                // 21
      } else {                                                                                             // 25
        Position.update({ _id: userPosition._id }, { $set: { latLng: latLng } });                          // 27
      }                                                                                                    // 28
      console.log(userPosition.latLng);                                                                    // 29
      //Finished writing user position to db                                                               //
      if (!latLng) return;                                                                                 // 31
                                                                                                           //
      if (!marker) {                                                                                       // 34
        marker = new google.maps.Marker({                                                                  // 35
          position: new google.maps.LatLng(latLng.lat, latLng.lng),                                        // 36
          map: map.instance,                                                                               // 37
          label: 'R'                                                                                       // 38
        });                                                                                                // 35
      } else {                                                                                             // 40
        marker.setPosition(latLng);                                                                        // 43
      }                                                                                                    // 44
      map.instance.setCenter(marker.getPosition());                                                        // 45
      map.instance.setZoom(MAP_ZOOM);                                                                      // 46
    });                                                                                                    // 49
                                                                                                           //
    //Add custom markers on map                                                                            //
    google.maps.event.addListener(map.instance, 'click', function (event) {                                // 52
      Spots.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), user: Meteor.userId() });           // 53
      console.log(Spots.find().fetch());                                                                   // 54
    });                                                                                                    // 55
                                                                                                           //
    var markers = {};                                                                                      // 57
                                                                                                           //
    Spots.find().observe({                                                                                 // 59
      added: function () {                                                                                 // 60
        function added(document) {                                                                         // 59
          var marker = new google.maps.Marker({                                                            // 61
            draggable: true,                                                                               // 62
            animation: google.maps.Animation.DROP,                                                         // 63
            position: new google.maps.LatLng(document.lat, document.lng),                                  // 64
            label: 'S',                                                                                    // 65
            map: map.instance,                                                                             // 66
            id: document._id                                                                               // 67
          });                                                                                              // 61
                                                                                                           //
          google.maps.event.addListener(marker, 'dragend', function (event) {                              // 70
            Spots.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() } });       // 71
          });                                                                                              // 72
                                                                                                           //
          google.maps.event.addListener(marker, 'click', function (event) {                                // 74
            var selectedMarker = marker.id;                                                                // 75
            Session.set('place', marker.id);                                                               // 76
            console.log(selectedMarker);                                                                   // 77
          });                                                                                              // 78
          markers[document._id] = marker;                                                                  // 79
        }                                                                                                  // 80
                                                                                                           //
        return added;                                                                                      // 59
      }(),                                                                                                 // 59
                                                                                                           //
      changed: function () {                                                                               // 81
        function changed(newDocument, oldDocument) {                                                       // 81
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });            // 82
        }                                                                                                  // 83
                                                                                                           //
        return changed;                                                                                    // 81
      }(),                                                                                                 // 81
      removed: function () {                                                                               // 84
        function removed(oldDocument) {                                                                    // 84
          markers[oldDocument._id].setMap(null);                                                           // 85
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);                              // 86
          delete markers[oldDocument._id];                                                                 // 87
        }                                                                                                  // 88
                                                                                                           //
        return removed;                                                                                    // 84
      }()                                                                                                  // 84
    });                                                                                                    // 59
  });                                                                                                      // 92
});                                                                                                        // 93
                                                                                                           //
Template.map.helpers({                                                                                     // 95
  geolocationError: function () {                                                                          // 96
    function geolocationError() {                                                                          // 96
      var error = Geolocation.error();                                                                     // 97
      return error && error.message;                                                                       // 98
    }                                                                                                      // 99
                                                                                                           //
    return geolocationError;                                                                               // 96
  }(),                                                                                                     // 96
  mapOptions: function () {                                                                                // 100
    function mapOptions() {                                                                                // 100
      var latLng = Geolocation.latLng();                                                                   // 101
      if (GoogleMaps.loaded() && latLng) {                                                                 // 102
        return {                                                                                           // 103
          center: new google.maps.LatLng(latLng.lat, latLng.lng),                                          // 104
          zoom: MAP_ZOOM                                                                                   // 105
        };                                                                                                 // 103
      }                                                                                                    // 107
    }                                                                                                      // 108
                                                                                                           //
    return mapOptions;                                                                                     // 100
  }()                                                                                                      // 100
});                                                                                                        // 95
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/messages.js                                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.messagesBlock.helpers({                                                                           // 1
  messages: function () {                                                                                  // 2
    function messages() {                                                                                  // 1
      var room = Session.get('room');                                                                      // 3
      if (room) {                                                                                          // 4
        return Messages.find({ room: room }, { limit: 20 });                                               // 5
      } else {                                                                                             // 6
        return Messages.find({ room: undefined }, { sort: { createdAt: 1 } }, { limit: 15 });              // 7
      }                                                                                                    // 8
    }                                                                                                      // 9
                                                                                                           //
    return messages;                                                                                       // 1
  }()                                                                                                      // 1
});                                                                                                        // 1
                                                                                                           //
Meteor.setInterval(function () {                                                                           // 12
  var messages = $(".messages_block");                                                                     // 13
  var messagesHeight = messages.prop("scrollHeight");;                                                     // 14
  messages.scrollTop(messagesHeight);                                                                      // 15
}, 1);                                                                                                     // 16
                                                                                                           //
Template.messagesBlock.events({                                                                            // 18
  "submit .new-message": function () {                                                                     // 19
    function submitNewMessage(event) {                                                                     // 18
      event.preventDefault();                                                                              // 20
      var text = event.target.message.value;                                                               // 21
      var room = Session.get('room');                                                                      // 22
                                                                                                           //
      Messages.insert({                                                                                    // 24
        text: text,                                                                                        // 25
        createdAt: new Date(),                                                                             // 26
        owner: Meteor.userId(),                                                                            // 27
        username: Meteor.user().username,                                                                  // 28
        room: room                                                                                         // 29
      });                                                                                                  // 24
      event.target.message.value = "";                                                                     // 31
    }                                                                                                      // 32
                                                                                                           //
    return submitNewMessage;                                                                               // 18
  }()                                                                                                      // 18
});                                                                                                        // 18
                                                                                                           //
Accounts.ui.config({                                                                                       // 35
  passwordSignupFields: "USERNAME_ONLY"                                                                    // 36
});                                                                                                        // 35
                                                                                                           //
Template.message.helpers({                                                                                 // 39
  dateFormat: function () {                                                                                // 40
    function dateFormat(time) {                                                                            // 39
      var date = new Date(time);                                                                           // 41
      var hours = "0" + date.getHours();                                                                   // 42
      var minutes = "0" + date.getMinutes();                                                               // 43
      var seconds = "0" + date.getSeconds();                                                               // 44
      var day = "0" + date.getDate();                                                                      // 45
      var month = "0" + date.getMonth();                                                                   // 46
      var year = date.getFullYear();                                                                       // 47
      var out = "";                                                                                        // 48
      var now = new Date();                                                                                // 49
      if (now - time > 86400000) {                                                                         // 50
        out = day.substr(day.length - 2) + "." + month.substr(day.length - 2) + "." + year;                // 51
      } else {                                                                                             // 52
        out = hours.substr(hours.length - 2) + ":" + minutes.substr(minutes.length - 2) + ":" + seconds.substr(seconds.length - 2);
      }                                                                                                    // 54
      return out;                                                                                          // 55
    }                                                                                                      // 56
                                                                                                           //
    return dateFormat;                                                                                     // 39
  }()                                                                                                      // 39
});                                                                                                        // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/rooms.js                                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.rooms.helpers({                                                                                   // 1
  rooms: function () {                                                                                     // 2
    function rooms() {                                                                                     // 1
                                                                                                           //
      return Rooms.find({ owner: Meteor.userId() });                                                       // 4
    }                                                                                                      // 5
                                                                                                           //
    return rooms;                                                                                          // 1
  }(),                                                                                                     // 1
  isOwner: function () {                                                                                   // 6
    function isOwner() {                                                                                   // 1
      return this.owner === Meteor.userId();                                                               // 7
    }                                                                                                      // 9
                                                                                                           //
    return isOwner;                                                                                        // 1
  }()                                                                                                      // 1
});                                                                                                        // 1
                                                                                                           //
Template.rooms.events({                                                                                    // 13
  "submit .new-room": function () {                                                                        // 14
    function submitNewRoom(event) {                                                                        // 13
      event.preventDefault();                                                                              // 15
      var roomName = event.target.text.value;                                                              // 16
                                                                                                           //
      Rooms.insert({                                                                                       // 18
        name: roomName,                                                                                    // 19
        createdAt: new Date(),                                                                             // 20
        owner: Meteor.userId(),                                                                            // 21
        guests: []                                                                                         // 22
      });                                                                                                  // 18
      event.target.text.value = "";                                                                        // 24
    }                                                                                                      // 25
                                                                                                           //
    return submitNewRoom;                                                                                  // 13
  }(),                                                                                                     // 13
  "click .room": function () {                                                                             // 26
    function clickRoom() {                                                                                 // 13
      Session.set('room', this._id);                                                                       // 27
    }                                                                                                      // 28
                                                                                                           //
    return clickRoom;                                                                                      // 13
  }()                                                                                                      // 13
});                                                                                                        // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spot.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/spot.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.spot.helpers({                                                                                    // 1
  spot: function () {                                                                                      // 2
    function spot() {                                                                                      // 2
      return Spots.findOne(Session.get('place'));                                                          // 3
    }                                                                                                      // 4
                                                                                                           //
    return spot;                                                                                           // 2
  }()                                                                                                      // 2
});                                                                                                        // 1
                                                                                                           //
Template.spot.events({                                                                                     // 7
  "click .addSpot": function () {                                                                          // 8
    function clickAddSpot() {                                                                              // 7
      var spot = Session.get('place');                                                                     // 9
      var cheked = Spots.findOne(spot).editing;                                                            // 10
      Spots.update(spot, { $set: { editing: !cheked } });                                                  // 11
      console.log(cheked);                                                                                 // 12
    }                                                                                                      // 13
                                                                                                           //
    return clickAddSpot;                                                                                   // 7
  }(),                                                                                                     // 7
  "click .deleteSpot": function () {                                                                       // 14
    function clickDeleteSpot() {                                                                           // 7
      var spot = Session.get('place');                                                                     // 15
      Spots.remove(spot);                                                                                  // 16
    }                                                                                                      // 17
                                                                                                           //
    return clickDeleteSpot;                                                                                // 7
  }(),                                                                                                     // 7
  "submit .new-spot": function () {                                                                        // 18
    function submitNewSpot(event) {                                                                        // 7
      event.preventDefault();                                                                              // 19
      var name = event.target.spotName.value;                                                              // 20
      var typeSpot = event.target.spotType.value;                                                          // 21
      var descr = event.target.description.value;                                                          // 22
      var spot = Session.get('place');                                                                     // 23
      var cheked = Spots.findOne(spot).editing;                                                            // 24
      Spots.update(spot, { $set: {                                                                         // 25
          "name": name,                                                                                    // 26
          "type": typeSpot,                                                                                // 27
          "descr": descr,                                                                                  // 28
          "editing": !cheked                                                                               // 29
        }                                                                                                  // 25
      });                                                                                                  // 25
    }                                                                                                      // 32
                                                                                                           //
    return submitNewSpot;                                                                                  // 7
  }()                                                                                                      // 7
});                                                                                                        // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/users.js                                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.users.helpers({                                                                                   // 1
  users: function () {                                                                                     // 2
    function users() {                                                                                     // 2
      return Meteor.users.find();                                                                          // 3
    }                                                                                                      // 4
                                                                                                           //
    return users;                                                                                          // 2
  }()                                                                                                      // 2
});                                                                                                        // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.body.events({                                                                                     // 1
  'click .social': function () {                                                                           // 2
    function clickSocial() {                                                                               // 1
      Session.set('social', !Session.get('social'));                                                       // 3
    }                                                                                                      // 4
                                                                                                           //
    return clickSocial;                                                                                    // 1
  }()                                                                                                      // 1
});                                                                                                        // 1
                                                                                                           //
Template.body.helpers({});                                                                                 // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// lib/collections.js                                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Messages = new Mongo.Collection('messages');                                                               // 1
Rooms = new Mongo.Collection('rooms');                                                                     // 2
Position = new Mongo.Collection('position');                                                               // 3
Spots = new Mongo.Collection('spots');                                                                     // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.chat.js");
require("./client/template.header.js");
require("./client/template.map.js");
require("./client/template.messages.js");
require("./client/template.rooms.js");
require("./client/template.spot.js");
require("./client/template.users.js");
require("./client/template.main.js");
require("./lib/collections.js");
require("./client/chat.js");
require("./client/header.js");
require("./client/map.js");
require("./client/messages.js");
require("./client/rooms.js");
require("./client/spot.js");
require("./client/users.js");
require("./client/main.js");