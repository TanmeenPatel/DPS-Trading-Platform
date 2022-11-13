const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const opts = {
    legend: {
        onClick: null,
    },
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 16,
                },
            },
        },
        tooltip: {
            bodyFont: {
                size: 16,
            },
            callbacks: {
                label: function (ctx) {
                    return String(ctx.parsed.y).substring(0, 8);
                },
                title: function (ctx) {
                    return "";
                },
            },
        },
    },
};

let config = {
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
    options: opts,
};

const buy_chart = new Chart(document.getElementById("buy_side_chart"), config);

const sell_chart = new Chart(
    document.getElementById("sell_side_chart"),
    config
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
    buy_chart.data.datasets[0].label = product_name;
    let stock_hist = JSON.parse(localStorage.stock_history);
    buy_chart.data.datasets[0].data = stock_hist[srl_no];
    buy_chart.update();
}

function display_sell_chart(product_name, srl_no) {
    sell_chart.data.datasets[0].label = product_name;
    let stock_hist = JSON.parse(localStorage.stock_history);
    sell_chart.data.datasets[0].data = stock_hist[srl_no];
    sell_chart.update();
}
