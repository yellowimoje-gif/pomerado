import { Schema } from "effect";
import { LoginFields, SignInMethods } from "../destinations/login-fields.js";

export interface CapabilityReview {
  readonly status: "duplicate" | "uncertain";
  readonly site_origin: string;
  readonly tools: readonly CapabilityContract[];
  readonly recommendation: "use_existing_or_repair" | "clarify_capability";
}

export type CapabilityContract = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly site_origin: string | null;
  readonly input_schema: unknown;
  readonly output_schema: unknown;
  readonly effect: "read" | "write";
  readonly login_required: boolean;
  readonly login_fields?: typeof LoginFields.Type;
  readonly sign_in_methods?: typeof SignInMethods.Type;
  readonly enabled: boolean;
};
