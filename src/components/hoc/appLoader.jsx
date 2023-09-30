import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  // getUsersLoadingStatus,
  loadUsersList
} from "../../store/users";
import { useEffect } from "react";
import { loadItemsList } from "../../store/items";
import { loadBasketList } from "../../store/basket";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  // const usersStatusLoading = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadItemsList());

    if (isLoggedIn) {
      dispatch(loadUsersList());
      dispatch(loadBasketList());
    }
  }, [isLoggedIn]);

  // if (usersStatusLoading) return "Loading...";
  return children;
};

export default AppLoader;
