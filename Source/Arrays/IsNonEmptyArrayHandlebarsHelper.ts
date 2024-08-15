import type * as Handlebars from "handlebars";


export const IsNonEmptyArrayHandlebarsHelper: Readonly<{
  isNonEmptyArray: (rawValue: unknown, options: Handlebars.HelperOptions) => string;
}> = {
  isNonEmptyArray(rawValue: unknown, options: Handlebars.HelperOptions): string {
    return Array.isArray(rawValue) && rawValue.length > 0 ? options.fn(this) : options.inverse(this);
  }
};
