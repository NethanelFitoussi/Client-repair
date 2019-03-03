import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

// App import
import { Client } from '../client';
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})

export class ClientListComponent implements OnInit {
  // Using Bike Model class
  clients: Client[];
  isLoading: Boolean = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // Get bike list
    this.getClients();
  }

  getClients(): void {
    this.isLoading = true;
    this.clientService.getClient()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }



  protected handleResponse(response: Client[]) {
    this.isLoading = false,
      this.clients = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
      console.error(error);
  }

}
