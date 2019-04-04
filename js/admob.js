 var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) {  
    admobid = {
      banner: 'YOUR_CA_APP_PUB_ID' ,
         interstitial: 'YOUR_CA_APP_PUB_ID'
    };
  } 

// it will display smart banner at top center, using the default options 
if(AdMob) { 
    AdMob.createBanner({ adId: admobid.banner, position: AdMob.AD_POSITION.TOP_CENTER, autoShow: true });
} 

function initAds() {
  if (! AdMob ) { return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: false,
    autoShow: true
  });
}