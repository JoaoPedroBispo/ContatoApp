import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-andre',
  templateUrl: './andre.page.html',
  styleUrls: ['./andre.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AndrePage {

  constructor(private route: Router) { }

  voltar() {
    this.route.navigate(['/home'])
  }

}
