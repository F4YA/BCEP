import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public IsInvalid: boolean | undefined;
  public hasMoreThan768px: boolean | undefined;
  public _regex: RegExp = new RegExp('([0-9]{5})-([0-9]{3})', 'g');
  public cepField: HTMLInputElement | undefined;

  ngOnInit(): void {
    this.IsInvalid = false;
    this.hasMoreThan768px = window.innerWidth >= 768;
  }

  public ValidCepField() {
    this.cepField = document.getElementById('cepField') as HTMLInputElement;
    this.replaceField(this.cepField);
    if (!this._regex.test(this.cepField.value)) {
      this.IsInvalid = true;
      this.cepField.style.outlineColor = '#FF8000';
      this.cepField.style.borderColor = '#FF8000';
    } else {
      this.IsInvalid = false;
      this.cepField.style.outlineColor = '#24BE2E';
      this.cepField.style.borderColor = '#5C6BC0';
    }
  }

  public maskField(){
    this.cepField = document.getElementById('cepField') as HTMLInputElement;
    if(this.cepField.value.length == 5)
      this.cepField.value += '-';
  }

  private replaceField(field: HTMLInputElement){
    field.value = field.value.replace(/[^0-9-]/g, '');
  }

  @HostListener('window:resize',['$event'])
    public resize(){
      this.hasMoreThan768px = window.innerWidth >= 768;
    }
}
