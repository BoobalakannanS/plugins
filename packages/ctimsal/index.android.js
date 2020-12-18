"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ctimsalCommon = require("./common");
//var application = require("tns-core-modules/application");
// var context = application.android.context;
// var activity = application.android.foregroundActivity;
var loadClientUI,
    updateClientUI,
    updateClientToken,
    displayClientErrorCallBack,
    exitClient;
var msalObj;

let MyClass = com.ctinfotech.msal.MSALLIB.extend({
    LoadUI: function (argData, isSharedMode) {
        loadClientUI(argData, isSharedMode);
        //needs to handle page
        //console.log("LoadUI :: " + argData);
    },
    Exit: function (argData) {
        exitClient(argData);
        // console.log("Exit :: " + argData);
    },
    UpdateToken: function (argData) {
        updateClientToken(argData);
        //  console.log("UpdateToken :: " + argData);
    },
    UpdateClientUI: function (argData) {
        updateClientUI(argData);
        // console.log("UpdateClientUI :: " + argData);
    },
    displayError: function (argData) {
        displayClientErrorCallBack(argData);
        // console.log("displayError :: " + argData);
    }
    // UpdateIsShared: function (argData) {
    //     console.log("UpdateIsShared :: " + argData);

    // },
    // ShowLog: function (argData) {
    //     console.log("ShowLog :: " + argData);
    // }
});
var MSAL = (function (_super) {
    __extends(MSAL, _super);

    function MSAL(clientId, redirectUri, tenantId, loadUI, context) {
        loadClientUI = loadUI;
        msalObj = new MyClass(clientId, redirectUri, tenantId, context);
        return this;
    }

    MSAL.prototype.signIn = function (updateUI, displayErrorCallBack, activity) {
        updateClientUI = updateUI;
        displayClientErrorCallBack = displayErrorCallBack;
        msalObj.super.SignIn(activity);
    };

    MSAL.prototype.signOut = function (exitFunc, displayErrorCallBack) {
        exitClient = exitFunc;
        displayClientErrorCallBack = displayErrorCallBack;
        msalObj.super.SignOut();
    };

    MSAL.prototype.refreshToken = function (updateToken, displayErrorCallBack, activity) {
        updateClientToken = updateToken;
        displayClientErrorCallBack = displayErrorCallBack;
        msalObj.super.RefreshToken(activity);
    };

    return MSAL;
}(ctimsalCommon.Common));
exports.MSAL = MSAL;

