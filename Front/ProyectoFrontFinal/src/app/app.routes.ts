import { Routes } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicidadComponent } from './publicidad/publicidad.component';

export const routes: Routes = [

    {
        "path": '', component: InicioComponent
    },
    {
        "path": '', component: CabeceroComponent
    },
    {
        "path": '', component: PublicidadComponent
    },    
    {
        "path": '', component: PiePaginaComponent
    },
    {
        "path":"",redirectTo: "canciones", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    }  




];
