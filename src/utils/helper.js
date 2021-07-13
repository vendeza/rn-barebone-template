const fixedFloat = (x) => {
    if (x) {
        return parseFloat(x.toFixed(2));
    }
    return null;
};

const priceFormatter = (num) => {
    if (!num) {
        return `$${num}`;
    }
    return `$${fixedFloat(num)}`;
};

const profitFormatter = (profit) => {
    return ` ${profit > 0 ? "+" : "-"} ${percentageFormatter(
        Math.abs(profit),
    )}`;
};

const percentageFormatter = (num) => {
    if (num < 100) {
        return `${(num * 100).toFixed(2)}%`;
    } else {
        const billion = 1000000000;
        const trillion = billion * 1000;
        if (num > trillion) {
            return `${(num / trillion).toFixed(0)} trillion X`;
        } else if (num > billion) {
            return `${(num / billion).toFixed(0)} billion X`;
        } else {
            return `${num.toFixed(0)}X`;
        }
    }
};

const formatLargeNumber = (num, fixed) => {
    if (num === null) {
        return null;
    } // terminate early
    if (num === 0) {
        return "0";
    } // terminate early
    fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
    var b = num.toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c =
            k < 1
                ? num.toFixed(0 + fixed)
                : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
        e = d + ["", "K", "M", "B", "T"][k]; // append power
    return e;
};

const timestampDateFormatter = (ts) => {
    const exp_date = new Date(ts * 1000).toLocaleDateString("en-US");
    return `${exp_date}`;
};

const timestampDateTimeFormatter = (ts) => {
    if (ts === 0) return "N/A";
    const exp_date = new Date(ts * 1000).toLocaleDateString("en-US");
    const exp_time = new Date(ts * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return `${exp_date} ${exp_time}`;
};

const timestampTimeFormatter = (ts) => {
    if (ts === 0) return "N/A";
    const exp_time = new Date(ts * 1000).toLocaleTimeString("EU", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return `${exp_time}`;
};

export {
    fixedFloat,
    priceFormatter,
    profitFormatter,
    percentageFormatter,
    formatLargeNumber,
    timestampDateTimeFormatter,
    timestampDateFormatter,
    timestampTimeFormatter,
};
