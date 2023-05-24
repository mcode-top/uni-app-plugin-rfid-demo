import { _ as _export_sfc, r as requireNativePlugin } from "../../_plugin-vue_export-helper.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
var testModule = requireNativePlugin("TestModule");
const modal = requireNativePlugin("modal");
const _sfc_main = {
  onLoad() {
    plus.globalEvent.addEventListener("TestEvent", function(e) {
      modal.toast({
        message: "TestEvent收到：" + e.msg,
        duration: 1.5
      });
    });
  },
  methods: {
    testAsyncFunc() {
      testModule.testAsyncFunc(
        {
          "name": "unimp",
          "age": 1
        },
        (ret) => {
          modal.toast({
            message: ret,
            duration: 1.5
          });
        }
      );
    },
    testSyncFunc() {
      var ret = testModule.testSyncFunc({
        "name": "unimp",
        "age": 1
      });
      modal.toast({
        message: ret,
        duration: 1.5
      });
    },
    gotoNativePage() {
      testModule.gotoNativePage();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("div", null, [
      createVNode(_component_button, {
        type: "primary",
        onClick: $options.testAsyncFunc
      }, {
        default: withCtx(() => [
          createTextVNode("testAsyncFunc")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        type: "primary",
        onClick: $options.testSyncFunc
      }, {
        default: withCtx(() => [
          createTextVNode("testSyncFunc")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        type: "primary",
        onClick: $options.gotoNativePage
      }, {
        default: withCtx(() => [
          createTextVNode("跳转原生Activity")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])
    ])
  ]);
}
const extModule = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/project/uni-app/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/ext-module.nvue"]]);
export {
  extModule as default
};
