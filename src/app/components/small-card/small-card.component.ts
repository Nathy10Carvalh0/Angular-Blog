import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallcardPhoto:String="https://i.ytimg.com/vi/prU99tacHUk/maxresdefault.jpg"
  @Input()
  smallcardTitle:String=""
  constructor(){}

  ngOnInit(): void {

  }

}
