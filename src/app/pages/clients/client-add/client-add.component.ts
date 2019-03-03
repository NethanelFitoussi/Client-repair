import { Component, OnInit } from '@angular/core';

//  App imports
import { Client } from '../client';
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  client: Client;
  isLoading: Boolean = false;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit(client) {
    this.isLoading = true;
    this.clientService.addClient(client)
      .subscribe(response => {
        this.isLoading = false;
        this.client = response['data'];
      });
  }

}
