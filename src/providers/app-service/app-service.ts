/* Last updated in 20200316 */
import alertService from '../alert-service/alert-service';

export class AppServiceProvider {
    public static BASE_DOMAIN: string = 'https://www.yilabao.cn/';
    public static BASE_API: string = 'api/';
    public static BASE_DOMAIN_API = AppServiceProvider.BASE_DOMAIN + AppServiceProvider.BASE_API;

    // public header = { 'content-type': 'application/json' };

    public header = { 'content-type': 'application/x-www-form-urlencoded' };

    public alertService = alertService;

    // constructor(public alertService: AlertServiceProvider){

    // }

    /**
     * 获取平台标识
     */
    public getPalformNumber(): number {
        // try {
        //     const res = wx.getSystemInfoSync()
        //     console.log(res.model)
        //     console.log(res.pixelRatio)
        //     console.log(res.windowWidth)
        //     console.log(res.windowHeight)
        //     console.log(res.language)
        //     console.log(res.version)
        //     console.log(res.platform)
        // } catch (e) {
        //     // Do something when catch error
        // }
        return 4;
    }

    public getReqUrl(url: string) {
        if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
            return url;
        }
        return AppServiceProvider.BASE_DOMAIN_API + url;
    }

    /**
     * 验证登录
     */
    public checkLogin(): boolean {
        let token = '';
        if (token != '') {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取用户token
     */
    public getToken() {
        return '';
    }

    /**
     * 跳转登录
     */
    public gotoLogin() {}

    /**
     * 页面跳转
     */
    public push(url: string, json: any = {}) {
        url = this.getPageUrl(url, json);
        wx.navigateTo({
            url: url
        });
    }

    /**
     * 跳转tabs页面
     * @param url tabs页面
     */
    public pushTabs(url: string) {
        url = this.getPageUrl(url);
        wx.switchTab({
            url: url
        });
    }

    /**
     * 返回
     * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    public pop(delta: number = 1) {
        wx.navigateBack({
            delta: delta
        });
    }

    /**
     * request success 回调
     */
    public successHandler(res: any, callback: (result: HttpCode<any>) => void): void {
        if (res.data.code == 200) {
            callback && callback(res.data);
        } else {
            this.errorHandler(res);
        }
    }

    /**
     * request fail 或 success时 code != 200 时 回调
     */
    public errorHandler(res: any): void {
        console.log(res);
        this.alertService.alert('网络开小差');
    }

    public getPageUrl(url: string, json: any = {}) {
        if (url.indexOf('../') === -1 && url.indexOf('?') === -1) {
            url = '../' + url + '/' + url;
        }
        let jsonKeys: string[] = Object.keys(json);
        if (jsonKeys.length === 0) {
            return url;
        }
        //json转url参数
        let urlParams = jsonKeys
            .map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
            })
            .join('&');
        if (url.indexOf('?') === -1) {
            url += '?' + urlParams;
        } else {
            url += '&' + urlParams;
        }
        return url;
    }
}

/**
 * 返回码
 */
export interface HttpCode<T> {
    code: string;
    message?: string;
    data?: T;
    success?: boolean;
}

export default new AppServiceProvider();
