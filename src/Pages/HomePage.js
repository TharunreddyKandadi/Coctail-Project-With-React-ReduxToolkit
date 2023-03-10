import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../Redux/Features/CocktailSlice";
import SpinnerAni from "../Components/Shared/SpinnerAni";
import { Link } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
const HomePage = () => {
  const { loading, Coctails, error } = useSelector((state) => ({
    ...state.app
  }));
  const dispatch = useDispatch();
  const [modifiedCocktail, setmodifiedCocktail] = useState([]);
  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);
  useEffect(() => {
    if (Coctails) {
      const newCocktails = Coctails.map((item) => {
        const {
          idDrink,
          strDrink,
          strGlass,
          strAlcoholic,
          strDrinkThumb
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass
        };
      });
      setmodifiedCocktail(newCocktails);
    } else {
      setmodifiedCocktail([]);
    }
  }, [Coctails]);

  if (loading) {
    return <SpinnerAni />;
  }
  if (!Coctails) {
    return <h3>No Coctail Found in that Name </h3>;
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {modifiedCocktail.map((item) => (
            <div className="col-md-3 mt-3 m-4" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
