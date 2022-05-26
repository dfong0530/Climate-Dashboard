

/*
    Area Chart

*/

//Area Option config for graph
export const AreaOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            grid: {
                borderColor: "#F0F0F0",
                color: "transparent"
            },
            ticks: {
                color: "#A3A3A3",
                font: {
                    size: 10
                }
            }
        },
        y: {
            grid: {
                borderColor: "#F0F0F0",
                color: "transparent"
            },
            ticks: {
                color: "#A3A3A3",
                font: {
                    size: 10
                }
            }
        }
    }
    
};

//Takes in a 2-d list of ints. Each sub list has 12 numbers corresponding to the values of the action
//in a given year. 12 for each month.
export const MakeAreaData = (data) => {

    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "New York",
                data: data[0],
                fill: "start",
                backgroundColor: "rgba(50, 115, 241, 0.3)",
                borderColor: "rgba(50, 115, 241, .8)",
                tension: .40,
                pointStyle: "line",
                pointRadius: 20,
                pointBorderColor: "transparent"
            },
            {
                label: "California",
                data: data[1],
                fill: true,
                backgroundColor: "rgba(0, 255, 240, 0.3)",
                borderColor: "rgba(0, 255, 240, .8)",
                tension: .40,
                pointStyle: "line",
                pointRadius: 20,
                pointBorderColor: "transparent"
            },
            {
                label: "Illinois",
                data: data[2],
                fill: true,
                backgroundColor: "rgba(219, 0, 255, 0.3)",
                borderColor: "rgba(219, 0, 255, .8)",
                tension: .40,
                pointStyle: "line",
                pointRadius: 20,
                pointBorderColor: "transparent"
            },
            {
                label: "Florida",
                data: data[3],
                fill: true,
                backgroundColor: "rgba(0, 194, 255, 0.3)",
                borderColor: "rgba(0, 194, 255, .8)",
                tension: .40,
                pointStyle: "line",
                pointRadius: 20,
                pointBorderColor: "transparent"
            },
            {
                label: "Texas",
                data: data[4],
                fill: true,
                backgroundColor: "rgba(158, 0, 255, 0.5)",
                borderColor: "rgba(158, 0, 255, .8)",
                tension: .40,
                pointStyle: "line",
                pointRadius: 20,
                pointBorderColor: "transparent"
            }
        ]
    }

};


/*
    MAP DATA

    map configurations.
*/

export const material = {
  ambient: 1.05,
  diffuse: .6,
  shininess: 32,
  specularColor: [51, 51, 51]
};

//Initial State of Map Configurations
export const initialViewState = {
  latitude: 37.0902,
  longitude: -95.7129,
  zoom: 3.2
}


//Map Hexagon Colors
export const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78]
];



/*
    TABLE DATA
*/

//Functions used internally to create rows. Used in initialTableData
function createData(state, jan, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec) {
  return { state, jan, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec };
}

//Sets a template table up while data is being fetched.
export const initialTableData = () => {

    return [
        createData('New-York', 38.0, 32.0, 43.0, 45.0, 54.0, 68.0, 82.0, 78.0, 69.0, 63.0, 59.0, 41.0),
        createData('California', 61.0, 63.0, 67.0, 77.0, 72.0, 73.0, 81.0, 83.0, 78.0, 83.0, 66.0, 75.0),
        createData('Illinois', 32.0, 30.0, 31.0, 32.0, 62.0, 66.0, 70.0, 71.0, 75.0, 65.0, 47.0, 44.0),
        createData('Florida', 77.0, 71.0, 78.0, 79.0, 81.0, 79.0, 82.0, 86.0, 85.0, 85.0, 77.0, 74.0),
        createData('Texas', 45.0, 49.0, 48.0, 63.0, 64.0, 76.0, 85.0, 94.0, 95.0, 78.0, 70.0, 67.0),
    ];
};

//This function takes in data fetched and creates a table. From the data.
export const MakeTableData = (data, avaliableStates) => {
    let ret = [];
    let states = ["New-York", "California", "Illinois", "Florida", "Texas"];
    
    for(let i = 0; i < data.length; i++){

        if(avaliableStates.includes(states[i])){
            ret.push(createData(states[i], data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],
                data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11]));
        }

    }

    return ret;
}
