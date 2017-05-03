using ProjectManagerSystem.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectManagerSystem.Controllers
{
    public class PMSController : Controller
    {
        //--------------------------------------VIEWS
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menus()
        {
            return View();
        }

        public ActionResult Ocorrencias()
        {
            return View();
        }

        public ActionResult Usuarios()
        {
            return View();
        }

        public ActionResult Projetos()
        {
            return View();
        }

        //--------------------------------------PROJETOS
        public JsonResult GetProjetos()
        {
            PMSDataContext data = new PMSDataContext();
            List<Projeto> listProjetos = data.PMSlistProjetos.ToList();
            return Json(listProjetos, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetListaOcorrencias(int idProjeto)
        {
            PMSDataContext data = new PMSDataContext();
            List<Ocorrencia> listOcorrencias = data.PMSlistOcorrencias.Where(w => w.IdProjeto == idProjeto).ToList();
            return Json(listOcorrencias, JsonRequestBehavior.AllowGet);
        }

        public void AddProjetos(Projeto model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistProjetos.Add(model);
            dc.SaveChanges();
        }
        public void DelProjetos(Projeto model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistProjetos.Attach(model);
            dc.Entry(model).State = EntityState.Deleted;
            dc.SaveChanges();
        }
        [HttpPost]
        public void AlterProjetos(Projeto model)
        {
            PMSDataContext data = new PMSDataContext();
            data.PMSlistProjetos.Attach(model);
            data.Entry(model).State = EntityState.Modified;
            data.SaveChanges();
        }

        //--------------------------------------USUARIOS
        public JsonResult GetUsuarios()
        {
            PMSDataContext data = new PMSDataContext();
            List<Usuario> listUsuarios = data.PMSlistUsuarios.ToList();
            return Json(listUsuarios, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public void AddUsuarios(Usuario model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistUsuarios.Add(model);
            dc.SaveChanges();
        }
        public void DelUsuarios(Usuario model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistUsuarios.Attach(model);
            dc.Entry(model).State = EntityState.Deleted;
            dc.SaveChanges();
        }
        [HttpPost]
        public void AlterUsuarios(Usuario model)
        {
            PMSDataContext data = new PMSDataContext();
            data.PMSlistUsuarios.Attach(model);
            data.Entry(model).State = EntityState.Modified;
            data.SaveChanges();
        }

        //--------------------------------------OCORRENCIAS
        public JsonResult GetOcorrencias()
        {
            PMSDataContext data = new PMSDataContext();
            List<Ocorrencia> listOcorrencias = data.PMSlistOcorrencias.ToList();
            return Json(listOcorrencias, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public void AddOcorrencias(Ocorrencia model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistOcorrencias.Add(model);
            dc.SaveChanges();
        }
        public void DelOcorrencias(Ocorrencia model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistOcorrencias.Attach(model);
            dc.Entry(model).State = EntityState.Deleted;
            dc.SaveChanges();
        }
        [HttpPost]
        public void AlterOcorrencias(Ocorrencia model)
        {
            PMSDataContext data = new PMSDataContext();
            data.PMSlistOcorrencias.Attach(model);
            data.Entry(model).State = EntityState.Modified;
            data.SaveChanges();
        }
    }
}