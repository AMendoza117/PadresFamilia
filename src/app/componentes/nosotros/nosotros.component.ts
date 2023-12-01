// dudas.component.ts

import { Component, OnInit } from '@angular/core';
import { Faq1Service } from './../../services/faq1.services';
import { FaqItem } from 'src/app/models/faq.model';
import { FaqItem1 } from 'src/app/models/faq1.model';

interface FaqWithState extends FaqItem1 {
  expanded: boolean;
}

@Component({
  selector: 'app-nosostros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  faqList1: FaqWithState[] = [];
  filteredFaqs1: FaqWithState[] = [];

  constructor(private faq1Service: Faq1Service) { }

  ngOnInit(): void {
    this.faqList1 = this.faq1Service.getFaqs().map((faq, index) => ({ ...faq, id: index + 1, expanded: false }));
    this.filteredFaqs1 = this.faqList1;
  }

  toggleAccordion1(faq1: FaqWithState): void {
    faq1.expanded = !faq1.expanded;
  }
}
