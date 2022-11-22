const fs = require("fs");

let data = fs.readFileSync("input.csv", "utf8");

let lines = data.split("\n");

for (let i = 1; i < lines.length; i++) {
    let parts = lines[i].split(",");
    if (parts.length === 1) {
        continue;
    }
    lines[i] = parts[0] + "," + (100 - parseInt(parts[1]));
}

fs.writeFileSync("output.csv", lines.join("\n"));