import { IEnvironment } from "../IEnvironment";

const prod: IEnvironment = {

    name: "PROD",

    baseURL: "https://parabank.parasoft.com/parabank/index.htm",

    username: "parabank",

    password: "parabank",

    timeout: 30000,

    retries: 2,

    headless: false

};

export default prod;