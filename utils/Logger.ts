import { Config } from "../../PlayWright/Config/FrameworkConfig";
import chalk from "chalk";
import { LogLevel } from "../../PlayWright/types/LogLevel";

const LOG_CONFIG: Record<LogLevel,
    {
        color: typeof chalk.blue;
        priority: number;
    }
> = {
    DEBUG: {
        color: chalk.magenta,
        priority: 1,
    },
    INFO: {
        color: chalk.blue,
        priority: 2,
    },
    SUCCESS: {
        color: chalk.green,
        priority: 3,
    },
    WARN: {
        color: chalk.yellow,
        priority: 4,
    },
    ERROR: {
        color: chalk.red,
        priority: 5,
    },
};

export class Logger {

    private static getColor(level: LogLevel) {
        return LOG_CONFIG[level].color;
    }

    private static getPriority(level: LogLevel): number {
        return LOG_CONFIG[level].priority;
    }

    private static getTimestamp(): string {
        const now = new Date();

        const day = now.getDate().toString().padStart(2, "0");
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const year = now.getFullYear();

        const hour = now.getHours().toString().padStart(2, "0");
        const minute = now.getMinutes().toString().padStart(2, "0");
        const second = now.getSeconds().toString().padStart(2, "0");

        return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
    }

    private static log(level: LogLevel, message: string) {

        const currentPriority = this.getPriority(level);

        const configuredPriority = this.getPriority(Config.logLevel);

        if (currentPriority < configuredPriority) {
            return;
        }

        const color = this.getColor(level);

        console.log(
            color(
                `[${this.getTimestamp()}] [${Config.name}] [${level}] ${message}`
            )
        );
    }

    static info(message: string) {
        this.log("INFO", message);
    }

    static success(message: string) {
        this.log("SUCCESS", message);
    }

    static warn(message: string) {
        this.log("WARN", message);
    }

    static error(message: string) {
        this.log("ERROR", message);
    }

    static debug(message: string) {
        this.log("DEBUG", message);
    }
}