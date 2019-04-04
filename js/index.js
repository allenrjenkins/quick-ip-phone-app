var Jquery = $;
errorMessage = 'Unable to get IP.'; 
 
var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);  
        if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) { 
            document.addEventListener('deviceready', initAds, false);
        } else { 
            initAds();
        }
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        setDeviceData();
        getUserIPAddress();
        Jquery('.event.listening').hide();
        Jquery('.event.received').show();
    }
};

Jquery('#refresh-ip').on("click", function () {
    Jquery('#refresh-ip').addClass('disabled');
    getUserIPAddress();
    Jquery('#refresh-ip').removeClass('disabled');
});

function setDeviceData() {
    Jquery("#device-platform").html(device.platform);
    Jquery("#device-model").html(device.model);
    Jquery("#device-version").html(device.version);
    Jquery("#device-manufacturer").html(device.manufacturer);
}

function getUserIPAddress() {
    Jquery('#current-ip').html('<div class="preloader-wrapper small active"><div class="spinner-layer spinner-green-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>');
    $.get("https://api.ipify.org/", function (data) {
        var obj = data;
        if (obj === '') {
            $("#current-ip").html(errorMessage);
        }
        $("#current-ip").html(obj);
    }).fail(function () {
        $("#current-ip").html(errorMessage);
    });
}

app.initialize();