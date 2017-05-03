var myApp = angular.module('myApp', []);
myApp.controller('userCtrl', function ($http, $window) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.btnSave = false;
    ctrl.salvar = false;
    ctrl.alterar = false;
    ctrl.showAlterarButton = true;

    //Get
    $http.get("/PMS/GetUsuarios")
      .then(function (response) {
          ctrl.usuarios = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });

    //Add
    ctrl.AddUser = function () {
        $http.post("/PMS/AddUsuarios", ctrl.newData);
        location.reload();
    }

    //Limpar
    ctrl.Clear = function () {
        ctrl.newData = {};
    }

    //Alterar
    ctrl.AlterUser = function () {
        $http.post("/PMS/AlterUsuarios", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        ctrl.salvar = false;
        location.reload();
    }

    ctrl.HabilitarEdicao = function () {
        ctrl.alterar = false;
        ctrl.showAlterarButton = false;
        ctrl.salvar = true;
    }

    ctrl.Reload = function () {
        ctrl.newData = {};
        ctrl.btnAdd = true;
        ctrl.btnSave = false;
        ctrl.salvar = false;
        ctrl.alterar = false;
        ctrl.showAlterarButton = true;
    }

    ctrl.ExcluirUser = function () {
        $http.post("/PMS/DelUsuarios", ctrl.newData).then(function (response) {
            if ((response.data) == "True")
                window.alert("excluiu");
            else
                window.alert("Usuario Vinculado!");
        })}

    //Selecionar 
    ctrl.SelectUser = function (user) {
        ctrl.newData = user;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
        ctrl.showAlterarButton = true;
        ctrl.visualizar = true;
        ctrl.alterar = true;
        ctrl.salvar = false;
    }
});
