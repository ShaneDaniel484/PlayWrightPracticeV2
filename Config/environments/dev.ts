import { IEnvironment } from "../IEnvironment";

const dev: IEnvironment = {

    name: "DEV",

    baseURL: "https://parabank.parasoft.com/parabank/index.htm",

    username: "parabank",

    password: "parabank",

    timeout: 30000,

    retries: 2,

    headless: false

};

export default dev;