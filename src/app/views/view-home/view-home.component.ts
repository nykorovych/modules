import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

stats = [
  {value: 22, lable: ' # of Userrs'},
  {value: 55, lable: ' # of revenu'},
  {value: 2, lable: ' Satisfacion Score'}

];
items = [
  {image: '/assets/images/couch.jpg', title: 'Couch', description: "super couch" },
  {image: '/assets/images/dresser.jpg', title: 'Dresser', description: 'super dresser to put staff on'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
