import { LogLevel } from '../../PlayWright/types/LogLevel';

export interface IEnvironment {

    name: string;

    baseURL: string;

    username: string;

    password: string;

    timeout: number;

    retries: number;

    headless: boolean;

    logLevel: LogLevel;

}