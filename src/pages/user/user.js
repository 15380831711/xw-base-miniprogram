"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_service_1 = require("../../providers/app-service/app-service");
var alert_service_1 = require("../../providers/alert-service/alert-service");
var wx_service_1 = require("../../providers/wx-service/wx-service");
Page({
    appService: app_service_1.default,
    alertService: alert_service_1.default,
    wxService: wx_service_1.default,
    data: {},
    onLoad: function (options) {
        console.log(options);
        wx_service_1.default.setPageTitle("我的");
    },
    toPage: function (e) {
        app_service_1.default.push(e.currentTarget.dataset.page);
    },
    showAlert: function () {
        alert_service_1.default.alert("提示信息");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx1RUFBaUU7QUFDakUsNkVBQXVFO0FBQ3ZFLG9FQUE4RDtBQU05RCxJQUFJLENBQUM7SUFDRCxVQUFVLEVBQUUscUJBQVU7SUFDdEIsWUFBWSxFQUFFLHVCQUFZO0lBQzFCLFNBQVMsRUFBRSxvQkFBUztJQUVwQixJQUFJLEVBQUUsRUFFTDtJQU1ELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLG9CQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFLRCxNQUFNLEVBQU4sVUFBTyxDQUFZO1FBQ2YscUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUtELFNBQVM7UUFDTCx1QkFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gXCIuLi8uLi9hcHBcIjtcblxuaW1wb3J0IGFwcFNlcnZpY2UgZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9hcHAtc2VydmljZS9hcHAtc2VydmljZVwiO1xuaW1wb3J0IGFsZXJ0U2VydmljZSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2FsZXJ0LXNlcnZpY2UvYWxlcnQtc2VydmljZVwiO1xuaW1wb3J0IHd4U2VydmljZSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3d4LXNlcnZpY2Uvd3gtc2VydmljZVwiO1xuaW1wb3J0IHsgV3hCaW5kUmVzIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9jb25zdGFudHNcIjtcblxuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgICBhcHBTZXJ2aWNlOiBhcHBTZXJ2aWNlLFxuICAgIGFsZXJ0U2VydmljZTogYWxlcnRTZXJ2aWNlLFxuICAgIHd4U2VydmljZTogd3hTZXJ2aWNlLFxuXG4gICAgZGF0YToge1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAgICogb3B0aW9uczogYW55XG4gICAgICovXG4gICAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgd3hTZXJ2aWNlLnNldFBhZ2VUaXRsZShcIuaIkeeahFwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6aG16Z2i6Lez6L2sXG4gICAgICovXG4gICAgdG9QYWdlKGU6IFd4QmluZFJlcykge1xuICAgICAgICBhcHBTZXJ2aWNlLnB1c2goZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaYvuekumFsZXJ0XG4gICAgICovXG4gICAgc2hvd0FsZXJ0KCkge1xuICAgICAgICBhbGVydFNlcnZpY2UuYWxlcnQoXCLmj5DnpLrkv6Hmga9cIik7XG4gICAgfVxufSk7Il19