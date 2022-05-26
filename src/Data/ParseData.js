
//stringData is a raw string representing the table fromt the txt file in ./db/...
//This function parses the stringTable and converts it into a 2-d list of ints.
//Each sub list has 12 int corresponding to the values for the months of that <year .
//Each sub list represents the data for an individual state.
export const ParseAreaData = (stringData, action, states) => {
    
    const table = stringData.split(/\r?\n/);

    const conversion = {
        0: "New-York",
        1: "California",
        2: "Illinois",
        3: "Florida",
        4: "Texas"
    }

    let start;
    switch(action){
        case "temperature":
            start = 0;
            break;

        case "methane":
            start = 5;
            break;

        case "ozone":
            start = 10;
            break;

        case "carbon-monoxide":
            start = 15;
            break;

        default:
            start = 20;
            break;
    }

    let final = [];

    for(let i = start; i < start + 5; i++){

        if(states.includes(conversion[i - start])){
            let temp = table[i].split(" ");
            final.push(temp.map(val => parseFloat(val)));
        }
        else{
            final.push([]);
        }
    }

    return final;

}


//Function Called after UpdateTableData
//When data pulled in from previous function the whole table is pulled in as a string.
//This function parses the string and returns a list<list<int>> representing the data
//That will be passed into the chart configurations.
export const ParseTableData = (stringData, action) => {

    const table = stringData.split(/\r?\n/);


    let start;
    switch(action){
        case "temperature":
            start = 0;
            break;

        case "methane":
            start = 5;
            break;

        case "ozone":
            start = 10;
            break;

        case "carbon-monoxide":
            start = 15;
            break;

        default:
            start = 20;
            break;
    }

    let final = [];

    for(let i = start; i < start + 5; i++){
        let temp = table[i].split(" ");
        final.push(temp.map(val => parseFloat(val)));
    }

    return final;

}
