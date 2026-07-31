import { IEnvironment } from "../IEnvironment";

const dev: IEnvironment = {

    name: "DEV",

    baseURL: "https://parabank.parasoft.com/parabank/index.htm",

    username: "123456",

    password: "123456",

    timeout: 30000,

    retries: 2,

    headless: false,

    logLevel: "DEBUG",

};

export default dev;