import { Component, inject, OnInit} from '@angular/core';
import { MasterService } from '../services/master.service';
import { IApiResponse, IchildDept, IparentDept } from '../Model/Employee';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  parentDeptList:IparentDept[]=[]
  childDeptList:IchildDept[]=[]
  deptId:number=0;
masterService= inject(MasterService);
ngOnInit(): void {
  this.getParentDeptList();
}
getParentDeptList(){
    this.masterService.getParentDept().subscribe((res:IApiResponse)=>{
      console.log(res.data);
    this.parentDeptList =res.data;
  })
}
onDeptChange(){
  this.masterService.getChildDept(this.deptId).subscribe((res:IApiResponse)=>{
      this.childDeptList=res.data;
  })
}
}

