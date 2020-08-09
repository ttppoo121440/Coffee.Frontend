<template>
  <transition-group
    name="msg"
    tag="div"
  >
    <div
      v-for="(item, index) in content"
      :key="item + index"
      ref="msg"
      class="message"
      :style="`top:${13 * index === 0 ? 13 :13 + 7 *index}%`"
    >
      <v-icon
        name="check-circle"
        scale="2"
      />
      <p class="ml-2 mb-0 mr-auto">
        {{ item.content }}
      </p>
      <a
        href="#"
        class="m-0"
        @click.prevent="close(index)"
      >
        &#935;
      </a>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
    autoTime: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      timers: [],
    };
  },
  computed: {
    bindingShow: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit('update:show', value);
      },
    },
    bindingContent: {
      get() {
        return this.content;
      },
      set(value) {
        this.$emit('update:content', value);
      },
    },
  },
  watch: {
    content() {
      this.timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
      this.timers = [];
      this.countdown();
    },
  },
  methods: {
    close(id) {
      // this.$nextTick(() => {
      //   this.content.splice(this.$refs.msg[id], 1);
      //   console.log(this.$refs.msg);
      // });

      // this.content.forEach((item, index) => {
      //   if (item.id === id) {
      //     this.content.splice(index, 1);
      //   }
      // });
      console.log(this.$el.childNodes);
      this.$el.childNodes[id].remove(this.$el.childNodes[id]);
      // console.log(this.$el.parentNode.removeChild(this.$el));
    },
    countdown() {
      const timer = setTimeout(() => {
        // this.close();
      }, this.autoTime);
      this.timers.push(timer);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.message {
  z-index: 10000;
  width: 320px;
  background: #f0f9eb;
  position: fixed;
  left: 50%;
  top: 13%;
  transform: translateX(-50%);
  display: flex;
  padding: 10px;
  color: $primary;
  p {
    line-height: 30px;
  }
  a {
    line-height: 30px;
    &:hover {
      color: #ccc;
    }
  }
}
</style>
