import {
  Logger,
  InvalidParameterValueError,
  isArbitraryObject,
  isNull
} from "@yamato-daiwa/es-extensions";


export const ToJSON_HandlebarsHelper: Readonly<{
  toJSON: (targetValue: unknown) => string;
}> = {
  toJSON(targetValue: unknown): string {

    if (!isArbitraryObject(targetValue)) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "targetValue",
          messageSpecificPart:
            `The parameter must be the non-null object while ${ isNull(targetValue) ? "null" : typeof targetValue } found.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "toJSON(targetValue)"
      });
    }


    return JSON.stringify(targetValue);

  }
};
