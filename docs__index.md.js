(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"F+kV":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),o=t("dEAq");t("Rsk4");e["default"]=n=>(i.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),i.a.createElement(i.a.Fragment,null))},Rsk4:function(n,e,t){"use strict";t.r(e);var r=t("9og8"),i=t("WmNS"),o=t.n(i),p=t("rlch"),s="import React from 'react';\nimport Alert from '../index';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",a="import React from 'react';\n// \u6b64\u5904\u4f7f\u7528\u4e86prop-types\uff0c\u56e0\u4e3a\u65e0\u6cd5\u4fdd\u8bc1\u5bbf\u4e3b\u73af\u5883\u4e5f\u4f7f\u7528typescript\uff0c\u4ece\u800c\u80fd\u591f\u8fdb\u884c\u9759\u6001\u68c0\u67e5\uff0c\u6545\u4f7f\u7528prop-types\u4fdd\u8bc1javascript\u7528\u6237\u4e5f\u80fd\u5f97\u5230\u53cb\u597d\u7684\u8fd0\u884c\u65f6\u62a5\u9519\u4fe1\u606f\u3002\u5f53\u7136\uff0c\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",c='"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nrequire("./index.less");',l="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n}";e["default"]={"alert-basic":{component:Object(p["c"])({loader:function(){var n=Object(r["a"])(o.a.mark((function n(){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"Xvn/"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:s},"index.tsx":{import:"../index",content:a},"style/index.js":{import:"../style",content:c},"index.less":{import:"./index.less",content:l}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"Alert",identifier:"alert-basic"}}}},x2v5:function(n){n.exports=JSON.parse("{}")}}]);