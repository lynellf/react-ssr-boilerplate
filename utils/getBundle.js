import fs from 'fs'
import path from 'path'

export const getBundle = (fileName) => {
    try {
        const directory = path.resolve(__dirname, '../public')
        const fileNames = fs.readdirSync(directory)
        const regExp = new RegExp(`${fileName}.*.js`)
        const file = fileNames.filter(file => file.match(regExp))
        const hasFile = file !== null
        if (hasFile) return file[0]
        return null
    } catch (error) {
        console.error(error)
    }
}