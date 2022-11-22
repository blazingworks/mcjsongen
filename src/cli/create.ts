import * as fs from "fs";
import * as readline from "readline";
import ensureCorrectDirectory from "./ensureCorrectDirectory";

export default function create(category: string, type: string, id: string, mod?: string) {
    ensureCorrectDirectory(() => {
        if (!mod) mod = "minecraft";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const generator = lib[category][type];
        if (generator) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let customData: any = {};
            if (category === "blockstates" && type === "ages") {
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
                rl.question("How many growth stages does this block have? ", (answer) => {
                    customData = { stages: parseInt(answer) };
                    rl.close();
                });
            }
            const path = generator(id, mod, customData, true);
            fs.mkdirSync(path.split("/").slice(0, -1).join("/"), { recursive: true });
            fs.writeFileSync(path, JSON.stringify(generator(id, mod, customData), null, 2));
        } else {
            console.error("Generator not found");
        }
    });
}
