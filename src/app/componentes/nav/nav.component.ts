import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCorreoComponent } from 'src/app/modal-correo/modal-correo.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ngOnInit(): void {
  }

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.bsModalRef = this.modalService.show(ModalCorreoComponent);
  }
}
