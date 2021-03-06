/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    success: false,
    id: '-1',
    account_id: '-1',
    currentCompanyId: '-1',
    currentOpptyId: '-1',
    industry_id: '-1',
    currentRevenue: '-1',
    accountName: ' ',
    userName: ' ',
    email: ' ',
    pagesFromHome: '0',
    models: [
        'Search',
        'Detail',
        'Validate',
        'AccountScenarios',
        'CompanyScenarios',
        'OpportunityOverview',
        'SalesQuestions',
        'Saved',
        'ValueFormulas',
        'OpportunityCosts',
        'Assets',
        'DNBOverview',
        'Divisions',
        'Competitors',
        'Employees',
        'Kpis',
        'Ratios',
        'ClosestPeers',
        'CompRatios',
        'Success',
        'SecondarySQQ',
        'Scenario',
        'ScenarioCompetitors',
        'ScenarioAreas',
        'ScenarioIndustries',
        'ScenarioBaselines'
    ],
    stores: [
        'SearchStore',
        'DetailStore',
        'ValidateStore',
        'SavedStore',
        'AccountScenariosStore',
        'CompanyScenariosStore',
        'OpportunityOverviewStore',
        'SalesQuestionsStore',
        'ValueFormulasStore',
        'OpportunityCostsStore',
        'AssetsStore',
        'DNBOverviewStore',
        'DivisionsStore',
        'CompetitorsStore',
        'EmployeesStore',
        'KpisStore',
        'RatiosStore',
        'ClosestPeersStore',
        'CompRatiosStore',
        'SuccessStore',
        'SecondarySQQStore',
        'ScenarioStore',
        'ScenarioCompetitorsStore',
        'ScenarioAreasStore',
        'ScenarioIndustriesStore',
        'ScenarioBaselinesStore'
    ],
    views: [
        'MainView',
        'HomePanel',
        'NavMenu',
        'SearchPanel',
        'DetailPanel',
        'LoginPanel',
        'AccountScenariosPanel',
        'CompanyScenariosPanel',
        'CompanyViewPanel',
        'OpportunityCarousel',
        'SalesQuestionDetailPanel',
        'ValueFormulaDetailPanel',
        'OpportunityCostDetailPanel',
        'AssetDetailPanel',
        'DNBCarousel',
        'CompetitiveCarousel',
        'KpiDetailPanel',
        'PeerPerformanceDetailPanel',
        'SecondarySQQDetailPanel',
        'SupportPanel'
    ],
    controllers: [
        'Navigation',
        'Renames'
    ],
    name: 'MyApp',

    getUserId: function() {
        return this.id;
    },

    setUserId: function(id) {
        this.id = id;
    },

    isValidated: function() {
        return this.success;
    },

    setValidated: function(success) {
        this.success = success;
    },

    getAccountId: function() {
        return this.account_id;
    },

    setAccountId: function(account_id) {
        this.account_id = account_id;
    },

    getCurrentCompanyId: function() {
        return this.currentCompanyId;
    },

    setCurrentCompanyId: function(id) {
        this.currentCompanyId = id;
    },

    getCurrentOpptyId: function() {
        return this.currentOpptyId;
    },

    setCurrentOpptyId: function(oppty_id) {
        this.currentOpptyId = oppty_id;
    },

    getCurrentIndustryId: function() {
        return this.currentIndustryId;
    },

    setCurrentIndustryId: function(industry_id) {
        this.currentIndustryId = industry_id;
    },

    getCurrentRevenue: function() {
        return this.currentRevenue;
    },

    setCurrentRevenue: function(revenue) {
        this.currentRevenue = revenue;
    },

    getUserName: function() {
        return this.userName;
    },

    setUserName: function(userName) {
        this.userName = userName;
    },

    getAccountName: function() {
        return this.accountName;
    },

    setAccountName: function(accountName) {
        this.accountName = accountName;
    },

    getEmail: function() {
        return this.email;
    },

    setEmail: function(email) {
        this.email = email;
    },

    getPagesFromHome: function() {
        return this.pagesFromHome;
    },

    setPagesFromHome: function(pagesFromHome) {
        this.pagesFromHome = pagesFromHome;
    },

    incrementPagesFromHome: function() {
        this.pagesFromHome++;
    },

    decrementPagesFromHome: function() {
        this.pagesFromHome--;
    },

    launch: function() {

        Ext.create('MyApp.view.MainView', {fullscreen: true});
    }

});
