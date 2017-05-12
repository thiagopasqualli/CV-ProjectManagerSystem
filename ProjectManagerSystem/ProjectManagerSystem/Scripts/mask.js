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
                    var data = dia + "/" + mes + "/" + ano;
                    return data;
                }
            }
            ngModel.$formatters.push(format);
        }
    };
});


myApp.directive('validaData', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.mask = function (value) {
                if (value === undefined || value === null || value === "") {
                    return true;
                }
                return moment(value, ["DD/MM/YYYY"], true).isValid();
            }
        }
    };
});
