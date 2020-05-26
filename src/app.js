"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wx_service_1 = require("./providers/wx-service/wx-service");
App({
    globalData: {},
    onLaunch: function () {
        wx_service_1.default.checkVersionUpdate();
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTBEO0FBRTFELEdBQUcsQ0FBYTtJQUNaLFVBQVUsRUFBRSxFQUFFO0lBQ2QsUUFBUTtRQUVKLG9CQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd4U2VydmljZSBmcm9tICcuL3Byb3ZpZGVycy93eC1zZXJ2aWNlL3d4LXNlcnZpY2UnO1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICAgIGdsb2JhbERhdGE6IHt9LFxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAvL+ajgOafpeabtOaWsFxuICAgICAgICB3eFNlcnZpY2UuY2hlY2tWZXJzaW9uVXBkYXRlKCk7XG4gICAgfSxcbn0pO1xuIl19