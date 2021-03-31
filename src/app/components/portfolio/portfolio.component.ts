
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private CLIENT_SERVER = "https://g5-client-connectivity.herokuapp.com";
  headers = new HttpHeaders({ 'content-type': 'application/json' });


  closeResult = '';
  public input: any;
  sessionService: SessionsService;
  public portfolios: any;
  public selectedPortfolioDetails: any;

  constructor(
    private modalService: NgbModal,
    private clientService:ClientServiceService,
    private http: HttpClient,
    private router: Router,
    private ss:SessionsService,
  ){
    this.input = {
      name: "",
      email: ""
    };
    this.sessionService = ss;
  }

  ngOnInit(): void {
    this.getPortfolios();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

   // adding portfolio
  public portfolio() {
    if (this.input.name) {
      this.input.email = window.sessionStorage.getItem("email");

      this.http.post(this.CLIENT_SERVER+'/portfolio/create', this.input, { headers: this.headers })
        .subscribe((res) => {
          this.getPortfolios()
        }),
        () => console.log("successfully added");
    }
  }

  public onSave() {
    this.modalService.dismissAll();
    this.portfolio();
  }

  // getting all portfolios
  public getPortfolios(){
    const clientId: number = JSON.parse(<string>window.sessionStorage.getItem("user"))?.id;

    this.http.get(this.CLIENT_SERVER+`/client/${clientId}`, { headers: this.headers })
        .subscribe((res) => {
          this.portfolios = (<any>res)?.portfolios;
        }),
        () => console.log("successfully added");
  }

  public onViewModal(porfolioId: number, content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });

    this.getPortfolioDetails(porfolioId);
  }

  public getPortfolioDetails(id: number) {
    this.selectedPortfolioDetails = {}
    // get portfolio details
    const selectedPortfolio = this.portfolios.filter((p: any) => p.id === id);
    // get profit/loss info
    this.http.get(this.CLIENT_SERVER + `/portfolio/${id}`, { headers: this.headers })
      .subscribe((res) => {

      }),
      () => console.log("successfully added");
  }

}
