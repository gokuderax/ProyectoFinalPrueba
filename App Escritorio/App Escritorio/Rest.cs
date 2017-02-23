using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace App_Escritorio
{
    class Rest
    {
        private String token;
        public string postUser(User user, string url,bool login)
        {
                try{
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url); // + (WebUtility.UrlEncode(JsonConvert.SerializeObject(txtNombre.ToString()))));
                request.Method = WebRequestMethods.Http.Post; //post for post, duh
                request.ContentType = "application/json; charset=UTF-8";
                request.Accept = "application/json"; string userJson = JsonConvert.SerializeObject(user);
                if (login == false)
                {
                    using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                    {
                        string json = JsonConvert.SerializeObject(user);

                        streamWriter.Write(json);
                        streamWriter.Flush();
                        streamWriter.Close();
                    }
                }   
                else
                {
                    request.Headers.Set("username", user.username);
                    request.Headers.Set("password1", user.password1);
                }
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse(); //response es un json
                    StreamReader sr = new StreamReader(response.GetResponseStream(), Encoding.UTF8);
                    String cadena = sr.ReadToEnd();
                    // User userRecib = JsonConvert.DeserializeObject<User>(cadena);
                    if (cadena.Contains("rro"))
                        return cadena;
                    else
                    {
                        token = cadena;
                        return "Login correcto";
                    }
            
            }
            catch (WebException exceptionWEB_GET)
            {
                return exceptionWEB_GET.Message;
            }
            catch (Exception exceptionGET)
            {

                return exceptionGET.Message;
            }
        }


    }
}
