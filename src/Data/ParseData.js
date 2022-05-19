

//Function Called after UpdateTemperatureData
//When data pulled in from previous function the whole table is pulled in as a string.
//This function parses the string and returns a list of ints. representing the data
//That will be passed into the chart configurations.
export const ParseTempData = (stringData) => {

    const final = stringData.split(/\r?\n/)[0].split(" "); //List of strings of ints

    for(let i = 0; i < final.length; i++){

        final[i] = parseFloat(final[i]);

    }

    return final;
}



//Function Called after UpdateTemperatureData
//When data pulled in from previous function the whole table is pulled in as a string.
//This function parses the string and returns a list of ints. representing the data
//That will be passed into the chart configurations.
export const ParseMethaneData = (stringData) => {

    let final = [];
    let table = stringData.split(/\r?\n/);

    for(let i = 5; i < 10; i++){
        let data = table[i].split(" ");
        final.push(parseFloat(data[0]));
    }

    return final;

}