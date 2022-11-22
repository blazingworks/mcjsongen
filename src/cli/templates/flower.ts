import generator from "../generator";
import writeFile from "../writeFile";

export default function flower(id: string, mod: string) {
    id.split(",").forEach((id2) => {
        writeFile(generator("blockstates", "general"), id2, mod);
        writeFile(generator("models", "crossBlock"), id2, mod);
        writeFile(generator("models", "item"), id2, mod);
    });
}
