/*
 * File: app/view/DetailPanel.js
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

Ext.define('MyApp.view.DetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.detailpanel',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                hidden: false,
                itemId: 'detailList',
                itemTpl: [
                    '<ul>',
                    '    <li>Name: {name}</li>',
                    '    <li>Ticker: {ticker}</li>',
                    '    <li>Revenue: ${revenue} M</li>',
                    '    <li>Website: {url}</li>',
                    '</ul>'
                ],
                store: 'DetailStore'
            }
        ]
    }

});