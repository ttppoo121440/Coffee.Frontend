import Adapter from '../Adapter';

class Category extends Adapter {
  transform() {
    return this.data.reduce((prev, current) => (prev.includes(current.category)
      ? prev : [...prev, current.category]), []);
  }
}

export default Category;
