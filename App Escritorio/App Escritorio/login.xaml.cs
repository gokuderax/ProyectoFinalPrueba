using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace App_Escritorio
{
    /// <summary>
    /// Lógica de interacción para MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, RoutedEventArgs e)
        {
                User user = new User();
                user.username=txtNombre.Text;
                user.password1=txtPass.Password;
                Rest rest = new Rest();
                String result = rest.postUser(user, "http://localhost:3001/login/",true);
                MessageBox.Show(result);
                if (result.Contains("Login correcto"))
                {
                    FormTablas principal = new FormTablas();
                    principal.Show();
                    this.Hide();
                }
        }

        private void btnRegistro_Click(object sender, RoutedEventArgs e)
        {
            Registro registro = new Registro();
            registro.Show();
            this.Close();
        }
    }
}
