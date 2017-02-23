using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App_Escritorio
{
    class User
    {
        [JsonProperty("id")]
        public String Id { get; set; }
        [JsonProperty("username")]
        public String username { get; set; }
        [JsonProperty("password1")]
        public String password1 { get; set; }
        [JsonProperty("password2")]
        public String password2 { get; set; }
        [JsonProperty("email")]
        public String email { get; set; }
        public String token { get; set; }

    }
}
