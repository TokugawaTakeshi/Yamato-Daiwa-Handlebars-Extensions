import type * as Handlebars from "handlebars";


const SwitchCaseHandlebarsHelpers: Readonly<{
  switch: (value: string, helperOptions: Handlebars.HelperOptions) => string;
  case: (value: string, helperOptions: Handlebars.HelperOptions) => string | null;
}> = {
  switch(value: string, helperOptions: Handlebars.HelperOptions): string {

    /* @ts-ignore: TS2339 Type-safe solution not found. Reference: https://stackoverflow.com/a/53398537/4818123 */
    this.switch_value = value;

    return helperOptions.fn(this);

  },
  case(value: string, helperOptions: Handlebars.HelperOptions): string | null {

    /* @ts-ignore: TS2339 Type-safe solution not found. Reference: https://stackoverflow.com/a/53398537/4818123 */
    if (value === this.switch_value) {
      return helperOptions.fn(this);
    }


    return null;

  }
};


export default SwitchCaseHandlebarsHelpers;
