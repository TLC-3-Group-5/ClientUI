import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-Buy',
  templateUrl: './Buy.component.html',
  styleUrls: ['./Buy.component.css']
})
export class BuyComponent implements OnInit {

  private CLIENT_SERVER = "https://g5-client-connectivity.herokuapp.com";
  private headers = new HttpHeaders({ 'content-type': 'application/json' });
  
  public avalableProducts: any;
  public avalablePortfolios: any;
  bForm: any = FormGroup;
  isBuying: boolean = false;
  isSelling: boolean = false;

  constructor(
    private clientService: ClientServiceService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadPortfolios();

    this.bForm = this.formBuilder.group({
      "buy-product": [],
      "buy-price": [],
      "buy-quantity": [],
      "buy-portfolioId": [],
    });
  }

  loadProducts() {
    this.clientService.getMarketData().subscribe((data: any) => {
      this.avalableProducts = data.map((product: any) => product?.["TICKER"]);
    })
  }

  public loadPortfolios() {
    const clientId: number = JSON.parse(<string>window.sessionStorage.getItem("user"))?.id;

    this.http.get(this.CLIENT_SERVER + `/client/${clientId}`, { headers: this.headers })
      .subscribe((res) => {
        this.avalablePortfolios = (<any>res)?.portfolios;
      });
  }

  public onBuyStock(form: any) {
    const PLACE_ORDER_URL = this.CLIENT_SERVER + "/client/getOrderStatus";

    if (form.invalid) {
      return alert("Please fill all fields");
    }

    this.isBuying = true;

    const order = {
      portfolio_id: (<HTMLInputElement> document.getElementById("buy-portfolioId"))?.value,
      product: (<HTMLInputElement> document.getElementById("buy-product"))?.value,
      quantity: (<HTMLInputElement> document.getElementById("buy-quantity"))?.value,
      price: (<HTMLInputElement> document.getElementById("buy-price"))?.value,
      side: "BUY"
    };

    // place buy order
    this.http.post(PLACE_ORDER_URL, order, { headers: this.headers })
      .subscribe((res) => {
        this.avalablePortfolios = (<any>res)?.portfolios;
        alert("Buy order placed");
        this.isBuying = false
      },
      (err) => {
        alert("Could not place buy order");
        this.isBuying = false
      });
  }

  public onSellStock(form: any) {
    const PLACE_ORDER_URL = this.CLIENT_SERVER + "/client/getOrderStatus";
    
    if (form.invalid) {
      return alert("Please fill all fields");
    }

    this.isSelling = true;

    const sell = {
      portfolio_id: (<HTMLInputElement> document.getElementById("sell-portfolioId"))?.value,
      product: (<HTMLInputElement> document.getElementById("sell-product"))?.value,
      quantity: (<HTMLInputElement> document.getElementById("sell-quantity"))?.value,
      price: (<HTMLInputElement> document.getElementById("sell-price"))?.value,
      side: "SELL"
    };

     // place sell order
     this.http.post(PLACE_ORDER_URL, sell, { headers: this.headers })
     .subscribe((res) => {
       this.avalablePortfolios = (<any>res)?.portfolios;
       alert("Sell order placed");
       this.isSelling = false
     },
     (err) => {
       alert("Could not place sell order");
       this.isSelling = false
     });
  }

}
