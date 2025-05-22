import "./AdminProducts.css";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function AdminProducts() {
  return (
    <div className="admin-products-page">
      <div className="admin-body-title-cont">
        <p className="admin-body-title">products</p>

        <button className="add-product-btn">
          <IoMdAdd /> add product
        </button>
      </div>

      <div className="products-body">
        <div className="products-table-header">
          <div className="products-col1">name</div>
          <div className="products-col2">price</div>
          <div className="products-col3">orders</div>
          <div className="products-col4"></div>
        </div>

        <ProductsRow />
        <ProductsRow />
        <ProductsRow />
        <ProductsRow />
        <ProductsRow />
      </div>
    </div>
  );
}

function ProductsRow() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <div className="products-row">
      <div className="products-table-name">jbl live headphones</div>
      <div className="products-table-price">ksh 1998</div>
      <div className="products-table-orders">10</div>
      <div className="products-table-more-options-btn">
        <button onClick={toggleOptions}>
          <BsThreeDotsVertical />
        </button>

        {showOptions && (
          <div className="more-options-menu">
            <button>Edit</button>
            <button>Deactivate</button>
            <button>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminProducts;