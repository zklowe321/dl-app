/*
 * File: app/view/KpiDetailPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.KpiDetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.kpidetailpanel',

    requires: [
        'Ext.field.Text',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'textfield',
                itemId: 'kpiNameField',
                label: 'KPI',
                labelWidth: '40%'
            },
            {
                xtype: 'textfield',
                itemId: 'kpiTotalField',
                label: 'KPI Total',
                labelWidth: '40%'
            },
            {
                xtype: 'container',
                flex: 1,
                itemId: 'kpiDetailListContainer',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'kpiDetailList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{name}'
                        ]
                    }
                ]
            }
        ]
    }

});