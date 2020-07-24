import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psicologo-detail',
  templateUrl: './psicologo-detail.component.html',
  styleUrls: ['./psicologo-detail.component.css']
})
export class PsicologoDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let psicologoId = this.route.snapshot.paramMap.get('psicologoId');
    console.log(psicologoId);
  }

}