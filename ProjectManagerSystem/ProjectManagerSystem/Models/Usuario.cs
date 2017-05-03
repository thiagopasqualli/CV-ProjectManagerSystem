using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectManagerSystem.EntityFramework
{
    public class Usuario
    {
        public int Matricula { get; set; }
        public string NomeUsuario { get; set; }
        public string Email { get; set; }
        public decimal QtdHorasNominais { get; set; }
        public decimal QtdHorasDisponiveis { get; set; }
        public string Status { get; set; }
        public List<Projeto> Projetos { get; set; }
    }
}