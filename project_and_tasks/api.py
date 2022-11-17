import frappe

@frappe.whitelist()
def get_tasks():
    project = frappe.form_dict.get('project')
    global a,b,c
    a = []
    b,c = [],[]
    all_tasks = frappe.get_all('Task', filters ={'project':project})
    for i in all_tasks:
        a.append((frappe.get_doc('Task',i)).name)
        b.append((frappe.get_doc('Task',i)).subject)
        c.append((frappe.get_doc('Task',i)).status)

    d = {
        "name":a,
        "subject":b,
        "status1":c
    }
    frappe.response.message = d