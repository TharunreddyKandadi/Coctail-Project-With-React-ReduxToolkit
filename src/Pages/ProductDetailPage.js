import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCocktails } from "../Redux/Features/CocktailSlice";
import SpinnerAni from "../Components/Shared/SpinnerAni";
const ProductDetailPage = () => {
  const [modifiedCoctail, setmodifiedCoctail] = useState([]);
  const { loading, Coctail } = useSelector((state) => ({ ...state.app }));
  // const data = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktails(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (Coctail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: img,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = Coctail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      ];
      const newCoctail = [name, category, info, glass, img, ingredients];
      setmodifiedCoctail(newCoctail);
    } else {
      setmodifiedCoctail(null);
    }
  }, [Coctail]);

  if (!modifiedCoctail) {
    return (
      <div>
        <h2>No Coctail Data</h2>
      </div>
    );
  } else {
    const [name, category, info, glass, img, ingredients] = modifiedCoctail;
    console.log(modifiedCoctail);

    console.log(name);
    return (
      <>
        {loading ? (
          <SpinnerAni />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                Go Back
              </Link>
              <div className="row mt-4">
                <div className="col md-5">
                  <img src={img} alt={name} width={400} height={300} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>ingredientts : {ingredients + ","}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};
export default ProductDetailPage;
