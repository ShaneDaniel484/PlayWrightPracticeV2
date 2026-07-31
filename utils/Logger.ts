import { Config } from '../../PlayWright/Config/FrameworkConfig'
import chalk from "chalk";
import { LogLevel } from '../../PlayWright/types/LogLevel';

export class Logger {


    private static getColor(level:LogLevel){
        switch(level){
            case "INFO": return chalk.blue;
            case "SUCCESS": return chalk.green;
            case "DEBUG": return chalk.magenta;
            case "ERROR": return chalk.red;
            case "WARN": return chalk.yellow;
            default: return chalk.white;
        }
    }

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

        const color = this.getColor(level);
        console.log(color( `[${this.getTimestamp()}] [${Config.name}] [${level}] ${message}`));
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