import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima.service';
import { NgIf,CommonModule  } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  urlImagen='https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad:string='';
  query=false;
  loading:boolean=false;
  temperatura:number=0;
  humedad=0;
  clima='';
  error:boolean=false;
  constructor(private _serviceClima:ClimaService){}
  obtenerClima(){
    this.query=false;
    this.loading=true;
    this._serviceClima.getClima(this.ciudad).subscribe(data=>{
      this.query=true;
      this.loading=false;
      this.temperatura=data.main.temp - 273;
      this.humedad=data.main.humidity;
      this.clima=data.weather[0].main;
    },error=>{
      this.mostrarError();
    })
    
  }
  mostrarError(){
    this.error=true;
    this.loading=false;
    setTimeout(()=>{
      this.error=false;
      this.ciudad='';
    },3000)
}
}
