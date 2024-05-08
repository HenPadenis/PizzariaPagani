import { Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cardapio', component: CardapioComponent },

];
