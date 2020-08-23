import Vue from 'vue';

Vue.directive('inputInt', {
  bind(el, binding, vnode) {
    const tempVnode = vnode;
    const input = tempVnode.elm;
    input.addEventListener('compositionstart', () => {
      tempVnode.inputLocking = true;
    });
    input.addEventListener('compositionend', () => {
      tempVnode.inputLocking = false;
      input.dispatchEvent(new Event('input'));
    });
    input.addEventListener('input', () => {
      if (vnode.inputLocking) {
        return;
      }
      const oldValue = input.value;
      let newValue = input.value.replace(/[^\d]/g, '');
      if (newValue) {
        switch (binding.value) {
          case 'zeroBefore':
            break;
          case 'zeroCan':
            newValue = Number(newValue).toString();
            break;
          default:
            newValue = newValue.replace(/^\b(0+)/gi, '');
        }
      }

      if (newValue !== oldValue) {
        input.value = newValue;
        input.dispatchEvent(new Event('input'));
      }
    });
  },
});
