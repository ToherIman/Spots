(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Accounts = Package['accounts-base'].Accounts;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var _ = Package.underscore._;

/* Package-scope variables */
var VK;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt_accounts-vk/packages/mrt_accounts-vk.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/mrt:accounts-vk/lib/accounts_vk.js                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Accounts.oauth.registerService('vk');                                                                             // 1
                                                                                                                  // 2
if (Meteor.isClient) {                                                                                            // 3
    Meteor.loginWithVk = function(options, callback) {                                                            // 4
        // support a callback without options                                                                     // 5
        if (! callback && typeof options === "function") {                                                        // 6
            callback = options;                                                                                   // 7
            options = null;                                                                                       // 8
        }                                                                                                         // 9
                                                                                                                  // 10
        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);        // 11
        VK.requestCredential(options, credentialRequestCompleteCallback);                                         // 12
    };                                                                                                            // 13
} else {                                                                                                          // 14
    Accounts.addAutopublishFields({                                                                               // 15
        forLoggedInUser: ['services.vk'],                                                                         // 16
        forOtherUsers: [                                                                                          // 17
            'services.vk.id',                                                                                     // 18
            'services.vk.nickname',                                                                               // 19
            'services.vk.gender'                                                                                  // 20
        ]                                                                                                         // 21
    });                                                                                                           // 22
}                                                                                                                 // 23
                                                                                                                  // 24
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/mrt:accounts-vk/lib/vk_server.js                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
VK = {};                                                                                                          // 1
                                                                                                                  // 2
Oauth.registerService('vk', 2, null, function(query) {                                                            // 3
                                                                                                                  // 4
    var response    = getTokenResponse(query);                                                                    // 5
    var accessToken = response.accessToken;                                                                       // 6
    var identity    = getIdentity(accessToken);                                                                   // 7
                                                                                                                  // 8
    var serviceData = {                                                                                           // 9
        accessToken: accessToken,                                                                                 // 10
        expiresAt: (+new Date) + (1000 * response.expiresIn)                                                      // 11
    };                                                                                                            // 12
                                                                                                                  // 13
    var whitelisted = ['uid', 'nickname', 'first_name', 'last_name', 'sex', 'bdate', 'timezone', 'photo', 'photo_big', 'city', 'country'];
                                                                                                                  // 15
    var fields = _.pick(identity, whitelisted);                                                                   // 16
    _.extend(serviceData, fields);                                                                                // 17
    if (response.email)                                                                                           // 18
        serviceData.email = response.email;                                                                       // 19
                                                                                                                  // 20
    serviceData.id = serviceData.uid;                                                                             // 21
    delete serviceData.uid;                                                                                       // 22
                                                                                                                  // 23
    return {                                                                                                      // 24
        serviceData: serviceData,                                                                                 // 25
        options: {                                                                                                // 26
            profile: {                                                                                            // 27
                name: identity.nickname || (identity.first_name + ' ' + identity.last_name)                       // 28
            }                                                                                                     // 29
        }                                                                                                         // 30
    };                                                                                                            // 31
});                                                                                                               // 32
                                                                                                                  // 33
// returns an object containing:                                                                                  // 34
// - accessToken                                                                                                  // 35
// - expiresIn: lifetime of token in seconds                                                                      // 36
var getTokenResponse = function (query) {                                                                         // 37
    var config = ServiceConfiguration.configurations.findOne({service: 'vk'});                                    // 38
    if (!config) {                                                                                                // 39
        throw new ServiceConfiguration.ConfigError("Service not configured");                                     // 40
    }                                                                                                             // 41
                                                                                                                  // 42
    var responseContent;                                                                                          // 43
                                                                                                                  // 44
    try {                                                                                                         // 45
        // Request an access token                                                                                // 46
        responseContent = HTTP.post(                                                                              // 47
            "https://api.vk.com/oauth/access_token", {                                                            // 48
                params: {                                                                                         // 49
                    client_id:     config.appId,                                                                  // 50
                    client_secret: config.secret,                                                                 // 51
                    code:          query.code,                                                                    // 52
                    redirect_uri: Meteor.absoluteUrl("_oauth/vk?close=close")                                     // 53
                }                                                                                                 // 54
            }).content;                                                                                           // 55
                                                                                                                  // 56
    } catch (err) {                                                                                               // 57
        throw _.extend(new Error("Failed to complete OAuth handshake with vkontakte. " + err.message),            // 58
            {response: err.response});                                                                            // 59
    }                                                                                                             // 60
    // Success!  Extract the vkontakte access token and expiration                                                // 61
    // time from the response                                                                                     // 62
    var parsedResponse = JSON.parse(responseContent);                                                             // 63
                                                                                                                  // 64
    var vkAccessToken = parsedResponse.access_token;                                                              // 65
    var vkExpires = parsedResponse.expires_in;                                                                    // 66
                                                                                                                  // 67
    if (!vkAccessToken) {                                                                                         // 68
        throw new Error("Failed to complete OAuth handshake with vkontakte " +                                    // 69
            "-- can't find access token in HTTP response. " + responseContent);                                   // 70
    }                                                                                                             // 71
    return {                                                                                                      // 72
        accessToken: vkAccessToken,                                                                               // 73
        expiresIn: vkExpires,                                                                                     // 74
        email: parsedResponse.email || false                                                                      // 75
    };                                                                                                            // 76
};                                                                                                                // 77
                                                                                                                  // 78
var getIdentity = function (accessToken) {                                                                        // 79
                                                                                                                  // 80
    var result = HTTP.get(                                                                                        // 81
        "https://api.vk.com/method/users.get", {params: {                                                         // 82
            access_token: accessToken,                                                                            // 83
            fields: 'uid, nickname, first_name, last_name, sex, bdate, timezone, photo, photo_big, city, country' // 84
        }});                                                                                                      // 85
                                                                                                                  // 86
    if (result.error) // if the http response was an error                                                        // 87
        throw result.error;                                                                                       // 88
                                                                                                                  // 89
    return result.data.response[0];                                                                               // 90
};                                                                                                                // 91
                                                                                                                  // 92
VK.retrieveCredential = function(credentialToken) {                                                               // 93
    return Oauth.retrieveCredential(credentialToken);                                                             // 94
};                                                                                                                // 95
                                                                                                                  // 96
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//# sourceMappingURL=mrt_accounts-vk.js.map
