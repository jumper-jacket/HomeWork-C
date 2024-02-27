const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const template = '#include <stdio.h>\n\n\n\nint main(void){\n\n\n\n\n   return 0;\n}';

rl.question('ファイル名.c: ', (fileName) => {
    fileName = `${fileName}.c`;

    // ファイルの存在を確認
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            // ファイルが存在しない場合のみ作成
            fs.writeFile(fileName, template, (err) => {
                if (err) {
                    console.error('ファイルを作成できませんでした:', err);
                } else {
                    console.log('ファイルが作成されました:', fileName);
                }
                rl.close();
            });
        } else {
            // ファイルが既に存在する場合はスキップ
            console.log('ファイルは既に存在します:', fileName);
            rl.close();
        }
    });
});
