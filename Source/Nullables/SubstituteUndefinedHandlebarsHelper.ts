import { substituteWhenUndefined } from "@yamato-daiwa/es-extensions";


export const SubstituteUndefinedHandlebarsHelper: Readonly<{
  substituteUndefined: (nullableValue: unknown, substitution: unknown) => unknown;
}> = {
  substituteUndefined(targetValue: unknown, substitution: unknown): unknown {
    return substituteWhenUndefined(targetValue, substitution);
  }
};
