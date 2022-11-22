import ensureCorrectDirectory from "./ensureCorrectDirectory";
import berry from "./templates/berry";
import flower from "./templates/flower";

export default function templateLoader(template: string, id: string, mod?: string) {
    ensureCorrectDirectory(() => {
        if (!mod) mod = "minecraft";
        switch (template) {
            case "berries":
            case "berry":
            case "sweetberries":
            case "sweetberry":
            case "sweet_berries":
            case "sweet_berry": {
                berry(id, mod);
                break;
            }
            case "flower":
            case "flowers": {
                flower(id, mod);
                break;
            }
            default: {
                console.log("Invalid template");
            }
        }
    });
}
