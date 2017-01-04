//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var Random = Package.random.Random;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var VK;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/mrt_accounts-vk/packages/mrt_accounts-vk.js              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt:accounts-vk/lib/accounts_vk.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Accounts.oauth.registerService('vk');                                                                                  // 1
                                                                                                                       // 2
if (Meteor.isClient) {                                                                                                 // 3
    Meteor.loginWithVk = function(options, callback) {                                                                 // 4
        // support a callback without options                                                                          // 5
        if (! callback && typeof options === "function") {                                                             // 6
            callback = options;                                                                                        // 7
            options = null;                                                                                            // 8
        }                                                                                                              // 9
                                                                                                                       // 10
        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);             // 11
        VK.requestCredential(options, credentialRequestCompleteCallback);                                              // 12
    };                                                                                                                 // 13
} else {                                                                                                               // 14
    Accounts.addAutopublishFields({                                                                                    // 15
        forLoggedInUser: ['services.vk'],                                                                              // 16
        forOtherUsers: [                                                                                               // 17
            'services.vk.id',                                                                                          // 18
            'services.vk.nickname',                                                                                    // 19
            'services.vk.gender'                                                                                       // 20
        ]                                                                                                              // 21
    });                                                                                                                // 22
}                                                                                                                      // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 34
}).call(this);                                                       // 35
                                                                     // 36
                                                                     // 37
                                                                     // 38
                                                                     // 39
                                                                     // 40
                                                                     // 41
(function () {                                                       // 42
                                                                     // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt:accounts-vk/lib/vk_client.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
VK = {};                                                                                                               // 1
                                                                                                                       // 2
VK.requestCredential = function (options, credentialRequestCompleteCallback) {                                         // 3
                                                                                                                       // 4
    if (!credentialRequestCompleteCallback && typeof options === 'function') {                                         // 5
        credentialRequestCompleteCallback = options;                                                                   // 6
        options = {};                                                                                                  // 7
    }                                                                                                                  // 8
                                                                                                                       // 9
    var config = ServiceConfiguration.configurations.findOne({service: 'vk'});                                         // 10
    if (!config) {                                                                                                     // 11
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError("Service not configured"));
        return;                                                                                                        // 13
    }                                                                                                                  // 14
                                                                                                                       // 15
    var credentialToken = Random.id();                                                                                 // 16
    var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);                 // 17
    var display = mobile ? 'touch' : 'popup';                                                                          // 18
    var scope = '';                                                                                                    // 19
                                                                                                                       // 20
    if (config.scope) {                                                                                                // 21
        scope = config.scope;                                                                                          // 22
        if (options && options.requestPermissions) {                                                                   // 23
            scope = scope + ',';                                                                                       // 24
        }                                                                                                              // 25
    }                                                                                                                  // 26
                                                                                                                       // 27
    if (options && options.requestPermissions) {                                                                       // 28
        scope = scope + options.requestPermissions.join(',');                                                          // 29
    }                                                                                                                  // 30
                                                                                                                       // 31
    var loginUrl =                                                                                                     // 32
        'https://oauth.vk.com/authorize' +                                                                             // 33
            '?client_id=' + config.appId +                                                                             // 34
            '&scope='     + scope +                                                                                    // 35
            '&redirect_uri=' + Meteor.absoluteUrl('_oauth/vk?close=close', {replaceLocalhost: false}) +                // 36
            '&response_type=code' +                                                                                    // 37
            '&display=' + display +                                                                                    // 38
            '&state=' + credentialToken;                                                                               // 39
    Oauth.initiateLogin(credentialToken, loginUrl, credentialRequestCompleteCallback);                                 // 40
};                                                                                                                     // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 93
}).call(this);                                                       // 94
                                                                     // 95
                                                                     // 96
                                                                     // 97
                                                                     // 98
                                                                     // 99
                                                                     // 100
(function () {                                                       // 101
                                                                     // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt:accounts-vk/lib/template.vk_configure.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("configureLoginServiceDialogForVk");                                                              // 2
Template["configureLoginServiceDialogForVk"] = new Template("Template.configureLoginServiceDialogForVk", (function() { // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<p>\n        First, you'll need to register your client on VKontakte. Follow these steps:\n    </p>\n    "), HTML.OL("\n        ", HTML.Raw('<li>\n            Visit <a href="http://vk.com/editapp?act=create" target="_blank">http://vk.com/editapp?act=create</a>\n        </li>'), "\n        ", HTML.LI("\n            Set Callback URL to: ", HTML.SPAN({
    "class": "url"                                                                                                     // 6
  }, Blaze.View(function() {                                                                                           // 7
    return Spacebars.mustache(view.lookup("siteUrl"));                                                                 // 8
  })), "\n        "), "\n    ") ];                                                                                     // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 121
}).call(this);                                                       // 122
                                                                     // 123
                                                                     // 124
                                                                     // 125
                                                                     // 126
                                                                     // 127
                                                                     // 128
(function () {                                                       // 129
                                                                     // 130
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt:accounts-vk/lib/vk_configure.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.configureLoginServiceDialogForVk.siteUrl = function () {                                                      // 1
    return Meteor.absoluteUrl({                                                                                        // 2
        replaceLocalhost: true                                                                                         // 3
    });                                                                                                                // 4
};                                                                                                                     // 5
                                                                                                                       // 6
Template.configureLoginServiceDialogForVk.fields = function () {                                                       // 7
    return [                                                                                                           // 8
        {property: 'appId',  label: 'App Id'},                                                                         // 9
        {property: 'secret', label: 'App Secret'},                                                                     // 10
        {property: 'scope', label: 'Scope'}                                                                            // 11
    ];                                                                                                                 // 12
};                                                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 151
}).call(this);                                                       // 152
                                                                     // 153
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mrt:accounts-vk'] = {}, {
  VK: VK
});

})();
