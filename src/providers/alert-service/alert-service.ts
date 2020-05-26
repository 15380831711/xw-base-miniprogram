/**
 * 提示框工具类
 */
export class AlertServiceProvider {

    private defaultTip: string = "提示信息";
    private defaultConfirmContent: string = "确认操作吗？";
    private defaultLoadingTip: string = "确认操作吗？";

    /**
     * alert弹出框
     */
    public alert(message: any) {
        wx.showModal({
            title: this.defaultTip,
            content: message + "",
            showCancel: false
        })
    }

    /**
     * 打开确认取消弹出框
     */
    public confirm(message: any, okFun: any, cancelFun?: any) {
        wx.showModal({
            title: this.defaultTip,
            content: message || this.defaultConfirmContent,
            showCancel: true,
            success(res) {
                if (res.confirm) {
                    okFun && okFun();
                } else if (res.cancel) {
                    cancelFun && cancelFun();
                }
            }
        })
    }

    /**
    * 显示Toast提示
    */
    public showToast(message: string = this.defaultTip) {
        wx.showToast({
            title: message,
            icon: 'none',
            duration: 2000
        })
    }

    /**
     * 吐司水印提示框
     */
    public tipToast(message: string = this.defaultTip, duration: number = 2000) {
        wx.showToast({
            title: message,
            // icon: 'success',
            duration: duration
        })
    }

    /**
     * 显示loading小提示，自动关闭
     */
    public tipLoading(message: string = this.defaultLoadingTip, duration: number = 2000) {
        wx.showLoading({
            title: message,
        })
        setTimeout(function () {
            wx.hideLoading()
        }, duration)
    }

    /**
     * 显示loading动画，需要调用closeLoading()手动关闭
     */
    public showLoading(
        message: string = this.defaultLoadingTip
    ) {
        wx.showLoading({
            title: message,
        })
    }

    /**
     * 关闭loading
     */
    public closeLoading() {
        wx.hideLoading();
    }

} 

export default new AlertServiceProvider();