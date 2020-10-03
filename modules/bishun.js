
function getInfo(hanzi_input) {

    let numRows = 0;

    Papa.parse("https://cdn.jsdelivr.net/gh/beatsbury/bishun/modules/hanzi_decomp_new.csv", {

        header: true,
        download: true,
        step: (row, parser) => {

            numRows += 1;

            if (row.data.character === hanzi_input) {
                generateInfo(row.data);
                parser.abort();
            }
        },
        complete: (results) => {
            console.log(numRows);
        }

    });

    function generateInfo(data) {

        console.clear();

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                console.log(String(key) + ': ', element);

            }
        }

    }

}
