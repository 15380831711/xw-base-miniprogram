import alertService from '../alert-service/alert-service';
import appService, { AppServiceProvider } from '../app-service/app-service';

export class HttpServiceProvider {
    public header: any = { 'content-type': 'application/x-www-form-urlencoded' };

    public alertService = alertService;

    public appService = appService;

    /**
     * 发起get请求
     */
    public get(url: any, params: any, callback?: HttpCallback, loading: boolean = false): void {
        const that = this;
        if (loading) {
            that.alertService.showLoading('loading...');
        }
        params.token = this.appService.getToken();
        // Object.assign(params, { platform: this.getPalformNumber() });
        params.platform = this.getPalformNumber();
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success(res: any) {
                if (callback) {
                    that.successHandler(res, callback);
                }
            },
            fail(res: any) {
                that.errorHandler(res);
            },
            complete() {
                loading && that.alertService.closeLoading();
            },
        });
    }

    /**
     * 发起post请求
     */
    public httpPost(
        url: any,
        params: any,
        loading: boolean = false,
        callback?: HttpCallback,
        errorCallback?: HttpCallback
    ): void {
        const that = this;
        params.platform = this.getPalformNumber();
        params.token = this.appService.getToken();
        if (loading) {
            that.alertService.showLoading('loading...');
        }
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success(res: any) {
                if (res && res.header && res.header['Set-Cookie']) {
                    wx.setStorageSync('cookieKey', res.header['Set-Cookie']); //保存Cookie到Storage
                }
                if (callback) {
                    that.successHandler(res, callback, errorCallback);
                }
            },
            fail(res: any) {
                if (errorCallback) {
                    that.errorHandler(res, errorCallback);
                }
            },
            complete() {
                loading && that.alertService.closeLoading();
            },
        });
    }

    /**
     * 发起post请求
     */
    public post(url: any, params: any, callback?: HttpCallback, loading: boolean = false): void {
        const that = this;
        params.platform = this.getPalformNumber();
        params.token = this.appService.getToken();
        if (loading) {
            that.alertService.showLoading('loading...');
        }
        let cookie = wx.getStorageSync('cookieKey'); //取出Cookie
        // let cookies = { Cookie: cookie };
        if (cookie) {
            // Object.assign(this.header, cookies);
            this.header.Cookie = cookie;
        }
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success(res: any) {
                if (callback) {
                    that.successHandler(res, callback);
                }
            },
            fail(res: any) {
                that.errorHandler(res);
            },
            complete() {
                loading && that.alertService.closeLoading();
            },
        });
    }
    /**
     * 获取平台标识
     */
    public getPalformNumber(): number {
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
        //json转url参数
        let urlParams = Object.keys(json)
            .map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
            })
            .join('&');
        if (url.indexOf('?') == -1) {
            url += '?' + urlParams;
        } else {
            url += '&' + urlParams;
        }
        // console.log(url);
        wx.navigateTo({
            url: url,
        });
    }

    /**
     * 跳转tabs页面
     * @param url tabs页面
     */
    public pushTabs(url: string) {
        wx.switchTab({
            url: url,
        });
    }

    /**
     * 返回
     * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    public pop(delta: number = 1) {
        wx.navigateBack({
            delta: delta,
        });
    }

    /**
     * request success 回调
     */
    public successHandler(res: any, callback?: HttpCallback, errorCallback?: HttpCallback): void {
        if (res.data.code == 200) {
            callback && callback(res.data);
        } else {
            this.errorHandler(res, errorCallback);
        }
    }

    /**
     * request fail 或 success时 code != 200 时 回调
     */
    public errorHandler(res: any, errorCallback?: HttpCallback): void {
        if (errorCallback) {
            errorCallback && errorCallback(res.data);
        } else {
            this.alertService.alert(res.data.message);
        }
    }
}

/**
 * 函数类型：网络请求回调函数的类型
 * 20190924
 */
export declare type HttpCallback = (result: HttpCode<any>) => void;
/**
 * 返回码
 */
export declare class HttpCode<T> {
    success: boolean;
    code: string;
    data: T;
    message: string;
}

export default new HttpServiceProvider();
