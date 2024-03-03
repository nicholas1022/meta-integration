import winston, { format } from 'winston';
import  'winston-daily-rotate-file';


// Define your custom logger
const logger = winston.createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: { service: 'fb_integration' },
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      dirname: "logs",
      filename: 'fb_integration.log',
      level: 'debug'
    }),
    new winston.transports.DailyRotateFile({
        level: 'debug',
        dirname: "logs",
        filename: 'fb-integration-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '30d'
    })
  ],
});

export default logger;