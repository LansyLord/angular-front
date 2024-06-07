import { Component, OnInit } from '@angular/core';
import { Briefing } from '../model/briefing';
// import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Briefing[] = [
  {_id: "1", client: 'Cliente 1', service: 'Serviço 1', date: '2023-06-01'},
  {_id: "2", client: 'Cliente 2', service: 'Serviço 2', date: '2023-06-02'},
  // Adicione mais dados conforme necessário
];


@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrl: './briefings.component.scss',
})

export class BriefingsComponent{
  briefings: Briefing[] = [];
  displayedColumns: string[] = ["client", "service", ""]
  Briefings = ELEMENT_DATA;
}
