'use strict';

function translationService(globalSettings) {
    var self = this;

    this.getDefaultLang = function () {
        if (self.defaultLang) {
            return self.defaultLang;
        }

        var localLanguage = navigator.languages[0] || navigator.language || navigator.userLanguage || navigator.browserLanguage || null;
        self.defaultLang = globalSettings.DEFAULT_LANGUAGE;

        if (localLanguage) {
            _.forEach(globalSettings.AVAILABLE_LANGUAGES, function (lang) {
                if (localLanguage.substr(0, 2) === lang.code) {
                    self.defaultLang = lang;
                }
            });
        }

        //TEST PURPOSE FORCE USE OF A DEFAULT LANG
        self.defaultLang = globalSettings.AVAILABLE_LANGUAGES[1];

        self.currentLang = self.defaultLang;
        return self.defaultLang;
    };

    this.getCurrentLang = function () {
        return self.currentLang;
    };

    this.setCurrentLang = function (currentLang) {
        self.currentLang = currentLang;
    };

    this.getAllLang = function () {
        if (!self.languages) {
            self.languages = globalSettings.AVAILABLE_LANGUAGES;
        }

        return self.languages;
    };
}

module.exports = {
    translationService: translationService
};