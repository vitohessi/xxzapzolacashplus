import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Vérification de transfert d\'argent au Maroc | Cashplus';

  constructor(){}
  

  ngOnInit(){
  	$(function(){
  	})
  }
  
}

