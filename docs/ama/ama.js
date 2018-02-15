#!/usr/bin/env node

// Kindly donated by WebReflection
// Usage ./ama.js log.txt > log.md

require("fs").readFile(process.argv[2], (err, data) => {
    if (err) return;
    const content = data.toString().trim();
    const re = /^\[(.+?)\]\s+<(.+?)>\s(.*)$/gm;
    const chat = [];
    let current = {};
    let match;
    while (match = re.exec(content)) {
      if (match[2] !== current.name ) {
        chat.push(current = {
          time: match[1],
          name: match[2],
          content: match[3]
        });
      } else {
        current.content += '\n\n' + match[3];
      }
    }
    console.log(chat.map (user =>
  `<sub><sup>[${user.time}]</sup></sub> **${user.name }**

  ${user.content.replace(/```[\S\s]+?```/g, $0 => $0.replace(/\n\n/g, '\n'))}
  - - -`
    ).join('\n\n'));
  });
