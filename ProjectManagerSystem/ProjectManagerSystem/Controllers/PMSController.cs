using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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

        public ActionResult Usuarios()
        {
            return View();
        }

        public ActionResult Projetos()
        {
            return View();
        }

        //--------------------------------------PROJETOS

        public string GetProjetos()
        {
            PMSDataContext data = new PMSDataContext();
            var listProjetos = data.PMSlistProjetos
                .Include("Usuarios")
                .Select(c => new
                {
                    Id = c.Id,
                    IdBR = c.IdBR,
                    IdLinx = c.IdLinx,
                    Nome = c.Nome,
                    Descricao = c.Descricao,
                    InicioPrevisto = c.InicioPrevisto,
                    FimPrevisto = c.FimPrevisto,
                    Status = c.Status,
                    NomeUsuario = c.Usuarios.NomeUsuario,
                    IdUsuario = c.IdUsuario
                })
                .ToList();

            var convert = JsonConvert.SerializeObject(listProjetos, new IsoDateTimeConverter());
            return convert;
        }

        public void AddProjetos(Projeto model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistProjetos.Add(model);
            dc.SaveChanges();
        }
        [HttpPost]
        public void ExcluirProjeto(Projeto model)
        {
            PMSDataContext dc = new PMSDataContext();
            dc.PMSlistProjetos.Attach(model);
            model.Status = "Excluido";
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
       
        [HttpPost]
        public void AlterUsuarios(Usuario model)
        {
            PMSDataContext data = new PMSDataContext();
            data.PMSlistUsuarios.Attach(model);
            data.Entry(model).State = EntityState.Modified;
            data.SaveChanges();
        }
        public Boolean DelUsuarios(Usuario model)
        {
            PMSDataContext dc = new PMSDataContext();
            PMSDataContext data = new PMSDataContext();
            var listProjetos = data.PMSlistProjetos;
            if (!listProjetos.Any(w => w.IdUsuario == model.Matricula && w.Status != "Excluido"))
            {
                dc.PMSlistUsuarios.Attach(model);
                model.Status = "Excluido";
                dc.SaveChanges();
                return true;
            }
            return false;

        }
        //--------------------------------------OCORRENCIAS

        public string GetListaOcorrencias(int id)
        {
            PMSDataContext data = new PMSDataContext();
            List<Ocorrencia> listOcorrencias = data.PMSlistOcorrencias.Where(w => w.IdProjeto == id).ToList();

            var convert = JsonConvert.SerializeObject(listOcorrencias, new IsoDateTimeConverter());
            return convert;
        }

        [HttpPost]
        public void AddOcorrencias(int Id, string Desc, string Titulo)
        {
            PMSDataContext data = new PMSDataContext();
            Projeto projeto = data.PMSlistProjetos.FirstOrDefault(c => c.Id == Id);
            DateTime thisDay = DateTime.Now;
            data.PMSlistOcorrencias.Add(new Ocorrencia { DescricaoOcorrencia = Desc, TituloOcorrencia = Titulo, IdProjeto = Id, DataHora = thisDay });


            data.SaveChanges();
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