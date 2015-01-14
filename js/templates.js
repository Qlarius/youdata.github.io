(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("main.html",
    "<ion-side-menu-content>\n" +
    "  <ion-nav-bar class=\"bar-assertive\">\n" +
    "    <ion-nav-back-button>\n" +
    "    </ion-nav-back-button>\n" +
    "\n" +
    "    <ion-nav-buttons side=\"left\">\n" +
    "      <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n" +
    "      </button>\n" +
    "    </ion-nav-buttons>\n" +
    "  </ion-nav-bar>\n" +
    "\n" +
    "  <ion-nav-view name=\"menuContent\"></ion-nav-view>\n" +
    "</ion-side-menu-content> ");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("dashboard/dashboard.html",
    "<ion-view title=\"Dashboard\">\n" +
    "  <ion-content>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("directives/banner-text-ad.html",
    "<ion-slide-box show-pager='false' class=\"pointer\" delegate-handle=\"WILLREPLACE\">\n" +
    "  <ion-slide>\n" +
    "    <div class=\"banner-text-ad-container margin-top-5px margin-bottom-5px\" ng-click=\"bannerTextAd.next(handle)\">\n" +
    "      <div class='center'>\n" +
    "        {{bannerTextAd.ngModel.category}}\n" +
    "        <h3>{{bannerTextAd.ngModel.offer_amt | currency}}</h3>\n" +
    "      </div>\n" +
    "      <div class=\"absolute bottom-1px right-5px line-height-15px \">\n" +
    "        <div class='float-right padding-right-5px bold'>{{bannerTextAd.ngModel.offer_amt_phase_1 | currency}}</div>\n" +
    "        <div class='float-right padding-right-5px italic gray'>Swipe or tap to reveal</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-slide>\n" +
    "  <ion-slide>\n" +
    "    <div class=\"banner-text-ad-container margin-top-5px margin-bottom-5px\" ng-click=\"collectBannerImpressions(handle)\">\n" +
    "      <div spinner spinner-name=\"spinner-1\">\n" +
    "        <div class=\"ad-container\">\n" +
    "          <img style=\"width: 100%; overfow: hidden;\" ng-src=\"{{bannerTextAd.ngModel['media_piece']['url']}}\"></img>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"absolute bottom-1px right-5px\">\n" +
    "          <div class='float-right padding-right-5px bold'>{{bannerTextAd.ngModel.offer_amt_phase_1 | currency}}</div>\n" +
    "          <div class='float-right padding-right-5px italic gray'>Swipe or tap to collect (1/2)</div>\n" +
    "          </div>\n" +
    "        </div>  \n" +
    "      </div>    \n" +
    "    </div>\n" +
    "  </ion-slide>\n" +
    "  <ion-slide>\n" +
    "    <div class=\"banner-text-ad-container margin-top-5px margin-bottom-5px\" ng-click=\"\">\n" +
    "      <div class=\"ad-container padding\">\n" +
    "        <h4><a href=\"{{bannerTextAd.ngModel.media_piece.display_url}}\">{{bannerTextAd.ngModel.media_piece.title}}</a></h4>\n" +
    "        <div class=\"gray\">{{bannerTextAd.ngModel.media_piece.body_copy}}</div>\n" +
    "        <a href=\"{{bannerTextAd.ngModel.media_piece.display_url}}\">{{bannerTextAd.ngModel.media_piece.display_url}}</a>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"absolute bottom-1px right-5px\">\n" +
    "        <div class='float-right padding-right-5px bold'>{{bannerTextAd.ngModel.offer_amt_phase_2 | currency}}</div>\n" +
    "        <div class='float-right padding-right-5px italic gray'>Swipe or tap to collect (2/2)</div>\n" +
    "        </div>\n" +
    "      </div>      \n" +
    "    </div>\n" +
    "  </ion-slide>\n" +
    "</ion-slide-box>");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("sidebar/sidebar.html",
    "<ion-side-menu side=\"left\" has-header=\"true\">\n" +
    "  <ion-content>\n" +
    "    <ul class=\"list\">\n" +
    "      <a ui-sref=\"angular-adget.dashboard\" class=\"item\" menu-close>Dashboard</a>\n" +
    "      <a ui-sref=\"angular-adget.spontster-ads.text-ads\" class=\"item\" menu-close>Ads</a>\n" +
    "    </ul>\n" +
    "  </ion-content>\n" +
    "</ion-side-menu>");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("spontster-ads/spontster-ads.html",
    "<ion-view title=\"Sponster Ads\">\n" +
    "  <ion-header-bar align-title=\"left\" class=\"bar-subheader bar-stable\">\n" +
    "    <i class=\"ion-person icon-med float-left\"></i> <div  class=\"float-left padding-top-3px padding-left-5px\">Greg Kerzhner</div>\n" +
    "    <div class='float-right padding-top-3px'>\n" +
    "      {{balanceObj.balance | currency}}</i>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    <ui-view name=\"content\"></ui-view>\n" +
    "  </ion-content>\n" +
    "  <ion-footer-bar>\n" +
    "    <div class=\"button-bar\">\n" +
    "      <a ui-sref=\"angular-adget.spontster-ads.text-ads\" class=\"button\" ng-class='{\"button-assertive\": state.current.name == \"angular-adget.spontster-ads.text-ads\"}'><i class=\"ion-document-text\" data-pack=\"default\"></i> Text Ads</a>\n" +
    "      <a ui-sref=\"angular-adget.spontster-ads.video-ads\" class=\"button\" ng-class='{\"button-assertive\": state.current.name == \"angular-adget.spontster-ads.video-ads\"}'><i class=\"ion-play\" data-pack=\"default\"></i> Video Ads</a>\n" +
    "    </div>\n" +
    "  </ion-footer-bar>\n" +
    "</ion-view>");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("spontster-ads/text-ads.html",
    "<banner-text-ad ng-model=\"ads[0]\" balance=\"balance\"></banner-text-ad>\n" +
    "<banner-text-ad ng-model=\"ads[1]\" balance=\"balance\"></banner-text-ad>\n" +
    "<banner-text-ad ng-model=\"ads[2]\" balance=\"balance\"></banner-text-ad>");
}]);
})();

(function(module) {
try { app = angular.module("angular-adget.templates"); }
catch(err) { app = angular.module("angular-adget.templates", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("spontster-ads/video-ads.html",
    "<div class=\"padding\">\n" +
    "  <h3>Video Ads</h3>\n" +
    "</div>");
}]);
})();
