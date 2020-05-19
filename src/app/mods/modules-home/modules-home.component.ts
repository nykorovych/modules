import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {

  modalOpened = false;

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.modalOpened = !this.modalOpened;
  }
}
