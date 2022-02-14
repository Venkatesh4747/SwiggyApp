import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PopularCreationComponent } from '../popular-creation/popular-creation.component';
import { SpotLightComponent } from '../spot-light/spot-light.component';
import { TodayFeaturesComponent } from '../today-features/today-features.component';
import { PopularBrandComponent } from '../popular-brand/popular-brand.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage, PopularCreationComponent, SpotLightComponent, TodayFeaturesComponent,
    PopularBrandComponent
  ]
})
export class HomePageModule {}
