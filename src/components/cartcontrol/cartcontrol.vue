<template>
  <div class="cartcontrl">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <transition name="inner">
          <span class="inner icon-remove_circle_outline"></span>
        </transition>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      // 点击加号，设置一个派发事件，将DOM对象传出去，将target作为cart.add事件的接收者
      // 然后在父组件中使用v-on监听此事件，并添加处理事件cartAdd
      this.$emit('cart-add', event.target); // $emit用来分发事件
    },
    decreaseCart(event) {
      // 解决PC端双点击问题
      if (!event._constructed) {
        return;
      }
      this.food.count--;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet">
    .cartcontrl
        font-size: 0
        .cart-decrease
          display: inline-block
          padding: 6px
          &.fade-enter-active,&.fade-leave-active  //进入动画的状态，离开动画时生效
            transition: all 0.4s linear
            opacity: 1
            transform: translate3d(0,0,0)
          &.fade-enter,&.fade-leave-active //动画的开始状态，动画一开始透明度要设为0，离开动画的结束状态
            opacity: 0
            transform: translate3d(24px,0,0)
          .inner
            display: inline-block //有宽高，才能做动画
            line-height: 24px
            font-size: 24px
            color: rgb(0,160,220)
            opacity: 1
            transform: rotate(180deg)
            &.inner-enter-active,&.inner-leave-active
              transition: all 0.4s linear
              opacity: 1
              transform: rotate(0)
            &.inner-enter,&.inner-leave-active
              opacity: 0
              transform: rotate(180deg)
        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            padding-top: 6px
            line-height: 24px
            text-align: center
            font-size: 10px
            color: rgb(147,153,159)
        .cart-add
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color: rgb(0,160,220)
</style>