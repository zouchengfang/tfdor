﻿define([], function () {
    return {
        defaultRoute: '/Login',
        routes: {
            'Login': {
            	url: '/Login',
                templateUrl: 'views/Login/login.html',
                dependencies: ['controllers/Login/login'],
                allowAnonymous: true
            },
            'Main': {
            	url: '/Main',
                templateUrl: 'views/Main/main.html',
                dependencies: ['controllers/Main/main'],
                allowAnonymous: true
            },'Main.UserManager': {
            	url: '/UserManager',
                templateUrl: 'views/SysMng/userManager.html',
                dependencies: ['controllers/SysMng/userManager'],
                allowAnonymous: true
            },'Main.RoleManager': {
            	url: '/RoleManager',
                templateUrl: 'views/SysMng/roleManager.html',
                dependencies: ['controllers/SysMng/roleManager'],
                allowAnonymous: true
            },'Main.addRole': {
                url: '/addRole',
                templateUrl: 'views/SysMng/addRole.html',
                dependencies: ['controllers/SysMng/addRole'],
                allowAnonymous: true
            },'Main.modifyRole': {
                url: '/modifyRole',
                templateUrl: 'views/SysMng/modifyRole.html',
                dependencies: ['controllers/SysMng/modifyRole'],
                allowAnonymous: true
            },'Main.QrCodeManager': {
                url: '/QrCodeManager',
                templateUrl: 'views/Marketing/qrcodeManager.html',
                dependencies: ['controllers/Marketing/qrcodeManager'],
                allowAnonymous: true
            }, 'Main.addUser': {
                url: '/addUser',
                templateUrl: 'views/SysMng/addUser.html',
                dependencies: ['controllers/SysMng/addUser'],
                allowAnonymous: true
            },'Main.CheckQuery': {
                url: '/CheckQuery',
                templateUrl: 'views/Auditing/audiList.html',
                dependencies: ['controllers/Auditing/audiList'],
                allowAnonymous: true
            },'Main.modifyUser': {
                url: '/modifyUser',
                templateUrl: 'views/SysMng/modifyUser.html',
                dependencies: ['controllers/SysMng/modifyUser'],
                allowAnonymous: true
            },'Main.audiDetails': {
                url: '/audiDetails',
                templateUrl: 'views/Auditing/audiDetails.html',
                dependencies: ['controllers/Auditing/audiDetails'],
                allowAnonymous: true
            },'Main.CheckResultQuery': {
                url: '/CheckResultQuery',
                templateUrl: 'views/Auditing/audiResultList.html',
                dependencies: ['controllers/Auditing/audiResultList'],
                allowAnonymous: true
            },'Main.ChannelManager': {
                url: '/ChannelManager',
                templateUrl: 'views/SysMng/channelManager.html',
                dependencies: ['controllers/SysMng/channelManager'],
                allowAnonymous: true
            },'Main.addChannel': {
                url: '/addChannel',
                templateUrl: 'views/SysMng/addChannel.html',
                dependencies: ['controllers/SysMng/addChannel'],
                allowAnonymous: true
            },'Main.modifyChannel': {
                url: '/modifyChannel',
                templateUrl: 'views/SysMng/modifyChannel.html',
                dependencies: ['controllers/SysMng/modifyChannel'],
                allowAnonymous: true
            },'Main.RedEnvelopeManager': {
                url: '/RedEnvelopeManager',
                templateUrl: 'views/Marketing/redEnvelopeManager.html',
                dependencies: ['controllers/Marketing/redEnvelopeManager'],
                allowAnonymous: true
            },'Main.BusinessManager': {
                url: '/BusinessManager',
                templateUrl: 'views/SysMng/businessManager.html',
                dependencies: ['controllers/SysMng/businessManager'],
                allowAnonymous: true
            },'Main.addBusiness': {
                url: '/addBusiness',
                templateUrl: 'views/SysMng/addBusiness.html',
                dependencies: ['controllers/SysMng/addBusiness'],
                allowAnonymous: true
            },'Main.addQrcode': {
                url: '/addQrcode',
                templateUrl: 'views/Marketing/addQrcode.html',
                dependencies: ['controllers/Marketing/addQrcode'],
                allowAnonymous: true
            },'Main.businessDetail': {
                url: '/businessDetail',
                templateUrl: 'views/SysMng/businessDetail.html',
                dependencies: ['controllers/SysMng/businessDetail'],
                allowAnonymous: true
            },'Main.modifyBusiness': {
                url: '/modifyBusiness',
                templateUrl: 'views/SysMng/modifyBusiness.html',
                dependencies: ['controllers/SysMng/modifyBusiness'],
                allowAnonymous: true
            },'Main.qrCodeImg': {
                url: '/qrCodeImg',
                templateUrl: 'views/Marketing/qrcodeImg.html',
                dependencies: ['controllers/Marketing/qrcodeImg'],
                allowAnonymous: true
            }
        }
    };
});