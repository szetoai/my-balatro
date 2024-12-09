interface ShopTitleProps {
  money: number;
}

// ShopTitle: Number -> h1
// Renders a title and money amount for the shop
function ShopTitle({ money }: ShopTitleProps) {
  return <h1 id="shopTitle">{"Shop - Balance: $" + money}</h1>
}

export { ShopTitle };