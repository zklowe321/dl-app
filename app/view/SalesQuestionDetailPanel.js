/*
 * File: app/view/SalesQuestionDetailPanel.js
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

Ext.define('MyApp.view.SalesQuestionDetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.salesquestiondetailpanel',

    requires: [
        'Ext.Spacer',
        'Ext.field.Select',
        'Ext.Button',
        'Ext.field.Hidden'
    ],

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'textfield',
                itemId: 'salesQuestionField',
                label: 'Sales Question',
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
                itemId: 'engineEstimateField',
                label: 'Engine Estimate',
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
                itemId: 'revisedAnswerField',
                label: 'Revised Answer',
                labelWidth: '40%',
                labelWrap: true,
                readOnly: false
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'selectfield',
                itemId: 'sourceSelectField',
                label: 'Source',
                labelWidth: '40%',
                options: [
                    {
                        text: 'Choose Source',
                        value: 0
                    },
                    {
                        text: 'Customer',
                        value: 1
                    },
                    {
                        text: 'Estimate',
                        value: 2
                    },
                    {
                        text: 'Research',
                        value: 3
                    }
                ]
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'button',
                itemId: 'saveSQQButton',
                margin: 10,
                text: 'Save Sales Question'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'sqqIdField',
                readOnly: true
            }
        ]
    }

});