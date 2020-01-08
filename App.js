import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Seach: SearchScreen,
    ResultShow: ResultShowScreen
  },
  {
    initialRouteParams: "Search",
    defaultNavigationOptions: {
      title: "Food App"
    }
  }
);

export default createAppContainer(navigator);
