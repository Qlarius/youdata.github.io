angular.module('angular-adget', [
  'ionic',
  'angular-adget.templates',
  'ui.router',
  'angular-adget.sidebar',
  'angular-adget.spontster-ads',
  'angular-adget.dashboard',
  'angular-adget.banner-text-ad',
  'angular-spinner',
  'angular-adget.models.banner-text-ad',
  'angular-adget.spontster-ads.text-ads',
  'angular-adget.spontster-ads.video-ads'
])
.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('angular-adget', {
      abstract: true,
      url: '',
      views: {
        'sidebar': {
          templateUrl: 'sidebar/sidebar.html',
          controller: 'SidebarController'
        },        
        'content': {
          templateUrl: 'main.html'
        }
      }
    });

}) 
.run(function(){

})


angular.module('angular-adget.dashboard', [

])

.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('angular-adget.dashboard', {
      url: "/",
      views: {      
        'menuContent': {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardController'
        }     
      }
    })
  ;
})
.controller('DashboardController', function($scope) {
 
})


angular.module('angular-adget.banner-text-ad', [

])
.directive("bannerTextAd", function() {
  return {
    templateUrl : 'directives/banner-text-ad.html',
    controller: 'BannerTextAdController',
    scope: {
      ngModel: "=ngModel",
      balance: "=balance"
    },
    compile: function ($element, attrs) {
      attrs.generatedHandle = Math.random().toString(36).substring(7);
      $element[0].innerHTML = $element[0].innerHTML.replace('WILLREPLACE', attrs.generatedHandle);
    }
  }
})

.controller('BannerTextAdController', function($scope, $element, $timeout, spinner, BannerTextAdPresenter){
  var handle = $element[0].childNodes[0].getAttribute('delegate-handle');
  $scope.bannerTextAd;

  $scope.$watch('ngModel', function(newVal, oldVal){
    if(newVal != oldVal){
      $scope.bannerTextAd  = new BannerTextAdPresenter(newVal, handle);
    }
  })

  $scope.collectBannerImpressions = function(){
    $scope.bannerTextAd.collectBannerImpressions().then(function(result){
      $scope.balance = result;
    })
  }
})

.factory('BannerTextAdPresenter', function($ionicSlideBoxDelegate, spinner, BannerTextAd, $q){
  var BannerTextAdPresenter = function(ngModel, handle, balance){
    this.ngModel = ngModel;
    this.handle = handle;
    this.balance = balance;
  }

  BannerTextAdPresenter.prototype.next = function(){ 
    $ionicSlideBoxDelegate.$getByHandle(this.handle).next();
  }

  BannerTextAdPresenter.prototype.collectBannerImpressions = function(){
    var deferred = $q.defer();
    $ionicSlideBoxDelegate.$getByHandle(this.handle).next();
    BannerTextAd.collectBannerImpressions().then(function(result){
      deferred.resolve(result);
    })
    return deferred.promise;
  }


  return BannerTextAdPresenter;
});
angular.module('angular-adget.sidebar', [

])
.controller('SidebarController', function($scope, $ionicSideMenuDelegate) {

})
angular.module('angular-adget.spontster-ads', [

])

.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('angular-adget.spontster-ads', {
      url: "/spontster-ads",
      abstract: true,
      views: {      
        'menuContent': {
          templateUrl: 'spontster-ads/spontster-ads.html',
          controller: 'SponsterAdsController'
        }    
      }
    })
  ;
})
.controller('SponsterAdsController', function($scope, $timeout, $state) {
  $scope.state = $state;
  $scope.balanceObj = {balance: 1.24};
})

angular.module('angular-adget.spontster-ads.text-ads', [

])

.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('angular-adget.spontster-ads.text-ads', {
      url: "/text",
      views: {      
        'content': {
          templateUrl: 'spontster-ads/text-ads.html',
          controller: 'TextAdsController'
        }     
      }
    })
  ;
})
.controller('TextAdsController', function($scope, $timeout) {
  $scope.ads = [];
  $timeout(function(){
    $scope.ads = [
      {
        category: 'Food - Beer',
        offer_amt_phase_1: '0.08',
        offer_amt_phase_2: '0.09',
        media_piece: {
          url: "http://i.imgur.com/G8DPJik.png",
          title: 'Beer',
          body_copy: 'Drink it before it drinks you!',
          display_url: 'http://google.com'
        }

      },
      {
        category: 'Food - Dining',
        offer_amt_phase_1: '0.13',
        offer_amt_phase_2: '0.06',
        media_piece: {
          url: "http://i.imgur.com/Zrv8xil.png",
          title: 'Salad',
          body_copy: 'The other white meat.',
          display_url: 'http://google.com'
        }
      },
      {
        category: 'Retail - Clothing',
        offer_amt_phase_1: '0.11',
        offer_amt_phase_2: '0.05',
        media_piece: {
          url: "http://i.imgur.com/0xX0Ddk.png",
          title: 'Pants',
          body_copy: 'Home is where they aren\'t',
          display_url: 'http://google.com'
        }
      }
    ]
  });
 
})

/*

    <div class="ydadget-text-phase">

          <% if offer.media_piece %>
              <p class="ydadget-ad-title"><%= offer.media_piece.title %></strong></p>
              <p class="ydadget-ad-copy"><%= offer.media_piece.body_copy %></p>
              <p class="ydadget-ad-display-url"><%= offer.media_piece.display_url %></p>
          <% end %>

    </div>

    <div id="ydadget-banner-phase-<%= offer.id %>" class="ydadget-banner-phase">
      <%= image_tag(offer.media_piece.resource.url, :class => "banner") if offer.media_piece %>
    </div>


    <div id="ydadget-ad-cover-<%= offer.id %>" class="ydadget-category-announce">
      <p class="ydadget-category"><%= offer.media_piece.ad_category.ad_category_name if offer.media_piece %></p>
      <p class="ydadget-big-amount"><%= number_to_currency(offer.offer_amt) if offer.media_piece %></p>
    </div>
*/
angular.module('angular-adget.spontster-ads.video-ads', [

])

.config(function ($locationProvider, $httpProvider, $stateProvider) {
  $stateProvider
    .state('angular-adget.spontster-ads.video-ads', {
      url: "/video",
      views: {      
        'content': {
          templateUrl: 'spontster-ads/video-ads.html',
          controller: 'VideoAdsController'
        }     
      }
    })
  ;
})
.controller('VideoAdsController', function($scope) {
   
})

angular.module('angular-adget.models.banner-text-ad', [

])

.factory('BannerTextAd', function($q, $timeout){
  var BannerTextAd = {}

  //show initial picture
  BannerTextAd.revealBanner = function(){

  }

  //show text ad
  BannerTextAd.collectBannerImpressions = function(){
    var deferred = $q.defer();

    $timeout(function(){
      deferred.resolve({balance: 4.12})
    }, 500);

    return deferred.promise;
  };

  //user clicked on text ad, show final screen
  BannerTextAd.closeOffer = function(){

  };

  return BannerTextAd;
});