interface ShopTitleProps {
  money: number;
  text: string;
  cost: number;
}

// ShopTitle: Number -> h1
// Renders a title and money amount for the shop
function ShopTitle({ money, text, cost }: ShopTitleProps) {
  if (text === "") {
    return <h1 id="shopTitle">{"Shop - Balance: $" + money}</h1>;
  } else {
    return <h1 id="shopTitle">{text + " ($" + cost + ")"}</h1>;
  }
}

export { ShopTitle };
