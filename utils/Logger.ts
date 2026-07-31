import { Config } from '../../PlayWright/Config/FrameworkConfig'

type LogLevel =
    | "INFO"
    | "SUCCESS"
    | "WARN"
    | "ERROR"
    | "DEBUG";

export class Logger {

    private static getTimestamp() :string{
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() +1;
        const year = now.getFullYear();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();

        const formattedDay =  day.toString().padStart(2,"0");
        const formattedMonth = month.toString().padStart(2,"0");
        const formattedHour = hour.toString().padStart(2,"0");
        const formattedMinute = minute.toString().padStart(2,"0");
        const formattedSecond = second.toString().padStart(2,"0");

        return `${formattedDay}-${formattedMonth}-${year} ${formattedHour}:${formattedMinute}:${formattedSecond}`
    }

    private static log(level : LogLevel , message : string) {
        console.log(`[${this.getTimestamp()}] [${Config.name}] [${level}] ${message}`)
    }


    static info(message : string) {
        this.log("INFO" , message)
    }

    static warn(message : string) {
        this.log("WARN" , message)
    }

    static error(message : string) {
        this.log("ERROR" , message)
    }
    
    static success(message : string) {
        this.log("SUCCESS" , message)
    }

    static debug(message : string) {
        this.log("DEBUG" , message)
    }
}