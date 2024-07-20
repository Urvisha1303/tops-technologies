import React, { useState } from "react";
import "./Tablesearch.css";

import {
  searchCount,
  createProduct,
  editProduct,
  deleteProduct,
  readProduct,
} from "./action/Tableaction";
import { useDispatch, useSelector } from "react-redux";

const Tablesearch = () => {
  const searchquery = useSelector((state) => state.Tablereducer.searchquery);
  const products = useSelector((state) => state.Tablereducer.products);
  const dispatch = useDispatch();

  const [newproduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
  });
  const [isopen, setIsOpen] = useState(false);
  const [isediting, setEditing] = useState(false);

  const searchbtn = () => {
    dispatch(searchCount(searchquery));
  };

  const createProductbtn = () => {
    dispatch(
      createProduct({ ...newproduct, id: parseInt(Math.random() * 555) })
    );
    setIsOpen(false);
  };
  const editProductbtn = () => {
    dispatch(editProduct(newproduct));
    setIsOpen(false);
    setEditing(false);
  };
  const readbutton = (product) => {
    dispatch(readProduct(product));
  };

  const editbutton = (product) => {
    setNewProduct(product);
    setIsOpen(true);
    setEditing(true);
  };

  const deletebutton = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <div className="box">
      <h1>Search Product : Shirt</h1>
      <hr />
      <div className="search-createbtn">
        <div className="searchbar">
          <input
            type="search"
            name=""
            id=""
            value={searchquery}
            onChange={(e) => dispatch(searchCount(e.target.value))}
          />
          <button
            onClick={() => {
              searchbtn();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="createProduct"
          onClick={() => {
            setNewProduct({ id: "", name: "", price: "", category: "" });
            setIsOpen(true);
            setEditing(false);
          }}
        >
          {" "}
          + Create Product
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(
              (product) =>
                product.name.includes(searchquery) ||
                product.price.includes(searchquery) ||
                product.category.includes(searchquery)
            )
            .map((result) => {
              console.log(products);
              return (
                <tr key={result.id}>
                  <td>{result.name}</td>
                  <td>{result.price}</td>
                  <td>{result.category}</td>
                  <td className="btn">
                    <button className="readbtn"
                      onClick={() => {
                        readbutton(result);
                      }}
                    >
                      Read
                    </button>
                    <button className="editbtn"
                      onClick={() => {
                        editbutton(result);
                      }}
                    >
                      Edit
                    </button>
                    <button className="deletebtn"
                      onClick={() => {
                        deletebutton(result.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {isopen && (
        <>
          <h2>{isediting ? "Edit Product" : "Create New Product"}</h2>
          <input
            type="text"
            value={newproduct.name}
            onChange={(e) =>
              setNewProduct({ ...newproduct, name: e.target.value })
            }
            placeholder="Name"
          />
          <input
            type="text"
            value={newproduct.price}
            onChange={(e) =>
              setNewProduct({ ...newproduct, price: e.target.value })
            }
            placeholder="Price"
          />
          <input
            type="text"
            value={newproduct.category}
            onChange={(e) =>
              setNewProduct({ ...newproduct, category: e.target.value })
            }
            placeholder="Category"
          />
          <button
            onClick={isediting ? editProductbtn : createProductbtn}
            // createProductbtn();
          >
            {isediting ? "Save Changes" : "Save"}
          </button>
        </>
      )}
    </div>
  );
};

export default Tablesearch;
