import frappe



@frappe.whitelist()
def get_tasks():
    project = frappe.form_dict.get('project')

    all_tasks = frappe.get_all('Task', filters ={'project':project})
    a = []
    for i in all_tasks:
        a.append((frappe.get_doc('Task',i)).name)

    frappe.response.message = a
