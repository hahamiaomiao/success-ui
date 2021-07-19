"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// 此处使用了prop-types，因为无法保证宿主环境也使用typescript，从而能够进行静态检查，故使用prop-types保证javascript用户也能得到友好的运行时报错信息。当然，这不是必须的
const prop_types_1 = __importDefault(require("prop-types"));
const prefixCls = 'happy-alert';
const kinds = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
};
const Alert = ({ children, kind = 'info', ...rest }) => (react_1.default.createElement("div", Object.assign({ className: prefixCls, style: {
        background: kinds[kind],
    } }, rest), children));
Alert.propTypes = {
    kind: prop_types_1.default.oneOf(['info', 'positive', 'negative', 'warning']),
};
exports.default = Alert;
