var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function (err, file) {
    if (err) throw err;
    
    // konten yang akan kita tulis ke file
    let content = "Hello Petani Kode!";

    // tulis konten ke file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    }); 

    // baca file
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});