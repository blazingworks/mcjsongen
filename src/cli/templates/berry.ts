import inquirer from "inquirer";
import generator from "../generator";
import writeFile from "../writeFile";

export default function berry(id: string, mod: string) {
    let suggestedBushId = `${id}_bush`;
    if (id.endsWith("berries")) suggestedBushId = `${id.replace("berries", "berry")}_bush`;
    inquirer
        .prompt([
            {
                type: "list",
                name: "id",
                message: 'Your ID seems to end with "berry". It is however suggsted to use the plural form. Would you like to change this?',
                choices: [
                    {
                        name: `Change to ${id.replace("berry", "berries")}`,
                        value: id.replace("berry", "berries"),
                    },
                    {
                        name: `Keep it as ${id}`,
                        value: id,
                    },
                ],
            },
            {
                type: "input",
                name: "bushId",
                message: "What should the ID of the bush be?",
                default: suggestedBushId,
            },
        ])
        .then((answers: { bushId: string; id: string }) => {
            if (answers.bushId === "") answers.bushId = suggestedBushId;
            writeFile(generator("blockstates", "ages"), answers.bushId, mod, { stages: 4 });
            [0, 1, 2, 3].forEach((stage) => {
                writeFile(generator("models", "crossBlock"), `${answers.bushId}_stage${stage}`, mod);
            });
            writeFile(generator("models", "item"), answers.id, mod);
        });
}
