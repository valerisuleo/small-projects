export interface ITradeItem {
    time: string
    currencyPair: string
    rate: number
}

export interface IBasketItem {
    event: string,
    item: number
    index: number
}

export interface IDirection {
    prefix: string, 
    iconName: string, 
    icon: any[]
}