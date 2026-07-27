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

const currentEnvironment = process.env.ENV?.toLocaleLowerCase() || "dev";

if(!(currentEnvironment in environments)) {
    throw new Error(`Invalid Environment: ${currentEnvironment} 
        valid environmets : 
        -dev
        -qa
        -prod
        -uat
        `);
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