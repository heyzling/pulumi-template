
import * as pulumi from "@pulumi/pulumi";

export const stack = new pulumi.Config()
export const stackName = pulumi.getStack() as "test" | "prod"