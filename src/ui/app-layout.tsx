import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/cart-overview"
import Header from "./header"
import Loader from "./loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>    
  )
}

export default AppLayout