import { Component, OnInit, TemplateRef } from '@angular/core';
import { DiscountService } from '../../shared/services/discount.service';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';
import { Discount } from 'src/app/shared/models/discount.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent implements OnInit {
  adminDiscount: Array<IDiscount> = [];
  dID = 1;
  dTitle: string;
  dText: string;
  dImage = 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2020/05/aktsiya-dlya-sajta-21.jpg';
  changeImage = false;
  modalRef: BsModalRef;
  btnAddMessage = 'Add Discount';
  editStatus = false;
  constructor(private discountService: DiscountService, private modalService: BsModalService) { }

  ngOnInit(): void {
   this.getAdminDiscounts()
  }

  getAdminDiscounts(){
    this.discountService.getDiscounts().subscribe(data=>{
      this.adminDiscount=data
    })
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

 

  addDiscount(): void {
    const newD = new Discount( this.dTitle, this.dText, this.dImage);
    if (!this.editStatus){
  
      this.discountService.postDiscounts(newD).subscribe(
        ()=>{
        this.getAdminDiscounts()

        
      });
    }
    else {
      this.discountService.updateDiscount(newD,this.dID).subscribe(
        ()=>{
          this.getAdminDiscounts()

        }
      )
      this.editStatus = false;
    }
    this.resetForm();
    this.modalService.hide(1);
  }

  deleteDiscount(discount: IDiscount): void {
    if (confirm('Are you sure?')) {
      this.discountService.deleteDiscount(discount).subscribe(
        ()=>{
          this.getAdminDiscounts()
          
        }
      )
    }
  }

  editDiscount(template: TemplateRef<any>, discount: IDiscount): void {
    this.modalRef = this.modalService.show(template);
    this.dID=discount.id
    this.dTitle = discount.title;
    this.dText = discount.text;
    this.dImage = discount.image;
    this.changeImage = true;
    this.editStatus = true;
  }

  private resetForm(): void {
    this.dID = 1;
    this.dTitle = '';
    this.dText = '';
    this.dImage = 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2020/05/aktsiya-dlya-sajta-21.jpg';
  }

}
