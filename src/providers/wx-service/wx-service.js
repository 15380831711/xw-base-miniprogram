"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxServiceProvider = (function () {
    function WxServiceProvider() {
    }
    WxServiceProvider.prototype.isFromButton = function (res) {
        return res.from === 'button';
    };
    WxServiceProvider.prototype.isFromMenu = function (res) {
        return res.from === 'menu';
    };
    WxServiceProvider.prototype.getCurrentPagePath = function () {
        var pages = getCurrentPages();
        var currentPage = pages[pages.length - 1];
        var url = currentPage.route;
        var json = currentPage.options;
        var urlParams = "";
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
    };
    WxServiceProvider.prototype.setPageTitle = function (title) {
        wx.setNavigationBarTitle({
            title: title
        });
    };
    WxServiceProvider.prototype.makePhoneCall = function (phoneNumber) {
        phoneNumber && wx.makePhoneCall({
            phoneNumber: phoneNumber
        });
    };
    WxServiceProvider.prototype.checkVersionUpdate = function () {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            console.log("是否有更新：" + res.hasUpdate);
        });
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                    if (res.confirm) {
                        updateManager.applyUpdate();
                    }
                }
            });
        });
        updateManager.onUpdateFailed(function () {
            console.log("新版本下载失败");
        });
    };
    return WxServiceProvider;
}());
exports.WxServiceProvider = WxServiceProvider;
exports.default = new WxServiceProvider();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInd4LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBdUZBLENBQUM7SUFsRlUsd0NBQVksR0FBbkIsVUFBb0IsR0FBa0I7UUFDbEMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBS00sc0NBQVUsR0FBakIsVUFBa0IsR0FBa0I7UUFDaEMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBS00sOENBQWtCLEdBQXpCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUE7UUFDN0IsSUFBSSxXQUFXLEdBQVEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQTtRQUMzQixJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFBO1FBRTlCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksRUFBRTtZQUNOLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDeEIsR0FBRyxDQUFDLFVBQVUsR0FBRztnQkFDZCxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBTU0sd0NBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDckIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBT00seUNBQWEsR0FBcEIsVUFBcUIsV0FBbUI7UUFDcEMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtNLDhDQUFrQixHQUF6QjtRQUNJLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUc7WUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLE9BQU8sWUFBQyxHQUFHO29CQUNQLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTt3QkFFYixhQUFhLENBQUMsV0FBVyxFQUFFLENBQUE7cUJBQzlCO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUF2RkQsSUF1RkM7QUF2RlksOENBQWlCO0FBeUY5QixrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXeFNoYXJlQnRuUmVzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgV3hTZXJ2aWNlUHJvdmlkZXIge1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5p2l6Ieq5oyJ6ZKu55qE6L2s5Y+RXG4gICAgICovXG4gICAgcHVibGljIGlzRnJvbUJ1dHRvbihyZXM6IFd4U2hhcmVCdG5SZXMpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlcy5mcm9tID09PSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmnaXoh6rlj7PkuIrop5LnmoTovazlj5FcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNGcm9tTWVudShyZXM6IFd4U2hhcmVCdG5SZXMpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlcy5mcm9tID09PSAnbWVudSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN6aG16Z2i6Lev5b6E77yI6Lev55Sx77yJXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRQYWdlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKSAvL+iOt+WPluWKoOi9veeahOmhtemdolxuICAgICAgICBsZXQgY3VycmVudFBhZ2U6IGFueSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIC8v6I635Y+W5b2T5YmN6aG16Z2i55qE5a+56LGhXG4gICAgICAgIGxldCB1cmwgPSBjdXJyZW50UGFnZS5yb3V0ZSAvL+W9k+WJjemhtemdonVybFxuICAgICAgICBsZXQganNvbiA9IGN1cnJlbnRQYWdlLm9wdGlvbnMgLy/lpoLmnpzopoHojrflj5Z1cmzkuK3miYDluKbnmoTlj4LmlbDlj6/ku6Xmn6XnnItvcHRpb25zXG4gICAgICAgIC8vanNvbui9rHVybOWPguaVsFxuICAgICAgICBsZXQgdXJsUGFyYW1zID0gXCJcIjtcbiAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgIHVybFBhcmFtcyA9IE9iamVjdC5rZXlzKGpzb24pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba2V5XSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybFBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHVybCArIFwiP1wiICsgdXJsUGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqo5oCB6K6+572u6aG16Z2idGl0bGVcbiAgICAgKiBAcGFyYW0gdGl0bGUgXG4gICAgICovXG4gICAgcHVibGljIHNldFBhZ2VUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ouo5omT55S16K+dXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaXByb2dyYW0vZGV2L2FwaS93eC5tYWtlUGhvbmVDYWxsLmh0bWxcbiAgICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIgXG4gICAgICovXG4gICAgcHVibGljIG1ha2VQaG9uZUNhbGwocGhvbmVOdW1iZXI6IHN0cmluZykge1xuICAgICAgICBwaG9uZU51bWJlciAmJiB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZU51bWJlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3eOWwj+eoi+W6jyDmo4Dmn6Xmm7TmlrBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tWZXJzaW9uVXBkYXRlKCkge1xuICAgICAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5pu05paw77yaXCIgKyByZXMuaGFzVXBkYXRlKVxuICAgICAgICB9KVxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpumHjeWQr+W6lOeUqO+8nycsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8g5paw54mI5pys5LiL6L295aSx6LSlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOeJiOacrOS4i+i9veWksei0pVwiKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV3hTZXJ2aWNlUHJvdmlkZXIoKTsiXX0=