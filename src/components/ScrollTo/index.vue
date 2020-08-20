<script>
export default {
  name: 'ScrollTo',
  methods: {
    requestAnimationFrame() {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (callback) => setTimeout(callback, 17);
      }
    },
    scrollTo(position) {
      this.requestAnimationFrame();
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const step = () => {
        const distance = position - scrollTop;
        scrollTop += distance / 5;
        if (Math.abs(distance) < 1) {
          window.scrollTo(0, position);
        } else {
          window.scrollTo(0, scrollTop);
          requestAnimationFrame(step);
        }
      };
      step();
    },
  },
};
</script>
