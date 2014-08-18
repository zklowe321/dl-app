/*
 * File: app/view/PeerPerformanceDetailPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('MyApp.view.PeerPerformanceDetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.peerPerformanceDetailPanel',

    requires: [
        'Ext.field.Text',
        'Ext.Spacer'
    ],

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'textfield',
                itemId: 'ratioNameField',
                label: 'Ratio',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'companyField',
                label: 'Company',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'peersField',
                label: 'Peers',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'onePercentField',
                label: '1%',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'm2aField',
                label: 'Move to Avg',
                labelWidth: '40%',
                labelWrap: true,
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'm2bField',
                label: 'Move to Best',
                labelWidth: '40%',
                labelWrap: true,
                readOnly: true
            }
        ]
    }

});