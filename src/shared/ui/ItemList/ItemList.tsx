import type { ReactNode } from "react"
import type { PropsWithChildren } from "react"

type ItemListProps<T> = {
  items: T[]
  renderItem: (item: T) => ReactNode
  getKey: (item: T) => number
}

export function ItemList<T>({ items, renderItem, getKey }: PropsWithChildren<ItemListProps<T>>) {
  return (
    <div>
      {items.map((item) => (
        <div key={getKey(item)}>{renderItem(item)}</div>
      ))}
    </div>
  )
}