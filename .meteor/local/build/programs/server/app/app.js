var require = meteorInstall({"lib":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collections.js                                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Messages = new Mongo.Collection('messages');                         // 1
Rooms = new Mongo.Collection('rooms');                               // 2
Position = new Mongo.Collection('position');                         // 3
Spots = new Mongo.Collection('spots');                               // 4
///////////////////////////////////////////////////////////////////////

}},"server":{"login.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/login.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
ServiceConfiguration.configurations.remove({                         // 1
            service: 'vk'                                            // 2
});                                                                  // 1
                                                                     //
ServiceConfiguration.configurations.insert({                         // 5
            service: 'vk',                                           // 6
            appId: '5368051', // Your app id                         // 7
            secret: 'RVmrBnHQIgaXLUMO4TSa' // Your app secret        // 8
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

},"methods.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
                                                                     //
Meteor.startup(function () {                                         // 3
                                                                     //
  return Meteor.methods({                                            // 5
                                                                     //
    removePosition: function removePosition() {                      // 7
                                                                     //
      return Position.remove({});                                    // 9
    },                                                               // 11
                                                                     //
    removeSpots: function removeSpots() {                            // 13
      return Spots.remove({});                                       // 14
    }                                                                // 15
                                                                     //
  });                                                                // 5
});                                                                  // 19
///////////////////////////////////////////////////////////////////////

},"users.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/users.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./server/login.js");
require("./server/methods.js");
require("./server/users.js");
//# sourceMappingURL=app.js.map
