import { Logger, InvalidParameterValueError, isNumber } from "@yamato-daiwa/es-extensions";


export const IncrementBy1HandlebarsHelper: Readonly<{
  incrementBy1: (targetValue: unknown) => number;
}> = {
  incrementBy1(targetValue: unknown): number {

    if (!isNumber(targetValue)) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "targetValue",
          messageSpecificPart: `The first and only parameter must be the number while actually it is the ${ typeof targetValue }.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "incrementByOne(oneValue, anotherValue)"
      });
    }

    return targetValue + 1;

  }
};

