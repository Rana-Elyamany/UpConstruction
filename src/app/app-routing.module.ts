import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from './Articles/list-articles/list-articles.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';
import { CreatCustomerComponent } from './customers/creat-customer/creat-customer.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { ShowCustomerComponent } from './customers/show-customer/show-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { CreatEmployeesComponent } from './Employees/creat-employees/creat-employees.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { ShowEmployeeComponent } from './Employees/show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { CtaComponent } from './main/cta/cta.component';
import { FAQComponent } from './main/faq/faq.component';
import { PortofolioComponent } from './main/portofolio/portofolio.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { CreateManagerComponent } from './Managers/create-manager/create-manager.component';
import { ListManagersComponent } from './Managers/list-managers/list-managers.component';
import { ShowManagerComponent } from './Managers/show-manager/show-manager.component';
import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './Users/login/login.component';
import { SignUpComponent } from './Users/sign-up/sign-up.component';


const routes: Routes = [
  {path:"",component:HeroComponent},
  {path:"home",component:HeroComponent},
  {path:"home/:name",component:HeroComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:ServicesComponent},
  {path:"whyus",component:WhyUsComponent},
  {path:"testimonial",component:TestimonialsComponent},
  {path:"cta",component:CtaComponent},
  {path:"team",component:TeamComponent},
  {path:"portofolio",component:PortofolioComponent},
  {path:"pricing",component:PricingComponent},
  {path:"contact",component:ContactComponent},
  {path:"FAQ",component:FAQComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"login",component:LoginComponent},
  {path:"listEmployees",component:ListEmployeesComponent},
  {path:"addEmployee",component:CreatEmployeesComponent},
  {path:"showEmployee/:id",component:ShowEmployeeComponent},
  {path:"updateEmployee/:id",component:UpdateEmployeeComponent},
  {path:"listManagers",component:ListManagersComponent},
  {path:"addManager",component:CreateManagerComponent},
  {path:"showManager/:id",component:ShowManagerComponent},
  {path:"updateManager/:id",component:UpdateManagerComponent},
  {path:"listCustomers",component:ListCustomersComponent},
  {path:"addCustomer",component:CreatCustomerComponent},
  {path:"showCustomer/:id",component:ShowCustomerComponent},
  {path:"updateCustomer/:id",component:UpdateCustomerComponent},
  {path:"listArticles",component:ListArticlesComponent},
  {path:"showArticle/:id",component:ShowArticleComponent},
  {path:"**" , component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
