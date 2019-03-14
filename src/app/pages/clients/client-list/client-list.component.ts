import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  returnUrl: string;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // Get bike list
    this.getClients();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/clients';
  }

  getClients(): void {
    this.isLoading = true;
    this.clientService.getClient()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  };

  deleteClient(id) {
    this.isLoading = true;
    this.clientService.deleteClient(id)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
        this.router.navigate([this.returnUrl]);
      };



  protected handleResponse(response: Client[]) {
    this.isLoading = false,
      this.clients = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
      console.error(error);
  }

}
