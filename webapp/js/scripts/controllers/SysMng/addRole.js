/**
 * Created by chepeiqing on 16/10/13.
 */
define(['app', 'service','sysCode'], function (app) {
    "use strict";
    app.controller('addRoleCtrl', function (service, $scope, $state) {
        $scope.isShow = false;
        $scope.init = function () {
            service.post2SRV("lodeMenu.do", null, function (data, status) {
                $scope.roleList = data;
            }, 4000);
            $scope.channelId = service.getUser().channel.channelId;
            if ($scope.channelId != null && $scope.channelId == 'tfdor') {
                $scope.isShow = true;
            }
            var formData = {
                "channelId" : $scope.channelId
            };
            service.post2SRV("queryChannel.do", formData, function (data, status) {
                $scope.channelInfoList = data;
            }, 1000);
            //查询复合人
            service.post2SRV("queryAuditPerson.do",null,function(data, status){
                $scope.auditPerson = data;
            },4000);
        };
        $scope.roleArr = [];//定义数组用于存放前端选中权限

        $scope.cheAll = function (menuOneChecked, list) {//全选
            if ($('#' + menuOneChecked).is(':checked')) {
                $scope.remote($scope.roleArr, menuOneChecked);
                $scope.roleArr.push(menuOneChecked);
                for (var key in list) {
                    $scope.remote($scope.roleArr, list[key].id);
                    $scope.roleArr.push(list[key].id);
                    document.getElementById(list[key].id).checked = true;
                }
            } else {
                $scope.remote($scope.roleArr, menuOneChecked);
                for (var key in list) {
                    $scope.remote($scope.roleArr, list[key].id);
                    document.getElementById(list[key].id).checked = false;
                }
            }
        };

        $scope.chk = function (id, menuTwoChecked, list) {//单选或者多选
            var flag = 0;
            for (var key in list) {
                if ($('#' + list[key].id).is(':checked') == false) {
                    flag++;
                }
            }
            if (flag >= 0) {
                $scope.remote($scope.roleArr, menuTwoChecked);
                $scope.roleArr.push(menuTwoChecked);
                document.getElementById(menuTwoChecked).checked = true;
            }
            if (flag == list.length) {
                $scope.remote($scope.roleArr, menuTwoChecked);
                document.getElementById(menuTwoChecked).checked = false;
            }
            $scope.remote($scope.roleArr, id);
            if ($('#' + id).is(':checked') == true) {
                $scope.roleArr.push(id);
            }
        };

        $scope.remote = function (array, obj) {
            var index = $.inArray(obj, array);
            if (index >= 0) {
                array.splice(index, 1);
            }
        }
        $scope.show = function (id) {
            $('#aa' + id).slideToggle(500);
        }

        $scope.doIt = function () {
            if ($scope.roleName == null || $scope.roleName == '') {
                showError("角色名称错误,请输入角色名称");
                return;
            }
            if ($scope.roleArr == null || $scope.roleArr.length == 0) {
                showError("权限选择错误,请选择权限");
                return;
            }
            if ($scope.isShow) {
                if ($scope.channel == null || $scope.channel == 0) {
                    showError("错误提示：请选择渠道");
                    return;
                }
                $scope.channelId = $scope.channel.channelId;
            } else {
                $scope.channelId = service.getUser().channel.channelId;
            }
            console.log($scope.person);
            if ($scope.person == null || $scope.person == '') {
                showError("错误提示,请选择复合人");
                return;
            }

            var formData = {
                "roleName": $scope.roleName,
                "roleArr": $scope.roleArr.join(","),
                "channelId": $scope.channelId,
                "auditPersonSeq":$scope.person.userSeq,//复合人Seq
                "auditPerson":$scope.person.userName//复合人名称
            }
            return;
            service.post2SRV("addRole.do", formData, function (data, status) {
                $state.go("Main.RoleManager");
            }, 4000);
        }
        $scope.init();
    });
});
