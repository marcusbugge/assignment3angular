import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-poke-elem',
  templateUrl: './catalogue-poke-elem.component.html',
  styleUrls: ['./catalogue-poke-elem.component.css']
})
export class CataloguePokeElemComponent implements OnInit {

  @Input() pokemon?: any;

  constructor() {}

  ngOnInit(): void {
    
  }

  
}
