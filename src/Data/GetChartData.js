
//Callback function for UpdateTemperatureData.
export function MakeLineData(data){

    return {
        labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Global Temperatures',
            data: data, //Arr<int>
            fill: true,
            backgroundColor: "rgba(43, 151, 229, .22)",
            borderColor: "rgba(43, 151, 229, .22)",
            tension: 0.1
        }]
    }
}

//Callback function for UpdateMethaneData
export function MakeDonutData(data){

    return {
        labels: [
            'New York City',
            'Los Angeles',
            'Chicago',
            'Miami',
            'Dallas'
        ],
        datasets: [{
            data: data, //Arr<int>
            backgroundColor: [

                '#DB00FF',
                '#9DBBE8',
                '#8DD391',
                '#FF6969',
                '#FF9900'
            ]
        }]
    }
}

//Intial configuration that data(state variable in LineGraph compoennt) will be set to.
export const initialLineData = {
    labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        label: 'Global Temperatures',
        data: [61, 56, 65, 56, 79, 87, 86, 83, 83, 83, 49, 61],
        fill: true,
        backgroundColor: "rgba(43, 151, 229, .22)",
        borderColor: "rgba(43, 151, 229, .22)",
        tension: 0.1
    }]
};

//options attribute will be static.
export const LineOptions = {
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};


//Intial configuration that data(state variable in Donut Chart compoennt) will be set to.
export const initialDonutData = {
    labels: [
        'Blue',
        'Green',
        'Red',
        'Orange',
        'Pink'
    ],
    datasets: [{
        data: [1828, 1865, 1863, 1923, 1844],
        backgroundColor: [

            '#DB00FF',
            '#9DBBE8',
            '#8DD391',
            '#FF6969',
            '#FF9900'
        ]
    }]
};

//Donut options will be static.
export const DonutOptions =  {
    cutout: "80%",
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    }
};


