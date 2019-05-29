//house-lease
//获取应用实例
// import { IMyApp } from "../../app";

import { AppServiceProvider } from "../../providers/app-service/app-service";
import { AlertServiceProvider } from "../../providers/alert-service/alert-service";
import { WxServiceProvider } from "../../providers/wx-service/wx-service";
import { WxBindRes } from "../../providers/constants";


// const app = getApp<IMyApp>();

const appService = new AppServiceProvider();
const alertService = new AlertServiceProvider();
const wxService = new WxServiceProvider();

Page({
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     * options: any
     */
    onLoad(options: any) {
        console.log(options);
        wxService.setPageTitle("首页");
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
