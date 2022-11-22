import * as path from "path";
import * as readline from "readline";

export default function ensureCorrectDirectory(callback: () => void) {
    // check if current directory of cwd is named assets
    const cwd = process.cwd();
    const currentDir = path.basename(cwd);
    if (currentDir !== "assets") {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(
            'It seems like you are not in the correct directory. This command is supposed to be executed in "assets". Are you sure you want to continue? (y/n) ',
            (answer) => {
                if (answer === "y") {
                    callback();
                } else {
                    console.log("Exiting...");
                    process.exit(0);
                }
                rl.close();
            }
        );
    } else {
        callback();
    }
}
