const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let buy_config = {
    type: "line",
    data: {
        labels,
        datasets: [
            {
                label: "Stock Name",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [],
            },
        ],
    },
    options: {
        legend: {
            onClick: null,
        },
    },
};

let sell_config = {
    type: "line",
    data: {
        labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [],
            },
        ],
    },
    options: {
        legend: {
            onClick: null,
        },
    },
};

const buy_chart = new Chart(
    document.getElementById("buy_side_chart"),
    buy_config
);
const sell_chart = new Chart(
    document.getElementById("sell_side_chart"),
    sell_config
);

function register_change(product_name, price) {
    // console.log(product_name)
    let stock_hist = JSON.parse(localStorage.stock_history);
    if (stock_hist[product_name].length == 20) {
        stock_hist[product_name].splice(0, 11);
    }
    stock_hist[product_name].push(price);
    localStorage.stock_history = JSON.stringify(stock_hist);
}

function display_buy_chart(product_name, srl_no) {
    buy_config.data.datasets[0].label = product_name;
    let stock_hist = JSON.parse(localStorage.stock_history);
    buy_config.data.datasets[0].data = stock_hist[srl_no];
    buy_chart.update();
}

function display_sell_chart(product_name, srl_no) {
    sell_config.data.datasets[0].label = product_name;
    let stock_hist = JSON.parse(localStorage.stock_history);
    sell_config.data.datasets[0].data = stock_hist[srl_no];
    sell_chart.update();
}
