import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent,
        'title':'Home',
       
        
    },
    {
        path:'product-details/:id',
        component: ProductDetailsComponent,
        'title':'Product Details',
    },
    {
        path:'add-product',
        component: AddProductComponent,
        'title':'Add Product'
    },
    {
        path:'cart',
        component: CartComponent,
        'title':'Cart'
    },
    {
        path:'**',
        component: NotFoundComponent,
        'title':'Page Not Found'
    }
];
