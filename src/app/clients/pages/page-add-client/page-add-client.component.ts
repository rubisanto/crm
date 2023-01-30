import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import  {ClientsService} from '../../../orders/services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  // créer un nouvel objet
  public item: Client = new Client();


  constructor(private clientsService : ClientsService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAdd(obj : Client): void {
    this.clientsService.add(obj).subscribe((data) => {
      // console.log(res);
      // rediriger vers /orders
      this.router.navigate(['clients']);

    } )
  }

}
