import type * as Handlebars from "handlebars";
import type { ArbitraryObject } from "@yamato-daiwa/es-extensions";


export const IsNonEmptyObjectHandlebarsHelper: Readonly<{
  isNonEmptyObject: (templateContext: ArbitraryObject, helperOptions: Handlebars.HelperOptions) => string;
}> = {
  isNonEmptyObject(templateContext: ArbitraryObject, helperOptions: Handlebars.HelperOptions): string {
    return templateContext.constructor === Object && Object.entries(templateContext).length > 0 ?
        helperOptions.fn(this) : helperOptions.inverse(this);
  }
};
