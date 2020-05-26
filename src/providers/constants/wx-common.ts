/**
 * wx小程序转发分享，自定义参数类型
 */
export class WxShareData {
    public title: string = '';
    public path: string = '';
    public imageUrl: string = '';
}

/**
 * wx小程序监听分享转发事件onShareAppMessage接收参数类型
 */
export interface WxShareBtnRes {
    from: 'button' | 'menu';
    target: Target;
    webViewUrl: string;
}

/**
 * 微信绑定事件接收参数类型
 */
export interface WxBindRes {
    type: string;
    target: Target;
    currentTarget: Target;
}

export interface Target {
    id: string,
    dataset: any
}