import alertService, { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import appService, { AppServiceProvider } from '../../providers/app-service/app-service';
import { WxBindRes } from '../../providers/constants';
import wxService, { WxServiceProvider } from '../../providers/wx-service/wx-service';

export class HomePage {
    homeData: any = { updateDate: '' };

    constructor(
        public appService: AppServiceProvider,
        public alertService: AlertServiceProvider,
        public wxService: WxServiceProvider
    ) {}

    setPageData(data: any) {
        (<any>this).setData!(data);
    }

    /**
     * 生命周期函数--监听页面加载
     * options: any
     */
    onLoad(options: any) {
        console.log(options);
        this.wxService.setPageTitle('首页');
        // 此处弃用data，手动渲染数据
        const homeData = { updateDate: '2020-05-26' };
        this.setPageData({ homeData });
    }

    /**
     * 页面跳转
     */
    toPage(e: WxBindRes) {
        this.appService.push(e.currentTarget.dataset.page, { from: 'home' });
    }

    toTabPage() {
        this.appService.pushTabs('user');
    }

    /**
     * 显示alert
     */
    showAlert() {
        this.alertService.alert('提示信息');
    }

    changeData() {
        this.homeData.updateDate = new Date().toISOString();
        this.setPageData({ homeData: this.homeData });
    }
}

const page: any = new HomePage(appService, alertService, wxService);

Page(page);
