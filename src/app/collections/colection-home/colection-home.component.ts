import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colection-home',
  templateUrl: './colection-home.component.html',
  styleUrls: ['./colection-home.component.css']
})
export class ColectionHomeComponent implements OnInit {
  data = [
    {name: "James", age: 25, job: 'Designer'},
    {name: 'Bob', age:12, job: 'Drugdealer'},
    {name: 'Kate', age: 18, job: 'Hooker'}
  ];
  headers = [
    {key: 'name', lable: 'Name'},
    {key: 'age', lable: 'Age' },
    {key: 'job', lable: 'Job'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
