import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {

  marketData:any = [];

  constructor(private clientService:ClientServiceService) { }

  ngOnInit() {
    this.clientService.getMarketData().subscribe((data: {})=>{
      console.log(data);
      this.marketData = data;
    })
  }

}
