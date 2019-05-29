import { WxShareBtnRes } from "../constants";

export class WxServiceProvider {

    /**
     * 是否来自按钮的转发
     */
    public isFromButton(res: WxShareBtnRes): boolean {
        return res.from === 'button';
    }

    /**
     * 是否来自右上角的转发
     */
    public isFromMenu(res: WxShareBtnRes): boolean {
        return res.from === 'menu';
    }

    /**
     * 获取当前页面路径（路由）
     */
    public getCurrentPagePath(): string {
        let pages = getCurrentPages() //获取加载的页面
        let currentPage: any = pages[pages.length - 1] //获取当前页面的对象
        let url = currentPage.route //当前页面url
        let json = currentPage.options //如果要获取url中所带的参数可以查看options
        //json转url参数
        let urlParams = "";
        if (json) {
            urlParams = Object.keys(json)
                .map(function (key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
                })
                .join("&");
        }
        if (urlParams) {
            return url + "?" + urlParams;
        }
        return url;
    }

    /**
     * 动态设置页面title
     * @param title 
     */
    public setPageTitle(title: string) {
        wx.setNavigationBarTitle({
            title: title
        });
    }

    /**
     * 拨打电话
     * https://developers.weixin.qq.com/miniprogram/dev/api/wx.makePhoneCall.html
     * @param phoneNumber 
     */
    public makePhoneCall(phoneNumber: string) {
        phoneNumber && wx.makePhoneCall({
            phoneNumber: phoneNumber
        });
    }

    /**
     * wx小程序 检查更新
     */
    public checkVersionUpdate() {
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log("是否有更新：" + res.hasUpdate)
        })
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })
        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            console.log("新版本下载失败")
        })
    }

}