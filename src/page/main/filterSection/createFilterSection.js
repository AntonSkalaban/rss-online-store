import createElement from "../../../createElement";
import createCategoryBlock from "./filterBloks/createCategoryBlock";
     
const createFilterSection = () => {
    const section = createElement('section', 'filter-section');
    const category = createCategoryBlock();

    section.appendChild(category);
    return section;
}

export default createFilterSection;