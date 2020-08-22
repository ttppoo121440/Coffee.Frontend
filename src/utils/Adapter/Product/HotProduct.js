import Adapter from '../Adapter';

class HotProduct extends Adapter {
  transform() {
    const hot = [];
    return this.data.filter((item) => (item.category === '熱門' ? hot.push(item) : false));
  }
}

export default HotProduct;
