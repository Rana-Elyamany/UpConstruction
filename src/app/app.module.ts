import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { ServicesComponent } from './main/services/services.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { CtaComponent } from './main/cta/cta.component';
import { PortofolioComponent } from './main/portofolio/portofolio.component';
import { TeamComponent } from './main/team/team.component';
import { ContactComponent } from './main/contact/contact.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { FAQComponent } from './main/faq/faq.component';
import { SignUpComponent } from './Users/sign-up/sign-up.component';
import { LoginComponent } from './Users/login/login.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { CreatEmployeesComponent } from './Employees/creat-employees/creat-employees.component';
import { ShowEmployeeComponent } from './Employees/show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { ListManagersComponent } from './Managers/list-managers/list-managers.component';
import { CreateManagerComponent } from './Managers/create-manager/create-manager.component';
import { ShowManagerComponent } from './Managers/show-manager/show-manager.component';
import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { CreatCustomerComponent } from './customers/creat-customer/creat-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { ShowCustomerComponent } from './customers/show-customer/show-customer.component';
import { ListArticlesComponent } from './Articles/list-articles/list-articles.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HeroComponent,
    AboutComponent,
    WhyUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    CtaComponent,
    PortofolioComponent,
    TeamComponent,
    ContactComponent,
    PricingComponent,
    FAQComponent,
    SignUpComponent,
    LoginComponent,
    ListEmployeesComponent,
    CreatEmployeesComponent,
    ShowEmployeeComponent,
    UpdateEmployeeComponent,
    ListManagersComponent,
    CreateManagerComponent,
    ShowManagerComponent,
    UpdateManagerComponent,
    ListCustomersComponent,
    CreatCustomerComponent,
    UpdateCustomerComponent,
    ShowCustomerComponent,
    ListArticlesComponent,
    ShowArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
