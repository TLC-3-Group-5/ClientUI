import { SessionModelService } from './../../services/sessionModel.service';
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

  closeResult = '';
  public input: any;
  sessionService: SessionsService;

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
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  public portfolio() {
    if (this.input.name) {
      let headers = new HttpHeaders({ 'content-type': 'application/json' });

      this.input.email = window.sessionStorage.getItem("email");

      this.http.post(this.CLIENT_SERVER+'/portfolio/create', this.input, { headers: headers })
        .subscribe((res) =>
          this.router.navigate(['/dashboard'])
        ),
        () => console.log("successfully added");
    }
  }

  public onSave() {
    this.modalService.dismissAll();
    this.portfolio();
  }

  //getting all portfolios
  // public getPortfolios(){
  //   let headers = new HttpHeaders({ 'content-type': 'application/json' });
  //   this.http.get(this.CLIENT_SERVER+'/client/portfolio', get, { headers: headers })
  //       .subscribe((res) =>
  //         this.router.navigate(['/dashboard'])
  //       ),
  //       () => console.log("successfully added");
  //   }
  // }

  // add portfolio

  // this.clientService.portfolio({userId:this.input.portfolioName})
  //     .subscribe(
  //       (res) => {
  //         // Set portfolio for user
  //         this.sessionService.set("userId", "form.value.name");
  //       },
  //       (err) => {
  //         alert(err.error.message);
  //         this.loading=false;
  //         this.resetForm();
  //       },
  //       () => console.log('HTTP request completed...')
  //     )

}
