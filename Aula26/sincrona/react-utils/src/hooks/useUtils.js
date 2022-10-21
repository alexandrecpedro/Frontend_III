export const formatMoney = (value) => {
    if (value) {
        return new Intl.NumberFormat("pt", {
            style: "currency",
            currency: "BRL"
        }).format(Number(value));
    }
    return "Unavaiable balance"
}

export const dateFormat = (dateUTC) => {
    if (dateUTC) {
        return new Intl.DateTimeFormat("pt", {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric'
        }).format(new Date(dateUTC));
    }
    return 'Noninformed data'
}