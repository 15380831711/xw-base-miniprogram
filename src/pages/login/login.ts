//获取应用实例
// import { IMyApp } from "../../app";

import appService from "../../providers/app-service/app-service";
import alertService from "../../providers/alert-service/alert-service";
import wxService from "../../providers/wx-service/wx-service";
import { WxBindRes } from "../../providers/constants";


// const app = getApp<IMyApp>();

Page({
    appService: appService,
    alertService: alertService,
    wxService: wxService,

    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     * options: any
     */
    onLoad(options: any) {
        console.log(options);
        wxService.setPageTitle("登录");
    },

    /**
     * 页面跳转
     */
    toPage(e: WxBindRes) {
        appService.push(e.currentTarget.dataset.page);
    },

    /**
     * 显示alert
     */
    showAlert() {
        alertService.alert("提示信息");
    }
});