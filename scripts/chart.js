const labels = Utils.numbers();

let buy_data = { datasets: { data: [10, 20, 30] } };
let buy_config = {
    type: "line",
    data: {
        labels,
        datasets: [
            {
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    },
    options: {},
};

let sell_data = { datasets: { data: [15, 20, 30] } };
let sell_config = {
    type: "line",
    data: {
        labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    },
    options: {},
};

const buy_chart = new Chart(
    document.getElementById("buy_side_chart"),
    buy_config
);
const sell_chart = new Chart(
    document.getElementById("sell_side_chart"),
    sell_config
);
