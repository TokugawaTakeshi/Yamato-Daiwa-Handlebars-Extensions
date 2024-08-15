import type * as Handlebars from "handlebars";
import { Logger, InvalidParameterValueError, isNumber } from "@yamato-daiwa/es-extensions";


export const IsGreaterThanHandlebarsHelper: Readonly<{
  isGreaterThan: (oneValue: unknown, anotherValue: unknown, helperOptions: Handlebars.HelperOptions) => string;
}> = {
  isGreaterThan(oneValue: unknown, anotherValue: unknown, helperOptions: Handlebars.HelperOptions): string {

    if (!isNumber(oneValue)) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "oneValue",
          messageSpecificPart: `The operands must be the number while first one is ${ typeof oneValue }.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "isGreaterThan(oneValue, anotherValue)"
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
        occurrenceLocation: "isGreaterThan(oneValue, anotherValue)"
      });
    }


    return oneValue > anotherValue ? helperOptions.fn(this) : helperOptions.inverse(this);

  }
};

