/*
 * File: app/model/OpportunityCosts.js
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

Ext.define('MyApp.model.OpportunityCosts', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'oppty_id'
            },
            {
                name: 'cost_type_id'
            },
            {
                name: 'accrual_type_id'
            },
            {
                name: 'cost'
            },
            {
                name: 'created'
            },
            {
                name: 'modified'
            },
            {
                name: 'name'
            },
            {
                name: 'accrual_name'
            }
        ]
    }
});