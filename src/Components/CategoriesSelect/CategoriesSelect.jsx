import "./CategoriesSelect.css"
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

function CategoriesSelect() {
  return (
    <section className="categories-section">
      <p className="section-title">shop by category</p>
      <CategoriesSlider />
    </section>
  )
}

export default CategoriesSelect;
