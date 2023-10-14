import type * as Handlebars from "handlebars";


const AreStringsEqualHandlebarsHelper: Readonly<{
  areStringsEqual: (string1: string, string2: string, helperOptions: Handlebars.HelperOptions) => unknown;
}> = {
  areStringsEqual(string1: string, string2: string, helperOptions: Handlebars.HelperOptions): string {
    return string1 === string2 ? helperOptions.fn(this) : helperOptions.inverse(this);
  }
};


export default AreStringsEqualHandlebarsHelper;
