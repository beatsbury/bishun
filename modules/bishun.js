import "/lib/papaparse.min.js";
//import "/lib/hanzi-writer.min.js";

// var Bishun = {};
// Bishun.getInfo = getInfo;

function getInfo(elementId = 'inputField') {

    let inputHanzi = document.getElementById(elementId).value;
    let numRows = 0;

    Papa.parse("./makemeahanzi_decomp_google.csv", {

        header: true,
        download: true,
        step: (row, parser) => {

            numRows += 1;

            if (row.data.Character === inputHanzi) {
                generateInfo(row.data);
                parser.abort();
            }
        },
        complete: (results) => {
            console.log(numRows);
        }

    });

    function generateInfo(data) {


        console.log('Pinyin: ', data.Pinyin);
        console.log('Definition: ', data.Definition);
        console.log('Decomposition: ', data.Decomposition);
        console.log('Type: ', data.Type);
        if (data.Type === 'pictophonetic') {
            console.log('Semantic: ', data.Semantic);
            console.log('Phonetic: ', data.Phonetic);
        }


    }

}

function test1() {
    return 4;
}