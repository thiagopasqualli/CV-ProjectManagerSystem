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
        confirma = confirm("Tem certeza que deseja excluir esse usuário?");
        if (confirma) {
            $http.post("/PMS/DelUsuarios", ctrl.newData).then(function (response) {
                if ((response.data) == "True") {
                    window.alert("Usuário excluído");
                    location.reload();
                }
                else
                    window.alert("Usuario vinculado a um projeto. Não é possível deletar.");
            })
        }
    }

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

    ctrl.Clear = function () {
        ctrl.newData = {};
        ctrl.newData == null;
    }

    ctrl.verificaDadosLimpar = function () {
        if (ctrl.newData == null)
            return true;
        else
            return false;
    }
});
