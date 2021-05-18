import Cart from '@components/Cart'
import { Layout } from '@components/common/Layout'
export default function Home(): JSX.Element {
  return (
    <div>
      <Cart />
    </div>
  )
}

Home.Layout = Layout
