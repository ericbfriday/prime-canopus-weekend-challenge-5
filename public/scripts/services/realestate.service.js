myApp.service('RealEstateService', function($http){
    var sv = this;

    // console.log('in real estate service');

    sv.realEstateListings = {listings: []};

    // original code here
    // sv.getRealEstate = function(realEstate){
    //     $http({
    //         method: 'GET',
    //         url: '/realestate'
    //     }).then(function(response){
    //         console.log('response', response);
    //         sv.realEstateListings.listings = response;
    //     });
    // };

    sv.getRealEstate = function(realEstate){
        $http({
            method: 'GET',
            url: 'https://api.mlab.com/api/1/databases/heroku_lxv3p541/collections/listings?apiKey=HZt6doRFY6LI-amPWmSUuasM-lItM1p4'
        }).then(function(response){
            // console.log('response', response);
            sv.realEstateListings.listings = response;
        });
    };

    // original code here:
    // sv.addRealEstate = function(realEstateToAdd){
    //     console.log('in realestate.service POST function -> ', realEstateToAdd);
    //     $http({
    //         method: 'POST',
    //         url: '/realestate',
    //         data: realEstateToAdd
    //     }).then(function(response){
            // console.log('real estate posted -> ', response);
    //         sv.getRealEstate();
    //     });
    // };

    sv.addRealEstate = function(realEstateToAdd){
        console.log('in realestate.service POST function to Heroku -> ', realEstateToAdd);
        $http({
            method: 'POST',
            url: 'https://api.mlab.com/api/1/databases/heroku_lxv3p541/collections/listings?apiKey=HZt6doRFY6LI-amPWmSUuasM-lItM1p4',
            data: realEstateToAdd
        }).then(function(response){
            // console.log('real estate posted -> ', response);
            sv.getRealEstate();
        });
    };
});