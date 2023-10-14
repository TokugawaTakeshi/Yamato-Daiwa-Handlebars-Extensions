import type * as Handlebars from "handlebars";
import { Logger, InvalidParameterValueError, isNumber } from "@yamato-daiwa/es-extensions";


export const IsSmallerThanHandlebarsHelper: Readonly<{
  isSmallerThan: (oneValue: unknown, anotherValue: unknown, helperOptions: Handlebars.HelperOptions) => string;
}> = {
  isSmallerThan(oneValue: unknown, anotherValue: unknown, helperOptions: Handlebars.HelperOptions): string {

    if (!isNumber(oneValue)) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "oneValue",
          messageSpecificPart: `The operands must be the number while first one is ${ typeof oneValue }.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "isSmallerThan"
      });
    }


    if (!isNumber(anotherValue)) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 2,
          parameterName: "anotherValue",
          messageSpecificPart: `The operands must be the number while the second one is ${ typeof anotherValue }.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "isSmallerThan"
      });
    }


    return oneValue > anotherValue ? helperOptions.fn(this) : helperOptions.inverse(this);

  }
};
