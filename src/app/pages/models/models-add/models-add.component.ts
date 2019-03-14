import { Component, OnInit } from '@angular/core';

import { Model } from '../model';

import { Router, ActivatedRoute } from '@angular/router';
import { ModelService } from '../_services/model.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-models-add',
  templateUrl: './models-add.component.html',
  styleUrls: ['./models-add.component.scss']
})
export class ModelsAddComponent implements OnInit {

  model: Model = new Model();
  isLoading: Boolean = false;
  returnUrl: string;
  error: any;

  constructor(
    private modelService: ModelService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //  Set the return url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(modelAddForm: NgForm): void {
    //console.log(this.model);
    this.modelService.addClient(this.model)
      .subscribe((response) => {
        this.isLoading = false;
        this.model = response['data'];
        // get return url from route parameters or default to '/'
        //this.router.navigate([this.returnUrl]);
        //alert('Client has been add')
      },
        (error) => {
          this.error = error.error;
        }
      );
    // Clear form fields
    //modelAddForm.reset();
  }

}
