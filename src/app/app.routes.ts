import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { IscrizioneComponent } from "./iscrizione/iscrizione.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IscrizioneComponent
    },
    {
        path: 'iscrizione', 
        component: IscrizioneComponent
    },
    // {
    //     path: 'prenotazioni',
    // },
];
