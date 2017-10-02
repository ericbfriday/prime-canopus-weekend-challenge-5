myApp.controller('RealEstateController', function (RealEstateService) {
    var vm = this;

    RealEstateService.getRealEstate();

    vm.getRealEstate = function () {
        RealEstateService.getRealEstate();
        // console.log('RealEstateController');
        // vm.realEstateListings = RealEstateService.realEstateListings;
        vm.realEstateListings = RealEstateService.realEstateListings;
        // console.log('logging vm.realEstateListings (controller) => ', vm.realEstateListings);
    };

    vm.addRealEstateSale = function () {
        var realEstateToAdd = {
            rent: vm.rentIn,
            cost: vm.costIn,
            sqft: vm.sqftIn,
            city: vm.cityIn
        };
        // console.log('in addRealEstate of RealEstateController. realEstateToAdd -> ', realEstateToAdd);
        RealEstateService.addRealEstate(realEstateToAdd);
        
    };

    // console.log('logging vm.realEstateListings => ', vm.realEstateListings);
});