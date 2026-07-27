import dev from "./environments/dev";
import prod from "./environments/prod";
import qa from "./environments/qa";
import uat from "./environments/uat";
import { IEnvironment } from "./IEnvironment";

const environments: Record<string, IEnvironment> = {
    dev,
    qa,
    uat,
    prod
};



const env = process.env.ENV;

const currentEnvironment =
    env === undefined ? "dev" : env.toLowerCase();

if (currentEnvironment.trim() === "") {
    throw new Error(
        "ENV cannot be empty.\n\nValid values: dev, qa, uat, prod"
    );
}

if (!(currentEnvironment in environments)) {
    throw new Error(
        `Invalid environment: ${currentEnvironment}\n\nValid values: dev, qa, uat, prod`
    );
}


const selectedEnvironment =
    environments[currentEnvironment as keyof typeof environments];

export const Config = {

    ...selectedEnvironment,

    timeout:
        Number(process.env.TIMEOUT)
        || selectedEnvironment.timeout,

    retries:
        Number(process.env.RETRIES)
        || selectedEnvironment.retries,

    headless:
        process.env.HEADLESS
            ? process.env.HEADLESS === "true"
            : selectedEnvironment.headless

};