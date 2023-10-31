"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: function data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [{
        text: '浙江省',
        value: '330000',
        children: [{
          text: '杭州市',
          value: '330100'
        }]
      }, {
        text: '江苏省',
        value: '320000',
        children: [{
          text: '南京市',
          value: '320100'
        }]
      }]
    };
  }
};
exports["default"] = _default;