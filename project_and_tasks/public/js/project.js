frappe.ui.form.on('Project', {
	refresh(frm) {
        intro(frm)
		set_status(frm)
	}
})

function intro(frm)
{
    frm.set_intro(('{0}',
    [
        '<h3>Tasks for this Project</h3>'
        ]
    )
        )
}

function set_status(frm)
{
    let params = {
        'project': frm.doc.name
    }
    frappe.call('project_and_tasks.api.get_tasks', params).then((r) => {
        let total = r.message;
        let size = total.length;
        for(let i = 0; i< size; i++)
        {
            if (!frm.doc.description) {
                frm.set_intro(('{0}',
                      [
                        `<a href="/app/task/${total[i]}">${i+1}:${total[i]}</a>`,
                      ]), 'red');
            }
        }
    })
    
}