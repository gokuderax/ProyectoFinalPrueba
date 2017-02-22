using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace App_Escritorio
{
    /// <summary>
    /// Lógica de interacción para Registro.xaml
    /// </summary>
    public partial class Registro : Window
    {
        public Registro()
        {
            InitializeComponent();
        }

        private void btnRegistro_Click(object sender, RoutedEventArgs e)
        {
            User user = new User();

            user.username = txtNombre.Text;
            user.password1 = txtPass.Password;
            user.password2 = txtPass2.Password;
            user.email = txtEmail.Text;
            Rest rest = new Rest();

            String result = rest.postUser(user, "http://localhost:3001/registrer/");
            MessageBox.Show(result);
        }
    }
}
