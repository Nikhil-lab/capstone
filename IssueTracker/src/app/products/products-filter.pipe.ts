import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((product) =>
            product.name.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
