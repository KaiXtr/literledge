import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'busca',
        component: SearchComponent
    },
    {
        path: 'entrar',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: SigninComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'quem-somos',
        component: AboutComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: '*',
        pathMatch: 'full',
        component: NotFoundComponent
    }
];
