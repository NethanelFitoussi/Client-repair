# Client-repair


Creation des fichers pour la connection

<ul>
	<li>ng generate module pages/auth --routing</li>
	<li>ng g c pages/auth/login</li>
	<li>ng g c pages/auth/regiter</li>
	<li>ng g c pages/auth/logout</li>
</ul>

Completer les route pour que l'on soit rediriger sur nos pages par l'url

'''
//Auth Routes Imports
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent }
];

'''



Création des vues 
Par exemple :
'''
<main role="main">
  <div class="container">
    <form class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mt-3 mb-3 font-weight-normal">Welcome</h1>
        <p>Motorcycle builders and road lovers</p>
        <hr>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <button class="btn btn-lg btn-primary btn-block mt-5" type="submit">Login</button>
    </form>
  </div>
</main>

'''