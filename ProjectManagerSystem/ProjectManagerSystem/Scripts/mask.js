'use strict';
myApp.directive('mask', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {
            element.mask(attrs.mask);

            function format(value) {
                if (value) {
                    var ano = value.substr(0, 4);
                    var mes = value.substr(5, 2);
                    var dia = value.substr(8, 2);
                    return (dia + "/" + mes + "/" + ano);
                }
            }

            ngModel.$formatters.push(format);
        }
    };
});

