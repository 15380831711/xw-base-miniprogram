"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlertServiceProvider = (function () {
    function AlertServiceProvider() {
        this.defaultTip = "提示信息";
        this.defaultConfirmContent = "确认操作吗？";
        this.defaultLoadingTip = "确认操作吗？";
    }
    AlertServiceProvider.prototype.alert = function (message) {
        wx.showModal({
            title: this.defaultTip,
            content: message + "",
            showCancel: false
        });
    };
    AlertServiceProvider.prototype.confirm = function (message, okFun, cancelFun) {
        wx.showModal({
            title: this.defaultTip,
            content: message || this.defaultConfirmContent,
            showCancel: true,
            success: function (res) {
                if (res.confirm) {
                    okFun && okFun();
                }
                else if (res.cancel) {
                    cancelFun && cancelFun();
                }
            }
        });
    };
    AlertServiceProvider.prototype.showToast = function (message) {
        if (message === void 0) { message = this.defaultTip; }
        wx.showToast({
            title: message,
            icon: 'none',
            duration: 2000
        });
    };
    AlertServiceProvider.prototype.tipToast = function (message, duration) {
        if (message === void 0) { message = this.defaultTip; }
        if (duration === void 0) { duration = 2000; }
        wx.showToast({
            title: message,
            duration: duration
        });
    };
    AlertServiceProvider.prototype.tipLoading = function (message, duration) {
        if (message === void 0) { message = this.defaultLoadingTip; }
        if (duration === void 0) { duration = 2000; }
        wx.showLoading({
            title: message,
        });
        setTimeout(function () {
            wx.hideLoading();
        }, duration);
    };
    AlertServiceProvider.prototype.showLoading = function (message) {
        if (message === void 0) { message = this.defaultLoadingTip; }
        wx.showLoading({
            title: message,
        });
    };
    AlertServiceProvider.prototype.closeLoading = function () {
        wx.hideLoading();
    };
    return AlertServiceProvider;
}());
exports.AlertServiceProvider = AlertServiceProvider;
exports.default = new AlertServiceProvider();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsZXJ0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUFBO1FBRVksZUFBVSxHQUFXLE1BQU0sQ0FBQztRQUM1QiwwQkFBcUIsR0FBVyxRQUFRLENBQUM7UUFDekMsc0JBQWlCLEdBQVcsUUFBUSxDQUFDO0lBbUZqRCxDQUFDO0lBOUVVLG9DQUFLLEdBQVosVUFBYSxPQUFZO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLTSxzQ0FBTyxHQUFkLFVBQWUsT0FBWSxFQUFFLEtBQVUsRUFBRSxTQUFlO1FBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMscUJBQXFCO1lBQzlDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDYixLQUFLLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDbkIsU0FBUyxJQUFJLFNBQVMsRUFBRSxDQUFDO2lCQUM1QjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBS00sd0NBQVMsR0FBaEIsVUFBaUIsT0FBaUM7UUFBakMsd0JBQUEsRUFBQSxVQUFrQixJQUFJLENBQUMsVUFBVTtRQUM5QyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLTSx1Q0FBUSxHQUFmLFVBQWdCLE9BQWlDLEVBQUUsUUFBdUI7UUFBMUQsd0JBQUEsRUFBQSxVQUFrQixJQUFJLENBQUMsVUFBVTtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFDdEUsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULEtBQUssRUFBRSxPQUFPO1lBRWQsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUtNLHlDQUFVLEdBQWpCLFVBQWtCLE9BQXdDLEVBQUUsUUFBdUI7UUFBakUsd0JBQUEsRUFBQSxVQUFrQixJQUFJLENBQUMsaUJBQWlCO1FBQUUseUJBQUEsRUFBQSxlQUF1QjtRQUMvRSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFBO1FBQ0YsVUFBVSxDQUFDO1lBQ1AsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNoQixDQUFDO0lBS00sMENBQVcsR0FBbEIsVUFDSSxPQUF3QztRQUF4Qyx3QkFBQSxFQUFBLFVBQWtCLElBQUksQ0FBQyxpQkFBaUI7UUFFeEMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLTSwyQ0FBWSxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDO0FBdkZZLG9EQUFvQjtBQXlGakMsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmj5DnpLrmoYblt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZVByb3ZpZGVyIHtcblxuICAgIHByaXZhdGUgZGVmYXVsdFRpcDogc3RyaW5nID0gXCLmj5DnpLrkv6Hmga9cIjtcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maXJtQ29udGVudDogc3RyaW5nID0gXCLnoa7orqTmk43kvZzlkJfvvJ9cIjtcbiAgICBwcml2YXRlIGRlZmF1bHRMb2FkaW5nVGlwOiBzdHJpbmcgPSBcIuehruiupOaTjeS9nOWQl++8n1wiO1xuXG4gICAgLyoqXG4gICAgICogYWxlcnTlvLnlh7rmoYZcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxlcnQobWVzc2FnZTogYW55KSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5kZWZhdWx0VGlwLFxuICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSArIFwiXCIsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJk+W8gOehruiupOWPlua2iOW8ueWHuuahhlxuICAgICAqL1xuICAgIHB1YmxpYyBjb25maXJtKG1lc3NhZ2U6IGFueSwgb2tGdW46IGFueSwgY2FuY2VsRnVuPzogYW55KSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5kZWZhdWx0VGlwLFxuICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSB8fCB0aGlzLmRlZmF1bHRDb25maXJtQ29udGVudCxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICBva0Z1biAmJiBva0Z1bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxGdW4gJiYgY2FuY2VsRnVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICog5pi+56S6VG9hc3Tmj5DnpLpcbiAgICAqL1xuICAgIHB1YmxpYyBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nID0gdGhpcy5kZWZhdWx0VGlwKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCQ5Y+45rC05Y2w5o+Q56S65qGGXG4gICAgICovXG4gICAgcHVibGljIHRpcFRvYXN0KG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuZGVmYXVsdFRpcCwgZHVyYXRpb246IG51bWJlciA9IDIwMDApIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S6bG9hZGluZ+Wwj+aPkOekuu+8jOiHquWKqOWFs+mXrVxuICAgICAqL1xuICAgIHB1YmxpYyB0aXBMb2FkaW5nKG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuZGVmYXVsdExvYWRpbmdUaXAsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDAwKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICB9KVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S6bG9hZGluZ+WKqOeUu++8jOmcgOimgeiwg+eUqGNsb3NlTG9hZGluZygp5omL5Yqo5YWz6ZetXG4gICAgICovXG4gICAgcHVibGljIHNob3dMb2FkaW5nKFxuICAgICAgICBtZXNzYWdlOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRMb2FkaW5nVGlwXG4gICAgKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFs+mXrWxvYWRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2VMb2FkaW5nKCkge1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgIH1cblxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsZXJ0U2VydmljZVByb3ZpZGVyKCk7Il19