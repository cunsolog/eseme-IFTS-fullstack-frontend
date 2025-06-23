import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Campo } from './campo.model';
import { Iscrizione } from './iscrizione.model';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IscrizioneService {

  private campi = signal<Campo[]>([]);
  private HttpClient = inject(HttpClient);

  loadedCampi = this.campi.asReadonly();

    loadCampi() {
        return this.HttpClient.get<Campo[]>('http://localhost:3002/campi')
        .pipe(
            catchError((error) => throwError(() => new Error('Qualcosa è andato storto nel caricamento dei Piani')))
        );
    }

    invioIscrizione(iscrizione: Iscrizione) {
    }

}