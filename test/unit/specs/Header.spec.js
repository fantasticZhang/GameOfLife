/**
 * Created by jin on 2017/6/3.
 */

import Vue from 'vue'
import Header from '/component/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('header h1').textContent)
      .to.equal('Game of life')
  })
})
