﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * Class: SuperMap.REST.MapServiceResult
 * 地图信息结果类 。
 * 该类包含了所请求的地图的显示比例尺、地图的全幅地理范围、地图窗口显示区域的范围和用户显示视窗。
 */
 SuperMap.REST.MapServiceResult = SuperMap.Class({
    
    /** 
     * APIProperty: scale
     * {Number} 地图的显示比例尺。
     */
    scale: null,    
    
    /** 
     * APIProperty: bounds
     * {Object} 地图的全幅地理范围。
     */
    bounds: null,
    
    /** 
     * APIProperty: viewBounds
     * {Object} 地图窗口显示区域的范围。
     */
    viewBounds: null,
    
    /** 
     * APIProperty: viewer
     * {Object} 用户显示视窗，即产生的图片的大小。
     */
    viewer: null,    
    
    /** 
     * APIProperty: coordUnit
     * {String} 投影坐标系统的地图单位。
     */
    coordUnit: null, 
    
    /** 
     * APIProperty: datumAxis
     * {Number} 地理坐标系统中椭球体的长半轴。
     */
    datumAxis: null, 
    
    /**
     * Constructor: SuperMap.REST.MapServiceResult
     * 地图信息结果类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * scale - {Number} 地图的显示比例尺。
     * bounds - {Object} 地图的全幅地理范围。
     * viewBounds - {Object} 地图窗口显示区域的范围。
     * viewer - {Object} 用户显示视窗，即产生的图片的大小。
     * coordUnit - {String} 投影坐标系统的地图单位。
     * datumAxis - {Number} 地理坐标系统椭球体长半轴。
     */
    initialize: function(options) {
        if (options) {
            SuperMap.Util.extend(this, options);
        }
    },
    
    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。  
     */
    destroy: function() {
        var me = this;
        me.scale = null;
        me.bounds = null;
        me.viewBounds = null;
        me.viewer = null;
        me.coordUnit = null;
        me.datumAxis = null;
    },
    
    CLASS_NAME: "SuperMap.REST.MapServiceResult"
 });
 
/**
 * Function: SuperMap.REST.MapServiceResult.fromJson
 * 将 JSON 对象表示的地图信息结果转化为 MapServiceResult 对象。 
 *
 * Parameters:
 * jsonObject - {Object}  JSON 对象表示的地图信息结果。
 *
 * Returns:
 * {<SuperMap.REST.MapServiceResult>} 转化后的 MapServiceResult 对象。
 */
SuperMap.REST.MapServiceResult.fromJson = function(jsonObject) {
    if (!jsonObject || !jsonObject.prjCoordSys) {
        return;
    }
    var prjCode = null;
    if(!jsonObject.prjCoordSys.coordSystem){
        datumAxis = null;
    } else {
        var cdsym = jsonObject.prjCoordSys.coordSystem;
        datumAxis = cdsym.datum.spheroid.axis;
        prjCode = jsonObject.prjCoordSys.epsgCode;
    }
    return new SuperMap.REST.MapServiceResult({
        scale: jsonObject.scale,
        bounds: jsonObject.bounds,
        viewBounds: jsonObject.viewBounds,
        viewer: jsonObject.viewer,
        coordUnit: jsonObject.prjCoordSys.coordUnit,
        datumAxis: datumAxis,
        prjCode:prjCode
    });
};