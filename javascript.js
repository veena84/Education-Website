$(document).ready(function() {
    //feed to parse
    var feed = "http://feeds.feedburner.com/raymondcamdensblog?format=xml";
    
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
    

        }   
    });
    
});



/*
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/onlystudies.html',
        controller:'firstController'
    })
    .when('/onlystudies',{
        templateUrl:'pages/onlystudies.html',
        controller:'onlystudiesController'
    })
    
    .when('/articles',{
        templateUrl:'pages/articles.html',
        controller:'articlesController'
    })
    .when('/services',{
        templateUrl:'pages/services.html',
        controller:'servicesController'        
    })
    .when('/notifications',{
        templateUrl:'pages/notifications.html',
        controller:'notificationsController'        
    })
    .when('/about',{
        templateUrl:'pages/about.html',
        controller:'aboutController'        
    })
    .when('/contact',{
        templateUrl:'pages/contact.html',
        controller:'contactController'        
    })
    .when('/april',{
        templateUrl:'pages/april.html',
        controller:'aprilController'        
    })
    .when('/april01',{
        templateUrl:'pages/april01.html',
        controller:'april01Controller'        
    })
    .when('/april02',{
        templateUrl:'pages/april02.html',
        controller:'april02Controller'        
    })
    .when('/april03',{
        templateUrl:'pages/april03.html',
        controller:'april03Controller'        
    })
    .when('/april04',{
        templateUrl:'pages/april04.html',
        controller:'april04Controller'        
    })
    .when('/april05',{
        templateUrl:'pages/april05.html',
        controller:'april05Controller'        
    })
    .when('/april06',{
        templateUrl:'pages/april06.html',
        controller:'april06Controller'        
    })
    .when('/april07',{
        templateUrl:'pages/april07.html',
        controller:'april07Controller'        
    })
        .when('/april08',{
        templateUrl:'pages/april08.html',
        controller:'april08Controller'        
    })
        .when('/april09',{
        templateUrl:'pages/april09.html',
        controller:'april09Controller'        
    })
        .when('/april10',{
        templateUrl:'pages/april10.html',
        controller:'april10Controller'        
    })
        .when('/april11',{
        templateUrl:'pages/april11.html',
        controller:'april11Controller'        
    })
        .when('/april12',{
        templateUrl:'pages/april12.html',
        controller:'april12Controller'        
    })
    .when('/march',{
        templateUrl:'pages/march.html',
        controller:'marchController'        
    })
        .when('/jobs',{
        templateUrl:'pages/jobs.html',
        controller:'jobsController'        
    })
        .when('/govtjobs',{
        templateUrl:'pages/govtjobs.html',
        controller:'govtjobsController'        
    })
        .when('/cbsl',{
        templateUrl:'pages/cbsl.html',
        controller:'cbslController'        
    })
        .when('/vit',{
        templateUrl:'pages/vit.html',
        controller:'vitController'        
    })
        .when('/neet',{
        templateUrl:'pages/neet.html',
        controller:'neetController'        
    })
        .when('/gate',{
        templateUrl:'pages/gate.html',
        controller:'gateController'        
    })
        .when('/navy',{
        templateUrl:'pages/navy.html',
        controller:'navyController'        
    })
        .when('/ait',{
        templateUrl:'pages/ait.html',
        controller:'aitController'        
    })

});

myApp.controller('cbslController',function($scope){
    
    var listObject = {
            ID : 1,
            Name : "IMG5",
            path: "/images/IMG5.jpg"
        
    };
            $scope.dataholder = listObject;
    
    
});
myApp.controller('contactController',function($scope){
    
    var listObject = {
            ID : 1,
            Name : "1-IMG",
            path: "/images/1-IMG.jpg"
        
    };
            $scope.dataholder = listObject;
    
});
myApp.controller('onlystudiesController',function($scope){
    
    
    
    
});


var listObject = {
            ID : 1,
            Name : "maker",
            path: "/photos/maker.jpg"
        
    };
            $scope.dataholder = listObject;


*/
