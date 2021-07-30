import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transdetail',
  templateUrl: './transdetail.component.html',
  styleUrls: ['./transdetail.component.css'],
  inputs: ["mytdata"]
})
export class TransdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
