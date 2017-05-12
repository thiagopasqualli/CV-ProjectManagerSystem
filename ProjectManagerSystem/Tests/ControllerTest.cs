using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectManagerSystem.EntityFramework;

namespace Tests
{
    [TestClass]
    public class ControllerTest
    {
        [TestMethod]
        public string RetornaTesteComCamposVazios()
        {
            using(var ctx = new PMSDataContext())
            {
                var proj = 4;

                return proj.ToString();                
                
            }
        }
    }
}
