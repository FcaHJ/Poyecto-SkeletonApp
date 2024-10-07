import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { WorkExpComponent } from 'src/app/components/work-exp/work-exp.component';
import { MyDataComponent } from 'src/app/components/my-data/my-data.component';
import { CertificationsComponent } from 'src/app/components/certifications/certifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, WorkExpComponent, MyDataComponent, CertificationsComponent]
})
export class HomePageModule {}
