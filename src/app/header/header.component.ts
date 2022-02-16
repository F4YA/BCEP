import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuIsActived: Boolean | undefined;
  ngOnInit(): void {
    this.menuIsActived = false;
  }

  public showMenu() {
    this.menuIsActived = !this.menuIsActived
    console.log(this.menuIsActived)
  }

}
