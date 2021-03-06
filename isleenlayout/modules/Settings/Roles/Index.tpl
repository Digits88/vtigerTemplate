{*+***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 *************************************************************************************}
{strip}
<div class="container-fluid">
	<div class="widget_header row-fluid">
		<div class="col-md-8 paddingLeft">
			<h3>{vtranslate($MODULE, $QUALIFIED_MODULE)}</h3>
	</div>	
	</div>
	<hr>
	<div class="clearfix treeView col-md-12 paddingLeftRight">
		<ul>
			<li data-role="{$ROOT_ROLE->getParentRoleString()}" data-roleid="{$ROOT_ROLE->getId()}">
				<div class="toolbar-handle">
					<a href="javascript:;" class="btn btn-inverse draggable droppable" rel="tooltip" title="{vtranslate('LBL_CLICK_TO_EDIT_OR_DRAG_TO_MOVE',$QUALIFIED_MODULE)}">{$ROOT_ROLE->getName()}</a>
					<div class="toolbar" title="{vtranslate('LBL_ADD_RECORD', $QUALIFIED_MODULE)}">
						&nbsp;<a href="{$ROOT_ROLE->getCreateChildUrl()}" data-url="{$ROOT_ROLE->getCreateChildUrl()}" data-action="modal"><span class="fa fa-plus-square"></span></a>
					</div>
				</div>
				{assign var="ROLE" value=$ROOT_ROLE}
				{include file=vtemplate_path("RoleTree.tpl", "Settings:Roles")}
			</li>
		</ul>
	</div>
</div>
{/strip}
