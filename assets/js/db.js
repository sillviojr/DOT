// Your web app's Firebase configuration
var  firebaseConfig = {
    apiKey: "AIzaSyD9w2EXvFOb8K8c-w3f09ql8xMGnwg9yAU",
    authDomain: "dotcom-d0a76.firebaseapp.com",
    databaseURL: "https://dotcom-d0a76-default-rtdb.firebaseio.com",
    projectId: "dotcom-d0a76",
    storageBucket: "dotcom-d0a76.appspot.com",
    messagingSenderId: "126691817203",
    appId: "1:126691817203:web:7e591c350a292152ac2986"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
 // Certifique-se de não estar sobrescrevendo 'firebase'
const firebase = require('firebase/app');
                 require('firebase/auth');
                 require('firebase/database');

  
  // Set up our register function
  function register() {
    // Get all our input fields
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    nome = document.getElementById('nome').value;
    sobrenome = document.getElementById('sobrenome').value;
    dataNascimento = document.getElementById('dataNascimento').value;
    cpf = document.getElementById('cpf').value;
    cep = document.getElementById('cep').value;
    endereco = document.getElementById('endereco').value;
    bairro = document.getElementById('bairro').value;
    numero = document.getElementById('numero').value;
    cidade = document.getElementById('cidade').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email ou Senha inválidos!');
        return;
    }
    if (!validate_field(nome) || !validate_field(sobrenome) || !validate_field(dataNascimento) || 
        !validate_field(cpf) || !validate_field(cep) || !validate_field(endereco) || 
        !validate_field(bairro) || !validate_field(numero) || !validate_field(cidade)) {
        alert('Preencha todos os campos obrigatórios corretamente!');
        return;
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Declare user variable
            var user = userCredential.user;
  
      // Add this user to Firebase Database
      var database_ref = database.ref();

    // Create User data
    var user_data = {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        cpf: cpf,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        numero: numero,
        cidade: cidade,
        last_login: Date.now()
    };
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // Done
      alert('Usuário criado com sucesso!');
  })
  .catch(function(error) {
      // Firebase will use this to alert of its errors
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
  });
}

  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }