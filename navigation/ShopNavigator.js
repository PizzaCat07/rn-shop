import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const ProductNavigator = createStackNavigator(
  {
    productOverview: ProductsOverviewScreen,
    productDetail: ProductDetailScreen,
    cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductNavigator);
