import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuIsActived: Boolean | undefined;
  ngOnInit(): void {
    this.menuIsActived = window.innerWidth >= 500;
  }

  public showMenu() {
    this.menuIsActived = !this.menuIsActived;
  }


  @HostListener('window:resize', ['$event'])
    public resize(){
        this.menuIsActived = window.innerWidth >= 500;
    }
}
