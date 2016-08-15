﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap/Util.js
 * @requires SuperMap/Geometry.js
 * @requires SuperMap/REST/QueryParameters.js
 */
 
/**
 * Class: SuperMap.REST.QueryByDistanceParameters
 * Distance 查询参数类。
 * 该类用于设置 Distance 查询的相关参数。
 *
 * Inherits from:
 *  - <SuperMap.REST.QueryParameters> 
 */
SuperMap.REST.QueryByDistanceParameters = SuperMap.Class(SuperMap.REST.QueryParameters, {

    /**
     * APIProperty: distance
     * {Number} 查询距离，默认为0，单位与所查询图层对应的数据集单位相同。
     * 当查找最近地物时，该属性无效。
     */
    distance: 0,

    /**
     * APIProperty: geometry
     * {<SuperMap.Geometry>} 用于查询的地理对象，必设属性。
     */
    geometry: null,

    /**
     * APIProperty: isNearest
     * {Boolean} 是否为最近距离查询。
     * 建议该属性与 expectCount （继承自 QueryParameters）属性联合使用。
     * 当该属性为 true 时，即表示查找最近地物，如果查询结果数大于期望返回的结果记录数（expectCount），
     * 则查找结果为查询总记录中距离中心最近的expectCount个地物。
     * 当该属性为不为 true 时，如果查询结果数大于期望返回的结果记录数（expectCount），
     * 则查找结果为从查询总记录中随机抽取的expectCount个地物。
     * 目前查询结果不支持按远近距离排序。
     */
    isNearest: null,

    /** 
     * APIProperty: returnContent
     * {Boolean} 是否立即返回新创建资源的表述还是返回新资源的 URI。
     * 如果为 true，则直接返回新创建资源，即查询结果的表述。
     * 为 false，则返回的是查询结果资源的 URI。默认为 true。  
     */
    returnContent: true,
    
    /**
     * Constructor: SuperMap.REST.QueryByDistanceParameters
     * Distance 查询参数类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * customParams - {String} 自定义参数，供扩展使用。  
     * distance - {Number} 查询距离。
     * expectCount - {Integer} 期望返回结果记录个数。
     * geometry - {<SuperMap.Geometry>} 用于查询的几何对象。
     * holdTime - {Integer} 资源在服务端保存的时间。
     * isNearest - {Boolean} 是否为最近距离查询。
     * networkType - {<SuperMap.REST.GeometryType>} 网络数据集对应的查询类型。
     * queryOption - {<SuperMap.REST.QueryOption>} 查询结果类型枚举类。
     * queryParams -  {Array(<SuperMap.REST.FilterParameter>)} 查询过滤条件参数数组。
     * startRecord - {Integer} 查询起始记录号。
     * returnContent - {Boolean} 是否立即返回新创建资源的表述还是返回新资源的 URI。
     */
    initialize: function(options) {
        SuperMap.REST.QueryParameters.prototype.initialize.apply(this, arguments);
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
        SuperMap.REST.QueryParameters.prototype.destroy.apply(this, arguments); 
        var me = this;
        me.returnContent = null;
        me.distance = null;
        me.isNearest = null;
        if (me.geometry) {
            me.geometry.destroy();
            me.geometry = null;
        }
    },
    
    CLASS_NAME: "SuperMap.REST.QueryByDistanceParameters"
});