import { Component, inject, signal } from '@angular/core';
import { Campo } from '../campo.model';
import { HttpClient } from '@angular/common/http';
import { IscrizioneService } from '../iscrizione.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  private HttpClient = inject(HttpClient);
  campi = signal<Campo[] | undefined>(undefined);
  private iscrizioneService = inject(IscrizioneService);

  ngOnInit(){
    //
  }

}
