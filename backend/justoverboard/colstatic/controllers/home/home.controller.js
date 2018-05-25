import ModalController from '../modal/modal.controller.js'


class HomeController {
    constructor($scope, $http, $document, $uibModal) {
        
        this.init($scope, $http);
        this.open = (trackName, trackID) => this.popupOpen($uibModal, trackName, trackID); 

        this.songs = [
            {
                id: 'one',
                title: 'Rain',
                artist: 'Drake',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            },
            {
                id: 'two',
                title: 'Walking',
                artist: 'Nicki Minaj',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: 'three',
                title: 'Barrlping with Carl (featureblend.com)',
                artist: 'Akon',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: 'four',
                title: 'Angry cow sound?',
                artist: 'A Cow',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: 'five',
                title: 'Things that open, close and roll',
                artist: 'Someone',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            }
        ];
    }


    init($scope, $http){
        
 
        $http.get('/tracks').then(
            (resp)=>{
                $scope.tracks = resp.data
            }, 
            (err)=>{
                console.log(err)
            })
    }

    popupOpen($uibModal, trackName, trackID) {

        console.log('trk name', trackName, trackID)
        var parentElem = undefined;
        var modalInstance = $uibModal.open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './controllers/modal/modal.template.html',
            controller: ModalController,
            controllerAs: '$ctrl',
            size: 'lg',
            appendTo: parentElem,

            resolve: {
                trackName: () => trackName,
                trackID: () => trackID
            }
        });


        // обработка причин закрытия окна - нажатие "выход" или "принятие"
        modalInstance.result.then(
            (smth)=>{console.log('smth', smth)}, 
            (err)=>{console.log('err', err)}
        )


    }
}

export default HomeController








// angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
//   var $ctrl = this;
//   $ctrl.items = ['item1', 'item2', 'item3'];

//   $ctrl.animationsEnabled = true;

//   $ctrl.open = function () {
//     var parentElem = undefined;
//     var modalInstance = $uibModal.open({
//         animation: $ctrl.animationsEnabled,
//         ariaLabelledBy: 'modal-title',
//         ariaDescribedBy: 'modal-body',
//         templateUrl: '../modal/modal.template.html',
//         controller: ModalController,
//         controllerAs: '$ctrl',
//         size: 'lg',
//         appendTo: parentElem,

//     });

//     modalInstance.result.then(function () {
//         console.log('modalInstance then')
//     }, function () {
//         console.info('Modal dismissed at: ' + new Date());
//     });
//   };

  

  

  
// });

// // Please note that $uibModalInstance represents a modal window (instance) dependency.
// // It is not the same as the $uibModal service used above.

// angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance) {
//   var $ctrl = this;


//   $ctrl.ok = function () {
//     $uibModalInstance.close();
//   };

//   $ctrl.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });

// // Please note that the close and dismiss bindings are from $uibModalInstance.

// angular.module('ui.bootstrap.demo').component('modalComponent', {
//   templateUrl: 'myModalContent.html',
//   bindings: {
//     resolve: '<',
//     close: '&',
//     dismiss: '&'
//   },
//   controller: function () {
//     var $ctrl = this;

//     $ctrl.ok = function () {
//       $ctrl.close();
//     };

//     $ctrl.cancel = function () {
//       $ctrl.dismiss({$value: 'cancel'});
//     };
//   }
// });