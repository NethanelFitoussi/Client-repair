import { Component, OnInit } from '@angular/core';

//  App imports
import { Brand } from '../brand';

import { Router, ActivatedRoute } from '@angular/router';
import { BrandService } from '../_services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {
  brand: Brand = new Brand();
  isLoading: Boolean = false;
  returnUrl: string;
  error: any;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    //  Set the return url
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(brandAddForm): void {
    //console.log(this.client);
    this.brandService.addBrand(this.brand)
      .subscribe((response) => {
        this.isLoading = false;
        this.brand = response['data'];
        // get return url from route parameters or default to '/'
        //this.router.navigate([this.returnUrl]);
        //alert('Client has been add')
      },
        (error) => {
          this.error = error.error;
        }
      );
    // Clear form fields
    brandAddForm.reset();
  }
}
