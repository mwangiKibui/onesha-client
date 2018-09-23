
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

export function config(): string {
    return `mysql://${process.env.MYSQL_USERNAME}:${process.env.MYSQL_PASSOWRD}@${process.env.MYSQL_HOST}:3306/${process.env.MYSQL_DATABASE}?connectionLimit=10&dateStrings=true`
}