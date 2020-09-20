import "/lib/papaparse.min.js";
//import "/lib/hanzi-writer.min.js";

var Bishun = {};
Bishun.getInfo = getInfo;

function getInfo(hanzi='中') {
    
    Papa.parse("makemeahanzi_decomp_google.csv", {
        complete: function(results) {
            console.log("Finished:", results.data);
            console.log(hanzi);
        }
    });
   
}
