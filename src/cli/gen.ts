import * as readline from "readline";
export default function gen(category: string, type: string, id: string, mod: string) {
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
                customData = JSON.stringify(generator(id, mod, { stages: parseInt(answer) }), null, 2);
                rl.close();
            });
        }
        console.log(JSON.stringify(generator(id, mod, customData), null, 2));
    } else {
        console.error("Generator not found");
    }
}
