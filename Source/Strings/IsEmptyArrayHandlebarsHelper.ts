import type * as Handlebars from "handlebars";


export const IsEmptyArrayHandlebarsHelper: Readonly<{
  isEmptyArray: (rawValue: unknown, options: Handlebars.HelperOptions) => string;
}> = {
  isEmptyArray(rawValue: unknown, options: Handlebars.HelperOptions): string {
    return Array.isArray(rawValue) && rawValue.length === 0 ? options.fn(this) : options.inverse(this);
  }
};
