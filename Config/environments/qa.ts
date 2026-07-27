import { IEnvironment } from "../IEnvironment";

const qa: IEnvironment = {

    name: "QA",

    baseURL: "https://parabank.parasoft.com/parabank/index.htm",

    username: "parabank",

    password: "parabank",

    timeout: 30000,

    retries: 2,

    headless: false

};

export default qa;