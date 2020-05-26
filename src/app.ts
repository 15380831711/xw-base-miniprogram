import wxService from './providers/wx-service/wx-service';

App<IAppOption>({
    globalData: {},
    onLaunch() {
        //检查更新
        wxService.checkVersionUpdate();
    },
});
