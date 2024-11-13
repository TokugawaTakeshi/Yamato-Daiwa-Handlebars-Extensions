import { substituteWhenNull } from "@yamato-daiwa/es-extensions";


export const SubstituteNullHandlebarsHelper: Readonly<{
  substituteNull: (nullableValue: unknown, substitution: unknown) => unknown;
}> = {
  substituteNull(targetValue: unknown, substitution: unknown): unknown {
    return substituteWhenNull(targetValue, substitution);
  }
};
