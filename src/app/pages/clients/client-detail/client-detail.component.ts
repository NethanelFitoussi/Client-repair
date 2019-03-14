import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//  App imports
import { Client } from '../client';
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client: Client;
  isLoading: Boolean = false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get bike details
    this.getClientDetail();
  }

  getClientDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClientDetail(id)
      .subscribe(client => {
        this.isLoading = false;
        this.client = client['data'];
        console.log(client['data']);
      });
  }

  onSubmit(clientUpdateForm: Client) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.updateClient(id, this.client)
      .subscribe(response => {
        this.isLoading = false;
        this.client = response['data'];
      });
  }

}
