import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_core/api/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit{
  constructor(private auth:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email');
    const token = this.route.snapshot.paramMap.get('token');
    if(email && token){
      this.auth.confirmEmail(email,token).subscribe(
        {
          next: (res) => {
            console.log(res);
            this.notFoundError = false;
          },
          error: (error) => {
            console.log(error.error);
            console.log(this.notFoundError);
          }
        }
      )
  }
  }

  notFoundError: boolean = true;
}
