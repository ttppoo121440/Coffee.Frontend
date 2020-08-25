import Adapter from '../Adapter';

class HotProduct extends Adapter {
  transform() {
    return this.data.filter((item) => (item.category === '熱門'));
  }
}

export default HotProduct;
