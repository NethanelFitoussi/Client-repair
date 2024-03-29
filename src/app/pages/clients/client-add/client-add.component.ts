import { Component, OnInit } from '@angular/core';


//  App imports
import { Client } from '../client';

import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  client: Client = new Client();
  isLoading: Boolean = false;
  returnUrl: string;
  error: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    //  Set the return url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(clientAddForm): void {
    //console.log(this.client);
    this.clientService.addClient(this.client)
      .subscribe((response) => {
        this.isLoading = false;
        this.client = response['data'];
        // get return url from route parameters or default to '/'
        //this.router.navigate([this.returnUrl]);
        //alert('Client has been add')
      },
      (error) => {
        this.error = error.error;
      }
    );
    // Clear form fields
    clientAddForm.reset();
  }

}
