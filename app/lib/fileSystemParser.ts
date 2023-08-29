import {FSFile} from "@/app/types/FileSystem";
import fs from "fs";

export function parseDirectoryForNavbar(directory = ""): FSFile[] {
    if (!fs.existsSync(directory)) return []

    return fs.readdirSync(directory, {withFileTypes: true})
        .filter((dirent) => dirent.isDirectory())
        .map((directoryObj) => ({name: directoryObj.name, type: 'File', absPath: `${directory}/${directoryObj.name}`}))
}