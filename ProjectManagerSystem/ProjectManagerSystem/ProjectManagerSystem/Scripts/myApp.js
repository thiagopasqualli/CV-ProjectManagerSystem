
var myApp = angular.module('myApp', []);
myApp.controller('projetosCtrl', function ($http) {
    var ctrl = this;
    ctrl.newData = null;
    ctrl.btnAdd = true;
    ctrl.btnSave = false;
    ctrl.Classificacao = '';

    // USUARIOS
    //==========================================================================================

    //GetUsuarios
    $http.get("/PMS/GetUsuarios")
      .then(function (response) {
          ctrl.usuarios = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });
    //AddUsuarios
    ctrl.AddUser = function () {
        $http.post("/PMS/AddUsuarios", ctrl.newData);
        location.reload();
    }
    //DeleteUsuario
    ctrl.DeleteUser = function () {
        $http.post("/PMS/DelUsuarios", ctrl.newData);
        ctrl.Clear();
        location.reload();
    }
    //Limpar
    ctrl.Clear = function () {
        ctrl.newData = "";
    }
    //Selecionar 
    ctrl.SelectUser = function (user) {

        ctrl.newData = user;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
    }
    //Alterar
    ctrl.AlterUser = function () {
        $http.post("/PMS/AlterUsuarios", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        location.reload();

        ctrl.Clear();
    }

    // PROJETOS
    //==========================================================================================
    //GetProjetos
    $http.get("/PMS/GetProjetos")
      .then(function (response) {
          ctrl.projetos = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });
    //AddProjetos
    ctrl.AddProject = function () {
        $http.post("/PMS/AddProjetos", ctrl.newData);
        location.reload();
    }
    //DeleteProjetos
    ctrl.DeleteProject = function () {
        $http.post("/PMS/DelProjetos", ctrl.newData);
        ctrl.Clear();
        location.reload();
    }
    //Selecionar 
    ctrl.SelectProject = function (project) {

        ctrl.newData = project;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
    }
    //Alterar
    ctrl.AlterProject = function () {
        $http.post("/PMS/AlterProjetos", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        location.reload();

        ctrl.Clear();
    }

    // OCORRENCIAS
    //==========================================================================================
    //GetOcorrencias
    $http.get("/PMS/GetOcorrencias")
      .then(function (response) {
          ctrl.ocorrencias = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });
    //GetListaOcorrencias por Projeto
    $http.get("/PMS/GetListaOcorrencias")
      .then(function (response) {
          ctrl.projetoOcorrencias = response.data;
      })
      .catch(function (response) {
          console.log(response);
      });

    //AddOcorrencias
    ctrl.AddOcorrencias = function () {
        $http.post("/PMS/AddOcorrencias", ctrl.newData);
        location.reload();
    }
    //DeleteOcorrencias
    ctrl.DeleteOcorrencias = function () {
        $http.post("/PMS/DelOcorrencias", ctrl.newData);
        ctrl.Clear();
        location.reload();
    }
    //Selecionar 
    ctrl.SelectOcorrencias = function (occurrence) {
        ctrl.newData = occurrence;
        ctrl.btnSave = true;
        ctrl.btnAdd = false;
    }
    //Alterar
    ctrl.AlterOcorrencias = function () {
        $http.post("/PMS/AlterOcorrencias", ctrl.newData);
        ctrl.btnSave = false;
        ctrl.btnAdd = true;
        location.reload();
        ctrl.Clear();
    }
});