"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_service_1 = require("../alert-service/alert-service");
var app_service_1 = require("../app-service/app-service");
var HttpServiceProvider = (function () {
    function HttpServiceProvider() {
        this.header = { 'content-type': 'application/x-www-form-urlencoded' };
        this.alertService = alert_service_1.default;
        this.appService = app_service_1.default;
    }
    HttpServiceProvider.prototype.get = function (url, params, callback, loading) {
        if (loading === void 0) { loading = false; }
        var that = this;
        if (loading) {
            that.alertService.showLoading('loading...');
        }
        params.token = this.appService.getToken();
        params.platform = this.getPalformNumber();
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
                if (callback) {
                    that.successHandler(res, callback);
                }
            },
            fail: function (res) {
                that.errorHandler(res);
            },
            complete: function () {
                loading && that.alertService.closeLoading();
            },
        });
    };
    HttpServiceProvider.prototype.httpPost = function (url, params, loading, callback, errorCallback) {
        if (loading === void 0) { loading = false; }
        var that = this;
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
            success: function (res) {
                if (res && res.header && res.header['Set-Cookie']) {
                    wx.setStorageSync('cookieKey', res.header['Set-Cookie']);
                }
                if (callback) {
                    that.successHandler(res, callback, errorCallback);
                }
            },
            fail: function (res) {
                if (errorCallback) {
                    that.errorHandler(res, errorCallback);
                }
            },
            complete: function () {
                loading && that.alertService.closeLoading();
            },
        });
    };
    HttpServiceProvider.prototype.post = function (url, params, callback, loading) {
        if (loading === void 0) { loading = false; }
        var that = this;
        params.platform = this.getPalformNumber();
        params.token = this.appService.getToken();
        if (loading) {
            that.alertService.showLoading('loading...');
        }
        var cookie = wx.getStorageSync('cookieKey');
        var cookies = { Cookie: cookie };
        if (cookie) {
            this.header.Cookie = cookie;
        }
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
                if (callback) {
                    that.successHandler(res, callback);
                }
            },
            fail: function (res) {
                that.errorHandler(res);
            },
            complete: function () {
                loading && that.alertService.closeLoading();
            },
        });
    };
    HttpServiceProvider.prototype.getPalformNumber = function () {
        return 4;
    };
    HttpServiceProvider.prototype.getReqUrl = function (url) {
        if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
            return url;
        }
        return app_service_1.AppServiceProvider.BASE_DOMAIN_API + url;
    };
    HttpServiceProvider.prototype.checkLogin = function () {
        var token = '';
        if (token != '') {
            return true;
        }
        else {
            return false;
        }
    };
    HttpServiceProvider.prototype.getToken = function () {
        return '';
    };
    HttpServiceProvider.prototype.gotoLogin = function () { };
    HttpServiceProvider.prototype.push = function (url, json) {
        if (json === void 0) { json = {}; }
        var urlParams = Object.keys(json)
            .map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        })
            .join('&');
        if (url.indexOf('?') == -1) {
            url += '?' + urlParams;
        }
        else {
            url += '&' + urlParams;
        }
        wx.navigateTo({
            url: url,
        });
    };
    HttpServiceProvider.prototype.pushTabs = function (url) {
        wx.switchTab({
            url: url,
        });
    };
    HttpServiceProvider.prototype.pop = function (delta) {
        if (delta === void 0) { delta = 1; }
        wx.navigateBack({
            delta: delta,
        });
    };
    HttpServiceProvider.prototype.successHandler = function (res, callback, errorCallback) {
        if (res.data.code == 200) {
            callback && callback(res.data);
        }
        else {
            this.errorHandler(res, errorCallback);
        }
    };
    HttpServiceProvider.prototype.errorHandler = function (res, errorCallback) {
        if (errorCallback) {
            errorCallback && errorCallback(res.data);
        }
        else {
            this.alertService.alert(res.data.message);
        }
    };
    return HttpServiceProvider;
}());
exports.HttpServiceProvider = HttpServiceProvider;
exports.default = new HttpServiceProvider();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTBEO0FBQzFELDBEQUE0RTtBQUU1RTtJQUFBO1FBQ1csV0FBTSxHQUFRLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7UUFFdEUsaUJBQVksR0FBRyx1QkFBWSxDQUFDO1FBRTVCLGVBQVUsR0FBRyxxQkFBVSxDQUFDO0lBb05uQyxDQUFDO0lBL01VLGlDQUFHLEdBQVYsVUFBVyxHQUFRLEVBQUUsTUFBVyxFQUFFLFFBQXVCLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUMvRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztRQUNELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUxQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLEtBQUs7WUFDYixRQUFRLEVBQUUsTUFBTTtZQUNoQixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQVAsVUFBUSxHQUFRO2dCQUNaLElBQUksUUFBUSxFQUFFO29CQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUosVUFBSyxHQUFRO2dCQUNULElBQUksQ0FB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O1NBQzVDO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXpORCxJQXlOQztBQXpOWSxrREFBbUI7QUEwT2hDLGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbGVydFNlcnZpY2UgZnJvbSAnLi4vYWxlcnQtc2VydmljZS9hbGVydC1zZXJ2aWNlJztcclxuaW1wb3J0IGFwcFNlcnZpY2UsIHsgQXBwU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vYXBwLXNlcnZpY2UvYXBwLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGhlYWRlcjogYW55ID0geyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfTtcclxuXHJcbiAgICBwdWJsaWMgYWxlcnRTZXJ2aWNlID0gYWxlcnRTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBhcHBTZXJ2aWNlID0gYXBwU2VydmljZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkei1t2dldOivt+axglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KHVybDogYW55LCBwYXJhbXM6IGFueSwgY2FsbGJhY2s/OiBIdHRwQ2FsbGJhY2ssIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoYXQuYWxlcnRTZXJ2aWNlLnNob3dMb2FkaW5nKCdsb2FkaW5nLi4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy50b2tlbiA9IHRoaXMuYXBwU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgIC8vIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7IHBsYXRmb3JtOiB0aGlzLmdldFBhbGZvcm1OdW1iZXIoKSB9KTtcclxuICAgICAgICBwYXJhbXMucGxhdGZvcm0gPSB0aGlzLmdldFBhbGZvcm1OdW1iZXIoKTtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGF0LmdldFJlcVVybCh1cmwpLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICAgICAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Y2Nlc3NIYW5kbGVyKHJlcywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmVycm9ySGFuZGxlcihyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgdGhhdC5hbGVydFNlcnZpY2UuY2xvc2VMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5Hotbdwb3N06K+35rGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBodHRwUG9zdChcclxuICAgICAgICB1cmw6IGFueSxcclxuICAgICAgICBwYXJhbXM6IGFueSxcclxuICAgICAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgY2FsbGJhY2s/OiBIdHRwQ2FsbGJhY2ssXHJcbiAgICAgICAgZXJyb3JDYWxsYmFjaz86IEh0dHBDYWxsYmFja1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcGFyYW1zLnBsYXRmb3JtID0gdGhpcy5nZXRQYWxmb3JtTnVtYmVyKCk7XHJcbiAgICAgICAgcGFyYW1zLnRva2VuID0gdGhpcy5hcHBTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgdGhhdC5hbGVydFNlcnZpY2Uuc2hvd0xvYWRpbmcoJ2xvYWRpbmcuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhhdC5nZXRSZXFVcmwodXJsKSxcclxuICAgICAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHRoaXMuaGVhZGVyLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmhlYWRlciAmJiByZXMuaGVhZGVyWydTZXQtQ29va2llJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY29va2llS2V5JywgcmVzLmhlYWRlclsnU2V0LUNvb2tpZSddKTsgLy/kv53lrZhDb29raWXliLBTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Y2Nlc3NIYW5kbGVyKHJlcywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZXJyb3JIYW5kbGVyKHJlcywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZyAmJiB0aGF0LmFsZXJ0U2VydmljZS5jbG9zZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkei1t3Bvc3Tor7fmsYJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3QodXJsOiBhbnksIHBhcmFtczogYW55LCBjYWxsYmFjaz86IEh0dHBDYWxsYmFjaywgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcGFyYW1zLnBsYXRmb3JtID0gdGhpcy5nZXRQYWxmb3JtTnVtYmVyKCk7XHJcbiAgICAgICAgcGFyYW1zLnRva2VuID0gdGhpcy5hcHBTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgdGhhdC5hbGVydFNlcnZpY2Uuc2hvd0xvYWRpbmcoJ2xvYWRpbmcuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdjb29raWVLZXknKTsgLy/lj5blh7pDb29raWVcclxuICAgICAgICBsZXQgY29va2llcyA9IHsgQ29va2llOiBjb29raWUgfTtcclxuICAgICAgICBpZiAoY29va2llKSB7XHJcbiAgICAgICAgICAgIC8vIE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXIsIGNvb2tpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5Db29raWUgPSBjb29raWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoYXQuZ2V0UmVxVXJsKHVybCksXHJcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgICAgICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Y2Nlc3NIYW5kbGVyKHJlcywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmVycm9ySGFuZGxlcihyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgdGhhdC5hbGVydFNlcnZpY2UuY2xvc2VMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW5s+WPsOagh+ivhlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UGFsZm9ybU51bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXFVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PSAwIHx8IHVybC5pbmRleE9mKCdodHRwczovLycpID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEFwcFNlcnZpY2VQcm92aWRlci5CQVNFX0RPTUFJTl9BUEkgKyB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpqozor4HnmbvlvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoZWNrTG9naW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gJyc7XHJcbiAgICAgICAgaWYgKHRva2VuICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnlKjmiLd0b2tlblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Lez6L2s55m75b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnb3RvTG9naW4oKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i6Lez6L2sXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoKHVybDogc3RyaW5nLCBqc29uOiBhbnkgPSB7fSkge1xyXG4gICAgICAgIC8vanNvbui9rHVybOWPguaVsFxyXG4gICAgICAgIGxldCB1cmxQYXJhbXMgPSBPYmplY3Qua2V5cyhqc29uKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChqc29uW2tleV0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignJicpO1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHVybCArPSAnPycgKyB1cmxQYXJhbXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsICs9ICcmJyArIHVybFBhcmFtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDot7Povax0YWJz6aG16Z2iXHJcbiAgICAgKiBAcGFyYW0gdXJsIHRhYnPpobXpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hUYWJzKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm55cclxuICAgICAqIEBwYXJhbSBkZWx0YSDov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG144CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3AoZGVsdGE6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICBkZWx0YTogZGVsdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXF1ZXN0IHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWNjZXNzSGFuZGxlcihyZXM6IGFueSwgY2FsbGJhY2s/OiBIdHRwQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBIdHRwQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyKHJlcywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVxdWVzdCBmYWlsIOaIliBzdWNjZXNz5pe2IGNvZGUgIT0gMjAwIOaXtiDlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVycm9ySGFuZGxlcihyZXM6IGFueSwgZXJyb3JDYWxsYmFjaz86IEh0dHBDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIGlmIChlcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjayhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Ye95pWw57G75Z6L77ya572R57uc6K+35rGC5Zue6LCD5Ye95pWw55qE57G75Z6LXHJcbiAqIDIwMTkwOTI0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEh0dHBDYWxsYmFjayA9IChyZXN1bHQ6IEh0dHBDb2RlPGFueT4pID0+IHZvaWQ7XHJcbi8qKlxyXG4gKiDov5Tlm57noIFcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEh0dHBDb2RlPFQ+IHtcclxuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBUO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cFNlcnZpY2VQcm92aWRlcigpO1xyXG4iXX0=