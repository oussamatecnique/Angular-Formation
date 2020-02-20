import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "appUpperCase"
})
export class Uppercase implements PipeTransform {
  transform(value: string, lang?: string) {
    return value.toLocaleUpperCase() + lang;
  }
}
