import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/blog-api/src/models';
import { ContactsService } from 'src/blog-api/src/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact:Contact={};
  constructor(private router: Router, private contactService: ContactsService) { }

  ngOnInit(): void {
  }
  save(){
    this.contactService.save(this.contact!).subscribe((data) => {
      this.contact = data;
      this.router.navigate(['/']);
    
       })
  }

}
