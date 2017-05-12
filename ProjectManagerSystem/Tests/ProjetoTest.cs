using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectManagerSystem.EntityFramework;
using System.Linq;

namespace Tests
{
    [TestClass]
    public class ProjetoTest
    {
        
        [TestMethod]
        public void Testa_IdBR_Null()
        {
            using (var ctx = new PMSDataContext())
            {
            }
           

        }
      

        [TestMethod]
        public void Testa_IdBR_Maisde20Caracteres()
        {
            Projeto p = new Projeto();
            p.IdBR = "qwertyuiopçlkjhgfdsazxcvb123";
            Assert.AreEqual("qwertyuiopçlkjhgfdsazxcvb123", p.IdBR);
        }
    }
}
