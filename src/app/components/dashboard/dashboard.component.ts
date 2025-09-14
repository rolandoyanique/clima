import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  urlImagen='https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad:string='';
  obtenerClima(){
    console.log(this.ciudad);
  }
}
