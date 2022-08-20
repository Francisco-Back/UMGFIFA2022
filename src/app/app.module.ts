import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { SedesComponent } from './sedes/sedes.component';
import { PartidosComponent } from './partidos/partidos.component';
import { EstadiosComponent } from './estadios/estadios.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    HomeComponent,
    PaisesComponent,
    GroupComponent,
    SedesComponent,
    PartidosComponent,
    EstadiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }