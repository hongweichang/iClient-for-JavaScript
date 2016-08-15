﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap/Util.js
 * @requires SuperMap/BaseTypes/Bounds.js
 * @requires SuperMap/REST.js
 */

/**
 * Class: SuperMap.REST.PathGuideItem 
 * 行驶导引子类。
 * 行驶导引由多个行驶导引子项构成，记录了如何一步步从起点行驶到终点，其中每一步就是一个行驶导引子项。
 * 每个分析结果路径 Path 中包含该路径的行驶引导，每个行驶引导子项可以表示一个弧段，一个结点或一个站点，记录了在当前地点转弯情况、行驶方向、耗费等信息。
 */
SuperMap.REST.PathGuideItem = SuperMap.Class({

    /** 
     * APIProperty: bounds 
     * {<SuperMap.Bounds>} 子对象（弧段或结点或站点）的范围。对弧段而言，为弧段的外接矩形；对点而言，为点本身。   
     */
    bounds: null,
    
    /** 
     * APIProperty: directionType 
     * {<SuperMap.REST.DirectionType>} 行驶的方向。共有五个方向，即东、南、西、北、无方向。
     * 当该类中字段 isEdge 为 false 时，即为结点无行驶方向，行驶方向的类型为无方向。
     */ 
    directionType : null,
    
    /** 
     * APIProperty: distance 
     * {Number} 站点到弧段的距离。该距离是指站点到最近一条弧段的距离。
     */ 
    distance : null,

    /** 
     * APIProperty: id
     * {Number} 行驶导引子项的 ID 号，即 edgeID 或 nodeID。当子项为不在网络上的站点时，此值为-1。 
     */ 
    id: null,
    
    /** 
     * APIProperty: index 
     * {Number} 行驶导引子项的序号。
     */ 
    index: null,
    
    /** 
     * APIProperty: isEdge  
     * {Boolean} 判断本行驶导引子项是否是弧段。true 表示行驶导引子项是弧段，false 表示行驶导引子项不是弧段。 
     */ 
    isEdge : null,
    
    /** 
     * APIProperty: isStop  
     * {Boolean} 该子项是否为站点。站点为用户指定的用于做路径分析的点，站点可能与网络结点重合，也可能不在网络上。true 表示是站点，false 表示不是站点。  
     */ 
    isStop: null,
    
    /** 
     * APIProperty: length  
     * {Number} 当行驶导引子项为弧段时表示弧段的长度。 
     */ 
    length: null,
 
    /** 
     * APIProperty: name   
     * {String} 行驶导引子项的名称。  
     */ 
    name: null,
    
    /** 
     * APIProperty: sideType   
     * {<SuperMap.REST.SideType>} 站点是在路的左侧、右侧还是在路上的常量。
     * 当该类的字段 isEdge 为 true 时将返回 SideType.None，表示无效值。  
     */ 
    sideType: null,

    /** 
     * APIProperty: turnAngle   
     * {Number} 转弯角度。单位为度，精确到0.1度。   
     */ 
    turnAngle: null,
    
    /** 
     * APIProperty: turnType    
     * {<SuperMap.REST.TurnType>} 转弯方向常量。当该类的字段 isEdge 为 true 时将返回 TurnType.None，表示无效值。    
     */ 
    turnType: null,
    
    /** 
     * APIProperty: weight    
     * {Number} 行驶导引子项的权值，即行使导引对象子项的花费。   
     */ 
    weight: null,
    
    /** 
     * APIProperty: description    
     * {String} 行驶引导描述。   
     */
    description:null,
    
    /** 
     * APIProperty: geometry    
     * {<SuperMap.Geometry>}行驶引导项所对应的地物对象。   
     */
    geometry:null,
    
    /**
     * Constructor: SuperMap.REST.PathGuideItem 
     * 最佳路径分析参数类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * bounds - {<SuperMap.Bounds>} 子对象（弧段或结点或站点）的范围。
     * description - {String} 行驶引导描述。
     * geometry - {<SuperMap.Geometry>} 行驶引导项所对应的地物对象。
     * directionType - {<SuperMap.REST.DirectionType>} 行驶的方向。
     * distance - {Number} 站点到弧段的距离。
     * id - {Number} 行驶导引子项的 ID 号，即 edgeID 或 nodeID。
     * index - {Number} 行驶导引子项的序号。
     * isEdge - {Boolean} 判断本行驶导引子项是否是弧段。
     * isStop - {Boolean} 该子项是否为站点。
     * length - {Number} 当行驶导引子项为弧段时表示弧段的长度。 
     * name - {String} 行驶导引子项的名称。  
     * sideType - {<SuperMap.REST.SideType>} 站点是在路的左侧、右侧还是在路上的常量。
     * turnAngle - {Number} 转弯角度。单位为度，精确到0.1度。 
     * turnType - {<SuperMap.REST.TurnType>} 转弯方向常量。
     * weight - {Number} 行驶导引子项的权值，即行使导引对象子项的花费。 
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
        me.bounds = null;
        me.directionType = null;
        me.distance = null;
        me.id = null;
        me.index = null;
        me.isEdge = null;
        me.isStop = null;
        me.length = null;
        me.name = null;
        me.sideType = null;
        me.turnAngle = null;
        me.turnType = null; 
        me.weight = null;
        me.description = null;
        if(me.geometry){
            me.geometry.destroy();
        }
		me.geometry = null;
    },
    
    CLASS_NAME: "SuperMap.REST.PathGuideItem"
}); 
/**
 * Function: SuperMap.REST.PathGuideItem.fromJson
 * 将 JSON 对象转换为 PathGuideItem 对象。 
 *
 * Parameters:
 * jsonObject - {Object} JSON 对象表示的查询结果。 
 *
 * Returns:
 * {<SuperMap.REST.PathGuideItem>} 转化后的 PathGuideItem 对象。
 */
SuperMap.REST.PathGuideItem.fromJson = function (jsonObject) {
    var bounds = new SuperMap.Bounds(jsonObject.bounds.left, jsonObject.bounds.bottom, jsonObject.bounds.right, jsonObject.bounds.top);
    return new SuperMap.REST.PathGuideItem({
        bounds: bounds,
        directionType: jsonObject.directionType,    
        distance: jsonObject.distance,
        id: jsonObject.id,
        index: jsonObject.index,
        isEdge: jsonObject.isEdge,
        isStop: jsonObject.isStop,
        length: jsonObject.length,
        name: jsonObject.name,
        sideType: jsonObject.sideType,
        turnAngle: jsonObject.turnAngle,
        turnType: jsonObject.turnType,
        weight: jsonObject.weight,
        description:jsonObject.description,
        geometry:SuperMap.REST.ServerGeometry.fromJson(jsonObject.geometry).toGeometry()
    });
};