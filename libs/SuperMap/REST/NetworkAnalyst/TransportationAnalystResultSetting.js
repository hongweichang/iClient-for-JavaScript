﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap/Util.js
 */

/**
 * Class: SuperMap.REST.TransportationAnalystResultSetting
 * 交通网络分析结果参数类。
 * 通过该类设置交通网络分析返回的结果，包括是否返回图片、是否返回弧段空间信息、是否返回结点空间信息等。
 */
SuperMap.REST.TransportationAnalystResultSetting = SuperMap.Class({

    /** 
     * APIProperty: returnEdgeFeatures 
     * {Boolean} 是否在分析结果中包含弧段要素集合。弧段要素包括弧段的空间信息和属性信息。
     */
    returnEdgeFeatures: false,

    /** 
     * APIProperty: returnEdgeGeometry 
     * {Boolean} 返回的弧段要素集合中是否包含几何对象信息。默认为 false。 
     */
    returnEdgeGeometry: false,

    /** 
     * APIProperty: returnEdgeIDs  
     * {Boolean} 返回结果中是否包含经过弧段 ID 集合。默认为 false。 
     */
    returnEdgeIDs: false,

    /** 
     * APIProperty: returnNodeFeatures   
     * {Boolean} 是否在分析结果中包含结点要素集合。
     * 结点要素包括结点的空间信息和属性信息。其中返回的结点要素是否包含空间信息可通过 returnNodeGeometry 字段设置。默认为 false。  
     */
    returnNodeFeatures: false,
    
    /** 
     * APIProperty: returnNodeGeometry    
     * {Boolean} 返回的结点要素集合中是否包含几何对象信息。默认为 false。 
     */
    returnNodeGeometry: false,
    
    /** 
     * APIProperty: returnNodeIDs     
     * {Boolean} 返回结果中是否包含经过结点 ID 集合。默认为 false。 
     */
    returnNodeIDs: false,
    
    /** 
     * APIProperty: returnPathGuides      
     * {Boolean} 返回分析结果中是否包含行驶导引集合。
     */
    returnPathGuides: false,
    
    /** 
     * APIProperty: returnRoutes       
     * {Boolean} 返回分析结果中是否包含路由对象的集合。
     */
    returnRoutes: false,

    /**
     * Constructor: SuperMap.REST.TransportationAnalystResultSetting
     * 交通网络分析结果参数类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * returnEdgeFeatures - {Boolean} 是否在分析结果中包含弧段要素集合。 
     * returnEdgeGeometry - {Boolean} 返回的弧段要素集合中是否包含几何对象信息。默认为 false。   
     * returnEdgeIDs - {Boolean} 返回结果中是否包含经过弧段 ID 集合。默认为 false。 
     * returnNodeFeatures - {Boolean} 是否在分析结果中包含结点要素集合。
     * returnNodeGeometry - {Boolean} 返回的结点要素集合中是否包含几何对象信息。默认为 false。   
     * returnNodeIDs - {Boolean} 返回结果中是否包含经过结点 ID 集合。默认为 false。 
     * returnPathGuides - {Boolean} 返回分析结果中是否包含行驶导引集合。  
     * returnRoutes - {Boolean} 返回分析结果中是否包含路由对象的集合。
     */
    initialize: function(options) {
        if (!options) {
            return;
        }
        SuperMap.Util.extend(this, options);
    },
    
    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。  
     */
    destroy: function() { 
        var me = this;
        me.returnEdgeFeatures = null;
        me.returnEdgeGeometry = null;
        me.returnEdgeIDs = null;
        me.returnNodeFeatures = null;
        me.returnNodeGeometry = null;
        me.returnNodeIDs = null;
        me.returnPathGuides = null;
        me.returnRoutes = null;
    },
    
    CLASS_NAME: "SuperMap.REST.TransportationAnalystResultSetting"
}); 