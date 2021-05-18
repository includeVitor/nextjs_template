import Cart from '@components/Cart'
import Layout from '@components/common/Layout'
import { Title } from '@styles/HomeStyles'

export default function Home(): JSX.Element {
  return (
    <div>
      <Title>Olá</Title>
      <Cart />
    </div>
  )
}

Home.Layout = Layout
