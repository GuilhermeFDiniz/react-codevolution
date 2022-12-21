import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps){
  const { removeFromCart} =useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) return null
  return (
    <Stack className="d-flex align-items-center" direction="horizontal" gap={2}>
      <img src={item.imgUrl} style={{width: "125px", height: "75px"}}/>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
          <span className="text-muted" style={{fontSize:".65rem"}}>x{quantity}</span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem"}}>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
      </div>
    </Stack>
  )

}
