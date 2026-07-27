import { IEnvironment } from "../IEnvironment";

const uat: IEnvironment = {

    name: "UAT",

    baseURL: "https://parabank.parasoft.com/parabank/index.htm",

    username: "parabank",

    password: "parabank",

    timeout: 30000,

    retries: 2,

    headless: false

};

export default uat;