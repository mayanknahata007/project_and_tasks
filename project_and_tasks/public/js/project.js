frappe.ui.form.on('Project', {
	refresh(frm) {
        console.log("Bhai ka app")
        intro(frm)
		set_status(frm)
	}
})

function intro(frm)
{
    if(!frm.is_new())
    {
        frm.set_intro(('{0}',
        [
            '<h3>Tasks for this Project</h3>'
            ]
        )
            )
    }
}

function set_status(frm)
{
    let params = {
        'project': frm.doc.name
    }
    frappe.call('project_and_tasks.api.get_tasks', params).then((r) => {
        let total = r.message;
        let name = total.name;
        let status = total.status1;
        let subject = total.subject;
        let size = name.length;
        for(let i = 0; i< size; i++)
        {
            if (!frm.doc.description && !frm.is_new()) {
                frm.set_intro(('',
                      [
                        `<a href="/app/task/${name[i]}">${i+1}:${subject[i]} - ${name[i]}</a>`,
                        `<p>${status[i]}</p>`,
                      ]), 'red');
            }
        }
    })
    
}