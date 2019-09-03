import { Injectable } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router'
import { EditProductFormComponent } from './editproduct-form.component';

@Injectable()
export class AddProductGuardService implements CanDeactivate<EditProductFormComponent> {
    canDeactivate(component: EditProductFormComponent): boolean {
        if (component.addProductsForm.dirty && !component.addProductsForm.submitted) {
            return confirm('Are you sure you want to leave ?');
        }
        return true;
    }
}