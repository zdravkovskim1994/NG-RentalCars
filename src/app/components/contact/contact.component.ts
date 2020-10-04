import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.contactService.postData(data)
      .subscribe((result) => {
        console.log(data);

      })

  }

}
