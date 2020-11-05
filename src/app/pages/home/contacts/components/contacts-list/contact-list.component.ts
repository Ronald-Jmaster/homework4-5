import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent{

  // getContactList(): any[]{
  //   return [];
  // }

  @Input() contactList: Array<any>;
}