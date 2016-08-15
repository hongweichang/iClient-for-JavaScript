﻿/**
 * @requires SuperMap/Util.js
 */
 
/**
 * Class: SuperMap.Cloud.GeocodingParameter
 * 地理编码服务可以根据用户输入的地址描述和城市范围返回对应的地理坐标和结构化的地址详细描述。
 *
 */
SuperMap.Cloud.GeocodingParameter = SuperMap.Class({

    /**
     * APIProperty: address
     * {String} 地址描述指定需要地理编码分析的具体地址描述，必设属性。
     */
    address : null,

    /**
     * APIProperty: city
     * {String} 城市名称用来指定地理编码分析的范围，必设属性。
     */
    city : null,

    /**
     * APIProperty: maxResult
     * {Number} 设置最多返回几条匹配结果，默认为1。
     */
    maxResult: 1,

    /**
     * APIProperty: to
     * {Number} 输出结果坐标类型，默认值：910101。支持的坐标类型编码参考 http://www.supermapol.com/developer/webapi.html?title=convert 。
     */
    to: 910101,

    /**
     * Constructor: SuperMap.Cloud.GeocodingParameter
     *
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * address - {String} 地址描述指定需要地理编码分析的具体地址描述。
     * level - {String} 地址类型。
     * city - {String} 城市名称用来指定地理编码分析的范围。
     */
    initialize: function(options) {
        var me = this;
        if (options) {
            SuperMap.Util.extend(this, options);
        }
    },
    toObject:function(){
        return {
            address:this.address,
            level:this.level,
            city:this.city,
            to:this.to
        };
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function() {
        var me = this;
        me.address = null;
        me.level = null;
        me.city = null;
        me.to = null;
    },

    CLASS_NAME: "SuperMap.Cloud.GeocodingParameter"
});