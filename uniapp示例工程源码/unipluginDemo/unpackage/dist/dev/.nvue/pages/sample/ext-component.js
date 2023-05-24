import { _ as _export_sfc, f as formatAppLog } from "../../_plugin-vue_export-helper.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    onTel(e) {
      formatAppLog("log", "at pages/sample/ext-component.nvue:17", "onTel=" + e.detail.tel);
    },
    myTextClick(e) {
      this.$refs.telText.clearTel();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_myText = resolveComponent("myText");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("div", null, [
      createVNode(_component_myText, {
        ref: "telText",
        tel: "12305",
        style: { "width": "200", "height": "100" },
        onOnTel: $options.onTel,
        onClick: $options.myTextClick
      }, null, 8, ["onOnTel", "onClick"])
    ])
  ]);
}
const extComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/project/uni-app/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/ext-component.nvue"]]);
export {
  extComponent as default
};
