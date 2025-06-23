import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IscrizioneService } from '../iscrizione.service';
import { Campo } from '../campo.model';
import { ListaComponent } from "../lista/lista.component";


interface IscrizioneResponse {
  iscrizione: boolean;
  prezzo: number;
}


@Component({
  selector: 'app-iscrizione',
  imports: [ReactiveFormsModule, ListaComponent],
  templateUrl: './iscrizione.component.html',
  styleUrl: './iscrizione.component.css'
})
export class IscrizioneComponent {

  iscrizioneInviata = signal<boolean>(false);
  iscrizioneResp = signal<IscrizioneResponse | null>(null);

  campi = signal<Campo[] | undefined>(undefined);

  private iscrizioneService = new IscrizioneService();
  iscrizioneForm = new FormGroup({
    campo: new FormControl<Campo | null>(null, {
      validators: [Validators.required] 
    }),
    //numeroOre ...
  });

  get isIscrizioneInviata() {
    return this.iscrizioneInviata();
  }

  ngOnInit(){
    // caricamento dei campi
  }

  onSignup(){
    // Invio del form
  }
}
