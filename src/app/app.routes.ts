import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";

export const rootConfig:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contato',component:ContatoComponent},
    {path:'sobre',component:SobreComponent},
]