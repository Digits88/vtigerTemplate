{*<!--
/*********************************************************************************
** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
*
 ********************************************************************************/
-->*}
{include file="Header.tpl"|vtemplate_path:$MODULE}
{include file="BasicHeader.tpl"|vtemplate_path:$MODULE}

{strip}
{if $LOAD_OLD}
    <section id="main-content" style="min-height: 436px;">
        <section class="wrapper site-min-height">
            <div class="bodyContents">
                <div class="mainContainer row-fluid">
                    <div class="col-md-12">
                        <iframe id="ui5frame" src="{$UI5_URL}" width="100%" height="650px" style="border:0;"></iframe>
                    </div>      

{else}
    <section id="main-content" style="min-height: 436px;">
        <section class="wrapper site-min-height">
            <div class="bodyContents">
                <div class="mainContainer row-fluid">
                    <div class="col-md-3 row-fluid paddingLeftRight">
                        <section class="panel">
                        <div class="panel-body">
        				    <div>{include file='Sidebar.tpl'|@vtemplate_path:$QUALIFIED_MODULE}</div>
                        </div>
                        </section>
                    </div>

                    
            		         <div class="contentsDiv col-md-9 paddingRight marginLeftZero">
                                <section class="panel">
                                    <div class="panel-body">
{/if}
{/strip}
