(function () {
    'use strict';

    var DEFAULT_MAX_LENGTH = 100;

    function WavesDataValueController() {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.maxLength = ctrl.maxLength | DEFAULT_MAX_LENGTH;
        };
    }

    angular
        .module('web')
        .component('wavesDataValue', {
            controller: WavesDataValueController,
            bindings: {
                maxLength: '<?',
                text: '<?'
            },
            template: '{{$ctrl.text|limitTo:$ctrl.maxLength}}{{$ctrl.text.length > $ctrl.maxLength ? "&hellip;" : ""}}'
        });
})();