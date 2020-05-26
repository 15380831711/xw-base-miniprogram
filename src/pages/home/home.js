"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_service_1 = require("../../providers/alert-service/alert-service");
var app_service_1 = require("../../providers/app-service/app-service");
var wx_service_1 = require("../../providers/wx-service/wx-service");
var HomePage = (function () {
    function HomePage(appService, alertService, wxService) {
        this.appService = appService;
        this.alertService = alertService;
        this.wxService = wxService;
        this.homeData = { updateDate: '' };
    }
    HomePage.prototype.setPageData = function (data) {
        this.setData(data);
    };
    HomePage.prototype.onLoad = function (options) {
        console.log(options);
        this.wxService.setPageTitle('首页');
        var homeData = { updateDate: '2020-05-26' };
        this.setPageData({ homeData: homeData });
    };
    HomePage.prototype.toPage = function (e) {
        this.appService.push(e.currentTarget.dataset.page, { from: 'home' });
    };
    HomePage.prototype.toTabPage = function () {
        this.appService.pushTabs('user');
    };
    HomePage.prototype.showAlert = function () {
        this.alertService.alert('提示信息');
    };
    HomePage.prototype.changeData = function () {
        this.homeData.updateDate = new Date().toISOString();
        this.setPageData({ homeData: this.homeData });
    };
    return HomePage;
}());
exports.HomePage = HomePage;
var page = new HomePage(app_service_1.default, alert_service_1.default, wx_service_1.default);
Page(page);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFBaUc7QUFDakcsdUVBQXlGO0FBRXpGLG9FQUFxRjtBQUVyRjtJQUdJLGtCQUNXLFVBQThCLEVBQzlCLFlBQWtDLEVBQ2xDLFNBQTRCO1FBRjVCLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUx2QyxhQUFRLEdBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFNaEMsQ0FBQztJQUVKLDhCQUFXLEdBQVgsVUFBWSxJQUFTO1FBQ1gsSUFBSyxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBTUQseUJBQU0sR0FBTixVQUFPLE9BQVk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQU0sUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUtELHlCQUFNLEdBQU4sVUFBTyxDQUFZO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBS0QsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSw0QkFBUTtBQWlEckIsSUFBTSxJQUFJLEdBQVEsSUFBSSxRQUFRLENBQUMscUJBQVUsRUFBRSx1QkFBWSxFQUFFLG9CQUFTLENBQUMsQ0FBQztBQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxlcnRTZXJ2aWNlLCB7IEFsZXJ0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FsZXJ0LXNlcnZpY2UvYWxlcnQtc2VydmljZSc7XG5pbXBvcnQgYXBwU2VydmljZSwgeyBBcHBTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBwLXNlcnZpY2UvYXBwLXNlcnZpY2UnO1xuaW1wb3J0IHsgV3hCaW5kUmVzIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbnN0YW50cyc7XG5pbXBvcnQgd3hTZXJ2aWNlLCB7IFd4U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3d4LXNlcnZpY2Uvd3gtc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gICAgaG9tZURhdGE6IGFueSA9IHsgdXBkYXRlRGF0ZTogJycgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZVByb3ZpZGVyLFxuICAgICAgICBwdWJsaWMgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgcHVibGljIHd4U2VydmljZTogV3hTZXJ2aWNlUHJvdmlkZXJcbiAgICApIHt9XG5cbiAgICBzZXRQYWdlRGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgKDxhbnk+dGhpcykuc2V0RGF0YSEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICAgKiBvcHRpb25zOiBhbnlcbiAgICAgKi9cbiAgICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnd4U2VydmljZS5zZXRQYWdlVGl0bGUoJ+mmlumhtScpO1xuICAgICAgICAvLyDmraTlpITlvIPnlKhkYXRh77yM5omL5Yqo5riy5p+T5pWw5o2uXG4gICAgICAgIGNvbnN0IGhvbWVEYXRhID0geyB1cGRhdGVEYXRlOiAnMjAyMC0wNS0yNicgfTtcbiAgICAgICAgdGhpcy5zZXRQYWdlRGF0YSh7IGhvbWVEYXRhIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmhtemdoui3s+i9rFxuICAgICAqL1xuICAgIHRvUGFnZShlOiBXeEJpbmRSZXMpIHtcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnB1c2goZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFnZSwgeyBmcm9tOiAnaG9tZScgfSk7XG4gICAgfVxuXG4gICAgdG9UYWJQYWdlKCkge1xuICAgICAgICB0aGlzLmFwcFNlcnZpY2UucHVzaFRhYnMoJ3VzZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmL7npLphbGVydFxuICAgICAqL1xuICAgIHNob3dBbGVydCgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuYWxlcnQoJ+aPkOekuuS/oeaBrycpO1xuICAgIH1cblxuICAgIGNoYW5nZURhdGEoKSB7XG4gICAgICAgIHRoaXMuaG9tZURhdGEudXBkYXRlRGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZXRQYWdlRGF0YSh7IGhvbWVEYXRhOiB0aGlzLmhvbWVEYXRhIH0pO1xuICAgIH1cbn1cblxuY29uc3QgcGFnZTogYW55ID0gbmV3IEhvbWVQYWdlKGFwcFNlcnZpY2UsIGFsZXJ0U2VydmljZSwgd3hTZXJ2aWNlKTtcblxuUGFnZShwYWdlKTtcbiJdfQ==