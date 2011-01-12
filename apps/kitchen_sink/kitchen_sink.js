var KitchenSink = KitchenSink || {};

M.Application.useTransitions = NO;
M.Application.name = 'KitchenSink';

document.write("<script src='models/task.js'></script>");
document.write("<script src='models/task_websql.js'></script>");

document.write("<script src='controllers/data_controller.js'></script>");
document.write("<script src='controllers/data_local_storage_task_app_controller.js'></script>");
document.write("<script src='controllers/data_web_sql_task_app_controller.js'></script>");
document.write("<script src='controllers/data_request_sample_controller.js'></script>");
document.write("<script src='controllers/controls_controller.js'></script>");
document.write("<script src='controllers/controls_button_view_controller.js'></script>");
document.write("<script src='controllers/controls_button_group_view_controller.js'></script>");
document.write("<script src='controllers/controls_dialog_view_controller.js'></script>");
document.write("<script src='controllers/controls_grid_view_controller.js'></script>");
document.write("<script src='controllers/controls_image_view_controller.js'></script>");
document.write("<script src='controllers/controls_label_view_controller.js'></script>");
document.write("<script src='controllers/controls_list_view_controller.js'></script>");
document.write("<script src='controllers/controls_loader_view_controller.js'></script>");
document.write("<script src='controllers/controls_searchbar_view_controller.js'></script>");
document.write("<script src='controllers/controls_selectionlist_view_controller.js'></script>");
document.write("<script src='controllers/controls_tabbar_view_controller.js'></script>");
document.write("<script src='controllers/controls_textfield_view_controller.js'></script>");
document.write("<script src='controllers/controls_toggle_view_controller.js'></script>");
document.write("<script src='controllers/controls_toolbar_view_controller.js'></script>");
document.write("<script src='views/controls_page_list_item_template.js'></script>");
document.write("<script src='views/tabs.js'></script>");
document.write("<script src='views/controls_page.js'></script>");
document.write("<script src='views/core_page.js'></script>");
document.write("<script src='views/utilities_page.js'></script>");
document.write("<script src='views/data_page_list_item_template.js'></script>");
document.write("<script src='views/data_page.js'></script>");
document.write("<script src='views/data_local_storage_task_app_template.js'></script>");
document.write("<script src='views/data_local_storage_task_app_page.js'></script>");
document.write("<script src='views/data_web_sql_task_app_template.js'></script>");
document.write("<script src='views/data_web_sql_task_app_page.js'></script>");
document.write("<script src='views/data_request_sample_page.js'></script>");
document.write("<script src='views/controls_button_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_button_view_page.js'></script>");
document.write("<script src='views/controls_button_view_page1.js'></script>");
document.write("<script src='views/controls_button_view_page2.js'></script>");
document.write("<script src='views/controls_button_view_page3.js'></script>");
document.write("<script src='views/controls_button_view_page4.js'></script>");
document.write("<script src='views/controls_button_view_page5.js'></script>");
document.write("<script src='views/controls_button_view_page6.js'></script>");
document.write("<script src='views/controls_button_group_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_button_group_view_page.js'></script>");
document.write("<script src='views/controls_button_group_view_page1.js'></script>");
document.write("<script src='views/controls_button_group_view_page2.js'></script>");
document.write("<script src='views/controls_button_group_view_page3.js'></script>");
document.write("<script src='views/controls_button_group_view_page4.js'></script>");
document.write("<script src='views/controls_button_group_view_page5.js'></script>");
document.write("<script src='views/controls_button_group_view_page6.js'></script>");
document.write("<script src='views/controls_button_group_view_page7.js'></script>");
document.write("<script src='views/controls_dialog_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_dialog_view_page.js'></script>");
document.write("<script src='views/controls_dialog_view_page1.js'></script>");
document.write("<script src='views/controls_dialog_view_page2.js'></script>");
document.write("<script src='views/controls_dialog_view_page3.js'></script>");
document.write("<script src='views/controls_dialog_view_page4.js'></script>");
document.write("<script src='views/controls_dialog_view_page5.js'></script>");
document.write("<script src='views/controls_grid_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_grid_view_page.js'></script>");
document.write("<script src='views/controls_grid_view_page1.js'></script>");
document.write("<script src='views/controls_grid_view_page2.js'></script>");
document.write("<script src='views/controls_grid_view_page3.js'></script>");
document.write("<script src='views/controls_image_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_image_view_page.js'></script>");
document.write("<script src='views/controls_image_view_page1.js'></script>");
document.write("<script src='views/controls_image_view_page2.js'></script>");
document.write("<script src='views/controls_label_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_label_view_page.js'></script>");
document.write("<script src='views/controls_label_view_page1.js'></script>");
document.write("<script src='views/controls_label_view_page2.js'></script>");
document.write("<script src='views/controls_label_view_page3.js'></script>");
document.write("<script src='views/controls_label_view_page4.js'></script>");
document.write("<script src='views/controls_label_view_page5.js'></script>");
document.write("<script src='views/controls_label_view_page6.js'></script>");
document.write("<script src='views/controls_list_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_list_view_page.js'></script>");
document.write("<script src='views/controls_list_view_page1_template.js'></script>");
document.write("<script src='views/controls_list_view_page1.js'></script>");
document.write("<script src='views/controls_list_view_page2_template.js'></script>");
document.write("<script src='views/controls_list_view_page2.js'></script>");
document.write("<script src='views/controls_list_view_page3_template.js'></script>");
document.write("<script src='views/controls_list_view_page3.js'></script>");
document.write("<script src='views/controls_list_view_page4_template.js'></script>");
document.write("<script src='views/controls_list_view_page4.js'></script>");
document.write("<script src='views/controls_list_view_page5_template.js'></script>");
document.write("<script src='views/controls_list_view_page5.js'></script>");
document.write("<script src='views/controls_list_view_page6_template.js'></script>");
document.write("<script src='views/controls_list_view_page6.js'></script>");
document.write("<script src='views/controls_loader_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_loader_view_page.js'></script>");
document.write("<script src='views/controls_loader_view_page1.js'></script>");
document.write("<script src='views/controls_searchbar_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_searchbar_view_page.js'></script>");
document.write("<script src='views/controls_searchbar_view_page1.js'></script>");
document.write("<script src='views/controls_searchbar_view_page2.js'></script>");
document.write("<script src='views/controls_searchbar_view_page3.js'></script>");
document.write("<script src='views/controls_searchbar_view_page4.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page1.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page2.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page3.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page4.js'></script>");
document.write("<script src='views/controls_selectionlist_view_page5.js'></script>");
document.write("<script src='views/controls_tabbar_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_tabbar_view_page.js'></script>");
document.write("<script src='views/controls_tabbar_view_page1.js'></script>");
document.write("<script src='views/controls_textfield_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_textfield_view_page.js'></script>");
document.write("<script src='views/controls_textfield_view_page1.js'></script>");
document.write("<script src='views/controls_textfield_view_page2.js'></script>");
document.write("<script src='views/controls_textfield_view_page3.js'></script>");
document.write("<script src='views/controls_textfield_view_page4.js'></script>");
document.write("<script src='views/controls_toggle_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_toggle_view_page.js'></script>");
document.write("<script src='views/controls_toggle_view_page1.js'></script>");
document.write("<script src='views/controls_toggle_view_page2.js'></script>");
document.write("<script src='views/controls_toggle_view_page3.js'></script>");
document.write("<script src='views/controls_toolbar_view_page_list_item_template.js'></script>");
document.write("<script src='views/controls_toolbar_view_page.js'></script>");
document.write("<script src='views/controls_toolbar_view_page1.js'></script>");
document.write("<script src='views/controls_toolbar_view_page2.js'></script>");
document.write("<script src='views/controls_toolbar_view_page3.js'></script>");
document.write("<script src='views/controls_toolbar_view_page4.js'></script>");
document.write("<script src='views/controls_toolbar_view_page5.js'></script>");
